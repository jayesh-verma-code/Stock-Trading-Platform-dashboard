import React from "react";
import {CircleUserRound, UserRound, LogOut, CircleDot, HandHelping, UserRoundPlus, Command} from 'lucide-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UserBarActive = () => {
  const handleLogout = async () => {
  try {
    const result = await axios.get("http://localhost:8080/logout", { withCredentials: true });

    if (result.data.success) {
      window.location.href = "http://localhost:5173/";
    } else {
      alert("Wrong request");
    }
  } catch (err) {
    console.error("Logout failed", err);
    alert("Something went wrong");
  }
};


  return (
    <div className="absolute z-50 top-[13rem] md:top-[6rem] right-[1rem] flex flex-col border-[#c8c8c8ac] border-2 rounded-[5px] bg-[#ffffff]">
      <div className="p-[1.5rem] pr-[8rem] flex flex-col border-[#c8c8c8ac] border-b-2">
        <h2 className="text-[2rem] font-[500]">Zerodha User</h2>
        <p className="text-[1.3rem]">hello@zerodha.com</p>
      </div>

      <div className="flex p-[1rem] border-[#c8c8c8ac] border-b-2 text-[1.5rem] items-center gap-[1rem]">
        <span>
          <UserRound size={16} strokeWidth={2.5} />
        </span>
        <span>Profile</span>
      </div>

      <div className="flex flex-col gap-[1rem] py-[1rem] border-[#c8c8c8ac] border-b-2">
        <div className="flex px-[1rem]  text-[1.5rem] items-center gap-[1rem]">
          <span>
            <CircleDot size={16} strokeWidth={2.5} />
          </span>
          <span>Console</span>
        </div>

        <div className="flex px-[1rem]  text-[1.5rem] items-center gap-[1rem]">
          <span>
            <CircleDot size={16} strokeWidth={2.5} />
          </span>
          <span>Coin</span>
        </div>

        <div className="flex px-[1rem]  text-[1.5rem] items-center gap-[1rem]">
          <span>
            <HandHelping size={16} strokeWidth={2.5} />
          </span>
          <span>Support</span>
        </div>

        <div className="flex px-[1rem]  text-[1.5rem] items-center gap-[1rem]">
          <span>
            <UserRoundPlus size={16} strokeWidth={2.5} />
          </span>
          <span>Invite friends</span>
        </div>
      </div>

      <div className="flex flex-col gap-[1rem] py-[1rem]">
        <div className="flex px-[1rem]  text-[1.5rem] items-center gap-[1rem]">
          <span>
            <UserRoundPlus size={16} strokeWidth={2.5} />
          </span>
          <span>Tour Kite</span>
        </div>

        <div className="flex px-[1rem]  text-[1.5rem] items-center gap-[1rem]">
          <span>
            <Command size={16} strokeWidth={2.5} />
          </span>
          <span>Keyboard shortcuts</span>
        </div>

        <div className="flex px-[1rem]  text-[1.5rem] items-center gap-[1rem]">
          <span>
            <HandHelping size={16} strokeWidth={2.5} />
          </span>
          <span>Help</span>
        </div>

        <div onClick={handleLogout} className="flex px-[1rem] text-[1.5rem] rounded-[5px] items-center gap-[1rem] text-red-500 py-[0.5rem] hover:bg-red-100">
            <span>
              <LogOut size={16} strokeWidth={2.5} />
            </span>
            <span>Logout</span>
          </div>
      </div>
    </div>
  );
};

export default UserBarActive;
