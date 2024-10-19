interface FillterOneFieldProps {
  title: string;
  fillterItems: {
    value: string;
  }[];
  fillter: string;
  setFillter: React.Dispatch<React.SetStateAction<string>>;
}

export default function FillterOneField({
  title,
  fillterItems,
  fillter,
  setFillter,
}: FillterOneFieldProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-[14px] text-[#000000] font-semibold">{title}</p>
      <div className="flex gap-[10px] items-center">
        {fillterItems.map((item) => {
          return (
            <div
              className={`p-[10px] bg-[#F7F7F9] rounded-[7px] cursor-pointer ${
                fillter === item.value
                  ? "border-[1px] border-[#EE5335] text-[#EE5335]"
                  : ""
              }`}
              key={item.value}
              onClick={() => setFillter(item.value)}
            >
              <p className={`text-[14px]`}>{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
