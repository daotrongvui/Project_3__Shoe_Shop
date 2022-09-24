import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProductSelectionSize from './ProductSelectionSize';
import ProductSelectionColor from './ProductSelectionColor';
import ButtonSemiRound from 'Components/Buttons/ButtonSemiRound';
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import UseStore from 'Store/StoreContext';
import { withRouter } from 'react-router-dom';

const Product = (props) => {
    const classes = useStyles();
    const { current } = props;
    const { cart, setCart } = UseStore();

    const addToCart = (curr) => {
        console.log('cartsss:', cart);
        console.log('curr:', curr);
        const productExit = cart.find((item) => item.id === curr.id);
        if (productExit) {
            setCart(cart.map((item) => (item.id === curr.id ? { ...productExit, qty: productExit.qty + 1 } : item)));
        } else {
            setCart([...cart, { ...curr, qty: 1 }]);
        }
    };

    // console.log(localStorage.getItem('cart'))
    return (
        <div className={classes.selection}>
            <h2 className={classes.title}>{current.name}</h2>

            <ProductSelectionSize />
            <ProductSelectionColor />
            <div className="mt-3 d-flex justify-content-center">
                <ButtonSemiRound color="darkGrey" fontWeight="400" text="Thêm vào yêu thích" />
            </div>
            <div className="mt-4 ">
                <div className={classes.buttonContainer}>
                    <ButtonBlock onClick={() => addToCart(current)} fontWeight="400" text="Thêm vào giỏ hàng" />
                </div>
            </div>
        </div>
    );
};

export default withRouter(Product);

const useStyles = makeStyles((theme) => ({
    selection: {
        color: '#555',
        textAlign: 'center',
    },
    title: {
        color: '#555',
    },
    buttonContainer: {
        width: '300px',
        margin: 'auto',
    },
}));
