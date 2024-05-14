"use client";
import styles from "./PlayButton.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

//jwt auth
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { logout } from "@/app/store/loginSlice/loginSlice";

export function PlayButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );

  return (
    <div>
      <Link href="/" className={styles.playButton}>
        Play Now
      </Link>

      <button
        className={styles.playButton}
        onClick={async () => {
          // SESSION AUTHENTICATION
          // const res = await fetch("http://localhost:4000/api/logout", {
          //   credentials: "include",
          // });
          // router.push("/");

          //JWT AUTHENTICATION
          const res = await fetch("http://localhost:4000/api/logout", {
            method: "POST",
            body: JSON.stringify({ accessToken: accessToken }),
            credentials: "include",
          });
          dispatch(logout());
          router.push("/");
        }}
      >
        Log Out
      </button>

      <Link href="/login" className={styles.playButton}>
        Log In
      </Link>

      <Link href="/signup" className={styles.playButton}>
        Sign Up
      </Link>
    </div>
  );
}
