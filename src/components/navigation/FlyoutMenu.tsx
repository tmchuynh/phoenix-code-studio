"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { allServices } from "@/lib/constants/services/service-categories";
import { capitalize } from "@/lib/utils/format";
import { FaAdjust, FaApper } from "react-icons/fa";
import { about, serviceCategories } from "@/lib/constants/navigation";
import { FaArrowDown19 } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { ModeButton } from "../buttons/ModeButton";
import Link from "next/link";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

export default function FlyoutMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="relative z-10 bg-white dark:bg-muted isolate">
      <nav
        aria-label="Global"
        className="flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="w-auto h-8"
            />
          </a>
        </div>
        <div className="flex justify-end lg:hidden w-full">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="lg:flex lg:gap-x-12 hidden">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-sm/6">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="top-0 -z-10 absolute inset-x-0 bg-white dark:bg-muted data-closed:opacity-0 shadow-lg pt-14 ring-1 ring-gray-900/5 transition data-closed:-translate-y-1 data-enter:duration-200 data-leave:duration-150 data-enter:ease-out data-leave:ease-in"
            >
              <div className="gap-x-4 xl:gap-x-8 grid grid-cols-4 mx-auto px-6 lg:px-8 py-10 max-w-7xl">
                {serviceCategories.map((service, index) => (
                  <div
                    key={service.title}
                    className="group relative hover:bg-gray-50 p-6 rounded-lg text-sm/6"
                  >
                    <div className="flex justify-center items-center bg-primary/50 group-hover:bg-muted rounded-lg size-11">
                      <FaArrowDown19
                        aria-hidden="true"
                        className="text-accent dark:text-tertiary group-hover:text-secondary size-6"
                      />
                    </div>
                    <a
                      href={service.href}
                      className="block mt-6 font-semibold dark:group-hover:text-background"
                    >
                      {service.title}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 dark:group-hover:text-background">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover>
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-sm/6">
              About Us
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none size-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="top-0 -z-10 absolute inset-x-0 bg-white dark:bg-muted data-closed:opacity-0 shadow-lg pt-14 ring-1 ring-gray-900/5 transition data-closed:-translate-y-1 data-enter:duration-200 data-leave:duration-150 data-enter:ease-out data-leave:ease-in"
            >
              <div className="gap-x-4 xl:gap-x-8 grid grid-cols-4 mx-auto px-6 lg:px-8 py-10 max-w-7xl">
                {about.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="group relative hover:bg-gray-50 p-6 rounded-lg text-sm/6"
                  >
                    <div className="flex justify-center items-center bg-primary/50 group-hover:bg-muted rounded-lg size-11">
                      <FaAdjust
                        aria-hidden="true"
                        className="text-accent dark:text-tertiary group-hover:text-secondary size-6"
                      />
                    </div>
                    <a
                      href={item.href}
                      className="block mt-6 font-semibold dark:group-hover:text-background"
                    >
                      {item.title}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 dark:group-hover:text-background">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="/services/frequently-asked-questions"
            className="font-semibold text-sm/6"
          >
            Frequently Asked Questions
          </Link>
          <Link
            href="/contact-us"
            className="lg:hidden font-semibold text-sm/6"
          >
            Contact Us
          </Link>
        </PopoverGroup>
        <div className="lg:flex lg:flex-1 lg:justify-end items-center hidden">
          <ModeButton />

          <a
            onClick={() => {
              router.push("/contact-us");
            }}
            className="font-semibold text-sm/6"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="z-10 fixed inset-0" />
        <DialogPanel className="right-0 z-10 fixed inset-y-0 bg-white dark:bg-muted px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center w-full">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 rounded-md"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex justify-between items-center hover:bg-gray-50 py-2 pr-3.5 pl-3 rounded-lg w-full font-semibold text-base/7">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="flex-none size-5 group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-2 mt-2">
                    {[...serviceCategories].map((item) => (
                      <DisclosureButton
                        key={item.title}
                        as="a"
                        href={item.href}
                        className="block hover:bg-gray-50 py-2 pr-3 pl-6 rounded-lg font-semibold text-sm/7"
                      >
                        {item.title}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex justify-between items-center hover:bg-gray-50 py-2 pr-3.5 pl-3 rounded-lg w-full font-semibold text-base/7">
                    About Us
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="flex-none size-5 group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-2 mt-2">
                    {[...about].map((item) => (
                      <DisclosureButton
                        key={item.title}
                        as="a"
                        href={item.href}
                        className="block hover:bg-gray-50 py-2 pr-3 pl-6 rounded-lg font-semibold text-sm/7"
                      >
                        {item.title}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/services/frequently-asked-questions"
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7"
                >
                  Frequently Asked Questions
                </Link>
              </div>
              <div className="py-6">
                <a
                  onClick={() => {
                    router.push("/contact-us");
                  }}
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base/7"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
