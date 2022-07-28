import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { client } from "../client";
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

import mainStyles from "../styles/App.module.scss";
import styles from "../styles/Home.module.css";

const Main: NextPage<MainProps> = ({
  works,
  brands,
  testimonials,
  workExperience,
  experiences,
  skills,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainApp
          works={works}
          brands={brands}
          testimonials={testimonials}
          workExperience={workExperience}
          experiences={experiences}
          skills={skills}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
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

  works = verify(works);
  brands = verify(brands);
  testimonials = verify(testimonials);
  workExperience = verify(workExperience);
  experiences = verify(experiences);
  skills = verify(skills);

  return {
    props: {
      works,
      brands,
      testimonials,
      workExperience,
      experiences,
      skills,
    },
  };
};

function verify<T>(data: any): Array<T> {
  if (data === undefined || data === null) return new Array<T>();
  return data;
}

export default Main;
