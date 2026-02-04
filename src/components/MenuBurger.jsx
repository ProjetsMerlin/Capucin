const MenuBurger = ({ menuOpen, setMobileMenuOpen }) => {
  return (
    <button onClick={() => setMobileMenuOpen(!menuOpen)} className="menuBurger">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {menuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  )
}

export default MenuBurger