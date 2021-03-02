const GET_LANDING_PAGE = /*"GraphQL"*/ `
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}

fragment header on LandingPage {
  header {
    title
    description
    image {
      url
      alternativeText
    }
    button {
      label
      url
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
  }
}
`
export default GET_LANDING_PAGE
