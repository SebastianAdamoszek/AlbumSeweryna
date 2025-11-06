"use client";
import styles from "../page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <div className={styles.main__next}>
      <div
        style={{
          width: "80%",
          margin: "20px auto",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "10px",
        }}
      >
        <h2 data-aos="fade-up">Witam w mojej aplikacji!</h2>
        <p data-aos="fade-up" style={{ textAlign: "center" }}>
          To jest mój prywatny album
        </p>

        <h2 data-aos="fade-up">Rejestracja i logowanie</h2>
        <p data-aos="fade-up" style={{ textAlign: "center" }}>
          {" "}
          Posiadajac konto i będąc zalogowanyn mozesz korzystac dostępnego czatu
        </p>

        <h2 data-aos="fade-up">Dziękuje za odwiedziny!</h2>
      </div>
    </div>
  );
}
