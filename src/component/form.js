import './form.css';
import React, { useState } from 'react';
import foodMap from '../mockData';

function Form (){
    const[cate, setCat] = useState("Any");

    function giveOneFood(array){
        alert(array[Math.floor(Math.random()*array.length)]);
    }

    function getKey(map){
        let keyArray = [];
        for(let key of map.keys()){
            keyArray.push(key);
        }
        return keyArray[Math.floor(Math.random()*keyArray.length)]
    }

    function giveMeFood(e){
        if(cate === "Any"){
            let ranKey = getKey(foodMap);
            giveOneFood(foodMap.get(ranKey));
        }
        else{
            giveOneFood(foodMap.get(cate));
        }
        //console.log(foodMap.get(cate));
        e.preventDefault();
    };

    const handleSelect = (e)=>{
        setCat(e.target.value);
    }


    return (
        <div className = "container center">
          <form>
            <label>
               Category for food:<br/>
               <select id='dropMenu' onChange={handleSelect}>
                  <option value = "Any">Any</option>
                  <option value = "Chinese">Chinese</option>
                  <option value = "Mexican">Mexican</option>
               </select><br/>
            </label>
            <button onClick={giveMeFood}>submit Category</button>
          </form>
        </div>
      );
}

export default Form;