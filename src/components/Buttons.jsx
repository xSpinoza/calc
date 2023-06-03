import { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import add from "../helpers/addNumbers";
import detectKey from "../helpers/keyDetector";
import funBtn from "../helpers/functionalBtns";

const Buttons = () => {
    const { result, setResult } = useContext(Context);

    const [active, setActive] = useState(''),
          [isPressed, setIsPressed] = useState(false);
          
    useEffect(() => {
      const handleKeyDown = e => {
        // Detect if the btn is a functional btn
        if(typeof detectKey(e.key) === 'object') {
          const {valueBtn, activeBtn} = funBtn(detectKey(e.key), result);

          // action flash for equal
          if(e.key === '=' || e.key === 'Enter') setIsPressed('equal');
          if(e.key === 'Backspace') setIsPressed('backspace');
          if(e.key === 'c') setIsPressed('c');

          setActive(activeBtn);
          return setResult(valueBtn);
        }

        if(detectKey(e.key) === '00') setIsPressed('00');

        if(detectKey(e.key) === 0) {
          setIsPressed(detectKey(e.key))
          setResult(add(result, detectKey(e.key)));
        } 
        if(!detectKey(e.key)) return;

        setIsPressed(detectKey(e.key))
        setResult(add(result, detectKey(e.key)));
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
  }, [result, setResult]);

  useEffect(() => {
    if (isPressed || isPressed === 0) {
      const timeoutId = setTimeout(() => {
        setIsPressed(false);
      }, 300);
  
      return () => clearTimeout(timeoutId);
    }
  }, [isPressed]);  


    function selectBtn(obj){
      const {valueBtn, activeBtn} = obj;
      setResult(valueBtn);
      setActive(activeBtn);
    }
    
  return (
    <>
      <button 
        className={`${isPressed === 'c' ? 'button__animation' : ''} button button__special`}
        onClick={() => selectBtn(funBtn({key: 'cDelete'}, result))} 
        >{result > 1 ? 'C' : 'AC'}
      </button>
      
      <button 
        className={`${isPressed === 'backspace' ? 'button__animation' : ''} button button__special`}
        onClick={() => setResult(funBtn({key: 'backspace'}, result).valueBtn)} 
        >DEL
      </button>

      <button 
      className={`${isPressed === '.' ? 'button__animation' : ''} button button__special`}
      onClick={e => setResult(add(result, e.target.textContent))}
      >.
      </button>

      <button 
        className={`${active === 'divid' ? 'button__active' : ''} button button__special`}
        onClick={() => selectBtn(funBtn({key: 'divid'}, result))} 
        >/
      </button>

      <button 
        className={`${isPressed === 7 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >7
      </button>

      <button 
        className={`${isPressed === 8 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >8
      </button>
      <button 
        className={`${isPressed === 9 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >9
      </button>

      <button 
        className={`${active === 'multi' ? 'button__active' : ''} button button__special`}
        onClick={() => selectBtn(funBtn({key: 'multi'}, result))} 
        >*
      </button> 

      <button 
        className={`${isPressed === 4 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >4
      </button>

      <button 
        className={`${isPressed === 5 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >5
      </button>

      <button 
        className={`${isPressed === 6 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >6
      </button>

      <button 
        className={`${active === 'subtract' ? 'button__active' : ''} button button__special`}
        onClick={() => selectBtn(funBtn({key: 'subtract'}, result))} 
        >-
      </button>

      <button 
        className={`${isPressed === 1 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >1
      </button>

      <button 
        className={`${isPressed === 2 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >2
      </button>

      <button 
        className={`${isPressed === 3 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >3
      </button>

      <button 
        className={`${active === 'add' ? 'button__active' : ''} button button__special`}
        onClick={() => selectBtn(funBtn({key: 'add'}, result))} 
        >+
      </button>

      <button 
        className={`${isPressed === '00' ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
        >00
      </button>

      <button 
        className={`${isPressed === 0 ? 'button__animation' : ''} button`}
        onClick={e => setResult(add(result, e.target.textContent))}
      >0
      </button>

      <button 
        className={`${isPressed === 'equal' ? 'button__animation' : ''} button button__plus button__special button__equal`}
        onClick={() => selectBtn(funBtn({key: 'equal'}, result))} 
        >=
      </button>
    </>
  )
}

export default Buttons;
