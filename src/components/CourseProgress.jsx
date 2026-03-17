export default function CourseProgress() {
  const courses = [
    { title: "Python — Básico", progress: 60, icon: "Py" },
    { title: "HTML — Fundamentos", progress: 85, icon: "HTML" },
    { title: "Java — Intermedio", progress: 40, icon: "Ja" },
    { title: "CSS — Avanzado", progress: 70, icon: "CSS" }
  ]

  return (
    <>
      {courses.map((course, index) => (
        <div key={index} className="bg-green-700/60 backdrop-blur-md p-4 rounded-xl w-72 shadow-lg">

          <div className="flex items-center gap-3">

            <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold">
              {course.icon}
            </div>

            <div className="flex-1">
              <h3 className="text-white text-sm font-semibold">{course.title}</h3>

              <div className="w-full bg-green-900 h-2 rounded-full mt-2">
                <div
                  className="bg-orange-400 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

            </div>

          </div>

        </div>
      ))}
    </>
  )
}