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

export const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
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
