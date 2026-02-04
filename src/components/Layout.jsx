import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useData } from "../context/DataContext"
import { gql } from "@apollo/client"
import { useAppQuery } from "../hooks/useAppQuery"
import Header from "../components/Header"
import MobileMenu from "../components/MobileMenu"
import MenuBurger from "../components/MenuBurger"
import Footer from "../components/Footer"

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const GET_MENUS = gql`
    query GetMenus {
      generalSettings {
        title
        description
        url
        siteIconUrl(size: 24)
        language
      }
      users {
        nodes {
          name
          url
          description
        }
      }
      menus {
        nodes {
          menuItems {
            nodes {
              id
              label
              target
              uri
              order
            }
          }
        }
      }
    }
  `

  const { data: jsonData, loading: dataLoading, error: dataError } = useData()
  const { loading, error, data } = useAppQuery(GET_MENUS)
  if (error || dataError) return error
  if (loading || dataLoading) return loading
  const navigation = data?.menus?.nodes[0]
  const menuItems = jsonData.content.fr.navigation ?? [
    navigation.menuItems.nodes
  ]
  const generalSettings = data?.generalSettings ?? []
  const userinfo = data?.users?.nodes[0] ?? []
  return (
    <div className="capucin">
      <Header>
        <div className="wrap_menu">
          <Link to="/">
            <h1>{jsonData.title ?? generalSettings.title}</h1>
          </Link>
          <menu className="menu">
            {menuItems.map((item, index) => (
              <Link
                key={"menuLink_" + index}
                to={item.uri.split("/")[1]}
                className={
                  isActive("/" + item.uri.split("/")[1]) ? "active_link" : ""
                }
              >
                {item.label}
              </Link>
            ))}
          </menu>
          <MenuBurger
            setMobileMenuOpen={setMobileMenuOpen}
            menuOpen={mobileMenuOpen}
          />
        </div>
        {mobileMenuOpen && (
          <MobileMenu
            menu={menuItems}
            setMobileMenuOpen={setMobileMenuOpen}
            isActive={isActive}
          />
        )}
      </Header>
      <main className="flex-1">{children}</main>
      <Footer
        menu={menuItems}
        userInfo={userinfo}
        generalSettings={generalSettings}
        traduction={jsonData}
      />
    </div>
  )
}
export default Layout