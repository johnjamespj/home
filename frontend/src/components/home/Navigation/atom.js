import styled, { keyframes } from "styled-components"
import { breakpoint } from "../../responsive"

const entryAnimation = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

export const NavBar = styled.div`
display: flex;
align-content: center;
gap: 60px;

max-width: 1200px;
margin: 0px auto;

${breakpoint('sm')`
  width: 100%;
`}

& div#brand-icon-nav-bar {
    animation: ${entryAnimation} 0.2s;
    cursor: pointer;
    align-self: center;
}

// For the svg icon
& line, ellipse {
  transition: stroke 0.8s;
}

& div.nav-menu {
  align-self: stretch;
  width: 100%;

  display: none;
  ${breakpoint('sm')`
    display: block;
  `}
}

& div.nav-menu ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: min(18px, 1.8vw);

  display: flex;
  justify-content: space-around;
  height: 100%;
}

& div.nav-menu ul li {
  cursor: pointer;
  display: grid;
  place-content: stretch;
}

& div.nav-menu ul li a {
  display: grid;
  place-content: center;

  color: var(--color-primary);
}

& .selected {
  text-decoration: line-through;
  text-decoration-color: var(--color-primary);
}

& ul#navbar-list {
  display: none;
  ${breakpoint('sm')`
      display: flex;
  `}
}
`

export const NavigationMobileStyle = styled.div`
position: absolute;
top: -10px;
right: 20px;
`

export const NavigationOverlayStyle = styled.div`
position: fixed;
top: 0px;
left: 0px;
width: 100vw;
background-color: var(--color-bg);
z-index: -10;

display: flex;

justify-content: center;
${breakpoint('sm')`
  justify-content: flex-start;
  flex-wrap: reverse;
`}


& ul {
  cursor: pointer;
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  text-transform: uppercase;
  font-size: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  align-items: center;
  ${breakpoint('sm')`
    align-items: start;
    padding-left: 40px;
  `}
}

overflow: hidden;
height: 0vh;
transition: height 0.8s, background-color 0.8s;

${({ open, count }) => open ? `
  height: 100vh;

  ${new Array(count).fill('').map((x, i) => `
    & ul > li:nth-of-type(${i + 1}) {
      transform: translateY(0px) !important;
      opacity: 1 !important;
      transition-delay: ${0.55 + 0.1 * (i + 1)}s !important;
    }
  `).join('\n')}
` : `
    transition-delay: 0.9s;

    ${new Array(count).fill('').map((x, i) => `
      & ul > li:nth-of-type(${count - i}) {
        transform: translateY(40px) !important;
        opacity: 0 !important;
        transition-delay: ${0.1 + 0.1 * (i + 1)}s !important;
      }
    `).join('\n')}
`}

& ul > li {
  transition: transform 0.8s, opacity 0.8s;
}

& ul > li > a {
  font-size: 30px;
  color: var(--color-primary);
  text-decoration: none;
  z-index: 1;
  transition: letter-spacing 0.5s;
  transition-function: ease-out;
}

& ul > li > a.selected {
  border-bottom-width: 0px;
  text-decoration: line-through;
  text-decoration-color: var(--color-primary);
}

& ul > li > a:hover {
  color: var(--color-primary);
  letter-spacing: 5px;
}

& ul > li >  a:active {
  color: var(--color-primary);
}
`
