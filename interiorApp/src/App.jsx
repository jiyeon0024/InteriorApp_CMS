import Video from "./assets/video/video.mp4";
import Button2 from "./components/Button2";
function App() {
  return (
    <div>
      <div className="relative">
        <video autoPlay loop muted className=" w-full">
          <source src={Video} type="video/mp4" />
        </video>
        <h1 className="absolute top-1/4 px-28 text-7xl  text-white w-full">
          <span className="text-5xl text-white">Good design begins with</span>{" "}
          DAESUNG.
        </h1>
        <div className="absolute top-2/4 left-1/2 translate-x-[-50%]">
          <Button2 className="text-white">Get Started Now</Button2>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl p-5 mb-10 ">
          Online Interior Design Service For Any Space
        </h1>
        <div className="flex justify-center gap-20   ">
          <div className="h-2/5 w-1/4 ">
            <img
              src="./public/img/meeting.jpg"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h1 className="text-2xl mb-3">1. Tell us your needs</h1>
            <p className="w-96 text-gray-600">
              To start your design project you'll complete a quick and easy
              questionnaire, let us know your preferences, attach photos of your
              room, and choose the inspiration you love.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-20  mt-20 ">
          <div>
            <h1 className="text-2xl mb-3">
              2. Receive custom proposals from multiple designers
            </h1>
            <p className="w-96 text-gray-600">
              Get multiple design concepts based on your assessment and budget.
              Choose your favorite professional designer to help translate your
              vision.
            </p>
          </div>
          <div className="h-2/5 w-1/4 ">
            <img
              src="./public/img/proposals.jpg"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="flex justify-center gap-20   mt-20  ">
          <div className="h-2/5 w-1/4 ">
            <img
              src="./public/img/meeting2.jpg"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h1 className="text-2xl mb-3">
              3. Work closely with your chosen designer
            </h1>
            <p className="w-96 text-gray-600">
              Your designer will work with you to bring your design to life.
              They'll use the perfect combination of new and existing pieces,
              review and refine your custom-made 3D model, floor plan, color
              palette and shopping list with you.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-20   mt-20  ">
          <div>
            <h1 className="text-2xl mb-3">4. Order and track your items</h1>
            <p className="w-96 text-gray-600">
              To start your design project you'll complete a quick and easy
              You'll have the flexibility to buy the items on your own timeline
              as needed. Our white-glove shopping concierge service never
              expires and ensures that you'll get the best price possible with
              our exclusive discounts saving you $1000s.
            </p>
          </div>
          <div className="h-2/5 w-1/4 ">
            <img
              src="./public/img/order.jpg"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="flex justify-center gap-20   mt-20 mb-20 ">
          <div className="h-2/5 w-1/4 ">
            <img
              src="./public/img/result.jpg"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h1 className="text-2xl mb-3">5. Enjoy your dream room design!</h1>
            <p className="w-96 text-gray-600">
              To start your design project you'll complete a quick and easy
              You'll have the flexibility to buy the items on your own timeline
              as needed. Our white-glove shopping concierge service never
              expires and ensures that you'll get the best price possible with
              our exclusive discounts saving you $1000s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
