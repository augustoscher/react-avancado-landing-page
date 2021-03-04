import React from 'react'
import { GetStaticProps } from 'next'

import client from 'graphql/client'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from '../types/api'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  pricingBox,
  sectionAboutUs
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject about={sectionAboutProject} />
    <SectionTech tech={sectionTech} />
    <SectionConcepts concepts={sectionConcepts} />
    <SectionModules modules={sectionModules} />
    <SectionAgenda agenda={sectionAgenda} />
    <PricingBox pricingBox={pricingBox} />
    <SectionAboutUs about={sectionAboutUs} />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  // log aparece no console do server e não no browser, pois esse método
  // roda no lado do server
  // console.log(landingPage.sectionTech)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
