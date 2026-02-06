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
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600')",
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
