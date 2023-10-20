const getProf = async ()=>{
    const apiURL = await fetch('http:///localhost:3000/professores')
    const dadosProfessor=await apiURL.json()
     mostrarProf(dadosProfessor)
}

const mostrarProf=(dadosProfessor)=>{
    const tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    dadosProfessor.forEach((dadosProfessor)=>{
        let ativo=`<img src="../../assets/icones/ativo.svg" width="50" height="50">`
        let inativo=`<img src="../../assets/icones/inativo.svg" width="50" height="50">`
        let botao
        if (dadosProfessor.ativo=="Ativo"){
            botao=ativo
        }
        else{
            botao=inativo
        }
        const profHTML = `
        <tr>
            <td>${dadosProfessor.nome}</td>
            <td>${dadosProfessor.disciplina}</td>
            <td>${dadosProfessor.perfil}</td>
            <td>${botao}</td>
            <td>
            <button class="lapis" <img src="../../assets/icones/lapis.svg" width="100" height="100"  onclick="editarProf(${dadosProfessor.id})"></button>
            <button class="lixo" <img src="../../assets/icones/lixeira.svg" width="100" height="100"onclick="excluirProf(${dadosProfessor.id})"></button>
            </td>

        </tr>
        ` 
        tabela.innerHTML=tabela.innerHTML + profHTML
    })
}

getProf ()

const editarProf =(id)=>{
    window.location=`editarprof.html?id=${id}`
}

const excluirProf = async(id)=>{
    await fetch(`http://localhost:3000/professores/${id}`,{method:'DELETE'})
    getProf()
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
