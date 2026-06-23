import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Hotel,
  MapPin,
  ShieldCheck,
  Users,
  Heart,
} from 'lucide-react';

const registerLink = 'PASTE_BUCKET_LIST_EVENTS_LINK_HERE'; // Replace with Bucket List Events registration/payment link

const includes = [
  'Three-night hotel stay: check in Thursday, check out Sunday',
  'Welcome drinks Thursday at the hotel',
  'Experience Kentucky Tour with Buffalo Trace distillery and Lane’s End horse farm',
  'Lunch included on Friday tour',
  'Reserved seats for the 153rd Kentucky Derby',
  'Food and drinks included on Derby Day',
  'Round-trip Derby transportation to and from Churchill Downs',
  'Pre-trip planning, on-site host, and local assistance',
  'All taxes and service charges included',
];

const seating = [
  {
    title: '1st Floor Clubhouse',
    desc: 'Sections 113–117. Close to the finish line and close to the action.',
    prices: [
      'Hyatt Regency, Lexington: $3,995 per person',
      'Holiday Inn Express, Louisville: $4,795 per person',
      'Galt House Hotel, Louisville: $6,295 per person',
      'Grady Hotel, Louisville: $7,795 per person',
    ],
  },
  {
    title: '3rd Floor Grandstand Under Cover',
    desc: 'Sections 323–325, Row C or higher. Better elevated track view.',
    prices: [
      'Hyatt Regency, Lexington: $4,650 per person',
      'Holiday Inn Express, Louisville: $5,395 per person',
      'Galt House Hotel, Louisville: $6,895 per person',
      'Grady Hotel, Louisville: $8,395 per person',
    ],
  },
  {
    title: '3rd Floor Clubhouse Under Cover',
    desc: 'Sections 316–322, Row C or higher. Great people watching and clubhouse access.',
    prices: [
      'Hyatt Regency, Lexington: $5,450 per person',
      'Holiday Inn Express, Louisville: $6,195 per person',
      'Galt House Hotel, Louisville: $7,695 per person',
      'Grady Hotel, Louisville: $9,195 per person',
    ],
  },
];

export default function DerbyPage() {
  return (
    <>
      <Helmet>
        <title>Kentucky Derby 2027 | Jawsome Derby Fun Bus</title>
        <meta
          name="description"
          content="Kentucky Derby 2027 travel packages, group discounts, payment plans, hotel options, reserved Derby seats, and Tunnel to Towers give back."
        />
      </Helmet>

      <section className="min-h-[85vh] flex items-center bg-background border-b border-border">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-5xl">
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
              April 29 – May 2, 2027 • Louisville, Kentucky
            </p>

            <h1 className="font-heading text-5xl md:text-7xl uppercase text-foreground leading-none">
              Kentucky Derby <span className="text-primary">2027 Experience</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Big hats, celebrity parties, bourbon tasting, high fashion, people watching,
              and thrilling horse racing. Whether you are new to racing or a seasoned fan,
              Derby weekend is a bucket-list experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="border border-primary/40 rounded px-5 py-3">
                <span className="block text-xs text-muted-foreground uppercase tracking-widest">
                  Starting At
                </span>
                <span className="font-heading text-3xl text-primary">$4,999</span>
                <span className="text-muted-foreground text-sm ml-1">per person</span>
              </div>

              <div className="border border-primary/40 rounded px-5 py-3">
                <span className="block text-xs text-muted-foreground uppercase tracking-widest">
                  Group Offer
                </span>
                <span className="font-heading text-3xl text-primary">10% Off</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={registerLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase rounded hover:brightness-110 transition-all"
              >
                Register Through Bucket List Events <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-bold uppercase rounded hover:border-primary hover:text-primary transition-all"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <MapPin className="text-primary mb-4" />
            <h3 className="font-heading text-2xl uppercase">Local Kentucky Access</h3>
            <p className="text-muted-foreground mt-3">
              Hosted by a team with Kentucky connections, including access to major Derby weekend experiences.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <Users className="text-primary mb-4" />
            <h3 className="font-heading text-2xl uppercase">Transportation Solved</h3>
            <p className="text-muted-foreground mt-3">
              Derby transportation can be difficult. Guests receive round-trip transportation close to Churchill Downs.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <ShieldCheck className="text-primary mb-4" />
            <h3 className="font-heading text-2xl uppercase">Covered Seat Advice</h3>
            <p className="text-muted-foreground mt-3">
              Guests are encouraged to choose seats under cover to protect from sun or rain.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Package Includes
          </p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-10">
            Everything Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex gap-3 border border-border rounded-lg p-4">
                <CheckCircle className="text-primary shrink-0" size={20} />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Seating Options
          </p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-10">
            Derby Packages
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {seating.map((seat) => (
              <div key={seat.title} className="border border-border rounded-lg p-6 flex flex-col gap-4">
                <h3 className="font-heading text-3xl uppercase text-foreground">{seat.title}</h3>
                <p className="text-muted-foreground">{seat.desc}</p>

                <div className="flex flex-col gap-2 mt-2">
                  {seat.prices.map((price) => (
                    <p key={price} className="text-sm text-muted-foreground border-t border-border pt-2">
                      {price}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Pricing is based on double occupancy. Single, triple, or quadruple pricing may be available by request.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-border rounded-lg p-8">
            <Hotel className="text-primary mb-4" size={36} />
            <h2 className="font-heading text-3xl uppercase text-foreground">
              Hotel Options
            </h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Hyatt Regency, Lexington</li>
              <li>Holiday Inn Express, Louisville</li>
              <li>Galt House Hotel, Louisville</li>
              <li>Grady Hotel, Louisville</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-8">
            <Calendar className="text-primary mb-4" size={36} />
            <h2 className="font-heading text-3xl uppercase text-foreground">
              Payment Plans Available
            </h2>
            <p className="mt-4 text-muted-foreground">
              Flexible payment plans are available through Bucket List Events.
              Guests can make a deposit and complete automatic monthly payments for the balance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="border border-primary/40 rounded-lg p-8 md:p-10">
            <Heart className="text-primary mb-4" size={42} />
            <h2 className="font-heading text-4xl uppercase text-foreground">
              Tunnel to Towers Give Back
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl">
              Jawsome Racing will highlight that 15% is given back in support of Tunnel to Towers,
              honoring the memory of the 9/11 victims and those who sacrificed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-6xl uppercase text-foreground">
            Ready for Derby Weekend?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Register through Bucket List Events or contact us for group questions and package guidance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={registerLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase rounded hover:brightness-110 transition-all"
            >
              Register Through Bucket List Events <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-border text-foreground font-bold uppercase rounded hover:border-primary hover:text-primary transition-all"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}