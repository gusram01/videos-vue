import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as fasHeart,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin, faTwitter, farHeart, fasHeart, faChevronLeft)

export default library
