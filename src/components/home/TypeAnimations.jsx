"use client";

import { TypeAnimation } from "react-type-animation";

const TypeAnimations = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent p-3 mx-3"
      sequence={[
        "W",
        1000,
        "Welcome to Cheap",
        1000,
        "Welcome to Best",
        1000,
        "Welcome to Market",
        1000,
        "Welcome to Al Ameer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
};
export default TypeAnimations;
