import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import UpsLogo from "../images/ups-icon.svg"
import UspsLogo from "../images/usps_logo.svg"
import FedexLogo from "../images/fedex-express-6.svg"
import DhlLogo from "../images/dhl-1.svg"
import "../components/main.css"


const PackingShippingPage = () => (
  <Layout>
    <SEO title="Packing & Shipping" />
    <h1 class="menuHeader">Packing & Shipping Detail</h1>

    <div class="pageDetailsTextWrapper">
      <p class="pageDetailText">The most important part of shipping is the packaging. If a box is not packaged properly, it might not arrive in one piece. We're experts
        in custom packing and use professional, regulation packaging materials.
      </p>

      <p class="pageDetailText">We've packed and shipped everything form pictures and computer parts to skis, china, and even grandma's cookies. Your fragile items
        will be packed safely and securely to assure your "peace of mind".
      </p>
    </div>

    <div class="packingShippingWrapper">
      <img class="packingShippingImageLogo" src={UpsLogo} />
      <img class="packingShippingImageLogo" src={FedexLogo} />
      <img class="packingShippingImageLogo" src={UspsLogo} />
      <img class="packingShippingImageLogo" src={DhlLogo} />
    </div>
    <div class="pageDetailsTextWrapper">
      <p class="pageDetailText">We ship with the most reliable carriers including UPS, Fedex, United States Postal Service, and DHL.
      </p>
    </div>
  </Layout>
)

export default PackingShippingPage
