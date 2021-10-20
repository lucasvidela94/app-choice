const preguntasData = [

    {
        pregunta: '¿Quien es el presidente de Argentina?',
            a: 'Lionel Messi',
            b: 'Alberto Fernandez',
            c: 'Sergio Massa',
            d: 'Ninguna de las anteriores',
            correcta:'b'
    } , {
        pregunta:'¿Cuantos provincias tiene Argentina?',
            a: '24',
            b: '20',
            c: '18',
            d:'23',
            correcta:'d'
    } , {
        pregunta: '¿Como se llama el lenguaje ejecutado en este script?' ,
            a: 'Java',
            b: 'C++',
            c: 'Javascript',
            d: 'Python',
            correcta: 'c'
    } , {
        pregunta: '¿Quien gano la copa America edicion 2021?' ,
            a: 'Brasil',
            b: 'Chile' ,
            c: 'Qatar' ,
            d: 'Argentina' ,
            correcta: 'd'
    } , {
        pregunta: '¿En que año se acabo el mundo tal como lo conocemos?',
            a:'No se acabo',
            b:'2022',
            c:'3000',
            d:'2030',
            correcta:'a'
    }

]
const respuestasEl = document.querySelectorAll('.respuesta');
    
const elementoPregunta= document.getElementById('pregunta');
const texto_a = document.getElementById('texto-a');
const texto_b= document.getElementById('texto-b');
const texto_c=document.getElementById('texto-c');
const texto_d=document.getElementById('texto-d');
const botonEnviar=document.getElementById('enviar');

let preguntaActual= 0;
let puntaje = 0;
cargarQuiz();

function cargarQuiz(){
    deseleccionarRespuesta();

    const dataPreguntaActual = preguntasData[preguntaActual];
    elementoPregunta.innerHTML= dataPreguntaActual.pregunta;

    texto_a.innerText=dataPreguntaActual.a;
    texto_b.innerText=dataPreguntaActual.b;
    texto_c.innerText=dataPreguntaActual.c;
    texto_d.innerText=dataPreguntaActual.d;
}

function seleccionar () {
    
    let respuesta = undefined;

    respuestasEl.forEach((respuestaEl) => {
        if (respuestaEl.checked){
            respuesta = respuestaEl.id;
        }
    });

    return respuesta;


}

function deseleccionarRespuesta(){
    respuestasEl.forEach((respuestaEl) => {
        respuestaEl.checked = false;
    });

}

botonEnviar.addEventListener('click' , () =>{

    const respuesta = seleccionar();
    


    if(respuesta){
        if(respuesta === preguntasData[preguntaActual].correcta){
            puntaje++;
        }


        preguntaActual++;
        if(respuesta === preguntasData[preguntaActual])
        if(preguntaActual < preguntasData.length ){
            cargarQuiz();
        }
        else{
            alert('ya pasaste');
        }
        
        

    }

} );