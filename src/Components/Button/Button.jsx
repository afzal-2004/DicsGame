/* eslint-disable react/prop-types */

export const Button = ({ text, background, color, event }) => {
  return (
    <button
      onClick={event}
      className={`${background} ${color} px-[25px] py-2  rounded-md  float-right border-2 border-black`}
    >
      {text}
    </button>
  );
};
