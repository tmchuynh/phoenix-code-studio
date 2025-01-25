import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact-us");
  };

  return (
    <section
      className={cn("w-full text-center border-t-2 border-b-2 py-9", {
        "w-10/12 md:w-11/12 lg:w-full": open,
      })}
    >
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
