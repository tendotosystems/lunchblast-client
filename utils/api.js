let baseUrl = 'https://calm-sands-26146.herokuapp.com/api/v1'

let userUrl = `${baseUrl}/user_token`
let userSignupUrl = `${baseUrl}/user`
let destinationUrl = `${baseUrl}/destination`
let quoteUrl = 'https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote'
let selectionUrl = `${baseUrl}/selection`

export const requestAuthorizeUser = (email, password) => {
  let init = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify({
      auth: { 
        email, 
        password 
      }
    })
  }

  return fetch(userUrl, init)
}

export const requestSignupUser = (userInputs) => {
  let init = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify(userInputs)
  }

  return fetch(userSignupUrl, init)
}

export const requestDestination = (token) => {
  let init = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),
    method: 'GET',
  }

  return fetch(destinationUrl, init)
}

export const requestSelection = (user, token, destination) => {
  let init = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }),
    method: 'POST',
    body: JSON.stringify({
      destination_id: destination.id,
      user_id: user.id
    })
  }

  return fetch(selectionUrl, init)
}

export const requestQuote = () => {
  let init = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'GET'
  }

  return fetch(quoteUrl, init)
}