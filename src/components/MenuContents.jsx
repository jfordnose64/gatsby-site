import React from "react"
import { Link } from "gatsby"

import "../components/additional.css"

const MenuContents = () => {
  return (
    <section class="eggs">
      <article>
        <div class="menu-item">
          <h3 class="egg-o">Eggs & Omelettes</h3>
        </div>
        <div class="menu-item">
          <h3 class="benedicts">Benedicts</h3>
        </div>
        <div class="menu-item">
          <h3 class="waffles">Belgium Waffles</h3>
        </div>
        <div class="menu-item">
          <h3 class="quiche">Quiche</h3>
        </div>
        <div class="menu-item">
          <h3 class="frittatas">Frittatas</h3>
        </div>
      </article>
      <article>
        <div class="menu-item">
          <h3 class="crepes">Crepes</h3>
        </div>
        <div class="menu-item">
          <h3 class="ecetera">Etcetera</h3>
        </div>
        <div class="menu-item">
          <h3 class="kids">Tad Pole Menu (Kids)</h3>
        </div>
        <div class="menu-item">
          <h3 class="extras">Extras</h3>
        </div>
        {/* <div class="menu-item">
          <Link
            class="drinks"
            to="/"
            style={{ color: "black", textDecoration: "none" }}
          >
            Drinks
          </Link>
        </div> */}
      </article>
    </section>
  )
}

export default MenuContents
