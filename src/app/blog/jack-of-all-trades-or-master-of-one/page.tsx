"use client";

export const jackOfAllTradesContent = {
  intro: {
    title: "What's a Jack of All Trades?",
    description:
      'The phrase "Jack of all trades, master of none" refers to a person who is competent in many skills but is not exactly outstanding in any of them. Even though "jack of all trades" sometimes is used as an insult, it did not begin as one. The complete saying goes "A jack of all trades is a master of none, but oftentimes better than a master of one." It\'s intended as a compliment and means that a person as a generalist rather than a specialist, being versatile and adept is better.',
  },
  origin: {
    title: "Origin of the Saying",
    description:
      'The phrase dates back to the 14th century. At this time "Jack" was a typical name to describe the ordinary man. The working class often had to supplement their income by doing other jobs. A builder would supplement his income by painting or farming as well.\n\nOne very well-known jack of all trades was William Shakespeare. He would help with the stage, the set, the costumes, and try directing as well.',
  },
  benefits: {
    title: "Benefits of Hiring a Jack of All Trades",
    points: [
      {
        title: "They have a diverse set of skills",
        description:
          "Most jack of all trades have picked up an increasingly amount of self-confidence while learning their different skills. This will help them in whatever new skills they will need to learn in the future.",
      },
      {
        title: "They are a wonderful addition to the team for startups",
        description:
          "Since startups have limited funds, individuals with multiple skills-sets are extremely useful. Instead of hiring multiple people for different tasks, startups are able to save by hiring a single person who efficiently gets all the necessary tasks completed.",
      },
      {
        title: "They love to learn",
        description:
          "Jack of all trades are often lifelong learners. They have a thirst for knowledge and will constantly be looking for the next new thing to improve upon.",
      },
      {
        title: "They are a great fit for leadership",
        description:
          "A leader who knows and understands every aspect of the business will always have an edge over someone who only specialized in one area. This is where jack of all trades shine in leadership.",
      },
    ],
  },
  howToBecome: {
    title: "How to Become a Jack of All Trades?",
    description:
      "When learning new skills (aka on your way to becoming a jack of all trades), you learn very useful skills. Some of these benefits include better understanding of your own strengths and weaknesses as well as learning time management and healthy boundaries.",
  },
  tips: {
    title: "How you can be a jack of all trades",
    points: [
      {
        title: "Not making a decision is a decision",
        description:
          'Do you believe that refusing to make a decision between your options means you\'re keeping your options open? Think again. Remember how time is limited. And what time and effort you are not spending on one thing, whatever you say "yes" to, you are implicitly or explicitly saying "no" to everything else.',
      },
      {
        title: "Don't limit yourself to one thing",
        description:
          "Who says you can't do it all? If you think it's possible, give it a try. The worst that can happen is that you fail. But guess what? That's fantastic! Because most people won't even have the guts to try in the first place.\n\nNow you have the lessons you've learned from your previous attempt to try again. Let's go again. Let's figure this out. You can do this. Need to cut back on responsibilities? Let's do that. Need to delegate? Let's figure out how. You can do whatever you set your mind to.",
      },
      {
        title: "Learn skills that complement each other",
        description:
          "Look for skills that can complement the ones you've already developed. For example, those working in IT can think about learning the basics of networking, security, and software development.",
      },
    ],
  },
};

import React from "react";

const JackOfAllTradesBlog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {jackOfAllTradesContent.intro.title}
          </h1>
          <p className="text-lg">{jackOfAllTradesContent.intro.description}</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {jackOfAllTradesContent.origin.title}
          </h2>
          <p className="text-lg">{jackOfAllTradesContent.origin.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {jackOfAllTradesContent.benefits.title}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {jackOfAllTradesContent.benefits.points.map((benefit, index) => (
              <li key={index}>
                <strong>{benefit.title}:</strong> {benefit.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {jackOfAllTradesContent.howToBecome.title}
          </h2>
          <p className="text-lg">
            {jackOfAllTradesContent.howToBecome.description}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {jackOfAllTradesContent.tips.title}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {jackOfAllTradesContent.tips.points.map((tip, index) => (
              <li key={index}>
                <strong>{tip.title}:</strong> {tip.description}
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
            For more insights on <strong>Personal Development</strong>, check
            out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and explore strategies to enhance your skills and mindset.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default JackOfAllTradesBlog;
