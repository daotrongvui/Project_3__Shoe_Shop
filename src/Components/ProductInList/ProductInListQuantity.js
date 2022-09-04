import React, { createContext, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonRound from 'Components/Buttons/ButtonRound';
import { products } from 'Api/ClothingDatabase';

const ProductInListQuantity = ({ idpr, carts }) => {
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState(carts);
    const prevClick = (quantity, id) => {
        setQuantity(quantity === 1 ? 1 : quantity - 1);

        setData([...data, data.find((item) => (item.id === id ? (item.qty = quantity) : item))]);
    };
    const nextClick = (quantity, id) => {
        setQuantity(quantity + 1);
        setData([...data, data.find((item) => (item.id === id ? (item.qty = quantity) : item))]);
    };
    const classes = useStyles();
    return (
        <div className="d-flex flex-column align-items-center">
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
            </div>
            <span>Tổng: 10$</span>
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
