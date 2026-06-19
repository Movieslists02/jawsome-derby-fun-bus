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

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Jawsome Derby Fun Bus Experience</title>
        <meta name="description" content="Privacy Policy for Jawsome Derby Fun Bus Experience. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      {/* HERO */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Legal
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl uppercase text-foreground leading-none mb-4">
              Privacy<br /><span className="text-primary">Policy</span>
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
              <h2 className="font-heading text-3xl uppercase text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Jawsome Racing ("we," "us," or "our") operates the Jawsome Derby Fun Bus Experience website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a booking with us. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">Personal Data:</strong> Name, email address, and phone number that you voluntarily provide when making a booking or contacting us.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">Booking Information:</strong> Event selections, number of seats, and any special requests or notes submitted through our booking form.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">Usage Data:</strong> Information your browser sends automatically, including your IP address, browser type, pages visited, and time spent on the site.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We use the information we collect to:
              </p>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  'Process and confirm your booking requests',
                  'Send you booking confirmations and event reminders',
                  'Respond to your inquiries and customer service requests',
                  'Send promotional communications (only with your consent)',
                  'Improve our website and services',
                  'Comply with applicable laws and regulations',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:
              </p>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">Service Providers:</strong> We may share information with trusted third-party vendors who assist us in operating our website and conducting our business, subject to confidentiality agreements.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <span><strong className="text-foreground">Legal Requirements:</strong> We may disclose your information where required by law or to protect our rights.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We may use cookies and similar tracking technologies to improve your browsing experience on our site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the site may not function properly without cookies.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at the information below. We will respond to your request within a reasonable timeframe.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl uppercase text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. Your continued use of the site after any changes constitutes your acceptance of the new policy.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 border border-border rounded-lg p-6">
              <h2 className="font-heading text-3xl uppercase text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                If you have questions or concerns about this Privacy Policy, please contact us:
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
