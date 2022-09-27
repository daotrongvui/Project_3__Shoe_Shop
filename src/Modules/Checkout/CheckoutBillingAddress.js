import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import InputField from 'Components/InputField/InputField';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CheckoutBillingAddress = () => {
    const classes = useStyles();
    return (
        <div
            className={clsx(classes.checkout, {
                'w-100  ': true,
            })}
        >
            <h5>Địa chỉ thanh toán</h5>
            <Row className="mt-3 ">
                <Col className="mb-2" xs={12} md={6}>
                    <InputField placeholder="Họ tên" />
                </Col>
                <Col className="mb-2" xs={12} md={6}>
                    <InputField placeholder="Số điện thoại" />
                </Col>
                <Col className="mb-2" xs={12} md={6}>
                    <InputField placeholder="Địa chỉ" />
                </Col>
            </Row>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    checkout: {
        padding: 30,
        background: '#fff',
        minHeight: 200,
        color: theme.colors.black,
        borderRadius: 10,
        '& h6': {
            fontWeight: 700,
        },
    },
}));

export default CheckoutBillingAddress;
