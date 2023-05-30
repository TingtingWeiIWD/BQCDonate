import groupPic from "../assets/Picture6.png";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img src={groupPic} alt="/" className="w-full h-full object-cover" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="text-4xl py-4 ">Join Us in Making a Difference</h1>
          <p>
            Due to various reasons, we have no budget to create original music.
            Currently, all work is being done voluntarily. However, we are
            trying hard to find a grant that could provide compensation to our
            composers, lyricists, video shooting and editing team, and other
            workers as a token of appreciation for their effort and time.
            <br />
            <br />
            All the donations we receive will be used to create original music
            and its video.
          </p>
          <a
            href="#donate"
            className="flex max-w-sm  bg-pink hover:bg-fuchsia focus:outline-none text-white text-xl uppercase font-bold shadow-md rounded-lg mx-auto px-6 py-2 mt-4 md:ml-0 text-center"
          >
            Support BQC
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
