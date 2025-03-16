import React from "react";
import { MailOpen, Phone, Briefcase } from "lucide-react";
import { dataUser } from "../../../data/dataUser";

const ProfileCard = ({ user, onClick }) => {
  // Cari pengguna yang sesuai di mockUsers berdasarkan user.id
  const mockUser = dataUser.find((mockUser) => mockUser.id === user.id);

  return (
    <div
      className="flex flex-col  gap-2 bg-gray-50 shadow-lg shadow-indigo-700/50 items-center lg:flex-row container mx-auto justify-between p-4 hover:bg-blue-700  rounded-lg hover:shadow-lg transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center flex-wrap-reverse w-full gap-4 space-x-4 mb-4 lg:mb-0">
        <img
          src={mockUser.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="object-cover w-16 h-16 rounded-full"
        />

        <div className="flex justify-between flex-wrap-reverse items-center w-full">
          <h2 className="text-lg font-semibold flex-wrap-reverse text-gray-900 dark:text-white">
            {mockUser.first_name} {user.last_name}
          </h2>
          <div className="flex flex-wrap-reverse items-center space-x-2">
            <MailOpen className="w-4 h-4" />
            <span className="flex flex-wrap-reverse">{mockUser.email}</span>
          </div>

          <div className="flex flex-wrap-reverse items-center space-x-2">
            <Phone className="w-4 h-4 flex flex-wrap-reverse" />
            <span className="flex flex-wrap-reverse">
              {mockUser ? mockUser.phone : "N/A"}
            </span>
          </div>

          <div className="flex flex-wrap-reverse items-center space-x-2">
            <Briefcase className="w-4 h-4" />
            <h2 className="flex flex-wrap-reverse text-lg font-semibold text-gray-900 dark:text-white">
              {mockUser.role}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
