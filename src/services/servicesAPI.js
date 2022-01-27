const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const bobaFetch = () => (
  fetch(URL_API)
    .then((response) => response.json()
      .then((data) => {
        // Ref.: https://github.com/tryber/sd-016-b-project-starwars-planets-search/pull/53/files#diff-64e6a6dc6ddee0b3b28d21c6b2bf6a5b1933a1a0a0f3284c9a3df46fea8bbf2e
        const { results } = data;
        results.forEach((resident) => delete resident.residents);
        return results;
      }))
);

export default bobaFetch;
