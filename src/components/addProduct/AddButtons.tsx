

const AddButtons = () => {
  return (
    <div className="flex gap-5 mt-5 p-5">
      <button
        type="button"
        className="text-[#00000099] text-sm  px-[10px] py-[8px] border border-[#00000099] rounded-[7px] w-[154px]"
      >
        გასუფთავება
      </button>
      <button
        type="button"
        className="text-white font-semibold  bg-[#EE5335] rounded-[7px] px-[10px] py-[8px] w-[154px]"
      >
        შენახვა
      </button>
    </div>
  );
};

export default AddButtons;
