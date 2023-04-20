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
