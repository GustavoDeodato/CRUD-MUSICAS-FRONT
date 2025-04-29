"use scrict"

export async function ListarMusicas() {
    const url = `http://localhost:8080/v1/controle-musicas/musica`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)

    return data
}

export async function BuscarMusicas(id) {
    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`

    const response = await fetch (url)

    const data = await response.json()

    return data 
}

export async function DeleteMusica(id){

    const url = `http://localhost:8080/v1/controle-musicas/musica/${id}`

    const options = {
        method: 'DELETE',
        Headers: {
            'Content-Type': 'Application/Json'
        },
        body: JSON.stringify(id)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function  InserirMusica(musicanova) {
    const url = `http://localhost:8080/v1/controle-musicas/musica`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringif(musicanova)
    }

    const response = await fetch(url, options)

    return response.ok
}

const musicanova = {

    "nome": "La la la",
    "duracao": "10:03:48",
    "data_lancamento": "1780-01-18",
    "letra": "bakuriti",
    "link": "https://youtu.be/fIgm6lxvUfQ?si=KD-xu5rmHBZAJgmf"

}