import useSmallScreen from "@/lib/useSmallScreen";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { pastProjects } from "@/lib/constants";
import { useSidebar } from "./ui/sidebar";
import { useRouter } from "next/navigation";

const FeaturedProjects = () => {
  const isSmallScreen = useSmallScreen();
  const { open } = useSidebar();
  const router = useRouter();

  const navigateToPastProjects = () => {
    router.push("/past-projects");
  };

  return (
    <section className="my-16">
      <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
        Featured Projects
      </h2>
      <div
        className={cn("w-11/12 lg:w-full mx-auto gap-7 grid grid-cols-1", {
          "w-full md:w-11/12": open,
        })}
      >
        {pastProjects.map(
          (project, index) =>
            project.featured && (
              <div
                key={index}
                className="rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground p-1"
              >
                <div className="p-4 rounded-lg">
                  <img
                    src={project.img}
                    alt={`${project.title} Image`}
                    className="rounded-lg w-full h-24 border object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-primary pt-1">
                  {project.title}
                </h3>
                <p className="text-center mt-4">
                  {open ? (
                    <span className="whitespace-nowrap text-wrap overflow-hidden text-ellipsis">
                      {isSmallScreen
                        ? `${project.short.substring(0, 80)}...`
                        : project.short}
                    </span>
                  ) : (
                    <span>{project.short}</span>
                  )}
                </p>
              </div>
            )
        )}

        {/* Project 1 */}
      </div>
      <div className="text-center mt-8">
        <Button onClick={navigateToPastProjects}>View Our Past Projects</Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
