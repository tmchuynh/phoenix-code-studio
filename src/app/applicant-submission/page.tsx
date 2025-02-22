"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { jobPositions } from "@/lib/constants";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";
import LoadingIndicator from "@/components/Loading";
import { Checkbox } from "@/components/ui/checkbox";

const ApplicantSubmissionPage = () => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>(["", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  // Handle position selection
  const handlePositionChange = (
    position: string,
    checked: boolean | string
  ) => {
    setSelectedPositions((prev) =>
      checked ? [...prev, position] : prev.filter((p) => p !== position)
    );
  };

  // Handle resume upload
  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setResume(event.target.files[0]);
    }
  };

  // Handle cover letter upload
  const handleCoverLetterUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files?.[0]) {
      setCoverLetter(event.target.files[0]);
    }
  };

  // Handle portfolio link updates
  const handlePortfolioChange = (index: number, value: string) => {
    const updatedLinks = [...portfolioLinks];
    updatedLinks[index] = value;
    setPortfolioLinks(updatedLinks);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validation
    if (selectedPositions.length === 0) {
      setError("Please select at least one position.");
      return;
    }

    if (!resume) {
      setError("Please upload your resume.");
      return;
    }

    if (portfolioLinks.every((link) => link.trim() === "")) {
      setError("Please provide at least one portfolio link.");
      return;
    }

    // Simulated form submission
    setTimeout(() => {
      setSuccessMessage("Your application has been submitted successfully!");
      setError(null);
      setSelectedPositions([]);
      setResume(null);
      setCoverLetter(null);
      setPortfolioLinks(["", "", ""]);
    }, 350);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1>Apply for Open Positions</h1>
      <p>
        We invite you to apply for one or more of our available job openings. To
        ensure your application is complete, please upload your most recent
        resume and include at least one link to your portfolio showcasing your
        work. While submitting a cover letter is optional, we encourage you to
        include one to help us better understand your motivations and
        qualifications for the role. We look forward to reviewing your
        application and learning more about the value you can bring to our team.
      </p>

      {error && <p className="text-destructive font-bold">{error}</p>}
      {successMessage && (
        <p className="text-success font-bold">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Positions Selection */}
        <section>
          <h2>Select the position(s) you're applying for:</h2>
          <p>
            Please take a moment to carefully review the available positions and
            select the one (or more) that best aligns with your skills,
            experience, and career aspirations. Each role has specific
            requirements, so be sure to choose positions where your
            qualifications match. If you are interested in multiple roles, feel
            free to apply for all that interest you, and we will evaluate your
            application for the most suitable opportunity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-5">
            {jobPositions.map((position) => (
              <div key={position.title} className="flex items-center">
                <Checkbox
                  id={position.title}
                  checked={selectedPositions.includes(position.title)}
                  onCheckedChange={(checked) =>
                    handlePositionChange(position.title, checked)
                  }
                />
                <label htmlFor={position.title} className="ml-2">
                  <p>{position.title}</p>
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Resume Upload (Required) */}
        <section>
          <h2>Upload Your Resume</h2>
          <p>
            Please upload your most recent resume to help us better understand
            your background, skills, and experience. Make sure your resume is
            up-to-date and accurately reflects your qualifications. This will
            allow us to assess your fit for the role(s) you're applying for and
            streamline the hiring process.
          </p>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="border border-border rounded w-11/12 md:w-full mx-auto h-fit md:text-md lg:text-xl file:text-accent-2 file:font-extrabold file:md:text-md file:lg:text-lg"
            required
          />
          {resume && (
            <p className="text-sm xl:text-lg ml-5 mt-2">
              <strong>Uploaded File:</strong> {resume.name}
            </p>
          )}
        </section>

        {/* Cover Letter Upload (Optional) */}
        <section>
          <h2>Upload a Cover Letter</h2>
          <p>
            While a cover letter is not required, we highly encourage you to
            upload <strong>one</strong> if you'd like to provide additional
            context about your experience, skills, and why you're interested in
            the position. A well-crafted cover letter can give us valuable
            insight into your motivation and how you align with our company
            values. If you choose to include one, please ensure it is tailored
            to the role you're applying for.
          </p>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleCoverLetterUpload}
            className="border border-border rounded w-11/12 md:w-full mx-auto h-fit md:text-md lg:text-xl file:text-accent-2 file:font-extrabold file:md:text-md file:lg:text-lg"
          />
          {coverLetter && (
            <p className="text-sm xl:text-lg ml-5 mt-2">
              <strong>Selected File:</strong> {coverLetter.name}
            </p>
          )}
        </section>

        {/* Portfolio Links (At Least One Required) */}
        <section>
          <h2>Portfolio Links</h2>
          <p>
            Please include <strong>at least one link</strong> to your portfolio
            to showcase your work. Whether it's a personal website, GitHub
            repository, or a collection of relevant projects, your portfolio
            gives us a clearer understanding of your skills and abilities. If
            you have multiple portfolio links, feel free to include them so we
            can explore a variety of your work.
          </p>
          <div className="space-y-3">
            {portfolioLinks.map((link, index) => (
              <Input
                key={index}
                type="url"
                placeholder={`Portfolio Link ${index + 1}`}
                value={link}
                className="border border-border rounded w-11/12 md:w-full mx-auto md:h-12 md:text-md lg:text-xl placeholder:text-accent-2"
                onChange={(e) => handlePortfolioChange(index, e.target.value)}
              />
            ))}
          </div>
        </section>

        {/* Submit Button */}
        <section className="mt-4">
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </section>
      </form>
    </main>
  );
};

export default ApplicantSubmissionPage;
