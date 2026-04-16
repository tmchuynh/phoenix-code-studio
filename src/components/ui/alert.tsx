import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative [&>svg]:top-4 [&>svg]:left-4 [&>svg]:absolute bg-background shadow-lg p-4 [&>svg~*]:pl-7 border dark:border-2 rounded-lg w-full text-foreground [&>svg]:text-foreground [&>svg+div]:translate-y-[-3px]",
  {
    variants: {
      variant: {
        default: "text-foreground",
        secondary:
          "dark:border-secondary bg-secondary text-secondary-foreground [&>svg]:text-primary",
        tertiary:
          "dark:border-tertiary bg-tertiary text-tertiary-foreground [&>svg]:text-tertiary dark:[&>svg]:text-primary",
        accent:
          "dark:border-accent bg-accent text-muted dark:font-bold [&>svg]:text-accent",
        warning:
          "dark:border-chart-4 bg-chart-2 text-foreground font-bold [&>svg]:text-destructive",
        destructive:
          "border-destructive text-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 lg:text-xl font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm lg:text-lg font-medium [&_p]:leading-relaxed",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
