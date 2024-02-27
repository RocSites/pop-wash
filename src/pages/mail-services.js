import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import MailServicesPhoto from "../images/mail-services.jpg"


const MailServicesPage = () => (
    <Layout>
        <SEO title="Mail Services" />
        <h1 class="menuHeader">Mail Services</h1>
        <img class="mailReceivingPhoto" src={MailServicesPhoto} /> 
        <div class="pageDetailsTextWrapper">
            <p class="pageDetailText">Full Service, Postal Processing, and Postage Discounts.</p>
            <p class="pageDetailText">Buy stamps, drop off mail, have your mail metered an get just about every postal service you need without long lines.</p>

        </div>
    </Layout>
)

export default MailServicesPage
