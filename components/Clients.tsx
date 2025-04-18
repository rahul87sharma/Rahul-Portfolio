"use client";

import React from "react";

const technologies = [
  "MongoDB",
  "React",
  "Node",
  "Express",
  "Next",
  "JavaScript",
  "Tailwind-CSS",
  "Shadcn",
  "Framer Motion",
  "C++",
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <h1 className="heading">
        Technologies
        <span className="text-purple"> I Use</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
        {/* Top row */}
        <div className="w-full flex flex-wrap justify-center gap-10 mt-10">
          {technologies.slice(0, 5).map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img
                src={`/tech-icons/${tech.toLowerCase().replace(/ /g, "-").replace(".", "")}.svg`}
                alt={tech}
                className="w-20 h-20"
              />
              <p className="mt-2 text-center text-sm">{tech}</p>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-wrap justify-center gap-10 mt-10">
          {technologies.slice(5).map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img
                src={`/tech-icons/${tech.toLowerCase().replace(/ /g, "-").replace(".", "")}.svg`}
                alt={tech}
                className="w-20 h-20"
              />
              <p className="mt-2 text-center text-sm">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
