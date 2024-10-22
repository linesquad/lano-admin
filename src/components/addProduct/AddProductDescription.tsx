const AddProductDescription = () => {
  return (
    <div className="p-5 bg-white rounded-2xl mt-[29px] w-[493px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#000] font-semibold leading-normal">
          ინფორმაცია პროდუქტზე
        </h2>

        <div>
          <label
            htmlFor="productName"
            className="text-[#000] text-sm leading-normal"
          >
            პროდუქტის დასახელება
          </label>
          <input
            id="productName"
            type="text"
            placeholder="დასახელება"
            className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000]"
          />
        </div>

        <div>
          <label
            htmlFor="productDescription"
            className="text-[#000] text-sm leading-normal"
          >
            პროდუქტის აღწერა
          </label>
          <textarea
            id="productDescription"
            className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] min-h-[96px]"
            placeholder="პროდუქტის აღწერა"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddProductDescription;
