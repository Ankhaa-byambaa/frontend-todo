import { DeletButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

type TaskProps = {
  inputValue: string;
};
export function Task({ inputValue }: TaskProps) {
  //   const [check, setCheck] = useState("");
  //   const handleOnChange(){
  //     setCheck(e.target.value)
  //   }
  function isDone() {}
  return (
    <>
      <div className="w-[345px] h-[62px] border-2 border-gray-300 bg-[#F9FAFB] flex  items-center text-[14px] gap-3 py-3 px-2 rounded-md justify-between">
        <>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-secondary ml-3"
          />
          <p className="text-md">take a nap~</p>
        </>

        <div className="mr-3 flex gap-1">
          <EditButton />
          <DeletButton />
        </div>
      </div>
    </>
  );
}
