export function HomePageSkeleton() {
  return (
    <div className="flex w-52 items-center justify-center flex-col gap-4">
      <div className="skeleton h-4 w-28"></div>
      <div className=" flex gap-2 items-center">
        <div className="skeleton h-[32px] w-[280px]"></div>
        <div className="skeleton w-[27px] h-[17px]"></div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="skeleton h-[15px] w-[14px]"></div>
        <div className="skeleton h-[15px] w-[38px]"></div>
        <div className="skeleton h-[15px] w-[63px]"></div>
      </div>
      <div className="skeleton h-4 w-[30px]"></div>
      <div className="skeleton h-2 w-[25px]"></div>
    </div>
  );
}
