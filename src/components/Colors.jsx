import Color from "./Color";

const Colors = ({colors}) => {
  return (
    <div className="colors">
        {colors.map(color => (
          <Color color={color} key={color.hexString()}/>
        ))}
    </div>
  )
}
export default Colors;