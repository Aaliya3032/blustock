import { LoginForm } from "./_components/login-form";
import bg from "../../assets/login_bg.png"

const LoginPage = () => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center relative"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
    >
      <div className="absolute inset-0 bg-tertiary opacity-40"></div>
      <div className="container relative z-10">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
