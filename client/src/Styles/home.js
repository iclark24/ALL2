import styled from "styled-components"

export const Header = styled.div `
  font-size: 2vw;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  `
  
export const Container = styled.div `
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`

export const P = styled.p `
  color: white;
  // font-size: 1vw;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.75);
  width: 70%;
  text-align: center;
  padding: 20px;
  border-radius: .5vw
`

export const Segment = styled.div `
  background: #1b1c1d;
  width: 100%;
  height: auto;
`

export const Label = styled.label `
  color: white;
`