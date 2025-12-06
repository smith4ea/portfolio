export default function Layout({ children }) {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        {children}
      </div>
    </div>
  )
}