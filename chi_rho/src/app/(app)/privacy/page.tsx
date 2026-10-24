import type { Metadata } from 'next'
import { Entry, PageTitle } from '@/components/log'

export const metadata: Metadata = { title: 'Privacy policy' }

export default function PrivacyPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Privacy policy" sub="Updated January 6, 2026">
        <PageTitle>Privacy policy</PageTitle>
        <div className="lg-post lg-mt">
            
            <section>
              <h2>Introduction</h2>
              <p>
                Chi-Rho Power and Strength (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates chirhostrength.com. 
                This Privacy Policy explains how we collect, use, and protect your personal information when you 
                use our website and services.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              
              <h3>Information You Provide</h3>
              <p>
                When you contact us, apply for coaching, or sign up for our services, we may collect:
              </p>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Training history and fitness goals</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Any other information you choose to provide in forms or communications</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect:
              </p>
              <ul>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide coaching services and respond to your inquiries</li>
                <li>Process payments for products and services</li>
                <li>Send you important updates about your coaching or purchases</li>
                <li>Improve our website and services</li>
                <li>Send promotional emails (only if you&apos;ve opted in)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information with:
              </p>
              <ul>
                <li><strong>Payment processors:</strong> To process transactions (e.g., Stripe)</li>
                <li><strong>Email service providers:</strong> To send you communications (e.g., Kit/ConvertKit, if applicable)</li>
                <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2>Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However, 
                no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Withdraw consent where we rely on consent to process your data</li>
              </ul>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (such as Amazon for our books and journal). 
                We are not responsible for the privacy practices of these external sites. Please review their 
                privacy policies separately.
              </p>
            </section>

            <section>
              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
                personal information from children.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes 
                by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> chirhostrength@gmail.com
              </p>
              <p>
                <strong>Website:</strong> <a href="/apply">Contact Form</a>
              </p>
            </section>
        </div>
      </Entry>
    </main>
  )
}
