import React from 'react';
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';
import fs from "fs"
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map(fileName => {
    const filePath = `content/${fileName}`;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data} = matter(fileContent);
    return data
});

// Sample blogs array
// const blogs1 = [
//   {
//     title: 'First Blog Post',
//     description: 'This is the description for the first blog post.',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
//     slug: 'first-blog-post',
//     author: 'John Doe',
//     date: '2025-01-01',
//   },
//   {
//     title: 'Second Blog Post',
//     description: 'This is the description for the second blog post.',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
//     slug: 'second-blog-post',
//     author: 'Jane Smith',
//     date: '2025-01-02',
//   },
//   {
//     title: 'Third Blog Post',
//     description: 'This is the description for the third blog post.',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
//     slug: 'third-blog-post',
//     author: 'Alice Johnson',
//     date: '2025-01-03',
//   },
//   {
//     title: 'Fourth Blog Post',
//     description: 'This is the description for the fourth blog post.',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
//     slug: 'fourth-blog-post',
//     author: 'Bob Brown',
//     date: '2025-01-04',
//   },
//   {
//     title: 'Fifth Blog Post',
//     description: 'This is the description for the fifth blog post.',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
//     slug: 'fifth-blog-post',
//     author: 'Charlie Davis',
//     date: '2025-01-05',
//   },
//   {
//     title: 'Sixth Blog Post',
//     description: 'This is the description for the sixth blog post.',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
//     slug: 'sixth-blog-post',
//     author: 'Dana Evans',
//     date: '2025-01-06',
//   },
//   // Add more blog objects if needed
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.slice(0, 6).map((blog) => (
          <div
            key={blog.slug}
            className="bg-white dark:bg-black dark:border-2 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold dark:text-white mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {blog.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 my-2">
                By {blog.author} on {blog.date}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;