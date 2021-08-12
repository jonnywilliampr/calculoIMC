var tabela = document.querySelectorAll("table"); //pega a tudo da tabela

tabela = addEventListener("dblclick", (event)=>{ //escutando o evento a partir de um filho.
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(()=>{
        event.target.parentNode.remove(); //parentNode permite que seja selecionado o Pai/tr do Filho/td clicado.
    },500);
});