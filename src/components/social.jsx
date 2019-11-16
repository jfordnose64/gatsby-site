import React from "react"
import { Link } from "gatsby"
import "../components/additional.css"

const social = () => {
  return (
    <div>
      <div class="locations">
        <h1 style={{ color: "seagreen", textAlign: "center" }}>Locations</h1>
        <section class="locationCon">
          <section style={{ padding: "1rem" }}>
            <h3>St. Pete Beach</h3>
            <p>Phone: +1 (727) 363-7205</p>
            <p>Address: 7390 Gulf Blvd, St. Pete Beach, FL </p>
          </section>
          <section style={{ padding: "1rem" }}>
            <h3>Redington Beach</h3>
            <p>Phone: + 1 (727) 392-4117</p>
            <p>Address: 16909 Gulf Blvd, North Redington Beach, FL </p>
          </section>
        </section>
        <section>
          <h3 class="hours">Hours</h3>
          <p>Monday - Saturday: 7:00 AM - 2:00 PM </p>
          <p>Sunday: 8:00AM - 2:00PM</p>
          <h4 class="special">Special hours</h4>
          <p>Christmas: Closed</p>
          <p>Thanksgiving: Closed</p>
        </section>
      </div>
    </div>
  )
}

export default social
