import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";
import { WorkItem } from "../../container/Work/WorkItem";

import styles from "./NavWorkList.module.scss";
import { urlFor } from "../../client";
import Link from "next/link";

interface Props {
  projectLink: string;
  works: WorkItem[];
}

const NavWorkList: React.FC<Props> = ({ projectLink, works }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {works.map((work) => (
        <div key={work.title}>
          <ListItem
            sx={{ paddingInline: 1 }}
            disableGutters={true}
            key={work._id}
            alignItems="flex-start"
            className={projectLink === work.projectLink ? styles.active : ""}
          >
            <Link href={work.projectLink}>
              <a className={styles.link_a}>
                <ListItemButton disableGutters={true} sx={{ paddingInline: 2 }}>
                  <ListItemAvatar sx={{ width: 80, paddingRight: 3 }}>
                    <Avatar
                      alt={work.title}
                      src={urlFor(work.imgUrl).url()}
                      variant="square"
                      sx={{ width: 60, height: 60 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={work.title}
                    secondary={work.description}
                  />
                </ListItemButton>
              </a>
            </Link>
          </ListItem>
          <Divider sx={{ marginInline: 3 }} />
        </div>
      ))}
    </List>
  );
};

export default NavWorkList;
