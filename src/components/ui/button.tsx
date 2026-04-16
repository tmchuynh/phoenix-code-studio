import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center disabled:opacity-50 shadow-md border-2 focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 rounded-md font-semibold lg:font-bold dark:font-extrabold text-sm md:text-md 2xl:text-xl whitespace-nowrap transition-colors [&_svg]:pointer-events-none disabled:pointer-events-none focus-visible:outline-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary border-primary",
        secondary:
          "bg-secondary text-secondary-foreground opacity-90 hover:bg-transparent hover:border-secondary hover:text-secondary border-secondary",
        tertiary:
          "bg-tertiary text-tertiary-foreground hover:bg-transparent hover:border-tertiary hover:text-tertiary border-tertiary",
        quaternary:
          "bg-quaternary text-quaternary-foreground hover:bg-transparent hover:border-quaternary hover:text-quaternary border-quaternary",
        quinary:
          "bg-quinary text-quinary-foreground hover:bg-transparent hover:border-quinary hover:text-quinary border-quinary",
        senary:
          "bg-senary text-senary-foreground hover:bg-transparent hover:border-senary hover:text-senary border-senary",
        accent:
          "bg-accent text-accent-foreground hover:bg-transparent hover:border-accent hover:text-accent border-accent",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive hover:bg-transparent hover:text-foreground",
        outline: "bg-background hover:border-secondary hover:text-secondary",
        ghost:
          "shadow-none hover:bg-accent hover:text-accent-foreground border-transparent",
        link: "shadow-none text-accent underline-offset-4 underline hover:no-underline border-transparent",
        disabled: "bg-muted text-muted-foreground border-muted opacity-50",
        icon: "bg-transparent text-accent hover:text-tertiary shadow-none border-transparent",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
