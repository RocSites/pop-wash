import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import dishesOne from "../images/micheile-henderson-dishes-green-pink.jpg"

const PassPortPage = () => (
  <Layout>
    <SEO title="Passport Photos" />
    <h1 class="menuHeader">Product 1</h1>
    <img class="passportPhoto" src={dishesOne} />
    <div class="pageDetailsTextWrapper">
      <p class="pageDetailText">Product Description
      </p>

    </div>
  </Layout>
)

export default PassPortPage
