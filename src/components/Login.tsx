import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLoginData from "../hook/usePostCredentials";
import { setupSessionAuth } from "../services/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  username: string;
  password: string;
}

export default function Login() {
  const { mutate: creds, data: isAuthenticated } = useLoginData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setupSessionAuth({ isAuthenticated: Boolean(isAuthenticated) });
      if (isAuthenticated) {
        toast.success("თქვენ წარმატებით შეხვედით სისტემაში");
        navigate("/");
      } else {
        toast.error("სისტემაში შესვლა ვერ ხერხდება");
        navigate("/login");
      }
    }
  }, [isAuthenticated]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    creds(data);
  };

  return (
    <div>
      <div className="bg-white relative mx-auto flex items-center justify-center w-[1200px] h-[700px]">
        <ToastContainer />
        <div className="w-[324px]">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[70px] mb-[20px]">
              <div className="flex items-center gap-[16px] justify-center pb-[40px]">
                <img src="/logo.svg" alt="logo" />
                <span className="text-[#EE5335] text-[24px] font-[400]">
                  LANO
                </span>
              </div>

              <div className="flex flex-col gap-[16px]">
                <input
                  className="h-[48px] py-[8px] text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
                  placeholder="სახელი"
                  {...register("username", { required: "სახელი სავალდებულოა" })}
                />

                <input
                  placeholder="პაროლი"
                  type="password"
                  className="h-[48px] py-[8px] text-[14px] w-[342px] px-[16px] rounded-[7px] border border-[#00000066] bg-[#FFF]"
                  {...register("password", { required: "პაროლი სავალდებულოა" })}
                />

                <div className="h-[20px]">
                  {(errors.username || errors.password) && (
                    <span className="text-[#EE5335] text-[13px]">
                      შეავსეთ ორივე ველი
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                className="bg-[#EE5335] ml-[-40px] text-[#FFFFFF] w-[342px] h-[48px] rounded-[7px] py-[8px] px-[10px] text-[14px] font-[600]"
                type="submit"
              >
                შესვლა
              </button>
            </div>
          </form>
        </div>

        <img
          className="h-[700px] absolute top-[0px] right-[-20px]"
          src="/loginGB.svg"
          alt="background"
        />
      </div>
    </div>
  );
}
