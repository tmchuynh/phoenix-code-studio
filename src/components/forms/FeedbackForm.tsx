"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StarRatingInput from "@/components/ui/star-rating-input";
import { Textarea } from "@/components/ui/textarea";
import { FeedbackFormData, FeedbackStep, WorkType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { sortByLength } from "@/lib/utils/sort";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Loader2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const PREDEFINED_TAGS = [
  "Professional",
  "Creative",
  "Fast Response",
  "High Quality",
  "User-Friendly",
  "Responsive Design",
  "SEO Optimized",
  "Modern Design",
  "Great Communication",
  "On Time Delivery",
  "Excellent Support",
  "Affordable",
  "Innovative",
  "Reliable",
  "Detailed",
];

const WORK_TYPES: WorkType[] = [
  "Web Design",
  "Custom Website Development",
  "E-commerce Development",
  "Mobile App Development",
  "SEO Optimization",
  "Website Maintenance",
  "Logo Design",
  "Branding",
  "Content Management",
  "Other",
];

const getInitialFormData = (): FeedbackFormData => ({
  isAnonymous: false,
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  websiteName: "",
  workType: "Custom Website Development",
  rating: 0,
  feedback: "",
  tags: [],
  customTags: "",
  displayOnWebsite: true,
});

export default function FeedbackForm() {
  const [currentStep, setCurrentStep] = useState<FeedbackStep>(1);
  const [formData, setFormData] =
    useState<FeedbackFormData>(getInitialFormData());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  // Auto-hide alert after 5 seconds
  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: WorkType) => {
    setFormData((prev) => ({
      ...prev,
      workType: value,
    }));
  };

  const handleAnonymousToggle = (isAnonymous: boolean) => {
    setFormData((prev) => ({
      ...prev,
      isAnonymous,
      ...(isAnonymous && {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      }),
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleTagToggle = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleDisplayToggle = (displayOnWebsite: boolean) => {
    setFormData((prev) => ({
      ...prev,
      displayOnWebsite,
    }));
  };

  const validateStep = (step: FeedbackStep): boolean => {
    switch (step) {
      case 1:
        if (!formData.isAnonymous) {
          return !!(
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.websiteName &&
            formData.workType
          );
        }
        return !!(formData.websiteName && formData.workType);
      case 2:
        return formData.rating > 0 && formData.feedback.trim().length > 0;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep((prev) => (prev + 1) as FeedbackStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FeedbackStep);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Only submit if we're on the final step
    if (currentStep !== totalSteps) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Process custom tags
      const customTagsArray = formData.customTags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const allTags = [...formData.tags, ...customTagsArray];

      const submissionData = {
        ...formData,
        tags: allTags,
      };

      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your feedback! We appreciate your input.",
        });
        // Reset form
        setFormData(getInitialFormData());
        setCurrentStep(1);
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.error || "Failed to submit feedback. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={formData.isAnonymous}
                  onCheckedChange={handleAnonymousToggle}
                />
                <Label htmlFor="anonymous" className="font-medium text-sm">
                  Submit feedback anonymously
                </Label>
              </div>
            </div>

            {!formData.isAnonymous && (
              <div className="space-y-4">
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required={!formData.isAnonymous}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required={!formData.isAnonymous}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required={!formData.isAnonymous}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="websiteName">
                Website/Company Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="websiteName"
                name="websiteName"
                type="text"
                required
                value={formData.websiteName}
                onChange={handleInputChange}
                placeholder="Enter the website or company name"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workType">
                Type of Work Done <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.workType}
                onValueChange={handleSelectChange}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select work type" />
                </SelectTrigger>
                <SelectContent>
                  {sortByLength(WORK_TYPES, false).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="rating">
                Rating <span className="text-destructive">*</span>
              </Label>
              <div className="flex items-center space-x-4">
                <StarRatingInput
                  rating={formData.rating}
                  onRatingChange={handleRatingChange}
                  disabled={isSubmitting}
                />
                <span className="text-muted-foreground text-sm">
                  {formData.rating > 0
                    ? `${formData.rating} out of 5`
                    : "Select a rating"}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">
                Feedback <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="feedback"
                name="feedback"
                required
                value={formData.feedback}
                onChange={handleInputChange}
                placeholder="Tell us about your experience working with us..."
                rows={6}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-4">
              <Label>Quick Tags (Optional)</Label>
              <div className="flex flex-wrap gap-2">
                {PREDEFINED_TAGS.map((tag) => (
                  <Badge
                    key={tag}
                    variant={
                      formData.tags.includes(tag) ? "default" : "outline"
                    }
                    className={cn(
                      "transition-colors cursor-pointer",
                      formData.tags.includes(tag) &&
                        "bg-primary text-primary-foreground"
                    )}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                    {formData.tags.includes(tag) && (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customTags">Additional Keywords (Optional)</Label>
              <Input
                id="customTags"
                name="customTags"
                type="text"
                value={formData.customTags}
                onChange={handleInputChange}
                placeholder="Enter custom keywords separated by commas"
                disabled={isSubmitting}
              />
              <p className="text-muted-foreground text-xs">
                Separate multiple keywords with commas
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="displayOnWebsite"
                  checked={formData.displayOnWebsite}
                  onCheckedChange={handleDisplayToggle}
                />
                <Label
                  htmlFor="displayOnWebsite"
                  className="font-medium text-sm"
                >
                  I consent to having my feedback displayed on the website
                </Label>
              </div>
              <p className="text-muted-foreground text-sm">
                Your feedback may be used as a testimonial on our website to
                help other potential clients. If you prefer to keep your
                feedback private, please uncheck this option.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="mb-2 font-semibold">Review Your Feedback</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Client:</strong>{" "}
                  {formData.isAnonymous
                    ? "Anonymous"
                    : `${formData.firstName} ${formData.lastName}`}
                </p>
                <p>
                  <strong>Website/Company:</strong> {formData.websiteName}
                </p>
                <p>
                  <strong>Work Type:</strong> {formData.workType}
                </p>
                <p>
                  <strong>Rating:</strong> {formData.rating}/5 stars
                </p>
                <p>
                  <strong>Feedback:</strong> {formData.feedback}
                </p>
                {formData.tags.length > 0 && (
                  <p>
                    <strong>Tags:</strong> {formData.tags.join(", ")}
                  </p>
                )}
                {formData.customTags && (
                  <p>
                    <strong>Additional Keywords:</strong> {formData.customTags}
                  </p>
                )}
                <p>
                  <strong>Display on Website:</strong>{" "}
                  {formData.displayOnWebsite ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Share Your Feedback</h2>
          <div className="text-muted-foreground text-sm">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
        <Progress value={progressPercentage} className="w-full" />
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        {submitStatus.type && (
          <Alert
            className="my-6"
            variant={
              submitStatus.type === "success" ? "default" : "destructive"
            }
          >
            <div className="flex items-center space-x-2">
              {submitStatus.type === "success" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {submitStatus.type === "success" ? "Success!" : "Error"}
              </AlertTitle>
            </div>
            <AlertDescription>{submitStatus.message}</AlertDescription>
          </Alert>
        )}

        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1 || isSubmitting}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!validateStep(currentStep) || isSubmitting}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting || !validateStep(currentStep)}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Feedback"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
