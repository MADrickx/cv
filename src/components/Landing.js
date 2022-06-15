import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import { bigScreen } from '../responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const LandingSection = styled.section`
  height: calc(100vh - 5vh - 2rem);
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  /* ${bigScreen({
    paddingTop: '5rem!important'
  })}; */
`
const Container = styled.div`
  padding: 0 !important;
`
const Line = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
`
const Word = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  letter-spacing: -0.105em;
`
const WordL = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  letter-spacing: -0.105em;
  margin-left: 0.5rem;
`

const Letter = styled.span`
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    color: rgb(255, 165, 0);
  }
`

const LetterL = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    color: rgb(255, 165, 0);
  }
  &:after {
    content: '\u2193';
    font-size: 3rem;
    position: absolute;
    padding-left: 0.1rem;
    bottom: -3rem;
    left: 0;
  }
`
const Hyphen = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &:hover {
    color: rgb(255, 165, 0);
  }
`
const Spacer = styled.div`
  letter-spacing: -0.25em;
`

const LongSpacer = styled.div`
  letter-spacing: -0.2em;
`

const LongestSpacer = styled.div`
  letter-spacing: -0.01em;
`

const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Item = styled.div`
  &:first-of-type {
    width: 25%;
  }
`
const About = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Info = styled.div`
  margin-bottom: 0.5rem;
  line-height: 1.2;
  flex-basis: 50%;
  &:first-of-type {
    font-weight: light;
    margin-right: 2rem;
    margin-left: 1rem;
  }
  &:nth-of-type(2) {
    font-weight: bold;
    padding-right: 1rem;
  }
`

const Landing = () => {
  const hyphenRef = useRef(null)
  const lineOneRef = useRef(null)
  const offset = 250
  const [y, setY] = useState(window.scrollY)

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (window.scrollY < 5) {
        lineOneRef.current.style.justifyContent = 'start'
        lineOneRef.current.style.marginLeft = '0px'
        hyphenRef.current.style.transform = 'scale(1, 1)'
      } else {
        lineOneRef.current.style.justifyContent = 'center'
        lineOneRef.current.style.marginLeft = '-15px'
        hyphenRef.current.style.transform = `scale(${1 + y / (offset * 2)}, 1)`
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  // trigger whatever when the triggering element appears to the screen

  //   useEffect(() => {
  //     const line = lineOneRef.current
  //     gsap.fromTo(
  //       line,
  //       {},
  //       {
  //         justifyContent: 'center',
  //         scrollTrigger: {
  //           trigger: test.current
  //         }
  //       }
  //     )
  //   }, [])

  //   useEffect(() => {
  //     const el = hyphenRef.current
  //     gsap.fromTo(
  //       el,
  //       { minWidth: 0, scaleX: 1 },
  //       {
  //         minWidth: 800,
  //         scaleX: 2,
  //         scrollTrigger: {
  //           trigger: test.current
  //         }
  //       }
  //     )
  //   }, [])

  const getMinWidth = (y) => {
    if (y < 5) {
      return y
    } else {
      return offset + y
    }
  }
  return (
    <>
      <LandingSection>
        <Container>
          <h1>
            <ReactFitText compressor={0.585}>
              <>
                <Line ref={lineOneRef}>
                  <Word>
                    <Letter>F</Letter>
                    <Letter>R</Letter>
                    <Letter>O</Letter>
                    <Letter>N</Letter>
                    <Spacer>&nbsp;</Spacer>
                    <Letter>T</Letter>
                  </Word>
                  <Hyphen
                    ref={hyphenRef}
                    style={{
                      minWidth: getMinWidth(y)
                    }}
                  >
                    —
                  </Hyphen>
                  <Word>
                    <Letter>E</Letter>
                    <Letter>N</Letter>
                    <Letter>D</Letter>
                  </Word>
                </Line>
              </>
            </ReactFitText>
            <ReactFitText compressor={0.555}>
              <Line>
                <Word>
                  <Letter>D</Letter>
                  <Letter>E</Letter>
                  <LongSpacer>&nbsp;</LongSpacer>
                  <Letter>V</Letter>
                  <LongSpacer>&nbsp;</LongSpacer>
                  <Letter>E</Letter>
                  <Letter>L</Letter>
                  <Letter>O</Letter>
                  <Letter>P</Letter>
                  <Letter>E</Letter>
                  <Letter>R</Letter>
                </Word>
              </Line>
            </ReactFitText>
          </h1>
          <InformationContainer>
            <Item>
              <ReactFitText compressor={0.4}>
                <Line>
                  <WordL>
                    <LongestSpacer>&nbsp;</LongestSpacer>
                    <LetterL>A</LetterL>
                    <LetterL>B</LetterL>
                    <LetterL>O</LetterL>
                    <LetterL>U</LetterL>
                    <LetterL>T</LetterL>
                  </WordL>
                </Line>
              </ReactFitText>
            </Item>
            <Item>
              <ReactFitText compressor={8.6}>
                <About>
                  <Info>
                    My name is Audric, I am a front-end developer based in
                    Liège, Belgium. My favorite language is JavaScript and I
                    love learning new things on a daily basis! I am currently
                    free for any web-based opportunity. I have knowledge in
                    back-end as well, such as designing REST APIs, using Symfony
                    or Node.Js to parse data, designing relationnal database,
                    etc.
                  </Info>
                  <Info>
                    I am currently looking for a job, as a front-end developer,
                    if you are interested in meeting me, I am available and
                    ready to discuss any topic with you. In the meantime, I
                    suggest you keep scrolling down, and learn some more about
                    me!
                  </Info>
                </About>
              </ReactFitText>
            </Item>
          </InformationContainer>
        </Container>
      </LandingSection>
    </>
  )
}

export default Landing
