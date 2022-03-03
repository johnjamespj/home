import styled from "styled-components"

const LegalStyled = styled.div`
    width: 80%;

    & p {
        text-align: justify;
    }
`

export function Legal() {
    return (
        <LegalStyled>
            <small>Designed {'&'} Developed with ❤️ in Herndon, VA</small> <br />
            <small>First Edistion, December 2021</small> <br />
            <p>
                All rights reserved. No part of this website may be reproduced or used
                in any manner without written permission of the copyright owner except
                for the use of reviews and education materials under fair use.
            </p>
            <small>&copy; 2021 John James</small> <br />
        </LegalStyled>
    )
}