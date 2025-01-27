import { pastProjects } from "@/lib/constants";
import useSmallScreen from "@/lib/useSmallScreen";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const FeaturedProjects = () => {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const navigateToPastProjects = () => {
    router.push("/past-projects");
  };

  return (
    <section className="my-16">
      <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
        Featured Projects
      </h2>
      <div className="w-11/12 lg:w-full mx-auto gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pastProjects.map(
          (project, index) =>
            project.featured && (
              <div
                key={index}
                className="rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:hover:border-border transition-shadow bg-card text-card-foreground p-7"
              >
                <h3 className="text-xl font-semibold text-center text-secondary pt-1">
                  {project.title}
                </h3>
                <p className="text-center mt-4">
                  <span className="whitespace-nowrap text-wrap overflow-hidden text-ellipsis">
                    {isSmallScreen
                      ? `${project.short.substring(0, 80)}...`
                      : project.short}
                  </span>
                </p>
              </div>
            )
        )}
      </div>
      <div className="text-center mt-8">
        <Button variant={"secondary"} onClick={navigateToPastProjects}>
          View Our Past Projects
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
