"use client";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import { archivo } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { login } from "@/app/store/loginSlice/loginSlice";
import { useDispatch } from "react-redux";

export function LoginForm() {
  const [loginInfo, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleAddSubmit() {
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: loginInfo, password: password }),
      credentials: "include",
    });

    const data = await response.json();
    const responseStatus = response.status;

    if (responseStatus === 200) {
      dispatch(login(data.accessToken));
      router.push("/profile");
    }
  }

  return (
    <div className={styles.loginFormBlock}>
      <h1 className={`${styles.loginFormTitle} ${archivo.className}`}>
        Authentication
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddSubmit();
        }}
        className={styles.formBlock}
      >
        <input
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          id="userLogin"
          name="userLogin"
          placeholder="@login"
          className={styles.formLoginInput}
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          id="userPassword"
          name="userPassword"
          placeholder="@password"
          className={styles.formPasswordInput}
        />

        <button className={styles.loginButton} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
