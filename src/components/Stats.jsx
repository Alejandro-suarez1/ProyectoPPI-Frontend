export default function Stats() {
  const stats = [
    {
      value: "1,200+",
      label: "Estudiantes activos"
    },
    {
      value: "24",
      label: "Cursos disponibles"
    },
    {
      value: "8",
      label: "Lenguajes"
    },
    {
      value: "98%",
      label: "Satisfacción"
    }
  ]

  return (
    <section className="bg-gray-200 py-8">
      
      <div className="max-w-6xl mx-auto grid grid-cols-4 text-center">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="border-r last:border-none border-gray-300"
          >
            <h2 className="text-3xl font-bold text-green-800">
              {stat.value}
            </h2>

            <p className="text-gray-600 text-sm mt-1">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}