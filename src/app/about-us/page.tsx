import Image from "next/image";

const stats = [
  { label: "Projects completed", value: "150+" },
  { label: "Years of experience", value: "5+" },
  { label: "Client satisfaction rate", value: "98%" },
];

const values = [
  {
    name: "Innovation First",
    description:
      "We embrace cutting-edge technologies and modern development practices to deliver forward-thinking solutions that keep our clients ahead of the curve.",
  },
  {
    name: "Client-Centric Approach",
    description:
      "Your success is our priority. We listen, understand, and collaborate closely with you to ensure every project exceeds expectations and delivers real business value.",
  },
  {
    name: "Quality Craftsmanship",
    description:
      "We take pride in writing clean, maintainable code and creating beautiful, functional designs that stand the test of time and perform flawlessly.",
  },
  {
    name: "Transparent Communication",
    description:
      "We believe in open, honest communication throughout every project. You'll always know where we stand, what we're working on, and what comes next.",
  },
  {
    name: "Continuous Learning",
    description:
      "The tech landscape evolves rapidly, and so do we. We stay current with the latest trends, tools, and best practices to provide you with optimal solutions.",
  },
  {
    name: "Reliable Partnership",
    description:
      "We're not just developers; we're your long-term technology partners. We're here to support, maintain, and grow your digital presence alongside your business.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="relative mx-auto sm:pt-5 w-11/12">
      <div className="mx-auto pb-32 pt-36 sm:pt-60 lg:pt-32">
        <div className="lg:flex gap-x-14 lg:items-center mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="relative lg:max-w-xl xl:max-w-2xl w-full lg:shrink-0">
            <h1 className="font-semibold text-5xl text-pretty sm:text-7xl tracking-tight">
              Crafting Digital Excellence, One Code at a Time
            </h1>
            <p className="mt-8 sm:max-w-md lg:max-w-none font-medium text-lg text-pretty sm:text-xl/8">
              At Phoenix Code Studio, we transform your digital vision into
              reality through innovative web development, stunning design, and
              strategic technology solutions. We're passionate about creating
              exceptional digital experiences that drive growth and success for
              businesses of all sizes.
            </p>
          </div>
          <div className="flex gap-8 justify-end sm:justify-start mt-14 sm:-mt-44 lg:mt-0 sm:pl-20 lg:pl-0">
            <div className="flex-none lg:order-last xl:order-0 space-y-8 ml-auto sm:ml-0 pt-32 sm:pt-80 lg:pt-36 xl:pt-80 w-44">
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
            </div>
            <div className="flex-none space-y-8 mr-auto sm:mr-0 sm:pt-52 lg:pt-36 w-44">
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
            </div>
            <div className="flex-none space-y-8 pt-32 sm:pt-0 w-44">
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
            </div>
            <div className="flex-none space-y-8 mr-auto sm:mr-0 sm:pt-52 lg:pt-36 w-44">
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
            </div>
            <div className="flex-none space-y-8 pt-32 sm:pt-0 w-44">
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
              <div className="relative">
                <Image
                  width={400}
                  height={528}
                  alt=""
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-2/3 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset rounded-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-12 sm:mt-0 xl:-mt-8 mx-auto">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h2>Our Mission</h2>
          <div className="flex flex-col lg:flex-row gap-x-8 gap-y-20">
            <div className="lg:flex-auto lg:max-w-2xl lg:w-full">
              <p className="text-xl/8">
                At Phoenix Code Studio, our mission is to empower businesses by
                creating innovative digital solutions that drive growth and
                success. We believe that great technology should be accessible,
                intuitive, and transformative for every organization we work
                with.
              </p>
              <p>
                We are committed to delivering exceptional web development
                services that not only meet but exceed our clients'
                expectations. Through collaborative partnerships and
                cutting-edge technology, we help businesses establish a strong
                digital presence that resonates with their audience and achieves
                their goals.
              </p>
            </div>
            <div className="-mt-15 md:mt-0">
              <dl className="flex flex-col gap-x-8 gap-y-10 items-center md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="font-[Rokkitt] text-base/7">{stat.label}</dt>
                    <dd className="font-[AlegreyaSansSC] font-semibold text-5xl tracking-tight">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <blockquote>
            We don&apos;t just build websites; we craft digital experiences that
            tell your story and connect you with your audience.
          </blockquote>
        </div>
      </div>

      <div className="mx-auto my-12 sm:my-24">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h2>What We Do</h2>
          <p className="mb-8 text-xl/8">
            At Phoenix Code Studio, we specialize in creating custom web
            solutions that transform your digital vision into reality. Our
            comprehensive suite of services is designed to meet the evolving
            needs of modern businesses across all industries.
          </p>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
            <div className="space-y-6">
              <div>
                <h4>Custom Web Development</h4>
                <p>
                  We build robust, scalable websites from the ground up using
                  modern technologies like React, Next.js, and TypeScript. Every
                  line of code is crafted with performance, security, and
                  maintainability in mind.
                </p>
              </div>

              <div>
                <h4>UI/UX Design Excellence</h4>
                <p>
                  Our design team creates intuitive, visually stunning
                  interfaces that enhance user experience and drive engagement.
                  We focus on accessibility, usability, and brand consistency
                  across all touchpoints.
                </p>
              </div>

              <div>
                <h4>E-commerce Solutions</h4>
                <p>
                  From simple online stores to complex marketplace platforms, we
                  develop secure, feature-rich e-commerce solutions that
                  streamline operations and maximize conversions.
                </p>
              </div>

              <div>
                <h4>Content Management Systems</h4>
                <p>
                  We implement and customize CMS platforms that empower you to
                  manage your content effortlessly while maintaining full
                  control over your digital presence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4>Mobile-First Development</h4>
                <p>
                  Every solution we create is built with mobile users in mind,
                  ensuring seamless experiences across all devices and screen
                  sizes with responsive design principles.
                </p>
              </div>

              <div>
                <h4>Performance Optimization</h4>
                <p>
                  We optimize your website for speed, SEO, and user experience
                  using advanced techniques like code splitting, lazy loading,
                  and modern caching strategies.
                </p>
              </div>

              <div>
                <h4>Digital Strategy Consulting</h4>
                <p>
                  Our experts provide strategic guidance on technology choices,
                  digital transformation, and growth strategies to help you make
                  informed decisions about your digital future.
                </p>
              </div>

              <div>
                <h4>Ongoing Support & Maintenance</h4>
                <p>
                  We provide comprehensive support services including regular
                  updates, security monitoring, performance optimization, and
                  feature enhancements to keep your digital presence thriving.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3>Our Development Process</h3>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center bg-blue-600 mb-2 mx-auto rounded-full h-12 w-12 font-bold text-white">
                  1
                </div>
                <h4 className="mb-1 font-semibold">Discovery</h4>
                <p className="text-sm">
                  Understanding your vision and requirements
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center bg-blue-600 mb-2 mx-auto rounded-full h-12 w-12 font-bold text-white">
                  2
                </div>
                <h4 className="mb-1 font-semibold">Design</h4>
                <p className="text-sm">
                  Creating wireframes and visual designs
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center bg-blue-600 mb-2 mx-auto rounded-full h-12 w-12 font-bold text-white">
                  3
                </div>
                <h4 className="mb-1 font-semibold">Development</h4>
                <p className="text-sm">
                  Building your solution with cutting-edge tech
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center bg-blue-600 mb-2 mx-auto rounded-full h-12 w-12 font-bold text-white">
                  4
                </div>
                <h4 className="mb-1 font-semibold">Launch</h4>
                <p className="text-sm">Deployment and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-12 sm:my-24">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2>Our Values</h2>
          <p>
            These core values guide everything we do at Phoenix Code Studio and
            shape how we approach every project and client relationship.
          </p>
        </div>
        <dl className="gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 mx-auto lg:mx-0 max-w-2xl lg:max-w-none text-base/7">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-[AlegreyaSansSC] font-semibold md:text-lg xl:text-2xl">
                {value.name}
              </dt>
              <dd className="mt-5">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto my-12 sm:my-24">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h2>Why Choose Phoenix Code Studio</h2>
          <p className="mb-8 text-xl/8">
            In a crowded digital landscape, Phoenix Code Studio stands out as
            your trusted technology partner. Here's what sets us apart and why
            forward-thinking businesses choose us for their most important
            digital initiatives.
          </p>

          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2 mb-12">
            <div>
              <h3 className="mb-6 font-[AlegreyaSansSC] font-semibold text-2xl">
                Unmatched Technical Expertise
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-500 mt-5 rounded-full h-6 w-6">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Modern Technology Stack
                    </h4>
                    <p className="">
                      We use cutting-edge technologies like React, Next.js,
                      TypeScript, and modern CSS frameworks to build
                      future-proof solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-500 mt-5 rounded-full h-6 w-6">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Scalable Architecture
                    </h4>
                    <p className="">
                      Our solutions are built to grow with your business, from
                      startup to enterprise scale without compromising
                      performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-500 mt-5 rounded-full h-6 w-6">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Security First</h4>
                    <p className="">
                      We implement industry-standard security practices and
                      regular audits to protect your digital assets and user
                      data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-[AlegreyaSansSC] font-semibold text-2xl">
                Exceptional Client Experience
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 items-center justify-center bg-blue-500 mt-5 rounded-full h-6 w-6">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Collaborative Partnership
                    </h4>
                    <p className="">
                      We work as an extension of your team, maintaining open
                      communication and involving you in every key decision
                      throughout the project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 items-center justify-center bg-blue-500 mt-5 rounded-full h-6 w-6">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">On-Time Delivery</h4>
                    <p className="">
                      We respect your timeline and business needs, delivering
                      projects on schedule without compromising quality or
                      functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex flex-shrink-0 items-center justify-center bg-blue-500 mt-4 rounded-full h-6 w-6">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Post-Launch Support</h4>
                    <p className="">
                      Our relationship doesn't end at launch. We provide ongoing
                      maintenance, updates, and growth strategies to ensure
                      long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Ready to Get Started?</h2>
      <p>
        Ready to transform your digital presence? We&apos;d love to hear about
        your project and discuss how Phoenix Code Studio can help bring your
        vision to life. Contact us today to schedule a consultation and discover
        how we can elevate your business through exceptional web development.
      </p>
    </div>
  );
}
