import "../assets/loader.css"

const Loading = ({ message }) => {
  return (
    <div className="wrap_loader">
      <svg
        className="loader"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke-dasharray="30"
          stroke-dashoffset="10"
        />
      </svg>
    </div>
  )
}
export default Loading
