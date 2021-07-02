import styled, { keyframes } from 'styled-components'
import Navigation from 'components/modules/Navigation'
import { fadeIn } from 'utils/animations'


const StyledContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.menuIsActive ? 'space-between' : 'flex-end'};

    width: 100%;
    height: 50px;

    padding: 15px;
`

const StyledInitials = styled.h3`
    position: relative;
    z-index: 2;

    animation: ${fadeIn} .25s 1;
`

export default function Header(props) {
    return (
        <StyledContainer menuIsActive={props.menuIsActive}>
            {props.menuIsActive ?
                <StyledInitials>
                    {'JM'}
                </StyledInitials>
            : null}
            <Navigation
                currentPageID={props.pageID}
                categoryID={props.categoryID}
                menuIsActive={props.menuIsActive}
                setMenuIsActive={props.setMenuIsActive}
            />
        </StyledContainer>
    )
}