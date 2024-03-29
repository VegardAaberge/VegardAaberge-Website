import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { client } from "../client";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { strings } from "../constants";
import MainApp from "../container/MainApp";
import { MainProps } from "../container/MainProps";
import {
  ExperienceItem,
  SkillItem,
  WorkExperienceItem,
} from "../container/Skills/models";
import { BrandItem, TestimonialItem } from "../container/Testimonial/models";
import { WorkItem } from "../container/Work/WorkItem";

import styles from "../styles/Home.module.css";

const Main: NextPage<MainProps> = ({
  works,
  brands,
  testimonials,
  workExperience,
  experiences,
  skills,
  abouts,
}) => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <MainApp
          works={works}
          brands={brands}
          testimonials={testimonials}
          workExperience={workExperience}
          experiences={experiences}
          skills={skills}
          abouts={abouts}
        />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let works: WorkItem[] = await client.fetch(strings.QUERY_WORKS);
  let brands: BrandItem[] = await client.fetch(strings.QUERY_BRANDS);
  let testimonials: TestimonialItem[] = await client.fetch(
    strings.QUERY_TESTIMONIALS
  );
  let workExperience: WorkExperienceItem[] = await client.fetch(
    strings.QUERY_WORK_EXPERIENCE
  );
  let experiences: ExperienceItem[] = await client.fetch(
    strings.QUERY_EXPERIENCES
  );
  let skills: SkillItem[] = await client.fetch(strings.QUERY_SKILLS);
  let abouts = await client.fetch(strings.QUERY_ABOUT);

  works = verify(works);
  brands = verify(brands);
  testimonials = verify(testimonials);
  workExperience = verify(workExperience);
  experiences = verify(experiences);
  skills = verify(skills);
  abouts = verify(abouts);

  works.sort((a, b) => {
    return b.priority - a.priority;
  });

  testimonials.sort((a, b) => {
    return b.priority - a.priority;
  });

  experiences.sort((a, b) => {
    return b.year - a.year;
  });

  skills.sort((a, b) => {
    return b.priority - a.priority;
  });

  return {
    props: {
      works,
      brands,
      testimonials,
      workExperience,
      experiences,
      skills,
      abouts,
    },
  };
};

function verify<T>(data: any): Array<T> {
  if (data === undefined || data === null) return new Array<T>();
  return data;
}

export default Main;
