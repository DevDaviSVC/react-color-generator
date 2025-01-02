const Color = ({color}) => {
  let hexColor = color.hexString();
  let textColor = color.type === "tint" || color.type === "base" ? "black" : "white";

  const handleClick = () => {
    navigator.clipboard.writeText(hexColor);
  }

  return (
    <div className="color" style={{backgroundColor: hexColor, color: textColor}} onClick={handleClick}>
      <p>{color.weight}%</p>
      <p>{hexColor}</p>
    </div>
  )
}
export default Color;