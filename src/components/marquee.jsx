import { motion } from "framer-motion";
import React from "react";

function Marquee() {
    return (
      <div data-scroll data-scroll-section data-scroll-speed='.2' className="w-full py-20 rounded-tl-3xl text-white rounded-tr-3xl bg-[#004D43]">
        <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden  whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[22vw] leading-none font-['Founders_Grotesk'] uppercase pt-10 -mb-[4vw] font-semibold pr-20"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[22vw] leading-none font-['Founders_Grotesk'] uppercase pt-10 -mb-[7vw] font-semibold pr-20"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[22vw] leading-none font-['Founders_Grotesk'] uppercase pt-10 -mb-[7vw] font-semibold"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    );
}
export default Marquee