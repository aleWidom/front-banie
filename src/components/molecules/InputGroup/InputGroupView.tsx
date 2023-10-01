import { Input } from "@/components/atoms"
import styles from './InputGroupView.module.scss'

interface InputGroupProps {
    title: string,
}


export const InputGroupView = ({title}:InputGroupProps) => {
    return (
       <div className={styles.container}>
        <label className={styles.header}>{title}</label>
        <Input/>
        </div>
    )
}

