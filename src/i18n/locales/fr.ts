import constants from './fr/constants'
import BioCard from './fr/components/aboutMe/BioCard'
import TitledContent from './fr/components/common/TitledContent'
import Experience from './fr/pages/Experience'
import Projects from './fr/pages/Projects'
import Resume from './fr/pages/Resume'

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
