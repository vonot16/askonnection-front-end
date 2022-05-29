const API_KEY = "AIzaSyCogpzrlxFmocKzCYBEdqnX2aoDs-OiK_g"

export async function getLatLong(number: String, street: string, city: string, state: string) {
    const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${number}+${street},${city}+${state}&key=${API_KEY}`
    const response = await fetch(API_URL)
    const result = await response.json()
    return result.results[0].geometry.location

}