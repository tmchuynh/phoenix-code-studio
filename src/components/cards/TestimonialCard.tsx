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
          <p className="mt-4 mb-1 font-bold text-secondary">
            {testimonial.name}
          </p>
          <p className="mb-0 text-sm">{testimonial.position}</p>
        </div>
      </figcaption>
      <figure className="flex flex-col flex-auto mt-10 text-pretty">
        <blockquote className="">
          <p className="italic">
            <span>"</span>
            <span className="mt-4 text-center">
              {isSmallScreen
                ? `${testimonial.quote.substring(0, 15)}...`
                : testimonial.quote}
            </span>
            <span>"</span>
          </p>
        </blockquote>
      </figure>
    </div>
  );
}
