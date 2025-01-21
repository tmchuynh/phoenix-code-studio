import { BookCheck, Brain, ChartNoAxesCombined, CheckCheck, FolderClock, GraduationCap, LibraryBig, Medal, NotebookPen, Rocket, Send, Swords, Table2, TrendingUp } from "lucide-react";

export const data = {
  navMain: [
    {
      title: "Flashcards",
      url: "/flashcards",
      icon: NotebookPen,
    },
    {
      title: "Quizzes",
      url: "/quiz",
      icon: CheckCheck,
      items: [
        {
          title: "Software Engineering",
          url: "#",
        },
        {
          title: "Pre Medical",
          url: "#",
        },
        {
          title: "Business",
          url: "#",
        },
        {
          title: "Law",
          url: "#",
        },
        {
          title: "Entrepreneurship",
          url: "#",
        },
        {
          title: "Miscellaneous",
          url: "#",
        },
      ],
    },
    {
      title: "Tests",
      url: "/exams",
      icon: BookCheck,
      items: [
        {
          title: "Beginner Tests",
          url: "#",
        },
        {
          title: "Expert Tests",
          url: "#",
        },
        {
          title: "Multiple Subject Tests",
          url: "#",
        },
        {
          title: "Timed Tests",
          url: "#",
        },
      ],
    },
    {
      title: "Learning Paths",
      url: "/roadmaps",
      icon: NotebookPen,
      items: [
        {
          title: "Full-Stack Web Development",
          url: "/roadmaps/fullstack",
        },
        {
          title: "Front-end Development",
          url: "/roadmaps/frontend",
        },
        {
          title: "Back-end Development",
          url: "/roadmaps/backend",
        },
        {
          title: "Pre Medical",
          url: "/roadmaps/premed",
        },
        {
          title: "Business",
          url: "/roadmaps/business",
        },
        {
          title: "Law",
          url: "/roadmaps/law",
        },
        {
          title: "Entrepreneurship",
          url: "/roadmaps/entrepreneurship",
        },
      ],
    },
  ],
  information: [
    {
      title: "Badges",
      url: "/badges",
      icon: Medal,
    },
    {
      title: "Current Challenges",
      url: "/challenges",
      icon: Swords,
    },
    {
      title: "Memory Techniques",
      url: "#",
      icon: Brain,
    },
    {
      title: "Boost Your Confidence",
      url: "#",
      icon: Rocket,
    },
    {
      title: "Study Tips",
      url: "#",
      icon: LibraryBig,
    },
    {
      title: "Mastering Complex Topics",
      url: "#",
      icon: GraduationCap,
    },
    {
      title: "Progress Reports",
      url: "#",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Example Insights",
      url: "/mock_data",
      icon: TrendingUp,
    },
  ],
  foryou: [
    {
      title: "Leaderboards",
      url: "/leaderboard",
      icon: Table2,
    },
    {
      title: "Score History",
      url: "/scores",
      icon: FolderClock,
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};