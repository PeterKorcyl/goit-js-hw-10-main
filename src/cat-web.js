import axios from 'axios';

export async function fetchBreeds() {
  axios.defaults.headers.common['x-api-key'] =
    'live_ QaCjiigqQwgH3zDORLTVkKSdeuWczg OkbMqDb1ga9x5Q3vI1DVoFuwNjE8ql pySn';
  const response = await axios.get(`https://api.thecatapi.com/v1/breeds`);
  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const breedIdResponse = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
  return breedIdResponse.data;
}
