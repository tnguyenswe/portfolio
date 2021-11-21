/** @jsxImportSource theme-ui */
import Headline from '../Headline';
import { Flex, Grid } from 'theme-ui';

const Skill = [{ section: 'Languages', skills: 'Java, Python, JavaScript, HTML/CSS, Golang' },
{ section: 'Libraries & Frameworks', skills: 'Flask, React, Material UI, Tailwind CSS, Styled Components, Theme UI' },
{ section: 'Developer Tools', skills: 'Git, VS Code, Jira, Sourcetree, Storybook, Jest, Lighthouse, Netlify CMS, React-Static' }]

const Skills = (props) => {
    return (
        <Flex sx={{ px: ['2rem', null, '6rem'], justifyContent: 'start' }}>
            <Grid sx={{ gridTemplateColumns: ['1fr', null, '160px 1fr'], gridColumnGap: '50px', justifyItems: ['start', null, 'start'], }}>
                <Headline sx={{ color: (theme) => theme.colors.secondaryText }} scale="h7">SKILLS</Headline>
                <Flex sx={{ flexDirection: 'column' }}>
                    {Skill.map((data) => {
                        return (
                            <>
                                <Headline sx={{color: (theme) => theme.colors.titleText, pb: '10px', fontSize: '18px', fontWeight: '700' }} >{data.section}</Headline>
                                <Headline sx={{ color: (theme) => theme.colors.secondaryText, lineHeight: '26px', maxWidth: '900px', fontSize: '18px', pb: '26px' }} scale="h6">
                                    {data.skills}
                                </Headline>
                            </>
                        );
                    })}
                </Flex>
            </Grid>
        </Flex>
    );
};

export default Skills;