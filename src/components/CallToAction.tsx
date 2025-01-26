import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  return (
    <section className="w-full text-center py-9">
      <h2 className="text-3xl font-semibold text-primary">
        Ready to Get Started?
      </h2>
      <p className="text-lg mt-4">
        We’re excited to help you with your next project. Get in touch with us
        to discuss how we can work together.
      </p>
      <Button onClick={navigateToContact}>Contact Us</Button>
    </section>
  );
};

export default CallToAction;
