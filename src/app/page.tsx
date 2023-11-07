import styles from "./Home.module.scss";


export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
             
                <h1 className={styles.heading}>Estas en la home</h1>
            </div>
        </div>
    );
}
