export const getMovies = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'True') {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
