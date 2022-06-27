import {useState} from 'react';

function Counter (){


let [num , setNum] = useState(1);

const incement =()=>{
  setNum(num++);
}



{

    return (
        <div>
          <h1>Counter</h1>
          <button onClick={incement}>Increment</button>
          <h3>{num}</h3>
        </div>
    );
  }
}

export default Counter;
