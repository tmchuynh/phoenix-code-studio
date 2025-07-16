import TableOfContents from "@/components/ui/TableOfContents";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative mx-auto sm:pt-5 w-11/12">
      <h1 className="mb-6 font-bold text-3xl">Privacy Policy</h1>

      <div>
        <p className="text-sm">
          <strong>Last Updated:</strong> {currentDate}
        </p>
      </div>

      <p>
        At Phoenix Code Studio, we are committed to protecting your privacy and
        ensuring the security of your personal information. This privacy policy
        explains how we collect, use, and safeguard your data in accordance with
        applicable regulations including GDPR, CCPA, and other privacy laws.
      </p>

      <TableOfContents
        maxLevel={2}
        useRomanNumerals={true}
        showNumbering={true}
        title="Table of Contents"
      />

      <section id="information-collection" className="mb-8">
        <h2>Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as when
          you contact us through our website, request our services, subscribe to
          our newsletter, or interact with our platform. We also collect certain
          information automatically when you visit our website.
        </p>

        <h3 className="mb-3 font-medium text-xl">Personal Information</h3>
        <p className="mb-3">Personal information we may collect includes:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Contact Information:</strong> Name, email address, phone
            number, mailing address
          </li>
          <li>
            <strong>Professional Information:</strong> Company name, job title,
            industry
          </li>
          <li>
            <strong>Project Information:</strong> Details about your development
            needs, requirements, and specifications
          </li>
          <li>
            <strong>Communication Data:</strong> Messages, feedback, and
            correspondence with our team
          </li>
          <li>
            <strong>Payment Information:</strong> Billing address, payment
            method details (processed securely through third-party providers)
          </li>
          <li>
            <strong>Account Information:</strong> Username, password, and
            account preferences (if applicable)
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Usage Information</h3>
        <p className="mb-3">
          We automatically collect information about how you use our website:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Technical Data:</strong> IP address, browser type and
            version, operating system, device information
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, time spent on pages,
            click patterns, referring websites
          </li>
          <li>
            <strong>Performance Data:</strong> Website loading times, error
            reports, and technical issues
          </li>
          <li>
            <strong>Location Data:</strong> General geographic location based on
            IP address
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">
          Information from Third Parties
        </h3>
        <p className="mb-3">
          We may receive information from third-party sources:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Social media platforms (if you interact with our social media
            content)
          </li>
          <li>Business partners and referral sources</li>
          <li>Public databases and directories</li>
          <li>Analytics and marketing service providers</li>
        </ul>
      </section>

      <section id="how-we-use" className="mb-8">
        <h2>How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>

        <h3 className="mb-3 font-medium text-xl">Service Delivery</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Provide and deliver our web development and software services</li>
          <li>Process and fulfill your service requests</li>
          <li>Communicate with you about your projects and services</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Manage your account and user preferences</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Business Operations</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Process payments and manage billing</li>
          <li>Maintain and improve our website and services</li>
          <li>Analyze website usage and user behavior</li>
          <li>Conduct market research and gather feedback</li>
          <li>Develop new features and services</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">
          Marketing and Communications
        </h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Send you relevant updates and marketing communications (with your
            consent)
          </li>
          <li>Provide information about our services and industry insights</li>
          <li>Invite you to participate in surveys or feedback sessions</li>
          <li>Notify you about changes to our services or policies</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Legal and Compliance</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Comply with legal obligations and regulatory requirements</li>
          <li>Protect our rights and interests</li>
          <li>Prevent fraud and ensure security</li>
          <li>Resolve disputes and enforce our terms of service</li>
        </ul>
      </section>

      <section id="data-sharing" className="mb-8">
        <h2>Data Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not sell, rent, or trade your personal information. We may share
          your information only in the following circumstances:
        </p>

        <h3 className="mb-3 font-medium text-xl">Service Providers</h3>
        <p className="mb-3">
          We may share your information with trusted third-party service
          providers who assist us in:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Payment processing and billing</li>
          <li>Website hosting and cloud services</li>
          <li>Email marketing and communication services</li>
          <li>Analytics and performance monitoring</li>
          <li>Customer support and help desk services</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Legal Requirements</h3>
        <p className="mb-3">
          We may disclose your information when required by law or to:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Comply with legal processes, court orders, or government requests
          </li>
          <li>Protect our rights, property, or safety</li>
          <li>
            Protect the rights, property, or safety of our users or others
          </li>
          <li>Prevent or investigate fraud or security issues</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Business Transfers</h3>
        <p className="mb-6">
          In the event of a merger, acquisition, or sale of assets, your
          information may be transferred to the acquiring entity, subject to the
          same privacy protections outlined in this policy.
        </p>
      </section>

      <section id="data-security" className="mb-8">
        <h2>Data Security</h2>
        <p className="mb-4">
          We implement comprehensive technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. Our security measures include:
        </p>
        <h3 className="mb-3 font-medium text-xl">Technical Safeguards</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>SSL/TLS encryption for data transmission</li>
          <li>Secure server infrastructure and data centers</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Multi-factor authentication for system access</li>
          <li>Encrypted data storage and backup systems</li>
        </ul>
        <h3 className="mb-3 font-medium text-xl">Organizational Safeguards</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Access controls and role-based permissions</li>
          <li>Employee training on data protection and privacy</li>
          <li>Confidentiality agreements with staff and contractors</li>
          <li>Regular security policy reviews and updates</li>
          <li>Incident response and breach notification procedures</li>
        </ul>
        <strong>Security Commitment:</strong> While we implement
        industry-standard security measures, no method of transmission over the
        internet is 100% secure. We continuously monitor and update our security
        practices to maintain the highest level of protection for your data.
      </section>

      <section id="data-retention" className="mb-8">
        <h2>Data Retention</h2>
        <p className="mb-4">
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this privacy policy or as required by
          law. Our retention periods vary based on the type of information:
        </p>

        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Contact Information:</strong> Retained while you remain a
            client or until you request deletion
          </li>
          <li>
            <strong>Project Data:</strong> Retained for the duration of the
            project plus 3 years for support purposes
          </li>
          <li>
            <strong>Marketing Communications:</strong> Retained until you
            unsubscribe or request deletion
          </li>
          <li>
            <strong>Website Analytics:</strong> Anonymized data retained for up
            to 26 months
          </li>
          <li>
            <strong>Legal Requirements:</strong> Retained as required by
            applicable laws (typically 7 years for business records)
          </li>
        </ul>

        <p className="mb-6">
          When we no longer need your information, we will securely delete or
          anonymize it in accordance with our data retention and disposal
          policies.
        </p>
      </section>

      <section id="your-rights" className="mb-8">
        <h2>Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your
          personal information:
        </p>

        <h3 className="mb-3 font-medium text-xl">General Rights</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Access:</strong> Request access to your personal information
          </li>
          <li>
            <strong>Rectification:</strong> Request correction of inaccurate or
            incomplete information
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal
            information (right to be forgotten)
          </li>
          <li>
            <strong>Portability:</strong> Request transfer of your data to
            another service provider
          </li>
          <li>
            <strong>Restriction:</strong> Request restriction of processing in
            certain circumstances
          </li>
          <li>
            <strong>Objection:</strong> Object to processing based on legitimate
            interests or direct marketing
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Marketing Communications</h3>
        <p className="mb-6">
          You can unsubscribe from marketing communications at any time by
          clicking the unsubscribe link in our emails or contacting us directly.
          This will not affect our ability to send service-related
          communications.
        </p>

        <h3 className="mb-3 font-medium text-xl">Exercising Your Rights</h3>
        <p className="mb-6">
          To exercise any of these rights, please contact us using the
          information provided in the "Contact Information" section. We will
          respond to your request within 30 days or as required by applicable
          law.
        </p>
      </section>

      <section id="cookies" className="mb-8">
        <h2>Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance your
          browsing experience, analyze website traffic, and understand user
          preferences.
        </p>

        <h3 className="mb-3 font-medium text-xl">Types of Cookies We Use</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Essential Cookies:</strong> Required for basic website
            functionality
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us understand how
            visitors interact with our website
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences and
            settings
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used to deliver relevant
            advertisements and measure campaign effectiveness
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Cookie Management</h3>
        <p className="mb-6">
          You can control cookies through your browser settings. Note that
          disabling certain cookies may affect website functionality. Most
          browsers allow you to refuse cookies, delete existing cookies, and set
          preferences for certain websites.
        </p>
      </section>

      <section id="third-party" className="mb-8">
        <h2>Third-Party Services</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites or integrate
          with third-party services. We work with reputable service providers
          who maintain their own privacy policies:
        </p>

        <h3 className="mb-3 font-medium text-xl">Analytics and Performance</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Google Analytics (website traffic and user behavior analysis)</li>
          <li>Performance monitoring tools (website speed and uptime)</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">
          Communication and Marketing
        </h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Email marketing platforms (newsletter and communication services)
          </li>
          <li>Customer support systems (help desk and ticketing)</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Payment Processing</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Secure payment gateways (credit card and online payment processing)
          </li>
          <li>Invoicing and billing systems</li>
        </ul>

        <p className="mb-6">
          We are not responsible for the privacy practices of third-party
          websites or services. We encourage you to review their privacy
          policies before providing any personal information.
        </p>
      </section>

      <section id="children" className="mb-8">
        <h2>Children's Privacy</h2>
        <p className="mb-4">
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          we become aware that we have collected personal information from a
          child under 13, we will take immediate steps to delete that
          information.
        </p>
        <p className="mb-6">
          If you are a parent or guardian and believe your child has provided us
          with personal information, please contact us immediately so we can
          take appropriate action.
        </p>
      </section>

      <section id="changes" className="mb-8">
        <h2>Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time to reflect changes
          in our practices, technology, legal requirements, or other factors. We
          will notify you of any material changes by:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Posting the updated policy on our website</li>
          <li>Sending email notifications to registered users</li>
          <li>Displaying prominent notices on our website</li>
        </ul>
        <p className="mb-6">
          The updated policy will be effective immediately upon posting. We
          encourage you to review this policy periodically to stay informed
          about how we protect your information.
        </p>
      </section>

      <section id="contact" className="mb-8">
        <h2>Contact Information</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy, your personal
          information, or how we handle your data, please contact us through the
          following methods:
        </p>

        <div>
          <h3>Phoenix Code Studio</h3>
          <p className="mb-2">
            <strong>Email:</strong> privacy@phoenixcodestudio.com
          </p>
          <p className="mb-2">
            <strong>Website:</strong> Contact form on our website
          </p>
          <p className="mb-2">
            <strong>Response Time:</strong> We aim to respond within 48 hours
          </p>
        </div>

        <div>
          <p>
            <strong>Your Privacy Matters:</strong> We are committed to
            protecting your privacy and ensuring transparency in how we handle
            your personal information. If you have concerns about our privacy
            practices, please don't hesitate to reach out to us.
          </p>
        </div>
      </section>
    </div>
  );
}
