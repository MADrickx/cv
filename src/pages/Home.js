import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Educations from '../components/Educations'
import Works from '../components/Works'

const Container = styled.div`
  background-color: #111;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  overflow: hidden;
`

const Home = () => {
  return (
    <Container>
      <Header />
      <Landing />
      <Works />
      <Educations />
    </Container>
  )
}

export default Home
