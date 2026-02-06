const Author = ({ author }) => {
  return (
    <div className="author-section">
      <div className="author-card">
        <div className="author-avatar">
          <img
            src={author.node.avatar.url}
            title={author.node.name}
            alt={author.node.name}
          />
        </div>
        <div className="author-info">
          <h3 className="capitalize">{author.node.name}</h3>
          <p>{author.node.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Author
