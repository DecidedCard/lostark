import React from "react";

const Schedule = () => {
  return (
    <div className="m-2 p-1 w-4/5 border border-solid border-primary-200 rounded-lg">
      <h2 className="border-b border-solid border-primary-200">오늘의 일정</h2>

      <section className="flex justify-between">
        <label>모험 섬</label>
        <div className="flex gap-2">
          <p>예정된시간</p>
          <p>남은시간</p>
        </div>
      </section>

      <section className="border-b border-solid border-primary-200">
        <ol className="flex justify-between">
          <label>모험 섬</label>
          <p>보상</p>
        </ol>
        <ol className="flex justify-between">
          <label>모험 섬</label>
          <p>보상</p>
        </ol>
        <ol className="flex justify-between">
          <label>모험 섬</label>
          <p>보상</p>
        </ol>
      </section>

      <section className="my-2 border-b border-solid border-primary-200">
        <label>이주의 쌀섬</label>
        <div className="flex justify-evenly my-2">
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            수
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            목
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            금
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            토
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            일
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            월
          </ol>
          <ol className="flex justify-center items-center w-6 h-6 rounded-full bg-accent-100">
            화
          </ol>
        </div>
      </section>

      <section className="flex justify-between">
        <label>필드보스</label>
        <div className="flex gap-2">
          <p>에정된시간</p>
          <p>남은시간</p>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
