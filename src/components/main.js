import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import mainDishes from "../images/vable-dishes-bright-colors.jpg"
import dishesGreen from "../images/micheile-henderson-dishes-green-pink.jpg"
import dishesFour from "../images/brooke-lark-dishes-4.jpg"

import PhoneIcon from '@material-ui/icons/Phone'
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import GoogleIcon from "../images/google_icon.png"
import headShot from "../images/michele_headshot.png"
import dishesOne from "../images/brooke-lark-dishes-4.jpg"
import dishesTwo from "../images/vable-dishes-bright-colors.jpg"
import dishesThree from "../images/micheile-henderson-dishes-green-pink.jpg"
import dishesFive from "../images/micheile-henderson-dishes-muted.jpg"
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
        fontFamily: "Poppins, sans-serif !important",
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
            fontFamily: "Poppins, sans-serif !important",
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
        fontFamily: "Poppins, sans-serif !important",
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
        fontFamily: "Poppins, sans-serif !important",
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
        marginBottom: "0px",
        // filter: "blur(1px)"
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

            <img src={dishesFour} className={classes.landingImage} />

            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionOne"></span>
            </div>

            <section class="servicesSectionWrapper">
                <h1 class="sectionOneHeader">product slogan/catchphrase</h1>
                <h3 class="sectionOneSubText">Some smaller text that describes the product</h3>

            </section>

            <span className={classes.scrollToLocation} id="sectionTwo"></span>

            <section class="servicesSectionWrapper">
                <Typography className={classes.aboutTitleHeader}>Pop Wash Silverware</Typography>
                <p class="giftDetailText textCenter">Pop Wash Product Description</p>
                <div class="giftDetailWrapper">
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={dishesOne} />
                    </div>
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={dishesTwo} />
                    </div>
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={dishesThree} />
                    </div>
                    <div class="giftImageWrapper">
                        <img class="giftImage" src={dishesFive} />
                    </div>
                </div>
            </section>

            <span className={classes.scrollToLocation} id="about"></span>


            <section class="servicesSectionWrapper">
                <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                <div class="aboutImageTextWrapper">
                    <div style={{marginLeft: "auto", marginRight: "auto"}}>
                        <img src={headShot} id="headshot" />
                        <p>Michele Prior, CEO</p>
                    </div>

                    <div class="aboutTextWrapper">
                        <p class="giftDetailText">As a busy working mom and Oncology nurse, I often dreaded emptying the dishwasher and most of all the silverware.  I knew there had to be an easier and quicker way to accomplish this household task!. </p>
                        <p class="giftDetailText">I searched the market and saw nothing out there that could help me. As a busy person, I just knew that others were experiencing the same feeling I had when emptying the dishwasher and I was <b>determined</b> to come up with a solution to this problem.</p>
                        <p class="giftDetailText">After I had the idea of Pop wash, I started doing research on measurements and created my drawings. Then I bought cardboard, an X-ACTo knife and went to town creating my first prototype in my living room.  This is where Pop Wash Silverware was born in Niagara Falls NY!</p>
                        <p class="giftDetailText">I believe in dreams and dreams can come true with God first and knowing that he will bring all the right people in your life if it is his plan!</p>
                        <p class="giftDetailText">I hope to bring this product to the market and help people save time with household chores. I’m excited to bring this product and other products to the market for you all!</p>
                    </div>


                </div>


            </section>


            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section class="py-5 section-bubble3">
                <div className={classes.container}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>Contact Us</Typography>
                            <div className={classes.phoneEmailWrapper}>
                                <a href="tel:716-541-8034" className={classes.contactPhone}>
                                    <Button className={classes.contactButton}>
                                        <PhoneIcon className={classes.phoneIcon} />
                                        (716) 541-8034
                                    </Button>
                                </a>
                                <a className="bottomHeaderEmail" href='mailto: micheleprior00@gmail.com'>Email Us</a>

                            </div>
                 
                        </div>
                    </div>
                </div>
            </section>

            <span className={classes.scrollToContact} id="contactForm"></span>
  

        </div>
    )
}

export default Main
