import React from "react"
import PropTypes from "prop-types"
import Layout from "./src/components/layout"

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.object.isRequired,
}

export { wrapPageElement }
