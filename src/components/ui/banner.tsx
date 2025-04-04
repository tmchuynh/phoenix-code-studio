import { useRouter } from "next/navigation";
import { LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "./button";

export default function Banner() {
  const router = useRouter();
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-muted text-center p-3">
      <div className="flex flex-wrap items-center justify-center w-full align-middle gap-x-4">
        <p className="m-0">
          <strong>Join Our Team! Exciting Opportunities Await!</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Earn commissions based on project success and enjoy referral bonuses
          for bringing in new clients and top talent.
        </p>
        <Button
          onClick={() => router.push("/contact-us")}
          size={"sm"}
          variant={"secondary"}
          className="group rounded-2xl px-4 mt-4 md:mt-0"
        >
          Contact us to learn more and take the first step.
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </div>
    </div>
  );
}
