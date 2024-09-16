import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import clsx from "clsx";
import './App.css';
import {useState} from "react";


const App = () => {

  const [check,setCheck] = useState(false);
  
  return <div className= "flex flex-col items-center justify-center h-screen" >



    <FontAwesomeIcon icon={faBasketball} className={clsx("fa-solid fa-basketball text-orange-400 text-4xl",check ? "animate-bounce": " ") }/>
    <div>

      <input
        className="accent-orange-300"
        id="basket-checkbox"
        onChange={(e)=>setCheck(e.target.checked)}
        type="checkbox"
        checked ={check}
         />

      <label
        className="ml-1"
        htmlFor="basket-checkbox" >check me to Bounce</label>
      
    </div>
  </div>;
};

export default App;
