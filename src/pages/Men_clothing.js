import {
  Accordion,
  AccordionDetails,
  Breadcrumbs,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "@material-ui/core";
import { render } from '@testing-library/react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import PageTitle from "../components/PageTitle";
import CustomAccordians from "../components/CustomAccordians";
import "./Men_clothing.css";
import ProductLister from "../components/ProductLister";

function Men_clothing() {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products?limit=50')
    .then(res => res.json())
    .then(setProducts)
    .catch(console.error);
    console.log(products);
  },[]);

  return (
    <div className='container'>
      {/* <PageTitle
        title='Men Clothing'
        title_route='/men-clothing'
        // heading="Men's Clothing"
        // results={prod}
      /> */}
      <div className='pt-5  d-flex flex-column'>
        <div className='body_container'>
          <div className='body_container_left'>
            {/* <div className='w-100 pl-3 pb-2 '>
              <h6 style={{ color: "gray", fontWeight: 800, fontSize: "small" }}>
                FILTERS
              </h6>
            </div> */}

            <div className='w-100'>
              <CustomAccordians />
            </div>
          </div>
          <div className='body_container_right'>
            <div className='body_right float-right'>
              <h6>SORT BY Popular</h6>
            </div>
            <ProductLister products={products} />
          </div>
        </div>
      </div>
      {/* Left Section -> Filters */}
      {/* Right Section -> Display */}
    </div>
  );
}

export default Men_clothing;
