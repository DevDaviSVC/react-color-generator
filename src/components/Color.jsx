const Color = ({color}) => {
  let hexColor = color.hexString();
  let textColor = color.type === "tint" || color.type === "base" ? "black" : "white";
  return (
    <div className="color" style={{backgroundColor: hexColor, color: textColor}}>
      <p>{color.weight}%</p>
      <p>{hexColor}</p>
    </div>
  )
}
export default Color;