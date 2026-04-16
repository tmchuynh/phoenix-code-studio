import FeedbackForm from "@/components/forms/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div className="relative mx-auto sm:pt-5 w-11/12">
      <div className="mb-8">
        <h1>Client Feedback</h1>
        <p>
          We value your feedback and would love to hear about your experience
          working with us. Your insights help us improve our services and may
          help other potential clients understand what we can offer.
        </p>
      </div>

      <div className="mb-12">
        <FeedbackForm />
      </div>

      <div className="space-y-6 pt-8 border-t">
        <div>
          <h2>Why Your Feedback Matters</h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h3>Help Us Improve</h3>
              <p className="text-muted-foreground">
                Your feedback helps us understand what we're doing well and
                where we can improve our services to better serve future
                clients.
              </p>
            </div>
            <div>
              <h3>Assist Other Clients</h3>
              <p className="text-muted-foreground">
                With your permission, your feedback may be displayed on our
                website to help potential clients understand our capabilities
                and service quality.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3>What We Do With Your Feedback</h3>
          <div className="space-y-4">
            <div>
              <h4>Internal Review</h4>
              <p>
                All feedback is reviewed by our team to identify areas for
                improvement and to celebrate successes.
              </p>
            </div>

            <div>
              <h4>Service Enhancement</h4>
              <p>
                We use your insights to refine our processes, improve
                communication, and enhance our service offerings.
              </p>
            </div>

            <div>
              <h4>Testimonials (Optional)</h4>
              <p>
                With your consent, positive feedback may be featured on our
                website to help other potential clients make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 text-center">
          <h2>Thank You</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Thank you for taking the time to share your feedback with us. Every
            piece of feedback is valuable and helps us continue to deliver
            exceptional service to our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
