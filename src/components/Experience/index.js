/** @jsxImportSource theme-ui */
import Headline from '../Headline';
import { Flex, Grid, Image, Link } from 'theme-ui';
import LinkText from '../LinkText';
import bbLogo from '../../assets/bb-logo.png';
import vbImage from '../../assets/vb-image.png';

const Jobs = [{ company: 'Backblaze', website: 'https://www.backblaze.com/', position: 'Front End Software Engineer - Intern, July 2021 - Present' },
{ company: 'VirtuaBroker', website: 'https://virtuabroker.com/', position: 'Front End Software Engineer, April 2021 - July 2021' },
{ company: 'Eloquent Cloud', website: 'https://www.eloquentcloud.com/eloquent.cloud/index.html', position: 'Back End Software Engineer - Intern, June 2020 - December 2020' }]

const DescriptionText = (props) => {
    return (
        <Headline sx={{ color: (theme) => props.titleText ? theme.colors.titleText : theme.colors.secondaryText, lineHeight: '26px', maxWidth: '900px', fontSize: '18px', pb: '18px' }} scale="h6" {...props}></Headline>
    )
}

const CompanyText = (props) => {
    return (
        <LinkText href={props.href} {...props}
            sx={{
                ':hover': { textDecoration: 'underline', cursor: 'pointer' },
                color: (theme) => theme.colors.titleText,
                pb: '10px',
                fontSize: '18px',
                fontWeight: '700'
            }} />
    )
}

const Experience = (props) => {
    return (
        <Flex sx={{ px: ['2rem', null, '6rem'], justifyContent: 'start' }}>
            <Grid sx={{ gridTemplateColumns: ['1fr', null, '160px 1fr'], gridColumnGap: '50px', justifyItems: ['start', null, 'start'], }}>
                <Headline sx={{ color: (theme) => theme.colors.secondaryText }} scale="h7">EXPERIENCE</Headline>
                <Flex sx={{ flexDirection: 'column' }}>
                    <CompanyText href={Jobs[0]['website']}>{Jobs[0]['company']}</CompanyText>
                    <DescriptionText>
                        {Jobs[0]['position']}
                    </DescriptionText>
                    <DescriptionText titleText>
                        Currently building amazing things at a recently IPO'd company 🚀
                    </DescriptionText>
                    <Link href={Jobs[0]['website']} sx={{ backgroundColor: props.colorMode === "dark" ? "white" : '', maxWidth: '400px', borderRadius: '10px', mb: '25px' }}>
                        <Image src={bbLogo} />
                    </Link>

                    <CompanyText href={Jobs[1]['website']}>{Jobs[1]['company']}</CompanyText>
                    <DescriptionText>
                        {Jobs[1]['position']}
                    </DescriptionText>
                    {/* Need to add animation for loading bar */}
                    {/* <Box sx={{width: '200px', height: '10px', backgroundColor: 'blue'}}></Box> */}
                    <DescriptionText titleText>
                        Worked on the front end of the VirtuaBroker production crypto trading platform
                    </DescriptionText>
                    <Link href={Jobs[1]['website']} sx={{ maxWidth: '500px', py: '20px', borderRadius: '10px', mb: '25px' }}>
                        <Image src={vbImage} sx={{borderRadius: '10px'}}/>
                    </Link>

                    <CompanyText href={Jobs[2]['website']}>{Jobs[2]['company']}</CompanyText>
                    <DescriptionText>
                        {Jobs[2]['position']}
                    </DescriptionText>
                    <DescriptionText titleText>
                        Developed a full stack web application in PHP for visualizing a database and wrote a database change detector using MongoDB and LDAP/AD server to automate infrastructure with Ansible
                    </DescriptionText>


                </Flex>
            </Grid>
        </Flex>
    );
};

export default Experience;