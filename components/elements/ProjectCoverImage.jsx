import Image from 'next/image'
import styled from 'styled-components'
import { apiURL } from 'config/apiURL'

const StyledBannerWrapper = styled.div`
    position: absolute;
    top: 0px;

    width: 100vw;
    height: 30vh;
    /* min-height: 200px; */

    overflow: hidden;
`

export default function ProjectCoverImage(props) {
    return (
        <StyledBannerWrapper>
            <Image
                src={apiURL + props.coverImage.url}
                alt={props.coverImage.alternativeText}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center center'}
            />
        </StyledBannerWrapper>
    )
}