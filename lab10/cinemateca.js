text = "<cinemateca>"+
"<film>"+
"<titlu limba=\"romana\">Filmul 1</titlu>"+
"<gen>Comedie</gen>"+
"<regizor>Regizor 1</regizor>"+
"<an_lansare>2020</an_lansare>"+
"<scenarist>Scenarist 1</scenarist>"+
"<producator>Producator 1</producator>"+
"<actor rol=\"principal\">Actor 1</actor>"+
"<actor rol=\"secundar\">Actor 2</actor>"+
"<scor>8.5</scor>"+
"</film>"+
"<film>"+
"<titlu limba=\"engleza\">Filmul 2</titlu>"+
"<gen>Drama</gen>"+
"<regizor>Regizor 2</regizor>"+
"<an_lansare>2018</an_lansare>"+
"<scenarist>Scenarist 2</scenarist>"+
"<producator>Producator 2</producator>"+
"<actor rol=\"principal\">Actor 3</actor>"+
"<scor>7.9</scor>"+
"</film>"+
"</cinemateca>";


parser = new DOMParser(); // se creează un analizor XML DOM

xmlDoc = parser.parseFromString(text,"text/xml"); 
// se creează un obiect XML DOM din stringul text

