export class prodects {
  constructor(image, prodectName, price, quantity, id) {
    this.image = image;
    this.prodectName = prodectName;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
  }
}
class model {
  #parentElement = document.querySelector(".exclusive-prodects");
  _renderMarcup(data) {
    this.#parentElement.insertAdjacentHTML(
      "beforeend",
      this._generatemarcup(data)
    );
  }
  arr(datas) {
    datas.forEach((element) => {
      //console.log(datas);
      this._renderMarcup(element);
    });
  }

  mousehover() {
    const prodectHover = document.querySelectorAll(".prodectss");
    const icon = document.querySelectorAll(".pro-img");
    prodectHover.forEach((mov, i) => {
      mov.addEventListener("mouseover", () => {
        mov.classList.add("ex-prodect-hover");
        icon[i].style.display = "flex";

        document.querySelectorAll(".p--name")[i].style.color = "red";
      });
    });
    prodectHover.forEach((mov, i) => {
      mov.addEventListener("mouseout", () => {
        mov.classList.remove("ex-prodect-hover");

        icon[i].style.display = "none";
        document.querySelectorAll(".p--name")[i].style.color = "gray";
      });
    });
  }
  _generatemarcup(data) {
    return `
        <div class="prodectss">
         <div class="ex-prodect-container ">
            <div class="cls">
              <img class="p-img"  src="${data.image}" height="245" width="250" alt="" />
              <div class="prodect-details">
                <p class="p--name">${data.prodectName}</p>
                <h3>$ ${data.price} <span> 20% Off</span></h3>
                <ul>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                </ul>
              </div>
            </div>
            
            <div class="pro-img ">
              <img class="shoping-icon" src="./shoipng-card-removebg-preview.png" height="60" width="60" class="mouse-img" alt="">
              <img src="./heart-removebg-preview.png" height="60" width="60" class="mouse-img" alt="">
            </div>
          </div>
       </div>
        `;
  }
  total(data) {
    let total = data.reduce((acc, mov, i) => acc + mov, 0);
    return total;
  }
}
export default new model();
