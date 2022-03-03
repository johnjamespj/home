import styled from "styled-components"

import { ReactComponent as Twitter } from "../../assets/twitter.svg"
import { ReactComponent as WhatsApp } from "../../assets/whatsapp.svg"
import { ReactComponent as Instagram } from "../../assets/instagram.svg"
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg"

const SocialIconsStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & span {
        &:hover svg {
            background-color: var(--color-primary);
        }

        & svg {
            cursor: pointer;
            height: 30px;
            border-radius: 5px;
            width: 30px;
            padding: 2px;
    
            & path, circle {
                fill: var(--color-primary) !important;
            }
        }
    }

    & span.twitter:hover svg {
        & path {
            fill: #1DA1F2 !important;
        }
    }

    & span.whatsapp:hover svg {
        & path {
            fill: #128c7e !important;
        }
    }

    & span.instagram:hover svg {
        & path, circle {
            fill: #8a3ab9 !important;
        }
    }

    & span.linkedin:hover svg {
        &:hover {
            position: relative;
            background-color: var(--color-primary);
        }

        & path {
            fill: #0e76a8 !important;
        }
    }
`

export function SocialIcons() {
    return (
        <SocialIconsStyled>
            <a href="https://twitter.com"><span className="twitter"><Twitter /></span></a>
            <a href="https://whatsapp.com"><span className="whatsapp"><WhatsApp /></span></a>
            <a href="https://instagram.com"><span className="instagram"><Instagram /></span></a>
            <a href="https://linkedin.com"><span className="linkedin"><LinkedIn /></span></a>
        </SocialIconsStyled>
    )
}
