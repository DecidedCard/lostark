import React from "react";

const SideNavigationBar = () => {
  return (
    <>
      <nav className="flex flex-col justify-between h-screen list-none">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl mb-4">테스트</h1>
          <li>
            <p>홈</p>
          </li>
          <li>
            <p>랭킹</p>
          </li>
          <li>
            <p>군장검사</p>
          </li>
          <li>
            <p>수집품</p>
          </li>
          <li>
            <p>길드</p>
          </li>
          <li>
            <p>도구</p>
          </li>
          <li>
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
