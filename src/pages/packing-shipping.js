import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import dishesOne from "../images/brooke-lark-dishes-4.jpg"
import dishesTwo from "../images/vable-dishes-bright-colors.jpg"
import dishesThree from "../images/micheile-henderson-dishes-green-pink.jpg"
import dishesFour from "../images/micheile-henderson-dishes-muted.jpg"
import "../components/main.css"


const PackingShippingPage = () => (
  <Layout>
    <SEO title="Pop Wash" />
    <h1 class="menuHeader">Pop Wash Silverware</h1>
    <div class="popWashDetailWrapper">
      <p class="pageDetailText">Product Summary
      </p>
      <p class="pageDetailText">Price: </p>
    </div>


    <div class="packingShippingWrapper">
      <img class="packingShippingImageLogo" src={dishesOne} />
      <img class="packingShippingImageLogo" src={dishesThree} />
      <img class="packingShippingImageLogo" src={dishesTwo} />
      <img class="packingShippingImageLogo" src={dishesFour} />
    </div>
    <div class="pageDetailsTextWrapper">


      <h2>Our Why</h2>
      <p class="pageDetailText">I wanted to gather data from people to support that emptying the silverware from the dishwasher is a pain point for most people and I needed to know if people would be interested in a product that helped to save time. I surveyed 200 people on various Facebook groups within the Western New York Community and it confirmed my assumption which was that people disliked emptying the silverware out of their dishwashers the most! This solidified that Pop wash was a great idea and I needed to move forward with this idea to help people
      </p>
    </div>


    <div class="pageDetailsTextWrapper">
      {/* <p class="pageDetailText">We ship with the most reliable carriers including UPS, Fedex, United States Postal Service, and DHL.
      </p> */}
    </div>
  </Layout>
)

export default PackingShippingPage
