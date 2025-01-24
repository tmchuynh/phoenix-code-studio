"use client";
import { Button } from "@/components/ui/button";
import { pastProjects } from "@/lib/constants";
import { FC } from "react";

const PastProjectsPage: FC = () => {
  return (
    <main className="w-11/12 mx-auto py-6">
      <h1 className="text-3xl font-bold text-center">Past Projects</h1>
      <p className="text-center text-lg my-4">
        Check out some of the projects I've worked on in the past.
      </p>

      {/* Projects List */}
      <section className="my-8">
        <div className={"grid md:grid-cols-1 xl:grid-cols-3 gap-8"}>
          {pastProjects.map((project, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>

              <p className="font-semibold">Languages:</p>
              <ul className="list-disc pl-4 mb-4">
                {project.languages.map((language, idx) => (
                  <li key={idx} className="text-gray-600">
                    {language}
                  </li>
                ))}
              </ul>

              <p className="font-semibold">Frameworks:</p>
              <ul className="list-disc pl-4 mb-4">
                {project.frameworks.map((framework, idx) => (
                  <li key={idx} className="text-gray-600">
                    {framework}
                  </li>
                ))}
              </ul>

              <p className="font-semibold">Technologies:</p>
              <ul className="list-disc pl-4 mb-4">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="text-gray-600">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Optional links */}
              <div className="flex flex-col items-center justify-start">
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PastProjectsPage;
