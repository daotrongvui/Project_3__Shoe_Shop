import React from 'react';
import ButtonSize from 'Components/Buttons/ButtonCube';

const ProductSelectionSize = () => {
    return (
        <div className="mt-4">
            <h4>Size</h4>
            <div className="d-flex justify-content-center mt-2">
                <ButtonSize text="37" />
                <ButtonSize text="38" />
                <ButtonSize text="39" />
                <ButtonSize text="40" />
                <ButtonSize text="41" />
                <ButtonSize text="42" />
                <ButtonSize text="43" />
                <ButtonSize text="44" />
            </div>
        </div>
    );
};

export default ProductSelectionSize;
