export interface EventItem {
  _id: string;
  title: string;
  description: string;
  flier: string[];
  startDate: string;
  endDate: string;
  dateDisplay: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventsResponse {
  hero: EventItem | null;
  ongoing: EventItem[];
  upcoming: EventItem[];
  past: EventItem[];
}