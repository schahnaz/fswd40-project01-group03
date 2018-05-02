$(document).ready(function() {
    AOS.init({
        
        
    })
    
    data = JSON.parse(ourTeam);
// EXPAND CONTENT FUCNTION
function display() {
    for (i=0;i<data.length;i++) {
        let div =  document.createElement('div');
        div.style.display = "none";
        div.id = `card-expand-content${i}`
        fig = document.getElementsByTagName('figure')[i];
        img = document.createElement('img');
        imgAtt = document.createAttribute('src');
        imgAtt.value = data[i].image;
        img.setAttributeNode(imgAtt);
        $(img).insertBefore(`figcaption:eq(${i})`)
        nameText = document.createTextNode(data[i].name);
        breakline = document.createElement("br");
        $(nameText).insertBefore(`#text${i}`)
        $(breakline).insertBefore(`#text${i}`)
        let contentText = document.createTextNode(data[i].content);
        let container = document.getElementById('container');
        let card1 = document.getElementsByClassName('card')[i];
        div.appendChild(contentText)
        card1.appendChild(div)
}
}

display();

$('#text0 ,#text1,#text2,#text3').click(function() {
    if (this.id=='text0') {
        let j=0
        let card = document.getElementsByClassName('card')[j];
        $("div.card").not(`:eq(${j})`).toggle('slide',{direction:'right'},450);  
        $(card).toggleClass("trans")
        $(card).toggleClass("card-expand")
        $(`#card-expand-content${j}`)
        .css("width", "100%")
        .css("color", "black")
        .css("background-color", "white")
        .toggle('fade', 1000)     
    } else if (this.id=='text1') {
        let j=1
        let card = document.getElementsByClassName('card')[j];
        $("div.card").not(`:eq(${j})`).toggle('slide',{direction:'right'},450);  
        $(card).toggleClass("trans")
        $(card).toggleClass("card-expand")
        $(`#card-expand-content${j}`)
        .css("width", "100%")
        .css("color", "black")
        .css("background-color", "white")
        .toggle('fade', 1000)
    } else if (this.id=='text2') {
        let j=2
        let card = document.getElementsByClassName('card')[j];
        $("div.card").not(`:eq(${j})`).toggle('slide',{direction:'right'},450);  
        $(card).toggleClass("trans")
        $(card).toggleClass("card-expand")
        $(`#card-expand-content${j}`)
        .css("width", "100%")
        .css("color", "black")
        .css("background-color", "white")
        .toggle('fade', 1000)
    } else if (this.id=='text3') {
        let j=3
        let card = document.getElementsByClassName('card')[j];
        $("div.card").not(`:eq(${j})`).toggle('slide',{direction:'right'},450);  
        $(card).toggleClass("trans")
        $(card).toggleClass("card-expand")
        $(`#card-expand-content${j}`)
        .css("width", "100%")
        .css("color", "black")
        .css("background-color", "white")
        .toggle('fade', 1000)
    }
    $("#container").toggleClass("container-expand")  
    $('html, body').animate({
        scrollTop: $("nav").offset().top
    }, 1000);
});

});