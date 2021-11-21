/** @jsxImportSource theme-ui */
import Headline from '../Headline';
import { Flex, Grid } from 'theme-ui';

const About = (props) => {
    return (
        <Flex sx={{ px: ['2rem', null, '6rem'], justifyContent: 'start' }}>
            <Grid sx={{ gridTemplateColumns: ['1fr', null, '160px 1fr'], gridColumnGap: '50px', justifyItems: ['start', null, 'start'], }}>
                <Headline sx={{ color: (theme) => theme.colors.secondaryText }} scale="h7">ABOUT ME</Headline>
                <Flex sx={{ flexDirection: 'column' }}>
                    <Headline sx={{ color: (theme) => theme.colors.secondaryText, lineHeight: '26px', maxWidth: '900px', fontSize: '18px' }} scale="h6">
                    I'm a front end software engineer with a focus on building performant, 
                    responsive components and web pages. My past experiences include a variety of 
                    different areas including databases, software infrastructure, front end web development, decentralized systems, 
                    cryptocurrencies, exemplified through previous internships and content creation. 
                    I'm passionate about working on technologies that will have a better impact on society as a whole.
                    </Headline>
                </Flex>
            </Grid>
        </Flex>
    );
};

export default About;