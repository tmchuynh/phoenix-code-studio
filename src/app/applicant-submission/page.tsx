"use client";

import LoadingIndicator from "@/components/states/Loading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { jobPositions } from "@/lib/constants";
import { useState } from "react";

const ApplicantSubmissionPage = () => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>([""]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  if (loading) {
    return <LoadingIndicator />;
  }

  /**
   * Updates the selected positions based on the provided position and its checked status.
   *
   * @param {string} position - The position to be added or removed from the selected positions.
   * @param {boolean | string} checked - The status indicating whether the position is selected (true) or not (false).
   * If a string is provided, it will be treated as a truthy value.
   */
  const handlePositionChange = (
    position: string,
    checked: boolean | string
  ) => {
    setSelectedPositions((prev) =>
      checked ? [...prev, position] : prev.filter((p) => p !== position)
    );
  };

  /**
   * Updates the portfolio link at the specified index with the given value.
   *
   * @param {string} value - The new portfolio link to be set.
   * @param {number} index - The index of the portfolio link to be updated.
   */
  const handlePortfolioChange = (value: string, index: number) => {
    setPortfolioLinks((prevState) =>
      prevState.map((link, i) => (i === index ? value : link))
    );
  };

  /**
   * Handles the paste event for an input element.
   *
   * @param e - The clipboard event triggered by pasting.
   * @param index - The index of the input element being pasted into.
   */
  const handlePaste: (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => void = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    const pastedValue = e.clipboardData.getData("Text");
    handlePortfolioChange(pastedValue, index);
  };

  /**
   * Handles the change event for input elements and updates the form data state.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event triggered by the input element.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Handles the form submission event.
   *
   * @param {React.FormEvent} e - The form submission event.
   *
   * This function performs the following actions:
   * 1. Prevents the default form submission behavior.
   * 2. Validates that at least one position is selected.
   * 3. Validates that at least one portfolio link is provided.
   * 4. Sends the form data using the EmailJS service.
   * 5. Displays a success message upon successful submission.
   * 6. Resets the selected positions and portfolio links.
   * 7. Clears the success message after a delay of 5 seconds.
   *
   * If validation fails, an error message is set and the form submission is halted.
   * If the EmailJS service encounters an error, an error message is displayed.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;

    if (selectedPositions.length === 0) {
      setError("Please select at least one position.");
      return;
    }

    if (portfolioLinks.every((link) => link.trim() === "")) {
      setError("Please provide at least one portfolio link.");
      return;
    }

    setSuccessMessage("Your application has been submitted successfully!");
    setSelectedPositions([]);
    setPortfolioLinks([""]);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000); // Increase delay to 5000ms (5 seconds)
  };

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
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

      {error && <p className="font-bold text-destructive">{error}</p>}
      {successMessage && (
        <p className="font-bold text-success">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} id="application-form" className="space-y-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold text-lg">
            Name
          </label>
          <input
            autoCapitalize="on"
            inputMode="text"
            autoComplete="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              handleChange(e);
            }}
            required
            className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-primary w-full focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold text-lg">
            Email
          </label>
          <input
            autoCapitalize="off"
            inputMode="email"
            autoComplete="email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
            }}
            required
            className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-primary w-full focus:outline-none"
          />
        </div>

        <section>
          <h2>Important Note</h2>
          <p>
            Please email your resume and cover letter(s) to the following email:
            <Button variant={"link"}>tinamchuynh@gmail.com</Button>
          </p>
        </section>

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
          <div className="gap-3 grid grid-cols-1 md:grid-cols-2 ml-5">
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
          <div className="flex flex-col space-y-3">
            <Button
              variant={"accent"}
              onClick={() => setPortfolioLinks((prev) => [...prev, ""])}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              Add another portfolio link
            </Button>
            {portfolioLinks.map((link, index) => (
              <Input
                key={index}
                type="url"
                onPaste={(e) => handlePaste(e, index)}
                onChange={(e) => handlePortfolioChange(e.target.value, index)}
                placeholder={`Portfolio Link ${index + 1}`}
                value={link}
                className="mx-auto border border-border rounded w-11/12 md:w-full md:h-12 md:text-md lg:text-xl placeholder:text-accent"
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
