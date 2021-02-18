import React, { useState } from 'react'
import {Category} from '../component/Category'
// import CategoryData from '../data/categories-data'
import Axios from 'axios';


export function Catalogue() {

    const [jatin,changeData]=useState([]);

  const  response=getData();
    
    response.then(function(results){
        var a=[]
        for(let i=0;i<results.length;i++){
            a.push(results[i])
        }
        changeData(a); 
    })
    
    const data=jatin;

    return(
        <div className="catalogue">
            <div className='catalog-header'>Catalogue</div>
            <div className="catalog-body">
                {
                    data.map(x=>(
                        <Category key={x._id} id={x._id} type={x.type} image={x.image}></Category>
                    ))
                }
            </div>
        </div>
    );
}

async function getData () {
    try{
       let response= await Axios.get('/api/category/data');
       var temp=await response.data;
       return temp;
    }catch(err){
        console.log(err);
        return null;
    } 
}
