import { Carousel } from "react-responsive-carousel";
export const CarouselMain = () => {
  return (
    <Carousel
      autoPlay
      interval={5000}
      transitionTime={1000}
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      className="container mx-auto"
      dynamicHeight={false}
    >
      <div>
        <img
          src="https://menagerierestaurant.co.uk/wp-content/uploads/2022/10/VH2_2945-2-scaled-2.jpg"
          alt=""
          className="h-screen object-cover"
        />
      </div>
      <div>
        <img
          src="https://menagerierestaurant.co.uk/wp-content/uploads/2022/10/F6A18D91-65E8-4469-9C96-1F680239AC38-1-min-1-2.png"
          alt=""
          className="h-screen object-cover"
        />
      </div>    
      <div>
        <img
          src="https://menagerierestaurant.co.uk/wp-content/uploads/2022/10/1395DF77-5F49-4C6A-B07D-59FD635CF662-min-1-1-1.png"
          alt=""
          className="h-screen object-cover"
        />
      </div>
      <div>
        <img
          src="https://menagerierestaurant.co.uk/wp-content/uploads/2022/10/VH2_3001-2-scaled-1.jpg"
          alt=""
          className="h-screen object-cover"
        />
        ={" "}
      </div>
    </Carousel>
  );
};
