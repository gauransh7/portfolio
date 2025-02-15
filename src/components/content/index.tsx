import React from 'react'

import ContentBox from '../content-box'
import Skills from '../skills'
import SocialLinks from '../social-links'
import Button from '../button'
import Footer from '../footer'
import {
  EXPERIENCE_1,
  EXPERIENCE_2,
  EXPERIENCE_3,
  EMAIL,
  TECHNICAL_SKILLS_1,
  TECHNICAL_SKILLS_2,
  NOT_TECHNICAL_SKILLS_1,
  NOT_TECHNICAL_SKILLS_2,
  PROJECT_REQUEST,
  TYPE,
} from '../../consts'

import resume from '../../assets/resume.pdf'
import styles from './index.sass'

class Content extends React.PureComponent {
  render(): JSX.Element {
    return (
      <>
        <div className={styles.experience}>
          <ContentBox header="experience" content={EXPERIENCE_1} />
          <ContentBox content={EXPERIENCE_2} />
          <ContentBox content={EXPERIENCE_3} />
        </div>
        <div className={styles.techSkills}>
          <ContentBox header="technical skills" content={TECHNICAL_SKILLS_1} />
          <Skills />
          <ContentBox content={TECHNICAL_SKILLS_2} />
        </div>
        <div className={styles.notTechSkills}>
          <ContentBox
            header="not so technical skills"
            content={NOT_TECHNICAL_SKILLS_1}
          />
          <ContentBox content={NOT_TECHNICAL_SKILLS_2} />
          <SocialLinks />
        </div>
        <div className={styles.projectRequest}>
          <ContentBox
            header="got a project for me?"
            content={PROJECT_REQUEST}
          />
          <div className={styles.buttonContainer}>
            <Button link={`mailto:${EMAIL}`} type={TYPE.MAIN} text="email me" />
            <Button link={resume} type={TYPE.SIDE} text="view résumé" newTab />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Content
