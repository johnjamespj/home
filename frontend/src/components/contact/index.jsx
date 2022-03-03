import styled from "styled-components"
import { SocialIcons } from "./SocialIcons"

const ContactMeStyled = styled.div`
    color: var(--color-primary) !important;
    display: flex;
    padding-top: 40px;
    gap: 10px;
    flex-wrap: wrap;

    & a {
        color: var(--color-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    & div.social-icons {
        padding-top: 20px;
    }

    & div.info {
        min-width: 320px;
        flex: 3;
    }
    
    & form.email-forms {
        min-width: 300px;
        flex: 2;
    }

    & div.info {
        display: flex;
        flex-direction: column;

        & h1, h2 {
            text-transform: uppercase;
            margin: 0px;
        }

        & h1 {
            font-weight: 100;
            padding-bottom: 10px;
            letter-spacing: 4px;
        }

        & h2 {
            font-weight: 900;
            font-size: 15px;
        }

        @media screen and (max-width: 729px) {
            & h1, h2 {
                text-align: center;
            }

            & div.contact-info-grid {
                place-content: center !important;
                justify-items: center;
            }

            & address {
                text-align: center;
            }

            & div.social-icons {
                align-self: center;
            }
        }

        & div.contact-info-grid {
            display: grid;
            grid-template-columns: auto auto;
            place-content: start;
            row-gap: 5px;
            column-gap: 50px;
            padding: 20px 0px;
            flex: 2;

            & address {
                grid-row-start: 0;
                grid-row-end: span 2;
                font-style: normal;
            }
        }
    }

    & form.email-forms {
        display: flex;
        flex-direction: column;
        padding: 0px 10px;

        & > * {
            border-width: 0px;
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 10px;
            font-family: "Roboto", sans-serif !important;
        }

        & > input:focus, > textarea:focus {
            outline: none !important;
            box-shadow: 0 0 10px #719ECE;
        }

        & > input, > textarea {
            padding-left: 10px;
            color: var(--color-primary);
            background-color: var(--color-bg);
            border: 2px solid var(--color-primary);
            font-weight: 400;

        }

        & > input, > button {
            height: 40px;
        }

        & > textarea {
            height: 100px;
        }

        & > button {
            color: var(--color-bg);
        }
    }
`

export function Contact() {
    return (
        <ContactMeStyled>
            <div className="info">
                <h1>Get In Touch</h1>
                <h2>Use the form to drop me a message or give me a call.</h2>
                <div className="contact-info-grid">
                    <address className="home-address">
                        <a href="https://goo.gl/maps/GUHRWCpm2QGtNAsg6">
                            Herndon, VA <br />
                            20170.
                        </a>
                    </address>
                    <a href="tel:7037051875">+ 703 705 1875</a>
                    <a href="mailto:johnjamespj@gmail.com">johnjamespj@gmail.com</a>
                </div>
                <div className="social-icons">
                    <SocialIcons />
                </div>
                {/* <Legal /> */}
            </div>
            <form className="email-forms">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea type="text" placeholder="Message" />
                <button>Send</button>
            </form>
        </ContactMeStyled>
    )
}
