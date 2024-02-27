import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import MailBoxes from "../images/ss_mailboxes_1.jpeg"
import FaxBoxes from "../images/ss_packing_1.jpeg"



const MailReceivingPage = () => (
    <Layout>
        <SEO title="Mail Receiving" />
        <h1 class="menuHeader">Mail Receiving & Fax</h1>
        <img class="mailReceivingPhoto" src={MailBoxes} />

        <div class="pageDetailsTextWrapper">
            <p class="pageDetailText">Enjoy a prestigious address and get safe, secure, private mail box services with available 24 hour access.
            </p>

            <p class="pageDetailText">We'll accept your important packages from Federal Express and other carriers, and
                call you when they arrive if you wish.</p>

            <p class="pageDetailText">"Call-In Mail Check" eliminates unnecessary trips.</p>
            <p class="pageDetailText">"Earlier Mail" means your mail is usually in your box by 10:30am.</p>
            <p class="pageDetailText">Mail forwarding and indefinite mail holding are also available.</p>
        </div>
        <div  class="pageDetailsTextWrapper">
            <img class="mailReceivingPhoto" src={FaxBoxes} />
            <br/>
            <p class="pageDetailText">Send copies, documents, estimates, etc. across town, across the country or around the world instantly.</p>
            <p class="pageDetailText">Use our Fax number: <b>(585) 872-2174</b> to receive your fax messages 24 hours a day.</p>
        </div>
    </Layout>
)

export default MailReceivingPage
