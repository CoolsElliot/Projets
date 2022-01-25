/*CREATE VARIABLES FOR SECTIONS*/

    const navBar = document.querySelector("nav");
    const header = document.querySelector("header");
    const shop = document.querySelector("#products");
    let allA = document.querySelectorAll("a");
    allA = [...allA];
    let input = navBar.querySelectorAll("span")[1];
    let allI = navBar.querySelectorAll("i");
    allI = [...allI];

/* NAVBAR STICKY */

function navbarStickyOn(){
    if(window.scrollY > window.innerHeight === true){
        navBar.style.position = "sticky";
        navBar.style.top = "0";
        navBar.style.zIndex = 1;
        navBar.style.backgroundColor = "black";
        navBar.querySelector("h1").style.color = "white";
        for(let i = 0; i < allA.length; i++){
            allA[i].classList.remove("text-dark");
            allA[i].classList.add("text-light");            
        }
        input.classList.add("text-light");
        for(let i = 0; i < allI.length; i++){
            allI[i].classList.add("text-light");
        }
    }
};

function navbarStickyOff(){
    if(window.scrollY < window.innerHeight === true){
        navBar.className = "row pt-2 pb-2";
        navBar.style = "background-color: rgb(245,235,223); border-bottom: 1px solid #b8b2b2";
        navBar.querySelector("h1").style.color = "black";
        for(let i = 0; i < allA.length; i++){
            allA[i].classList.remove("text-light");
            allA[i].classList.add("text-dark");            
        }
        input.classList.remove("text-light");
        for(let i = 0; i < allI.length; i++){
            allI[i].classList.remove("text-light");
        }
    }
};

window.addEventListener("scroll", () =>{
    navbarStickyOn();
    navbarStickyOff();
});

/*CREATE PRODUCTS SECTION ELEMENTS*/

    const divColTitle = document.createElement("div");
    divColTitle.className = "col-lg-12 d-flex flex-column align-items-center py-5";

    const p1Title = document.createElement("p");
    const p2Title = document.createElement("p");
    const p3Title = document.createElement("p");

    p1Title.className = "fs-5 fw-bold";
    p2Title.className = "text-center text-secondary m-0 lead";
    p3Title.className = "text-center text-secondary m-0 lead";
    p2Title.setAttribute("style", "font-size: 12px");
    p3Title.setAttribute("style", "font-size: 12px");

    p1Title.innerText = "Recent Products";
    p2Title.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    p3Title.innerText = "Neque, similique. Lorem ipsum dolor sit amet.";


    const divContainer = document.createElement("div");
    const divRow = document.createElement("div");
    const divCol1 = document.createElement("div");
    const divCol2 = document.createElement("div");
    const divImg = document.createElement("div");


    divContainer.className = "container";
    divRow.className = "row flex-column align-items-center p-0 pb-7";
    divCol1.className = "col-lg-12 d-flex justify-content-center";
    divCol2.className = "col-lg-12 d-flex justify-content-center";
    divImg.className = "d-flex flex-column align-items-center ms-4 me-2 hover";


    const img1 = {
        name : 1,
        source : "./public/img/fashion/01.jpg",
        classImg : "img-fluid imgHover",
        text : "Textured Sweater",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$50.00",
        promo : ""
    }
    const img2 = {
        name : 2,
        source : "./public/img/fashion/02.jpg",
        classImg : "img-fluid imgHover",
        text : "Traveller Shirt",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$510.00",
        promo : ""
    }
    const img3 = {
        name : 3,
        source : "./public/img/fashion/03.jpg",
        classImg : "img-fluid imgHover",
        text : "Crewneck Sweatshirt",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$20.00 - $50.00",
        promo : ""
    }
    const img4 = {
        name : 4,
        source : "./public/img/fashion/04.jpg",
        classImg : "img-fluid imgHover",
        text : "Skinny Trousers",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$200.00",
        promo : "$160.00"
    }
    const img5 = {
        name : 5,
        source : "./public/img/fashion/05.jpg",
        classImg : "img-fluid imgHover",
        text : "High Neck Sweater",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$40.00",
        promo : "$35.00"
    }
    const img6 = {
        name : 6,
        source : "./public/img/fashion/06.jpg",
        classImg : "img-fluid imgHover",
        text : "Sleeve Sweater",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$140.00",
        promo : "$120.00"
    }
    const img7 = {
        name : 7,
        source : "./public/img/fashion/07.jpg",
        classImg : "img-fluid imgHover",
        text : "Pocket SweatShirt",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$410.00",
        promo : ""
    }
    const img8 = {
        name : 8,
        source : "./public/img/fashion/08.jpg",
        classImg : "img-fluid imgHover",
        text : "Top With Pleated",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$20.00 - $50.00",
        promo : ""
    }
    const img9 = {
        name : 9,
        source : "./public/img/fashion/09.jpg",
        classImg : "img-fluid imgHover",
        text : "Cotton Sweater",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$180.00",
        promo : "$155.00"
    }
    const img10 = {
        name : 10,
        source : "./public/img/fashion/10.jpg",
        classImg : "img-fluid imgHover",
        text : "Texture Plain Regular",
        classText : "fw-bold fs-6 m-0 mt-2",
        classSpan : "text-secondary mb-3",
        styleSpan : "font-size: 12px",
        price : "$85.00",
        promo : "$70.00"
    }

    let products = [];

    products.push(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10);

    shop.appendChild(divColTitle);
    divColTitle.appendChild(p1Title);
    divColTitle.appendChild(p2Title);
    divColTitle.appendChild(p3Title);
    shop.appendChild(divContainer);
    divContainer.appendChild(divRow);
    divRow.appendChild(divCol1);
    divRow.appendChild(divCol2);

    for(let i = 0; i < products.length; i++){

        let newDivImg = document.createElement("div");
        let newImg = document.createElement("img");
        let newPImg = document.createElement("p");
        let newSpanImg = document.createElement("span");
        let newDiv = document.createElement("div");
        let divIcon1 = document.createElement("div");
        let divIcon2 = document.createElement("div");
        let icon1 = document.createElement("i");
        let icon2 = document.createElement("i");

        if(i < 5){
            newDivImg.className = divImg.className;
            newDivImg.style.position = "relative";
            newDivImg.style.overflow = "hidden";
            newImg.setAttribute("src",products[i].source);
            newImg.className = products[i].classImg;
            newPImg.innerText = products[i].text;
            newPImg.className = products[i].classText;
            newSpanImg.className = products[i].classSpan;
            newSpanImg.setAttribute("style",products[i].styleSpan);
            newDiv.style.width = "100%";
            newDiv.style.position = "absolute";
            newDiv.className = "d-flex divHover";
            newDiv.style.backgroundColor = "#333";
            newDiv.style.bottom = "-32px";
            divIcon1.style.width = "50%";
            divIcon1.style.borderRight = "1px solid lightgrey";
            divIcon1.className = "d-flex justify-content-center";
            divIcon2.style.width = "50%";
            divIcon2.className = "d-flex justify-content-center";
            icon1.className = "fas fa-heart p-2 text-light hover1";
            icon2.className = "fas fa-shopping-cart p-2 text-light hover2";

            if(products[i].promo !== ""){
                
                let newPriceDel = document.createElement("del");
                newPriceDel.innerText = products[i].price;
                newSpanImg.innerText = `${products[i].promo}`;
                newSpanImg.prepend(newPriceDel);
                console.log(newPriceDel);

            }else{
                newSpanImg.innerText = products[i].price;
            }
            
            divCol1.appendChild(newDivImg);
            newDivImg.appendChild(newImg);
            newDivImg.appendChild(newPImg);
            newDivImg.appendChild(newSpanImg);
            newDivImg.appendChild(newDiv);
            newDiv.appendChild(divIcon1);
            divIcon1.appendChild(icon1);
            newDiv.appendChild(divIcon2);
            divIcon2.appendChild(icon2);

        }else{
            newDivImg.className = divImg.className;
            newDivImg.style.position = "relative";
            newDivImg.style.overflow = "hidden";
            newImg.setAttribute("src",products[i].source);
            newImg.className = products[i].classImg;
            newPImg.innerText = products[i].text;
            newPImg.className = products[i].classText;
            newSpanImg.className = products[i].classSpan;
            newSpanImg.setAttribute("style",products[i].styleSpan);
            newDiv.style.width = "100%";
            newDiv.style.position = "absolute";
            newDiv.className = "d-flex divHover";
            newDiv.style.backgroundColor = "#333";
            newDiv.style.bottom = "-32px";
            divIcon1.style.width = "50%";
            divIcon1.style.borderRight = "1px solid lightgrey";
            divIcon1.className = "d-flex justify-content-center";
            divIcon2.style.width = "50%";
            divIcon2.className = "d-flex justify-content-center";
            icon1.className = "fas fa-heart p-2 text-light hover1";
            icon2.className = "fas fa-shopping-cart text-light p-2 hover2";

            if(products[i].promo !== ""){
                
                let newPriceDel = document.createElement("del");
                newPriceDel.innerText = products[i].price;
                newSpanImg.innerText = `${products[i].promo}`;
                newSpanImg.prepend(newPriceDel);

            }else{
                newSpanImg.innerText = products[i].price;
            }
            
            divCol2.appendChild(newDivImg);
            newDivImg.appendChild(newImg);
            newDivImg.appendChild(newPImg);
            newDivImg.appendChild(newSpanImg);
            newDivImg.appendChild(newDiv);
            newDiv.appendChild(divIcon1);
            divIcon1.appendChild(icon1);
            newDiv.appendChild(divIcon2);
            divIcon2.appendChild(icon2);
        }

    };


    let divsImages = document.querySelectorAll(".hover");
    divsImages = [...divsImages];

    let divIcones = document.querySelectorAll(".divHover");
    divIcones = [...divIcones];

    let images = document.querySelectorAll(".imgHover");
    images = [...images];

    let imagesSources = ["./public/img/fashion/01.jpg","./public/img/fashion/02.jpg","./public/img/fashion/03.jpg","./public/img/fashion/04.jpg","./public/img/fashion/05.jpg","./public/img/fashion/06.jpg","./public/img/fashion/07.jpg","./public/img/fashion/08.jpg","./public/img/fashion/09.jpg","./public/img/fashion/10.jpg"];

    let imagesSourcesHover = ["./public/img/fashion/01_02.jpg","./public/img/fashion/02_02.jpg","./public/img/fashion/03_02.jpg","./public/img/fashion/04_02.jpg","./public/img/fashion/05_02.jpg","./public/img/fashion/06_02.jpg","./public/img/fashion/07_02.jpg","./public/img/fashion/08_02.jpg","./public/img/fashion/09_02.jpg","./public/img/fashion/10_02.jpg"];
    
    let icones1 = document.querySelectorAll(".hover1");
    icones1 = [...icones1];

    let icones2 = document.querySelectorAll(".hover2");
    icones2 = [...icones2];

    let num1 = document.querySelector(".hov1");

    let num2 = document.querySelector(".hov2");

    let compt = 0;

    let compt2 = 0;

    for( let i = 0; i < divsImages.length; i++){
        divsImages[i].addEventListener("mouseover", () =>{
            divIcones[i].style.bottom = "60px";
            images[i].setAttribute("src",imagesSourcesHover[i]);
        });
        divsImages[i].addEventListener("mouseout", () =>{
            divIcones[i].style.bottom = "-32px";
            images[i].setAttribute("src",imagesSources[i]);
        });        
    };

    for( let i = 0; i < icones1.length; i++){
        icones1[i].addEventListener("click", () =>{
            if(icones1[i].style.backgroundColor == "red"){
                num1.innerText = Number(compt - 1);
                icones1[i].style.backgroundColor = "#333";
                compt--;
            }else{
                num1.innerText = Number(compt + 1);
                icones1[i].style.backgroundColor = "red";
                compt++;
            }
        });       
    };

    for( let i = 0; i < icones2.length; i++){
        icones2[i].addEventListener("click", () =>{
            if(icones2[i].style.backgroundColor == "green"){
                num2.innerText = Number(compt2 - 1);
                icones2[i].style.backgroundColor = "#333";
                compt2--;
            }else{
                num2.innerText = Number(compt2 + 1);
                icones2[i].style.backgroundColor = "green";
                compt2++;
            }
        });       
    };

/* TESTIMONIALS */

    let btnLeft = document.querySelector("#btnLeft");
    let btnRight = document.querySelector("#btnRight");
    let carouselItem1 = document.querySelector("#carouselItem1");
    let carouselItem2 = document.querySelector("#carouselItem2");
    let carouselItem3 = document.querySelector("#carouselItem3");
    let carouselItems = [carouselItem1,carouselItem2, carouselItem3];
    carouselItems = [...carouselItems];

    btnLeft.addEventListener("mouseover", () =>{
        btnLeft.querySelector("i").classList.toggle("text-secondary");
    });

    btnRight.addEventListener("mouseover", () =>{
        btnRight.querySelector("i").classList.toggle("text-secondary");
    });

    btnLeft.addEventListener("mouseout", () =>{
        btnLeft.querySelector("i").classList.toggle("text-secondary");
    });

    btnRight.addEventListener("mouseout", () =>{
        btnRight.querySelector("i").classList.toggle("text-secondary");
    });

    let i = 0;

    btnLeft.addEventListener("click", () =>{
        if(i === 0){
            if(carouselItems[2].classList.contains("switch")){
                carouselItems[2].classList.toggle("switch");
            };
            carouselItems[i].classList.toggle("d-none");
            i = 2;
            carouselItems[i].classList.toggle("d-none");
            carouselItems[i].classList.toggle("switch");
        }else{
            if(carouselItems[i-1].classList.contains("switch")){
                carouselItems[i-1].classList.toggle("switch");
            };
            carouselItems[i].classList.toggle("d-none");
            i--;
            carouselItems[i].classList.toggle("d-none");
            carouselItems[i].classList.toggle("switch");
        }   
    });

    btnRight.addEventListener("click", () =>{
        if(i === 2){
            if(carouselItems[0].classList.contains("switch")){
                carouselItems[0].classList.toggle("switch");
            };
            carouselItems[i].classList.toggle("d-none");
            i = 0;
            carouselItems[i].classList.toggle("d-none");
            carouselItems[i].classList.toggle("switch");
        }else{
            if(carouselItems[i+1].classList.contains("switch")){
                carouselItems[i+1].classList.toggle("switch");
            };
            carouselItems[i].classList.toggle("d-none");
            i++;
            carouselItems[i].classList.toggle("d-none");
            carouselItems[i].classList.toggle("switch");
        }
    });


