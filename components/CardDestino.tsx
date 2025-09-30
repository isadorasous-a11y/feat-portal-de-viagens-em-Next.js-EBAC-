import Link from "next/link";
import styles from "@/styles/CardDestino.module.css";
import { Destino } from "@/data/destinos";

type Props = { destino: Destino };

export default function CardDestino({ destino }: Props) {
  return (
    <Link
      href={`/destinos/${destino.slug}`}
      className={styles.card}
      aria-label={`Ver detalhes de ${destino.nome}`}
    >
      <div className={styles.imageWrap}>
        <img
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3>{destino.nome}</h3>
        <p className={styles.local}>{destino.localizacao}</p>
      </div>
    </Link>
  );
}
