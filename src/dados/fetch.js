export default async function getApi() {
    const url = "http://localhost:4000/"

    const response = await fetch(url)
    const dados = await response.json()
    return dados
}