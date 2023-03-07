import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit } = useForm();

    const submitHandler = data => console.log(data.images[0]);
    return (
        <main class="contact-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit(submitHandler)} encType="url">
                <input
                    type="text"
                    name="name"
                    placeholder="Your username"
                    {...register("username")}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    {...register("username")}
                />
                <label
                    htmlFor="files"
                    style={{
                        color: "rgb(255, 255, 255, 0.8)",
                        fontSize: "1rem",
                        float: "left",
                        marginBottom: "-20px",
                    }}>
                    Add related images:
                </label>
                <input
                    style={{ width: "250px" }}
                    type="file"
                    name="files"
                    id="files"
                    multiple
                    {...register("images")}
                />
                <textarea
                    placeholder="Your Message"
                    name="message"
                    {...register("message")}></textarea>
                <button type="submit">Send</button>
            </form>
        </main>
    );
}

export default Contact;
