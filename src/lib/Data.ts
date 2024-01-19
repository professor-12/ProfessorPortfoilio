const API_KEY = process.env.API_KEY
export async function getData() {

      const data = await  fetch("https://api.netlify.com/api/v1/sites", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
        },
      })
      const response = data.json()

      return response
}