import { PostLogin } from "@/apis/auth/auth.api";

const Login = () => {
  const onClickTryLogin = async () => {
    const res = await PostLogin({ email: "test@test.com", password: "1234" });

    console.log(res, "res");
  };
  return <button onClick={onClickTryLogin}>Login</button>;
};

export default Login;
