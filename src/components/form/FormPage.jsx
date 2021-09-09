import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FormPage.style.css";

const vaildate = (barcode) => {
  const regx = /^[0-9]{9,16}$/;
  return regx.test(barcode);
};
function FormPage() {
  const [barcode, setBarCode] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const onChangeHandler = (event) => {
    setError(false);
    setBarCode(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    //console.log("BarCode is: ", barcode);
    if (vaildate(barcode)) {
      setError(false);
      history.push(`/result/${barcode}`);
    } else setError(true);
  };

  return (
    <div className="form-container">
      <form>
        <label htmlFor="barcode">Enter Barcode </label>
        <input
          type="text"
          id="barcode"
          value={barcode}
          onChange={onChangeHandler}
          placeholder="123456789"
        />
        {error && <p className="error">Please Enter Vaild Barcode!!</p>}
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
