import { Metadata } from "next";

export const metadata = {
  title: 'Terms of Service - Blustock Consultants',
  description: 'Terms of Service for Blustock Consultants - Stock Market Training Academy in Jaipur',
};

export default function TermsOfServicePage() {
  return (
    <div className="w-[85%] mx-auto container py-12">
      <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose max-w-none text-justify space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Agreement to Terms</h2>
          <p className="text-tertiary leading-relaxed">
            By accessing or using the Blustock Consultants website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. Use License</h2>
          <p className="text-tertiary leading-relaxed mb-3">
            Permission is granted to temporarily access the materials on Blustock Consultants' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Course Enrollment and Payment</h2>
          <h3 className="text-xl font-semibold mb-3 text-primary">3.1 Enrollment</h3>
          <p className="text-tertiary leading-relaxed">
            By enrolling in any course offered by Blustock Consultants, you agree to pay the specified fees and abide by all course requirements and policies. Enrollment is subject to availability and our acceptance of your application.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-primary">3.2 Payment Terms</h3>
          <p className="text-tertiary leading-relaxed mb-3">
            All course fees must be paid in full before course access is granted, unless otherwise agreed upon in writing. We accept payment through:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Online payment gateways (Razorpay, etc.)</li>
            <li>Bank transfers</li>
            <li>Other methods as specified at the time of enrollment</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-primary">3.3 Refund Policy</h3>
          <p className="text-tertiary leading-relaxed">
            Refund requests must be submitted within 7 days of enrollment. Refunds are subject to our refund policy and may be prorated based on course progress. Please refer to our Refund Policy page for detailed information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. User Accounts</h2>
          <p className="text-tertiary leading-relaxed mb-3">
            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Maintaining the security of your account and password</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
            <li>Ensuring that all information provided is accurate and up-to-date</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">5. Intellectual Property</h2>
          <p className="text-tertiary leading-relaxed">
            All content, materials, course content, videos, text, graphics, logos, and software on this website are the property of Blustock Consultants or its content suppliers and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">6. Prohibited Uses</h2>
          <p className="text-tertiary leading-relaxed mb-3">
            You agree not to use the website or services to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Transmit any harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the website or services</li>
            <li>Use automated systems to access the website without permission</li>
            <li>Share your account credentials with others</li>
            <li>Record, reproduce, or distribute course content without authorization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">7. Disclaimer</h2>
          <p className="text-tertiary leading-relaxed mb-3">
            The information and materials on Blustock Consultants' website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-tertiary">
            <li>Implied warranties or conditions of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement of intellectual property or other violation of rights</li>
            <li>Accuracy, reliability, or completeness of information</li>
          </ul>
          <p className="text-tertiary leading-relaxed mt-3">
            <strong>Important:</strong> Our courses provide educational information about stock market trading and investment. We do not provide financial advice, and past performance does not guarantee future results. Trading involves risk, and you should only trade with money you can afford to lose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">8. Limitations of Liability</h2>
          <p className="text-tertiary leading-relaxed">
            In no event shall Blustock Consultants or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative have been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">9. Revisions and Errata</h2>
          <p className="text-tertiary leading-relaxed">
            The materials appearing on Blustock Consultants' website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">10. Links to Third-Party Sites</h2>
          <p className="text-tertiary leading-relaxed">
            Our website may contain links to third-party websites that are not owned or controlled by Blustock Consultants. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">11. Modifications to Terms</h2>
          <p className="text-tertiary leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the website after such modifications constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">12. Governing Law</h2>
          <p className="text-tertiary leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">13. Contact Information</h2>
          <p className="text-tertiary leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at:
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

