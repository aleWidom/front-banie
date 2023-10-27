"use client";

import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.heading}>Estas en la home</h1>
                <div className={styles.containerLinks}>
                    <h3 className={styles.heading}>Links</h3>
                    <Link className={styles.link} href="/login">
                        {"Go to login ->"}
                    </Link>
                    <Link className={styles.link} href="/register">
                        {"Go to register ->"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
