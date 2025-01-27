"use client";

import { Badge } from "@/components/ui/badge";
import {
  webScrapingList,
  ethicalConsiderationsList,
  toolsForScrapingList,
} from "@/lib/content-constants";

import React from "react";

const BlogPage = () => {
  return (
    <main className="my-16 w-11/12 mx-auto">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Creative Data Harvesting: The Wonders of Web Scraping
          </h1>
          <p className="text-sm text-gray-500">
            By Olivia Martin – January 15, 2025
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge variant={"outline"} className="text-sm">
              #WebScraping
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #DataCollection
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #DataAnalysis
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #Technology
            </Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-lg">
            <strong>Web scraping</strong> is a powerful technique that opens up
            endless possibilities for collecting and analyzing data from the
            internet. From market research to competitive analysis, web scraping
            has become an essential tool for businesses and developers alike. In
            this blog, we’ll explore the technical and ethical aspects of web
            scraping and highlight its potential to revolutionize how we gather
            and use data.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            What is Web Scraping?
          </h2>
          <p className="text-lg">
            Web scraping is the process of extracting data from websites using
            automated tools. It involves fetching web pages, parsing their
            content, and collecting specific information for analysis.
            Developers often use programming languages like Python, along with
            libraries like Beautiful Soup, Scrapy, or Selenium, to build
            efficient web scrapers.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Applications of Web Scraping
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {webScrapingList.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Ethical Considerations in Web Scraping
          </h2>
          <p className="text-lg">
            While web scraping is a powerful tool, it comes with ethical and
            legal responsibilities:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {ethicalConsiderationsList.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Popular Tools for Web Scraping
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            {toolsForScrapingList.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            The Benefits of Web Scraping
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>
              <strong>Efficiency:</strong> Automates data collection processes,
              saving time and resources.
            </li>
            <li>
              <strong>Scalability:</strong> Handles large volumes of data
              efficiently, enabling comprehensive analysis.
            </li>
            <li>
              <strong>Customizability:</strong> Allows for tailored scraping
              solutions to fit specific project needs.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Challenges of Web Scraping
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>
              <strong>Anti-Scraping Measures:</strong> Websites may use
              CAPTCHAs, IP blocking, or dynamic content to deter scrapers.
            </li>
            <li>
              <strong>Dynamic Websites:</strong> Content rendered through
              JavaScript requires specialized tools like Puppeteer or Selenium.
            </li>
            <li>
              <strong>Legal and Ethical Constraints:</strong> Navigating the
              complexities of web scraping laws requires careful planning and
              adherence to guidelines.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">
            Conclusion
          </h2>
          <p className="text-lg">
            Web scraping is a versatile and transformative tool for data
            collection and analysis. By understanding its technical and ethical
            dimensions, developers and businesses can harness its power
            responsibly to gain valuable insights and drive innovation.
          </p>
          <p className="text-lg">
            Ready to explore the possibilities of web scraping? Dive into our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            for more tips, tools, and best practices.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
            For more insights on <strong>Web Scraping</strong> and{" "}
            <strong>Data Collection</strong>, check out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and stay ahead in the ever-evolving field of technology.
          </p>
        </footer>
      </article>
    </main>
  );
};

export default BlogPage;
