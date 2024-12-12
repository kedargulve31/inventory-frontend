import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const formSubmit = (data) => {
    console.log(data);
    reset();
    setTimeout(async () => {
      const res = await axios.post("http://localhost:3110/login", data, {
        "Content Type": "application/json",
      });
      navigate("/dashboard");
      console.log(res);
    }, 1200);
  };

  return (
    <>
      <img
        src="https://inventory-management-rosy.vercel.app/static/media/signup.f15f90666859b33549cb.jpg"
        alt="sad"
        style={{ objectFit: "contain", width: "62%", height: "10%" }}
      />
      <form
        onSubmit={handleSubmit(formSubmit)}
        style={{
          height: "450px",
          position: "absolute",
          top: "20%",
          left: "70%",
        }}
      >
        <h3>Login</h3>
        <div className="input-filed">
          <label>Email</label>
          <input
            type="email"
            {...register("Username", {
              required: "Username is required...!!",
            })}
          />
        </div>
        <div className="input-filed">
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required...!!!",
            })}
          />
        </div>
        {errors && (
          <p className="error" style={{ fontWeight: "bold", color: "red" }}>
            {Object.values(errors)[0]?.message}
          </p>
        )}
        <button>Submit</button>
        <NavLink to={"/register"}> Click Here to register</NavLink>
      </form>
    </>
  );
}
