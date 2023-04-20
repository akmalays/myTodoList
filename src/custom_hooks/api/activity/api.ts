import axiosWithConfig from "../../axiosWithConfig";
import { IGetActivity } from "./types";

export const getAllActivity = async () => {
  try {
    const response = await axiosWithConfig.get(
      `activity-groups?email=royman.dev@gmail.com`
    );
    return response.data.data as IGetActivity[];
  } catch (error) {
    throw new Error("gagal mengambil data activity!");
  }
};

export const postDefaultActivity = async () => {
  try {
    const requestBody = {
      title: "New Activity",
      email: "royman.dev@gmail.com",
    };
    const response = await axiosWithConfig.post(`activity-groups`, requestBody);
    return response.data.payload as string;
  } catch (error) {
    throw new Error("gagal tambah activity baru!");
  }
};

export const deleteActivity = async (id: number | undefined) => {
  try {
    await axiosWithConfig.delete(`activity-groups/${id}`);
  } catch (error) {
    throw new Error("Gagal menghapus activity");
  }
};
