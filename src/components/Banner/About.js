import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Title title="About Me" />
      <StaticImage
        src="../../assets/banner-about.jpeg"
        layout="fixed"
        width={100}
        height={100}
        className="img"
      />
      <p>
        Over the weekend, I wanted to experiment with the blog. The features of
        vuepress have been explored. The soul asks for novelty. A gatsby came
        under my arm. Well, well, let's try to make a multilingual site and play
        with graphql, which comes as the default option for data transfer.
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
