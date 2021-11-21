/** @jsxImportSource theme-ui */
import Headline from '../Headline';
import { Flex, Grid, Image } from 'theme-ui';
import LinkText from '../LinkText';

const Jobs = [{ company: 'Backblaze', website: 'https://www.backblaze.com/', position: 'Front End Engineering Intern, July 2021 - Present' },
{ company: 'VirtuaBroker', website: 'https://virtuabroker.com/', position: 'Front End Software Engineer, April 2021 - July 2021' },
{ company: 'Eloquent Cloud', website: 'https://www.eloquentcloud.com/eloquent.cloud/index.html', position: 'Software Engineering Intern, June 2020 - December 2020' }]

const Experience = (props) => {
    return (
        <Flex sx={{ px: ['2rem', null, '6rem'], justifyContent: 'start' }}>
            <Grid sx={{ gridTemplateColumns: ['1fr', null, '160px 1fr'], gridColumnGap: '50px', justifyItems: ['start', null, 'start'], }}>
                <Headline sx={{ color: (theme) => theme.colors.secondaryText }} scale="h7">EXPERIENCE</Headline>
                <Flex sx={{ flexDirection: 'column' }}>
                    {Jobs.map((data) => {
                        return (
                            <>
                                <LinkText href={data.website} sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' }, color: (theme) => theme.colors.titleText, pb: '10px', fontSize: '18px', fontWeight: '700' }} >{data.company}</LinkText>
                                <Headline sx={{ color: (theme) => theme.colors.secondaryText, lineHeight: '26px', maxWidth: '900px', fontSize: '18px', pb: '26px' }} scale="h6">
                                    {data.position}
                                </Headline>
                            </>
                        );
                    })}
                </Flex>
            </Grid>
        </Flex>
    );
};

export default Experience;