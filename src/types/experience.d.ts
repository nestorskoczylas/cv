export type Experience = {
  id: string
  company: string
  title: string
  years: string
  period: string
  location: string
  keywords: string[]
  reference: {
    name: string
    role: string
    linkedin: string
  }
  context: string
  environments: string[]
  methodologies: string[]
  achievements: {
    general: string[]
    methodology: string[]
    interventions: string[]
  }
}
