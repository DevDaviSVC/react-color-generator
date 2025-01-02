import { useState } from "react";
import ColorForm from "./components/ColorForm";
import Colors from "./components/Colors";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(() => {
       let color = new Values("#f1f2c4");
       return color.all(10);
  });

  return (
    <section>
      <div className="container">
        <ColorForm setColors={setColors}/>
      </div>
      <Colors colors={colors} />
    </section>
  );
};
export default App;
