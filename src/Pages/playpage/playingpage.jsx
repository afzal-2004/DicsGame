// import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";
import { Button } from "../../Components/Button/Button";
import "./playingpagemodule.css";

export const Playingpage = () => {
  const gsapRef = useRef();

  const Selectbtn = [1, 2, 3, 4, 5, 6];

  const [openrules, setopenrules] = useState(false);
  const [btn, setbtn] = useState(null);
  const [score, setscore] = useState(0);
  const [dics_value, setdics_value] = useState(1);
  const [selectNo, setselectNo] = useState(0);
  const [error, seterror] = useState(false);

  const OpenRules = () => {
    setopenrules(!openrules);
  };
  const resetBtn = () => {
    setscore(0);
  };

  const RandomDiscGenrate = () => {
    if (!btn) {
      seterror(true);
      return;
    }
    seterror(false);
    setbtn(null);
    setdics_value(Math.floor(Math.random() * 6 + 1));
    if (selectNo === dics_value) {
      setscore((prev) => prev + dics_value);
    } else {
      setscore((prev) => prev - 2);
    }
  };

  return (
    <div>
      <header className="container ">
        <h1 className="Score  flex flex-wrap flex-col items-center">
          {" "}
          {score}
          <p className="  sm:text-[25px] text-[20px] font-semibold">
            Total score{" "}
          </p>
        </h1>
        <section>
          {error && !btn && (
            <>
              <h1 className=" text-red-500   text-[24px] font-normal">
                {" "}
                You have not selected any number
              </h1>
            </>
          )}
          <div className={`flex  flex-wrap gap-[15px]   justify-center  `}>
            {Selectbtn.map((items, index) => (
              <button
                key={index}
                className={`chossenbtn ${btn === items ? "blackbtn" : ""} `}
                onClick={() => {
                  setbtn(items);
                  setselectNo(items);
                }}
              >
                {items}
              </button>
            ))}
          </div>
          <p className="  selectbtn"> Select Number</p>
        </section>
      </header>
      <main className="  image_container">
        <img
          src={`/Images/dice_${dics_value}.svg`}
          alt=""
          onClick={RandomDiscGenrate}
          className=" dics_image"
          ref={gsapRef}
        />
        <h1 className=" text-[24px] font-medium"> Click On dics Roll</h1>

        <Button
          text={"Reset Score "}
          background={"bg-white"}
          color={"text-black"}
          event={resetBtn}
        />
        <Button
          text={" Show Game rules"}
          background={"bg-black"}
          color={"text-white"}
          event={OpenRules}
        />
        {openrules && (
          <>
            <div className=" bg-red-100 p-2">
              <h1 className=" font-bold text-[20px]">How to play dice game</h1>
              <p>Select any number</p>
              <p>Click on dice image</p>
              <p>
                after click on dice if selected number is equal to dice number
                you will get same point as dice
              </p>
              <p>if you get wrong guess then 2 point will be dedcuted</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
