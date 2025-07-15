import ContactForm from "@/components/forms/ContactForm";

export default function ContactUs() {
  return (
    <div className="relative mx-auto sm:pt-5 w-11/12 overflow-hidden">
      <h1>Contact Us</h1>
      <p>
        Ready to start your next project or have questions about our services?
        We&apos;d love to hear from you. Get in touch with our team to discuss
        how we can help bring your vision to life.
      </p>

      <div className="mb-12">
        <h2>Send us a message</h2>
        <ContactForm />
      </div>

      <div className="pt-8 border-t">
        <h2>Get in Touch</h2>
        <p className="mb-6">
          Whether you&apos;re looking to build a new website, redesign an
          existing one, or need ongoing support, we&apos;re here to help.
          Contact us using any of the methods below, and we&apos;ll get back to
          you as soon as possible.
        </p>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-xl">Contact Information</h3>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong> info@phoenixcodestudio.com
              </li>
              <li>
                <strong>Phone:</strong> (555) 123-4567
              </li>
              <li>
                <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00
                PM
              </li>
              <li>
                <strong>Response Time:</strong> Within 24 hours
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-xl">What to Expect</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Initial Consultation</h4>
                <p>
                  We&apos;ll schedule a free consultation to discuss your
                  project, understand your needs, and explore how we can help
                  achieve your goals.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Project Proposal</h4>
                <p>
                  Based on our discussion, we&apos;ll prepare a detailed
                  proposal outlining the scope, timeline, and investment for
                  your project.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Project Kickoff</h4>
                <p>
                  Once you approve the proposal, we&apos;ll begin working on
                  your project with regular updates and communication throughout
                  the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mx-auto pt-8 border-t">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2>Project Inquiry</h2>
            <p className="mb-4">
              To help us better understand your project and provide you with the
              most accurate information, please include the following details
              when you contact us:
            </p>

            <ul className="space-y-1 pl-9 text-sm list-[upper-roman] list-outside">
              <li>Brief description of your project</li>
              <li>Your business or organization name</li>
              <li>Timeline and launch date requirements</li>
              <li>Budget range (if known)</li>
              <li>Any specific features or functionality needed</li>
              <li>Your target audience and goals</li>
            </ul>
            <blockquote>
              Every great project starts with a conversation. We&apos;re excited
              to hear about your ideas and help turn them into reality.
            </blockquote>
          </div>

          <div>
            <h2>Service Areas</h2>
            <p className="mb-4">
              We provide services to clients worldwide, working remotely to
              deliver exceptional results regardless of your location. Our team
              is experienced in collaborating with clients across different time
              zones and cultural backgrounds.
            </p>

            <h3>Local Presence</h3>
            <p>
              While we work with clients globally, we&apos;re based in [Your
              Location] and are available for local meetings and consultations
              when needed.
            </p>
          </div>
        </div>

        <div className="space-y-6 mt-8">
          <div>
            <h2>Frequently Asked Questions</h2>
            <p>
              Before contacting us, you might want to check our FAQ section for
              answers to common questions about our services, process, and
              pricing.
            </p>
          </div>

          <div>
            <h2>Technical Support</h2>
            <p>
              If you&apos;re an existing client and need technical support,
              please visit our support page for faster assistance with urgent
              issues.
            </p>
          </div>

          <div>
            <h2>Partnership Opportunities</h2>
            <p>
              We&apos;re always interested in collaborating with other
              professionals and agencies. If you&apos;re interested in
              partnership opportunities, please mention this in your message.
            </p>
          </div>

          <div className="py-8 text-center">
            <h2>Ready to Start Your Project?</h2>
            <p className="text-lg">
              Don&apos;t wait—great websites don&apos;t happen overnight.
              Contact us today to begin the journey toward a more effective
              online presence for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
