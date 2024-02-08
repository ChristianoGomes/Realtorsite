"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./image-slider";
;


const Slide = () => {
  const images = [
    "https://images.unsplash.com/photo-1652225820071-e162dbaea4da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1618431851758-e591cf2e1fd8?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://photo-cdn2.icons8.com/EJGNt0Fa1rPdo5w8qz4IPCHyyygCwO_1yR2UNxWvG-A/rs:fit:1611:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9iODZjNzMwYjhi/YTc0ZDZiODcwMzY3/MWY3MTlkZjI3Yy5q/cGc.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem] lg:shadow-top" images={images}>
    <motion.div
      initial={{
        opacity: 0,
        y: -80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="z-50 flex flex-col justify-center items-center"
    >
      <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4">
        Your Sunny Isles Beach <span className="bold-1">Expert</span> <br /> Real Estate Agent
      </motion.p>
   
    </motion.div>
  </ImagesSlider>
  )
}

export default Slide