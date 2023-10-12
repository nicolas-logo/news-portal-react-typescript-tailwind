
import logo from "./../assets/images/logo.svg" 
import Navbar from "../components/navbar" 

const header = () => {
  return (
    <header className="flex place-content-between items-center mb-14">
      <img src={logo} alt="Logo" className="" /> 
      <Navbar />
    </header>
  )
}

export default header
