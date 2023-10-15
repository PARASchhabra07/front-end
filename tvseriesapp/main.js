const form=document.querySelector("#searchform")
form.addEventListener("submit", async function(e){
    e.preventDefault();
    console.log("submitted")
    const searchterm=form.elements.query.value
    const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`);
    console.log(res.data[0].show.image.medium);
    makeimages(res.data)
})
   
    

const makeimages=function(shows){
    for(let result of shows){
        if (result.show.image){

        const img=document.createElement("img");
        img.src=result.show.image.medium;
        document.body.append(img);}
        
    }
}

