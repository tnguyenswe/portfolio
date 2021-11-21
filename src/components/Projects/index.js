/** @jsxImportSource theme-ui */
import Headline from '../Headline';
import { Flex, Grid } from 'theme-ui';
import LinkText from '../LinkText';

const ProjectList = [{ project: 'Misfits DeFi | Founding Software Engineer', website: 'https://tnguyenswe.github.io/Misfits-DeFi/', projectDescription: 'Agriculture cryptocurrency token project. Responsibilities included: developing landing page, writing technical white paper, researching other cryptocurrency token projects to develop standards for token economics, white paper, pitch deck, reaching out to pre-seed investors, marketing, and development of token.' },]

const Projects = (props) => {
    return (
        <Flex sx={{ px: ['2rem', null, '6rem'], justifyContent: 'start' }}>
            <Grid sx={{ gridTemplateColumns: ['1fr', null, '160px 1fr'], gridColumnGap: '50px', justifyItems: ['start', null, 'start'], }}>
                <Headline sx={{ color: (theme) => theme.colors.secondaryText }} scale="h7">PROJECTS</Headline>
                <Flex sx={{ flexDirection: 'column' }}>
                    {ProjectList.map((data) => {
                        return (
                            <>
                                <LinkText href={data.website} sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' }, color: (theme) => theme.colors.titleText, pb: '10px', fontSize: '18px', fontWeight: '700' }} >{data.project}</LinkText>
                                <Headline sx={{ color: (theme) => theme.colors.secondaryText, lineHeight: '26px', maxWidth: '900px', fontSize: '18px', pb: '26px' }} scale="h6">
                                    {data.projectDescription}
                                </Headline>
                            </>
                        );
                    })}
                </Flex>
            </Grid>
        </Flex>
    );
};

export default Projects;