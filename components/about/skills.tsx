"use client";

import Marquee from "react-fast-marquee";
import { BACKEND_STACKS, FRONTEND_STACKS, stacksProps } from "@/constants/stack";

const Skills = () => {
  return (
    <section aria-label="skills" className="my-4 space-y-8 bg-background">
      <h2 className="text-3xl font-bold mb-6">Skillset dan Tools</h2>
      <div className="space-y-6 w-full">
        <Marquee autoFill pauseOnHover speed={20}>
          <SkillsList stacks={FRONTEND_STACKS} />
        </Marquee>

        <Marquee autoFill pauseOnHover direction="right" speed={20}>
          <SkillsList stacks={BACKEND_STACKS} />
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;

const SkillsList = ({ stacks }: { stacks: stacksProps }) => {
  return (
    <ul className="flex items-center" role="list">
      {Object.keys(stacks).map((stack, index) => {
        const Icon = stacks[stack].Icon;
        const className = stacks[stack].className;
        return (
          <li
            role="listitem"
            key={index}
            className="mr-2 flex w-max items-center gap-2 rounded-full border  px-3 py-2 text-[15px] shadow-sm border-slate-300 dark:border-slate-700 dark:bg-slate-900 bg-slate-100 text-slate-900 dark:text-slate-50"
          >
            {<Icon className={className} aria-label={stack} />}
            <span className="whitespace-nowrap">{stack}</span>
          </li>
        );
      })}
    </ul>
  );
};
