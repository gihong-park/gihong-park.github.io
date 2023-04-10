import { motion } from "framer-motion";
import { Component, ReactNode } from "react";

import { styles } from "src/styles";
import { staggerContainer } from "src/utils/motion";
import { JsxElement } from "typescript";

export default function StartWrapper(component: () => JSX.Element, idName: string) {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

      {component()}
      </motion.section>
    );
  };
}