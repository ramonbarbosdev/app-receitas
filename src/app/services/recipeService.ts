import AsyncStorage from "@react-native-async-storage/async-storage";
import { Receitas } from "../models/Receitas";
import axios, { AxiosResponse } from "axios";

const STORAGE_KEY = "recipes";

const API_URL = 'http://192.168.1.10:3000/receita/';

export const getAll = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getById = async (id: number) => 
{
    const res = await axios.get(`${API_URL}${id}`);
    return res.data;
};

export const saveAll = (data: Receitas): Promise<AxiosResponse<any>> => {
   if (data.id) {
    return axios.put(`${API_URL}${data.id}`, data);
  } else {
    return axios.post(API_URL, data);
  }
};

export const deleteById = async (id: number) => {
    const res = await axios.delete(`${API_URL}${id}`);
    return res;
};
