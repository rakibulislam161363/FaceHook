import { useForm } from "react-hook-form";
import Filed from "../common/Filed";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
function Loginform() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = {...formData}
    setAuth({user})
    navigate("/")
  };

  const {setAuth} = useAuth();

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Filed label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email id is required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Filed>
      <Filed label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is a required",
            minLength: {
              value: 8,
              message: "Your password must be at last 8 carecters",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          name="password"
          type="password"
          id="password"
        />
      </Filed>
      <Filed>
        <button className=" bg-[#00D991] font-bold text-[#17181C] transition-all hover:opacity-90 auth-button">
          Login
        </button>
      </Filed>
    </form>
  );
}

export default Loginform;
