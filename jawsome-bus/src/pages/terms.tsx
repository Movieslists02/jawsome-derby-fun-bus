import { motion } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Jawsome Derby Fun Bus Experience</title>
        <meta name="description" content="Terms of Service for Jawsome Derby Fun Bus Experience. Please read these terms carefully before booking or using our services." />
      </Helmet>

      {/* HERO */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Legal
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl uppercase text-foreground leading-none mb-4">
              Terms of<br /><span className="text-primary">Service</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-sm">
              Last updated: June 7, 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl flex flex-col gap-10"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                By accessing our website or booking a seat on the Jawsome Derby Fun Bus Experience, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. These terms apply to all visitors, users, and customers.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Booking & Reservations</h2>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span>All bookings are subject to availability. Submitting a booking request does not guarantee a confirmed seat until you receive written confirmation from us.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span>You must be 18 years of age or older to make a booking. Guests under 21 may not consume alcohol on board, in accordance with applicable law.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span>You are responsible for providing accurate contact information at the time of booking. We are not liable for missed communications due to incorrect details.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span>Group bookings of 10 or more are subject to separate group rate terms communicated at the time of inquiry.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Cancellations & Refunds</h2>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">14+ days before the event:</strong> Full refund, minus any processing fees.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">7–13 days before the event:</strong> 50% refund or full credit toward a future event.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">Less than 7 days before the event:</strong> No refund. Seat transfers to another person are permitted with advance notice.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span>If Jawsome Racing cancels an event due to circumstances within our control, you will receive a full refund or credit. We are not responsible for cancellations due to weather, track closures, or other circumstances beyond our control.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Conduct on Board</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-2">
                All passengers are expected to behave in a respectful and lawful manner. Jawsome Racing reserves the right to remove any passenger from the bus — without refund — for behavior that is disruptive, threatening, or endangers the safety of others, including:
              </p>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  'Excessive intoxication or disruptive behavior',
                  'Harassment or threatening conduct toward other passengers or staff',
                  'Damage to the vehicle or property',
                  'Violation of any applicable laws',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">What's Included</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Each ticket includes round trip bus transportation, food and non-alcoholic beverages on board, and general admission to Saratoga Race Course. Alcoholic beverages may be available on board for guests 21 and older. Ticket prices do not include personal wagers, premium seating upgrades at the track, or any purchases made at the venue.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Liability Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Participation in the Jawsome Derby Fun Bus Experience is at your own risk. Jawsome Racing is not liable for any personal injury, loss, or damage to personal property that occurs during the event, on the bus, or at the racetrack, except where caused by our gross negligence. By booking, you acknowledge and accept these risks.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                All content on this website — including text, graphics, logos, and images — is the property of Jawsome Racing and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                These Terms of Service are governed by and construed in accordance with the laws of the State of New York. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Albany County, New York.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site or our services after any changes constitutes your acceptance of the revised terms.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 border border-border rounded-lg p-6">
              <h2 className="font-heading text-3xl uppercase text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                If you have questions about these Terms of Service, please reach out:
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Jawsome Racing</strong></p>
                <p>Email: <a href="mailto:hello@jawsomederby.com" className="text-primary hover:brightness-110 transition-colors">hello@jawsomederby.com</a></p>
                <p>Phone: <a href="tel:+15185550100" className="text-primary hover:brightness-110 transition-colors">(518) 555-0100</a></p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
