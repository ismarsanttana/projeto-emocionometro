const formulario=document.getElementById('formulario')
let alunosId = null // variavel global 

// Captura o id na url do navegador
const getIdUrl=()=>{
    const paramString = window.location.search
    const params = new URLSearchParams(paramString)
    alunosId = params.get('id')
    console.log(alunosId)
}

const buscarAlunos = async ()=>{
    const response = await fetch(`http:///localhost:3000/alunos/${alunosId}`)
    const alunos = await response.json()
    return alunos
}

const carregarAlunos = async (dadosAluno)=>{
    document.getElementById('nome').value=dadosAluno.nome
    document.getElementById('turma').value=dadosAluno.turma
    document.getElementById('ativo').value=dadosAluno.ativo

}

const carregarDados = async ()=>{
    getIdUrl()
    const alunos= await buscarAlunos()
    carregarAlunos(alunos)
}

const editarAlunos = async(alunos)=>{
    await fetch(`http:///localhost:3000/alunos/${alunosId}`,{
        method:'PUT',  
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

    const aluno={
        nome,
        turma,
        ativo
    }

    editarAlunos(aluno)
 
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
