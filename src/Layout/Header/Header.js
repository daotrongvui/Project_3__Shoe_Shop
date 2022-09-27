/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { makeStyles, useTheme } from '@material-ui/styles';
import SearchField from 'Components/SearchField/SearchField';
import IconText from 'Components/IconText';
import NavLink from '../Components/NavLink';
import clsx from 'clsx';
import UseStore from 'Store/StoreContext';
import { withRouter } from 'react-router-dom';

const Header = () => {
    const classes = useStyles();

    const { cart } = UseStore();
    return (
        <Navbar className={classes.root} bg="light" expand="lg">
            <Container className="p-0" fluid="fluid">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Row className="w-100 m-0" xs={12}>
                        <Col
                            className="align-items-center 
            justify-content-lg-start 
            justify-content-xl-start 
            justify-content-center 
            d-flex"
                            xs={12}
                            lg={3}
                        >
                            <Navbar.Brand href="/daovui-giaychinhhang/">
                                <img src={`${process.env.PUBLIC_URL}/icons/logo/logo1.png`} />
                            </Navbar.Brand>
                        </Col>
                        <Col className="align-items-center d-flex" xs={12} lg={6}>
                            <SearchField />
                        </Col>
                        <Col
                            className="align-items-center 
            justify-content-center 
            justify-content-lg-end 
            justify-content-xl-end 
            flex-column
            flex-xl-row
            flex-lg-row
            d-flex"
                            xs={12}
                            lg={3}
                        >
                            <Nav.Link href="/daovui-giaychinhhang/auth"></Nav.Link>
                            <NavLink linkAdress="/auth">
                                <IconText icon="/icons/user/userGrey.svg" text="Đăng ký / Đăng nhập" />
                            </NavLink>
                            <NavLink linkAdress="/cart">
                                <IconText cart={cart.length} icon="/icons/cart/cartGrey.svg" text="Giỏ hàng" />
                            </NavLink>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>

            <Container className="p-0" fluid="fluid">
                <Row
                    className="d-flex m-0 
        position-relative
        justify-content-xl-center 
        justify-content-lg-center 
        justify-content-md-center 
        justify-content-sm-center 
        justify-content-start w-100"
                >
                    <NavLink linkAdress="/Giay_nam">Giày Nam</NavLink>
                    <NavLink linkAdress="/Giay_nu">Giày nữ</NavLink>
                    <NavLink linkAdress="/Giay_tre_em">Giày trẻ em</NavLink>
                    <Navbar.Toggle
                        className={clsx(classes.toggleButton, {
                            'position-absolute ': true,
                        })}
                        aria-controls="basic-navbar-nav"
                    />
                </Row>
            </Container>
        </Navbar>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent!important',
        flexFlow: 'column',
        padding: '0 6px ',
    },
    toggleButton: {
        top: 4,
        right: 2,
        lineHeight: '28px',
        zIndex: '1111',
        height: 35,
        '& span': {
            verticalAlign: 'baseline',
            height: 25,
        },
    },
}));

export default withRouter(Header);
