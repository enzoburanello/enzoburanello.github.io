import React from 'react';
import { motion } from 'framer-motion';


const BlogWorkCard = ({ title, image1, description, image2, image3}) => {

  return (
<div
  className="w-[480px] h-[425px] relative"
>
<img className="w-full h-full z-20 relative" src="/Vector.svg" alt="" />

<div className="w-[470px] h-[420px] bg-slate-700 rounded-[70px] absolute -top-10 left-1 z-0"></div>

<h2 className='absolute top-1/2 left-10 z-50'>
  {title}
</h2>

<p>{description}</p>




<div className='z-10 absolute -top-10 left-1'>
  <img className='w-[420px] h-[420px] z-10 absolute -top-10 left-1' src={image1} alt="" />
<img className='w-[420px] h-[420px] z-10 absolute -top-10 left-1' src={image2} alt="" />
<img className='w-[420px] h-[420px] z-10 absolute -top-10 left-1' src={image3} alt="" />
</div>




</div>




  );
};

const BlogWorkList = () => {
  const blogs = [
    {
      title: 'All my Illustrations',
      description:'',
      image1:'/digital/BREAD.png',
      image2:'/flat/charac-flat1.png',
      image3:'/digital/Illustration-1.png',

      link:'',
    },
    {
      title: 'All my Illustrations',
      description:'',
      image1:'/digital/BREAD.png',
      image2:'/flat/charac-flat1.png',
      image3:'/digital/Illustration-1.png',
      link:'',
    },
    {
      title: 'All my Illustrations',
      description:'',
      image1:'/digital/BREAD.png',
      image2:'/flat/charac-flat1.png',
      image3:'/digital/Illustration-1.png',
        link:'',
    },
  ];

  return (
    <ul
     className="flex flex-col justify-center items-center px-60 gap-60">
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
