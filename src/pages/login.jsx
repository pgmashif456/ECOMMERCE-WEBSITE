 import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔥 Mock login
    const fakeUser = {
      name: "Ashif",
      email: form.email,
    };

    dispatch(loginSuccess(fakeUser));
    navigate("/");
  };

  return (
    <MainLayout>
      <div className="login-page">
        <div className="login-box">
          <h1>Login</h1>
          <p>Welcome back! Please login to continue.</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;