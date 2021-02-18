import React, { useEffect, useState } from 'react'
import {ProductCard} from '../component/ProductCard'
import {LoadingBox} from '../component/LoadingBox';
import {MessageBox} from '../component/MessageBox';
import {productListAction} from '../redux/actions/productActions'
import {useDispatch,useSelector} from 'react-redux'
// import {type1,type2,type3,type4,type5,type6} from '../data/productList'

export  function ProductScreen(props){
    const [value,updateValue]=useState({loading:true,error:false,products:[]});
    const dispatch=useDispatch();
    var categoryTypeId=props.match.params.id;
    
    const productListDetails=useSelector((state)=>state.productListData) 
    const {loading,error,products}=productListDetails

    useEffect(()=>{
        dispatch(productListAction(categoryTypeId));
    },[dispatch,categoryTypeId]);

    return(
        loading ? (<LoadingBox></LoadingBox>)
        :error ? (<MessageBox>{error}</MessageBox>)
        :(
        <div className="product-list">
           <ProductCard productType={products}></ProductCard>
        </div>)
    );
}