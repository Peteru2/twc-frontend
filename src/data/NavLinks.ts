import type {NavLink,SocialLink,BasicLink} from "../components/types"


import { 
  Instagram, Twitter, Youtube, Facebook, 
  Home, Info, Calendar, Mic, Users, Heart 
} from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: "ABOUT", path: "/about", icon: Info },
  { name: "EVENT", path: "/event", icon: Calendar },
  { name: "SERMONS", path: "/sermons", icon: Mic },
  { name: "PASTORAL TEAM", path: "/pastoralteam", icon: Users },
  { name: "GIVE", path: "/give", icon: Heart },
];

export const navLinksMobile: NavLink[] = [
  { name: "HOME", path: "/", icon: Home },
  ...navLinks, 
];

export const footerLinks: BasicLink[] = [
  { name: "Become a member", path: "/members" },
  { name: "Prayer Request", path: "/prayer" },
  { name: "First Timers", path: "/firsttimer" },
  { name: "Online Community", path: "/onlinecommunity" },
  { name: "Celebrations", path: "/celebration" },
];

export const media: BasicLink[] = [
  { text: "Media", link: "" },
  { text: "Sermons", link: "/sermons" },
];

export const socialMedia: SocialLink[] = [
  { icon: Instagram, link: "https://www.instagram.com/trueworshippersglobal/" },
  { icon: Twitter, link: "" },
  { icon: Youtube, link: "https://www.youtube.com/@TrueWorshippersChurch" },
  { icon: Facebook, link: "https://www.facebook.com/trueworshippersglobal1" },
];

