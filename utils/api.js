let userUrl = 'https://calm-sands-26146.herokuapp.com/api/v1/user_token'
let destinationUrl = 'https://calm-sands-26146.herokuapp.com/api/v1/destination'
let quoteUrl = 'https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote'

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

export const requestQuote = () => {
  let init = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'GET'
  }

  return fetch(quoteUrl, init)
}