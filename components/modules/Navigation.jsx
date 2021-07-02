import styled from 'styled-components'
import { useState } from 'react'
import NavLink from 'components/elements/NavLink'
import MenuIcon from 'components/modules/MenuIcon'
import SocialsBar from './SocialsBar'

const StyledMenuWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    height: 100vh;
    padding: 60px;

    background: ${props => props.categoryID ? props.theme[props.categoryID.toString()] : props.theme.lightGray};

    overflow: hidden;
`

const StyledNavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default function Navigation(props) {
    return (
        <>
            <MenuIcon
                menuIsActive={props.menuIsActive}
                setMenuIsActive={props.setMenuIsActive}
            />
            {props.menuIsActive
            ?
                <StyledMenuWrapper categoryID={props.categoryID}>
                    <StyledNavLinksContainer>
                        <NavLink text={'Home'} href={'/'}/>
                        <NavLink text={'Code'} href={'/code'}/>
                        <NavLink text={'Art Dept'} href={'/art-dept'}/>
                        <NavLink text={'Music'} href={'/music'}/>
                        <NavLink text={'About Me'} href={'/about'}/>
                    </StyledNavLinksContainer>
                    <SocialsBar />
                </StyledMenuWrapper>
            :
                null
            }
        </>
    )
}