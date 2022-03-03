import React from "react"

import * as style from "./atom"
import { Icon } from "../Icon"
import { MenuButton } from "./MenuButton"

export function Navigation({ children, onChange = (_) => { }, itemCount }) {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        if (!open)
            setTimeout(() => onChange(open), 950)
        else
            onChange(open)
    })

    const exitController = () => setTimeout(() => setOpen(false), 300)

    return (
        <style.NavBar>
            <div id="brand-icon-nav-bar" onClick={() => window.scrollTo(0, 0)}>
                <Icon />
            </div>
            <div className="nav-menu">
                <ul>{children(exitController)}</ul>
            </div>
            <style.NavigationMobileStyle>
                <MenuButton open={open} onClick={() => setOpen(x => !x)} />
            </style.NavigationMobileStyle>
            <style.NavigationOverlayStyle open={open} count={itemCount}>
                <ul>{children(exitController)}</ul>
            </style.NavigationOverlayStyle>
        </style.NavBar>
    )
}
