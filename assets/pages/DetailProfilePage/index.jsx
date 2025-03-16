import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";



const DetailProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const BREADCRUMB_ITEMS = [
    {
      name: "List Users",
      link: "/",
    },
    {
      name: "Detail Profile",
      link: `/detail-profile/${userId}`,
    },
  ];
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/users/${userId}`);
        setUser(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, [userId]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen transition-colors bg-gray-50 dark:bg-gray-900">
        <span className="text-gray-900 loading loading-dots loading-lg dark:text-white"></span>
      </div>
    );
  }

  return (
    <div className="transition-colors bg-white dark:bg-gray-900">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="container mx-auto w-full pt-16 px-20 items-center bg-white border-gray-200 dark:bg-gray-900">
        <Breadcrumb items={BREADCRUMB_ITEMS} />
        <div className="flex flex-col items-center justify-center mt-8 ">
          
          <img
            src={user.avatar}
            className=" border-4 border-blue-500 shadow-lg w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-indigo-500  shadow-indigo-500/50"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">{`${user.first_name} ${user.last_name}`}</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">{user.email}</p>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-2">
          <div className="flex flex-wrap items-center gap-2 curso">
            <AiFillGithub className="text-2xl text-gray-500 dark:text-gray-400" />
            <AiFillLinkedin className="text-2xl text-gray-500 dark:text-gray-400" />
            <AiFillMediumCircle className="text-2xl text-gray-500 dark:text-gray-400" />
            <AiFillTwitterCircle className="text-2xl text-gray-500 dark:text-gray-400" />
          </div>
          <h1 className="font-normal items-center text-gray-600 mt-6">
            Passionate UI/UX designer focused on creating intuitive and engaging
            digital experiences. Driven by design thinking, creativity, and a
            love for problem-solving.
          </h1>
        </div>
        
   
      </div>
      
       
    </div>
  );
};

export default DetailProfilePage;
