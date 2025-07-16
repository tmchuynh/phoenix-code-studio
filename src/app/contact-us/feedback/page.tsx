import FeedbackForm from "@/components/forms/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div className="relative mx-auto sm:pt-5 w-11/12">
      <div className="mb-8">
        <h1 className="mb-4 font-bold text-3xl md:text-4xl">Client Feedback</h1>
        <p className="text-lg text-muted-foreground">
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
          <h2 className="mb-4 font-semibold text-2xl">
            Why Your Feedback Matters
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-lg">Help Us Improve</h3>
              <p className="text-muted-foreground">
                Your feedback helps us understand what we're doing well and
                where we can improve our services to better serve future
                clients.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-lg">
                Assist Other Clients
              </h3>
              <p className="text-muted-foreground">
                With your permission, your feedback may be displayed on our
                website to help potential clients understand our capabilities
                and service quality.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-semibold text-2xl">
            What We Do With Your Feedback
          </h2>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold">Internal Review</h4>
              <p className="text-muted-foreground text-sm">
                All feedback is reviewed by our team to identify areas for
                improvement and to celebrate successes.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold">Service Enhancement</h4>
              <p className="text-muted-foreground text-sm">
                We use your insights to refine our processes, improve
                communication, and enhance our service offerings.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold">Testimonials (Optional)</h4>
              <p className="text-muted-foreground text-sm">
                With your consent, positive feedback may be featured on our
                website to help other potential clients make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 text-center">
          <h2 className="mb-4 font-semibold text-2xl">Thank You</h2>
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
