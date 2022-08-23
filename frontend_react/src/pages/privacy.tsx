import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { client } from "../client";
import Footer from "../components/Footer/Footer";
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

import React from "react";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components";
import PrivacyInfo from "../components/Privacy/PrivacyInfo";
import Header from "../components/Header/Header";

interface Props {
  works: WorkItem[];
}

const privacy: React.FC<Props> = ({ works }) => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.app}>
        <Navbar works={works} />
        <PrivacyInfo />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let works: WorkItem[] = await client.fetch(strings.QUERY_WORKS);

  works = verify(works);

  works.sort((a, b) => {
    return b.priority - a.priority;
  });

  return {
    props: {
      works,
    },
  };
};

function verify<T>(data: any): Array<T> {
  if (data === undefined || data === null) return new Array<T>();
  return data;
}

export default privacy;
