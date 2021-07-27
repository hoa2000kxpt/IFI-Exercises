// Get the values of thumbnails, slider, Left Arrow and Right Arrow button
let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonPre = document.getElementById("slide-pre");
let buttonNext = document.getElementById("slide-next");

// Click the Left Arrow, the slider move left
buttonPre.addEventListener("click", () => {
    slider.scrollLeft -= 273;
    // if (slider.scrollLeft < 0) {
    //     slider.scrollLeft = maxScrollLeft;
    // }
}) 

// Click the Right Arrow, the slider move right
buttonNext.addEventListener("click", () => {
    let oldNum = slider.scrollLeft;
    slider.scrollLeft += 273;
    let newNum = slider.scrollLeft;
    console.log(oldNum);
    console.log(newNum);
    if (oldNum == newNum) {
        slider.scrollLeft = 0;
    }
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// console.log(maxScrollLeft);



// Save temporary data based on JSON format 
let items  =  [
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 1",
        code: "Mã sản phẩm: MH2-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    }, 

    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 2",
        code: "Mã sản phẩm: MH3-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    }, 
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 3",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    }, 
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 4",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    },
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 5",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    },
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 6",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    },
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 7",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    },
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 8",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    },
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 9",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    },
    {   
        image: "https://baotinmanhhai.vn/web/uploads/lac_web_2.jpg",
        title: "Demo Product 10",
        code: "Mã sản phẩm: MH4-V",
        link: "/Products/Body/275-vong-tay-mat-sao-bien-da-emerald/275-vong-tay-mat-sao-bien-da-emerald.html"
    },
]

// View the information of the product
let wrapper = $('#slider');
for (let key in items) {
    let container = $('<div class="thumbnail"></div>');
    let details = $('<div class="product-details"></div>')
    wrapper.append(container);
    let image = container.append('<img src="' + items[key].image + '">');
    image.append(details);
    // let product_details = $('<div class="product-details"></div>');
    details.append('<h2>' + items[key].title + '</h2>');
    details.append('<p>' + items[key].code + '</p>');
    details.append('<a href="'+ items[key].link +'">Liên hệ</a>');

}
    

