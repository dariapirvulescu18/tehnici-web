function drawTable(nrows, ncols) {
   document.createElement("html");
   var table = document.createElement('table');
   var i,j;
   for(i=0;i<nrows;i++){
     var row = document.createElement('tr');
      for(j=0;j<ncols;j++){
         var col = document.createElement('td');
         col.classList.add('r'+i,'c'+j);
         col.addEventListener("click",eventhandle);
         row.appendChild(col);
      }
        
      table.appendChild(row);
   }
  
   document.getElementById('container').appendChild(table);
   /* 
      1. Generați un tabel cu 'nrows' rânduri și 'ncols' coloane 
      și adăugați-l în div-ul cu id-ul 'container'. 
   */
   }   
  
    function colorCol(column, color) {
    
    var cells= document.getElementsByClassName('c'+ column);

      for(var i=0;i<cells.length;i++)
         cells[i].style.backgroundColor=color;


    /*
       2. Colorați coloana 'column' din tabla de desenat cu culoarea 'color'.
    */
    }
    
    function colorRow(row, color) {
      var rows= document.getElementsByClassName('r'+ row);

      for(var i=0;i<rows.length;i++)
         rows[i].style.backgroundColor=color;

    /*
       2. Colorați rândul 'row' din tabla de desenat cu culoarea 'color'.
    */
    }
    
    function rainbow(target) {
      alert("bbbbbb");
      let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
   /*
      3. Desenați un curcubeu pe verticală sau orizontală conform argumentului 'target' folosind culorile din 'colors' și funcțiile 'colorCol' și 'colorRow'.     
   */
       if(target == 'orizontala'){
           var j;
           var randuri = document.getElementsByTagName("tr");
           var nr_culoare = 0;
           for(j = 0; j < randuri.length; j++){
               colorRow(j,colors[nr_culoare]);
               if((j+1)% (randuri.length/colors.length) == 0)
                   nr_culoare++;
           }
       }
       else{
           if(target == 'verticala'){
               var j;
               var coloane = document.getElementsByTagName("tr")[0].getElementsByTagName("td");
               var nr_culoare = 0;
               for(j = 0; j < coloane.length; j++){
                   colorCol(j,colors[nr_culoare]);
                   if((j+1)% (coloane.length/colors.length) == 0)
                       nr_culoare++;
               }
           }
       }
   }




       /*
       3. Desenați un curcubeu pe verticală sau orizontală conform argumentului 'target' folosind culorile din 'colors' și funcțiile 'colorCol' și 'colorRow'.     
    */
    
    
    function getNthChild(element, n) {
      
      return element.children[n-1];

    /*
       4. Întoarceți al n-lea element copil al unui element dat ca argument.
    */
    };
    
    function drawPixel(row, col, color) {	
      document.getElementsByClassName('r'+(row-1).toString())[col-1].style.backgroundColor = color;


    /*
       5. Colorați celula de la linia 'row' și coloana 'col' cu culoarea `color'.
    */
    }
    
    function drawLine(r1, c1, r2, c2, color) {

      if(r1 == r2){
         var i;
         for(i = c1; i <= c2; i++)
             drawPixel(r1,i,color);
     }       
     else{
         if(c1 == c2){
             var i;
             for(i = r1; i <= r2; i++)
                 drawPixel(i,c1,color);
         }
     }
 
 

    /*
       6. Desenați o linie (orizontală sau verticală) de la celula aflată 
       pe linia 'r1', coloana 'c1' la celula de pe linia 'r2', coloana 'c2'
       folosind culoarea 'color'. 
       Hint: verificați mai întâi că punctele (r1, c1) și (r2, c2) definesc
       într-adevăr o linie paralelă cu una dintre axe.
    */
    }
    
    function drawRect(r1, c1, r2, c2, color) {
      for (var i = r1; i <= r2; i++) {
         for (var j = c1; j <= c2; j++) {
            drawPixel(i, j, color);
         }
      }
    /*
       7. Desenați, folosind culoarea 'color', un dreptunghi cu colțul din 
       stânga sus în celula de pe linia 'r1', coloana 'c1', și cu 
       colțul din dreapta jos în celula de pe linia 'r2', coloana 'c2'.
    */
    }
    
    function drawPixelExt(row, col, color) {
      if(row>rows)
      {
          for (var i=rows+1;i<=row;i++)
          {
          newy=document.createElement("tr");
          document.getElementById("maintable").appendChild(newy);
          newy.setAttribute("id","tr"+i)
          for (j=1;j<=cols;j++)
          {newz=document.createElement("td");
          document.getElementById("tr"+i).appendChild(newz);
          newz.setAttribute("id","r"+i+"c"+j)}
          }
      }
      if (col>cols)
      {
          console.log("colll")
          for(var i=1;i<=row;i++)
          {for(var j=cols+1;j<=col;j++)
          {newz=document.createElement("TH");
          document.getElementById("tr"+i).appendChild(newz);
          newz.setAttribute("id","r"+i+"c"+j)}
      }
      }
      drawPixel(row,col,color);
    /*
       8. Colorați celula de la linia 'row' și coloana 'col' cu culoarea 'color'.
       Dacă celula nu există, extindeți tabla de desenat în mod corespunzător.
    */
    }
    
    function colorMixer(colorA, colorB, amount){
       let cA = colorA * (1 - amount);
       let cB = colorB * (amount);
       return parseInt(cA + cB);
    }
    
    function drawPixelAmount(row, col, color, amount) {
       /* 
       9. Colorați celula la linia 'row' și coloana 'col' cu culoarea 'color'
       în funcție de ponderea 'amount' primită ca argument (valoare între 0 și 1). 
       Dacă 'amount' are valoarea:
       1, atunci celula va fi colorată cu 'color'
       0, atunci celula își va păstra culoarea inițială
       pentru orice altă valoare, culoarea inițială și cea dată de argumentul 
       'color' vor fi amestecate. De exemplu, dacă ponderea este 0.5, atunci 
       culoarea inițială și cea nouă vor fi amestecate în proporții egale (50%). 
       */
    
       /*   
       Hint 1: folosiți funcția colorMixer de mai sus.
       Hint 2: pentru un argument 'color' de forma 'rgb(x,y,z)' puteți folosi
       let newColorArray = color.match(/\d+/g); 
       pentru a obține un Array cu trei elemente, corespunzătoare valorilor
       asociate celor trei culori - newColorArray = [x, y, z]
       
       Hint 3: pentru a afla culoarea de fundal a unui element puteți folosi
       metoda getComputedStyle(element). Accesând proprietatea backgroundColor 
       a obiectului întors, veți obține un string de forma 'rgb(x,y,z)'.
       */
    }
    
    function delRow(row) {
    /*
       10. Ștergeți linia cu numărul 'row' din tabla de desenat.
    */
    }
    
    function delCol(col) {
    /*
       10. Ștergeți coloana cu numărul 'col' din tabla de desenat.
    */
    }
    
    function shiftRow(row, pos) {
    /*
       11. Aplicați o permutare circulară la dreapta cu 'pos' poziții a
       elementelor de pe linia cu numărul 'row' din tabla de desenat. 
    */
    }
    
    function jumble() {
    /*
       12. Folosiți funcția 'shiftRow' pentru a aplica o permutare circulară
       cu un număr aleator de poziții fiecărei linii din tabla de desenat.
    */
    }
    
    function transpose() {
    /*
       13. Transformați tabla de desenat în transpusa ei.
    */
    }
    
    function flip(element) {
    /*
       14. Inversați ordinea copiilor obiectului DOM 'element' primit ca argument.
    */
    }
    
    function mirror() {
    /*
       15. Oglindiți pe orizontală tabla de desenat: luați jumătatea stângă a tablei, 
       aplicați-i o transformare flip și copiați-o în partea dreaptă a tablei.
    */
    }
    
    function smear(row, col, amount) {
    /*
       16. Întindeți culoarea unei celule de pe linia 'row' și coloana 'col' în celulele
       învecinate la dreapta, conform ponderii date de 'amount' (valoare între 0 și 1).
       Cu colorarea fiecărei celule la dreapta, valoarea ponderii se înjumătățește. 
       Hint: folosiți funcția 'drawPixelAmount'.
    */
    }
    
    function eventhandle(event){
      let cell=event.target;
      let d=cell.classList;
      
      row=d[0];
      col=d[1];
      
      let r=row.slice(1);
      let c=col.slice(1);
      let color_p=document.getElementById("color_picker");
       let color=color_p.value;
     
      drawPixel(r,c,color);
    }
    
    function eventr(){
      alert("aaaa");
      rainbow('orizontal');
    }
     
    window.onload = function(){
      const rows = 30;
      const cols = 30;	
      drawTable(rows, cols);
      rainbow('verticala');
      drawPixel(2,3,'black');
      drawLine(1,3,1,10,'black');
      drawRect(5,5,19,18,'black');
      let a=document.getElementById("button").addEventListener("click",eventr);

}