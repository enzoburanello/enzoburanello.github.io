import React from "react";
import { motion } from "framer-motion";

const BlogWorkCard = ({ title, image0, image1, image2, image3, link}) => {
  return (
    
    <motion.div 
    initial={{ opacity: 0, y: 80, scale: 1 }} // Initialement réduit en taille
  whileInView={{ opacity: 1, y: 0, scale: 1.1 }} // Scale normal une fois visible
  viewport={{ once: false, amount: 0.5 }} 
  transition={{ duration: 0.5 }}
    className="group w-[480px] h-[425px] relative">
      <a className="absolute w-full h-full z-50" href={link}></a>
      <img className="w-full h-full z-20 relative shadow-[5px_10px_20px_rgba(0,0,0,0.3) " src="/folder.svg" alt="" />
      

      {/* fond en arriere plan */}
      <div className="w-[470px] h-[420px] bg-[#686460] rounded-[70px] absolute -top-10 left-1 z-0" ></div>



      <div className="absolute top-32 left-10 z-50 flex flex-col justify-start items-start gap-8">
        <div className="w-9 h-9">
               <img className="w-full h-full" src={image0} alt="" />
        </div>
   
        <h2 className="font-poppins font-bold text-4xl">{title}</h2>
      </div>
      

      <ul className="z-10 absolute -top-10 left-5">
        <li className="
          transition-all
          w-[390px] h-[390px] z-10 absolute top-4 rotate-3 left-5 aspect-square object-cover
          group-hover:-top-8 group-hover:left-14
        ">
          <img
            className="aspect-square object-cover rounded-[70px]  shadow-[5px_10px_10px_rgba(0,0,0,0.3)]
            transition-all
            group-hover:shadow-[5px_10px_20px_rgba(0,0,0,0.3)]"
            src={image1}
            alt=""
          />
        </li>

        <li className="w-[390px] h-[390px] z-10 absolute top-4 left-5 
        group-hover:-top-8 group-hover:left-4
        transition-all">
          <img
            className="aspect-square object-cover rounded-[70px]  shadow-[5px_10px_10px_rgba(0,0,0,0.3)]
            transition-all
            group-hover:shadow-[5px_10px_20px_rgba(0,0,0,0.3)]"
            src={image2}
            alt=""
          />
        </li>

        <li className="w-[390px] h-[390px] z-10 absolute -rotate-3 top-4 left-5 
        group-hover:-top-4 group-hover:-left-1
        transition-all">
          <img
            className="aspect-square object-cover rounded-[70px]  shadow-[5px_10px_10px_rgba(0,0,0,0.3)]
            transition-all
            group-hover:shadow-[5px_10px_20px_rgba(0,0,0,0.3)]"
            src={image3}
            alt=""
          />
        </li>
      </ul>
    </motion.div>
  );
};

const BlogWorkList = () => {
  const blogs = [
    {
      title: "All My Illustrations",
      image0:"crayon.png",
      image1: "/digital/BREAD.png",
      image2: "/flat/charac-flat1.png",
      image3: "/digital/Illustration-1.png",

      link: "/blog/first-post",
    },
    {
      title: "My Motion Design",
      image0:"",
      image1: "/digital/BREAD.png",
      image2: "/flat/charac-flat1.png",
      image3: "/digital/Illustration-1.png",
      link: "",
    },
    {
      title: "UX/UI Designs",
      image0:"",
      image1: "/digital/BREAD.png",
      image2: "/flat/charac-flat1.png",
      image3: "/digital/Illustration-1.png",
      link: "",
    },
  ];

  return (
    <ul className="flex flex-col justify-center items-center px-60 gap-80">
      {blogs.map((blog, index) => (
        <li key={index}>
          <BlogWorkCard
            title={blog.title}
            image1={blog.image1}
            image2={blog.image2}
            image3={blog.image3}
            image4={blog.image4}
            image5={blog.image5}
            link={blog.link}
          />
        </li>
      ))}
    </ul>
  );
};

export default BlogWorkList;
