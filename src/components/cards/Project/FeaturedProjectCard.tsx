import { Project } from "@/lib/interfaces";
import useSmallScreen from "@/lib/useSmallScreen";

export default function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isSmallScreen = useSmallScreen();
  return (
    <div
      key={index}
      className="bg-card shadow-lg hover:shadow-xl p-7 border-2 border-transparent dark:hover:border-border rounded-lg text-card-foreground transition-shadow"
    >
      <h3 className="pt-1 font-semibold text-center text-secondary">
        {project.title}
      </h3>
      <p className="mt-4 text-pretty">
        <span className="text-ellipsis text-wrap whitespace-nowrap overflow-hidden">
          {isSmallScreen
            ? `${project.short.substring(0, 80)}...`
            : project.short}
        </span>
      </p>
    </div>
  );
}
