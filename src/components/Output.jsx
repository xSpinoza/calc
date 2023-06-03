import { useContext } from "react";
import Context from "../context/Context";

const Output = (props) => {
    const { result } = useContext(Context);

    const addC = num => {
      const parts = num.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join('.');
    }

  return (
    <div className="output">
        <p className="output__text">{addC(result)}</p>
    </div>
  )
}

export default Output;