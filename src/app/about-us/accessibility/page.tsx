import TableOfContents from "@/components/ui/TableOfContents";

export default function Accessibility() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative mx-auto sm:pt-5 w-11/12">
      <h1 className="mb-6 font-bold text-3xl">Accessibility Statement</h1>

      <div>
        <p className="text-sm">
          <strong>Last Updated:</strong> {currentDate}
        </p>
      </div>

      <p>
        Phoenix Code Studio is committed to making our website and services
        accessible to everyone, including people with disabilities. We believe
        that digital accessibility is not just a legal requirement but a
        fundamental aspect of creating inclusive digital experiences that serve
        all users effectively.
      </p>

      <TableOfContents
        maxLevel={2}
        useRomanNumerals={true}
        showNumbering={true}
        title="Table of Contents"
      />

      <section id="our-commitment" className="mb-8">
        <h2>Our Commitment</h2>
        <p className="mb-4">
          We are dedicated to ensuring that our website meets or exceeds the
          accessibility standards outlined in internationally recognized
          guidelines. Our commitment extends beyond compliance to creating
          genuinely inclusive digital experiences.
        </p>

        <h3 className="mb-3 font-medium text-xl">Accessibility Philosophy</h3>
        <p className="mb-3">
          Our approach to accessibility is grounded in the principle that:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            Every user deserves equal access to information and functionality
          </li>
          <li>
            Accessibility improvements benefit all users, not just those with
            disabilities
          </li>
          <li>
            Digital accessibility is an ongoing process, not a one-time
            achievement
          </li>
          <li>
            User feedback and testing are essential for continuous improvement
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Legal Compliance</h3>
        <p className="mb-3">
          We strive to comply with applicable accessibility laws and
          regulations, including:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Americans with Disabilities Act (ADA) - United States</li>
          <li>
            Section 508 of the Rehabilitation Act - United States Federal
            Agencies
          </li>
          <li>
            Accessibility for Ontarians with Disabilities Act (AODA) - Canada
          </li>
          <li>European Accessibility Act (EAA) - European Union</li>
          <li>Web Accessibility Directive - European Union Public Sector</li>
        </ul>

        <blockquote className="mb-6 pl-4 border-blue-500 border-l-4 italic">
          Accessibility is not a destination but a journey. We are committed to
          making continuous improvements to ensure everyone can access our
          services effectively and independently.
        </blockquote>
      </section>

      <section id="standards-and-guidelines" className="mb-8">
        <h2>Standards and Guidelines</h2>
        <p className="mb-4">
          Our accessibility efforts are guided by established international
          standards and best practices in digital accessibility.
        </p>

        <h3 className="mb-3 font-medium text-xl">
          Web Content Accessibility Guidelines (WCAG) 2.1
        </h3>
        <p className="mb-3">
          We aim to meet WCAG 2.1 Level AA standards, which include:
        </p>

        <h4 className="mb-2 font-medium text-lg">Perceivable</h4>
        <ul role="list" className="space-y-2 mb-4 pl-6 list-disc list-outside">
          <li>
            <strong>Text Alternatives:</strong> All non-text content has
            appropriate alternative text
          </li>
          <li>
            <strong>Time-based Media:</strong> Captions and audio descriptions
            for multimedia content
          </li>
          <li>
            <strong>Adaptable:</strong> Content can be presented in different
            ways without losing meaning
          </li>
          <li>
            <strong>Distinguishable:</strong> Content is easily distinguishable
            from background
          </li>
          <li>
            <strong>Color Contrast:</strong> Minimum 4.5:1 ratio for normal
            text, 3:1 for large text
          </li>
          <li>
            <strong>Resize Text:</strong> Text can be resized up to 200% without
            assistive technology
          </li>
        </ul>

        <h4 className="mb-2 font-medium text-lg">Operable</h4>
        <ul role="list" className="space-y-2 mb-4 pl-6 list-disc list-outside">
          <li>
            <strong>Keyboard Accessible:</strong> All functionality available
            via keyboard
          </li>
          <li>
            <strong>No Seizures:</strong> Content does not cause seizures or
            physical reactions
          </li>
          <li>
            <strong>Navigable:</strong> Users can navigate and find content
            easily
          </li>
          <li>
            <strong>Input Modalities:</strong> Easy to use with various input
            methods
          </li>
          <li>
            <strong>Timing:</strong> Users have adequate time to read and use
            content
          </li>
        </ul>

        <h4 className="mb-2 font-medium text-lg">Understandable</h4>
        <ul role="list" className="space-y-2 mb-4 pl-6 list-disc list-outside">
          <li>
            <strong>Readable:</strong> Text content is readable and
            understandable
          </li>
          <li>
            <strong>Predictable:</strong> Web pages appear and operate
            predictably
          </li>
          <li>
            <strong>Input Assistance:</strong> Users are helped to avoid and
            correct mistakes
          </li>
          <li>
            <strong>Language:</strong> Page language is identified and changes
            are indicated
          </li>
        </ul>

        <h4 className="mb-2 font-medium text-lg">Robust</h4>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Compatible:</strong> Content works with various assistive
            technologies
          </li>
          <li>
            <strong>Valid Code:</strong> Clean, semantic HTML markup
          </li>
          <li>
            <strong>Future-proof:</strong> Content remains accessible as
            technologies evolve
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Additional Standards</h3>
        <p className="mb-3">We also reference and implement guidelines from:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Section 508:</strong> U.S. Federal accessibility standards
          </li>
          <li>
            <strong>EN 301 549:</strong> European standard for ICT accessibility
          </li>
          <li>
            <strong>ISO/IEC 40500:</strong> International standard based on WCAG
            2.0
          </li>
          <li>
            <strong>WAI-ARIA:</strong> Web Accessibility Initiative - Accessible
            Rich Internet Applications
          </li>
        </ul>
      </section>

      <section id="accessibility-features" className="mb-8">
        <h2>Accessibility Features</h2>
        <p className="mb-4">
          Our website includes comprehensive accessibility features designed to
          support users with various disabilities and assistive technologies.
        </p>

        <h3 className="mb-3 font-medium text-xl">Navigation and Structure</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Keyboard Navigation:</strong> Full keyboard accessibility
            with logical tab order
          </li>
          <li>
            <strong>Skip Links:</strong> "Skip to main content" links for
            efficient navigation
          </li>
          <li>
            <strong>Heading Structure:</strong> Proper hierarchical heading
            structure (H1-H6)
          </li>
          <li>
            <strong>Landmark Roles:</strong> ARIA landmarks for page sections
          </li>
          <li>
            <strong>Breadcrumbs:</strong> Clear navigation paths and location
            indicators
          </li>
          <li>
            <strong>Search Functionality:</strong> Accessible search with clear
            labels and instructions
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Visual Design</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>High Contrast:</strong> Sufficient color contrast ratios
            throughout the site
          </li>
          <li>
            <strong>Scalable Text:</strong> Text can be enlarged up to 200%
            without horizontal scrolling
          </li>
          <li>
            <strong>Color Independence:</strong> Information not conveyed by
            color alone
          </li>
          <li>
            <strong>Focus Indicators:</strong> Visible focus indicators for all
            interactive elements
          </li>
          <li>
            <strong>Responsive Design:</strong> Adapts to different screen sizes
            and orientations
          </li>
          <li>
            <strong>Typography:</strong> Readable fonts with adequate spacing
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Content and Media</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Alternative Text:</strong> Descriptive alt text for all
            images and graphics
          </li>
          <li>
            <strong>Descriptive Links:</strong> Link text clearly describes
            destination or function
          </li>
          <li>
            <strong>Table Headers:</strong> Proper table markup with headers and
            captions
          </li>
          <li>
            <strong>Form Labels:</strong> Clear, descriptive labels for all form
            fields
          </li>
          <li>
            <strong>Error Messages:</strong> Clear, specific error messages and
            correction guidance
          </li>
          <li>
            <strong>Language Attributes:</strong> Page language identified in
            HTML
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Interactive Elements</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Button Accessibility:</strong> Proper button markup with
            descriptive text
          </li>
          <li>
            <strong>Form Validation:</strong> Accessible error handling and
            validation
          </li>
          <li>
            <strong>Modal Dialogs:</strong> Proper focus management and ARIA
            attributes
          </li>
          <li>
            <strong>Dropdown Menus:</strong> Keyboard accessible with proper
            ARIA states
          </li>
          <li>
            <strong>Loading States:</strong> Clear indication of loading and
            processing states
          </li>
        </ul>
      </section>

      <section id="assistive-technologies" className="mb-8">
        <h2>Assistive Technologies</h2>
        <p className="mb-4">
          Our website is designed and tested to work effectively with a wide
          range of assistive technologies used by people with disabilities.
        </p>

        <h3 className="mb-3 font-medium text-xl">Screen Readers</h3>
        <p className="mb-3">
          We test our website with popular screen readers to ensure
          compatibility:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>NVDA (Windows):</strong> Free, open-source screen reader
          </li>
          <li>
            <strong>JAWS (Windows):</strong> Professional screen reader software
          </li>
          <li>
            <strong>VoiceOver (macOS/iOS):</strong> Built-in Apple screen reader
          </li>
          <li>
            <strong>TalkBack (Android):</strong> Google's screen reader for
            Android devices
          </li>
          <li>
            <strong>Dragon NaturallySpeaking:</strong> Voice recognition
            software
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Navigation Tools</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Switch Control:</strong> Single-switch and multi-switch
            navigation
          </li>
          <li>
            <strong>Eye Tracking:</strong> Gaze-based navigation systems
          </li>
          <li>
            <strong>Head Tracking:</strong> Head movement-based navigation
          </li>
          <li>
            <strong>Voice Control:</strong> Voice commands for navigation and
            interaction
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Visual Assistance</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Screen Magnification:</strong> ZoomText, MAGic, and built-in
            magnifiers
          </li>
          <li>
            <strong>High Contrast Mode:</strong> Operating system and browser
            high contrast settings
          </li>
          <li>
            <strong>Color Filters:</strong> Built-in color adjustment tools
          </li>
          <li>
            <strong>Custom Stylesheets:</strong> User-defined CSS for
            personalized display
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Cognitive Support</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Reading Assistance:</strong> Text-to-speech and reading
            comprehension tools
          </li>
          <li>
            <strong>Memory Aids:</strong> Password managers and form
            auto-completion
          </li>
          <li>
            <strong>Attention Tools:</strong> Focus enhancement and distraction
            reduction tools
          </li>
        </ul>
      </section>

      <section id="testing-and-evaluation" className="mb-8">
        <h2>Testing and Evaluation</h2>
        <p className="mb-4">
          We employ comprehensive testing methodologies to ensure our
          accessibility features work effectively across different scenarios and
          user needs.
        </p>

        <h3 className="mb-3 font-medium text-xl">Testing Methods</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Automated Testing:</strong> Regular scans using tools like
            axe, WAVE, and Lighthouse
          </li>
          <li>
            <strong>Manual Testing:</strong> Keyboard navigation, screen reader
            testing, and usability evaluation
          </li>
          <li>
            <strong>User Testing:</strong> Testing with actual users who have
            disabilities
          </li>
          <li>
            <strong>Expert Review:</strong> Accessibility audits by certified
            professionals
          </li>
          <li>
            <strong>Browser Testing:</strong> Cross-browser compatibility with
            assistive technologies
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Testing Tools</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>axe DevTools:</strong> Browser extension for automated
            accessibility testing
          </li>
          <li>
            <strong>WAVE:</strong> Web accessibility evaluation tool
          </li>
          <li>
            <strong>Lighthouse:</strong> Google's accessibility audit tool
          </li>
          <li>
            <strong>Color Contrast Analyzers:</strong> Tools for checking color
            contrast ratios
          </li>
          <li>
            <strong>Keyboard Testing:</strong> Manual navigation without mouse
            input
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Ongoing Monitoring</h3>
        <p className="mb-6">
          We maintain regular accessibility monitoring through automated testing
          in our development pipeline, periodic manual audits, and continuous
          monitoring of user feedback and accessibility metrics.
        </p>
      </section>

      <section id="ongoing-improvements" className="mb-8">
        <h2>Ongoing Improvements</h2>
        <p className="mb-4">
          We continuously work to improve the accessibility of our website and
          services through regular audits, updates, and user feedback
          implementation.
        </p>

        <h3 className="mb-3 font-medium text-xl">Development Process</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Accessibility by Design:</strong> Incorporating
            accessibility considerations from the initial design phase
          </li>
          <li>
            <strong>Code Reviews:</strong> Accessibility checks integrated into
            our development workflow
          </li>
          <li>
            <strong>Training:</strong> Regular accessibility training for our
            development team
          </li>
          <li>
            <strong>Best Practices:</strong> Following established accessibility
            patterns and guidelines
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Regular Audits</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Quarterly Reviews:</strong> Comprehensive accessibility
            audits every three months
          </li>
          <li>
            <strong>Feature Testing:</strong> Accessibility testing for all new
            features and updates
          </li>
          <li>
            <strong>Third-party Audits:</strong> Annual reviews by external
            accessibility experts
          </li>
          <li>
            <strong>Performance Monitoring:</strong> Continuous monitoring of
            accessibility metrics
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Future Enhancements</h3>
        <p className="mb-3">
          We are committed to implementing emerging accessibility technologies
          and standards:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>WCAG 2.2 and 3.0:</strong> Preparing for upcoming WCAG
            updates
          </li>
          <li>
            <strong>AI-Powered Accessibility:</strong> Exploring AI tools for
            automatic alt text and descriptions
          </li>
          <li>
            <strong>Voice Interfaces:</strong> Improving voice navigation and
            interaction capabilities
          </li>
          <li>
            <strong>Personalization:</strong> Developing user preference systems
            for customized accessibility
          </li>
        </ul>
      </section>

      <section id="feedback-and-support" className="mb-8">
        <h2>Feedback and Support</h2>
        <p className="mb-4">
          We welcome feedback on the accessibility of our website and are
          committed to addressing any barriers or issues that users may
          encounter.
        </p>

        <h3 className="mb-3 font-medium text-xl">How to Report Issues</h3>
        <p className="mb-3">
          If you encounter accessibility barriers or have suggestions for
          improvement, please contact us through:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Email:</strong> accessibility@phoenixcodestudio.com
          </li>
          <li>
            <strong>Contact Form:</strong> Accessible contact form on our
            website
          </li>
          <li>
            <strong>Phone:</strong> Voice support during business hours
          </li>
          <li>
            <strong>Mail:</strong> Written correspondence for detailed feedback
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">What to Include</h3>
        <p className="mb-3">
          When reporting accessibility issues, please include:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Specific URL:</strong> The page where you encountered the
            issue
          </li>
          <li>
            <strong>Description:</strong> Detailed description of the problem
          </li>
          <li>
            <strong>Assistive Technology:</strong> What tools or software you
            were using
          </li>
          <li>
            <strong>Browser and OS:</strong> Your browser and operating system
          </li>
          <li>
            <strong>Expected Behavior:</strong> What you expected to happen
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Response and Resolution</h3>
        <p className="mb-3">
          We are committed to addressing accessibility issues promptly:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Acknowledgment:</strong> We will respond to your report
            within 48 hours
          </li>
          <li>
            <strong>Investigation:</strong> We will investigate and assess the
            reported issue
          </li>
          <li>
            <strong>Resolution:</strong> We will implement fixes based on
            severity and impact
          </li>
          <li>
            <strong>Follow-up:</strong> We will update you on the resolution
            progress
          </li>
        </ul>
      </section>

      <section id="third-party-content" className="mb-8">
        <h2>Third-Party Content</h2>
        <p className="mb-4">
          While we strive to ensure that all content on our website is
          accessible, some third-party content may not meet our accessibility
          standards. We actively work with our partners to address these issues.
        </p>

        <h3 className="mb-3 font-medium text-xl">Third-Party Services</h3>
        <p className="mb-3">
          We work with third-party service providers who share our commitment to
          accessibility:
        </p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Content Management:</strong> Ensuring our CMS supports
            accessible content creation
          </li>
          <li>
            <strong>Analytics:</strong> Using accessibility-compliant analytics
            tools
          </li>
          <li>
            <strong>Chat Support:</strong> Accessible customer support widgets
          </li>
          <li>
            <strong>Payment Processing:</strong> Accessible payment forms and
            processes
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Vendor Requirements</h3>
        <p className="mb-3">We require our vendors and partners to:</p>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>Provide accessibility conformance documentation</li>
          <li>Demonstrate WCAG 2.1 AA compliance for their services</li>
          <li>Maintain accessibility standards in updates and changes</li>
          <li>Provide accessible alternatives when barriers exist</li>
        </ul>
      </section>

      <section id="accessibility-statement-updates" className="mb-8">
        <h2>Accessibility Statement Updates</h2>
        <p className="mb-4">
          This accessibility statement is reviewed and updated regularly to
          reflect our ongoing commitment to accessibility and any changes to our
          website, services, or accessibility standards.
        </p>

        <h3 className="mb-3 font-medium text-xl">Review Schedule</h3>
        <ul role="list" className="space-y-2 mb-6 pl-6 list-disc list-outside">
          <li>
            <strong>Quarterly Updates:</strong> Regular reviews every three
            months
          </li>
          <li>
            <strong>Standards Updates:</strong> Updates when new accessibility
            standards are released
          </li>
          <li>
            <strong>Service Changes:</strong> Updates when significant changes
            are made to our services
          </li>
          <li>
            <strong>Feedback Integration:</strong> Updates based on user
            feedback and testing results
          </li>
        </ul>

        <h3 className="mb-3 font-medium text-xl">Version History</h3>
        <p className="mb-6">
          We maintain a record of significant changes to this accessibility
          statement and our accessibility improvements, which is available upon
          request.
        </p>
      </section>

      <section id="contact-information" className="mb-8">
        <h2>Contact Information</h2>
        <p className="mb-4">
          For questions about this accessibility statement, to report
          accessibility issues, or to request accessibility assistance, please
          contact us through the following methods:
        </p>

        <div>
          <h3>Phoenix Code Studio Accessibility Team</h3>
          <p className="mb-2">
            <strong>Email:</strong> accessibility@phoenixcodestudio.com
          </p>
          <p className="mb-2">
            <strong>Website:</strong> Accessible contact form on our website
          </p>
          <p className="mb-2">
            <strong>Response Time:</strong> We aim to respond within 48 hours
          </p>
          <p className="mb-2">
            <strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM
          </p>
        </div>

        <div>
          <p>
            <strong>Accessibility Priority:</strong> We prioritize accessibility
            concerns and will work diligently to resolve any barriers to ensure
            equal access to our services for all users.
          </p>
        </div>
      </section>
    </div>
  );
}
