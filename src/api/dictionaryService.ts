const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const dictionarySearch = async (word: string) => {
  try {
    const response = await fetch(`${BASE_URL}${word}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
