const Taxonomies = ({ tax }) => {
  if (!tax[0].edges && !tax[1].edges) {
    return false
  }

  return (
    <div className="taxonomies">
      {tax[1].edges.map((post, index) => (
        <>
          <div className="category-group">
            <span key={"tag_" + index} className="category">
              {post.node.name}
            </span>
          </div>
        </>
      ))}

      {tax[0].edges.map((post, index) => (
        <>
          <div className="taxonomy-group">
            <span key={"tag_" + index} className="tag">
              {post.node.name}
            </span>
          </div>
        </>
      ))}
    </div>
  )
}

export default Taxonomies
