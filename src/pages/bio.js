import * as React from "react"

import { intro, careerPath, careerIntrests, personalIntrests } from '../services/bioService'

import TextMessage from '../components/TextMessage/TextMessage'

import '../assets/style/global.scss'

const BioPage = () => (
  <div>
   <TextMessage
      text={intro.titleFa}
    />
    <TextMessage 
      isUserMessage
      text={intro.descriptionFa}
    />
    <TextMessage
      text={careerPath.titleFa}
    />
    <TextMessage 
      isUserMessage
      text={careerPath.descriptionFa}
    />
    <TextMessage
      text={careerIntrests.titleFa}
    />
    <TextMessage 
      isUserMessage
      text={careerIntrests.descriptionFa}
    />
    <TextMessage
      text={personalIntrests.titleFa}
    />
    <TextMessage 
      isUserMessage
      text={personalIntrests.descriptionFa}
    />
  </div>
)

export default BioPage

export const Head = () => <title>Bio Page</title>