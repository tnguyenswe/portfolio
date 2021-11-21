/** @jsxImportSource theme-ui */
import { Link } from 'theme-ui';

const Headline = (props) => {
    return <Link sx={{':hover': {color: (theme) => theme.colors.titleText}, textDecoration: 'none', color: (theme) => theme.colors.secondaryText}} variant={`styles.${props.scale}`} {...props} />
};

export default Headline;