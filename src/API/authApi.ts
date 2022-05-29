import * as AuthSession from 'expo-auth-session';

const CLIENT_ID = '123253451918-2q4664u5gp6a0pll8umu9bg7g24uia0v.apps.googleusercontent.com'
const REDIRECT_URI = 'https://auth.expo.io/@vonot16/askonnection'
const RESPONSE_TYPE = 'token'
const SCOPE = encodeURI('profile email')
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

export async function getData() {
    const response = await AuthSession.startAsync({ authUrl })
    if (response.type === "success") {
        const token = response.params.access_token
        const data = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
        return data.json()
    }

}