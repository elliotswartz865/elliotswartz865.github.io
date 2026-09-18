$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // toggleGrid();


    // TODO 2 - Create Platforms
 createPlatform(550, 450, 100, 10)
            createPlatform(650, 650, 100, 10)
            createPlatform(400, 400, 100, 10)
            createPlatform(300, 350, 100, 10)
            createPlatform(200, 150, 100, 10)
            createPlatform(450, 250, 100, 10)
            createPlatform(750, 550, 100, 10)

    // TODO 3 - Create Collectables
createCollectable("steve",600,100,0.5,0.7);
createCollectable("diamond", 500, 100, 0.5, 0.7);
createCollectable("kennedi", 800,100,0.5,0.7);


    
    // TODO 4 - Create Cannons
createCannon("right", 200, 2000);
createCannon("right", 600, 2000);
createCannon("top", 400, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
