import { Link } from "react-router-dom"

const MainPage = () => {
  return (
    <div style={{display: "grid"}}>
      <p>Main page</p>
      <Link to='/contacts'>Contacts</Link>
    </div>
  )
}

export default MainPage

