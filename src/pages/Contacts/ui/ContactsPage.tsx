import { Link } from "react-router-dom"

const ContactsPage = () => {
  return (
    <div style={{display: "grid"}}>
      <p>Contacts page</p>
      <Link to='/'>Main</Link>
    </div>
  )
}

export default ContactsPage