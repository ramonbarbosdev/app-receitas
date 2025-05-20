import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "recipes";

export type Receita = {
  id: number;
  title: string;
  descrition: string;
};

export const getAll = async (): Promise<Receita[]> => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
};

export const getById = async (id: number): Promise<Receita | undefined> => {
  const recipes = await getAll();
  return recipes.find(r => r.id === id);
};

export const save = async (data: Receita): Promise<void> => {
  const recipes = await getAll();
  const index = recipes.findIndex(r => r.id === data.id);

  if (index >= 0) {
    recipes[index] = data;
  } else {
    recipes.push(data);
  }

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
};

export const deleteById = async (id: number): Promise<void> => {
  const recipes = await getAll();
  const updated = recipes.filter(r => r.id !== id);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
