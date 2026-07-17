"use client";

import { useEffect, useRef } from "react";

const map = (v: number, a: number, b: number, c: number, d: number) =>
    ((v - a) / (b - a)) * (d - c) + c;

const TWO_PI = 2 * Math.PI;

function parseRGB(str: string): { r: number; g: number; b: number } {
    if (!str) return { r: 255, g: 255, b: 255 };
    const m = str.match(/rgba?\(([^)]+)\)/i);
    if (m) {
        const [r, g, b] = m[1].split(",").map((n) => parseInt(n.trim(), 10));
        return { r, g, b };
    }
    let hex = str.replace(/^#/, "");
    if (hex.length === 3)
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    if (hex.length >= 6)
        return {
            r: parseInt(hex.slice(0, 2), 16),
            g: parseInt(hex.slice(2, 4), 16),
            b: parseInt(hex.slice(4, 6), 16),
        };
    return { r: 255, g: 255, b: 255 };
}

interface CanvasState {
    width: number;
    height: number;
    dpr: number;
    isVisible: boolean;
    isPageVisible: boolean;
    animationId: number;
    frameCount: number;
    lastDrawTime: number;
}

function useCanvasAnimation({
    alpha = false,
    onSetup,
    onResize,
    onDraw,
    resizeDebounce = 250,
    fps = 30,
}: {
    alpha?: boolean;
    onSetup?: (ctx: CanvasRenderingContext2D, state: CanvasState) => void;
    onResize?: (ctx: CanvasRenderingContext2D, state: CanvasState) => void;
    onDraw: (
        ctx: CanvasRenderingContext2D,
        state: CanvasState
    ) => boolean | void;
    resizeDebounce?: number;
    fps?: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stateRef = useRef<CanvasState>({
        width: 0,
        height: 0,
        dpr: 1,
        isVisible: true,
        isPageVisible: true,
        animationId: 0,
        frameCount: 0,
        lastDrawTime: 0,
    });

    const onDrawRef = useRef(onDraw);
    onDrawRef.current = onDraw;
    const onSetupRef = useRef(onSetup);
    onSetupRef.current = onSetup;
    const onResizeRef = useRef(onResize);
    onResizeRef.current = onResize;
    const fpsRef = useRef(fps);

    useEffect(() => {
        fpsRef.current = fps;
    }, [fps]);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;
        const ctx = canvas.getContext("2d", { alpha });
        if (!ctx) return;
        const st = stateRef.current;

        const setup = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            const rect = container.getBoundingClientRect();
            st.width = rect.width;
            st.height = rect.height;
            st.dpr = dpr;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const minFrameInterval = 1000 / fpsRef.current;

        const loop = (timestamp: number) => {
            const elapsed = timestamp - st.lastDrawTime;
            if (elapsed >= minFrameInterval) {
                st.lastDrawTime = timestamp;
                st.frameCount += 1;
                onDrawRef.current(ctx, st);
            }
            // Always reschedule — never kill the loop
            st.animationId = requestAnimationFrame(loop);
        };

        const start = () => {
            if (!st.isVisible || !st.isPageVisible) return;
            if (st.animationId) return;
            st.animationId = requestAnimationFrame(loop);
        };
        const stop = () => {
            if (st.animationId) {
                cancelAnimationFrame(st.animationId);
                st.animationId = 0;
            }
        };

        const onPageVis = () => {
            st.isPageVisible = document.visibilityState === "visible";
            st.isVisible && st.isPageVisible ? start() : stop();
        };

        const io = new IntersectionObserver(
            (entries) => {
                st.isVisible = entries[0]?.isIntersecting ?? true;
                st.isVisible && st.isPageVisible ? start() : stop();
            },
            { threshold: 0 }
        );

        setup();
        io.observe(container);
        onSetupRef.current?.(ctx, st);
        start();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const onResizeEv = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setup();
                onResizeRef.current?.(ctx, st);
            }, resizeDebounce);
        };

        window.addEventListener("resize", onResizeEv, { passive: true });
        document.addEventListener("visibilitychange", onPageVis);

        return () => {
            stop();
            clearTimeout(resizeTimer);
            io.disconnect();
            window.removeEventListener("resize", onResizeEv);
            document.removeEventListener("visibilitychange", onPageVis);
        };
    }, [alpha, resizeDebounce]);

    return { containerRef, canvasRef, stateRef };
}

interface WaveArcsBackgroundProps {
    lineColor?: string;
    lineWidth?: number;
    lineCount?: number;
    speed?: number;
    glow?: number;
    interactive?: boolean;
}

export default function WaveArcsBackground({
    lineColor = "rgba(160, 160, 180, 0.7)",
    lineWidth = 1.5,
    lineCount = 68,
    speed = 3,
    glow = 10,
    interactive = true,
}: WaveArcsBackgroundProps) {
    const isMobileRef = useRef(false);
    const reducedMotionRef = useRef(false);
    const mouseRef = useRef({ y: 0, targetY: 0 });

    const { containerRef, canvasRef, stateRef } = useCanvasAnimation({
        fps: 30,

        onSetup: (_ctx, st) => {
            isMobileRef.current = st.width < 768;
            reducedMotionRef.current = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            mouseRef.current.targetY = st.height / 2;
            mouseRef.current.y = st.height / 2;
        },

        onDraw: (e, t) => {
            const isMobile = isMobileRef.current;
            const reducedMotion = reducedMotionRef.current;
            const { width: r, height: i, frameCount: fc } = t;
            const mouse = mouseRef.current;

            // Paint the background fill every frame so nothing disappears
            e.fillStyle = "#0F0F0F";
            e.fillRect(0, 0, r, i);

            if (!reducedMotion) {
                mouse.y = mouse.y + (mouse.targetY - mouse.y) * 0.08;
            }

            const u = 55000 / glow;
            const { r: cr, g: cg, b: cb } = parseRGB(lineColor);

            e.save();
            e.lineWidth = isMobile ? lineWidth * 0.6 : lineWidth;
            e.translate(r / 2, i + (isMobile ? 60 : 40));

            const f = interactive && !reducedMotion && !isMobile
                ? map(mouse.y, 0, i, 1.2, -1.2)
                : 0;
            const m = Math.max(320, Math.min(1440, r));
            const rate = map(m, 320, 1440, 0.002, 5e-4) * (speed / 5);
            const p = fc * rate;
            const h = r / 2;

            // Mobile: fewer lines, desktop: full count
            const x = isMobile
                ? Math.round(lineCount * 0.45)
                : reducedMotion
                ? Math.round(lineCount * 0.6)
                : lineCount;

            for (let k = 0; k < x; k++) {
                let ang = map(k, 0, x, 0, Math.PI) + p;
                ang %= Math.PI;
                const l = (Math.tan(ang) - f) * i;
                const a = Math.abs(l) / 2;
                const yCenter = -i / 2 + l / 2;
                const bright =
                    Math.max(
                        0,
                        Math.min(255, map(Math.abs(l), 0, u, -20, 255))
                    ) / 255;
                if (bright <= 0) continue;

                e.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${bright})`;

                if (a > 499999.5) {
                    e.beginPath();
                    e.moveTo(-h, -i / 2);
                    e.lineTo(h, -i / 2);
                    e.stroke();
                    continue;
                }

                const c2 = Math.acos(Math.min(1, (h + 50) / a));
                const segTotal = Math.max(Math.ceil(a / 160), 120);
                const spans: [number, number][] = [
                    [c2, Math.PI - c2],
                    [Math.PI + c2, TWO_PI - c2],
                ];
                for (const [start, end] of spans) {
                    const span = end - start;
                    const n3 = Math.max(
                        Math.ceil((span / TWO_PI) * segTotal),
                        30
                    );
                    const step = span / n3;
                    e.beginPath();
                    for (let s = 0; s <= n3; s++) {
                        const aa = start + step * s;
                        const xx = Math.cos(aa) * a;
                        const yy = yCenter + Math.sin(aa) * a;
                        s === 0 ? e.moveTo(xx, yy) : e.lineTo(xx, yy);
                    }
                    e.stroke();
                }
            }

            e.restore();
        },
    });

    useEffect(() => {
        if (!interactive || isMobileRef.current) return;
        const container = containerRef.current;
        if (!container) return;
        let rect = container.getBoundingClientRect();
        const onMove = (ev: MouseEvent) => {
            if (stateRef.current.isVisible)
                mouseRef.current.targetY = ev.clientY - rect.top;
        };
        let rafId = 0;
        const onScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rect = container.getBoundingClientRect();
                rafId = 0;
            });
        };
        document.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            document.removeEventListener("mousemove", onMove);
            window.removeEventListener("scroll", onScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [interactive, containerRef, stateRef]);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{ width: "100%", height: "100%", display: "block" }}
            />
        </div>
    );
}