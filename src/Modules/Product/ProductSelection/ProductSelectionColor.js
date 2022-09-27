import React from 'react';
import ButtonColor from 'Components/Buttons/ButtonColor';

const ProductSelectionSize = () => {
    return (
        <div className="mt-3">
            <h4>Chọn màu</h4>
            <div className="d-flex justify-content-center mt-2">
                <ButtonColor background="black" />
                <ButtonColor background="white" />
                <ButtonColor background="red" />
                <ButtonColor background="blue" />
                <ButtonColor background="yellow" />
            </div>
        </div>
    );
};

export default ProductSelectionSize;
