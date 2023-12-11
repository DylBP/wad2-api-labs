export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=5cb0ef2e0fbd086d042163b93095df83&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };