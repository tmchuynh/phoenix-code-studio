import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  return (
    <section className="w-9/12 mx-auto space-y-6 py-9">
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Ready to Get Started?
      </h1>
      <p className="mt-4">
        We’re excited to help bring your vision to life! Whether you need a
        custom website, brand transformation, or digital strategy, we’re here to
        guide you every step of the way.
      </p>
      <p>
        Let’s collaborate to create something extraordinary. Contact us today to
        discuss your goals and explore tailored solutions that drive results!
      </p>
      <Button
        className="w-1/2 my-3"
        variant={"secondary"}
        onClick={navigateToContact}
      >
        Contact Us
      </Button>
    </section>
  );
};

export default CallToAction;
