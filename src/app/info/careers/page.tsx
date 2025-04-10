"use client";
import LoadingIndicator from "@/components/states/Loading";
import { Button } from "@/components/ui/button";
import { jobPositions } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const JobListingsPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <div className="flex gap-4">
        <div>
          {/* Page Title */}
          <h1 className="mb-10 font-bold text-3xl text-primary md:text-4xl lg:text-5xl">
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
            <span className="font-extrabold text-primary">ELEVATE</span> your
            career. Join a team that values your ideas, celebrates your
            achievements, and supports your ambitions. Explore our open
            positions and take the next step in building something
            extraordinary.
          </p>
        </div>
        <Image
          src={theme === "dark" ? "/images/logo_white.png" : "/images/logo.png"}
          alt="Phoenix Code Studio Logo"
          width={500}
          height={500}
          className={cn(
            "w-44 md:w-64 lg:w-80 rounded-t-md object-cover mx-auto mb-1"
          )}
        />
      </div>

      {/* Job Listings */}
      <section className="space-y-10 mt-8">
        {jobPositions.map((job, index) => (
          <section key={index} className="flex flex-col pb-8 border-b">
            {/* Job Title */}
            <h2 className="font-semibold text-secondary">{job.title}</h2>

            {/* Additional Information */}
            <h3 className="mt-1 p-0 text-accent-5 text-sm md:text-md lg:text-lg">
              {job.information}
            </h3>

            {/* Job Description */}
            <p className="mt-3">{job.description}</p>

            {/* Call to Action */}
            <Button
              variant={"accent"}
              onClick={() => router.push("/applicant-submission")}
              className="mt-4 py-3 h-fit text-lg text-wrap"
            >
              Apply Now For The {job.title} Position
            </Button>

            {/* Responsibilities */}
            <div className="mt-2">
              <h3 className="font-medium">Responsibilities:</h3>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mt-2">
              <h3 className="font-medium">Qualifications:</h3>
              <ul>
                {job.qualifications.map((qual, i) => (
                  <li key={i}>{qual}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default JobListingsPage;
