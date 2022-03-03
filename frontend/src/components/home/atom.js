import styled from "styled-components"
import { breakpoint } from "../responsive"

const headerHeight = 100;

export const Header = styled.header`
    user-select: none;
    z-index: 10;
    height: calc(100vh);

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    position: relative

    align-items: center;
    ${breakpoint('sm')`
        align-items: flex-start;
        padding: 0px 40px;
    `}

    background-color: var(--color-bg);

    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;

    ${({ header }) => header ? `
        & h1#iam-intro, .iam-subtitle > div > div, #branding, h1#name-heading, ul#header-nav > li > a {
            transform: translateY(-50px);
            opacity: 0;
            transition: all 0.5s;
        }

        & ul#header-nav > li > a {
            border-bottom-width: 0px;
            transition: all 0.5s;
        }

        height: ${headerHeight}px;
        border-width: 0px;
        transition: all 0.6s;
    ` : `
        & h1#iam-intro, .iam-subtitle, #branding, h1#name-heading, ul#header-nav > li > a {
            transform: translateY(0px);
            opacity: 1;
            transition: all 0.5s;
        }

        & ul#header-nav > li > a {
            transition: all 0.5s;
        }

        transition: all 0.2s;
    `}

    ${({invert}) => invert && `
        --color-primary: var(--color-primary-inverted);
        --color-bg: var(--color-bg-inverted);
    `}

    #branding {
        position: relative;
        top: -20px;
        width: 50px
    }

    #branding > svg {
        width: 50px;
    }

    & h1.iam-intro {
        font-size: 10vw;
        ${breakpoint('sm')`
            font-size: 65px;
        `}
    }

    & h1.iam-header {
        color: var(--color-primary);
        text-transform: uppercase;
        margin: 0px;

        letter-spacing: 5px;
        font-size: 10vw;
        ${breakpoint('sm')`
            font-size: 65px;
        `}
        transition: transform 0.5s, font-size 0.5s;
    }

    & h1#name-heading {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      background-color: #4158D0;
      background-image: var(--bg-image);

      font-weight: 300;
    }

    & .iam-subtitle {
        font-size: 20px;
        font-weight: 100;
        color: var(--color-primary);
        font-family: "Rajdhani", sans-serif;
        justify-self: start;
      
        padding: 20px 0px 5px 0px;

        font-size: 4vw;
        ${breakpoint('sm')`
            font-size: 20px;
        `}
    }

    & h2 {
        margin: 0px;
    }
`

export const HeaderSpacer = styled.div`
    ${({invert}) => !invert ? `
        background-color: var(--xiketic);
    `: `
        background-color: var(--dirty-white);
    `}
    transition: background-color 0.6s, color 0.6s;
    padding-top: ${headerHeight + 30}px 
    min-height: calc(100vh - ${headerHeight}px);
    
    & > div {
        max-width: 1200px;
        margin: 0px auto;
        min-height: calc(100vh - ${headerHeight}px - ${headerHeight + 30}px);

        padding-left: 10px;
        padding-right: 10px;
        ${breakpoint('sm')`
            padding-left: 40px;
            padding-right: 40px;
        `}
    }
  `
