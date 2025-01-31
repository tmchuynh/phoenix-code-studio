"use client";

import EmphasizeText from "@/components/Highlighted";
import { Button } from "@/components/ui/button";
import { jobPositions } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const JobListingsPage: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-9/12 mx-auto py-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-10">
        Open Positions
      </h1>
      <p>
        Are you ready to take your career to the next level? At our company,
        we're searching for{" "}
        <span className="underline underline-offset-4 text-primary">
          passionate
        </span>
        , <EmphasizeText>talented</EmphasizeText> individuals who want to make a
        real impact in a dynamic and innovative environment. Whether you're a
        developer, designer, marketer, or someone who thrives on solving
        challenges, we have a place for you. By joining our team, you'll be part
        of a culture that values <EmphasizeText>creativity</EmphasizeText>,{" "}
        <EmphasizeText>collaboration</EmphasizeText>, and{" "}
        <EmphasizeText>growth</EmphasizeText>. We offer opportunities to work on
        exciting projects, learn new skills, and contribute to shaping the
        future of technology and business. Explore our open positions and
        discover how you can play a key role in our success while advancing your
        own career.
      </p>
      <p>
        Don’t just work —{" "}
        <span className="text-primary font-extrabold">THRIVE</span>. Come join a
        team where your ideas are valued, your contributions are recognized, and
        your career aspirations are supported. Let’s grow and achieve great
        things together.
      </p>

      {/* Job Listings */}
      <section className="space-y-10 mt-8">
        {jobPositions.map((job, index) => (
          <section key={index} className="border-b pb-8">
            {/* Job Title */}
            <h2 className="text-2xl font-semibold text-secondary">
              {job.title}
            </h2>

            {/* Additional Information */}
            <h3 className="mt-1 p-0 text-tertiary text-sm md:text-md lg:text-lg">
              {job.information}
            </h3>

            {/* Job Description */}
            <p className="mt-3 text-lg">{job.description}</p>

            {/* Responsibilities */}
            <div className="mt-4">
              <h3 className="text-xl font-medium">Responsibilities:</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mt-4">
              <h3 className="text-xl font-medium">Qualifications:</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                {job.qualifications.map((qual, i) => (
                  <li key={i}>{qual}</li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <Button
                variant={"secondary"}
                onClick={() => router.push("contact-us")}
                className="px-6 py-3 text-lg"
              >
                Apply Now
              </Button>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default JobListingsPage;
