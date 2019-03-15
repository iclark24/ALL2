import styled from 'styled-components';
import back from '../Images/boats.jpg'

const faded = (val) => {
  if (val === true)
  return (`
  // background-color: white;
  background-image: linear-gradient(to right, white 0%,white 100%),url("${back}");
  background-blend-mode: color;`)
  else
  return (`
  background-image: url("${back}");
  `)
  }

export const World = styled.div `
  height: 95.3vh;
  top: 0px;
  ${props => faded(props.faded)};
  background-size: 100 100;
`