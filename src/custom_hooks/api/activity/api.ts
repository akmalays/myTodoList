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
export const getActivityById = async (id: string | undefined) => {
  try {
    const response = await axiosWithConfig.get(
      `activity-groups/${id}?email=royman.dev@gmail.com`
    );
    return response.data as IGetActivity;
  } catch (error) {
    throw new Error("gagal mengambil data activity!");
  }
};
export const editActivityName = async (
  id: string | undefined,
  title: string
) => {
  try {
    const requestBody = {
      title: title,
    };
    await axiosWithConfig.patch(`activity-groups/${id}`, requestBody);
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
    await axiosWithConfig.post(`activity-groups`, requestBody);
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
