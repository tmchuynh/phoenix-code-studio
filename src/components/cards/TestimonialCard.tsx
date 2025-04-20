import { Testimonial } from "@/lib/interfaces";
import useSmallScreen from "@/lib/useSmallScreen";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function TestimonialCard({
  testimonial,
  index,
  initials,
}: {
  testimonial: Testimonial;
  index: number;
  initials: string;
}) {
  const isSmallScreen = useSmallScreen();
  return (
    <div key={index} className="flex flex-col w-full">
      <figcaption className="flex items-center gap-x-6">
        <Avatar>
          <AvatarImage src="" alt="Profile Photo" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h5>{testimonial.name}</h5>
          <code className="mb-0 text-sm">{testimonial.position}</code>
        </div>
      </figcaption>
      <figure className="flex flex-col flex-auto mt-3 ml-4 text-pretty">
        <blockquote className="">
          <p>
            <span className="mt-4 text-center">
              {isSmallScreen
                ? `${testimonial.quote.substring(0, 15)}...`
                : testimonial.quote}
            </span>
          </p>
        </blockquote>
      </figure>
    </div>
  );
}
