import React from 'react';
import { makeStyles } from '@material-ui/styles';

const ProductCommentsComment = () => {
    const classes = useStyles();
    return (
        <div className={classes.comment}>
            <div className={classes.commentHead}>
                <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png" alt="user" />
                <h4>Đào Trọng Vui</h4>
            </div>
            <div className="my-1">
                <p className={classes.reviewed}>05.09.2022</p>
                <p className={classes.commentText}>Giày đẹp, bền, phù hợp...</p>
            </div>
        </div>
    );
};

export default ProductCommentsComment;

const useStyles = makeStyles((theme) => ({
    comment: {
        background: '#fff',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    commentHead: {
        display: 'flex',
        '& img': {
            width: '30px',
            marginRight: '8px',
        },
        '& h4': {
            color: theme.colors.darkGrey,
        },
    },
    reviewed: {
        color: theme.colors.darkGrey,
        fontSize: '12px',
        marginLeft: '40px',
    },
    commentText: {
        color: theme.colors.black,
    },
}));
