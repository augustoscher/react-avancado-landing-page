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

fragment aboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      alternativeText
      url
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      icon {
        name
        url
        alternativeText
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    description
  }
}

fragment pricingBox on LandingPage {
  pricingBox {
    priceInstallment
    numberInstallmentes
    totalPrice
    benefits
    button {
      url
      label
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
    title
    authors {
      name
      role
      description
    }
  }
}

fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      text
      photo {
        url
        name
        alternativeText
      }
    }
  }
}

fragment sectionFac on LandingPage {
  sectionFac {
    title
    questions {
      question
      answer
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...aboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionModules
    ...sectionAgenda
    ...pricingBox
    ...sectionAboutUs
    ...sectionReviews
    ...sectionFac
  }
}
`
export default GET_LANDING_PAGE
