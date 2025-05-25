import { Receitas } from "@/src/app/models/Receitas";

export default function  mapTagsFrequencia(receitas: { tags: string[] }[]) {
  const freqMap: Record<string, number> = {};

  receitas.forEach(({ tags }) => {
    tags.forEach(tag => {
      freqMap[tag] = (freqMap[tag] || 0) + 1;
    });
  });

  return Object.entries(freqMap).map(([tag, count]) => ({ tag, count }));
}

