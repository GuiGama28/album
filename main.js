var images = [
    "foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg"
    ];
    
    var i = 0;
    function proximoslide() { 
     
       if(i == 3)
         {
           i=-1;
         }
       i = i + 1;
        document.getElementById("album").src = images[i];
     
    }    