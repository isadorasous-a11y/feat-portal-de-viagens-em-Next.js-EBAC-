import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1>Bem-vindo ao Portal de Viagens</h1>
      <p>
        Explore destinos brasileiros incríveis e descubra informações essenciais
        para planejar sua próxima viagem.
      </p>
      <Link href="/destinos" className={styles.cta}>
        Ver Destinos
      </Link>
    </section>
  );
}
