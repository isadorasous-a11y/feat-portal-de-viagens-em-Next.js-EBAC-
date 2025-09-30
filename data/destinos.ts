// data/destinos.ts
export type Destino = {
  id: number;
  slug: string;
  nome: string;
  imagem: string;     // caminho local no /public
  descricao: string;
  localizacao: string;
};

export const destinos: Destino[] = [
  {
    id: 1,
    slug: "salvador-ba",
    nome: "Salvador (BA)",
    imagem: "/imgs/salvador.jpg",
    descricao:
      "Centro histórico vibrante, litoral extenso e cultura afro-brasileira marcante. Ideal para combinar turismo histórico e praia.",
    localizacao: "Salvador, Bahia",
  },
  {
    id: 2,
    slug: "fernando-de-noronha-pe",
    nome: "Fernando de Noronha (PE)",
    imagem: "/imgs/noronha.jpg",
    descricao:
      "Águas cristalinas, vida marinha abundante e trilhas. Perfeito para mergulho e ecoturismo controlado.",
    localizacao: "Arquipélago de Fernando de Noronha, Pernambuco",
  },
  {
    id: 3,
    slug: "lencois-maranhenses-ma",
    nome: "Lençóis Maranhenses (MA)",
    imagem: "/imgs/lencois.jpg",
    descricao:
      "Dunas e lagoas sazonais formam um cenário único. Melhor época após o período chuvoso.",
    localizacao: "Parque Nacional dos Lençóis Maranhenses, Maranhão",
  },
  {
    id: 4,
    slug: "foz-do-iguacu-pr",
    nome: "Foz do Iguaçu (PR)",
    imagem: "/imgs/foz.jpg",
    descricao:
      "Cataratas monumentais, Parque das Aves e fronteira tríplice. Passeios de barco e trilhas.",
    localizacao: "Foz do Iguaçu, Paraná",
  },
];
