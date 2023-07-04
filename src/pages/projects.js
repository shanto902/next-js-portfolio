import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/run-shadow-run-banner.jpg";
import project2 from "../../public/images/projects/lehalua-banner.png";
import project3 from "../../public/images/projects/nebula-banner.jpeg";
import project4 from "../../public/images/projects/dwd-globa-edu-banner.png";
import project5 from "../../public/images/projects/pregnant2parenting.png";
import project6 from "../../public/images/projects/amena-banner.png";
import project7 from "../../public/images/projects/servicechai-banner.png";
import project8 from "../../public/images/projects/musically.png";
import project9 from "../../public/images/projects/bistro_boss.png";
import project10 from "../../public/images/projects/toy-verse.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({
  type,
  title,
  summery,
  img,
  link,
  github,
  technology,
}) => {
  return (
    <article className=" w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12  dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {" "}
          {type}{" "}
        </span>
        <Link href={link} target="_blank">
          <h2 className=" my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <ul className="list-disc ml-4">
          {summery.split("•").map((item, index) => (
            <li
              key={index}
              className="my-2 font-medium text-dark dark:text-light sm:text-sm"
            >
              {item.trim()}
            </li>
          ))}
        </ul>

       { technology &&  <div className=" italic text-xs my-2">
          {" "}
          <span className="font-bold">Technologies</span>: {technology}
        </div>
}
        <div className=" mt-2 flex items-center justify-between w-full">
         {github &&  <Link href={github} target="_blank" className=" w-10">
            <GithubIcon />{" "}
          </Link>}
          <Link
            href={link}
            target="_blank"
            className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border border-solid border-dark hover:border-dark hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, img, link, github }) => {
  return (
    <article className=" w-full flex-col flex items-center justify-center rounded-2xl shadow-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 ">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className=" w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {" "}
          {type}{" "}
        </span>
        <Link href={link} target="_blank">
          <h2 className=" my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
         {github &&  <Link href={github} target="_blank" className=" w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>}
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Shanto&apos;s Workshop</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className=" pt-16">
          <AnimatedText
            text="Dive into My Project Showcase"
            className=" mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl 
            xs:!text-4xl"
          />
          <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className=" col-span-12">
              <FeaturedProjects
                title="Musically"
                img={project8}
                summery="Designed and developed a clean and modern website using Mongo, Express, ReactJs, Node
                • Optimized website for speed and user experience
                • Utilized responsive design to ensure compatibility across all devices
                • Used Tailwind CSS"
                link="https://vocal-vista.web.app/"
                github="https://github.com/shanto902/Musically"
                type="MERN Website"
                technology="React.js, React Router, Firebase, Tailwind, Node, Express, MongoDB, Git"
              />
            </div>

            <div className=" col-span-12">
              <FeaturedProjects
                title="Bistro Boss"
                img={project9}
                summery="A CRUD application exposed using a RESTful API made with Node.js
                • Exposed POST, GET, PATCH and DELETE HTTP methods using Express
                • Used TailwindCSS"
                link="https://bistro-boss-6004a.web.app/"
                github="https://github.com/shanto902/bistro-boss-client"
                type="MERN Website"
                technology="Node.js, Express, JavaScript, Firebase, Tailwind CSS, Git"
              />
            </div>

            <div className=" col-span-12">
              <FeaturedProjects
                title="Toy Verse"
                img={project10}
                summery="Developed a responsive website for Toy House using ReactJS, Node.js, and Express
                • Implemented optimizations for improved website speed and enhanced user experience
                • Utilized Tailwind CSS framework to ensure compatibility across various devices"
                link="https://toy-verse-6649e.web.app/"
                github="https://github.com/shanto902/Toy-Verse-Client"
                type="MERN Website"
                technology="Node.js, Express, JavaScript, Firebase, Tailwind CSS, Git"
              />
            </div>

            <div className=" col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Lehalua Website"
                img={project2}
                link="https://lehalua.com/"
                type="Wordpress E-Commerce"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title=" DWD Global Education"
                img={project4}
                link="https://dwdglobaledu.com/"
                type="Wordpress Website"
              />
            </div>

            <div className=" col-span-12 ">
              <FeaturedProjects
                title="Pregnant2Parenting"
                img={project5}
                summery="It’s a native app, developed on Android Studio with Java Language. Became 2nd in ranking on UK global pregnant app category in 2019"
                link="https://play.google.com/store/apps/details?id=com.deshiinc.pregnant2parenting"
                type="Android App"
              />
            </div>

            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Amena BD"
                img={project6}
                link="https://amena.com.bd/"
                type="Website"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="ServiceChai LTD"
                img={project7}
                link="https://servicechai.com/"
                type="Wordpress Website"
              />
            </div>
            <div className=" col-span-12">
              <FeaturedProjects
                title="Run Shadow Run"
                img={project1}
                summery="It’s an endless running 2D platform mobile game, made on Unity3D with C# language."
                link="https://apkcombo.com/run-shadow-run/com.deshiinc.runshadowrun/"
                type="Android Game"
              />
            </div>

            <div className=" col-span-12 ">
              <FeaturedProjects
                title="Nebula"
                img={project3}
                summery="It’s an eight Level 2d Platform Game with Boss Mode, Where hero have to rescue his Heroine from villain. Made on Unity3D with C# Language."
                link="https://mega.nz/file/QtQRxSKT#8UTz223bOGnINdrY5wg7Do2W5X-6hFJ63jn-IV6kpog"
                type="Android Game"
              />
            </div>
          </div>
        </Layout>
      </main>
      ;
    </>
  );
};

export default projects;
