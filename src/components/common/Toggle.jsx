import { Link } from "react-router-dom"

const Toggle = ({text,linktext,link}) => {
  return (
    <div className="d-flex align-items-center">
      <p className="p-0 m-0">{text}</p>
      <Link to={link}> {linktext} </Link>
    </div>
  )
}

export default Toggle
