const Arithmetics = (value) => {
    const num1 = value.slice(0, value.indexOf('+') || value.indexOf('-') || value.indexOf('x') || value.indexOf('/'))
    const num2 = value.slice(value.indexOf('+') + 1 || value.indexOf('-') + 1 || value.indexOf('x') + 1 || value.indexOf('/') + 1)
    if (value.indexOf('+') !== -1)
        return parseInt(num1) + parseInt(num2)
    if (value.indexOf('-') !== -1)
        return parseInt(num1) - parseInt(num2)
    if (value.indexOf('x') !== -1)
        return parseInt(num1) * parseInt(num2)
    if (value.indexOf('/') !== -1)
        return parseInt(num1) / parseInt(num2)

}
export default Arithmetics