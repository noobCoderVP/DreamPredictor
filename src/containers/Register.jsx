import React, { useState } from "react";
// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [valid, setvalid] = useState(1);
    const navigate = useNavigate();

    const submitHandler = data => {
        axios.post("http://localhost:4000/auth/register", data).then(res => {
            if (res.data.status) {
                localStorage.setItem("dream", res.data.data.dreamuser);
                navigate("/");
            } else {
                setvalid(0);
                navigate("/register");
            }
        });
    };
    return (
        <main>
            <h2>Register here</h2>
            <form action="" onSubmit={handleSubmit(submitHandler)}>
                {errors.username && (
                    <p style={{ color: "yellow" }}>Error exists</p>
                )}
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    {...register("username", { required: true, minLength: 8 })}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    {...register("email")}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    {...register("password")}
                />
                <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="age"
                    {...register("age")}
                />
                <button type="submit">Register</button>
            </form>
        </main>
    );
}

export default Register;
