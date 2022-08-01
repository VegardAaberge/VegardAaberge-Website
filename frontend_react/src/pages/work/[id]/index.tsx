/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

import { GetStaticProps, NextPage } from "next";
import { WorkItem } from "../../../container/Work/WorkItem";
import { client } from "../../../client";
import { strings } from "../../../constants";
import LegacyWorkWrap from "../../../wrapper/LegacyWorkWrap";
import WorkWrap from "../../../wrapper/WorkWrap";

interface Props {
  projectLink: string;
}

const Work: NextPage<Props> = ({ projectLink }) => {
  if (
    projectLink === "aaberge_brudesalong" ||
    projectLink === "black_oil_calculator"
  ) {
    return (
      <div>
        <Head>
          <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
        </Head>

        <LegacyWorkWrap projectLink={projectLink} />
      </div>
    );
  } else {
    return <WorkWrap projectLink={projectLink} />;
  }
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

  return {
    props: {
      projectLink: projectLink,
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
