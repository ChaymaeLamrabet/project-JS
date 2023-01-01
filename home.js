var r=[];
function randomLs(l){
    for(var i=0;i<3;i++){
        var random=Math.floor(Math.random() * l.length);
        r.push(l[random]);
    }
    return r;
}
console.log(randomLs(cours));

var content=document.getElementById('ran');
function ajouterCours(image,titre,prix){
    let div=document.createElement('div'),
    img=document.createElement('img'),
    h5=document.createElement('h5'),
    span=document.createElement('small');
    img.src=image;
    h5.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode('$'+prix));
    div.setAttribute('class','card p-0  text-center col-3 me-3 mb-3');
    div.setAttribute('style','width: 18rem;');
    img.setAttribute('class','card-img-top');
    h5.setAttribute('class','card-subtitle mt-2');

    div.append(img);
    div.append(h5);
    div.append(span);
    content.append(div);
}
r.forEach((e) => {
    ajouterCours(e.image,e.title,e.price)
});
function f(){
    location.href="courses.html";
}
document.getElementById("btn1").addEventListener("click",f);
document.getElementById("btn2").addEventListener("click",f);
