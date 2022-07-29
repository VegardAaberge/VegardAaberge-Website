/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import { WorkItem } from "../../../container/Work/WorkItem";
import { client } from "../../../client";
import { strings } from "../../../constants";
import WorkApp from "../../../workContainer/WorkApp";

interface Props {
  projectLink: string;
}

const Work: NextPage<Props> = ({ projectLink }) => {
  return (
    <div>
      <Head>
        <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
        <script src="../assets/js/jquery.js" async />
        <script src="../assets/js/bootstrap.min.js" defer />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-9 col-sm-8">
            <div className="panel panel-default" id="article1">
              <WorkApp projectLink={projectLink} />;
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
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
