import styled from 'styled-components';

// const faded = (val) => {
//   if (val === true)
//     return (`
//   // background-color: white;
//   // background-image: linear-gradient(to right, white 0%,white 100%),url("${back}");
//   background-blend-mode: color;`)
//   else
//     return (`
//   background-image: url("${back}");
//   `)
// }

const color = (val) => {
  if (val)
    return (`
      ${val}
    `)
  else
    return (`
  grey
    `)
}

const icon = (val) => {
  if (val === true)
    return (`
    .78571429em .5em .78571429em .78571429em;

    `)
  else
    return (`
    .78571429em 1.5em .78571429em;
    `)
}

const smollicon = (val) => {
  if (val === true)
    return (`
    .15em .05em .25em .25em;

    `)
  else
    return (`
    .5em .75em .5em;
    `)
}

const tinyicon = (val) => {
  if (val === true) {
    return (`
    .15em .05em .25em .25em;

    `)
  }
  else {
    return (`
    .15em .05em .25em .25em;
    `)
  }
}

const float = (val) => {
  if (val === "right")
    return (`
    float: right;
    `)
  else
    return (`
    `)
}

const size = (bigness, widths) => {
  if (bigness === "small")
    return (`
    font-size: 1em;
    padding: ${smollicon(widths)};
    `)
  
  else if (bigness === "tiny") {
    return (`
    font-size: .75em;
    padding: ${tinyicon(widths)};
    `)
  }

  else {
    return (`
      padding: ${icon(widths)};
      font-size: 1.25em;
  `)
  }
}

export const Beauton = styled.a`

  ${props => size(props.size, props.icon)}


  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  border-radius: 3px;
  vertical-align: baseline;
  background: ${props => color(props.color)};
  color: ${props => color(props.text)};
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0 .25em 0 0;
  ${props => float(props.float)}
  text-transform: none;
  text-shadow: none;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  box-shadow: 
              0 0px 2px 1px ${props => color(props.shadow)},
              inset 0 20px 10px -20px ${props => color(props.shadow)},
              inset 20px 0 10px -20px ${props => color(props.shadow)},
              inset -20px 0 10px -20px ${props => color(props.shadow)},
              inset 0 -20px 10px -20px ${props => color(props.shadow)};
  ;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity .1s ease,background-color .1s ease,color .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
  -webkit-transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;

  :hover {
    background: ${props => color(props.hover)};
    color: ${props => color(props.text)};
    }

  `
  // ${props => faded(props.faded)};