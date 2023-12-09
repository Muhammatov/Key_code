let result = document.querySelector(".result")
let walls = document.querySelector(".wall")
let keys = document.querySelector("kod")
window.addEventListener("keydown", (e) => {
     
     walls.innerHTML = `
     <div class="Key">
       <p class="keys">Javascript Kalit kodi ${e.keyCode} </p>
     </div>
     <div class="number">
     <p class="num">${e.keyCode}</p>
     </div>
     <div class="result">
                    <!-- <div class="info  shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                         <p class="info_text">JavaScript hodisasi kalit kodi maʼlumotlarini olish uchun istalgan tugmani
                              bosing</p>
                    </div> -->
                    <div class="boxs">
                         <div class="box">
                              <div class="nav">
                                   <p class="even">event.key</p>
                              </div>
                              <p class="numRes">${e.key == " " ? "Space" : e.key}</p>
                         </div>
                         <div class="box">
                              <div class="nav">
                                   <p class="even">event.location</p>
                              </div>
                              <p class="numRes">${e.location}</p>
                         </div>
                         <div class="box">
                              <div class="nav">
                                   <p class="even">event.code</p>
                              </div>
                              <p class="numRes">${e.code}</p>
                         </div>
                    </div>

                    
                    
               </div>
     
     `


})
