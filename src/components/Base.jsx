import { useState } from "react";
import Output from "./Output";
import Buttons from "./Buttons";
import Context from "../context/Context";

const Base = () => {
  const [result, setResult] = useState('0');

  return (
    <Context.Provider value={{ result, setResult }}>        
        <div className="base">
            <div className="base__header">  
              <Output/>
            </div>

            <div className="base__buttons container">
              <Buttons/>
            </div>
        </div>
    </Context.Provider>
  )
}

export default Base;