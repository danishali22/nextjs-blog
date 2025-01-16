---
title: Next JS Programming Tutorial
description: A comprehensive guide to Next.js programming, covering basic to advanced concepts.
slug: nextjs-tutorial
date: 02/03/2025
author: Danish Ali
image: https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg
---

# Next.js Programming Tutorial

Welcome to the **Next.js Programming Tutorial**! This guide will walk you through the fundamentals and advanced concepts of Next.js, a React-based framework for building server-rendered applications.

## Table of Contents

1. [Introduction to Next.js](#introduction-to-nextjs)
2. [Setting Up Your Project](#setting-up-your-project)
3. [Routing in Next.js](#routing-in-nextjs)
4. [API Routes](#api-routes)
5. [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
6. [Static Site Generation (SSG)](#static-site-generation-ssg)
7. [Dynamic Routes](#dynamic-routes)
8. [Conclusion](#conclusion)

## Introduction to Next.js

Next.js is a React framework that enables server-side rendering and static site generation. It simplifies building fast and SEO-friendly web applications.

### Features of Next.js

- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Image optimization
- Built-in CSS and Sass support

## Setting Up Your Project

To begin, make sure you have Node.js installed. Then, create a new Next.js project using Yarn:

```bash showLineNumbers
# Create a new Next.js application
yarn create next-app my-nextjs-app

# Navigate to your project directory
cd my-nextjs-app

# Start the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your application.

## Routing in Next.js

Next.js uses a file-based routing system. Create pages by adding files in the `pages` directory.

### Example: Adding a New Page

```javascript showLineNumbers {4-7}
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page.</p>
    </div>
  );
}
```

Navigate to `http://localhost:3000/about` to see your new page.

## API Routes

Next.js allows you to create backend APIs within the `pages/api` directory.

### Example: Creating an API Route

```javascript showLineNumbers
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, World!' });
}
```

Access your API at `http://localhost:3000/api/hello`.

## Server-Side Rendering (SSR)

SSR allows you to render pages on the server before sending them to the client.

### Example: Using `getServerSideProps`

```javascript showLineNumbers
// pages/ssr.js
export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data').then(res => res.json());

  return {
    props: {
      data,
    },
  };
}

export default function SSRPage({ data }) {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## Static Site Generation (SSG)

SSG generates static HTML pages at build time.

### Example: Using `getStaticProps`

```javascript showLineNumbers
// pages/ssg.js
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data').then(res => res.json());

  return {
    props: {
      data,
    },
  };
}

export default function SSGPage({ data }) {
  return (
    <div>
      <h1>Static Site Generated Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## Dynamic Routes

Dynamic routes allow you to create pages with dynamic paths.

### Example: Creating a Dynamic Route

```javascript showLineNumbers
// pages/post/[id].js
export async function getStaticPaths() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  const paths = posts.map(post => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetch(`https://api.example.com/posts/${params.id}`).then(res => res.json());

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
```

Access the dynamic route at `http://localhost:3000/post/1` (replace `1` with any valid ID).

## Conclusion

This tutorial introduced you to the basics and advanced features of Next.js. By exploring topics like routing, SSR, SSG, and dynamic routes, you can build powerful and efficient web applications. Experiment with these features and take your Next.js skills to the next level!
