import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name:'Shoes', description: 'Lifestyle Shoes', price: '$85', image:'https://images.unsplash.com/photo-1580906853149-f82f7601d205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'},
    { id: 2, name:'Macbook', description: 'Laptop computer', price: '$1095', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhKO3X3BQ6cdgwi76evc9TrZvZFXAQC7pdQ&usqp=CAU' },
];

const Products = () => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;