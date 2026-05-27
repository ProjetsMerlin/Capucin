import { useState } from "react"

const ButtonGroup = ({
  buttons = [],
  onButtonClick = () => {},
  defaultActive = 0,
  variant = "outline",
  size = "md",
}) => {
  const [activeButton, setActiveButton] = useState(defaultActive)

  const handleClick = (index, callback) => {
    setActiveButton(index)
    if (callback) callback()
    onButtonClick(index)
  }

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const getButtonClasses = (index) => {
    const baseClasses = `${sizeClasses[size]} font-medium transition-all duration-200 border`
    const isActive = index === activeButton

    if (variant === "solid") {
      return isActive
        ? `${baseClasses} bg-blue-600 text-white border-blue-600`
        : `${baseClasses} bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200`
    }

    if (variant === "outline") {
      return isActive
        ? `${baseClasses} bg-blue-600 text-white border-blue-600`
        : `${baseClasses} bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600`
    }

    return baseClasses
  }

  return (
    <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden shadow-sm">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(index, button.onClick)}
          className={getButtonClasses(index)}
          disabled={button.disabled}
          title={button.title || button.label}
        >
          {button.icon && <span className="mr-2">{button.icon}</span>}
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup
