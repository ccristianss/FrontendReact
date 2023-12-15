import { NavLink } from "react-router-dom";

const NavbarComponent = () => {


    const activeStyle = 'underline underline-offset-4';

    return (
        <div className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light bg-cyan-950 text-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg gap-3">
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Products'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Categories'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Categorias
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Profile'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Perfil
                    </NavLink>
                </li>
            </ul>
        </div>
    );

};

export default NavbarComponent;