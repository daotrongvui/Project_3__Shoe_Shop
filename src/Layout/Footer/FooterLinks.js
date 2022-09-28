import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const FooterLinks = () => {
    return (
        <div className="d-flex justify-content-center justify-content-md-center">
            <div className="p-1 d-flex justify-content-center" xs={3}>
                <SocialLink
                    to="www.instagram.com/vui.cules/"
                    icon={`${process.env.PUBLIC_URL}/icons/socialMedia/instagram.svg`}
                />
            </div>
            <div className="p-1 d-flex justify-content-center" xs={3}>
                <SocialLink
                    to="www.facebook.com/daotrongvui"
                    icon={`${process.env.PUBLIC_URL}/icons/socialMedia/facebook.svg`}
                />
            </div>
            <div className="p-1 d-flex justify-content-center" xs={3}>
                <SocialLink to="www.pinterest.com" icon={`${process.env.PUBLIC_URL}/icons/socialMedia/pinterest.svg`} />
            </div>
            <div className="p-1 d-flex justify-content-center" xs={3}>
                <SocialLink to="www.youtube.com" icon={`${process.env.PUBLIC_URL}/icons/socialMedia/youtube.svg`} />
            </div>
        </div>
    );
};

const SocialLink = (props) => {
    const classes = useStyles();
    const { icon, to } = props;
    return (
        <a target="_blank" rel="noopener noreferrer" href={`https://${to}`} className={clsx(classes.footerLinks)}>
            <img src={icon} alt="socialMedia" />
        </a>
    );
};

const useStyles = makeStyles((theme) => ({
    footerLinks: {
        '& img:hover': {
            opacity: '0.7',
        },
    },
}));

export default FooterLinks;
