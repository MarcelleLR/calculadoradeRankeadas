//calcular o saldo
function rankcalculator (victory, defeat) {
    let balance = victory - defeat
    return balance
}
//determinar o nivel com base no saldo de vitórias
function rank() {
    let resultRank = rankcalculator (90, 20)
    let lvl = ""
    if (resultRank <= 10) {
      lvl = "Ferro"
    } else if (resultRank <= 20) {
      lvl = "Bronze"
    } else if (resultRank <= 50) {
      lvl = "Prata"
    } else if (resultRank <= 80) {
      lvl = "Ouro"
    } else if (resultRank <= 90) {
      lvl = "Diamante"
    } else if (resultRank <= 100) {
      lvl = "Lendário"
    } else if (resultRank >= 100) {
      lvl = "Imortal"
    }
    return `O Herói tem saldo de ${resultRank} e está no nível ${lvl}`
  }
  // Chamando a função
  console.log(rank())