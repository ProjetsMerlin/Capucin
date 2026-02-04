const Loading = ({message}) => {
return (
  <pre style={{ 
    color: 'ededed',
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem'
  }}>
  {message}
  </pre>
  )
};
export default Loading