export function formatPrice(value:number, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
  }).format(value);
}