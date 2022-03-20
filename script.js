let listSpans = document.querySelectorAll(".list span");

let submitBtn = document.querySelector(".submit");

let content = document.querySelector(".content");


let listValue = 0;


listSpans.forEach(listSpan =>{
    listSpan.addEventListener("click", ()=>{
        
        removeActive();
        
        listSpan.classList.add("active");
        
        listValue = listSpan.innerText;
        
    })
    
})

removeActive = ()=>{
    listSpans.forEach(listSpan =>{
        listSpan.classList.remove("active");
    })
}


submitBtn.addEventListener("click", ()=>{
    console.log(listValue);
    
    if(listValue != 0){
    content.innerHTML = 
    `<div class="thank-you">
        <img
          src="./images/illustration-thank-you.svg"
          alt="thankyou"
          class="thank-you-img"
        />
        <p class="result">You selected ${listValue} out of 5</p>
        <h2 class="thank-you__title">Thank you!</h2>
        <p class="thank-you__description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
    </div>
  `;
    }
})