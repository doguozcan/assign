import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="font-mono">
      <section className="p-5 bg-orange-400 flex justify-center">
        <Link to="/" className="text-xl text-white">
          Tasks
        </Link>
      </section>
      <Outlet />
    </div>
  )
}
export default Navbar
