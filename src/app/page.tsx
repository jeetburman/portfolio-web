import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import OpenSource from "@/components/sections/OpenSource";
import Hackathons from "@/components/sections/Hackathons";
import Hobbies from "@/components/sections/Hobbies";
import Footer from "@/components/layout/Footer";
import hobbiesData from "@/data/hobbies.json";
import { Hobby } from "@/types";
import Languages from "@/components/sections/Languages";
import { Language } from "@/types";
import EducationSection from "@/components/sections/Education";


import personData from "@/data/person.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";
import opensourceData from "@/data/opensource.json";
import hackathonsData from "@/data/hackathons.json";
import achievementsData from "@/data/achievements.json";

import {
  Person,
  Project,
  ExperienceItem,
  Skills as SkillsType,
  OpenSourceItem,
  Hackathon,
  Achievement,
} from "@/types";

const person = personData as Person;
const projects = projectsData as Project[];
const experience = experienceData as ExperienceItem[];
const skills = skillsData as SkillsType;
const opensource = opensourceData as OpenSourceItem[];
const hackathons = hackathonsData as Hackathon[];
const achievements = achievementsData as Achievement[];
const hobbies = hobbiesData as Hobby[];
const languages = (personData as Person).languages as Language[];

export default function Home() {
  return (
    <main>
      <Navbar person={person} />
      <Hero person={person} />
      <Projects projects={projects} />
      <EducationSection education={person.education} />
      <OpenSource items={opensource} />
      <Experience experience={experience} />
      <Languages languages={languages} />
      <Hackathons hackathons={hackathons} achievements={achievements} />
      <Skills skills={skills} />
      <Hobbies hobbies={hobbies} />
      <Footer person={person} />
    </main>
  );
}