import constants from './en/constants'
import BioCard from './en/components/aboutMe/BioCard'
import TitledContent from './en/components/common/TitledContent'
import Experience from './en/pages/Experience'
import Projects from './en/pages/Projects'
import Resume from './en/pages/Resume'

export default {
  constants,
  bioCard: BioCard,
  titledContent: TitledContent,
  pages: {
    experience: Experience,
    projects: Projects,
    resume: Resume,
  },
}
