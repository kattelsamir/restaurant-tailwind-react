import { CarouselMain } from "./carousel-main";
import {Link} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Main = () => {
  return (
    <div>
      <CarouselMain />
      <h2 className="mt-7 text-center font-serif text-4xl">Welcome</h2>
      <div className="container mx-auto my-4 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat cumque vitae dolores
        fuga? Nisi pariatur veniam doloribus incidunt alias. Laudantium ut nobis quasi, atque
        exercitationem libero molestias fugit quia!
      </div>
      <div className="container my-20 grid grid-cols-1 mx-2 gap-8 sm:grid-cols-3 sm:mx-auto">
        <div className="flex flex-col items-center sm:block">
          <h1 className="text-xl font-bold">RESERVATIONS</h1>
          <p className="my-4 text-center sm:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad nam quae eos recusandae
            quibusdam porro tempora rerum rem non veniam, libero aperiam dolorem dolorum nobis
            accusamus sit, beatae ut.
          </p>
          <button className="rounded border-4 border-sky-500 bg-sky-500 p-2 font-semibold text-white duration-300 hover:bg-transparent hover:text-sky-500">
            <Link to="/reservations">Book Now</Link>
          </button>
        </div>
        <div className="flex flex-col items-center sm:block">
          <h1 className="text-xl font-bold">MENUS</h1>
          <p className="my-4 text-center sm:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad nam quae eos recusandae
            quibusdam porro tempora rerum rem non veniam, libero aperiam dolorem dolorum nobis
            accusamus sit, beatae ut.
          </p>
          <button className="rounded border-4 border-sky-500 bg-sky-500 p-2 font-semibold text-white duration-300 hover:bg-transparent hover:text-sky-500">
            <Link to="/menu">View Menus</Link>
          </button>
        </div>
        <div className="flex flex-col items-center sm:block">
          <h1 className="text-xl font-bold">CONTACT</h1>
          <p className="my-4 text-center sm:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad nam quae eos recusandae
            quibusdam porro tempora rerum rem non veniam, libero aperiam dolorem dolorum nobis
            accusamus sit, beatae ut.
          </p>
          <button className="rounded border-4 border-sky-500 bg-sky-500 p-2 font-semibold text-white duration-300 hover:bg-transparent hover:text-sky-500">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
