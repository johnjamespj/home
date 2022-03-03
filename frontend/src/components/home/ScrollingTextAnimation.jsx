import React from "react"

import styled from "styled-components"
import { breakpoint } from "../responsive"

const ScrollingTextAnimationStyle = styled.div`
    position: relative;
    height: ${({ height }) => height}px;
    overflow: hidden;

    text-align: center;
    ${breakpoint('sm')`
        text-align: left;
    `}

    & > div {
        transform: translateY(${({ position, height }) => -(height * position)}px) !important;
        transition: transform 0.5s;
        transition-timing-function: ease-in;
    }
`

export function ScrollingTextAnimation({ texts, variant, height = 38, duration = 1000, hidden }) {
    const [position, setPosition] = React.useState(0);
    const targetRef = React.useRef();
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

    React.useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.firstChild.offsetWidth,
                height: targetRef.current.firstChild.offsetHeight
            });
        }
    }, []);

    React.useEffect(() => {
        let intervel = 0;

        if (!hidden)
            intervel = setInterval(() => {
                setPosition((current) => (current + 1) % texts.length)
            }, duration)

        return () => clearInterval(intervel)
    }, [texts, duration, hidden])

    return <ScrollingTextAnimationStyle height={dimensions.height} position={position}>
        <div ref={targetRef}>
            {texts.map(x => variant(x))}
        </div>
    </ScrollingTextAnimationStyle>
}

