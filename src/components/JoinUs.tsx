import EmphasizeText from "@/components/Highlighted";
import { Button } from "./ui/button";

const JoinUs = () => {
  return (
    <section className="py-16 w-10/12 mx-auto text-balance text-end space-y-7">
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Come Be a Part of Our Team
      </h1>
      <p>
        Ready to take your career to the next level? At our company, we're
        looking for <EmphasizeText>passionate</EmphasizeText>,{" "}
        <EmphasizeText>talented</EmphasizeText> individuals eager to make a real
        impact in a dynamic, innovative environment. Whether you're a developer,
        designer, marketer, or someone who thrives on solving challenges,
        there's a place for you here.
      </p>

      <p>
        Join a culture that values <EmphasizeText>creativity</EmphasizeText>,{" "}
        <EmphasizeText>collaboration</EmphasizeText>, and{" "}
        <EmphasizeText>growth</EmphasizeText>. Work on exciting projects, expand
        your skill set, and help shape the future of technology and business.
        Explore our open positions and find out how you can play a key role in
        our success while advancing your own career.
      </p>

      <p>
        Don’t just work —{" "}
        <span className="text-primary font-extrabold">THRIVE</span>. Be part of
        a team where your ideas matter, your contributions are valued, and your
        career aspirations are supported. Let’s grow and achieve greatness
        together.
      </p>

      <Button
        className="my-3 w-1/2"
        variant={"secondary"}
        onClick={() => (window.location.href = "/careers")}
      >
        View Open Positions
      </Button>
    </section>
  );
};

export default JoinUs;
