import React from 'react';

export const SaveButton = ({ onSave }) => {
  return (
    <button
      type="submit"
      class="transition mt-4 duration-200 bg-black hover:bg-black-200 focus:bg-black-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-3/4 py-3 rounded-3xl text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block "
      onClick={onSave}
    >
      Save
    </button>
  );
};

export const CancelButton = ({ onClick }) => {
  return (
    <button
      type="button"
      class="transition mt-4 duration-200  hover:bg-black-200 focus:bg-black-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-3/4 py-3 rounded-3xl text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block text-black "
      onClick={onClick}
    >
      Cancel
    </button>
  );
};

const variants = {
  TaskButton:
    "transition duration-200 mt-4 bg-black hover:bg-black-200 focus:bg-black-700 focus:shadow-sm  text-white w-full py-4 rounded-e-full text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",
  LocationButton:
    "transition duration-200 mt-4 bg-black hover:bg-black-200 focus:bg-black-700 focus:shadow-sm  text-white w-full py-4 rounded-e-full text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",
  logout:
    "mt-80 mb transition duration-200 mt-4 bg-white hover:bg-black-200 focus:bg-black-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-black w-full py-4 rounded-e-full text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",
  skip: "absolute left-[206px] top-[90px]  text-black text-xs",
  remind: "left-[251px] top-[90px] absolute text-black text-xs font-normal",
};
export const Button = ({
    className,
    variant = "primary",
    ...props
}) => {
    return (
      <button
        className={` inline-flex justify-center items-center border border-transparent mt-2 rounded-md font-medium shadow-sm
            focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
            ${variants[variant]}
        `}
        {...props}
      />
    );
}