import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import RocSitesLogo from "../images/logo/logo.png"
import SSLogo from "../images/ss_logo_placeholder.webp"
import PopWashLogo from "../images/pop_wash_logo-1.png"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import "./main.css"

const withStyles = makeStyles(() => ({
  "@global": {
    "*": {
      fontFamily: "Arial !important",
      fontWeight: "100"
    }
  },
  navBarRoot: {
    position: "fixed",
    display: "flex",
    color: "#2A5095",
    backgroundColor: "white",
    justifyContent: "space-between",
    top: 44,
    left: 0,
    right: 0,
    margin: "0px auto",
    boxShadow: "none",
    zIndex: "1",
    height: "100px",
    backgroundImage: "linear-gradient(rgba(162, 176, 255, .95), rgba(162, 176, 255, 0))",
    "@media(max-width: 1200px)": {
      position: "fixed",
      display: "flex",
      // background: "#4c86d1",
      justifyContent: "space-between",
      width: "100%",
      top: 44,
      boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
      zIndex: 2,
    },
    "@media(max-width: 600px)": {
      // height: "110px",

    }
  },
  navBarRootScroll: {
    position: "fixed",
    display: "flex",
    // background: "#4c86d1",
    backgroundColor: "white",
    color: "white",
    justifyContent: "space-between",
    width: "100%",
    top: 0,
    backgroundImage: "linear-gradient(rgba(162, 176, 255, .95), rgba(162, 176, 255, 0))",
    zIndex: 2,
  },
  navBarTitle: {
    maxWidth: 960,
    padding: `0.5rem`,
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
    width: "100px",
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
    color: "#2A5095",
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
    padding: "8px 16px",
    color: "#2A5095",
    border: "1px solid #2A5095",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px",
    "@media(max-width: 600px)": {
      fontSize: "0.75rem",
      margin: "auto",
      width: "110px"
    }
  },
  drawerLinkWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  navButtonMobile: {
    color: "#2A5095",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "10px 16px",
    textDecoration: "none"
  },
  bottomHeaderRoot: {
    backgroundColor: "#2A5095",
    position: "relative",
    top: 0,
    height: "50px",
    margin: "auto",
    "@media(max-width: 1200px)": {
      width: "100%",
      borderBottomRightRadius: "0px",
      borderBottomLeftRadius: "0px",
    },
    "@media(max-width: 600px)": {
      height: "auto",
    },
  },
  mapLink: {
    textDecoration: "none",
  }
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false)
  const [navbarScroll, setNavbarScroll] = useState(false)

  const handleClickMobile = () => {
    setOpen(!open)
  }

  const serviceMenuItems = [
    {
      title: 'Services',
      url: '',
      submenu: [
        {
          title: 'Packing & Shipping',
          url: '/packing-shipping',
        },
        {
          title: 'Passport Photos',
          url: '/passports',
        },
        {
          title: 'Mail Receiving',
          url: '/mail-receiving',
        },
        {
          title: 'Mailing Services',
          url: '/mail-services',
        },
        {
          title: 'Packing & Office Supplies',
          url: '/supplies',
        }
      ]
    },


  ];


  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 33) {
      setNavbarScroll(true)
    } else {
      setNavbarScroll(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div>
      <header className={navbarScroll ? classes.navBarRootScroll : classes.navBarRoot}>
        <div className={classes.navLeftWrapper}>
          <div className={classes.navBarTitle}>
            <Link to="/" style={{ color: '#001841', textDecoration: `none` }}>
              <img className={classes.navLogo} src={PopWashLogo} alt="company logo" />
            </Link>
          </div>
        </div>

        <div class="navRightWrapper" onMouseLeave={() => setDropdown(false)}>
          <div className={classes.navBarButtonWrapper}>
            <div className="productButtonWrapper">
              <button
                aria-expanded={dropdown ? "true" : "false"}
                onMouseEnter={() => setDropdown(true)}
                style={{
                  border: "transparent"
                }}
              >
                Services
                <KeyboardArrowDownIcon />
              </button>
              {dropdown ?
                <ul className={`dropdown dropdown-submenu ${dropdown ? "show" : ""}`}>
                  {serviceMenuItems[0].submenu.map((submenu, index) => (
                    <li key={index} className="menu-items">
                      <a href={submenu.url}>{submenu.title}</a>
                    </li>
                  ))}
                </ul>
                : null}
            </div>
            <AnchorLink className={classes.navButton}
              to="/#sectionTwo" title="Gifts">
            </AnchorLink>
            <AnchorLink className={classes.navButton}
              to="/#about" title="About">
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
              <PhoneIcon sx={{ fill: "#2A5095 !important" }} class="drawerPhoneIcon" />
              Call Us
            </Button>
          </div>
        </div>


        <div className={classes.navBarHamburgerDrawerWrapper}>
          <Button
            className={classes.navCallButtonMobile}
            target="_blank" href="tel:585-872-2170"
          >
            <PhoneIcon sx={{ fill: "#2A5095 !important" }} class="drawerPhoneIcon" />
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
            >
              <div className={classes.drawerLinkWrapper}>
                <div className="productButtonWrapperMobile">
                  <ListItemButton style={{ paddingLeft: "8px", paddingBottom: "0px", justifyContent: "flex-start" }} onClick={handleClickMobile}>
                    <Typography style={{ fontFamily: "georgia, sans-serif", color: "#2A5095" }}>Services</Typography>
                    {open ? <ExpandLess sx={{ fill: "#2A5095" }} /> : <ExpandMore sx={{ fill: "#2A5095" }} />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <List>
                        {serviceMenuItems[0].submenu.map((submenu, index) => (
                          <ListItemText key={index} className="menu-items">
                            <a style={{ fontSize: "0.9rem", fontFamily: "georgia, sans-serif", paddingLeft: "32px", color: "#2A5095" }} href={submenu.url}>{submenu.title}</a>
                          </ListItemText>
                        ))}
                      </List>
                    </List>
                  </Collapse>
                  {dropdown ?
                    <ul className={`dropdown-mobile dropdown-submenu ${dropdown ? "show" : ""}`}>
                      {serviceMenuItems[0].submenu.map((submenu, index) => (
                        <li key={index} className="menu-items">
                          <a href={submenu.url}>{submenu.title}</a>
                        </li>
                      ))}
                    </ul>
                    : null}
                </div>
                <List
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#sectionTwo" title="Gifts">
                  </AnchorLink>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#about" title="About">
                  </AnchorLink>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#sectionThree" title="Contact Us">
                  </AnchorLink>
                </List>
              </div>


              <div class="socialLinkWrapperNavMobile">
                <Button
                  class="drawerItemLogin"
                  target="_blank" href="tel:585-872-2170"
                >
                  <PhoneIcon sx={{ fill: "white !important" }} class="drawerPhoneIcon" />
                  Call Us
                </Button>
              </div>

            </div>
          </Drawer>

        </div>
      </header>
      <div className={classes.bottomHeaderRoot}>
        <div class="bottomHeaderWrapper">
          <Button
            className="bottomHeaderPhone"
            target="_blank" href="tel:(585) 872-2170"
          > placeholder text
          </Button>
          <AnchorLink className={classes.mapLink}
            to="/#sectionThree">
            <p className="bottomHeaderText">some more placeholder text</p>

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
