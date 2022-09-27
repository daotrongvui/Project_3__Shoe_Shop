/* eslint-disable no-useless-computed-key */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonSemiRound from 'Components/Buttons/ButtonSemiRound';
import clsx from 'clsx';
import Url from 'Paths';

const HomePageBanner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <img src={`${process.env.PUBLIC_URL}/images/homepage/banner.png`} alt="" />
            <div
                className={clsx(classes.moreButton, {
                    'd-flex align-items-center flex-column bg-secondary': true,
                })}
            >
                <h1 className="mb-3">Giảm tới 20% vào ngày 2 tháng 9</h1>
                <ButtonSemiRound address={`${Url.HOME}/Giay_nam`} text="Xem thêm" />
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    banner: {
        position: 'relative',
        '& img': {
            height: 500,
            width: '100%',
        },
        '& h1': {
            color: '#fff',
            fontSize: '38px',
        },
        ['@media (max-width:900px)']: {
            '& img': { height: 400 },
            '& h1': { fontSize: '28px' },
        },
        ['@media (max-width:700px)']: {
            '& img': { height: 350 },
            '& h1': { fontSize: '24px' },
        },
        ['@media (max-width:550px)']: {
            '& img': { height: 300 },
            '& h1': { fontSize: '20px' },
        },
        ['@media (max-width:400px)']: {
            '& img': { height: 300 },
            '& h1': { fontSize: '18px' },
        },
    },
    moreButton: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 'fit-content',
        transform: 'translate(-50%,-50%)',
        opacity: 0.8,
        padding: '10px 20px',
        borderRadius: '10px',
    },
}));

export default HomePageBanner;
