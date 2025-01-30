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
        We’re thrilled at the opportunity to collaborate on your next project!
        Whether you’re looking to build a stunning website, enhance your digital
        presence, or bring a new idea to life, we’re here to help every step of
        the way.
      </p>
      <p>
        Get in touch with us to discuss your goals, explore tailored solutions,
        and discover how we can create something extraordinary together. Let’s
        make your vision a reality!
      </p>
      <Button className="w-1/2 my-3" onClick={navigateToContact}>
        Contact Us
      </Button>
    </section>
  );
};

export default CallToAction;
