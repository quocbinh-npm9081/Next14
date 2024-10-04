import styles from "./page.module.css";
import Link from "next/link";
import Headers from "@/components/header";

export default function Home() {
  return (
    <div className={styles.page}>
        <Headers/> 
        <Link href="/about">about</Link>
    </div>
  );
}
