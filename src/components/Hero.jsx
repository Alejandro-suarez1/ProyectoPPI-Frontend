import CourseProgress from "./CourseProgress"

export default function Hero() {
  return (
    <section className="bg-green-900 min-h-screen text-white px-10">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div>

          <span className="bg-green-800 px-4 py-1 rounded-full text-sm">
            Plataforma Educativa DevGenius
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Aprende a <span className="text-green-400">programar</span>
            <br />
            desde cero
          </h1>

          <p className="mt-6 text-gray-300 max-w-md">
            Domina los lenguajes más demandados con cursos prácticos
            y seguimiento de tu progreso en tiempo real.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-500 px-6 py-3 rounded-full">
              Comenzar Ahora
            </button>

            <button className="border border-white px-6 py-3 rounded-full">
              Ver Cursos
            </button>
          </div>

        </div>

        {/* CURSOS */}
        <div className="flex flex-col gap-4">

          <CourseProgress
            title="Python — Básico"
            progress={60}
            icon="Py"
          />

          <CourseProgress
            title="HTML — Fundamentos"
            progress={85}
            icon="HTML"
          />

          <CourseProgress
            title="Java — Intermedio"
            progress={40}
            icon="Ja"
          />

          <CourseProgress
            title="CSS — Avanzado"
            progress={70}
            icon="CSS"
          />

        </div>

      </div>

    </section>
  )
}