import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
interface IFormInput {
  name: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    const success = login(data.name, data.password);
    if (success) {
      toast.success("Login successful!");
      navigate("/");
      console.log("Login successful!");
    } else {
      toast.error("Invalid credentials");
      console.log("Invalid credentials");
    }
  };

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
      className="bg-white items-center justify-center flex w-full h-[100vh]"
    >
      <ToastContainer />
      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-[16px] justify-center pb-[40px]">
            <img src="/logo.svg" alt="" />
            <span className="text-[#EE5335] text-[24px] font-[400] ">LANO</span>
          </div>

          <div className="flex flex-col  pl-[50px] gap-[16px]">
            <input
              className=" h-[48px] py-[8px] text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
              placeholder="სახელი"
              {...register("name", { required: "სახელი სავალდებულოა" })}
            />

            <input
              placeholder="პაროლი"
              type="password"
              className=" h-[48px] py-[8px] text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
              {...register("password", { required: "პაროლი სავალდებულოა" })}
            />
            <div className="h-[5px]">
              {(errors.name || errors.password) && (
                <span className="text-[#EE5335]  text-[13px] ">
                  შეავსეთ ორივე ველი
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              className="bg-[#EE5335] text-[#FFFFFF] absolute bottom-[-80px]  w-[342px] h-[48px] rounded-[7px] py-[8px] px-[10px] text-[14px] font-[600] "
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
