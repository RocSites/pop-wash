import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import PassportBackground from "../images/kelly-sikkema-passport.jpg"

const PassPortPage = () => (
  <Layout>
    <SEO title="Passport Photos" />
    <h1 class="menuHeader">Passport & ID Photos</h1>
    <img class="passportPhoto" src={PassportBackground} />
    <div class="pageDetailsTextWrapper">
      <p class="pageDetailText">Color photos are available in just minutes for a passport, visa, immigration/naturalization, employment ID, pistol/gun permits, attorney IDs ,etc.
      </p>

      <p class="pageDetailText">No appointment necessary.</p>
    </div>
  </Layout>
)

export default PassPortPage
