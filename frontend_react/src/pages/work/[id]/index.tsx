/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

import { GetStaticProps, NextPage } from "next";
import { WorkItem } from "../../../container/Work/WorkItem";
import { client } from "../../../client";
import { strings } from "../../../constants";
import { SkillItem } from "../../../container/Skills/models";
import WorkApp from "../../../workContainer/WorkApp";

interface Props {
  projectLink: string;
  works: WorkItem[];
}

const Work: NextPage<Props> = ({ projectLink, works }) => {
  return <WorkApp projectLink={projectLink} works={works} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params === undefined) {
    return {
      props: {
        projectLink: "",
      },
    };
  }

  const projectLink = context.params.id;

  let works: WorkItem[] = await client.fetch(strings.QUERY_WORKS);
  let skills: SkillItem[] = await client.fetch(strings.QUERY_SKILLS);

  works.map((work) => {
    work.skillsUsedStrings = work.skillsUsed
      .map((sRef) => skills.find((s) => s._id == sRef._ref)?.name)
      .filter((s): s is string => !!s);
  });

  return {
    props: {
      projectLink: projectLink,
      works: works,
    },
  };
};

export const getStaticPaths = async () => {
  let works: WorkItem[] = await client.fetch(strings.QUERY_WORKS);

  const ids = works
    .map((work) => work.projectLink)
    .filter((link): link is string => link !== undefined);

  const paths = ids.map((id) => ({ params: { id: id } }));

  return {
    paths,
    fallback: false,
  };
};

export default Work;
