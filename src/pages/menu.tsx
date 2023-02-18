export const Menu = () => {
  return (
    <div>
         <h1 className="text-center mt-4 text-4xl text-sky-500 font-bold">MENU</h1>
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-sky-500 after:block after:h-1 after:w-full after:bg-sky-500">
          Asian Dishes
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Khung Pao Chicken</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Indian Curry</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Indian Curry</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-12">
        <h2 className="text-xl font-bold text-sky-500 after:block after:h-1 after:w-full after:bg-sky-500">
          Western Dishes
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Chicago Deep-Dish Pizza</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Double beef hamburger</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Buffalo Wings</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Roasted Chicken</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
          <div className="flex justify-between border-b-4 border-dashed py-4">
            <p>Meatloaf</p>
            <span className="bg-sky-200 px-1">$20</span>
          </div>
        </div>
      </div>
    </div>
  );
};
