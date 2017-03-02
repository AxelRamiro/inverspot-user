//funcion para convertir cantidades a valores en pesos
export default function(value, decimalPosition = 2) {
  return '$' + value.toFixed(decimalPosition).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace('.00','')
}
