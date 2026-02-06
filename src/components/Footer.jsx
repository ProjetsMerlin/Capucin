import { Link } from "react-router-dom"
import "../assets/footer.css"

const Footer = ({ menu, userInfo, generalSettings, traduction }) => {
  return (
    <div>
      <footer className="footer_wrapper">
        <div>
          <h1>{generalSettings.title}</h1>
          <p>{generalSettings.description}</p>
        </div>
        <div>
          <h3>{traduction.content.fr.navigationTitle}</h3>
          <ul className="footer_menu">
            {menu.map((item, index) => (
              <li key={"linkFooter_" + index}>
                <Link to={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{traduction.content.fr.contactTitle}</h3>
          <p>{userInfo.description}</p>
        </div>
      </footer>
      <aside>
        <p>
          {generalSettings.title} - {traduction.content.fr.poweredBy + " "}
          <a href={userInfo.url}>{userInfo.name}</a> -{" "}
          {new Date().getFullYear()}
        </p>
      </aside>
    </div>
  )
}
export default Footer
