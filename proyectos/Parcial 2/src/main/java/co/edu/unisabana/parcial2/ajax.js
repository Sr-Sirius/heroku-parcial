console.log('funcionando');

document.querySelector('#perificar').addEventListener('click', traerDato);

function traerDato(){
    //console.log('dentro de la función');
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET','CatalogoRespuestas.json', true);
    
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let response = document.querySelector('#response');
            response.innerHTML = '';
            
            for(let item of datos){
                //console.log(item.Respuesta);
                response.innerHtml += `
                    <tr>ID pregunta
                        <td>${item.ID}</td>
                        <td>${item.RESPUESTA}</td>
                    </tr>
                        `
            }
        }
    }
}
