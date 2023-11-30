window.onload = function() {
   console.log("Pagina s-a incarcat");
   draw();
   function draw() {
      const canvas = document.getElementById("canvdoor");
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        canvas.style.backgroundColor = "white";
        ctx.beginPath();
      //   draw rectangle
      ctx.moveTo(50, 50);
      ctx.lineTo(50, 200);
      ctx.lineTo(150, 200);
      ctx.lineTo(150,50);
      ctx.lineTo(50,50);
      ctx.stroke();
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";

      ctx.fill();
      ctx.closePath();
      // draw door
      ctx.beginPath();
      ctx.moveTo(60,60);
      ctx.lineTo(60,210);
      ctx.lineTo(140,210);
      ctx.lineTo(140,60);
      ctx.strokeStyle = "white";
      ctx.stroke();
     
      ctx.fillStyle = "white";
      ctx.fill();
      }
    }    
   
             
   function colorBlack() {
      // colorăm ușa în negru    
   }
}   
        
       
      
