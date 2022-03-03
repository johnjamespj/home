import styled from "styled-components"
import { breakpoint } from "../responsive"
import { DelayedSignal, STATES } from "../home/TransitionsSignal"
import React from "react"

const ArrowStyle = styled.div`
    --arrow-height: 50px;

    transform: translateX(calc(var(--arrow-height) * 0.5));

    & div {
        width: calc(var(--arrow-height) * 0.5);
        height: 4px;
        background-color: black;
    }

    & div:nth-of-type(1) {
        width: var(--arrow-height);
        transform: rotate(45deg) translateX(-50%) translateY(4px);
    }

    & div:nth-of-type(3) {
        transform-origin: 100% 0;
        transform: rotate(90deg);
    }
`

function Arrow() {
    return (
        <ArrowStyle>
            <div />
            <div />
            <div />
        </ArrowStyle>
    )
}

const StyledExpandableTiles = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;

    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid black;

    flex-direction: column;
    ${breakpoint('sm')`
        flex-direction: row;
    `}

    position: relative;

    & div.more-info {
        position: absolute;
        padding: 0px 10px;

        top: 70px;
        bottom: 0px;

        & div.content {
            background-color: red;
        }
    }

    & h2 {
        flex: 2;
        flex-grow: 2;
        padding-left: 10px;
    }

    & li.start-animation h3 {
        transform: translateY(50px);
        opacity: 0;
    }

    & li.end-animation h3 {
        transform: translateY(0px);
        opacity: 1;
    }

    & ul {
        z-index: 10;
        list-style: none;
        margin: 0px;
        padding: 0px;

        display: flex;
        flex-wrap: wrap;
        gap: 4px;

        flex: 5;

        & li {
            flex-grow: 2;
            justify-self: center;
            padding: 10px;
            padding-right: 80px;
    
            text-transform: uppercase;
            position: relative;
    
            cursor: pointer;
            user-select: none;
            border: 2px dotted;
            border-color: transparent;
            transition: border-color 0.2s;

            & h3 {
                transition: transform 0.5s, opacity 0.5s;
                transition-function: ease-in;
            }

            ${({ count }) => new Array(count).fill(0).map((x, i) => `
                &:nth-of-type(${i + 1}) h3 {
                    transition-delay: ${(i + 1) * 150}ms;
                    transition-duration: ${1 / (i + 1) * 150 + 500}ms;
                }
            `)}

            &:hover {
                border-color: black;
            }
        }
    
        & p, h4 {
            display: none;
            padding: 0px;
            margin: 0px;
        }
    
        & div.arrow-symbol {
            position: absolute;
            bottom: 0px;
            right: 4px;
    
            opacity: 1;
            transform: translate(0, 0);

            transition: opacity 0.2s, transform 0.2s;
        }
    
        & li:not(:hover) div.arrow-symbol {
            opacity: 0;
            transform: translate(-10px, -10px);
        }
    }
`

function ExpandableTile({ data, delay = 300 }) {
    const [pos, setPos] = React.useState(0)
    const curr = data.items[pos]

    return (
        <StyledExpandableTiles count={data.items.length}>
            <h2>Experiance</h2>
            <DelayedSignal
                started={true}
                delay={delay}
            >
                {({ animationState }) => (
                    <ul>
                        {data.items.map(({ title, subtitle, body }, i) => (
                            <li
                                className={animationState === STATES.ENDED ? "end-animation" : "start-animation"}
                                onClick={() => setPos(i)}
                            >
                                <h3>{title}</h3>
                                <div className="arrow-symbol"><Arrow /></div>
                            </li>
                        ))}
                    </ul>
                )}
            </DelayedSignal>
            <div className="more-info">
                <div className="content">
                    <h3>{curr.title}</h3>
                    <h4>{curr.subtitle.prefix ? (
                        <>
                            {curr.subtitle.prefix}
                            <span>{curr.subtitle.content}</span>
                            {curr.subtitle.suffix && (curr.subtitle.suffix)}
                        </>
                    ) : curr.subtitle}</h4>
                    <p>{curr.body}</p>
                </div>
            </div>
        </StyledExpandableTiles>
    )
}

export function AboutPage() {
    return (
        <div>
            <ExpandableTile
                data={{
                    items: [
                        {
                            title: "Cluster",
                            subtitle: "Compute Cluster 1",
                            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        {
                            title: "Tiny Dynamo",
                            subtitle: "Compute Cluster 2",
                            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        // {
                        //     title: "Cluster",
                        //     subtitle: "Compute Cluster 3",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                        // {
                        //     title: "Cluster",
                        //     subtitle: "Compute Cluster",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                        // {
                        //     title: "Cluster",
                        //     subtitle: "Compute Cluster",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                        // {
                        //     title: "Cluster",
                        //     subtitle: "Compute Cluster",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                        // {
                        //     title: "Tiny Dynamo",
                        //     subtitle: "Compute Cluster",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                        // {
                        //     title: "Cluster",
                        //     subtitle: "Compute Cluster",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                        // {
                        //     title: "Cluster",
                        //     subtitle: "Compute Cluster",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                        // {
                        //     title: "Cluster",
                        //     subtitle: "Compute Cluster",
                        //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        // },
                    ]
                }}
            />
        </div>
    )
}