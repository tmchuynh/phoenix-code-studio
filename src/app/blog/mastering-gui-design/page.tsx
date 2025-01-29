"use client";

import { Badge } from "@/components/ui/badge";
import { guiDesignResources } from "@/lib/blog-constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Mastering User-Friendly Design: Gems of GUI Development
          </h1>
          <p>By Lucas Brown – October 15, 2024</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #GUIDesign
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #UXUI
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #UserExperience
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #DesignTips
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p>
            <strong>Graphical User Interfaces (GUIs)</strong> are the
            cornerstone of modern digital experiences. A well-designed GUI
            bridges the gap between users and technology, making complex systems
            intuitive and accessible. In this blog, we’ll delve into the
            principles, tips, and techniques for designing user-friendly
            interfaces that delight users and enhance functionality.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What Makes a GUI User-Friendly?
          </h2>
          <p>
            A user-friendly GUI is one that is intuitive, visually appealing,
            and efficient. It should help users achieve their goals with minimal
            effort and frustration. The best GUIs combine functionality with
            aesthetics, creating a seamless and enjoyable experience.
          </p>
        </section>

        {guiDesignResources.map((categoryItem, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {categoryItem.category}
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {categoryItem.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Role of UX/UI in GUI Design
          </h2>
          <p>
            GUI design is closely tied to UX (user experience) and UI (user
            interface) design. While UI focuses on the visual and interactive
            aspects, UX ensures that the interface meets user needs effectively.
            Together, they create a cohesive and delightful experience.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p>
            Mastering GUI design requires a deep understanding of user needs, a
            commitment to simplicity, and a focus on accessibility. By
            prioritizing these elements, designers can create interfaces that
            are not only functional but also enjoyable to use.
          </p>
          <p>
            To learn more about <strong>GUI Design</strong> and{" "}
            <strong>UX/UI</strong>, check out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            for additional resources and insights into crafting exceptional user
            experiences.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p>
            Explore more insights into <strong>GUI Design</strong> and{" "}
            <strong>UX/UI</strong> on our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            for the latest tips and best practices in the field of design.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
