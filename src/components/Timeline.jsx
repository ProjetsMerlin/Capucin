import "../assets/timeline.css"

const Timeline = ({ author }) => {
  return (
    <div id={author.node.name} className="timeline-item">
      <div className="timeline-content">
        <div className="timeline-date">
          <img
            src={author.node.avatar.url}
            title={author.node.name}
            alt={author.node.name}
          />
        </div>
        <div className="timeline-title">{author.node.name}</div>
        <div className="timeline-description">{author.node.description}</div>
      </div>
    </div>
  )
}

export default Timeline
