
const CustomButton = ({text,onClick ,classname}) => {
  return (
    <button className={classname} onClick={onClick}>{text}</button>
  )
}

export default CustomButton
