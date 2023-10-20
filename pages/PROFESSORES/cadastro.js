
/*JS DO CADASTRO*/

const formulario=document.getElementById('formulario')

const cadastrarProf = async (professores)=>{
    await fetch('https://db-emocionometro.onrender.com/professores',{
      method:'POST',  
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(professores)
    })

    window.location="listaprof.html"

}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome=formulario.elements['nome'].value
    const perfil=formulario.elements['perfil'].value
    const disciplina=formulario.elements['disciplina'].value
    const ativo=formulario.elements['ativo'].checked ? 'Ativo' : 'Inativo';

    const professores={
        nome,
        perfil,
        disciplina,
        ativo
    }

    cadastrarProf(professores)
 
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
