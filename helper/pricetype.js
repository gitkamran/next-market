export function priceType(price) {
    return new Intl.NumberFormat().format(price);
}