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

interface Props {}

const privacy: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.app}>
        <Navbar works={[]} />
        <PrivacyInfo />
      </main>

      <Footer />
    </div>
  );
};

export default privacy;
