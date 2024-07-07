//https://rickandmortyapi.com/api/

const container = document.querySelector(".container_personagens")
const button = document.querySelector("button.buscar_mais")

const API = 'https://rickandmortyapi.com/api/'




async function getCharacters({ name, species, page = 1 }) {
    const response = await fetch(`${API}/character?name=${name}&species=${species}&page=${page}`)

    const characters = await response.json();

    console.log(characters.results)

    return characters.results

}


const defaultFilters = {
    name: '',
    species: '',
    page: 1
}


async function render({ characters }) {
    characters.forEach((characters) => {
        return container.innerHTML += `
            <div class="card">
                <img src=${characters.image} alt="imgs cards" class="card_img">
                <div class="text_personagem">
                    <h3>name: <span>${characters.name}</span></h3>
                    <p>species: <span>${characters.species}</span></p>
                </div>
            </div>
        
        `
    })
}


button.addEventListener('click', async (event) => {
  defaultFilters.page += 1
  const characters = await getCharacters(defaultFilters)
  render({characters})
})



async function main() {
   const characters = await getCharacters(defaultFilters)
   render({characters})
}

main()
