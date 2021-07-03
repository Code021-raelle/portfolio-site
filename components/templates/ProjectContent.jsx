import styled from 'styled-components'
import ContentContainer from "components/elements/ContentContainer"
import ProjectCoverImage from "components/elements/ProjectCoverImage"
import ProjectDescription from "components/modules/ProjectDescription"
import MediaGallery from 'components/modules/MediaGallery'
import ProcessSection from 'components/modules/ProcessSection'
import ProjectFeaturedMedia from 'components/modules/ProjectFeaturedMedia'
import Icon from 'components/elements/Icon'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 720px;
`

const StyledHeadingWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledIconWrapper = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 10px;
`

export default function ProjectContent({ content }) {
    return (
        <ContentContainer
            categoryID={content.categories[0].id}
        >
            <StyledContainer>
                <ProjectCoverImage
                    coverImage={content.cover_image}
                />
                <ProjectDescription
                    title={content.title}
                    summary={content.summary}
                    details={content.details}
                    links={content.links}
                />
                <ProjectFeaturedMedia media={content.featured_media}/>
                {content.process_sections.map(section => <ProcessSection key={section.id} content={section} />)}
                <StyledHeadingWrapper>
                    <StyledIconWrapper><Icon type={'gallery'}/></StyledIconWrapper>
                    <h3>Gallery</h3>
                </StyledHeadingWrapper>
                <MediaGallery
                    media={content.gallery_media}
                />
            </StyledContainer>

        </ContentContainer>
    )
}