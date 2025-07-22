import React, {useEffect, useState} from "react";
import { Clock, SquareMinus } from "lucide-react";
import axios from 'axios';

const Summary = ({mobileNumber}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/getUser/${mobileNumber}`);
        setUserData(res.data);  // Correct way to set resolved data
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    if (mobileNumber) fetchUser();
  }, [mobileNumber]);  
  return (
    <div className="flex p-[3rem]">
      <div className="flex flex-col w-full gap-[1rem]">
        <h1 className="text-[2.5rem] py-[1.5rem] border-[#c8c8c8ac] border-b-1 font-[500] text-gray-700">
          Hi, {userData.name}
        </h1>

        <div className="flex flex-col gap-[1rem] text-gray-700 py-[4rem] border-[#c8c8c8ac] border-b-1">
          <div className="flex items-center gap-[1rem]">
            <span>
              <Clock size={16} strokeWidth={1} />
            </span>
            <span className="text-[1.8rem]">Equity</span>
          </div>

          <div className="flex gap-[10rem] p-[3rem] items-center">
            <div>
              <h2 className="text-[4rem]">
                3.74k <span className="text-[1.3rem]"></span>
              </h2>
              <p className="text-[1.3rem]">Margin available</p>
            </div>
            <div className="text-[1.3rem]">
              <p>
                Margin used: <span className="font-[500]">0</span>
              </p>
              <p>
                Opening balance: <span className="font-[500]">3.74k</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem] text-gray-700 py-[4rem] border-[#c8c8c8ac] border-b-1">
          <div className="flex items-center gap-[1rem]">
            <span>
              <SquareMinus size={16} strokeWidth={1} />
            </span>
            <span className="text-[1.8rem]">Holding (15)</span>
          </div>

          <div className="flex gap-[10rem] p-[3rem] items-center">
            <div className="text-green-500">
              <h2 className="text-[4rem]">
                1.55k <span className="text-[1.3rem]">+5.24</span>
              </h2>
              <p className="text-[1.3rem] text-gray-700">P&L</p>
            </div>
            <div className="text-[1.3rem]">
              <p>
                Current value: <span className="font-[500]">0</span>
              </p>
              <p>
                Investment: <span className="font-[500]">3.74k</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
