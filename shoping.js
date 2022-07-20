class shoping {
  #parentElement = document.querySelector(".card");
  #data = document.querySelectorAll(".shoping-icon");

  paren() {
    console.log(this.#data);
    this.#parentElement.addEventListener("click", function () {
      document.querySelector(".purches-container").style.transform =
        "translateX(0%)";
    });
    document
      .querySelector(".close-pur-btn")
      .addEventListener("click", function () {
        document.querySelector(".purches-container").style.transform =
          "translateX(100%)";
      });
  }
  renderMarkup(data) {
    document
      .querySelector(".coon")
      .insertAdjacentHTML("afterbegin", this._generateMarkup(data));
    // let message = document.createElement("div");
    // message.classList.add("purches-item");
    // message.innerHTML = this._generateMarkup(data);
    // document.querySelector(".coon").append(message);
    //  document.querySelector(".coon").innerHTML = +this._generateMarkup(data);
  }
  _generateMarkup(data) {
    return `

    <div class="purches-item">
        <img src="${data.image}" height="60" width="60" alt="">
        <div class="pl">
          <h3 class='pur-name'>${data.prodectName}</h3>
          <h1 class="pur-price">${data.price}</h1>
        
          <div class="qun">
            <img src="./arrow-down-removebg-preview.png" height="30" width="30"  alt="">
            <p class="quantity">2</p>
            <img class="bottom" src="./arrow-top.png" height="20" width="20" alt="">

          </div>
        </div>
        <button class="delete-pur" data-set='${data.id}' onclick="delet(${data.id})">Delete</button>

    </div> 
    `;
  }
  delet() {}
}
export default new shoping();
