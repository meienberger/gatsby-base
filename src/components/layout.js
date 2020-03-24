/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <footer
      style={{
        textAlign: "center",
        paddingBottom: 5,
        paddingTop: 10,
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      © {new Date().getFullYear()}
      {` `}
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "greenyellow", textDecoration: "none" }}
        href="https://www.waasabi.ch"
      >
        {`Waasabi`}
      </a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
