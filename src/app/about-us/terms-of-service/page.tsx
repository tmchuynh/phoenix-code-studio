import TableOfContents from "@/components/ui/TableOfContents";

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative mx-auto sm:pt-5 w-11/12">
      <h1 className="mb-6 font-bold text-3xl">Terms of Service</h1>

      <div>
        <p className="text-sm">
          <strong>Last Updated:</strong> {currentDate}
        </p>
      </div>

      <p>
        These Terms of Service ("Terms") govern your use of Phoenix Code
        Studio's website and services. By accessing our website or using our
        services, you agree to be bound by these terms and our Privacy Policy.
        If you do not agree with any part of these terms, please do not use our
        services.
      </p>

      <TableOfContents
        maxLevel={2}
        useRomanNumerals={true}
        showNumbering={true}
        title="Table of Contents"
      />

      <section id="acceptance-of-terms" className="mb-8">
        <h2>Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using our website and services, you accept and agree
          to be bound by the terms and provisions of this agreement. These Terms
          constitute a legally binding agreement between you and Phoenix Code
          Studio.
        </p>

        <h3 className="mb-3 font-medium text-xl">Agreement Formation</h3>
        <p className="mb-3">
          Your agreement to these Terms is formed when you:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Access or browse our website</li>
          <li>Create an account or user profile</li>
          <li>Submit a service request or inquiry</li>
          <li>Enter into a service agreement with us</li>
          <li>Use any of our digital services or tools</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Capacity and Authority</h3>
        <p className="mb-6">
          By accepting these Terms, you represent that you are at least 18 years
          old and have the legal capacity to enter into this agreement. If you
          are accepting these Terms on behalf of a company or organization, you
          represent that you have the authority to bind that entity to these
          Terms.
        </p>
      </section>

      <section id="services" className="mb-8">
        <h2>Services</h2>
        <p className="mb-4">
          Phoenix Code Studio provides comprehensive web design, development,
          and related digital services. Our services are designed to help
          businesses and individuals establish and enhance their online presence
          through professional, custom solutions.
        </p>

        <h3 className="mb-3 font-medium text-xl">Service Offerings</h3>
        <p className="mb-3">Our services include but are not limited to:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Web Development:</strong> Custom website design and
            development, responsive design, e-commerce solutions
          </li>
          <li>
            <strong>Software Development:</strong> Custom applications, API
            development, database design and implementation
          </li>
          <li>
            <strong>Digital Strategy:</strong> Consulting, user experience
            design, digital transformation guidance
          </li>
          <li>
            <strong>Maintenance and Support:</strong> Website updates, security
            monitoring, technical support
          </li>
          <li>
            <strong>Hosting and Infrastructure:</strong> Website hosting, domain
            management, server administration
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Service Availability</h3>
        <p className="mb-3">
          While we strive to provide continuous service, we do not guarantee
          uninterrupted access to our website or services. Service availability
          may be affected by:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Scheduled maintenance and updates</li>
          <li>Technical issues or system failures</li>
          <li>Third-party service provider limitations</li>
          <li>Force majeure events beyond our control</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Service Modifications</h3>
        <p className="mb-6">
          We reserve the right to modify, suspend, or discontinue any service at
          any time with reasonable notice. We will make commercially reasonable
          efforts to notify affected clients of significant service changes that
          may impact their projects or ongoing services.
        </p>
      </section>

      <section id="user-responsibilities" className="mb-8">
        <h2>User Responsibilities</h2>
        <p className="mb-4">
          As a user of our services, you have certain responsibilities and
          obligations that ensure the smooth operation of our services and
          protect both parties' interests.
        </p>

        <h3 className="mb-3 font-medium text-xl">Account Security</h3>
        <p className="mb-3">You are responsible for:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Maintaining the confidentiality of your account information,
            passwords, and login credentials
          </li>
          <li>
            All activities that occur under your account, whether authorized or
            not
          </li>
          <li>
            Immediately notifying us of any unauthorized use of your account
          </li>
          <li>
            Using strong, unique passwords and enabling two-factor
            authentication when available
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Content and Information</h3>
        <p className="mb-3">
          You are responsible for ensuring that all content and information you
          provide to us:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Is accurate, current, and complete</li>
          <li>Does not violate any applicable laws or regulations</li>
          <li>
            Does not infringe upon the intellectual property rights of others
          </li>
          <li>Is free from viruses, malware, or other harmful components</li>
          <li>
            Complies with our content guidelines and acceptable use policies
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Prohibited Activities</h3>
        <p className="mb-3">You agree not to:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Use our services for any illegal, harmful, or unauthorized purposes
          </li>
          <li>
            Attempt to gain unauthorized access to our systems or other users'
            accounts
          </li>
          <li>Interfere with or disrupt our services or servers</li>
          <li>
            Reverse engineer, decompile, or attempt to extract source code from
            our services
          </li>
          <li>
            Use our services to transmit spam, malware, or other malicious
            content
          </li>
          <li>
            Violate any applicable laws, regulations, or third-party rights
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">
          Cooperation and Communication
        </h3>
        <p className="mb-6">
          You agree to cooperate with us in good faith, provide timely responses
          to our inquiries, and maintain professional communication standards.
          This includes providing necessary access, information, and approvals
          required for project completion.
        </p>
      </section>

      <section id="intellectual-property" className="mb-8">
        <h2>Intellectual Property</h2>
        <p className="mb-4">
          Intellectual property rights are fundamental to our business and the
          services we provide. This section clarifies the ownership and use of
          intellectual property in our relationship.
        </p>

        <h3 className="mb-3 font-medium text-xl">Our Intellectual Property</h3>
        <p className="mb-3">
          All content, trademarks, service marks, logos, and intellectual
          property on our website and in our services are owned by Phoenix Code
          Studio or our licensors. This includes:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Website design, layout, graphics, and user interface elements</li>
          <li>Proprietary software, code, and development frameworks</li>
          <li>Business processes, methodologies, and documentation</li>
          <li>Trademarks, service marks, and brand elements</li>
          <li>Written content, articles, and educational materials</li>
        </ul>

        <blockquote className="mb-6 pl-4 border-blue-500 border-l-4 italic">
          Unauthorized use of our intellectual property is strictly prohibited
          and may result in legal action, including claims for damages and
          injunctive relief.
        </blockquote>

        <h3 className="mb-3 font-medium text-xl">Client-Provided Content</h3>
        <p className="mb-3">
          You retain ownership of all content, materials, and intellectual
          property that you provide to us. However, you grant us a limited
          license to:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Use your content to provide the requested services</li>
          <li>Modify, adapt, and incorporate your content into deliverables</li>
          <li>Display your content in our portfolio (with your permission)</li>
          <li>Create derivative works necessary for project completion</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">
          Work Product and Deliverables
        </h3>
        <p className="mb-3">
          Ownership of work products and deliverables depends on the specific
          terms of our service agreement:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Custom Development:</strong> You typically receive full
            ownership upon final payment
          </li>
          <li>
            <strong>Licensed Components:</strong> Third-party components remain
            subject to their original licenses
          </li>
          <li>
            <strong>Proprietary Tools:</strong> Our proprietary development
            tools and frameworks remain our property
          </li>
          <li>
            <strong>Documentation:</strong> Technical documentation is typically
            included with deliverables
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">
          Third-Party Intellectual Property
        </h3>
        <p className="mb-6">
          We may use third-party software, libraries, and services in our
          development process. All third-party intellectual property remains
          subject to its original licensing terms, and we will ensure proper
          attribution and compliance with applicable licenses.
        </p>
      </section>

      <section id="payment-terms" className="mb-8">
        <h2>Payment Terms</h2>
        <p className="mb-4">
          Payment terms are established in individual service agreements and
          invoices. This section outlines our general payment policies and
          procedures.
        </p>

        <h3 className="mb-3 font-medium text-xl">Payment Schedule</h3>
        <p className="mb-3">
          Unless otherwise specified in your service agreement:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Project deposits are typically required before work begins</li>
          <li>Progress payments may be required for larger projects</li>
          <li>Final payment is due upon project completion and delivery</li>
          <li>Ongoing services are typically billed monthly in advance</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Late Payments</h3>
        <p className="mb-3">Late payments may result in:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Late fees as specified in your service agreement</li>
          <li>Suspension of services until payment is received</li>
          <li>Interest charges on overdue amounts</li>
          <li>
            Referral to collection agencies for seriously delinquent accounts
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Refunds and Cancellations</h3>
        <p className="mb-6">
          Refund policies vary by service type and are detailed in individual
          service agreements. Generally, work completed to date is
          non-refundable, but unused portions of prepaid services may be
          eligible for refund under certain circumstances.
        </p>
      </section>

      <section id="limitation-of-liability" className="mb-8">
        <h2>Limitation of Liability</h2>
        <p className="mb-4">
          This section outlines the limitations of our liability and your
          remedies in connection with our services.
        </p>

        <h3 className="mb-3 font-medium text-xl">General Limitations</h3>
        <p className="mb-3">
          To the maximum extent permitted by law, Phoenix Code Studio shall not
          be liable for:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Any indirect, incidental, special, consequential, or punitive
            damages
          </li>
          <li>Loss of profits, revenue, data, or business opportunities</li>
          <li>Business interruption or loss of use</li>
          <li>Damages arising from third-party services or integrations</li>
          <li>
            Any damages exceeding the amount paid for the specific service
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Service Disclaimers</h3>
        <p className="mb-3">
          Our services are provided "as is" and "as available." We disclaim all
          warranties, whether express or implied, including:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Warranties of merchantability and fitness for a particular purpose
          </li>
          <li>
            Warranties regarding security, accuracy, or error-free operation
          </li>
          <li>Warranties regarding compatibility with third-party systems</li>
          <li>Warranties regarding uninterrupted or continuous availability</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Indemnification</h3>
        <p className="mb-6">
          You agree to indemnify and hold harmless Phoenix Code Studio from any
          claims, damages, losses, or expenses arising from your use of our
          services, violation of these Terms, or infringement of any third-party
          rights.
        </p>
      </section>

      <section id="privacy-and-data" className="mb-8">
        <h2>Privacy and Data Protection</h2>
        <p className="mb-4">
          Your privacy is important to us. Our collection, use, and protection
          of your personal information is governed by our Privacy Policy, which
          is incorporated into these Terms by reference.
        </p>

        <h3 className="mb-3 font-medium text-xl">Data Processing</h3>
        <p className="mb-3">
          By using our services, you consent to our processing of your personal
          information as described in our Privacy Policy. This includes:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Collection of information necessary to provide our services</li>
          <li>Use of information for service delivery and improvement</li>
          <li>Sharing of information with service providers as necessary</li>
          <li>
            Retention of information in accordance with legal requirements
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Client Data Security</h3>
        <p className="mb-6">
          We implement appropriate technical and organizational measures to
          protect your data. However, you are responsible for ensuring that any
          data you provide to us is backed up and secured on your end.
        </p>
      </section>

      <section id="termination" className="mb-8">
        <h2>Termination</h2>
        <p className="mb-4">
          Either party may terminate our relationship under certain
          circumstances. This section outlines the termination procedures and
          consequences.
        </p>

        <h3 className="mb-3 font-medium text-xl">Termination by You</h3>
        <p className="mb-3">You may terminate our services by:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Providing written notice as specified in your service agreement
          </li>
          <li>Paying for all services rendered up to the termination date</li>
          <li>Completing any outstanding payment obligations</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Termination by Us</h3>
        <p className="mb-3">We may terminate our services if:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>You breach these Terms or your service agreement</li>
          <li>Payment is significantly overdue</li>
          <li>You engage in prohibited activities</li>
          <li>Continuation of services becomes commercially impracticable</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Effects of Termination</h3>
        <p className="mb-6">
          Upon termination, you will lose access to our services, but provisions
          regarding intellectual property, payment obligations, and limitation
          of liability will survive termination.
        </p>
      </section>

      <section id="governing-law" className="mb-8">
        <h2>Governing Law and Dispute Resolution</h2>
        <p className="mb-4">
          These Terms are governed by and construed in accordance with
          applicable laws and regulations. This section outlines how disputes
          will be resolved.
        </p>

        <h3 className="mb-3 font-medium text-xl">Governing Law</h3>
        <p className="mb-6">
          These Terms are governed by the laws of the jurisdiction where Phoenix
          Code Studio is located, without regard to conflict of law principles.
        </p>

        <h3 className="mb-3 font-medium text-xl">Dispute Resolution</h3>
        <p className="mb-3">
          We prefer to resolve disputes through direct communication. If a
          dispute cannot be resolved informally, it may be subject to:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Mediation through a mutually agreed-upon mediator</li>
          <li>Arbitration in accordance with applicable arbitration rules</li>
          <li>Litigation in the courts of competent jurisdiction</li>
        </ul>
      </section>

      <section id="changes-to-terms" className="mb-8">
        <h2>Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time to reflect
          changes in our services, legal requirements, or business practices.
        </p>

        <h3 className="mb-3 font-medium text-xl">Notification of Changes</h3>
        <p className="mb-3">We will notify you of material changes by:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Posting the updated Terms on our website</li>
          <li>Sending email notifications to registered users</li>
          <li>Displaying prominent notices during service use</li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Effective Date</h3>
        <p className="mb-6">
          Updated Terms will be effective immediately upon posting unless
          otherwise specified. Your continued use of our services after changes
          constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section id="miscellaneous" className="mb-8">
        <h2>Miscellaneous</h2>

        <h3 className="mb-3 font-medium text-xl">Entire Agreement</h3>
        <p className="mb-6">
          These Terms, together with our Privacy Policy and any applicable
          service agreements, constitute the entire agreement between you and
          Phoenix Code Studio.
        </p>

        <h3 className="mb-3 font-medium text-xl">Severability</h3>
        <p className="mb-6">
          If any provision of these Terms is found to be unenforceable, the
          remaining provisions will continue in full force and effect.
        </p>

        <h3 className="mb-3 font-medium text-xl">Waiver</h3>
        <p className="mb-6">
          Our failure to enforce any provision of these Terms does not
          constitute a waiver of our right to enforce that provision in the
          future.
        </p>

        <h3 className="mb-3 font-medium text-xl">Assignment</h3>
        <p className="mb-6">
          You may not assign your rights or obligations under these Terms
          without our written consent. We may assign our rights and obligations
          without restriction.
        </p>
      </section>

      <section id="contact-information" className="mb-8">
        <h2>Contact Information</h2>
        <p className="mb-4">
          If you have questions about these Terms of Service, need clarification
          on any provisions, or wish to discuss specific service requirements,
          please contact us through the following methods:
        </p>

        <div>
          <h3>Phoenix Code Studio</h3>
          <p className="mb-2">
            <strong>Email:</strong> legal@phoenixcodestudio.com
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
            <strong>Professional Service:</strong> We are committed to providing
            clear, professional service and maintaining transparent
            communication about our terms and conditions. Please don't hesitate
            to reach out if you need any clarification.
          </p>
        </div>
      </section>
    </div>
  );
}
