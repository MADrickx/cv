import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { educationsList } from '../data/edu'
import Education from './Education'

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  margin: 5rem 0;
`

const EducationContainer = styled.div`
  width: calc(100%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 10rem;
  text-transform: uppercase;
  margin: 3rem 0;
  font-weight: 700;
  letter-spacing: -1rem;

  &:before {
    content: ' ';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #aaa;
  }
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #aaa;
  }
`

const LongSpacer = styled.span`
  letter-spacing: -0.225em;
`

const Educations = () => {
  const titleRef = useRef(null)
  const [y, setY] = useState(window.scrollY)
  const offset = 650
  const handleTitleScroll = useCallback(
    (e) => {
      const window = e.currentTarget
      console.log(window.scrollY)
      if (window.scrollY >= 650) {
        titleRef.current.style.transform = `translate(0px)`
      } else {
        titleRef.current.style.transform = `translate(${offset - y}px)`
      }

      if (y > window.scrollY) {
        console.log('up')
      } else if (y < window.scrollY) {
        console.log('down')
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleTitleScroll)

    return () => {
      window.removeEventListener('scroll', handleTitleScroll)
    }
  }, [handleTitleScroll])

  return (
    <>
      <Container>
        <Title ref={titleRef}>
          Educat<LongSpacer>&nbsp;</LongSpacer>i<LongSpacer>&nbsp;</LongSpacer>o
          <LongSpacer>&nbsp;</LongSpacer>n
        </Title>
        <EducationContainer>
          {educationsList
            .sort((a, b) => b.id - a.id)
            .map((edu) => (
              <Education key={edu.id} edu={edu} />
            ))}
        </EducationContainer>
      </Container>
    </>
  )
}

export default Educations
