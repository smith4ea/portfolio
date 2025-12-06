export default function Layout({ children }) {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {children}
      </div>
    </div>
  )
}