"use client";

export const contactlessCardOptions = [
  {
    name: "TapTok",
    description:
      "TapTok is a revolutionary approach to networking through innovative and customizable contact sharing technologies. Our products eliminate the need for paper business cards and offer a sleek alternative for modern users.",
    features: [
      "Customize your profile",
      "Powerful dashboard to get a detailed view of your network",
      "Share your contact with one tap",
      "No need to install any app!",
    ],
    productOptions: [
      "Essential Cards (Black, Orange, Navy Blue, Light Blue, Green, Pink)",
      "Customized Cards",
      "NEW Metal Cards (Standard or Customized)",
    ],
  },
  {
    name: "dot Cards",
    description:
      "Dot cards allow you to share LinkedIn, website, phone number, email, payment info, and social media accounts instantly. No app required! Compatible with iPhone and Android.",
    features: [
      "Dynamically share what you want with who you want",
      "Profiles are viewed directly through a browser",
      "Durable options: dot.classic, dot.thin, and dot.card",
    ],
  },
  {
    name: "Linq Cards",
    description:
      "Linq lets you build a page that contains your contact info, website, social media links, photos, videos, appointment scheduling, and more — all shareable with just a tap.",
    features: [
      "Unlimited use business card that can be dynamically updated",
      "Integrates with 380+ CRMs",
      "Real-time analytics and tracking",
      "Customizable for teams and brands",
    ],
    analytics:
      "Track actionable data like shares, clicks, meetings scheduled, and new contacts. Measure the ROI of your networking efforts.",
  },
  {
    name: "popl Cards",
    description:
      "Popl allows you to instantly share anything with a tap, scan, or send. Share contact info, social media, websites, payment apps, files, videos, and more.",
    features: [
      "Send your digital business card via text, email, AirDrop, or email signatures",
      "Works with iPhone and Android without requiring an app",
      "Easily share information with one tap",
    ],
  },
  {
    name: "HiHello Cards",
    description:
      "HiHello offers digital business cards that are environmentally friendly, cost-effective, and make a great first impression.",
    features: [
      "Create multiple digital business cards",
      "Share your cards with anyone",
      "Create virtual backgrounds with your card's QR code",
      "Turn paper cards into digital contacts",
      "Manage contacts seamlessly with a Self-Healing Address Book™",
    ],
  },
  {
    name: "Blinq Cards",
    description:
      "Blinq digital business cards are easy to share and can be used without an app, making them a secure, eco-friendly, and COVID-safe solution.",
    features: [
      "Automatically log when and where you met new contacts",
      "Add notes to your cards to record key customer details",
      "Stand out with customizable digital cards",
    ],
  },
];

import { Badge } from "@/components/ui/badge";
import React from "react";

const ContactlessBusinessCardsBlog = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <article className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Best Contactless Business Card Options
          </h1>
          <div className="flex justify-center space-x-2">
            <Badge variant={"outline"} className="text-sm">
              #resources
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #business
            </Badge>
            <Badge variant={"outline"} className="text-sm">
              #career
            </Badge>
          </div>
        </header>

        {contactlessCardOptions.map((card, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              {card.name}
            </h2>
            <p className="text-lg">{card.description}</p>

            <h3 className="text-xl font-medium">Features:</h3>
            <ul className="list-disc pl-6 space-y-1 text-lg">
              {card.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {card.productOptions && (
              <div>
                <h3 className="text-xl font-medium">Product Options:</h3>
                <ul className="list-disc pl-6 space-y-1 text-lg">
                  {card.productOptions.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </div>
            )}

            {card.analytics && (
              <div>
                <h3 className="text-xl font-medium">Analytics:</h3>
                <p className="text-lg">{card.analytics}</p>
              </div>
            )}
          </section>
        ))}

        <footer className="mt-8 text-center">
          <p className="text-sm">
            For more insights on <strong>Writing and Development</strong>, check
            out our{" "}
            <a href="#" className="text-primary underline">
              Blog
            </a>{" "}
            and start enhancing your communication skills today.
          </p>
        </footer>
      </article>
    </main>
  );
};

export default ContactlessBusinessCardsBlog;
