import axios from "axios";

const BASE_URL =
  "https://677278dcee76b92dd492659a.mockapi.io/students/students";

export const createStudent = async (studentData) => {
  try {
    const response = await axios.post(BASE_URL, studentData);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};
