import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="relative mx-auto sm:pt-5 w-11/12 overflow-hidden">
      <h1>Sitemap</h1>
      <p>
        Navigate through our website structure easily with this comprehensive
        sitemap. Find all our pages and services organized in a clear,
        hierarchical format.
      </p>

      <h2>Main Pages</h2>

      <h3>Home</h3>
      <ul>
        <li>
          <Link href="/">Phoenix Code Studio - Home</Link>
        </li>
      </ul>

      <h3>About Us</h3>
      <ul>
        <li>
          <Link href="/about-us">Our Story</Link>
        </li>
        <li>
          <Link href="/about-us/careers">Careers</Link>
        </li>
        <li>
          <Link href="/about-us/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/about-us/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link href="/about-us/accessibility">Accessibility</Link>
        </li>
        <li>
          <Link href="/about-us/sitemap">Sitemap</Link>
        </li>
      </ul>

      <h3>Services</h3>
      <ul>
        <li>
          <Link href="/services">Services Overview</Link>
        </li>
        <li>
          <Link href="/services/web-design">Web Design</Link>
        </li>
        <li>
          <Link href="/services/custom-website-development">
            Custom Website Development
          </Link>
        </li>
      </ul>

      <h3>Contact</h3>
      <ul>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/contact-us/faqs">FAQs</Link>
        </li>
        <li>
          <Link href="/contact-us/support">Support</Link>
        </li>
      </ul>

      <h2>Website Structure</h2>
      <p>
        Our website is organized to provide easy navigation and quick access to
        the information you need. Each section contains related pages and
        resources.
      </p>

      <blockquote>
        Can&apos;t find what you&apos;re looking for? Use our search
        functionality or contact us directly for assistance.
      </blockquote>

      <h3>Navigation Tips</h3>
      <ul>
        <li>Use the main navigation menu to access primary sections</li>
        <li>Look for breadcrumbs to understand your current location</li>
        <li>Use the search function to find specific content</li>
        <li>Check our FAQ section for common questions</li>
      </ul>

      <h2>Accessibility</h2>
      <p>
        All pages listed in this sitemap are designed to be accessible and
        follow web accessibility guidelines. If you encounter any issues, please
        let us know.
      </p>

      <h2>Updates</h2>
      <p>
        This sitemap is regularly updated to reflect new content and changes to
        our website structure. Last updated: Current date.
      </p>
    </div>
  );
}
