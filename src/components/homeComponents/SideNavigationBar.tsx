import React from "react";

import { FaHome, FaUserFriends, FaTools } from "react-icons/fa";
import { FaRankingStar, FaEarthAmericas } from "react-icons/fa6";
import { SlDocs } from "react-icons/sl";
import { BsGrid1X2 } from "react-icons/bs";

const SideNavigationBar = () => {
  return (
    <>
      <nav className="flex flex-col justify-between h-screen list-none">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl mb-4">테스트</h1>
          <li className="flex items-center gap-2">
            <label>
              <FaHome />
            </label>
            <p>홈</p>
          </li>
          <li className="flex items-center gap-2">
            <label>
              <FaRankingStar />
            </label>
            <p>랭킹</p>
          </li>
          <li className="flex items-center gap-2">
            <label>
              <SlDocs />
            </label>
            <p>군장검사</p>
          </li>
          <li className="flex items-center gap-2">
            <label>
              <FaEarthAmericas />
            </label>
            <p>수집품</p>
          </li>
          <li className="flex items-center gap-2">
            <label>
              <FaUserFriends />
            </label>
            <p>길드</p>
          </li>
          <li className="flex items-center gap-2">
            <label>
              <FaTools />
            </label>
            <p>도구</p>
          </li>
          <li className="flex items-center gap-2">
            <label>
              <BsGrid1X2 />
            </label>
            <p>빠른도구</p>
          </li>
        </div>
        <div>
          <li>
            <p>시스템 현황</p>
          </li>
          <li>
            <p>모바일로 보기</p>
          </li>
          <li>
            <p>이용 약관</p>
          </li>
          <li>
            <p>개인정보처리방침</p>
          </li>
        </div>
      </nav>
    </>
  );
};

export default SideNavigationBar;
