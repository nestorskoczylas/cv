export type Resume = {
  title: string
  items: ResumeItems[]
}

export type ResumeItems = {
  id?: string
  title?: string
  organization?: string
  period?: string
  location?: string
  skillTitle?: string
  skills?: string[]
  achievements?: string[]
  links?: { url: string; label: string }[]
}
