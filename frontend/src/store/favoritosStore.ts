import { create } from 'zustand';

export type Contenido = {
  id: number;
  nombre: string;
  materia: string;
  favorito: boolean;
};

type FavoritosStore = {
  contenidos: Contenido[];
  cambiarFavorito: (id: number) => void;
};

export const useFavoritosStore = create<FavoritosStore>((set) => ({
  contenidos: [
    {
      id: 1,
      nombre: 'Resumen de Matemática',
      materia: 'Matemática',
      favorito: true,
    },
    {
      id: 2,
      nombre: 'Ejercicios de Programación',
      materia: 'Programación',
      favorito: false,
    },
    {
      id: 3,
      nombre: 'Guía de Base de Datos',
      materia: 'Base de Datos',
      favorito: true,
    },
  ],

  cambiarFavorito: (id) =>
    set((state) => ({
      contenidos: state.contenidos.map((contenido) =>
        contenido.id === id
          ? {
              ...contenido,
              favorito: !contenido.favorito,
            }
          : contenido
      ),
    })),
}));