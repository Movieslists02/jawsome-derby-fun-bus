import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { EVENTS } from '@/lib/events-data';
import { supabase } from '@/lib/supabase';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function SeatBar({ total, left }: { total: number; left: number }) {
  const booked = total - left;
  const bookedPct = Math.round((booked / total) * 100);
  const leftPct = Math.round((left / total) * 100);

  const color =
    left <= 10 ? 'bg-red-500' : left <= 24 ? 'bg-yellow-500' : 'bg-primary';

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{left} seats remaining</span>
        <span>{booked} booked</span>
      </div>

      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${bookedPct}%` }}
          title={`${booked} of ${total} seats booked`}
        />
      </div>

      <div className="flex justify-between text-[11px] text-muted-foreground">
        <span>{leftPct}% available</span>
        <span>{bookedPct}% booked</span>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [liveSeats, setLiveSeats] = useState<Record<string, number>>({});

  useEffect(() => {
    async function loadSeats() {
      const { data, error } = await supabase
        .from('events')
        .select('id, total_seats, booked_seats');

      if (error) {
        console.error('Failed to load event seats:', error);
        return;
      }

      const seatMap: Record<string, number> = {};

      data?.forEach((event) => {
        seatMap[event.id] = event.total_seats - event.booked_seats;
      });

      setLiveSeats(seatMap);
    }

    loadSeats();
  }, []);

  return (
    <>
      <Helmet>
        <title>Race Day Events — Jawsome Racing</title>
        <meta
          name="description"
          content="Browse all Saratoga race day events. Book your Fun Bus seat for Opening Weekend, Travers Stakes, and special event days."
        />
      </Helmet>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl flex flex-col gap-4"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
            >
              2026 Season
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl md:text-6xl text-white leading-none"
            >
              Race Day Events
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/70">
              Pick your race day. Seats are limited — once they're gone, they're gone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            {EVENTS.map((event) => {
              const seatsLeft = liveSeats[event.id] ?? event.seatsLeft;

              return (
                <motion.div
                  key={event.id}
                  variants={fadeUp}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group bg-card border border-border hover:border-primary rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-72 h-52 md:h-auto shrink-0 overflow-hidden">
                      <img
                        src={event.imgSlot}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 md:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />

                      {event.badge && (
                        <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider bg-primary text-black px-2.5 py-1 rounded">
                          {event.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <h2 className="font-heading text-2xl md:text-3xl text-foreground leading-tight">
                            {event.title}
                          </h2>

                          <div className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1.5 text-xs text-primary font-semibold uppercase tracking-wider">
                              <Calendar size={12} /> {event.dateDisplay}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-heading text-4xl text-primary">
                            ${event.price}
                          </span>
                          <p className="text-xs text-muted-foreground">per person</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.longDescription}
                      </p>

                      <SeatBar total={event.totalSeats} left={seatsLeft} />

                      <div className="flex flex-wrap gap-2">
                        {['Round trip bus', 'Admission included', 'Food & drinks'].map((item) => (
                          <span
                            key={item}
                            className="text-xs border border-border text-muted-foreground px-3 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                     <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
  {seatsLeft <= 0 ? (
    <button
      disabled
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded cursor-not-allowed opacity-80"
    >
      Sold Out
    </button>
  ) : (
    <Link
      to={`/book?event=${event.id}`}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider rounded transition-all hover:brightness-110 hover:scale-105"
    >
      Reserve Your Spot <ArrowRight size={14} />
    </Link>
  )}

  <div className="flex items-center gap-2 text-xs text-muted-foreground">
    <Users size={13} />
    <span className={seatsLeft <= 10 ? 'text-red-400 font-semibold' : ''}>
      {seatsLeft <= 0
        ? 'Sold out'
        : seatsLeft <= 10
          ? `Only ${seatsLeft} seats left!`
          : `${seatsLeft} seats available`}
    </span>
  </div>
</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 bg-muted border border-border rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-heading text-2xl text-foreground">
                Booking for a group?
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Groups of 8+ get special rates. Contact the event team to arrange a group booking.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-bold text-sm uppercase tracking-wider rounded transition-all hover:bg-primary hover:text-black"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}