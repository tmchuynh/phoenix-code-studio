"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { pastProjects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FC } from "react";

const PastProjectsPage: FC = () => {
  const { open } = useSidebar();

  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">Past Projects</h1>
      <p className="text-center text-lg my-4">
        Check out some of the projects I've worked on in the past.
      </p>

      {/* Projects List */}
      <section className="my-8">
        <div className={"grid md:grid-cols-1 xl:grid-cols-2 gap-8"}>
          {pastProjects.map((project, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>

                <div
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2",
                    {
                      "md:grid-cols-2": open,
                    }
                  )}
                >
                  <div>
                    <p className="font-semibold">Languages:</p>
                    <ul className="list-disc pl-4 mb-4">
                      {project.languages.map((language, idx) => (
                        <li key={idx} className="text-gray-600">
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.frameworks && (
                    <div>
                      <p className="font-semibold">Frameworks:</p>
                      <ul className="list-disc pl-4 mb-4">
                        {project.frameworks.map((tech, idx) => (
                          <li key={idx} className="text-gray-600">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && (
                    <div>
                      <p className="font-semibold">Technologies:</p>
                      <ul className="list-disc pl-4 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <li key={idx} className="text-gray-600">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Optional links */}
              <div className="flex justify-center items-center">
                {project.liveLink && (
                  <Button
                    variant="link"
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    View Live Website
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    variant="link"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    View GitHub Repo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PastProjectsPage;
