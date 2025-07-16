"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface StarRatingInputProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  maxStars?: number;
  disabled?: boolean;
  className?: string;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({
  rating,
  onRatingChange,
  maxStars = 5,
  disabled = false,
  className,
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleClick = (starValue: number) => {
    if (!disabled) {
      onRatingChange(starValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    if (!disabled) {
      setHoverRating(starValue);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverRating(0);
    }
  };

  return (
    <div className={cn("flex space-x-1", className)}>
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoverRating || rating);

        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            disabled={disabled}
            className={cn(
              "focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm duration-200 transition-colors focus:outline-none",
              disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:scale-110"
            )}
          >
            <Star
              className={cn(
                "h-8 w-8 duration-200 transition-colors",
                isFilled
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingInput;
