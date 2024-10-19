import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/loginGB.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
      className="bg-white relative items-center justify-center flex w-full h-[100vh]"
    >
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-[16px] justify-center pb-[40px]">
            <img src="/logo.svg" alt="" />
            <span className="text-[#EE5335] text-[24px] font-[400] ">LANO</span>
          </div>

          <div className="flex flex-col  pl-[50px] gap-[16px]">
            <input
              className=" h-[48px] py-[8px] text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
              placeholder="სახელი"
              {...register("name", { required: true })}
            />

            <input
              placeholder="პაროლი"
              className=" h-[48px] py-[8px] text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
              {...register("password", { required: true })}
            />
            {(errors.name || errors.password) && (
              <span className="text-[#EE5335] text-[13px] ">
                შეავსეთ ორივე ველი
              </span>
            )}
          </div>

          <div>
            <button
              className="bg-[#EE5335] text-[#FFFFFF] absolute bottom-[170px] right-[560.5px] w-[342px] h-[48px] rounded-[7px] py-[8px] px-[10px] text-[14px] font-[600] "
              type="submit"
            >
              შესვლა
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
