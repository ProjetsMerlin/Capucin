import { Link } from "react-router-dom"

const MobileMenu = ({ menu, setMobileMenuOpen, isActive }) => {
  return (
    <div className="mobileMenu">
      {menu.map((item, index) => (
        <Link
          key={"mobileLink_" + index}
          to={item.uri.split("/")[1]}
          onClick={() => setMobileMenuOpen(false)}
          className={
            isActive("/" + item.uri.split("/")[1]) ? "active_link" : ""
          }
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default MobileMenu