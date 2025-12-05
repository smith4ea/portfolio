export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <nav className="bg-slate-900 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Evan Smith</h1>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Evan</h2>
          <p className="text-xl text-slate-300">
            I'm a UX Designer/Engineer.
          </p>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-slate-300">Description of your first project</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-slate-300">Description of your second project</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-300">Email: smithevandaniel@gmail.com</p>
        </section>
      </main>
    </div>
  )
}