import type { LucideIcon } from 'lucide-react';

export type EventItem = {
  id: number
  title1: string
  title2:string
  tag: string
  description: string
  image: string
}

export interface NavLink {
  name: string;
  path: string;
  icon?: LucideIcon | string; 
}


export interface SocialLink {
  icon: LucideIcon;
  link: string;
}


export interface BasicLink {
  name?: string;
  text?: string; 
  path?: string;
  link?: string;
}
export type Sermon = {
  id: number
  title: string
  text: string
  category: string
  preacher: string
  date: string
  duration: string
  image: string
  audio: string
}