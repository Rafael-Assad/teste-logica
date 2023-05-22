const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  const productsSelectors = {}

  for(const product of products){
    const [color, size] = product.split('-')

    if(!productsSelectors[color]){
      productsSelectors[color] = {}
    }

    productsSelectors[color][size] = (productsSelectors[color][size] || 0) + 1
  }

  return productsSelectors
}
