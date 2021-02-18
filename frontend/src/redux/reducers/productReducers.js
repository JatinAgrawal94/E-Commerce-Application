import { CATALOG_REQUEST,CATALOG_SUCCESS,CATALOG_FAIL,PRODUCT_REQUEST,PRODUCT_SUCCESS,PRODUCT_FAIL} from '../constants/productConstants';

export const catalogReducer=async (state={loading:true,products:[]},action)=>{
    switch(action.type){
        case CATALOG_REQUEST:return {loading:true};

        case CATALOG_SUCCESS:return {loading:false,products:action.payload}

        case CATALOG_FAIL:return {loading:false,products:action.payload}
        
        default: return state;
    }
}


export const productListReducer=async (state={loading:true,products:[]},action)=>{
    switch(action.type){
        case  PRODUCT_REQUEST:return {loading:true};

        case PRODUCT_SUCCESS:return {loading:false,products:action.payload}

        case PRODUCT_FAIL:return {loading:false,products:action.payload}
        
        default: return state;
    }
}