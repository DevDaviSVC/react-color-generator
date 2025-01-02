import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Values from "values.js";

function fromShortToNormal(short) {
  return `#${short[1]}${short[1]}${short[2]}${short[2]}${short[3]}${short[3]}`;
}

const ColorForm = ({ setColors }) => {
  const [currentColor, setCurrentColor] = useState("#f1f2c4");

  useEffect(() => {
    document.querySelector("input#textColor").value = "";
  }, [currentColor]);

  const handleBlur = (e) => {
    let firstCheck = e.target.value.match(/^#[a-f0-9]{6}$/gi);
    let secondCheck = e.target.value.match(/^#[a-f0-9]{3}$/);
    if (firstCheck || secondCheck) {
      setCurrentColor(
        firstCheck ? e.target.value : fromShortToNormal(e.target.value)
      );
      return;
    }

    toast.error("Invalid hex value!", {position: "top-center"});
    e.target.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let color = new Values(currentColor);
    console.log(color.all(10));
    
    setColors(color.all(10));
  };

  return (
    <>
      <h5>Color Generator</h5>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          id="color"
          onChange={(e) => setCurrentColor(e.target.value)}
          value={currentColor}
        />
        <input
          type="text"
          name="textColor"
          id="textColor"
          onBlur={handleBlur}
          placeholder={currentColor}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default ColorForm;
