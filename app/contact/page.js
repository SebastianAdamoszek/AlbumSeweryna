"use client";
import React, { useState, useEffect } from "react";
import { ChatPage } from "@/components/Chat/ChatPage";
import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.main__next}>
      <ChatPage />
      <div
        style={{
          border: "3px solid",
          borderRadius: "15px",
          padding: "15px",
          backgroundColor: "gray",
        }}
      >
        <h2>Mój numer kontaktowy </h2>
        <h2>+48 693 020 729</h2>
      </div>
    </div>
  );
}
