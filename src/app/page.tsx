"use client";

import Link from "next/link";
import styles from "./Home.module.scss";
import { Navbar } from "@/components/molecules/";


export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Navbar/>
                <h1 className={styles.heading}>Estas en la home</h1>
            </div>
        </div>
    );
}
