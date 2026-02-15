
const Input = ({type,placeholder,value,setvalue}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={(e)=>setvalue(e.target.value)} className="forminput"/>
  )
}

export default Input
