var season = prompt("Enter season option \n 1='summer'\n 2='winter' \n 3='autum' \n 4='spring'");

if (season==1) {
document.write(`
    <div class="main d-flex justify-content-center align-items-center bg-opacity-100">
        
      <div class="card rounded-4" style="width: 18rem; background-color: aliceblue">
        <img src="summer-1.webp" class="card-img-top rounded-4" alt="..." width="285px" height="220px" >
        <div class="card-body">
          <h1 class="card-title">summer</h1>
          <p class="card-text fw-bold">
            Warm sun, blue skies, and happy vibes — that’s the beauty of summer.
          </p>
        </div>
      </div>
    </div>
    `);

 } else if (season==2){
    document.write(`
        <div class="main1 d-flex justify-content-center align-items-center bg-opacity-100">
        
      <div class="card rounded-4" style="width: 18rem; background-color: aliceblue">
        <img src="/winter.gif" class="card-img-top rounded-4" alt="..." width="285px" height="220px" >
        <div class="card-body">
          <h1 class="card-title">winter</h1>
          <p class="card-text fw-bold">
        Chilly days and foggy mornings make winter peaceful and refreshing.
          </p>
        </div>
      </div>
    </div>
        `)

 } else if (season==3){
    document.write(`
        <div class="main2 d-flex justify-content-center align-items-center bg-opacity-100">
        
      <div class="card rounded-4" style="width: 18rem; background-color: aliceblue">
        <img src="/autum.gif" class="card-img-top rounded-4" alt="..." width="285px" height="220px" >
        <div class="card-body">
          <h1 class="card-title">Autum</h1>
          <p class="card-text">
        🍂 Cool breezes, golden leaves, and gentle sunlight — autumn feels calm and beautiful.
          </p>
        </div>
      </div>
    </div>
        
        `)

 } else if(season==4){
    document.write(`
         <div class="main3 d-flex justify-content-center align-items-center bg-opacity-100">
        
      <div class="card rounded-4" style="width: 18rem; background-color: aliceblue">
        <img src="/spring1.gif" class="card-img-top rounded-4" alt="..." width="285px" height="220px" >
        <div class="card-body">
          <h1 class="card-title">Spring</h1>
          <p class="card-text fw-bold">
    🌸 Fresh flowers, soft sunshine, and new beginnings — spring feels bright and lively.
          </p>
        </div>
      </div>
    </div>
        
        `)
 }
