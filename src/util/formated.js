 const formated = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
}).format
export default formated