import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import { Link } from 'react-router-dom';
import Url from 'Paths';

const CheckoutSummary = ({ items }) => {
    console.log('CheckoutSummary', items);
    let Subtotal = items.reduce((prev, price) => prev + price.price, 0);
    const classes = useStyles();
    return (
        <div
            className={clsx(classes.checkout, {
                'w-100  ': true,
            })}
        >
            <h5>Tổng thanh toán</h5>
            <div className="d-flex mt-3">
                <p>Tổng tiền:</p>
                <p className="ml-auto">{Subtotal}$</p>
            </div>
            <div className="d-flex">
                <p>Phí ship:</p>
                <p className="ml-auto">1.5$</p>
            </div>
            <div className="d-flex mt-4">
                <h6>Tổng cộng:</h6>
                <h6 className="ml-auto">{Subtotal + 1.5}$</h6>
            </div>
            <div className="mt-3">
                <ButtonBlock as={Link} to={Url.Checkout} text="Thanh toán" />
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    checkout: {
        padding: 16,
        background: '#fff',
        minHeight: 200,
        color: theme.colors.black,
        borderRadius: 10,
        '& h6': {
            fontWeight: 700,
        },
    },
}));

export default CheckoutSummary;
