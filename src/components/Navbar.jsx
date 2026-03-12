export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-green-900 text-white">
      
      {/* Logo */}
      <div className="font-bold text-lg">
        DevGenius
      </div>

      {/* Links */}
      <ul className="flex gap-8 text-sm">
        <li className="hover:text-green-300 cursor-pointer">Inicio</li>
        <li className="hover:text-green-300 cursor-pointer">Cursos</li>
        <li className="hover:text-green-300 cursor-pointer">Logros</li>
        <li className="hover:text-green-300 cursor-pointer">Foro</li>
        <li className="hover:text-green-300 cursor-pointer">Sobre Nosotros</li>
      </ul>

      {/* Botón */}
      <button className="bg-green-500 px-4 py-2 rounded-full hover:bg-green-400">
        Acceder
      </button>

    </nav>
  )
}