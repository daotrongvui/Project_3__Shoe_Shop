import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Divider from '../Components/Divider';
import CatalogFilterCatalogy from './CatalogFilterCatalogy';
import CatalogFilterColors from './CatalogFilterColors';
import CatalogFilterPrice from './CatalogFilterPrice';
import CatalogFilterSizes from './CatalogFilterSizes';

const CatalogFilter = () => {
    const classes = useStyles();
    return (
        <div className={classes.filterContainer}>
            <CatalogFilterCatalogy clothingTypes={clothingTypes} />
            <Divider />
            <CatalogFilterColors />
            <Divider />
            <CatalogFilterPrice />
            <Divider />
            <CatalogFilterSizes sizes={sizes} />
        </div>
    );
};

const clothingTypes = [
    { name: 'Giày Originals', value: 'originals' },
    { name: 'Giày Thể thao', value: 'thethao' },
    { name: 'Giày Bóng đá', value: 'bongda' },
    { name: 'Giày Bóng rổ', value: 'bongro' },
    { name: 'Giày Quần vợt', value: 'quanvot' },
    { name: 'Giày Chạy', value: 'chay' },
];

const sizes = [37, 38, 39, 40, 41, 42, 43, 44];

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        padding: 16,
    },
}));

export default CatalogFilter;
