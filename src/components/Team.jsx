import teamPic from "../assets/Picture8.png";

const Team = () => {
  return (
    <div className="relative top-1 ">
      <h2 className="p-4 z-10 relative top-[80px] md:top-[130px] md:pl-40 max-w-[1140px] m-auto w-full md:flex text-xl md:text-3xl lg:text-4xl text-gray-100">
        Together, <br />
        we sing for a better world.
      </h2>
      <img src={teamPic} alt="/" className="w-full h-full object-cover" />
    </div>
  );
};

export default Team;
