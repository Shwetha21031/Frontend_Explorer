const API_KEY = "meCwz8Qnt03M4zg7i3383fWoNp-VIvm980h4XBMzx9E"

let searchBtn = document.querySelector(".search-btn")
let inputText = document.querySelector(".search-box input")
let moreBtn = document.querySelector(".more-btn")
let imageGallery = document.querySelector(".gallery ul")
let searchBox = document.querySelector(".search-box")

let page = 1
let keyword = ""

let download = (imgUrl) => {
    fetch(imgUrl).then(res => res.blob()).then((file)=>{
        let a = document.createElement("a")
        a.href = URL.createObjectURL(file)
        a.download = new Date().getTime()
        a.click()

    }).catch(()=>alert("failed to download"))
}

let getResponse = async () => {
    keyword = inputText.value
    if (!keyword) {
        return
    }
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API_KEY}`
    let result = await fetch(URL)
    let jsonData = await result.json()
    let data = jsonData.results

    if (page === 1) {
        imageGallery.innerHTML = "";
    }
    console.log(data)
    data.forEach((imgData) => {
        let imageContainer = document.createElement("li")
        imageContainer.classList.add('img-container')
        imageContainer.innerHTML = `
            <img src="${imgData.urls.small}" alt="img">
            <div class="description">
                <div class="title">${imgData.description ? imgData.description.slice(0, 40) + '...' : 'No description'}</div>
                <div class="download" onclick=download('${imgData.urls.small}')><i class="fa-solid fa-arrow-down"></i></div>
            </div>
        `
        imageGallery.appendChild(imageContainer)
    })  

    moreBtn.style.display = "block"
}



searchBtn.addEventListener("click", () => {
    page=1
    getResponse()
})

moreBtn.addEventListener("click", () => {
    page++
    getResponse()
})

searchBox.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        page=1
        getResponse()
    }
})
