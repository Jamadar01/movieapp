let nw=document.querySelector('.new');
var len;
let movie=document.querySelector('.row');
//api key
//const apikey='7c8882695amsh4b0ad0c6a6e06c5p13d11cjsnc2d71c2ed413';
//api call
//const apiurl='https://api.themoviedb.org/3/movie/550?api_key=3889934197a92323aa2b9c09b6b5e8a6';
// fetch(apiurl).then(response => {return response.json()})
// .then((data)=>{
//     console.log(data);
//api key
// const apikey=' 2ce33be2';
// //api call
// const apiurl='http://www.omdbapi.com/?i=tt3896198&apikey=2ce33be2';
// fetch(apiurl).then(response => {return response.json()})
// .then((data)=>{
//     console.log(data);

//  })
// const apikey=' ba870c64-cb8e-4531-ad11-630394bc75b4';
// //api call
// const apiurl='https://app.booapi.com/api/v1.1.0/task/results/TASK_ID?limit=1&key=ba870c64-cb8e-4531-ad11-630394bc75b4';
// fetch(apiurl).then(response => {return response.json()})
// .then((data)=>{
//     console.log(data);

//  })
let a=1;
const apiurl =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const Imgpath = "https://image.tmdb.org/t/p/w1280";
let getresponse=(url)=>{fetch(url).then(response => {return response.json()})
.then((data)=>{
    console.log(data);
    console.log('response');
     len=data.results.length;
   // var d=data
    //console.log(data.results[0].original_title);
    //console.log(data.results[0].title);
    
    for(let i=0;i<data.results.length;i++)
{   // let a=[1,2,3];
    
    let newdiv=document.createElement('div');
    
    newdiv.className='col col-3 h-25 m-4'
   a++;
   if(a>3)
   {a=1;}
    console.log(data.results[i].title);
    let imgsrc=data.results[i].poster_path === null ? "image-missing.png" :Imgpath+data.results[i].poster_path;
    newdiv.innerHTML=`<img src='${imgsrc}' class='px-1 w-75 h-25'>
    <br><h1>${data.results[i].title}</h1> "<br>"${data.results[i].overview}<br>` 
   

    
    movie.appendChild(newdiv);}})}

getresponse(apiurl);
//     fetch(apiurl).then(response => {return response.json()})
// .then((data)=>{
//     console.log(data);
//    // var d=data
//     //console.log(data.results[0].original_title);
//     //console.log(data.results[0].title);
    
//     for(let i=0;i<data.results.length;i++)
// {   // let a=[1,2,3];
    
//     let newdiv=document.createElement('div');
    
//     newdiv.className='col-3 h-25 m-4'
//    a++;
//    if(a>3)
//    {a=1;}
//     //console.log(data.results[i].title);
//     let imgsrc=Imgpath+data.results[i].poster_path;
//     newdiv.innerHTML=`<img src='${imgsrc}' class='px-1 w-75 h-25'>
//     <br><h1>${data.results[i].title}</h1> "<br>"${data.results[i].overview}<br>` 
   

//     movie.appendChild(newdiv);
// }
//  })

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7c8882695amsh4b0ad0c6a6e06c5p13d11cjsnc2d71c2ed413',
// 		'X-RapidAPI-Host': 'filmaffinity-unofficial.p.rapidapi.com'
// 	}
// };

// fetch('https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/?lang=%3CREQUIRED%3E&id=750283', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
let search=document.querySelector('input');
let btn=document.querySelector('button')
//btn.addEventListener('click',nsearch);
const searchapi =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    // search.addEventListener(
    //     "keyup",
    //     function (event) {
    //         if (event.target.value != "") {
    //            fetch(apiurl).then(response => {return response.json()})
    //            .then((data)=>{
    //                //console.log(data);
    //                for(let i=0;i<data.results.length;i++)
    //                {if(event.target.value==data.results[i].title)
    //                { console.log(event.target.value);
    //                    let newdiv=document.createElement('div');
                   
    //                newdiv.className='col-3 h-25 m-4'
    //               a++;
    //               if(a>3)
    //               {a=1;}
    //                //console.log(data.results[i].title);
    //                let imgsrc=Imgpath+data.results[i].poster_path;
    //                newdiv.innerHTML=`<img src='${imgsrc}' class='px-1 w-75 h-25'>
    //                <br><h1>${data.results[i].title}</h1> "<br>"${data.results[i].overview}<br>` 
                  
               
    //                movie.appendChild(newdiv);
    //                }else{
    //                 console.log('not found')
    //                }}
                   
    //            })
    //         } 
    //     }
    // )
    
   search.addEventListener(
        "keyup",
        function (event) {
            if (event.target.value != "") {
                getresponse(searchapi + event.target.value)
                let nodel=document.querySelectorAll('.col')
               for(let i=0;i<len ;i++)
                movie.removeChild(nodel[i]);
               
               // console.log(NodeList.textContent);
            } else {
                let nodel=document.querySelectorAll('.col')
                for(let i=0;i<len ;i++)
                 movie.removeChild(nodel[i]);
                getresponse(apiurl);
                //console.log('not found')
            }
        }
    )
//     function nsearch(result){
//         console.log(search.value);
        
//         fetch(result).then(response => {return response.json()})
// .then((data)=>{
//     for(let i=0;i<data.results.length;i++)
//             {const imagePath = Imgpath+data.results[i].poster_path;
//             // const box = `
//             // <div class="box">
//             //     <img src="${IMGPATH+result}" alt="" />
//             //     <div class="overlay">
//             //         <h2>Overview:</h2>
//             //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
//             //     </div>
//             // </div>
//             // `
            
//             console.log(data.results[i].original_title)
//             const box = document.createElement("div")
//             box.className='col-3 h-25 m-4';
//             box.innerHTML = `
//                 <img src="${imagePath}" alt="" class='px-1 w-75 h-25'/>
//                 <div class="overlay ">
//                     <div class="title"> 
//                         <h2> ${data.results[i].original_title}  </h2>
//                         <span> ${data.results[i].vote_average} <span>
//                     </div>
//                     <h3>Overview:</h3>
//                     <p> 
//                         ${data.results[i].overview}
//                     </p>
//                  </div>
//             `
//             movie.appendChild(box)
//         }})}
//         //  console.log(getmovies());
    
    