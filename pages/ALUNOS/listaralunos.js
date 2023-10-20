const getAlunos = async ()=>{
    const apiURL = await fetch('https://db-emocionometro.onrender.com/alunos')
    const dadosAluno=await apiURL.json()
     mostrarAlunos(dadosAluno)
}

const mostrarAlunos=(dadosAluno)=>{
    const tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    dadosAluno.forEach((dadosAluno)=>{
        let ativo=`<img src="../../assets/icones/ativo.svg" width="50" height="50">`
        let inativo=`<img src="../../assets/icones/inativo.svg" width="50" height="50">`
        let botao
        if (dadosAluno.ativo=="Ativo"){
            botao=ativo
        }
        else{
            botao=inativo
        }
        const alunosHTML = `
        <tr>
            <td>${dadosAluno.nome}</td>
            <td>${dadosAluno.turma}</td>
            <td>${botao}</td>
            <td>
            <button class="lapis" <img src="../../assets/icones/lapis.svg" width="100" height="100"  onclick="editarAlunos(${dadosAluno.id})"></button>
            <button class="lixo" <img src="../../assets/icones/lixeira.svg" width="100" height="100" onclick="excluirAlunos(${dadosAluno.id})"></button>
            </td>

        </tr>
        ` 
        tabela.innerHTML=tabela.innerHTML + alunosHTML
    })
}

getAlunos ()

const editarAlunos =(id)=>{
    window.location=`editaralunos.html?id=${id}`
}

const excluirAlunos = async(id)=>{
    await fetch(`https://db-emocionometro.onrender.com/alunos/${id}`,{method:'DELETE'})
    getAlunos()
}

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
