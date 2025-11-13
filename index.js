require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT
const githubdata = {
  "login": "SatyamIT86",
  "id": 98443865,
  "node_id": "U_kgDOBd4iWQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/98443865?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SatyamIT86",
  "html_url": "https://github.com/SatyamIT86",
  "followers_url": "https://api.github.com/users/SatyamIT86/followers",
  "following_url": "https://api.github.com/users/SatyamIT86/following{/other_user}",
  "gists_url": "https://api.github.com/users/SatyamIT86/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SatyamIT86/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SatyamIT86/subscriptions",
  "organizations_url": "https://api.github.com/users/SatyamIT86/orgs",
  "repos_url": "https://api.github.com/users/SatyamIT86/repos",
  "events_url": "https://api.github.com/users/SatyamIT86/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SatyamIT86/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Satyam Pandey",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 19,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-01-26T04:36:07Z",
  "updated_at": "2025-09-02T12:56:06Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Hey Satyam this is your twitter profile')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1>')
})

app.get("/youtube",(req,res)=>{
    res.send('<h2>This is My youtube channel</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
