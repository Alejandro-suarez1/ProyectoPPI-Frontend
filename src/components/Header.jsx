import Menu from "./Menu"

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-green-900 text-white">
      
      <div className="font-bold text-lg">
        DevGenius
      </div>

      <Menu />

      <button className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-400">
        Acceder
      </button>

    </nav>
  )
}