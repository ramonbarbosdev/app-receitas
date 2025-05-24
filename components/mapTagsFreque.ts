import { Receitas } from "@/src/app/models/Receitas";

export default function mapTagsFrequencia(receitas: any[]) {
  const tagCountMap: Record<string, number> = {};

  receitas.forEach(receita => {
    receita.tags.forEach((tag: string) => {
      if (tagCountMap[tag]) {
        tagCountMap[tag] += 1;
      } else {
        tagCountMap[tag] = 1;
      }
    });
  });

  // Converter para array, útil para gráficos
  const resultado = Object.entries(tagCountMap).map(([tag, count]) => ({
    tag,
    count,
  }));

  return resultado;
}



// Uso:


/*
[
  { tag: 'vegano', count: 2 },
  { tag: 'rápido', count: 2 },
  { tag: 'low-carb', count: 2 },
]
*/
