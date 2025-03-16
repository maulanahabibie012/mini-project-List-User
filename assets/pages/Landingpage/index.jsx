import { FaLinkedinIn, FaGithubSquare, FaTwitterSquare , FaFacebook  } from "react-icons/fa";
const Landingpage = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center bg-blue-300 lg:py-16 lg:px-12">
        <a
          href={"/login"}
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-primary-600 rounded-full text-blue-700 px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span class="text-sm font-medium">
            let's Login to get the best experience
          </span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Let's Explore The World
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Explore a variety of amazing destinations around the world and experience the charm of each season at every step of your unforgettable journey.
        </p>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span class="font-semibold text-gray-400 uppercase">FEATURED IN</span>
          <div class="flex flex-wrap justify-around items-center mt-8 text-gray-500 sm:justify-between">
            <FaGithubSquare className=" w-16 h-16" />
            <FaLinkedinIn className=" w-16 h-16" />
            <FaTwitterSquare className=" w-16 h-16" />
            <FaFacebook className=" w-16 h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
