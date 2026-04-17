export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  slug: string;
  coverImage: string;
  liveUrl?: string;
  repoUrl?: string;
  year: number;
  color: string;
  status?: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}
