export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
});
