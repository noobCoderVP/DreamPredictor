import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [valid, setvalid] = useState(1);
    const navigate = useNavigate();

    const submitHandler = data => {
        axios.post("http://localhost:4000/auth/login", data).then(res => {
            if (res.data.status) {
                localStorage.setItem("dream", res.data.data.dreamuser);
                navigate("/");
            } else {
                setvalid(0);
                navigate("/login");
            }
        });
    };
    return (
        <main>
            <h2>Login here</h2>
            <form
                style={{ paddingTop: "20px" }}
                onSubmit={handleSubmit(submitHandler)}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    {...register("username")}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    {...register("password")}
                />
                <button type="submit" style={{ marginTop: "30px" }}>
                    Login
                </button>
            </form>
        </main>
    );
}

export default Login;
