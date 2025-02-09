"use client";

import EmphasizeText from "@/components/Highlighted";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { jobPositions } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

const JobListingsPage: FC = () => {
  const router = useRouter();

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <div className="flex gap-4">
        <div>
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-10">
            Elevate Your Career with Us
          </h1>
          <p>
            Looking for a career that challenges, inspires, and drives your
            success? We’re seeking passionate professionals ready to make an
            impact in a fast-paced, innovative environment. Whether you
            specialize in development, design, marketing, or strategy, we offer
            opportunities where you can thrive, grow, and lead.
          </p>
          <p>
            At our company, innovation, collaboration, and career growth are at
            the core of what we do. Work on cutting-edge projects, sharpen your
            expertise, and help shape the future of business and technology.
          </p>
          <p>
            Don't settle—
            <span className="text-primary font-extrabold">ELEVATE</span> your
            career. Join a team that values your ideas, celebrates your
            achievements, and supports your ambitions. Explore our open
            positions and take the next step in building something
            extraordinary.
          </p>
        </div>
        <Image
          src="/images/logo.png"
          alt="Phoenix Code Studio Logo"
          width={500}
          height={500}
          className="w-72 h-72 rounded-t-md object-cover mb-1"
        />
      </div>

      {/* Job Listings */}
      <section className="space-y-10 mt-8">
        {jobPositions.map((job, index) => (
          <section key={index} className="border-b pb-8">
            {/* Job Title */}
            <h2 className="font-semibold text-secondary">{job.title}</h2>

            {/* Additional Information */}
            <h3 className="mt-1 p-0 text-accent-1 text-sm md:text-md lg:text-lg">
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
                className="px-6 py-3 w-1/4 text-lg"
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
