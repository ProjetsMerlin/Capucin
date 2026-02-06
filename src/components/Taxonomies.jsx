const Taxonomies = ({ tax }) => {
  if (!tax[0].edges && !tax[1].edges) {
    return false
  }

  return (
    <div className="taxonomies">
      {tax[1].edges.map((post, index) => (
        <div key={"category_" + index} className="category-group">
          <span className="category">{post.node.name}</span>
        </div>
      ))}

      {tax[0].edges.map((post, index) => (
        <div key={"tag_" + index} className="taxonomy-group">
          <span className="tag">{post.node.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Taxonomies
