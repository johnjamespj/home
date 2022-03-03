import styled from "styled-components"
import { breakpoint } from "../../responsive"

const MenuButtonStyle = styled.div`
    width: 60px;
    height: 22px;
    position: relative;
    margin: 50px auto;
    transform: rotate(0deg);
    transition: .5s ease-in-out;

    & > span {
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background: var(--color-primary);
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: all .25s ease-in-out;
    }

    & span:nth-child(1) {
        top: 0px;
        transform-origin: left center;
    }
      
    & span:nth-child(2) {
        top: 18px;
        transform-origin: left center;
    }

    ${({ open }) => open ? `
        & span:nth-child(1) {
            transform: rotate(45deg);
            top: -11px;
            left: 0px;
        }
        
        & span:nth-child(2) {
            transform: rotate(-45deg);
            top: 32px;
            left: 0px;
        }
    ` : ""}
`

const MenuButtonGroupStyle = styled.div`
        cursor: pointer;

        display: flex;
        ${breakpoint('sm')`
            display: none;
        `}
`

export const MenuButton = ({ open, onClick = () => { } }) => {
    return (
        <MenuButtonGroupStyle onClick={onClick}>
            <MenuButtonStyle open={open}>
                <span></span>
                <span></span>
            </MenuButtonStyle>
        </MenuButtonGroupStyle>
    )
}