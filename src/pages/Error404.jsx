function Error404() {
  const page = "404"

  return (
    <section className="section">
      <div className={page}>
        {page && (
          <div className="max-w-3xl mx-auto p-4 text-center">
            <h1>404 ERROR</h1>
          </div>
        )}
      </div>
    </section>
  )
}

export default Error404
