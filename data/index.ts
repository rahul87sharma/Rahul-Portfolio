import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Skilled in fostering open communication and collaborative client relationships.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very adaptable, with global teams and clients.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Working On a SaaS Project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Eager to collaborate on your next project!!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    resumeLink: "/resume.pdf", // Path to resume
  },
];

export const projects = [
  {
    id: 1,
    title: "Weather App",
    des: "A responsive weather forecasting app using Shadcn UI, React, APIs, and Tailwind CSS.",
    img: "/a1.png", // Replace with your actual image
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://weather-app-tawny-psi-51.vercel.app/", // Add actual deployment link
  },
  {
    id: 2,
    title: "My Money - Expense Tracker",
    des: "Track your income and expenses effortlessly. Built with the MERN stack for personal finance management.",
    img: "/a2.png", // Replace with your actual image
    iconLists: ["/mongo.svg", "/express.svg", "/re.svg", "/node.svg"],
    link: "https://my-money-beta.vercel.app/", // Add actual deployment link
  },
  {
    id: 3,
    title: "Sudoku Solver",
    des: "A DSA-focused project solving Sudoku puzzles using backtracking algorithm.",
    img: "/a3.png", // Replace with your actual image
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg"], // You can customize icons
    link: "https://rahul87sharma.github.io/Sudoku-Solver/", // Optional GitHub repo or live demo
  },
  {
    id: 4,
    title: "Notes App",
    des: "A simple and effective note-taking app built with vanilla HTML, CSS, and JavaScript.",
    img: "/a4.png", // Replace with your actual image
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg"],
    link: "https://rahul87sharma.github.io/My-Notes/", // Add actual deployment or repo link
  },
];


export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Cloud Computing - NPTEL",
    desc: "Completed NPTEL's cloud computing course with top grades.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "/certi/cloud-computing.pdf",
  },
  {
    id: 2,
    title: "Data Structure and Algorithms - Self Paced - GFG",
    desc: "Completed GFG’s self-paced DSA course.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    link: "/certi/dsa-gfg.pdf",
  },
  {
    id: 3,
    title: "The Bits and Bytes of Computer Networking - Google",
    desc: "Finished foundational networking course from Google.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    link: "/certi/google-networking.pdf",
  },
  {
    id: 4,
    title: "Learn to Code with AI - Scrimba",
    desc: "Learned coding fundamentals using AI-powered tools.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "/certi/ai-scrimba.pdf",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rahul87sharma",
  },
  {
    id: 2,
    img: "/x2.svg", // Replace with the actual X logo image
    link: "https://x.com/rahul_87sharma",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rahulsharma08/",
  },
];

