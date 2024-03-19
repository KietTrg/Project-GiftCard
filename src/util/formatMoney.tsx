export const formatMoney = (number: Number) => {
    return Number(number).toLocaleString('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
}