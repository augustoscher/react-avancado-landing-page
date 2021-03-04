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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
  sectionConcepts: ConceptsProps
  sectionModules: ModulesProps
  sectionAgenda: AgendaProps
}
