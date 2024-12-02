import React from 'react';
import { motion } from 'framer-motion';


const BlogCard = ({ title, description, image, reverse }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }} 
    transition={{ duration: 0.8 }} 
      className={`flex flex-row px-40 py-20 w-[1250px] h-[600px] bg-white justify-between items-center gap-40 rounded-[38px] ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <img className="w-72 h-72 rounded-[38px]" src={image} alt={title} />
      <div className="flex flex-col justify-start items-start gap-10 font-poppins">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const BlogList = () => {
  const blogs = [
    {
      title: 'Graphic Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellat ab quibusdam vero quo harum, exercitationem veritatis incidunt illum. Laudantium vitae veniam facere reiciendis quia, voluptate porro omnis deleniti tempora!',
      image: '/blog-placeholder-5.jpg',
      reverse: false,
    },
    {
      title: 'Web Development front-end',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellat ab quibusdam vero quo harum, exercitationem veritatis incidunt illum. Laudantium vitae veniam facere reiciendis quia, voluptate porro omnis deleniti tempora!',
      image: '/blog-placeholder-5.jpg',
      reverse: true,
    },
    {
      title: 'Project Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellat ab quibusdam vero quo harum, exercitationem veritatis incidunt illum. Laudantium vitae veniam facere reiciendis quia, voluptate porro omnis deleniti tempora!',
      image: '/blog-placeholder-5.jpg',
      reverse: false,
    },
  ];

  return (
    <ul
     className="flex flex-col px-60 gap-10">
      {blogs.map((blog, index) => (
        <li key={index}>
          <BlogCard
            title={blog.title}
            description={blog.description}
            image={blog.image}
            reverse={blog.reverse}
          />
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
