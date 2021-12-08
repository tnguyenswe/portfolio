/** @jsxImportSource theme-ui */
import Headline from '../Headline';
import { Flex, Grid } from 'theme-ui';

const BodyText = (props) => {
    return(<Headline {...props} sx={{ color: (theme) => theme.colors.secondaryText, lineHeight: '26px', maxWidth: '900px', fontSize: '18px' }} scale="h6">
    </Headline>)
}

const About = (props) => {
    return (
        <Flex sx={{ px: ['2rem', null, '6rem'], justifyContent: 'start' }}>
            <Grid sx={{ gridTemplateColumns: ['1fr', null, '160px 1fr'], gridColumnGap: '50px', justifyItems: ['start', null, 'start'], }}>
                <Headline sx={{ color: (theme) => theme.colors.secondaryText }} scale="h7">ABOUT ME</Headline>
                <Flex sx={{ flexDirection: 'column' }}>
                    <BodyText>
                    I am currently a Software Engineer specializing in Front End Web Development.
                    I've been building visuals for the web my whole career and have worked with both
                    small and large scale projects both in startups and a mid-sized company.
                    </BodyText>
                    <BodyText sx={{py: '20px'}}>
                    I am an aspiring engineer that continues to enjoy 
                    writing performant (feel free to audit the performance of this webpage!) and responsive code and am always
                    willing to tackle any complex problem.
                    </BodyText>
                    <BodyText>
                        I'm passionate about working on technologies that 
                        will have a better impact on society as a whole.
                    </BodyText>
                </Flex>
            </Grid>
        </Flex>
    );
};

export default About;