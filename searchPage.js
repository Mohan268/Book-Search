fetch('https://www.googleapis.com/books/v1/volumes?q=percy+jackson').then((apidata)=>{
     console.log(apidata);

      return apidata.json();

        })

.then((actualdata)=>{
 // localStorage.setItem("api" , JSON.stringify(arr))
 let mindiv=document.getElementById("mini")
         console.log(actualdata);
  let count=0;
  //let find=search.value;
let clear=document.getElementById("clr");
  let major=document.getElementById("main");
let data = JSON.parse(localStorage.getItem('data'));
console.log(data);
let k=0;
data.forEach((item)=> {
    let cr=document.createElement('div');
    cr.innerHTML=`
    ${k} ${data[k].search} &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    search at  ${data[k].date}
   
    
    
    `

    var searchvalue=data[k].search;
    cr.style.border="2px solid white";
    cr.style.width="930px";
    cr.style.height="30px";
    
  major.append(cr);

             cr.addEventListener("click",()=>{
              mindiv.innerHTML="";
              for(let j=0;j<10;j++)
  
  {

    
          let mydata=actualdata.items[j];
          
         if(mydata.volumeInfo.title.toLowerCase().split(" ").join("").includes(searchvalue.toLowerCase().split(" ").join(""))|| mydata.volumeInfo.authors[0].toLowerCase().split(" ").join("").includes(searchvalue.toLowerCase().split(" ").join("")))
        
        {

            let cr=document.createElement('div');
            cr.innerHTML=`
          
            <img src=${mydata.volumeInfo.imageLinks.thumbnail} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" /> 
            <br>
            Title: ${mydata.volumeInfo.title}
            <br>
            
            <br>
            Authors  ${mydata.volumeInfo.authors[0]}
            <br>
            
            Rating :${mydata.volumeInfo.averageRating}
            <br>
            Published Date : ${mydata.volumeInfo.publishedDate}
            <br>
            Page count :${mydata.volumeInfo.pageCount}
            <br>
            
            
            `
           // cr.append(btn);
            cr.style.height="400px";
            cr.style.width="200px";
            cr.style.borderStyle="solid";
            
            cr.style.borderRadius="2px";
            cr.style.borderColor="black"
            cr.style.display="block";
            cr.style.margin="20px";
            cr.style.borderColor="white";
            cr.style.backgroundColor="black";
            cr.style.color="white";
           
         mindiv.append(cr);
  major.append(mindiv);







         }

       }
       
   })

  k++;


})
function clr()
{
   for(let i=0;i<data.length;i++)
   {
       delete data[i];
   }
   
    console.log(data);
    
    major.innerHTML="";
}
clear.addEventListener("click",clr);


})
