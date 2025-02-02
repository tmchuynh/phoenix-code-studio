"use client";

import EmphasizeText from "@/components/Highlighted";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { jobPositions } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { FC } from "react";

const JobListingsPage: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-10">
        Open Positions
      </h1>
      <p>
        Looking for a career that challenges, inspires, and propels you forward?
        We’re on the hunt for <EmphasizeText>driven</EmphasizeText> and{" "}
        <EmphasizeText>skilled</EmphasizeText> professionals eager to leave a
        mark in a fast-paced, innovative environment. Whether you specialize in
        development, design, marketing, or problem-solving, we have a role where
        you can thrive.
      </p>

      <p>
        Here, we foster a culture of <EmphasizeText>innovation</EmphasizeText>,{" "}
        <EmphasizeText>teamwork</EmphasizeText>, and{" "}
        <EmphasizeText>growth</EmphasizeText>. You'll have the chance to work on
        groundbreaking projects, refine your expertise, and contribute to
        shaping the future of business and technology. Browse our open positions
        and see where your talents fit in.
      </p>

      <p>
        Don't settle—
        <span className="text-primary font-extrabold">ELEVATE</span> your
        career. Join a team that values your ideas, celebrates your
        contributions, and supports your ambitions. Together, we’ll create
        something extraordinary.
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
              <h3 className="font-medium">Responsibilities:</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mt-4">
              <h3 className="font-medium">Qualifications:</h3>
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
                onClick={() => router.push("/applicant-submission")}
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
