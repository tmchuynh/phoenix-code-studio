import { SubItem } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ServiceCard({
  service,
  index,
}: {
  service: SubItem;
  index: number;
}) {
  return (
    <div
      key={index}
      className="bg-card shadow-lg hover:shadow-xl p-6 border-2 border-transparent dark:hover:border-border rounded-lg text-card-foreground transition-shadow"
    >
      {service.info.Icon && (
        <Image
          src={`/images/service_icons/${service.info.Icon}`}
          width={500}
          height={500}
          alt={`${service.info.description}-Image`}
          className={cn("w-28 lg:w-24 mx-auto mb-1")}
        />
      )}

      <h3 className="flex justify-center items-center px-5 h-32 text-center">
        {service.info.name}
      </h3>

      <p className="mt-4 text-center">{service.info.short}</p>
    </div>
  );
}
