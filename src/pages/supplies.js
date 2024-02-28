import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import SuppliesTwoPhoto from "../images/ss_supplies.jpeg"


const SuppliesPage = () => (
    <Layout>
        <SEO title="Packing & Office Supplies" />
        <h1 class="menuHeader">Packing & Office Supplies</h1>
        <img class="mailReceivingPhoto" src={SuppliesTwoPhoto} /> 
        <div class="pageDetailsTextWrapper">
            <p class="pageDetailText">Do-it-yourselfers can choose from a full range of professional packing materials, including over 50 different size boxes, bubble wrap, packing peanuts, tubes, and tape.</p>
            <p class="pageDetailText">Purchase enough for one package or in bulk quantities for that big move.</p>
            <p class="pageDetailText">Select from a variety of envelopes, pens, tape, report covers, etc., to meet your daily needs.</p>

        </div>
    </Layout>
)

export default SuppliesPage