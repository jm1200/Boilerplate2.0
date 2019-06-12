import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import routes from "../routes";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => {
  return {
    list: {
      width: 250,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  };
});

const SideList = ({ toggleDrawer }) => {
  const classes = useStyles();
  let initialMenus = {};
  Object.keys(routes).forEach((key, i) => {
    initialMenus[i] = false;
  });
  const [open, setOpen] = React.useState(initialMenus);

  function handleClick(event, i) {
    event.stopPropagation();
    setOpen(Object.assign({}, { ...open }, { [i]: !open[i] }));
  }

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Options:
          </ListSubheader>
        }
        className={classes.root}
      >
        {Object.keys(routes).map((listItemKey, i) => {
          return (
            <div key={listItemKey}>
              <ListItem button onClick={event => handleClick(event, i)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={listItemKey} />
                {open[i] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open[i]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {routes[listItemKey].subMenus.map(subMenu => (
                    <ListItem
                      key={subMenu.subMenuName}
                      button
                      className={classes.nested}
                      component={Link}
                      to={subMenu.path}
                    >
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={subMenu.subMenuName} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default SideList;
