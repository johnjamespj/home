import React from "react"

export const STATES = {
    STARTED: 0,
    ENDED: 1,
    IDLE: 2,
}

export function DelayedSignal({ children, started = false, delay = 500, onEnd, onStateChange = () => {} }) {
    const [animationState, setState] = React.useState(STATES.IDLE)

    React.useEffect(() => {
        if (started) {
            setState(STATES.STARTED)
            setTimeout(() => setState(STATES.ENDED), delay)
        } else if (animationState === STATES.ENDED) {
            setState(STATES.IDLE)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setState, started, delay])

    React.useEffect(() => {
        if (animationState === STATES.ENDED && onEnd) onEnd()
    }, [animationState, onEnd])

    React.useEffect(() => onStateChange({animationState}), [animationState, onStateChange])

    return children({ animationState })
}