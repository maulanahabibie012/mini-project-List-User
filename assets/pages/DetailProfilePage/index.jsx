import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import DetailProfileSkills from "../../components/ui/detailProfileSkill";
import DetailProfileExperiences from "../../components/ui/detailProfileExperience";
import { MessageSquare, Phone } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

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
  const getUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${userId}`);
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
    <div className="transition-colors bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-0 z-50">
      <Navbar />
      </div>
      <div className="min-h-screen pt-16">
        <div className="max-w-5xl pb-20 mx-auto">
          <Breadcrumb items={BREADCRUMB_ITEMS} />
          <div className="relative">
            <div className="rounded-lg h-36 sm:h-48 bg-olive-600">
              <img
                src="https://images.unsplash.com/photo-1633432695542-b2c8e2b8a26c?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cover"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute -bottom-16 left-4 sm:left-8">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="border-4 border-white shadow-lg w-28 h-28 sm:w-32 sm:h-32 rounded-2xl dark:border-gray-800"
              />
            </div>
            <div className="absolute flex gap-2 top-4 right-4 sm:gap-3">
              <button className="p-2 transition-colors bg-gray-100 rounded-full sm:p-3 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-olive-700 dark:text-olive-300" />
              </button>
              <button className="p-2 transition-colors bg-gray-100 rounded-full sm:p-3 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-olive-700 dark:text-olive-300" />
              </button>
            </div>
          </div>
          <div className="px-4 mt-20 sm:px-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">{`${user.first_name} ${user.last_name}`}</h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </div>
          <DetailProfileSkills />
          <DetailProfileExperiences />
        </div>
      </div>
    </div>
  );
};

export default DetailProfilePage;
