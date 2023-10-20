const formulario=document.getElementById('formulario')

const cadastrarAlunos = async (alunos)=>{
    await fetch('https://db-emocionometro.onrender.com/alunos',{
      method:'POST',  
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(alunos)
    })

    window.location="listaalunos.html"

}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome=formulario.elements['nome'].value
    const turma=formulario.elements['turma'].value
    const ativo=formulario.elements['ativo'].checked ? 'Ativo' : 'Inativo';

    const alunos={
        nome,
        turma,
        ativo
    }

    cadastrarAlunos(alunos)
 
})

let toggle=document.querySelector(".toggle");
let checked = document.querySelector(".checked");
     
     function Animatedtoggle(){
        toggle.classList.toggle("ativo");

        if(toggle.classList.contains("ativo")){
            text.innerHTML = "ON";
        }
        else{
            text.innerHTML = "OFF";
        }
     }
