import { Project } from "@/lib/interfaces";
import useLargeScreensOnly from "@/lib/useLargeScreensOnly";
import useSmallScreen from "@/lib/useSmallScreen";
import { useTheme } from "next-themes";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter } from "../../ui/card";

export default function PortfolioCard({
  project,
  index,
  selectedTags,
  handleCheckboxChange,
}: {
  project: Project;
  index: number;
  selectedTags: string[];
  handleCheckboxChange: (
    field: string,
    value: string,
    checked: boolean
  ) => void;
}) {
  const { theme } = useTheme();
  const isSmallScreen = useSmallScreen();
  const isLargeScreen = useLargeScreensOnly();

  return (
    <Card
      key={index}
      className="flex flex-col justify-between shadow-lg hover:shadow-xl p-2 border-2 border-transparent dark:hover:border-border rounded-lg h-full transition-shadow"
    >
      <CardContent
        className={
          isSmallScreen
            ? "flex flex-col-reverse h-full"
            : "grid grid-cols-2 md:grid-cols-1 h-full p-3"
        }
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="mt-5 font-semibold">{project.name}</h2>

            {isSmallScreen ? null : isLargeScreen ? (
              <div>
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.sort().map((tag, index) => (
                      <Badge
                        key={index}
                        variant={"secondary"}
                        className="mr-2 cursor-pointer"
                        onClick={() => {
                          handleCheckboxChange(
                            "tags",
                            tag,
                            !selectedTags.includes(tag)
                          );
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                <div>
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant={"secondary"}
                          className="mr-2 cursor-default"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            <p className="mb-4">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-2 text-sm lg:text-lg">
              <div>
                <p className="font-semibold">Languages:</p>
                <ul>
                  {project.languages.map((language, idx) => (
                    <li key={idx}>{language}</li>
                  ))}
                </ul>
              </div>

              {project.frameworks && (
                <div>
                  <p className="font-semibold">Frameworks:</p>
                  <ul>
                    {project.frameworks.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && (
                <div>
                  <p className="font-semibold">Technologies:</p>
                  <ul>
                    {project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.libraries && (
                <div>
                  <p className="font-semibold">Libraries:</p>
                  <ul>
                    {project.libraries.map((lib, idx) => (
                      <li key={idx}>{lib}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start py-3 h-fit">
        {/* Optional links */}
        <div className="flex md:flex-row flex-col md:justify-around gap-4 mx-auto md:w-full">
          {project.liveLink && (
            <Button
              variant={theme === "dark" ? "tertiary" : "secondary"}
              onClick={() => window.open(project.liveLink, "_blank")}
            >
              View Live Website
            </Button>
          )}
          {project.githubLink && (
            <Button
              variant="outline"
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              View GitHub Repo
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
