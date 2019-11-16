import React from "react"
import { Link } from "gatsby"
import PersonOne from "../images/6.jpg"
import PersonTwo from "../images/1.jpg"
import PersonThree from "../images/2.jpg"

const aboutUs = () => {
  return (
    <div class="ownerFlex">
      <section class="person">
        <h1>Lorem Ipsum</h1>
        <p>Owner</p>
        <img style={{ width: "25rem", height: "auto" }} src={PersonOne} />
      </section>
      <section class="person">
        <h1>Lorem Ipsum</h1>
        <p>Manager</p>
        <img style={{ width: "25rem", height: "auto" }} src={PersonTwo} />
      </section>
      <section class="person">
        <h1>Lorem Ipsum</h1>
        <p>Manager</p>
        <img style={{ width: "25rem", height: "auto" }} src={PersonThree} />
      </section>
    </div>
  )
}

export default aboutUs
