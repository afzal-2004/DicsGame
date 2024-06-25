/* eslint-disable react/prop-types */
import "./Landing.css";
import Dics from "../../../public/Images/dices 1.png";
import { Button } from "../../Components/Button/Button";

export const Landing = ({ event }) => {
  return (
    <>
      <div className="   md:flex justify-between">
        <section className="">
          <img src={Dics} alt="" />
        </section>
        <section className="flex flex-col  justify-center  ">
          <h1
            className=" uppercase font-bold  sm:text-[95px] 
          text-[40px]  text-nowrap  flex flex-col justify-center  items-center "
          >
            Dics Game
          </h1>
          <div>
            <Button
              text={"Play now"}
              background={"bg-black"}
              color={"text-white"}
              event={event}
            />
          </div>
        </section>
      </div>
    </>
  );
};
