"use client";

export const whyWritingMattersContent = {
  intro: {
    title: "Why Writing Matters",
    description:
      "Asking why writing matters is similar to asking why communication is important. In any part of our lives, we want to be the most efficient and effective communicators we can be in order to present our ideas across to both technical and non-technical counterparts. The truth is, the need for strong writing proficiency will never diminish but may only increase as time goes on.",
  },
  benefits: {
    title: "How It Benefits Your Future",
    description:
      "Through writing about different topics, we are not only encouraged but forced to do essential research to put out the best information we can. This gives us the opportunity to learn more about these topics and get a better understanding of them. Therefore, we become a better developer by attaining a deeper knowledge base in both soft and technical skills.\n\nDuring the research, we are also exposed to learning about new technologies that are upcoming. This allows us to stay updated with the current trends and new versions of existing technologies. By posting and writing about all these topics, your articles also become your own personal notes for every topic you want to go back to while giving back to the community and helping newer developers following in your footsteps. It's a win-win scenario!",
  },
  devToBenefits: {
    title: "What dev.to Can Help You With",
    description:
      "Dev.to has a wonderful community of encouraging and supportive folks. They are helpful in many ways. Publishing will make our presence public online but also connect us with those outside of our local circles. Through these connections, we have the opportunity to build relationships online that let us find help in people who have such a variety of knowledge in many fields.\n\nPlus, when you publish knowledgeable information, it validates your knowledge to you and others. Writing about what you know and your journey can also grab the attention of potential employers and clients.",
  },
  howToStart: {
    title: "How to Start Today",
    description:
      "Remember to write because you want to, not because others tell you to. Write about the topics that matter to you - what do you care about, what interests you, what are you passionate about? Your interest and passion will shine through in your writing and pique interest in your readers.",
  },
  tips: {
    title: "Some Tips",
    points: [
      "Explain any abbreviations and/or acronyms before using them in articles.",
      "Write consistently (i.e., set a publishing schedule).",
      "Use simple terms. Remove jargon and don't expect your readers to be familiar with technical terms.",
      "Use headers and a table of contents to divide your article into sections.",
      "Use correct titles (not click-baits) and deliver on your topics.",
      "Write series if your topics are more complex but don't make your readers click through to 'read the rest.'",
    ],
  },
  conclusion: {
    title: "Conclusion",
    description:
      "Writing can be a lot of fun and a wonderful learning opportunity. But at the end of the day, it is your personal choice how much you want to contribute to the community or if you want to contribute at all. It can depend on your available time, what you're comfortable with, etc. In the end, do what's best for you.",
  },
};

import { Badge } from "@/components/ui/badge";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const WhyWritingMattersBlog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {whyWritingMattersContent.intro.title}
          </h1>
          <p className="text-lg">
            {whyWritingMattersContent.intro.description}
          </p>
          <div className="flex justify-center space-x-2">
            <Badge variant={"outline"} className="text-sm">
              #self-development
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #career
            </Badge>
          </div>
        </header>

        <div className="relative flex flex-col w-full text-pretty">
          <FaQuoteLeft className="absolute size-7 -top-3" />
          <p className="indent-10">
            {" "}
            In fact, the importance of writing has perhaps increased in the last
            decade or so, thanks to trends in technology...In matters of
            business, when every second counts, strong writing makes the
            difference between smooth operations and clumsy footing.
          </p>
          <FaQuoteRight className="absolute right-8 bottom-4 size-7" />
          <p className="self-end mx-24">HuffPost</p>
        </div>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.benefits.title}
          </h2>
          <p className="text-lg">
            {whyWritingMattersContent.benefits.description}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.devToBenefits.title}
          </h2>
          <p className="text-lg">
            {whyWritingMattersContent.devToBenefits.description}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.howToStart.title}
          </h2>
          <p className="text-lg">
            {whyWritingMattersContent.howToStart.description}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.tips.title}
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {whyWritingMattersContent.tips.points.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            {whyWritingMattersContent.conclusion.title}
          </h2>
          <p className="text-lg">
            {whyWritingMattersContent.conclusion.description}
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
            For more insights on <strong>Writing and Development</strong>, check
            out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and start enhancing your communication skills today.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default WhyWritingMattersBlog;
