import axiosWithConfig from "../../axiosWithConfig";
import { IGetTodo } from "./types";

export const getAllTodos = async (id: string | undefined) => {
  try {
    const response = await axiosWithConfig.get(
      `todo-items?activity_group_id=${id}`
    );
    return response.data.data as IGetTodo[];
  } catch (error) {
    throw new Error("gagal mengambil data activity!");
  }
};
export const getTodosById = async (id: number | undefined) => {
  try {
    const response = await axiosWithConfig.get(`todo-items/${id}`);
    return response.data as IGetTodo;
  } catch (error) {
    throw new Error("gagal mengambil data activity!");
  }
};

export const deleteTodos = async (id: number | undefined) => {
  try {
    await axiosWithConfig.delete(`todo-items/${id}`);
  } catch (error) {
    throw new Error("Gagal menghapus activity");
  }
};

export const postTodos = async (
  groups_id: string,
  priority: string,
  title: string
) => {
  try {
    const requestBody = {
      activity_group_id: parseInt(groups_id),
      priority: priority,
      title: title,
    };
    await axiosWithConfig.post(`todo-items`, requestBody);
  } catch (error) {
    throw new Error("gagal tambah activity baru!");
  }
};

export const changeActiveTodos = async (todos: IGetTodo) => {
  try {
    const requestBody = {
      activity_group_id: todos.activity_group_id,
      id: todos.id,
      is_active: todos.is_active === 1 ? 0 : 1,
      priority: todos.priority,
      title: todos.title,
    };
    await axiosWithConfig.patch(`todo-items/${todos.id}`, requestBody);
  } catch (error) {
    throw new Error("gagal ubah status activity!");
  }
};

export const editTodos = async (
  todos: IGetTodo,
  priority: string,
  title: string
) => {
  try {
    const requestBody = {
      is_active: todos.is_active,
      priority: priority,
      title: title,
    };
    await axiosWithConfig.patch(`todo-items/${todos.id}`, requestBody);
  } catch (error) {
    throw new Error("gagal edit todos!");
  }
};
