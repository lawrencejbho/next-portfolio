"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
      >
        <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
          Skills
        </h3>

        {/* <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
          Hover over a skill for current proficiency
        </h3> */}

        <div className="grid grid-cols-4 gap-5">
          <Skill directionLeft="directionLeft" />
          <Skill directionLeft="directionLeft" />
          <Skill />
          <Skill />
          <Skill directionLeft="directionLeft" />
          <Skill directionLeft="directionLeft" />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;