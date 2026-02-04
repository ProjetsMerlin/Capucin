const Error = ({message}) => {
  return (
      <pre style={{ 
        background: "#ededed",
        color: 'red',
        textAlign: 'center',
        padding: '2rem',
        fontSize: '1.5rem'
      }}>
        {message}
      </pre>
  )
};
export default Error