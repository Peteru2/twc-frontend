type EventItem = {
  id: number
  flier: string[]
  title: string
  dateISO: string
  dateDisplay: string
  location: string
}

export type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const events: EventItem[] = [
  {
    id: 1,
    flier: ["/anni.jpg", "/80days.jpg"],
    title: "10TH YEARS ANNIVERSARY",
    dateISO: "2026-05-01T00:00:00",
    dateDisplay: "1ST MAY – 7TH MAY, 2026",
    location:
      "True Worshippers Church, Oke Anu Area, Ogbomoso",
    
  },
  {
    id: 2,
    flier: ["/fadurayinmi.jpg","/fadurayinmi.jpg"],
    title: "FADURAYIMIN",
    dateISO: "",
    dateDisplay: "15TH JULY, 2026",
    location: "Main Auditorium",
  },
 {
    id: 3,
    flier: ["/diaspora.jpg","/diaspora.jpg"],
    title: "DIASPORAL BRETHREN",
    dateISO: "",
    dateDisplay: "22ND FEBRUARY, 2026",
    location: "Main Auditorium",
  },
 
]

export {
    events
}