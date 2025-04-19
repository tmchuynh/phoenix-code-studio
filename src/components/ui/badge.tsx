import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-4 py-1 border rounded-full focus:ring-2 focus:ring-ring focus:ring-offset-2 font-semibold text-xs lg:text-lg transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-transparent hover:border-primary hover:text-primary",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-transparent hover:border-secondary hover:text-secondary",
        tertiary:
          "border-transparent bg-tertiary text-tertiary-foreground hover:bg-transparent hover:border-tertiary hover:text-tertiary",
        accent:
          "border-transparent bg-accent text-accent-foreground hover:bg-transparent hover:border-accent hover:text-accent",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-transparent hover:border-destructive hover:text-destructive",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
