import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProductInList from 'Components/ProductInList';
import CartCheckout from './CartCheckout';
import UseStore from 'Store/StoreContext';

const Cart = () => {
    let { cart, Delete, quantity, prevClick, nextClick } = UseStore();
    console.log('data:', cart);
    return (
        <Container fluid>
            <Row className="mt-3 ">
                <Col className="mb-3" xs={12}>
                    <h2>Giỏ hàng</h2>
                </Col>
            </Row>
            <Row className="mt-3 cart">
                <Col className="mb-3" xs={12} md={8}>
                    <ul class="list-group">
                        {cart &&
                            cart.map((item, index) => {
                                return (
                                    <li class="list-group-item p-0 mb-3 border-0 ">
                                        <ProductInList
                                            items={item}
                                            Delete={Delete}
                                            quantity={quantity}
                                            prevClick={prevClick}
                                            nextClick={nextClick}
                                            idpr={item.id}
                                            carts={cart}
                                        />
                                    </li>
                                );
                            })}
                    </ul>
                </Col>
                <Col className="mb-3" xs={12} md={4}>
                    <CartCheckout items={cart} />
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
