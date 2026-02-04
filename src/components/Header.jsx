import "../assets/header.css"

const Header = ({ children }) => {
  return (
    <nav>
      <div className="wrap_header">{children}</div>
    </nav>
  )
}
export default Header
