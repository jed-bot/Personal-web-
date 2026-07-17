'use client';

import { useState, useRef, useCallback } from 'react';

export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rippleTimerRefs = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const copy = useCallback(async (text: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const id = Date.now();
      setRipples(prev => [...prev, { x, y, id }]);
      const rippleTimer = setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id));
        rippleTimerRefs.current.delete(id);
      }, 600);
      rippleTimerRefs.current.set(id, rippleTimer);
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return { copied, ripples, copy };
}