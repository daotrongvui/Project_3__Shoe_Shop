import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonSize from 'Components/Buttons/ButtonCube';
import UseStore from 'Store/StoreContext';
const CatalogFilterSizes = (props) => {
    const classes = useStyles();
    const { sizes } = props;
    const { setSize } = UseStore();
    const handleClickSize = (size) => {
        setSize(size);
    };
    return (
        <div className="mt-2 mb-3">
            <h3 className={classes.title}>Chọn size</h3>
            <div className="d-flex mt-2 flex-wrap">
                {sizes.map((size, index) => (
                    <div>
                        <ButtonSize text={size} key={index} onClick={() => handleClickSize(size)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.colors.darkGrey,
        fontWeight: 600,
    },
}));

export default CatalogFilterSizes;
