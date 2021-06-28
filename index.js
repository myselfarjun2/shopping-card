var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};


var detailsWrapper = document.getElementById("details-wrapper");
var leftBigImg = document.getElementById("left-big-img");

// creating main card to render on html
function createCard(productDetails) {
  var heading = document.createElement("h1");
  heading.classList = "details-heading";
  heading.innerHTML = productDetails.name;
  detailsWrapper.appendChild(heading);

  var brand = document.createElement("p");
  brand.innerHTML = productDetails.brand;
  detailsWrapper.appendChild(brand);

  var price = document.createElement("p");
  var spanTag = document.createElement("span");
  spanTag.classList = "price-value";
  spanTag.innerHTML = productDetails.price;
  price.innerHTML = "Price: Rs " ;
  price.appendChild(spanTag)
  detailsWrapper.appendChild(price);

  var descriptionPara = document.createElement("p");
  descriptionPara.innerHTML = "Description";
  detailsWrapper.appendChild(descriptionPara);

  var descDetails = document.createElement("p");
  descDetails.classList = "details-desc-data";
  descDetails.innerHTML = productData.description;
  detailsWrapper.appendChild(descDetails);

  var previewPara = document.createElement("p");
  previewPara.innerHTML = "Product Preview";
  detailsWrapper.appendChild(previewPara);

  previwCard(productDetails); //function call for creating preview card

  var cartBtn = document.createElement("button");
  cartBtn.id = "btn-add-cart";
  cartBtn.innerHTML = "Add to Cart";
  detailsWrapper.appendChild(cartBtn);
}

//function call for creating main card to render html
createCard(productData);  

// initiate  preview card loop
function previwCard(productData) {
  var previewImgDiv = document.createElement("div");
  previewImgDiv.classList = "details-product-img-wrapper";

  for (i = 0; i < productData.photos.length; i++) {
    function test(pdata, i, imageWrapper) { //loop function for id or index
      createPreviewCard(pdata, i, imageWrapper); 
      //call for creating preview image
    }
    test(productData, i, previewImgDiv); //call of loop function
  }

  detailsWrapper.appendChild(previewImgDiv);
}

//function for creating preview image by loop and adding event listner
function createPreviewCard(productData, indx, imageWrapperDiv) {
  var previewImg = document.createElement("img");
  previewImg.classList = "details-product-img";
  previewImg.src = productData.photos[indx];
  previewImg.id = indx;
  imageWrapperDiv.appendChild(previewImg);

  if (previewImg.id == 0) {
    previewImg.classList.add("active-card")
  }

  previewImg.addEventListener("click", function btnClicked() {
    leftBigImg.src = productData.photos[indx];
    var allPreviewCard = document.getElementsByClassName("details-product-img");
    for(i=0; i<allPreviewCard.length; i++) {
      allPreviewCard[i].classList.remove("active-card")
      this.classList.add("active-card")
    }
  });
}


