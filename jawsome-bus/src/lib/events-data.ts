export interface RaceEvent {
 id: string;
 title: string;
 date: string;
 dateDisplay: string;
 description: string;
 longDescription: string;
 price: number;
 vipPrice: number;
 totalSeats: number;
 seatsLeft: number;
 badge?: string;
 imgSlot: string;
}


export const EVENTS: RaceEvent[] = [
 {
   id: 'opening-weekend-2026',
   title: 'Saratoga Opening Weekend',
   date: '2026-07-24',
   dateDisplay: 'July 24–25, 2026',
   description: 'Kick off the season right. Opening weekend energy is unmatched.',
   longDescription:
     'The most anticipated weekend of the Saratoga season. The crowds are electric, the fashion is on point, and the racing is world-class. Join us for the official start of the summer meet — round trip bus, admission, food & drinks all included.',
   price: 195,
   vipPrice: 295,
   totalSeats: 40,
   seatsLeft: 18,
   badge: 'Most Popular',
   imgSlot: '/assets/event-opening.jpg',
 },
 {
   id: 'travers-stakes-2026',
   title: 'Travers Stakes Weekend',
   date: '2026-08-22',
   dateDisplay: 'August 22–23, 2026',
   description: 'The Midsummer Derby. One of the most prestigious races of the season.',
   longDescription:
     'The Travers Stakes is the crown jewel of the Saratoga meet — a Grade I race for three-year-olds that draws the best horses in the country. This is a bucket-list race day. Limited seats available.',
   price: 195,
   vipPrice: 295,
   totalSeats: 40,
   seatsLeft: 9,
   badge: 'Selling Fast',
   imgSlot: '/assets/event-travers.jpg',
 },
 {
   id: 'special-event-aug8',
   title: 'Special Event Day — Aug 8',
   date: '2026-08-08',
   dateDisplay: 'August 8, 2026',
   description: 'Themed race day with hat contests and exclusive activities.',
   longDescription:
     'One of Saratoga\'s famous themed race days — hat contests, special promotions, and a full card of exciting racing. A great day for first-timers and regulars alike.',
   price: 195,
   vipPrice: 295,
   totalSeats: 40,
   seatsLeft: 24,
   badge: undefined,
   imgSlot: '/assets/event-special.jpg',
 },
 {
   id: 'special-event-aug15',
   title: 'Special Event Day — Aug 15',
   date: '2026-08-15',
   dateDisplay: 'August 15, 2026',
   description: 'Mid-season special with premium race card and festivities.',
   longDescription:
     'A premium mid-season race day featuring some of the best horses of the summer meet. Great racing, great company, and the full Jawsome experience.',
   price: 195,
   vipPrice: 295,
   totalSeats: 40,
   seatsLeft: 30,
   badge: undefined,
   imgSlot: '/assets/horses-racing.jpg',
 },
];


export function getEventById(id: string): RaceEvent | undefined {
 return EVENTS.find((e) => e.id === id);
}