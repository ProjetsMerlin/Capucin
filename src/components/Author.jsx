const Author = ({ author }) => {
  return (
    <div className="author-section">
      <div className="author-card">
        <div className="author-avatar">
          <img src={author.node.avatar.url} alt="" />
        </div>
        <div className="author-info">
          <h3 class="capitalize">{author.node.name}</h3>
          <p>{author.node.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Author
