"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { jobPositions } from "@/lib/constants";
import { BpCheckbox } from "@/components/ui/checkbox-custom";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const ApplicantSubmissionPage = () => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>(["", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle position selection
  const handlePositionChange = (position: string, checked: boolean) => {
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
    }, 1500);
  };

  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
        Apply for Open Positions
      </h1>
      <p>
        Submit your application for one or more of our open positions. Ensure
        that you upload your resume and provide at least one portfolio link. A
        cover letter is optional.
      </p>

      {error && <p className="text-destructive font-bold">{error}</p>}
      {successMessage && (
        <p className="text-success font-bold">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Positions Selection */}
        <section>
          <h2 className="text-secondary mb-3">
            Select the position(s) you're applying for:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {jobPositions.map((position) => (
              <div key={position.title} className="flex items-center">
                <BpCheckbox
                  checked={selectedPositions.includes(position.title)}
                  onChange={(e) =>
                    handlePositionChange(position.title, e.target.checked)
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
          <h2 className="text-secondary mb-3">Upload Your Resume (Required)</h2>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="border border-border rounded w-11/12 md:w-full mx-auto md:h-12 md:text-md lg:text-xl file:text-accent-2 file:font-extrabold file:md:text-md file:lg:text-lg"
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
          <h2 className="text-secondary mb-3">
            Upload a Cover Letter (Optional)
          </h2>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleCoverLetterUpload}
            className="border border-border rounded w-11/12 md:w-full mx-auto md:h-12 md:text-md lg:text-xl file:text-accent-2 file:font-extrabold file:md:text-md file:lg:text-lg"
          />
          {coverLetter && (
            <p className="text-sm xl:text-lg ml-5 mt-2">
              <strong>Selected File:</strong> {coverLetter.name}
            </p>
          )}
        </section>

        {/* Portfolio Links (At Least One Required) */}
        <section>
          <h2 className="text-secondary mb-3">
            Portfolio Links (At Least One Required)
          </h2>
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
