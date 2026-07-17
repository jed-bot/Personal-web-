import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  GmailIcon,
} from "@/icons/social";
import type { IProfileRepository } from "../repositories";
import type { SocialLink, ContactChannel, Stat, NavLink } from "../types";

export class ProfileRepository implements IProfileRepository {
  getSocials(): SocialLink[] {
    return [
      {
        label: "GitHub",
        href: "https://github.com/jed-bot-1",
        icon: <GitHubIcon />,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jed-nikko-san-agustin-91239a327/",
        icon: <LinkedInIcon />,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/jednikkooo",
        icon: <FacebookIcon />,
      },
      {
        label: "Gmail",
        href: "mailto:jednikkosanagustin@gmail.com",
        icon: <GmailIcon />,
      },
    ];
  }

  getChannels(): ContactChannel[] {
    return [
      {
        label: "jednikkosanagustin@gmail.com",
        href: "mailto:jednikkosanagustin@gmail.com",
        icon: <GmailIcon />,
      },
      {
        label: "linkedin.com/in/jed-nikko-san-agustin",
        href: "https://www.linkedin.com/in/jed-nikko-san-agustin-91239a327/",
        icon: <LinkedInIcon />,
      },
      {
        label: "github.com/jed-bot-1",
        href: "https://github.com/jed-bot-1",
        icon: <GitHubIcon />,
      },
    ];
  }

  getStats(): Stat[] {
    return [
      { num: 3, suffix: "+", label: "Years Experience" },
      { num: 15, suffix: "+", label: "Projects Delivered" },
      { num: 10, suffix: "+", label: "Technologies" },
    ];
  }

  getNavLinks(): NavLink[] {
    return [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ];
  }

  getEmail(): string {
    return "jednikkosanagustin@gmail.com";
  }
}