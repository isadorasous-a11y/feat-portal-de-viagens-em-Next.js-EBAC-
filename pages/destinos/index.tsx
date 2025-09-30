import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "@/styles/Destinos.module.css";

export default function DestinosPage() {
  return (
    <section>
      <h2 className={styles.title}>Destinos em destaque</h2>
      <div className={styles.grid}>
        {destinos.map((d) => (
          <CardDestino key={d.id} destino={d} />
        ))}
      </div>
    </section>
  );
}
