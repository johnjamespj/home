import styled from "styled-components"

export const RevealingTextAnimation = styled.div`
    & .reveal-text, .reveal-text::after {
        ${({ animationDelay = 1, iterations = 1, duration = 800, isSafari = false }) => `
            animation-delay: ${animationDelay}ms;
            animation-iteration-count: ${iterations};
            ${!isSafari ? `animation-duration: ${duration}ms;` : 'animation-duration: 0ms;'}
        `}
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }

    & .reveal-text {
        ${({ animationDelay = 0, iterations = 1, duration = 800, isSafari = false }) => `
            animation-delay: ${animationDelay}s;
            animation-iteration-count: ${iterations};
            ${!isSafari ? `animation-duration: ${duration}ms;` : 'animation-duration: 0ms;'}
        `}
        position: relative;
        -webkit-animation-name: clip-text;
        animation-name: clip-text;
        color: var(--color-primary);
        white-space: nowrap;
    }

    & .reveal-text::after {
        content: " ";
        display: block;
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background-color: var(--color-primary);
        pointer-events: none;
        -webkit-animation-name: text-revealer;
        animation-name: text-revealer;
      }
`