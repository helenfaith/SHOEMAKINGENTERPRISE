const btn=document.getElementById("btn")
const content=document.getElementById("content")
const author=document.getElementById("author")
async function getQuote(){
    try {
    const response=await axios.get("https://api.quotable.io/random")
    const data=response.data
    document.getElementById("content").innerHTML=data.content
    document.getElementById("author").innerhtml=data.author
} catch (error){
    document.getElementById("error").innerHTML=error
    }
}
