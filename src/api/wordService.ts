const BASE_URL = "https://random-word-api.herokuapp.com/word?length=5";

export const getWord = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return data[0] as string;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
