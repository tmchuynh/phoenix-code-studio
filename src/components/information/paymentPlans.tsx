import { IconDisplay } from "@/lib/IconDisplay";
import { PaymentDetails } from "@/lib/interfaces";
import { paymentPlans } from "@/lib/payment-plans";
import useMediumScreen from "@/lib/useMediumScreen";
import useSmallScreen from "@/lib/useSmallScreen";
import { cn, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function PaymentPlans({
  plan,
  index,
}: {
  plan: PaymentDetails;
  index: number;
}) {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  const { theme } = useTheme();
  const router = useRouter();

  /**
   * Navigates to the specified payment plan page.
   *
   * @param {string} plan - The name of the payment plan to navigate to.
   */
  const navigateToPlan = (plan: string) => {
    const formattedPlanName = setSlug(plan);

    router.push(`/services/pricing/payment-plans/${formattedPlanName}`);
  };

  return (
    <div key={index}>
      <div
        className={cn(
          "flex flex-col justify-between relative",
          index !== paymentPlans.length - 1 ? "pb-10" : ""
        )}
      >
        <div>
          {/* Plan Title */}
          <h2>{isMediumScreen ? plan.short : plan.title}</h2>

          {/* Plan Description */}
          <div>
            {isSmallScreen
              ? plan.info.short
              : isMediumScreen
              ? plan.info.description
              : plan.info.intro.map((sentence, index) => {
                  return <p key={index}>{sentence}</p>;
                })}
          </div>
        </div>

        {/* Plan Details */}
        <div>
          <h3>Key Attributes</h3>
          <ul className="gap-x-4 grid grid-cols-1 p-0 list-none">
            {plan.info.shortFeatures.map((features, index) => (
              <li className="flex items-center space-y-0" key={index}>
                <IconDisplay Icon={plan.Icon} />

                <span className="pl-3">
                  <strong>{features.title}: </strong>
                  {features.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learn More Button */}
        <Button
          variant={theme === "dark" ? "outline" : "secondary"}
          className="relative mx-auto lg:mx-2 w-full md:w-1/2 lg:w-2/5 text-sm md:text-lg"
          size={isSmallScreen ? "sm" : "default"}
          onClick={() => {
            navigateToPlan(plan.name);
          }}
        >
          More Information
        </Button>
      </div>
    </div>
  );
}
