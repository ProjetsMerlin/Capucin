import Breadcrumbs from "../components/Breadcrumbs"
import IconDate from "../components/Icons/IconDate"
import IconUser from "../components/Icons/IconUser"

function cleanDate(dateISO) {
  const date = new Date(dateISO)

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }

  return new Intl.DateTimeFormat("fr-FR", options).format(date)
}

const Hero = ({ data }) => {
  const postImage = data.featuredImage?.node?.sourceUrl
    ? "url('" + data.featuredImage?.node?.sourceUrl + "')"
    : "var(--primary_color)"

  return (
    <section
      className="hero"
      style={{
        background: postImage,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero_wrap">
        <h1>{data.title}</h1>
        <div className="hero-meta">
          <Breadcrumbs text={cleanDate(data.date)} Icon={IconDate} />
          <Breadcrumbs text={data.author.node.name} Icon={IconUser} />
        </div>
      </div>
    </section>
  )
}

export default Hero
