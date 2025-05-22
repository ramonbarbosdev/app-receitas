import AsyncStorage from "@react-native-async-storage/async-storage";
import { Receitas } from "../models/Receitas";
import axios from "axios";

const STORAGE_KEY = "recipes";

const API_URL = 'http://localhost:3000/receita';

export const getAll = async () =>
{
    const res = await axios.get(`${API_URL}/`);
    console.log(res)
    return res.data
};

// export const getById = async (id: number): Promise<Receitas | undefined> => {
//   const recipes = await getAll();
//   const res = recipes.find(r => String(r.id) === String(id));
//   return res;
// };

// export const save = async (data: Receitas): Promise<void> => {
//   const recipes = await getAll();
//   const index = recipes.findIndex(r => String(r.id) === String(data.id));

//   if (index >= 0) {
//     recipes[index] = data;
//   } else {
//     recipes.push(data);
//   }

//   await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
// };

// export const deleteById = async (id: number): Promise<void> => {
//   const recipes = await getAll();
//   const updated = recipes.filter(r => r.id !== id);
//   await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
// };
