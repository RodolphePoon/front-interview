const ENDPOINT = "https://api-adresse.data.gouv.fr/search"

export const search = async (query) => {

  const url = ENDPOINT + '/?q=' + query
  return fetch(url).then(res => res.json())
}