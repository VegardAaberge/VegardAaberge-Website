import Link from "next/link";
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
  return <WorkApp projectLink={projectLink} />;
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
