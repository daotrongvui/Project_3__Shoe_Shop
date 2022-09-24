import React, { createContext, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonRound from 'Components/Buttons/ButtonRound';
import { products } from 'Api/ClothingDatabase';

const ProductInListQuantity = ({ idpr, carts, setCart, item }) => {
    const [quantity, setQuantity] = useState(item.qty);
    const prevClick = (quantity, id) => {
        setQuantity(quantity === 1 ? 1 : quantity - 1);
        setCart(
            carts.map((item) =>
                item.id === id ? { ...item, qty: parseInt(quantity) === 1 ? 1 : parseInt(quantity) - 1 } : item,
            ),
        );

        // setCart([...carts, carts.find((item) => (item.id === id ? (item.qty = quantity) : item))]);
    };
    const nextClick = (quantity, id) => {
        setQuantity(quantity + 1);
        setCart(carts.map((item) => (item.id === id ? { ...item, qty: parseInt(quantity) + 1 } : item)));
    };
    const classes = useStyles();
    return (
        <div className="d-flex flex-column align-items-end">
            <p className={classes.text}>Số lượng</p>

            <div style={{ marginLeft: '-4px' }} className="d-flex mt-2">
                <ButtonRound
                    size="28px"
                    icon="/icons/minus.svg"
                    background="transparent"
                    onClick={() => prevClick(quantity, idpr)}
                />
                <p>{quantity}</p>
                <ButtonRound
                    size="28px"
                    icon="/icons/plus.svg"
                    background="transparent"
                    onClick={() => nextClick(quantity, idpr)}
                />
                <span>{parseFloat(item.price * quantity).toFixed(2)}$</span>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.colors.black,
        fontWeight: 700,
        fontSize: '14px',
    },
}));

export default ProductInListQuantity;
