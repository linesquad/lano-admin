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
    const success = login(data.name, data.password);
    if (success) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="w-full flex justify-end">
      <div className="bg-white relative flex items-center justify-end w-[1400px] ">
        <ToastContainer />
        <div className="w-[324px] ">
          <form
            className="flex flex-col absolute  right-[439px] bottom-[160px]  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="pl-[40px] mb-[20px]">
              <div className="flex items-center gap-[16px] justify-center pb-[40px]">
                <img src="/logo.svg" alt="" />
                <span className="text-[#EE5335] text-[24px] font-[400]">
                  LANO
                </span>
              </div>

              <div className="flex flex-col  gap-[16px]">
                <input
                  className="h-[48px] py-[8px] text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
                  placeholder="სახელი"
                  {...register("name", { required: "სახელი სავალდებულოა" })}
                />

                <input
                  placeholder="პაროლი"
                  type="password"
                  className="h-[48px] py-[8px]  text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
                  {...register("password", { required: "პაროლი სავალდებულოა" })}
                />
                <div className="h-[20px]">
                  {(errors.name || errors.password) && (
                    <span className="text-[#EE5335]  text-[13px]">
                      შეავსეთ ორივე ველი
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-[#EE5335]  text-[#FFFFFF] w-[342px] h-[48px] rounded-[7px] py-[8px] px-[10px] text-[14px] font-[600] "
                type="submit"
              >
                შესვლა
              </button>
            </div>
          </form>
        </div>
        <img className="h-[700px]" src="/loginGB.svg" alt="" />
      </div>
    </div>
  );
}
