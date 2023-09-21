import React from 'react';
import { useState } from 'react';
import './ToDoItem.css';

function ItemCard ({ Title, deleteItem, key, index, desc, DDate}){

    return(
        <div class ="TDItem">
            {/* <p>{index}</p> */}
            <h1 className='title' onClick = {()=>addDesc(desc, key)}>{Title}</h1>
            <p>{DDate}</p>
            <input type="checkbox" onChange = {()=>deleteItem(key)}/>
            
            {/* <button onClick={()=> deleteItem(key)}>Delete</button> */}
            {/* <h2>{DDate}</h2> */}
            {/* <p>{Desc}</p> */}
        </div>
    )

}


export default ItemCard;
