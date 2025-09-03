
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
            <ul>
            <NavLink to={'/'} className={({isActive}) => isActive ? 'underline text-green-700' : 'text-blue-800'}>Home</NavLink>
            <NavLink to={'/about'} className={({isActive}) => isActive ? 'underline text-green-700' : 'text-blue-800'}>About</NavLink>
            <NavLink to={'/contact'} className={({isActive}) => isActive ? 'underline text-green-700' : 'text-blue-800'}>Contact</NavLink>
            </ul>
        <Outlet />
    </div>
  )
}

export default Layout