"use client";

import { Badge } from "@/components/ui/badge";
import {
  trends1,
  trends2,
  trends3,
  trends4,
  trends5,
  trends6,
  trends7,
  stayingAhead,
} from "@/lib/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Navigating the Digital Revolution: Emerging Tech Trends
          </h1>
          <p className="text-sm text-gray-500">
            By Sophia White – November 20, 2024
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Badge className="text-sm">#EmergingTrends</Badge>
            <Badge className="text-sm">#DigitalRevolution</Badge>
            <Badge className="text-sm">#Technology</Badge>
            <Badge className="text-sm">#Innovation</Badge>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-lg">
            The <strong>digital revolution</strong> is transforming industries,
            redefining how we live and work, and driving technological
            innovation at an unprecedented pace. Staying ahead of the curve in
            this rapidly evolving landscape is essential for individuals and
            businesses alike. In this blog, we’ll explore the top emerging tech
            trends shaping the digital future and their potential to disrupt
            industries worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            1. Artificial Intelligence and Machine Learning
          </h2>
          <p className="text-lg">
            AI and machine learning continue to lead the charge in technological
            innovation. From automating routine tasks to making sense of massive
            datasets, these technologies are becoming integral to various
            industries, including healthcare, finance, and customer service.
          </p>
          <p className="text-lg">
            <strong>What’s Next?</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {trends1.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            2. Quantum Computing
          </h2>
          <p className="text-lg">
            Quantum computing is on the verge of revolutionizing data
            processing. By leveraging the principles of quantum mechanics, these
            computers can solve complex problems exponentially faster than
            classical computers.
          </p>
          <p className="text-lg">
            <strong>Applications:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {trends2.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            3. 5G and Beyond
          </h2>
          <p className="text-lg">
            The rollout of 5G networks is transforming connectivity, enabling
            faster data transfer, lower latency, and enhanced IoT capabilities.
            As 6G research progresses, we can expect even more transformative
            applications in automation and augmented reality.
          </p>
          <p className="text-lg">
            <strong>Impact:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {trends3.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            4. Blockchain Beyond Cryptocurrency
          </h2>
          <p className="text-lg">
            Blockchain technology is moving beyond its roots in cryptocurrency.
            Its ability to create secure, decentralized ledgers is finding
            applications in supply chain management, healthcare, and even voting
            systems.
          </p>
          <p className="text-lg">
            <strong>Future Trends:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {trends4.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            5. Sustainability Through Technology
          </h2>
          <p className="text-lg">
            As environmental concerns grow, technology is playing a critical
            role in driving sustainability. Innovations in renewable energy,
            green tech, and AI-driven resource management are helping combat
            climate change.
          </p>
          <p className="text-lg">
            <strong>Key Innovations:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {trends5.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            6. The Rise of the Metaverse
          </h2>
          <p className="text-lg">
            The metaverse is evolving from a concept to reality, blending
            physical and virtual worlds through immersive technologies like AR
            and VR. Companies are investing heavily in building virtual spaces
            for work, play, and commerce.
          </p>
          <p className="text-lg">
            <strong>What to Expect:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {trends6.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            7. Edge Computing
          </h2>
          <p className="text-lg">
            As the demand for real-time data processing grows, edge computing is
            gaining traction. By processing data closer to its source, edge
            computing reduces latency and bandwidth usage, making it essential
            for IoT and AI applications.
          </p>
          <p className="text-lg">
            <strong>Applications:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {trends7.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            How to Stay Ahead in the Digital Revolution
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {stayingAhead.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Conclusion
          </h2>
          <p className="text-lg">
            The digital revolution is more than a technological shift—it’s a
            reimagining of how we live, work, and connect. By staying informed
            about emerging trends, you can navigate this revolution with
            confidence and leverage its potential to shape a better future.
          </p>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm">
            Explore more insights into <strong>Technology</strong> and{" "}
            <strong>Innovation</strong> on our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>
            . Stay tuned for the latest updates, expert tips, and industry
            analysis!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;
