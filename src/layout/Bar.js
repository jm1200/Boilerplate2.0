import React, { Component } from "react";
import routes from "../routes";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import SideNav from "./SideNav";

import PersonIcon from "@material-ui/icons/Person";

import SimpleMenu from "./Menus";

const styles = theme => ({
  signUpButton: {
    marginRight: theme.spacing(1)
  }
});

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: {
        anchorEl: null
      },
      drawer: false
    };
  }

  openMenu = event => {
    const anchorEl = event.currentTarget;

    this.setState({
      menu: {
        anchorEl
      }
    });
  };

  closeMenu = () => {
    this.setState({
      menu: {
        anchorEl: null
      }
    });
  };

  handleSettingsClick = () => {
    this.closeMenu();
    this.props.onSettingsClick();
  };

  handleSignOutClick = () => {
    this.closeMenu();
    this.props.onSignOutClick();
  };

  toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, drawer: open });
  };

  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { name, isPerformingAuthAction, isSignedIn, user } = this.props;

    // Events
    const { onSignUpClick, onSignInClick } = this.props;

    const { menu } = this.state;

    return (
      <>
        <AppBar color="primary" position="static">
          <Toolbar variant="regular">
            <Hidden only={["md", "lg", "xl"]}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              component={Link}
              to={"/"}
              style={{ flexGrow: 1, textDecoration: "none" }}
              color="inherit"
              variant="h6"
            >
              {name}
            </Typography>
            <Hidden only={["xs", "sm"]}>
              {Object.keys(routes).map(key => {
                return <SimpleMenu key={key} menu={routes[key]} />;
              })}
            </Hidden>

            {isSignedIn && (
              <React.Fragment>
                <IconButton
                  color="inherit"
                  disabled={isPerformingAuthAction}
                  onClick={this.openMenu}
                >
                  {user.photoURL ? (
                    <Avatar alt="Avatar" src={user.photoURL} />
                  ) : (
                    <PersonIcon />
                  )}
                </IconButton>

                <Menu
                  anchorEl={menu.anchorEl}
                  open={Boolean(menu.anchorEl)}
                  onClose={this.closeMenu}
                >
                  <MenuItem
                    disabled={isPerformingAuthAction}
                    onClick={this.handleSettingsClick}
                  >
                    Settings
                  </MenuItem>
                  <MenuItem
                    disabled={isPerformingAuthAction}
                    onClick={this.handleSignOutClick}
                  >
                    Sign out
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}

            {!isSignedIn && (
              <React.Fragment>
                <Button
                  className={classes.signUpButton}
                  color="secondary"
                  disabled={isPerformingAuthAction}
                  variant="contained"
                  onClick={onSignUpClick}
                >
                  Sign Up
                </Button>
                <Button
                  color="secondary"
                  disabled={isPerformingAuthAction}
                  variant="contained"
                  onClick={onSignInClick}
                >
                  Sign In
                </Button>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <SideNav toggleDrawer={this.toggleDrawer} />
        </Drawer>
      </>
    );
  }
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,

  name: PropTypes.string.isRequired,
  isPerformingAuthAction: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool.isRequired,

  onSettingsClick: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Bar);
