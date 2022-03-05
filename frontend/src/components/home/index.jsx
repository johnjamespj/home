import React from "react"

import * as style from "./atom"
import { RevealingTextAnimation } from "./RevealingTextAnimation"
import { ScrollingTextAnimation } from "./ScrollingTextAnimation"
import { HomeNavigationBar } from "./HomeNavigationBar"
import { Icon } from "./Icon"
import { Navigation } from "./Navigation"
import { DelayedSignal, STATES } from "./TransitionsSignal"

import { AboutPage } from "../about"

const mutationHandler = (title, isDark = false) => ({
    isDark,
    title,
})

const pageLayoutMutation = [
    mutationHandler("About"),
    mutationHandler("Projects"),
    mutationHandler("Blogs"),
    mutationHandler("Contact me", true),
]

export default function Root() {
    const disableScoll = true;

    const [header, setHeader] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);

    React.useEffect(() => {
        document.title = `IAMJJ: ${header ? pageLayoutMutation[page].title : "Home"}`
    }, [page, header])

    React.useEffect(() => {
        const handleScroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st <= 20 && !disableScoll)
                setHeader(false)
            else if (!disableScoll)
                setHeader(true)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleLinkClick = (indx, onClick) => {
        return {
            className: page === indx ? "selected" : "",
            onClick: (e) => {
                window.scrollTo(0, 22)
                setPage(indx);
                e.preventDefault();
                onClick && onClick();
            },
        }
    }

    const navItems = (
        <>
            <li><a {...handleLinkClick(0)}>about me</a></li>
            <li><a {...handleLinkClick(1)}>projects</a></li>
            <li><a {...handleLinkClick(2)}>blog</a></li>
            <li><a {...handleLinkClick(3)}>contact me</a></li>
        </>
    )

    const navMenuItems = (exitController) => (
        <>
            <li><a {...handleLinkClick(0, exitController)}>about me</a></li>
            <li><a {...handleLinkClick(1, exitController)}>projects</a></li>
            <li><a {...handleLinkClick(2, exitController)}>blog</a></li>
            <li><a {...handleLinkClick(3, exitController)}>contact me</a></li>
        </>
    )

    //  XOR!
    let isInverted = !pageLayoutMutation[page].isDark ^ !inverted
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return (
        <RevealingTextAnimation isSafari={isSafari}>
            <DelayedSignal
                started={header}
                delay={200}
            >
                {({ animationState }) => (
                    <>
                        <style.Header
                            header={animationState !== STATES.IDLE}
                            hidden={animationState === STATES.ENDED}
                            invert={animationState === STATES.ENDED && !isInverted}>
                            {animationState !== STATES.ENDED ? (
                                <HomeHeader header={header} navItems={navItems} />
                            ) : (
                                <Navigation onChange={setInverted} itemCount={4}>
                                    {(exitController) => navMenuItems(exitController)}
                                </Navigation>
                            )}
                        </style.Header>
                        <style.HeaderSpacer invert={animationState === STATES.ENDED && !pageLayoutMutation[page].isDark}>
                            {header && (
                                <AboutPage />
                            )}
                        </style.HeaderSpacer>
                    </>
                )}
            </DelayedSignal>
        </RevealingTextAnimation>
    )
}

function HomeHeader({ header, navItems }) {

    return (
        <>
            <div id="branding">
                <Icon />
            </div>
            <h1 id="iam-intro" className="iam-header">I am</h1>
            <h1 id="name-heading" className="iam-header reveal-text" title="The man with two first name">John James</h1>
            <div className="iam-subtitle">
                <ScrollingTextAnimation
                    hidden={header}
                    texts={[
                        "Computer Engineering Undergrad",
                        "GMU '24",
                        "HHS '20",
                        "JNV '20"
                    ]}
                    variant={(text) => <h2 key={text}>{text}</h2>}
                    duration={2000}
                />
            </div>
            <style.Message>work-in-progress...</style.Message>
            {/* <HomeNavigationBar>{navItems}</HomeNavigationBar> */}
        </>
    )
}

