function formatNumber(target: any, propertyKey: string) {
    // Define a função que irá formatar o número
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  
    // Cria um getter e setter para a propriedade
    let value: number = target[propertyKey];
  
    const getter = () => {
      return formatter.format(value);
    };
  
    const setter = (newValue: number) => {
      value = newValue;
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
  
  class Produto {
    @formatNumber
    preco: number;
  
    constructor(preco: number) {
      this.preco = preco;
    }
  }
  
  const produto = new Produto(1234.56);
  console.log(produto.preco); // R$ 1.234,56