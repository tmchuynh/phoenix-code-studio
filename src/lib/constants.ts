import { JobPosition, Project, Testimonial } from "./interfaces";
import { FAQ, Menu } from "./types";

export const about: Menu[] = [
  {
    title: "About Us",
    href: "/about-us",
    description:
      "Discover our mission, values, and the story behind our brand.",
  },
  {
    title: "Careers",
    href: "",
    description:
      "Join our team and explore exciting career opportunities with us.",
  },
  {
    title: "Blog",
    href: "/blogs",
    description:
      "Stay informed with expert insights, industry trends, and company updates.",
  },
  {
    title: "FAQs",
    href: "/services/frequently-asked-questions",
    description:
      "Get answers to commonly asked questions about our services and processes.",
  },
  {
    title: "Testimonials",
    href: "/about-us/testimonials",
    description:
      "See what our clients say about their experiences working with us.",
  },
  {
    title: "Portfolio",
    href: "/about-us/past-projects",
    description:
      "Explore our past projects and see how we bring ideas to life.",
  },
];

export const serviceCategories: Menu[] = [
  {
    title: "Overview",
    href: "/services",
    description:
      "Explore our range of flexible payment plans designed to fit your needs and budget seamlessly.",
  },
  {
    title: "Enterprise-Grade Digital Solutions",
    href: "/services/scalable-corporate-digital-solutions",
    description:
      "Unlock powerful digital solutions tailored for corporations looking to scale and streamline operations.",
  },
  {
    title: "SEO-Driven Content Strategy",
    href: "/services/seo-optimized-content-creation",
    description:
      "Boost your online visibility with expertly crafted, search-optimized content that drives engagement.",
  },
  {
    title: "End-to-End Website Development",
    href: "/services/comprehensive-website-solutions",
    description:
      "From design to deployment, build and optimize a high-performing website tailored to your goals.",
  },
];

export const cssUnit: { [unit: string]: boolean } = {
  cm: true,
  mm: true,
  in: true,
  px: true,
  pt: true,
  pc: true,
  em: true,
  ex: true,
  ch: true,
  rem: true,
  vw: true,
  vh: true,
  vmin: true,
  vmax: true,
  "%": true,
};

export const FAQs: FAQ[] = [
  {
    question: "What sets Phoenix Code Studio apart?",
    answer:
      "At Phoenix Code Studio, we offer exceptional digital solutions that combine cutting-edge technology with cultural depth to deliver impactful results. Specializing in custom web development, UX/UI design, branding services, and digital marketing, we help businesses enhance their online presence and achieve sustained business growth. Whether you need to develop user-friendly websites, design responsive mobile applications, create SEO-optimized content, or build brand identity, we focus on delivering transformative, high-performance solutions that drive traffic, engagement, and conversion rates. Our team of experts leverages the latest web technologies, search engine optimization (SEO) strategies, and UX best practices to ensure your digital experiences are both innovative and user-centric, ultimately fostering long-term success in a competitive digital landscape.",
  },
  {
    question: "What does 'bespoke' mean in the context of your services?",
    answer:
      "In the context of our services, ‘bespoke’ refers to crafting custom design solutions that are perfectly aligned with your brand identity and business objectives. We specialize in bespoke web design, tailored branding services, and custom websites that not only reflect your unique vision but also enhance your online presence and set you apart from the competition. Whether you're looking for a personalized website design, a unique branding strategy, or a custom digital experience, our bespoke services ensure that every aspect of your project is strategically crafted to resonate with your audience and deliver lasting results.",
  },
  {
    question: "Do you offer consultations before starting a project?",
    answer:
      "Yes! We offer digital consultations before starting any project to thoroughly understand your business goals, target audience, and digital requirements. During this session, we’ll dive into everything from SEO strategies and website optimization to the specific features and functionalities you need for your custom website. This ensures that the project is not only aligned with your brand objectives but also tailored to provide an outstanding user experience and achieve measurable business growth.",
  },
  {
    question: "Do you offer payment plans or flexible pricing options?",
    answer:
      "Yes! We offer a variety of custom web development packages with flexible pricing options tailored to businesses of all sizes. Whether you're a startup or an established enterprise, our affordable pricing plans ensure you receive high-quality digital solutions, including professional website design, SEO optimization, and responsive development, all without compromising your budget. Our goal is to deliver scalable web solutions that drive business growth while providing exceptional value at every stage of your project.",
  },
  {
    question: "What Web Development Services does Phoenix Code Studio offer?",
    answer:
      "At Phoenix Code Studio, we provide a comprehensive suite of web development services tailored to meet your business’s digital needs. Our services include custom websites, UX/UI design, SEO optimization, branding services, and more. Whether you’re looking for a responsive website, an SEO-friendly platform, or a complete brand redesign, we ensure your digital presence stands out and performs. Additionally, we specialize in single-page applications (SPAs), website copywriting, blog writing, and content creation, ensuring your website communicates your brand’s message effectively. We also offer wireframing & prototyping to ensure intuitive and user-friendly designs. Our e-commerce web development services enable businesses to create and manage fully functional online stores, including product listings, secure payment gateways, and inventory management. For businesses looking to improve user experience, we focus on intuitive design and seamless navigation to boost engagement and conversions. Beyond front-end development, we provide database creation and maintenance, ensuring secure and efficient data management for your website. By combining SEO strategies with a focus on performance, security, and conversion optimization, we help drive traffic and increase sales, making Phoenix Code Studio your go-to partner for all things web development.",
  },
  {
    question:
      "Can you redesign my existing website without starting from scratch?",
    answer:
      "Absolutely! If you already have a website but require a visual update, improved UX/UI design, or enhanced SEO optimization, we can revamp your existing site without the need for a complete rebuild. Our website redesign services focus on boosting mobile responsiveness, optimizing page speed, and enhancing the overall user experience (UX). We ensure that your site aligns seamlessly with your current brand strategy, improves conversion rates, and stays competitive in search rankings.",
  },
  {
    question: "How do you ensure my website is mobile-friendly?",
    answer:
      "At Phoenix Code Studio, we guarantee that your website is fully mobile-friendly with our mobile-responsive design. This ensures that your site adapts seamlessly across various screen sizes, whether accessed on smartphones, tablets, or desktop computers. By prioritizing a mobile-first design approach, we make sure that your site is optimized for an exceptional user experience on all devices. Our design process includes responsive layouts, fast loading times, and touch-friendly navigation, all of which help keep users engaged and boost mobile conversions.",
  },
  {
    question: "Can you help with content creation for my website?",
    answer:
      "Yes! We offer professional website copywriting services and craft SEO-optimized content tailored to resonate with your target audience. Whether it’s creating persuasive copy for landing pages, writing informative blog posts, or developing content that enhances your brand voice, we ensure every piece is designed to engage visitors, increase conversion rates, and boost your website’s search engine ranking. Our content is crafted with both user experience and SEO best practices in mind, driving more organic traffic and improving your online visibility.",
  },
  {
    question: "Do you create logos and other branding materials?",
    answer:
      "Yes! We offer comprehensive branding services, including logo design, typography selection, color palette creation, and brand style guides to establish a cohesive and professional identity for your business. In addition to logo design, we create marketing materials such as business cards, brochures, flyers, social media graphics, and digital assets to ensure brand consistency across all platforms. Our branding process focuses on capturing the essence of your business, creating a strong visual identity, and making a lasting impression on your audience. Whether you’re launching a new brand or refreshing your existing one, we tailor our designs to reflect your values, mission, and target market, helping you build a recognizable and impactful presence.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We proudly serve a diverse range of industries, including e-commerce, healthcare, education, technology, and more. Whether you're looking for web design for healthcare, custom e-commerce websites, or branding services for startups, our team specializes in crafting industry-specific digital solutions that address your unique challenges and goals. We ensure that each solution is tailored to meet the specific needs of your industry, driving results and enhancing your online presence.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline for a custom web development project typically ranges from 6 to 10 weeks, depending on the project’s scope and complexity. SEO-friendly websites, extensive brand redesigns, and the addition of custom features may require more time to ensure high-quality results, while smaller updates and revisions can be completed more quickly. We prioritize transparency in project timelines and deliverables, ensuring we meet your business deadlines and objectives efficiently.",
  },
  {
    question:
      "Do you provide SEO services, and how does SEO benefit my website?",
    answer:
      "Yes! At Phoenix Code Studio, we offer comprehensive SEO services, including on-page SEO, keyword research, and technical SEO to enhance your site’s search engine rankings. SEO is essential for improving your website's visibility on search engines like Google, which directly impacts your business's online presence. By optimizing your website for SEO, we help drive more organic traffic, increase brand awareness, and improve conversion rates, ensuring long-term growth and success. Our SEO strategy includes keyword optimization, content strategy, and technical enhancements to boost your rankings for relevant search terms. A well-executed SEO approach leads to better user engagement, increased leads or sales, and ultimately greater business success. Whether you’re looking to improve your site’s search engine rankings, drive traffic, or enhance the user experience, our team is dedicated to supporting your business growth through effective and sustainable SEO practices.",
  },
  {
    question: "Can you help with website hosting and maintenance?",
    answer:
      "Yes! We offer website hosting and ongoing website maintenance services to ensure your website is always secure, fast, and up-to-date. Our secure hosting solutions provide reliable performance, while our maintenance services include regular updates, performance optimization, security monitoring, and backups. Whether you need to update content, fix bugs, or improve website speed, we’ve got you covered. We also monitor your site for security vulnerabilities, ensuring a safe experience for your users and protecting your data from potential threats.",
  },
  {
    question: "How do you ensure the security of my website?",
    answer:
      "Website security is a top priority at Phoenix Code Studio. We implement the latest website security practices to protect your site from potential threats. Our services include SSL certification to encrypt data and ensure safe communication between users and your website, as well as security monitoring to detect and resolve vulnerabilities. We also use secure web development practices, including regular updates, backups, and malware protection, to ensure your website remains secure and reliable, safeguarding your data and your users.",
  },
  {
    question: "Can you help with rebranding my business?",
    answer:
      "Absolutely! Our brand reimagining service is designed to breathe new life into your business, ensuring your digital presence aligns seamlessly with your evolving goals and vision. Whether you're looking to refine your logo, color palette, typography, or overall brand aesthetics, we create a cohesive and modern identity that resonates with your audience. Our team specializes in website redesign, delivering an updated, engaging, and user-friendly experience that reflects your refreshed brand personality. Beyond visuals, we enhance brand storytelling, crafting compelling messaging and website copy to establish a strong emotional connection with your customers. Additionally, we offer SEO optimization, content strategy, and marketing collateral development, ensuring consistency across all touchpoints—from your website and social media presence to brochures, newsletters, and promotional materials. With Phoenix Code Studio, your rebrand won’t just be a facelift—it will be a strategic transformation that elevates your business and sets you apart in your industry.",
  },
  {
    question: "Do you offer ongoing support after a project is completed?",
    answer:
      "Yes! At Phoenix Code Studio, we believe that a successful digital presence extends beyond the initial launch. That’s why we offer comprehensive ongoing support and maintenance packages to ensure your website remains secure, functional, and up to date. Our post-launch services include regular updates, security monitoring, performance optimization, bug fixes, and content updates. We also provide technical support to resolve any issues you encounter and offer training sessions and documentation to help you manage your website’s content. Whether you need minor tweaks, major updates, or continuous SEO improvements, our team is dedicated to ensuring your website adapts and grows with your business. Additionally, we provide website backups, malware protection, and optimization services to safeguard your site’s long-term health. With Phoenix Code Studio, you’re not just getting a one-time service—you’re gaining a long-term partner committed to your success.",
  },
  {
    question: "How do you tailor your services for small businesses?",
    answer:
      "At Phoenix Code Studio, we understand that small businesses have unique challenges, from limited budgets to the need for a strong digital presence in a competitive market. That’s why we offer bespoke, scalable solutions tailored to your specific goals, industry, and vision. We work closely with you to understand your brand, target audience, and business objectives, ensuring every project—whether it's a custom website, branding refresh, SEO strategy, or content creation—is aligned with your needs. Our approach is cost-effective and strategic, providing high-quality results without unnecessary complexity. We prioritize user-friendly designs, mobile responsiveness, and SEO best practices to help you attract and retain customers. Additionally, we offer flexible maintenance and support plans, empowering you to grow at your own pace while we handle the technical details. With Phoenix Code Studio, small businesses get enterprise-level solutions without the hefty price tag, ensuring long-term success in the digital landscape.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Justin Perez",
    featured: true,
    rating: 5,
    position: "CEO",
    quote: `Tina was responsible for developing and designing our new website, and her creativity has taken us to the next level. From start to finish, she completely transformed the way our schools perceive our programs. As someone who likes to be hands-on throughout the process, it was a pleasant surprise to entrust Tina with the project and have all of our expectations exceeded. 

      She now has full control to make updates and changes as needed. Her unique blend of creativity and business acumen is exceptional. We've gone from a simple, self-built website to one that truly represents the professionalism and experience of a company with over 20 years in the industry. Tina has played a key role in presenting our company in the best possible way.`,
  },
  {
    name: "Nnamdi Agude",
    featured: true,
    rating: 4.5,
    position: "Mental Performance Coach",
    quote: `Tina has an exceptional talent for web design and brings ideas to life in a way that is both visually striking and functional. She has a keen eye for detail and truly understands the importance of translating vision into an engaging digital experience. Her approach is very intentional, Tina’s creativity shines through in every project she works on, and she consistently delivers results that exceed expectations.`,
  },
  {
    name: "Gray Boulware",
    featured: false,
    rating: 4.5,
    position: "Technical Product Owner",
    quote: `Tina is a dynamic full-stack web developer with a passion for crafting intuitive and functional digital experiences. Specializing in user experience and front-end design, she brings creativity and precision to every project, showcasing her strong work ethic and unwavering dedication. Her ability to blend technical expertise with a keen eye for design makes her a standout in her field.  

      Beyond development, Tina is a true polymath, seamlessly integrating skills from software engineering, business development, real estate, and personal growth. Her ability to connect these diverse disciplines fuels her innovation, allowing her to create unique, forward-thinking solutions that drive real impact.`,
  },
  {
    name: "Justin Bui",
    featured: true,
    rating: 5,
    position: "Data Scientist",
    quote: `It's not often you meet someone as driven and talented as Tina. I had the pleasure of working alongside her in Theta Tau, a professional engineering fraternity at California State University, Fullerton. Her leadership stood out immediately—she consistently took initiative, introduced innovative ideas, and guided the team through challenges with confidence and resilience.  

      Beyond her leadership, Tina's eagerness to learn and adapt is truly inspiring. Whether mastering technical skills or building a business, she embraces new challenges with enthusiasm and determination. Her dedication, resourcefulness, and unwavering drive make her an invaluable asset to any team.`,
  },
  {
    name: "Spencer DeMera",
    featured: true,
    rating: 4,
    position: "Senior Full-Stack Web Developer",
    quote: `Tina is one of the most hardworking and determined individuals I’ve had the pleasure of working with. Despite starting with little experience, she has grown into a highly skilled and proficient developer. Her ability to learn and adapt is evident in her work, particularly showcased on her personal portfolio site—an impressive testament to her technical expertise and creativity.  

      What sets Tina apart is her relentless drive and self-motivation. Her projects clearly demonstrate her ability to tackle new technologies with confidence, overcoming any challenge that comes her way. She is a true problem-solver and an invaluable asset to any team.`,
  },
  {
    name: "Efren Aguilar",
    featured: true,
    rating: 5,
    position: "Software Engineer II",
    quote: `Tina is a great co-worker to have by your side. She is always willing to tackle any project you give to her and dive deep into understanding everything necessary for the project, and her contribution, to excel. Her drive and mindset for success and growth are at a level that I rarely see anymore; a wonderful asset for any team.`,
  },
];

export const pastProjects: Project[] = [
  {
    title: "Quiz Application",
    name: "Engage, Learn, and Compete with Our Next.js Quiz Platform",
    featured: true,
    description:
      "Experience the ultimate interactive learning experience with our Next.js-powered quiz platform, designed to make knowledge testing fun, engaging, and seamless. Covering a diverse range of subjects such as Chemistry, History, Math, and more, this platform allows users to select quizzes based on difficulty, track progress, and compete for top scores on a dynamic leaderboard. Built for optimal performance and user engagement, this responsive, mobile-friendly platform ensures a smooth experience across all devices. With secure authentication, efficient data management, and real-time progress tracking, users can confidently challenge themselves while enjoying an intuitive and gamified learning environment. Whether you're a student, educator, or lifelong learner, our SEO-optimized, high-performance quiz platform delivers an immersive and rewarding way to test and expand your knowledge.",
    short:
      "Our Next.js-powered quiz platform offers an engaging and interactive way to test knowledge across subjects like Chemistry, History, and Math. With intuitive quiz selection, progress tracking, and a competitive leaderboard, users enjoy a seamless experience across devices. Secure authentication, efficient data management, and responsive design ensure a smooth and reliable learning environment, making knowledge testing both fun and rewarding.",
    tags: ["User Auth", "Progress Tracking", "Dynamic", "Data Filtering"],
    languages: ["HTML", "TypeScript"],
    frameworks: ["Next.js"],
    libraries: ["React", "Sequelize", "Next-Auth"],
    technologies: ["MySQL", "localStorage", "Axios"],
    githubLink: "https://github.com/tmchuynh/knowledge_knockout",
  },
  {
    title: "Bootstrap Icons",
    name: "Scalable, Customizable Icons for Modern Web Development",
    featured: false,
    description:
      "The Bootstrap Icons Library is a comprehensive, user-friendly resource for web developers and designers, offering a wide array of scalable icons that are perfect for any project. Whether you’re working on a website, mobile app, or dashboard, Bootstrap Icons enhances your design with sleek, adaptable visuals. With an intuitive search feature and categorized icons, you can quickly find the perfect match for your project. The simple copy-and-paste functionality makes integration effortless, while the flexibility to easily customize each icon ensures they align with your brand’s design. Bootstrap Icons is the ideal solution for creating modern, professional user interfaces that provide clarity and usability. Elevate your web development projects with this clean, versatile library and transform your website with stunning, customizable icons today.",
    short:
      "The Bootstrap Icons Library is a versatile and user-friendly platform offering a vast collection of scalable icons for seamless integration into web development projects. With intuitive search and easy categorization, finding the right icon is quick and hassle-free. Customize icons to perfectly align with your design needs and integrate them effortlessly into your site. Enhance your web projects with clean, adaptable visuals that bring clarity and style to your interface, making Bootstrap Icons the perfect choice for developers and designers.",
    tags: ["Mock Up", "Dynamic", "Data Filtering"],
    languages: ["HTML", "JavaScript", "CSS", "SCSS"],
    frameworks: ["Bootstrap CSS"],
    libraries: ["jQuery"],
    liveLink: "https://tmchuynh.github.io/Bootstrap-Icon-Mock/",
    githubLink: "https://github.com/tmchuynh/Bootstrap-Icon-Mock",
  },
  {
    title: "Military Fitness Calculator",
    name: "Effortlessly Calculate Your Army Physical Fitness Test Score",
    featured: true,
    description:
      "The Military Fitness Calculator simplifies the process of calculating your Army Physical Fitness Test (APFT) score by assessing performance in three critical exercises: sit-ups, push-ups, and a timed 2-mile run. Each exercise is graded on a scale of 0-100, with a perfect score of 300 points, and service members must achieve at least 60 points in each category to pass. The APFT calculator provides an accurate and straightforward way to determine your total score based on your performance. Additionally, the calculator takes into account the U.S. Army's body fat standards, factoring in height, neck, waist, and hip measurements to ensure fitness compliance. This tool is an essential resource for service members aiming to meet the rigorous physical readiness standards set by the U.S. Army, helping track performance and maintain overall health and fitness.",
    short:
      "The Military Fitness Calculator allows service members to quickly calculate their Army Physical Fitness Test (APFT) score, which includes sit-ups, push-ups, and a 2-mile run. Each exercise is worth up to 100 points, and the tool provides an easy way to calculate your total score. The calculator also includes body fat standards, taking into account measurements like height, neck, waist, and hips to ensure fitness compliance with U.S. Army guidelines. Keep track of your physical readiness and meet the Army’s strict fitness standards with this essential tool.",
    tags: ["Educational", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Materialize CSS"],
    libraries: ["jQuery"],
    technologies: ["vanilla-tilt.js", "Ajax"],
    liveLink: "https://tmchuynh.github.io/Military-Fitness-Calculator/",
    githubLink: "https://github.com/tmchuynh/Military-Fitness-Calculator",
  },
  {
    title: "International Activities Club",
    name: "Empowering Education through Extracurricular Activities",
    featured: true,
    description:
      "The International Activities Club (IAC) website is an engaging and user-friendly platform designed to showcase the organization's diverse educational programs and after-school activities. At the forefront of the site is the A.R.C. Initiative, which focuses on providing students with hands-on learning experiences that bridge the gap between classroom theory and real-world applications. The website offers a detailed look into a wide range of extracurricular options, including chess, sports, and creative writing, all of which cater to students from 1st grade through high school. With a clean, intuitive interface, the site ensures that parents, educators, and schools can easily explore IAC's offerings, helping students access valuable opportunities for personal growth, skill development, and enrichment. This platform highlights IAC’s commitment to providing students with enriching experiences that foster both academic and personal growth outside the traditional classroom setting.",
    short:
      "The International Activities Club (IAC) website is designed to highlight the organization’s diverse programs, including the A.R.C. Initiative for hands-on learning. The site offers a range of extracurricular activities such as chess, sports, and creative writing for students from 1st grade through high school. With its easy-to-navigate interface, the website allows parents, educators, and schools to explore IAC’s offerings, providing students with enriching, developmentally beneficial experiences outside the classroom.",
    tags: ["Educational", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Express", "Bootstrap CSS"],
    libraries: [],
    technologies: ["Chart.js"],
    liveLink: "https://iacafterschools.com/",
  },
  {
    title: "Emoji Finder",
    name: "Effortlessly Discover the Perfect Emoji for Every Occasion",
    featured: false,
    description:
      "The Emoji Finder website is a fast, intuitive tool designed to help users quickly search for and discover the ideal emoji for any situation. Operating much like an emoji keyboard, the platform allows users to easily browse, filter, and copy emojis with just a few clicks. With a powerful search bar, category-based navigation, and real-time suggestions, the site offers a seamless experience for finding emojis by keyword, emotion, or symbol. Whether you're looking to enhance your messages, express yourself on social media, or add some creativity to a project, the Emoji Finder ensures you have the perfect emoji at your fingertips. This user-friendly tool makes it simple to find and share emojis that help you communicate with personality, making digital interactions more fun and expressive.",
    short:
      "The Emoji Finder website is an intuitive tool that allows users to quickly search, browse, and copy emojis. With a powerful search bar, category navigation, and real-time suggestions, it makes finding the perfect emoji for any situation effortless. Whether for messaging, social media, or creative projects, the Emoji Finder enhances your digital expressions with ease.",
    tags: ["Fun", "Dynamic", "Data Filtering"],
    languages: ["JavaScript", "HTML", "CSS"],
    libraries: ["React"],
    technologies: ["jest-dom"],
    githubLink: "https://github.com/tmchuynh/Emoji-Finder",
  },
  {
    title: "FirstGalaxy Inc",
    name: "The Ultimate Real Estate Platform",
    featured: false,
    description:
      "The FirstGalaxy website is a modern and intuitive platform crafted to showcase a diverse range of properties, from residential homes to commercial spaces. It offers comprehensive listings complete with high-quality images, immersive virtual tours, and detailed property descriptions, making it easier for buyers and investors to make informed decisions. Featuring advanced search filters, users can effortlessly browse properties based on location, price, size, and amenities, ensuring a smooth and tailored house-hunting experience. The website also provides essential resources such as mortgage calculators, neighborhood insights, and expert real estate guidance, supporting clients throughout their entire journey. Whether you’re buying, selling, or renting, the platform connects users with top real estate professionals, ensuring every property transaction is seamless, efficient, and stress-free.",
    short:
      "The FirstGalaxy website offers a modern platform to browse residential and commercial properties. With high-quality images, virtual tours, and advanced search filters, users can easily find properties by location, price, size, and amenities. The site also provides helpful tools like mortgage calculators and expert real estate advice, making it easy to navigate every step of buying, selling, or renting. Whether you're a buyer, seller, or renter, FirstGalaxy connects you with top real estate professionals for smooth, efficient transactions.",
    tags: ["Real Estate", "Data Filtering", "Dynamic"],
    languages: ["JavaScript", "HTML", "CSS"],
    libraries: ["jQuery"],
    frameworks: ["Bootstrap CSS"],
    technologies: ["Chart.js"],
    githubLink: "https://github.com/tmchuynh/firstgalaxy",
  },
  {
    title: "Chess",
    name: "Web-Based Chess Game with AI-Powered Evaluation",
    featured: true,
    description:
      "This project is a web-based chess game developed using Chessboard.js, offering a highly interactive and visually appealing chess experience. Upon initialization, a dynamic chessboard is generated, allowing users to play against one another or analyze various chess positions. The game integrates a sophisticated positional evaluation system, using a 2D array to assess board states and enhance AI-driven decision-making. This evaluation matrix assigns values to different positions on the board, influencing the AI’s choice of the best move. Moreover, the game features essential mechanics such as move validation, game tracking, and piece evaluation, ensuring a realistic, engaging, and strategic gameplay experience. Whether you're playing against friends or analyzing positions for improvement, this web-based chess game offers a seamless and intelligent chess-playing environment.",
    short:
      "This web-based chess game built with Chessboard.js offers an interactive chess experience, where users can play against each other or analyze positions. It features a powerful positional evaluation system that uses a 2D array to assess board states, aiding AI in making strategic moves. The game includes move validation, game tracking, and piece evaluation to ensure a realistic and engaging chess experience.",
    tags: ["Game", "Fun"],
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Bootstrap CSS"],
    technologies: ["Chessboard.js", "Chess.js", "Node.js"],
    liveLink: "https://tmchuynh.github.io/Chess-Game/",
    githubLink: "https://github.com/tmchuynh/Chess-Game",
  },
  {
    title: "Meta Tic Tac Toe",
    name: "An Advanced Strategic Twist on the Classic Game",
    featured: true,
    description:
      "Meta Tic Tac Toe is an advanced evolution of the classic Tic Tac Toe game, introducing a multi-board strategic layer where players compete across nine interconnected mini-games. With an intuitive and interactive interface, this version challenges players to think several moves ahead, control multiple boards, and outmaneuver their opponents in a deeper, more complex gameplay experience. The game incorporates dynamic move mechanics, where each player’s turn dictates the opponent’s next board, adding an element of unpredictability and skill to the match. Featuring a fully responsive design, score tracking, and strategic depth, Meta Tic Tac Toe offers a refreshing and engaging experience for both casual players and strategy enthusiasts, combining the simplicity of Tic Tac Toe with a thrilling new level of tactical challenge.",
    short:
      "Meta Tic Tac Toe takes the classic Tic Tac Toe game to the next level with a multi-board system where players compete across nine interconnected mini-games. Each move influences the opponent's next board, adding an exciting layer of strategy and unpredictability. With a responsive design, score tracking, and enhanced gameplay mechanics, this game offers an engaging experience for both casual players and those seeking deeper strategic challenges.",
    tags: ["Game", "Fun"],
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["React.js", "Node.js"],
    frameworks: ["Bootstrap CSS"],
    liveLink: "https://tmchuynh.github.io/meta_tic_tac_toe/",
    githubLink: "https://github.com/tmchuynh/meta_tic_tac_toe",
  },
  {
    title: "Sudoku",
    name: "Test Your Problem-Solving Skills Across Multiple Difficulty Levels",
    featured: true,
    description:
      "This interactive Sudoku game provides players with the opportunity to test and enhance their problem-solving skills across various difficulty levels. Players can choose from preset modes—Easy, Medium, and Hard—or customize the number of removed cells to create a unique challenge. Featuring an intuitive grid system, real-time error checking, and a clean, responsive interface, the game ensures smooth interactions and logical gameplay mechanics. Whether you're a beginner or a seasoned puzzle solver, this Sudoku game offers an engaging, enjoyable experience, combining both ease of use and the thrill of solving increasingly complex puzzles.",
    short:
      "This interactive Sudoku game lets players test their skills with preset modes (Easy, Medium, Hard) or customize their own puzzle challenge. Featuring an intuitive grid, real-time error checking, and a responsive interface, it provides an enjoyable experience for both beginners and experienced solvers, ensuring smooth gameplay and logical challenges at every level.",
    tags: ["Game", "Fun"],
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Bootstrap CSS"],
    technologies: ["Vanilla JavaScript", "DOM Manipulation"],
    liveLink: "https://tmchuynh.github.io/sudoku/",
    githubLink: "https://github.com/tmchuynh/sudoku",
  },
];

export const jobPositions: JobPosition[] = [
  {
    title: "Executive Assistant",
    description:
      "We are looking for a highly organized and detail-oriented Executive Assistant to provide administrative and operational support to the CEO. This executive support role requires a proactive and resourceful individual who can efficiently manage schedules, coordinate meetings, handle correspondence, and ensure the smooth operation of executive functions. As an administrative assistant, you will serve as a critical point of contact, requiring professionalism, discretion, and excellent communication skills. The ideal candidate will have experience in executive support, project coordination, and administrative management, with a proven ability to multitask, prioritize, and handle complex tasks in a fast-paced environment. Strong organizational skills, attention to detail, and a solution-oriented mindset are essential for success in this position. Experience with Microsoft Office and other office software is required, along with a background in executive operations and office management. This role offers an exciting opportunity for a highly motivated individual to contribute to the smooth running of the company’s executive operations.",
    responsibilities: [
      "Manage executive calendars, schedule meetings, and coordinate appointments across multiple time zones (if applicable), ensuring optimal use of time and avoiding conflicts.",
      "Handle incoming and outgoing correspondence, including emails, phone calls, and reports, maintaining a high level of confidentiality and professionalism.",
      "Prepare presentations, reports, and documentation for internal and external meetings, ensuring all materials are accurate, polished, and aligned with the CEO's vision.",
      "Coordinate domestic and international travel arrangements, including accommodations and itineraries, ensuring seamless travel experiences and cost-efficiency.",
      "Oversee administrative operations, including expense tracking, record-keeping, and file management, maintaining an organized and efficient filing system.",
      "Assist with project management tasks and ensure timely follow-ups on key initiatives, collaborating with different departments to track progress and ensure deadlines are met.",
      "Handle confidential and sensitive information with discretion and professionalism, exercising sound judgment when handling executive matters.",
      "Manage and prioritize incoming requests for the CEO’s time, ensuring critical issues are addressed promptly while delegating non-essential matters as needed.",
      "Assist in creating and maintaining internal systems that streamline operations and enhance productivity for executive functions.",
    ],
    qualifications: [
      "Proven experience as an Executive Assistant, Personal Assistant, or in a similar administrative role, with a track record of supporting senior-level executives.",
      "Ability to work independently and handle multiple projects simultaneously while maintaining a high level of attention to detail.",
      "Excellent written and verbal communication skills, with the ability to convey information clearly and professionally to all levels of the organization.",
      "Strong proficiency in Microsoft Office Suite (Word, Excel, PowerPoint, Outlook) and project management tools like Asana, Trello, or Slack.",
      "Exceptional organizational and time-management skills, with the ability to prioritize tasks effectively, manage competing demands, and work under pressure.",
      "Strong problem-solving skills and the ability to anticipate the needs of executives, offering proactive solutions.",
      "Experience handling confidential matters with discretion and maintaining a high level of trust and integrity.",
      "Ability to manage high-stakes situations, exercise sound judgment, and provide solutions in a fast-paced, high-pressure environment.",
    ],
    information: "Contract | Remote | Flexible schedule",
  },
  {
    title: "Content Writer",
    description:
      "We are seeking a creative and detail-oriented Content Writer to produce high-quality, engaging, and informative content for a variety of digital platforms. The ideal candidate will have excellent writing, editing, and research skills, with a strong understanding of content marketing, SEO optimization, and audience engagement. In this role, you will be responsible for crafting compelling blog posts, articles, email campaigns, social media content, and marketing materials. You should be able to adapt your writing style to different audiences and industries, ensuring that all content aligns with brand messaging and business goals. Keyword research, content strategy, and the ability to create content that drives conversions are essential for this role. Experience with WordPress and other content management systems (CMS) is preferred. A strong understanding of SEO best practices and the ability to optimize content for both search engines and users is crucial. This is an exciting opportunity to contribute to a brand’s online presence and help shape its voice across various digital platforms.",
    responsibilities: [
      "Write, edit, and proofread engaging content, including blog posts, articles, newsletters, and website content, ensuring accuracy and alignment with brand messaging and tone.",
      "Conduct in-depth research on industry-related topics, staying up to date with current trends to create authoritative, informative, and well-rounded content that drives audience engagement.",
      "Manage content calendars, plan ahead for campaigns, and ensure consistent publishing schedules while adhering to deadlines.",
      "Ensure all content aligns with brand voice, tone, and messaging guidelines, and optimize it for SEO to increase organic traffic and engagement.",
      "Create and optimize content for various digital platforms, including websites, blogs, email campaigns, and social media, while maintaining brand consistency.",
      "Conduct competitive research to stay ahead of industry content trends and incorporate best practices into writing, ensuring the content remains fresh and relevant.",
      "Support internal teams with content marketing strategies, including drafting engaging product descriptions, landing page content, and promotional materials.",
      "Work with other team members to brainstorm, generate ideas, and contribute to creative content campaigns that align with overall business objectives.",
    ],
    qualifications: [
      "Exceptional writing, editing, and proofreading skills, with a keen eye for detail and an ability to adapt tone and style to different audiences.",
      "Familiarity with SEO best practices, keyword research, and optimization strategies to increase content visibility and audience engagement.",
      "Proven experience writing for various industries and adapting content for different formats, including blogs, emails, and marketing materials.",
      "Proficiency in content management systems (WordPress, Webflow, etc.), and familiarity with web publishing tools to manage and publish content efficiently.",
      "Strong attention to detail, with an ability to meet tight deadlines and manage multiple projects simultaneously.",
      "Experience with content strategy, including developing editorial calendars and tracking content performance to ensure content meets business goals.",
      "Solid understanding of digital marketing principles and the ability to integrate SEO, SEM, and social media strategies into written content.",
      "Ability to work collaboratively with designers, developers, and other team members to create visually engaging and optimized content that supports brand objectives.",
      "Excellent organizational and time-management skills, with the ability to prioritize tasks in a fast-paced work environment and handle multiple projects effectively.",
    ],
    information: "Contract | Remote | Flexible schedule",
  },
  {
    title: "Graphic Designer/Illustrator",
    description:
      "We are seeking a talented and highly creative Graphic Designer/Illustrator to develop visually appealing designs and branding materials that captivate audiences. This role requires a strong eye for aesthetics, a deep understanding of design principles, and the ability to translate concepts into compelling visuals. The ideal candidate should be proficient in digital and print design, branding, UI/UX design, and illustration. In this role, you will work closely with the marketing, content, and web development teams to create stunning visuals that enhance brand storytelling and user engagement. The Graphic Designer will be responsible for crafting dynamic graphics for websites, social media, advertisements, and print materials. Expertise in industry-standard design tools like Adobe Creative Suite, Illustrator, and Photoshop is essential. A keen understanding of user experience (UX) and user interface (UI) design will also be key to delivering a cohesive and engaging visual experience across all digital platforms. The successful candidate will be able to balance creativity with functionality to create designs that effectively communicate brand messages.",
    responsibilities: [
      "Design compelling graphics for websites, social media, advertising, and print materials that align with the brand identity and visually communicate key messages.",
      "Create custom illustrations and visual assets that enhance the company’s storytelling, marketing campaigns, and overall brand appeal.",
      "Collaborate with the marketing and web development teams to enhance user experience through design, ensuring a seamless, visually compelling interface across both digital and print formats.",
      "Develop brand identity elements, including logos, typography, color schemes, and other visual assets to maintain a consistent and recognizable brand image.",
      "Manage multiple design projects simultaneously while meeting deadlines and maintaining high-quality output.",
      "Stay up to date with the latest design trends, tools, and technologies, incorporating fresh ideas into projects to keep designs modern and engaging.",
      "Ensure design consistency across all marketing and branding materials, from digital to print formats.",
      "Work with other creatives, such as content writers and developers, to create cohesive brand experiences across all channels.",
      "Provide guidance and mentorship to junior designers and illustrators, fostering a collaborative work environment.",
    ],
    qualifications: [
      "A strong portfolio showcasing previous design and illustration work, demonstrating creativity, originality, and versatility across multiple design disciplines.",
      "Ability to create original illustrations and conceptual designs based on briefs or creative direction.",
      "Strong understanding of branding, typography, color theory, and composition, with an excellent eye for detail.",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects) and other relevant design software.",
      "Experience in UI/UX design and familiarity with tools like Figma or Sketch for designing user interfaces and creating engaging experiences.",
      "Solid knowledge of design principles and industry standards for both digital and print media, ensuring designs are compatible across various platforms and devices.",
      "Excellent communication skills to collaborate effectively with internal teams and clients, ensuring design objectives are met.",
      "Ability to handle constructive feedback and iterate quickly on designs to meet client needs and expectations, maintaining flexibility in design execution.",
      "Experience with responsive design and designing for different screen sizes and platforms, ensuring optimal user experiences across all devices.",
    ],
    information: "Contract | Remote | Flexible schedule",
  },
  {
    title: "Cybersecurity Specialist",
    description:
      "We are looking for a highly skilled Cybersecurity Specialist to protect our organization's data, networks, and digital assets from cyber threats. The ideal candidate will have experience implementing security protocols, identifying vulnerabilities, and responding to security incidents. In this role, you will work closely with development teams to ensure compliance with industry standards and best practices, as well as train staff on security awareness and risk mitigation. You will be responsible for monitoring network activity, conducting security audits, and ensuring that proper security measures are in place to safeguard company data and systems from cyberattacks. Expertise in tools like firewalls, intrusion detection systems (IDS), and penetration testing is essential. Additionally, the ability to stay updated with the latest cybersecurity trends, regulations, and technologies will be crucial for maintaining the organization’s overall cybersecurity posture.",
    responsibilities: [
      "Train employees on cybersecurity best practices and risk awareness, ensuring that all staff are aware of security protocols and potential cyber threats.",
      "Conduct security risk assessments, penetration testing, and vulnerability scanning to identify and mitigate threats to the organization’s network infrastructure.",
      "Monitor and analyze security threats, vulnerabilities, and breaches across all company systems and networks, taking quick action to minimize damage and prevent future incidents.",
      "Investigate and respond to security incidents, ensuring that damage is minimized and that systems return to normal functionality as quickly as possible, adhering to incident response protocols.",
      "Develop and implement cybersecurity policies, frameworks, and incident response plans that align with industry standards and the company's security needs.",
      "Manage firewalls, encryption protocols, and security monitoring tools to protect organizational data and networks from unauthorized access and cyberattacks.",
      "Provide regular cybersecurity awareness training to employees, ensuring they follow best practices and stay informed on the latest cybersecurity threats and prevention methods.",
    ],
    qualifications: [
      "Relevant cybersecurity certifications such as CISSP, CEH, and CISM are preferred, though not required if the candidate has demonstrated experience in network security or IT security.",
      "Proven experience in cybersecurity, network security, or IT security roles, with a strong understanding of risk assessment and management.",
      "Familiarity with security frameworks such as ISO 27001, NIST, and CIS, and experience in implementing security best practices across company systems.",
      "In-depth knowledge of ethical hacking techniques, intrusion detection, and threat intelligence tools used to identify and counter cyber threats.",
      "Strong problem-solving skills and the ability to handle high-pressure security situations and incidents, ensuring rapid incident resolution.",
      "Excellent communication skills to work with stakeholders and explain complex security concepts and technical issues in simple terms, aiding decision-making and training.",
      "Experience working with firewalls, intrusion detection systems (IDS), encryption protocols, and other advanced security technologies to protect critical infrastructure and data.",
    ],
    information: "Contract | Remote | Growth opportunities",
  },
  {
    title: "Sales Representative",
    description:
      "We are looking for an enthusiastic and results-driven Sales Representative to identify and engage potential clients, build strong customer relationships, and drive business growth. The ideal candidate is a natural communicator with excellent negotiation skills and a proven track record in sales. In this role, you will play a crucial part in increasing revenue and expanding our customer base by promoting our products and services to a global audience. You will be responsible for generating leads, managing client accounts, and closing sales, while consistently meeting or exceeding sales targets. Experience in B2B sales, cold calling, and sales presentations will be highly beneficial. The successful candidate will demonstrate a deep understanding of customer needs, actively work to identify opportunities, and effectively communicate the value of our offerings to prospective clients.",
    responsibilities: [
      "Develop and deliver compelling sales presentations and proposals to potential clients, ensuring that all offerings are tailored to meet their specific business needs.",
      "Negotiate contracts, close deals, and meet or exceed sales targets through active prospecting and relationship management.",
      "Identify, reach out to, and qualify potential clients through multiple channels, including phone, email, networking, and online research to generate high-quality sales leads.",
      "Maintain strong client relationships and provide exceptional customer service, ensuring repeat business and fostering long-term partnerships.",
      "Track sales metrics and report on performance using CRM software (e.g., Salesforce, HubSpot), identifying opportunities for improvement and driving sales results.",
      "Manage the full sales lifecycle, from prospecting to closing sales, including lead generation, follow-up, and contract negotiations.",
    ],
    qualifications: [
      "Proven experience in sales, business development, or account management, with a track record of meeting or exceeding sales targets.",
      "Excellent communication, negotiation, and interpersonal skills, with the ability to build strong relationships with clients.",
      "Strong understanding of branding, marketing, and digital services, with the ability to convey value propositions effectively to prospective clients.",
      "Ability to work independently and proactively pursue new business opportunities, with a passion for achieving sales results.",
      "Familiarity with CRM software (Salesforce, HubSpot, etc.) and sales reporting tools to track performance and manage leads effectively.",
      "Ability to understand and articulate complex products and services to a diverse range of potential clients, ensuring alignment with their needs.",
    ],
    information: "Commission-based | Remote | Growth opportunities",
  },
];
