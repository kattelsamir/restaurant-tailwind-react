import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div>
        <div className="mx-auto w-full p-3">
          <ul className="flex justify-center gap-9">
            <li className=" cursor-pointer text-gray-500 duration-300 hover:text-sky-500 font-mono">
              <Link to="/">HOME</Link>
            </li>
            <li className=" cursor-pointer text-gray-500 duration-300 hover:text-sky-500 font-mono">
              <Link to="/menu">MENU</Link>
            </li>
            <li className=" cursor-pointer text-gray-500 duration-300 hover:text-sky-500 font-mono">
              <Link to="/reservations">RESERVATIONS</Link>
            </li>
            <li className=" cursor-pointer text-gray-500 duration-300 hover:text-sky-500 font-mono">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
