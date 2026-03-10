export interface DashboardStats {
  members: number;
  prayerRequests: number;
  firstTimers: number;
  onlineCommunity: number;
  celebrations: number;
}

export interface PrayerRequest {
  _id: string;
  name: string;
  request: string;
  createdAt: string;
}

export interface FirstTimer {
  _id: string;
  name: string;
  createdAt: string;
}

export interface Celebration {
  _id: string;
  title: string;
  date: string;
}
export interface Admin {
     _id: string;
    name: string;
    role: string
    createdAt:string
}

export interface DashboardResponse {
  stats: DashboardStats;
  admin:Admin;
  recent: {
    prayerRequests: PrayerRequest[];
    firstTimers: FirstTimer[];
    celebrations: Celebration[];
  };
}