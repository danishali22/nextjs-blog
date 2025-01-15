import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              Tailwind CSS
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white dark: text-black transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-10 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-center mb-2">
              Pricing Plans
            </h2>
            <p className=" text-gray-600 text-lg dark:text-gray-400">
              Choose the plan that suits you best
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-md w-full mx-4 sm:mb-5">
              <h2 className="text-2xl font-bold mb-2">Basic Plan</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                $10/month
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-400">
                  <s>10GB Storage</s>
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  <s>Basic Support</s>
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  <s>Single User</s>
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Community Access
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Weekly Updates
                </li>
              </ul>
              <Button className="mx-1 mt-2" variant="outline">
                Choose Plan
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-md w-full mx-4 border-4 border-yellow-500 dark:border-purple-500 relative sm:mb-5">
              <span className="absolute top-2 right-2 bg-yellow-400 dark:bg-purple-400  text-black text-xs font-bold px-2 py-1 rounded-full">
                Best Seller
              </span>
              <h2 className="text-2xl font-bold mb-2">Standard Plan</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                $20/month
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-400">
                  50GB Storage
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Priority Support
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Up to 5 Users
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Community Access
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Daily Updates
                </li>
              </ul>
              <Button className="mx-1 mt-2" variant="outline">
                Choose Plan
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-md w-full mx-4 sm:mb-5">
              <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                $30/month
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 dark:text-gray-400">
                  200GB Storage
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  24/7 Support
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Unlimited Users
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Community Access
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  Real-time Updates
                </li>
              </ul>
              <Button className="mx-1 mt-2" variant="outline">
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-xs w-full mx-4">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "This service has changed my life! Highly recommend to everyone."
            </p>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-500">CEO, Company A</p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-xs w-full mx-4">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Amazing experience! The team was very professional and
              attentive."
            </p>
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-500">Marketing Director, Company B</p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-xs w-full mx-4">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "I couldn't be happier with the results! Truly a game changer."
            </p>
            <h3 className="text-xl font-bold">Alice Johnson</h3>
            <p className="text-gray-500">Founder, Company C</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center mb-8">Top Blogs</h1>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-lg w-full mx-4">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              alt="Blog 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold my-3">Blog Title 1</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of the blog post that highlights its main
              points and attracts readers.
            </p>
            <Button className="m-2" variant="outline" href="/blog-post-3">
              Read More
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-lg w-full mx-4">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              alt="Blog 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold my-3">Blog Title 2</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of the blog post that highlights its main
              points and attracts readers.
            </p>
            <Button className="m-2" variant="outline" href="/blog-post-3">
              Read More
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-lg w-full mx-4">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              alt="Blog 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold my-3">Blog Title 3</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of the blog post that highlights its main
              points and attracts readers.
            </p>
            <Button className="m-2" variant="outline" href="/blog-post-3">
              Read More
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-lg w-full mx-4">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              alt="Blog 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold my-3">Blog Title 4</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of the blog post that highlights its main
              points and attracts readers.
            </p>
            <Button className="m-2" variant="outline" href="/blog-post-3">
              Read More
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-lg w-full mx-4">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              alt="Blog 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold my-3">Blog Title 5</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of the blog post that highlights its main
              points and attracts readers.
            </p>
            <Button className="m-2" variant="outline" href="/blog-post-3">
              Read More
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out max-w-lg w-full mx-4">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              alt="Blog 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold my-3">Blog Title 6</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of the blog post that highlights its main
              points and attracts readers.
            </p>
            <Button className="m-2" variant="outline" href="/blog-post-3">
              Read More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
