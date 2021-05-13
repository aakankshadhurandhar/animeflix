import React from 'react'

import Corosal from '../Corosal/Corosal';
import styled from "styled-components";

import TopAiringanime from '../Topanime/TopAiringanime'
import { Link } from 'react-router-dom';
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 5px;
  margin-left:2rem;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: black;
  }
  `
function Home() {
    

    return (
        <div style={{color:"white"}}>
            <Corosal />
            <Link to="/upcoming">
            <Button >Upcoming Animes</Button>
            </Link>
           
        <h2 style={{color:"white",fontSize:"3rem",margin:"3rem"}}>Top Animes</h2>
        <TopAiringanime />
        </div>
    )
}

export default Home
