import { Metadata } from "next";

export const metadata = {
  title: 'Privacy Policy - Blustock Consultants',
  description: 'Privacy Policy for Blustock Consultants - Stock Market Training Academy in Jaipur',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-[85%] mx-auto container py-12">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose max-w-none text-justify space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
          <p className="text-tertiary leading-relaxed">
            Welcome to Blustock Consultants ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website blustockconsultants.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-3 text-primary">2.1 Personal Information</h3>
          <p className="text-tertiary leading-relaxed mb-3">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Register for an account or enroll in our courses</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Contact us through our contact forms</li>
            <li>Participate in surveys or provide feedback</li>
            <li>Make a payment for our services</li>
          </ul>
          <p className="text-tertiary leading-relaxed mt-3">
            This information may include your name, email address, phone number, postal address, payment information, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-primary">2.2 Automatically Collected Information</h3>
          <p className="text-tertiary leading-relaxed">
            When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the site, we collect information about the individual web pages that you view, what websites or search terms referred you to the site, and information about how you interact with the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
          <p className="text-tertiary leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your registrations and payments</li>
            <li>Send you course materials and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze website usage and improve user experience</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Information Sharing and Disclosure</h2>
          <p className="text-tertiary leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary mt-3">
            <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, and hosting services.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">5. Data Security</h2>
          <p className="text-tertiary leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">6. Your Rights</h2>
          <p className="text-tertiary leading-relaxed mb-3">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Access and receive a copy of your personal information</li>
            <li>Rectify inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request restriction of processing your personal information</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">7. Cookies</h2>
          <p className="text-tertiary leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">8. Third-Party Links</h2>
          <p className="text-tertiary leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">9. Children's Privacy</h2>
          <p className="text-tertiary leading-relaxed">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">10. Changes to This Privacy Policy</h2>
          <p className="text-tertiary leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">11. Contact Us</h2>
          <p className="text-tertiary leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-tertiary"><strong>Blustock Consultants</strong></p>
            <p className="text-tertiary">Joshi Marg Jothwara, Jaipur, Rajasthan 302012</p>
            <p className="text-tertiary">Phone: +91-6376520654</p>
            <p className="text-tertiary">Email: [Your Contact Email]</p>
          </div>
        </section>
      </div>
    </div>
  );
}

