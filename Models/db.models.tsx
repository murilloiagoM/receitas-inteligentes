export interface Categorias {
  id: string;
  receitas: Array<string>;
}

export interface Receita {
  id?: string,
  imagem: string;
  ingredientes: string[];
  preparo: string;
  quantidades: string
  porcentagemSelecionados?: number
}

export interface Ingrediente {
  id: string;
  nome: string;
}

export interface ListaIngredientes{
  id: string,
  label: string,
  value: string
}