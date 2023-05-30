import donate from "../assets/donate.svg";

const CTA = () => {
  return (
    <div
      id="donate"
      className="w-full h-[80vh] mt-10 flex flex-col  justify-self-center content-center items-center self-center  m-auto"
    >
      <div className="max-w-[1140px] flex flex-col  items-center  m-auto">
        <img src={donate} className="h-[30vw] md:h-[10vw] object-cover  " />
        <div className="w-full md:-[50%] max-w-[600px] h-full flex  flex-col items-center  text-black p-4">
          <h2 className="font-bold text-4xl py-8">Support BQC</h2>

          <p>
            If you'd like to support our cause, we invite you to donate via
            PayPal. Due to security reasons, we can't share our PayPal account
            openly.
          </p>
          {/* <p>
            {" "}
            Due to security reasons, we can't share our PayPal account openly.
          </p> */}
          <p className="font-bold mt-5">
            Please write to us at{" "}
            <span className="font-bold text-2xl text-pink">
              DonateToBQC@gmail. com
            </span>{" "}
            to get our PayPal details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
