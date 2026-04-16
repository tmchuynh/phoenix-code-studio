"use client";

import { StarRatingProps } from "@/lib/types";
import { Star, StarHalf } from "lucide-react";
import React from "react";

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          return (
            <Star
              key={index}
              className="w-6 h-6 text-accent fill-accent stroke-accent"
            />
          );
        } else if (rating >= starValue - 0.5) {
          return (
            <div key={index} className="relative w-6 h-6">
              <Star className="absolute w-6 h-6 text-muted stroke-muted" />
              <StarHalf className="absolute w-6 h-6 text-accent" />
            </div>
          );
        } else {
          return (
            <Star key={index} className="w-6 h-6 text-muted stroke-muted" />
          );
        }
      })}
    </div>
  );
};

export default StarRating;
