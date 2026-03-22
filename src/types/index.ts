export interface Language {
  name: string;
  level: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Education {
  degree: string;
  university: string;
  shortName: string;
  sgpa: number;
  start: string;
  end: string;
  notes: string[];
}

export interface Person {
  name: string;
  initials: string;
  tagline: string;
  taglineAccent: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  openToWork: boolean;
  education: Education;
  stats: Stat[];
  languages: Language[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "wip" | "api" | "archived";
  github: string;
  live: string;
  image: string;
  featured: boolean;
  gradient: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  type: "internship" | "opensource" | "parttime";
  description: string;
  start: string;
  end: string;
  logo: string;
  logoBg: string;
  logoColor: string;
  logoInitials: string;
  metric: string;
  tags: string[];
  bullets: string[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface MarqueeTech {
  name: string;
  color: string;
}

export interface Skills {
  marquee: MarqueeTech[];
  categories: SkillCategory[];
}

export interface OpenSourceItem {
  id: string;
  repo: string;
  org: string;
  orgUrl: string;
  repoUrl: string;
  description: string;
  stat: string;
}

export interface Hackathon {
  id: string;
  event: string;
  placement: string;
  level: string;
  year: string;
  medalType: "gold" | "silver" | "bronze";
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  medalType: "gold" | "silver" | "bronze";
}

export interface Hobby {
  name: string;
  color: string;
}