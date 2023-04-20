import axiosWithConfig from "../../axiosWithConfig";
import { IGetActivity } from "./types";

export const getAllActivity = async () => {
  try {
    const response = await axiosWithConfig.get(
      `activity-groups?email=akmalays@gmail.com`
    );
    return response.data as IGetActivity[];
  } catch (error) {
    throw new Error("gagal mengambil data activity!");
  }
};

export const postDefaultActivity = async () => {
  try {
    const response = await axiosWithConfig.post(
      `activity-groups?email=akmalays@gmail.com`
    );
    return response.data as IGetActivity[];
  } catch (error) {
    throw new Error("gagal mengambil data activity!");
  }
};

export const deleteActivity = async (id: number | undefined) => {
  try {
    const response = await axiosWithConfig.delete(`activity-groups/${id}`);
    return response.data.payload as string;
  } catch (error) {
    throw new Error("Gagal menghapus campaign");
  }
};
