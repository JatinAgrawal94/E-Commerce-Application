import React from 'react'

export function Category(props){
    const data=props;
     
    return(
        <div className="category">
            <div><a href={`/category/type${data.id}`}  ><img src={data.image}  alt=""/></a></div>
            <a href={`/category/${data.type}`}>{data.type}</a>
        </div>
    );
}