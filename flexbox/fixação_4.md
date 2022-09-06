```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

  let vezes = 0
for(i=0 ; i< arrayDeNumeros.length; i++){
  if(arrayDeNumeros[i] === numeroEscolhido){
    vezes++ }
  }
 if (vezes > 0)
{return `O número ${numeroEscolhido} aparece ${vezes}x`}
else {
  return `Número não encontrado`
}
}