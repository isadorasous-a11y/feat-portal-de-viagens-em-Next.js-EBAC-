import { GetStaticPaths, GetStaticProps } from "next";
import { destinos, Destino } from "@/data/destinos";
import styles from "@/styles/DetalheDestino.module.css";
import Link from "next/link";

type Props = { destino: Destino | null };

export default function DetalheDestino({ destino }: Props) {
  if (!destino) {
    return (
      <section className={styles.container}>
        <h2>Destino não encontrado</h2>
        <Link href="/destinos" className={styles.voltar}>
          ← Voltar para listagem
        </Link>
      </section>
    );
  }

  return (
    <article className={styles.container}>
      <Link href="/destinos" className={styles.voltar}>
        ← Voltar
      </Link>
      <h1 className={styles.titulo}>{destino.nome}</h1>
      <p className={styles.local}>{destino.localizacao}</p>
      <div className={styles.imageWrap}>
        <img src={destino.imagem} alt={`Imagem de ${destino.nome}`} />
      </div>
      <p className={styles.descricao}>{destino.descricao}</p>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = destinos.map((d) => ({ params: { slug: d.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const destino = destinos.find((d) => d.slug === slug) ?? null;
  return { props: { destino } };
};
