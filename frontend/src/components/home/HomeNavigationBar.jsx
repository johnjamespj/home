import React from "react"

import styled from "styled-components"
import { breakpoint } from "../responsive"

export const NavStyle = styled.nav`
    align-self: center;
    ${breakpoint('sm')`
        align-self: stretch;
    `}

  & ul {
    list-style-type: none;
    padding: 20px 0px;
  
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  
    text-transform: capitalize;
  }

  & ul li {
    cursor: pointer;
  }
  
  & a {
    border-bottom: dotted 2px var(--color-primary);
    text-decoration: none;
    z-index: 1;
    color: var(--color-primary);
    transition: border-bottom-width 0s !important;
  }
  
  & a:hover {
    color: var(--color-bg);
    background-color: var(--color-primary);
    border-bottom-width: 0px;
    background-image: var(--bg-image);
  }

  & > ul:not(#header-nav) > li > a.selected {
    border-bottom-width: 0px;
    text-decoration: line-through;
    text-decoration-color: var(--color-primary);
  }

  & a:active {
    color: var(--color-bg);
    background-color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }
`

export function HomeNavigationBar({ children }) {
    return (
        <NavStyle>
            <ul id="header-nav">
                {children}
            </ul>
        </NavStyle>
    )
}
