import { useRouter } from "next/navigation";
import { LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "./button";

export default function Banner() {
  const router = useRouter();
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-muted text-center p-3">
      <div className="flex flex-wrap items-center justify-center w-full align-middle gap-x-4">
        <p className="text-sm/6 text-background m-0">
          <strong className="font-semibold">
            We're hiring! Let us know if you're interested!
          </strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          New Sessions Start Every Three Months
        </p>
        <Button
          onClick={() => router.push(`/contact`)}
          size={"sm"}
          variant={"secondary"}
          className="group rounded-2xl px-4 mt-4 md:mt-0"
        >
          Contact Us Today
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </div>
    </div>
  );
}
