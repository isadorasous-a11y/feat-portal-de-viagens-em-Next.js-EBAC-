import Link from "next/link";
import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.brand}>
            Portal de Viagens
          </Link>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/destinos">Destinos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} EBAC • Demo acadêmica</small>
      </footer>
    </div>
  );
}
