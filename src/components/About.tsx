import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "src/styles";

const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"}>Introduction</p>
        <h2 className={"text-white font-black text-[30px] md:text-[60px] sm:text-[50px] xs:text-[40px]"}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
      >
          &nbsp;저는 창업을 계기로 개발을 공부하기 시작하여서 현재는 프론트 엔드 분야에서 Dart, Typescript, JavaScript,
          그리고 React, Nextjs, Flutter와 같은 프레임워크를 다룰줄 알며 Babylonjs, Threejs와 같은 3D 기반 기술을
          일부분 익혔습니다.<br />
          &nbsp;백엔드에서는 Go, Java, Python과 같은 언어를 배우고 Echo, Spring, Django와 같은 프레임워크를 익혔습니다.
          &nbsp;Devops에서는 Kubernetes 관련 자격증인 CKS, CKA를 취득 하고있으며 Jenkins, Docker, Helm과 Argocd를
          다룰줄 압니다.<br />
          &nbsp;저는 개발의 다양한 분야에 관심이 많으며 최대한 A-Z까지 알고자 하는 학구심과 열정을 가지고 탐구합니다. 또한
          배운 내용을 공유하고 싶은 욕구 또한 강하여서 스터디 리더와 세션을 열어 학우들을 가르치기도 하였습니다.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");