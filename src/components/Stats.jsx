export default function Stats() {
  return (
    <section className="bg-gray-200 py-8">
      
      <div className="max-w-6xl mx-auto grid grid-cols-4 text-center">

        <div className="border-r border-gray-300">
          <h2 className="text-3xl font-bold text-green-800">
            1,200+
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Estudiantes activos
          </p>
        </div>

        <div className="border-r border-gray-300">
          <h2 className="text-3xl font-bold text-green-800">
            24
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Cursos disponibles
          </p>
        </div>

        <div className="border-r border-gray-300">
          <h2 className="text-3xl font-bold text-green-800">
            8
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Lenguajes
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-800">
            98%
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Satisfacción
          </p>
        </div>

      </div>

    </section>
  )
}