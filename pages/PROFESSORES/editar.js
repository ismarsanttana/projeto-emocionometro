const formulario=document.getElementById('formulario')
let profId = null // variavel global 

// Captura o id na url do navegador
const getIdUrl=()=>{
    const paramString = window.location.search
    const params = new URLSearchParams(paramString)
    profId = params.get('id')
    console.log(profId)
}

const buscarProfessor = async ()=>{
    const response = await fetch(`https://db-emocionometro.onrender.com/professores/${profId}`)
    const prof = await response.json()
    return prof
}

const carregarProf = async (dadosProfessor)=>{
    document.getElementById('nome').value=dadosProfessor.nome
    document.getElementById('disciplina').value=dadosProfessor.disciplina
    document.getElementById('perfil').value=dadosProfessor.perfil
    document.getElementById('ativo').value=dadosProfessor.ativo

}

const carregarDados = async ()=>{
    getIdUrl()
    const prof= await buscarProfessor()
    carregarProf(prof)
}

const editarProf = async(prof)=>{
    await fetch(`https://db-emocionometro.onrender.com/professores/${profId}`,{
        method:'PUT',  
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(prof)
      })
  
      window.location="listaprof.html"
}


formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome=formulario.elements['nome'].value
    const disciplina=formulario.elements['disciplina'].value
    const perfil=formulario.elements['perfil'].value
    const ativo=formulario.elements['ativo'].checked ? 'Ativo' : 'Inativo';

    const prof={
        nome,
        disciplina,
        perfil,
        ativo
    }

    editarProf(prof)
 
})


carregarDados()

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
