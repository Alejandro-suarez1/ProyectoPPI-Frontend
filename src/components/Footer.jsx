export default function Footer() {
  return (
    <footer className="bg-green-900  text-white py-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <div className="font-bold text-lg mb-4">
            DevGenius
          </div>
          <p className="text-gray-300 text-sm">
            Plataforma educativa para aprender programación desde cero.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-300">Inicio</a></li>
            <li><a href="#" className="hover:text-green-300">Cursos</a></li>
            <li><a href="#" className="hover:text-green-300">Logros</a></li>
            <li><a href="#" className="hover:text-green-300">Foro</a></li>
            <li><a href="#" className="hover:text-green-300">Sobre Nosotros</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <p className="text-gray-300 text-sm">
            Email: info@devgenius.com<br />
            Teléfono: +123 456 7890
          </p>
        </div>

      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2026 DevGenius. Todos los derechos reservados.
      </div>
    </footer>
  )
}