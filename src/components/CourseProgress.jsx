export default function CourseProgress({ title, progress, icon }) {
  return (
    <div className="bg-green-700/60 backdrop-blur-md p-4 rounded-xl w-72 shadow-lg">

      <div className="flex items-center gap-3">

        <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-white text-sm font-semibold">{title}</h3>

          <div className="w-full bg-green-900 h-2 rounded-full mt-2">
            <div
              className="bg-orange-400 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

      </div>

    </div>
  )
}