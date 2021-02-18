import { CATALOG_REQUEST,CATALOG_SUCCESS,CATALOG_FAIL,PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAIL} from '../constants/productConstants';
import Axios from 'axios';


export const catalogAction=()=>async (dispatch)=>{
    dispatch({type:CATALOG_REQUEST});

    try{
        const data=Axios.get('/api/category/data');
        dispatch({type:CATALOG_SUCCESS,payload:data});

    }catch(err){
        dispatch({type:CATALOG_FAIL,payload:err.message});
    }
}


export const productListAction=(categoryTypeId)=>async (dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});

    try{
        const data=await Axios.get(`/api/category/${categoryTypeId}`);
        dispatch({type:PRODUCT_SUCCESS,payload:data});

    }catch(err){
        dispatch({type:PRODUCT_FAIL,payload:err.message});
    }
}