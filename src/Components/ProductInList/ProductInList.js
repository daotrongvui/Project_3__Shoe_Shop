import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductInListQuantity from './ProductInListQuantity';
import ProductInListDetails from './ProductInListDetails';
import ProductInListDelete from './ProductInListDelete';
import ProductInListProductImage from './ProductInListProductImage';

const ProductInList = (props) => {
    const classes = useStyles();
    const { items, quantity, prevClick, nextClick, idpr, carts, setCart } = props;
    return (
        <>
            {
                <div
                    className={clsx(classes.product, {
                        'w-100 h-100 ': true,
                    })}
                >
                    <Row>
                        <Col xs={12} sm={4} lg={3}>
                            <ProductInListProductImage image={items.img} />
                        </Col>
                        <Col className="d-flex flex-column" xs={9} sm={6} lg={7}>
                            <ProductInListDetails item={items} />

                            <ProductInListDelete id={items.id} Delete={props.Delete} />
                        </Col>
                        <Col xs={3} sm={2}>
                            <ProductInListQuantity
                                id={items.id}
                                quantity={quantity}
                                prevClick={prevClick}
                                nextClick={nextClick}
                                idpr={idpr}
                                carts={carts}
                                setCart={setCart}
                                item={items}
                            />
                        </Col>
                    </Row>
                </div>
                //  })
            }
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    product: {
        padding: 16,
        background: '#fff',
        borderRadius: 10,
        ['@media (max-width:1000px)']: {
            padding: '6px 0',
        },
    },
}));

export default ProductInList;
