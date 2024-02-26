import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import chillGrillLogoOG from '../images/chill_logo_og.jpeg'
import RocSitesLogo from "../images/logo/logo.png"
import SSLogo from "../images/ss_logo_placeholder.webp"
import coneIcon from "../images/cone_icon.png"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./main.css"

const withStyles = makeStyles(() => ({
  "@global": {
    "*": {
      fontFamily: "Arial !important",
      fontWeight: "100"
    }
  },
  navBarRoot: {
    position: "absolute",
    display: "flex",
    color: "#2A5095",
    backgroundColor: "white",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    right: 0,
    margin: "0px auto",
    boxShadow: "none",
    zIndex: "1",
    "@media(max-width: 1200px)": {
      position: "fixed",
      display: "flex",
      // background: "#4c86d1",
      justifyContent: "space-between",
      width: "100%",
      top: 0,
      boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
      zIndex: 2,
    },
    "@media(max-width: 600px)": {
      height: "110px",

    }
  },
  navBarTitle: {
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  navButton: {
    color: "#2A5095",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navBarButtonWrapper: {
    display: "flex",
    color: "#2A5095",
    margin: "10px",
    "@media(max-width: 600px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 601px)": {
      display: "flex",
      margin: "auto 10px"
    }
  },
  navLogo: {
    display: "flex",
    width: "160px",
    margin: "auto",
    borderRadius: "16px"
  },
  drawerItem: {
    "&:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    },
    "&:selected:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    }
  },
  list: {
    width: "250px"
  },
  hamburgerIcon: {
    margin: "20px",
    fontSize: "2.5rem",
    color: "white",
    "@media(min-width: 601px)": {
      display: "none"
    }
  },
  navLeftWrapper: {
    display: "flex",
  },
  navCallButton: {
    display: "flex",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "#2A5095",
    textTransform: "none",
    border: "1px solid #2A5095",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px"
  },
  navCallButtonMobile: {
    display: "flex",
    backgroundColor: "white",
    padding: "8px 16px",
    color: "black",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px",
    "@media(max-width: 600px)": {
      fontSize: "0.75rem",
      margin: "auto"
    }
  },
  drawerLinkWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  navButtonMobile: {
    color: "white",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "10px 16px",
    textDecoration: "none"
  },
  bottomHeaderRoot: {
    backgroundColor: "#2A5095",
    position: "relative",
    top: 120,
    height: "50px",
    margin: "auto",
    "@media(max-width: 1200px)": {
      width: "100%",
      borderBottomRightRadius: "0px",
      borderBottomLeftRadius: "0px",
    },
    "@media(max-width: 600px)": {
      height: "auto",
      top: 110,
    },
  },
  mapLink: {
    textDecoration: "none",
  }
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  return (
    <div style={{ marginBottom: "-50px" }}>
      <header
        className={classes.navBarRoot}
      >
        <div className={classes.navLeftWrapper}>
          <div className={classes.navBarTitle}>
            <Link to="/" style={{ color: '#001841', textDecoration: `none` }}>
              <img className={classes.navLogo} src={SSLogo} alt="company logo" />
            </Link>
          </div>
        </div>

        <div class="navRightWrapper">
          <div className={classes.navBarButtonWrapper}>
            <AnchorLink className={classes.navButton}
              to="/#sectionOne" title="Services">
            </AnchorLink>
            <AnchorLink className={classes.navButton}
              to="/#sectionTwo" title="Gifts">
            </AnchorLink>
            <AnchorLink className={classes.navButton}
              to="/#sectionThree" title="Contact Us">
            </AnchorLink>

          </div>

          <div class="socialLinkWrapperNav">
            <Button
              className={classes.navCallButton}
              target="_blank" href="tel:585-872-2170"
            >
              <PhoneIcon sx={{color: "#2A5095"}} class="drawerPhoneIcon" />
              Call Us
            </Button>
          </div>
        </div>


        <div className={classes.navBarHamburgerDrawerWrapper}>
          <Button
            className={classes.navCallButtonMobile}
            target="_blank" href="tel:585-872-2170"
          >
            <PhoneIcon sx={{color: "#2A5095"}} class="drawerPhoneIcon" />
            Call Us
          </Button>
          <MenuIcon
            className={classes.hamburgerIcon}
            onClick={toggleDrawer}
          />
          <Drawer
            open={openDrawer}
            onClose={toggleDrawer}
            anchor="right"
            className={classes.drawerRoot}
          >
            <div
              className={classes.list}
              role="presentation"
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
            >
              <List>
                <div className={classes.drawerLinkWrapper}>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#sectionOne" title="Section 1">
                  </AnchorLink>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#sectionTwo" title="Section 2">
                  </AnchorLink>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#sectionThree" title="Section 3">
                  </AnchorLink>
                </div>


                <div class="socialLinkWrapperNavMobile">
                  <Button
                    class="drawerItemLogin"
                    target="_blank" href="tel:585-872-2170"
                  >
                    <PhoneIcon class="drawerPhoneIcon" />
                    Call Us
                  </Button>
                </div>
              </List>

            </div>
          </Drawer>

        </div>
      </header>
      <div className={classes.bottomHeaderRoot}>
        <div class="bottomHeaderWrapper">
          <Button
            className="bottomHeaderPhone"
            target="_blank" href="tel:(585) 872-2170"
          > (585) 872-2170
          </Button>
          <AnchorLink className={classes.mapLink}
            to="/#map">
            <p className="bottomHeaderText">1170 Ridge Road Webster,NY 14580</p>

          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
