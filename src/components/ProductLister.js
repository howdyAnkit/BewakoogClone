import { Grid } from "@material-ui/core";
import React from "react";
import ProductDiv from "./ProductDiv";

function ProductLister({ products }) {
  return (
    <div>
      <Grid container spacing={1}>
        {products.map((product, key) => {
          return (
            <Grid item md={4} lg={3} xs={6}>
              <ProductDiv product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProductLister;
