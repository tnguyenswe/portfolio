/** @jsxImportSource theme-ui */
import Intro from '../Intro';
import About from '../About';
import { Grid } from 'theme-ui';
import Experience from '../Experience';
import Skills from '../Skills';
import Projects from '../Projects';

const Body = (props) => {
    return (
        <Grid sx={{ gridRowGap: '60px' }}>
            <Intro />
            <About />
            <Experience />
            <Skills />
            <Projects />
        </Grid>
    );
};

export default Body;