import styled from "styled-components"

export const Container = styled.div`
  width: 85%;
  max-width: 1350px;
  margin: 0 auto;
`
export const TextContainer = styled.div`
  width: 80%;
  max-width: 1350px;
  margin: 0 auto;
`

export const SectionImage = styled.div`
  background-image: ${props => `url(${props.image})`};
  filter: grayscale();
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: ${props => `${props.y}%`};
  height: 400px;
`

export const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: ${props => (props.right ? "right" : "left")};
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgb(105, 105, 105);

  &:last-of-type {
    margin-bottom: 0;
  }
`
