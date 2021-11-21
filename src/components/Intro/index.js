/** @jsxImportSource theme-ui */
import { Flex, Grid, Image } from 'theme-ui';
import Headline from '../Headline';
import Picture from '../../assets/pro_photo_of_me.jpg'
import LinkText from '../LinkText'
import Resume from '../../assets/Resume.pdf';

const Links = () => {
    return (<Flex sx={{pt: '30px'}}>
    <LinkText scale="h9" sx={{fontWeight: '700'}} href="https://github.com/tnguyenswe" >GITHUB</LinkText>
    <LinkText scale="h9" sx={{px: '20px', fontWeight: '700'}} href="https://www.linkedin.com/in/codetnguyen/">LINKEDIN</LinkText>
    <LinkText scale="h9" sx={{fontWeight: '700'}} href={Resume}>RESUME</LinkText>
    </Flex>);
}

const TitleText = (props) => {
    return (<Headline scale="h3" {...props} sx={{ fontWeight: '700', color: (theme) => theme.colors.titleText }}></Headline>);
}

const Body = () => {
    return (
        <Flex sx={{ px: ['2rem', null, '6rem'] }}>
            <Grid sx={{ gridTemplateColumns: ['1fr', null, '160px 3fr'], gridColumnGap: '50px', justifyItems: ['start', null, 'center'], alignItems: 'center' }}>
                <Image src={Picture} alt="Photo Of Me" sx={{ height: '150px', width: '150px', objectFit: 'cover', borderRadius: '50%' }} />
                <Flex sx={{ flexDirection: 'column' }}>
                    <TitleText>Thomas Nguyen</TitleText>
                    <Headline scale="h7" sx={{ color: (theme) => theme.colors.secondaryText, pt: '6px' }}>The only way to do great work is to love what you do. - Steve Jobs</Headline>
                    <Links />
                </Flex>
            </Grid>
        </Flex>
    )
}

export default Body;