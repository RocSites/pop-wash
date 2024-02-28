import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import rocBuildingOne from "../images/yassine-khalfalli-roc-image.jpg"
import ssMainSign from "../images/ss_sign_1.jpeg"
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import GoogleIcon from "../images/google_icon.png"
import MailBoxes from "../images/ss_mailboxes_1.jpeg"
import PassPort from "../images/jon-tyson-passport.jpg"
import MailServices from "../images/sue-hughes-mail.jpg"
import SuppliesImage from "../images/ss_supplies_2.jpeg"
import Boxes from "../images/ss_boxes_2.jpeg"
import GiftBeanieOne from "../images/ss_beanie.jpeg"
import GiftBeanieTwo from "../images/ss_beanie_3.jpeg"
import PuzzlesPhoto from "../images/ss_puzzles.jpeg"
import GiftBeanieThree from "../images/ss_beanie_2.jpeg"
import "./main.css"

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    aboutBackgroundImage: {
        width: "100%",
    },
    servicesWrapper: {
        display: "flex",
        flexWrap: "wrap",
        "@media(max-width:600px)": {
            flexDirection: "column",
            alignItems: "center",
        }
    },
    aboutWrapper: {
        display: "flex",
        margin: "auto",
        margin: "20px",
        color: "black",
        marginBottom: "50px",
        "@media(max-width: 600px)": {
            flexDirection: "column"
        }
    },
    servicesTitle: {
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "1.25rem",
        color: "#2A5095",
    },
    aboutTextWrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "960px",
        margin: "20px",
        "& p": {
            opacity: "1.0"
        }
    },
    aboutText: {
        color: "black"
    },
    aboutImage: {
        width: "50%",
        maxHeight: "500px",
        maxWidth: "500px",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    servicesText: {
        color: "black"
    },
    projectImage: {
        width: "25%",
        margin: "25px",
        maxHeight: "350px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "white"
    },
    someOfWorkHeader: {
        textAlign: "center",
        fontSize: "2.5rem",
        color: "#2A5095",
        padding: "10px",
        width: "100%",
        margin: "auto",
        "@media(max-width: 600px)": {
            width: "90%"
        }
    },
    landingMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        opacity: "0.85",
        marginLeft: "0px",
        marginRight: "0px",
        height: "150px",
        "@media(max-width:650px)": {
            marginTop: "auto"
        }
    },
    landingPageHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "3.0em",
        fontWeight: "500",
        textAlign: "center",
        margin: "auto"
    },
    landingPageSubHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "2em",
        fontWeight: "500",
        fontFamily: "Arial !important",
        textAlign: "center",
        margin: "auto",
        "@media(max-width: 600px)": {
            display: "none"
        }
    },
    landingPageSubHeaderMobile: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "block",
            color: "black",
            // background: "#3587de",
            marginLeft: "0px",
            marginRight: "0px",
            fontSize: "2em",
            fontWeight: "100",
            fontFamily: "Arial !important",
            textAlign: "center",
            margin: "auto"
        }
    },
    serviceDivider: {
        width: "15%",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "1.5em",
        background: "white"
    },
    serviceWrapper: {
        paddingTop: "2.5em"
    },
    scrollToSectionOne: {
        height: "80px",
        background: "#ffffff"
    },
    scrollToServices: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    scrollToContact: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    servicesListWrapper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "auto"
    },
    servicesCard: {
        width: "calc(50% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        backgroundColor: "#1563b2",
        "@media(max-width: 736px)": {
            width: "100%",
            margin: "1.25em 0 0 0"
        }
    },
    servicesCardLast: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "flex",
            height: "100px",
            color: "transparent",
            backgroundColor: "transparent",
            boxShadow: "none"
        }
    },
    servicesCardContent: {
        position: "relative",
        textAlign: "center",
        color: "black",
        padding: 0,
        paddingBottom: "0 !important",
        margin: "10px",
        height: "400px"
    },
    servicesCardImage: {
        height: "100%",
        width: "100%",
    },
    servicesCardText: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#add8e685"
    },
    phoneEmailWrapper: {
        display: "flex",
        justifyContent: "center",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            textAlign: "center"
        }
    },
    contactPhone: {
        color: "black",
        textDecoration: "none",
        fontFamily: "Arial !important",
    },
    contactButton: {
        margin: "20px",
        backgroundColor: "#2A5095",
        color: "white",
        borderRadius: "35px",
        padding: "15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        // width: "190px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#001841",
            boxShadow: 'none',
            cursor: "pointer"
        },
    },
    emailA: {
        marginBottom: "20px",
        textDecoration: "none"
    },
    reviewsWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
    },
    reviewClickText: {
        textTransform: "none"
    },
    reviewStarWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    reviewLink: {
        textDecoration: "none"
    },
    reviewCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#white",
        width: "250px",
        minHeight: "100px",
        margin: "10px",
        padding: "10px"
    },
    reviewCardText: {
        fontSize: "0.75rem"
    },
    reviewCardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "15%",
        "@media(max-width: 600px)": {
            justifyContent: "center",
            marginLeft: "unset"
        }
    },
    phoneIcon: {
        marginRight: "10px"
    },
    emailIcon: {
        marginRight: "10px"
    },
    bbbWrapper: {
        display: "flex",
        margin: "auto",
        marginTop: "0px",
        backgroundColor: "white",
        borderRadius: "14px",
        "@media(max-width:600px)": {
            flexDirection: "column",
            justifyContent: "center",
            height: "110px",
            marginBottom: "20px",
        }
    },
    bbbLink: {
        display: "flex",
        textDecoration: "none",
        padding: "10px",
    },
    bbbImage: {
        margin: "auto",
        padding: "10px",
        minWidth: "200px",
        maxWidth: "300px",
        maxHeight: "150px",
        borderRadius: "15px"
    },
    bbbYearsCircle: {
        width: "65px",
        height: "65px",
        backgroundColor: "#1f5a76",
        margin: "auto",
        marginRight: "10px",
        fontFamily: "Arial !important",
        borderRadius: "14px"
    },
    bbbCirleText: {
        color: "white",
        opacity: "1 !important",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "2.0rem"
    },
    phBizCardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    phBizCardImage: {
        maxWidth: "300px",
        maxHeight: "200px"
    },
    fiveStar: {
        color: "#f5b81c"
    },
    hourText: {
        display: "flex",
        color: "black",
        margin: "10px auto",
        justifyContent: "center",
        fontSize: "1.25rem"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuHeaderTextMenu: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuBlockWrapper: {
        display: "flex"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.75rem"
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "2rem",
        color: "#2A5095",
        marginBottom: 0
    },
    addressText: {
        textAlign: "center",
        margin: "40px 0"
    },
    aboutWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column"
    },
    connectHeader: {
        fontSize: "2rem",
        textAlign: "center",
        color: "black",
        textTransform: "uppercase"
    },
    socialLinkWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 40px 0"
    },
    aboutSectionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& iframe": {
            "@media(max-width:600px)": {
                width: "90%",
                margin: "auto"
            }
        },

    },
    reviewHeader: {
        fontSize: "1.2rem",
        textTransform: "none",
        color: "white",
        margin: 0,
    },
    socialFooterMargin: {
        height: "40px",
        width: "40px",
        margin: "10px auto"
    },
    socialFooter: {
        height: "40px",
        width: "40px",
        margin: "0 10px"
    },
    socialFacebookSpacing: {
        height: "40px",
        width: "40px",
        margin: "0 10px",
        marginBottom: "2px"
    },
    socialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reviewButton: {
        backgroundColor: "#333333",
        borderRadius: "25px",
        padding: "20px",
        marginBottom: "20px",
        border: "none"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0"
    },
    containerMarginBottomSmall: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0",
        marginBottom: "80px"
    },
    landingImage: {
        width: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
        height: "100vh",
        marginBottom: "0px"
    },
    mainBanner: {
        display: "flex",
        marginTop: "25%",
        marginLeft: "25%",
        marginRight: "15%",
        textAlign: "center",
        position: "absolute",
        backgroundColor: "white",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "35px",
        "@media(max-width:600px)": {
            marginTop: "50%",
            marginLeft: "15%",
            marginRight: "15%",
        }
    },
    servicesItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textDecoration: "none",
        flex: "1 0 20%",
        margin: "5px",
        padding: "25px",
        "@media(max-width:600px)": {
            width: "100%"
        }
    },
    servicesSubtitle: {
        marginBottom: "10px",
        fontSize: "0.9rem",
        textAlign: "center",
        color: "black"
    },
    servicesImage: {
        width: "100%",
        maxWidth: "250px",
        aspectRatio: "1/1",
        objectFit: "cover",
        borderRadius: "5px"
    },

}))

const Main = () => {
    const classes = withStyles();
    const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query { 
      desktopImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 650px)`
        }
    ]

    const FiveStar = () => {
        return (
            <div className={classes.fiveStar}>
                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
            </div>
        )
    }


    return (
        <div className={classes.mainRoot}>
            {/* <div className={classes.mainBanner}>We are closed Tuesday, August 1st. We will reopen Wednesday, August 2nd</div> */}

            <img src={ssMainSign} className={classes.landingImage} />

            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionOne"></span>
            </div>

            <section class="servicesSectionWrapper">
                <Typography className={classes.someOfWorkHeader}>Our Services</Typography>
                <div className={classes.servicesWrapper}>

                    <Link to="/packing-shipping" className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Packing & Shipping</Typography>
                        <Typography className={classes.servicesSubtitle}>Fedex, UPS, DHL, USPS</Typography>

                        <img className={classes.servicesImage} src={Boxes} />
                    </Link>

                    <Link to="/passports" className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Passport Photos</Typography>
                        <Typography className={classes.servicesSubtitle}>Instant Passport Photos</Typography>
                        <img className={classes.servicesImage} src={PassPort} />
                    </Link>
                    <Link to="/mail-receiving" className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Mail Receiving</Typography>
                        <Typography className={classes.servicesSubtitle}>Mailboxes and Faxing</Typography>
                        <img className={classes.servicesImage} src={MailBoxes} />
                    </Link>
                    <Link to="/mail-services" className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Mailing Services</Typography>
                        <Typography className={classes.servicesSubtitle}>Full Service, Postal Presorting, Postage Discounts</Typography>
                        <img className={classes.servicesImage} src={MailServices} />
                    </Link>
                    <Link to="/supplies" className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Packing & Office Supplies</Typography>
                        <Typography className={classes.servicesSubtitle}>Boxes, Bubble Wrap, Packing Peanuts, Office Supplies</Typography>
                        <img className={classes.servicesImage} src={SuppliesImage} />
                    </Link>

                </div>

            </section>

            <span className={classes.scrollToLocation} id="sectionTwo"></span>

            <section class="servicesSectionWrapper">
                <Typography className={classes.aboutTitleHeader}>Gifts</Typography>
                <p class="giftDetailText">Explore our store's delightful Beanie Babies, stuffed animals, and puzzles! Find cuddly companions,
                    soft plush toys, and brain-teasing puzzles for all ages. Let your imagination soar with us today!</p>
                <div class="giftDetailWrapper">
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={GiftBeanieOne} />
                    </div>
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={GiftBeanieTwo} />
                    </div>
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={PuzzlesPhoto} />
                    </div>
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={GiftBeanieThree} />
                    </div>
                </div>
            </section>

            <span className={classes.scrollToLocation} id="about"></span>


            <section class="servicesSectionWrapper">
                <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                <p class="giftDetailText">Superior Solutions is an independent family owned and operated pack and ship establishment in Webster, New York. </p>
                <p class="giftDetailText">With over 24 years of experience in the packaging and shipping industry, the owner, Cynthia Wachter opened Superior Solutions to provide customers with superior packing and shipping services in a personal and professional manner.</p>
                <p class="giftDetailText">Although a Federal Express Authorized Ship Agent, unlike the name brand stores, Superior Solutions utilizes all major shippers including FedEx, UPS, DHL, and USPS to provide customers with multiple options and the best possible pricing to meet their needs.</p>
                <div class="bbbWrapper">
                <a target="_blank" title="Superior Solutions BBB Business Review" href="http://www.bbb.org/upstate-new-york/business-reviews/mailing-services/superior-solutions-in-webster-ny-172807213/#bbbonlineclick">
                    <img style={{margin: "auto"}} src="http://seal-upstateny.bbb.org/seals/blue-seal-200-130-superior-solutions-172807213.png" alt="Superior Solutions BBB Business Review"/></a>
                </div>
            </section>


            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section class="py-5 section-bubble3">
                <div className={classes.container}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>Contact Us</Typography>
                            <div className={classes.phoneEmailWrapper}>
                                <a href="tel:585-872-2170" className={classes.contactPhone}>
                                    <Button className={classes.contactButton}>
                                        <PhoneIcon className={classes.phoneIcon} />
                                        (585) 872-2170
                                    </Button>
                                </a>
                                <a className="bottomHeaderEmail" href='mailto: supsol@aol.com'>Email Us</a>

                            </div>
                            <div>
                                <p style={{ textAlign: "center", marginTop: "20px" }}>1170 Ridge Road Webster,NY 14580</p>
                                <div class="mapWrapper">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11631.718688287952!2d-77.4425525!3d43.2109644!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6cee19cf0c91b%3A0x9281849d23c57d2c!2sSuperior%20Solutions!5e0!3m2!1sen!2sus!4v1709057938288!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div class="hoursWrapper">
                                <p>Hours</p>
                                <div class="hoursDayTime">
                                    <p>Monday - Friday</p>
                                    <p class="hoursTime">9:00 AM - 5:30 PM</p>
                                </div>
                                <div class="hoursDayTime">
                                    <p>Saturday</p>
                                    <p class="hoursTime">10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span className={classes.scrollToContact} id="contactForm"></span>
            <section class="py-5 section-bubble4">
                <div className={classes.container}>
                    <div>

                        <div className={classes.reviewsWrapper}>
                            <a className={classes.reviewLink}
                                href=""
                                target="_blank"
                            >
                                <Button
                                    className={classes.reviewButton}
                                >
                                    <div className={classes.reviewStarWrapper}>
                                        <Typography className={classes.reviewHeader}>Leave us a review!</Typography>
                                        <img className={classes.socialFooterMargin} src={GoogleIcon} />
                                        <FiveStar />
                                    </div>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
