import { Title } from '../components/SectionHero/styles'
export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
  button: {
    label: string
    url: string
  }
}

export type AboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type TechProps = {
  title: string
  techIcons: [
    {
      icon: {
        name: string
        url: string
        alternativeText: string
      }
    }
  ]
}

export type ConceptsProps = {
  title: string
  concepts: [
    {
      title: string
    }
  ]
}

export type ModulesProps = {
  title: string
  modules: [
    {
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type AgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  priceInstallment: number
  numberInstallmentes: number
  totalPrice: number
  benefits: string
  button: {
    url: string
    label: string
  }
}

export type AuthorProps = {
  name: string
  role: string
  description: string
  photo: {
    alternativeTex: string
    url: string
  }
  socialLinks: [
    {
      title: string
      url: string
    }
  ]
}

export type AboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewsProps = {
  title: string
  reviews: [
    {
      name: string
      text: string
      photo: {
        url: string
        name: string
        alternativeText: string
      }
    }
  ]
}

export type FacProps = {
  title: string
  questions: [
    {
      question: string
      answer: string
    }
  ]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
  sectionConcepts: ConceptsProps
  sectionModules: ModulesProps
  sectionAgenda: AgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: AboutUsProps
  sectionReviews: ReviewsProps
  sectionFac: FacProps
}
