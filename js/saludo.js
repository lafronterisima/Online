

       function saludo(){
   
          fecha = new Date(); 
          hora = fecha.getHours();

           if(hora >= 0 && hora < 8){
            pSaludo.textContent = "";
			img.src="imagenes/dia.gif";
          }
          
  
           if(hora >= 8 && hora < 12){
            pSaludo.textContent = "";
			img.src="imagenes/tiempo.png";
          }      
            
		   if(hora >= 12 && hora < 18){
            pSaludo.textContent = "";
		    img.src="imagenes/tarde.gif";
          }
		  
          if(hora >= 18 && hora < 24){
             pSaludo.textContent = "";
		     img.src="imagenes/noche.png"; 
          }	  
       }

   var img = document.getElementById("tiempo");
   var pSaludo = document.getElementById("txtsaludo");
   setInterval(saludo,1000);
   

  
  
