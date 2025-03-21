import type ICategoria from "@/interfaces/ICategoria";
import type IReceitas from "@/interfaces/IReceitas";

export async function obterDadosURL<T>(url: string) {
  const respostas = await fetch(url);
  return respostas.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"
  );
}

export async function obterReceitas() {
  return obterDadosURL<IReceitas[]>(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );
}
