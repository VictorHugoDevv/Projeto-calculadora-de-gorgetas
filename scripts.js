function calculateTip(event) {
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let qualidadeDoServico = document.getElementById('qualidadeDoServico').value;
    let pessoa = document.getElementById('pessoa').value;

    if(conta == '' | qualidadeDoServico == 0){
    alert("Por favor, preencha os valores")
    return
    }

    if(pessoa == "" | pessoa <= 1){
    pessoa = 1;
    document.getElementById('each').style.display = "none";
    } else{
    document.getElementById('each').style.display = "block";
    }

    let total = (conta * qualidadeDoServico) / pessoa;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";


}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip) ;