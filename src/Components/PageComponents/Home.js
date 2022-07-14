import { Container } from '@mui/material'
import React from 'react'
import Content from '../Maintext/Content';
import Circle from '../banner/Circle';
import About from '../About/About';
import Carats from '../Cartcomponents/Carats';
import Courses from '../Courses/Courses';

function Home() {
  return (
    <Container maxWidth="xl">
        <Content/>
        <Circle/>
        <About/>
        <Carats/>
        <Courses/>
    </Container>
  )
}

export default Home