import React from 'react';
import fs from "fs";
import { notFound } from 'next/navigation';
import matter from 'gray-matter';

const BlogPost = ({ params }) => {
//   const blog = {
//     title: "Understanding React Hooks",
//     description:
//       "A deep dive into the world of React Hooks and how they can simplify your code. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium corrupti maiores mollitia vero quaerat fuga nihil quos delectus nam cum error magni quam ratione odit culpa molestiae cupiditate, dignissimos qui. A numquam iste quos fugit natus doloremque, repellat quae id sunt sed! Animi qui recusandae doloribus officia rem facere voluptate cupiditate ratione, quas impedit ex ea fugiat cum eveniet, libervoluptatum voluptas recusandae deleniti qui commodi natus repudiandae labore ducimus ea consequuntur asperiores at laudantium vitae possimus, quaerat quod eius, culpa repellat animi porro? Quae hic adipisci sapiente eos unde, obcaecati temporibus qui in impedit nihil, praesentium fuga nobis ducimus voluptates accusantium quia beatae, repellat enim asperiores id excepturi sint! Enim ullam optio et impedit dolorem reprehenderit ipsa ipsum blanditiis error cupiditate! Vel enim unde quas omnis consequuntur reprehenderit commodi repellendus culpa.",
//     image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
//     author: "John Doe",
//     date: "January 15, 2025",
//     slug: params.slug,
//   };

    const filePath = `content/${params.slug}.md`;
    if(!fs.existsSync(filePath)) {
        notFound();
        return;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const {data, content} = matter(fileContent);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        className="w-full h-72 object-cover mb-4"
        src={data.image}
        alt={data.title}
      />
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {data.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {data.description}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 italic">
        <span>By {data.author}</span>
        <span>{data.date}</span>
      </div>
      <div
        className="prose dark:prose-dark mt-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default BlogPost;