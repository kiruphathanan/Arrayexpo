
const number=document.getElementById("add");
const sort=document.getElementById("sort");
const mess=document.getElementById("messa");
const eve=document.getElementById("even");
const odd=document.getElementById("odd");
const max=document.getElementById("max");
const min=document.getElementById("min");
const rev=document.getElementById("rev");
var messa;
number.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",").map((n)=>parseInt(n))
     result = input.reduce((number,acc) =>(acc+number),0);
    messa="your result is:"+result
    mess.style.display="inherit";
    mess.innerHTML=messa;
}
sort.onclick=()=>{
    let text=document.getElementById("number").value;
    let input=text.split(",");
    for(let i=0;i<input.length;i++)
    {
        for(let j=i+1;j<input.length;j++)
        {
            if(input[j]<input[i]){
                temp=input[j];
            input[j]=input[i];
            input[i]=temp;
            }
        }
    }
    messa="your result is:"+input
    mess.style.display="inherit";
    mess.innerHTML=messa;
}


odd.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    const odd=input.filter((x)=>x%2!=0)
    messa="your result is:"+odd
    mess.style.display="inherit";
    mess.innerHTML=messa;
}



rev.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    let result = input.reverse();
    messa="your result is:"+result
    mess.style.display="inherit";
    mess.innerHTML=messa;
}

min.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((number,acc)=>(number<acc?number:acc),result[0])
    messa="your result is:"+res
    mess.style.display="inherit";
    mess.innerHTML=messa;
}
max.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((number,acc)=>(number>acc?number:acc),result[0])
    messa="your result is:"+res
    mess.style.display="inherit";
    mess.innerHTML=messa;
}
eve.onclick=()=>{
    let arr=document.getElementById("number").value;
    let input=arr.split(",");
    const eve=input.filter((x)=>x%2==0)
    messa="your result is:"+eve
    mess.style.display="inherit";
    mess.innerHTML=messa;
}