import { dataUser } from "../../../data/dataUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import ProfileCard from "../../components/UI/profileCard";
import Breadcrumb from "../Breadcrumb";

export default function ListUsers() {
  const BREADCRUMB_ITEMS = [
      {
        name: "List Users",
        link: "",
      },
    ]; 
  const {
    users,
    pagination,
    totalPages,
    getData,
    handleNextPage,
    handlePrevPage,
  } = useUser();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (users) {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.first_name.toLowerCase().includes(search.toLowerCase()) ||
            user.last_name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, users]);

  useEffect(() => {
    getData();
  }, [pagination, getData]);

  const handleDetail = (user) => {
    navigate(`/detail-profile/${user.id}`);
  };
  if (!users) {
    return (
      <div className="flex items-center justify-center h-screen transition-colors bg-gray-50 dark:bg-gray-900">
        <span className="text-gray-900 loading loading-dots loading-lg dark:text-white"></span>
      </div>
    );
  }

  return (
    <section className="container mx-auto w-full pt-16 px-20 items-center bg-white border-gray-200 dark:bg-gray-900">
      <Breadcrumb items={BREADCRUMB_ITEMS}/>
      <div className="flex-1 w-full max-w-md pt-2">
        <form class="max-w-md mx-auto">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-blue-500 "
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              class="block w-full p-4 ps-10 text-sm text-blue-700 border border-blue-500 rounded-lg bg-gray-50"
              placeholder="Search name or email"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col pt-2">
        <div className="space-y-4">
          {(filteredUsers.length > 0 ? filteredUsers : dataUser).map((user) => (
            <ProfileCard
              onClick={() => handleDetail(user)}
              key={user.id}
              user={user}
            />
          ))}
        </div>
      </div>
      <nav className="flex justify-center px-4 pt-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ul className="inline-flex items-center gap-2 -space-x-px">
          <li>
            <button
              onClick={handlePrevPage}
              disabled={pagination.page === 1}
              className={`px-3 py-2 ml-0 leading-tight bg-gray-50 dark:bg-gray-900 transition-colors rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white ${
                pagination.page === 1
                  ? "text-gray-200 dark:text-gray-700 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 "
                  : "hover:bg-olive-50 border border-olive-600  text-olive-600 dark:text-olive-400 dark:hover:bg-olive-900/30 dark:hover:bg-gray-700 dark:hover:text-olive-500"
              }`}
            >
              Previous
            </button>
          </li>
          <li>
            <span className="px-3 py-2 leading-tight text-gray-500 ">
              Page {pagination.page}
            </span>
          </li>
          <li>
            <button
              onClick={handleNextPage}
              disabled={pagination.page >= totalPages}
              className={`px-3 py-2 ml-0 leading-tight bg-gray-50 dark:bg-gray-900 transition-colors rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white ${
                pagination.page >= totalPages
                  ? "text-gray-200 dark:text-gray-700 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-not-allowed"
                  : "hover:bg-olive-50 border border-olive-600  text-olive-600 dark:text-olive-400 dark:hover:bg-olive-900/30 dark:hover:bg-gray-700 dark:hover:text-olive-500"
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
