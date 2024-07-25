import React from "react";

import { FaHome, FaUserFriends, FaTools } from "react-icons/fa";
import { FaRankingStar, FaEarthAmericas } from "react-icons/fa6";
import { SlDocs } from "react-icons/sl";
import { BsGrid1X2 } from "react-icons/bs";
import Link from "next/link";

const SideNavigationBar = () => {
  return (
    <>
      <nav className="flex flex-col justify-between w-36 h-screen list-none border-r border-solid border-primary-200">
        <section className="flex flex-col gap-2 text-text-100">
          <h1 className="font-bold text-3xl mb-4">테스트</h1>
          <li>
            <Link href={"/"} className="flex items-center gap-2">
              <label>
                <FaHome />
              </label>
              <p>홈</p>
            </Link>
          </li>
          <li>
            <Link href={"/ranking"} className="flex items-center gap-2">
              <label>
                <FaRankingStar />
              </label>
              <p>랭킹</p>
            </Link>
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
        </section>

        <section className="text-text-200 text-xm">
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
        </section>
      </nav>
    </>
  );
};

export default SideNavigationBar;
