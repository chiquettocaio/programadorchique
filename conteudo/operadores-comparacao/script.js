/* ==   -> Verifica igualdade
   ===  -> Verifica igualdade estrita
   !=   -> Verifica diferença
   !==  -> Verifica diferença estrita
   <    -> Menor que
   >    -> Maior que
   >=   -> Maior ou igual que
   <=   -> Menor ou igual que
 */

console.log('1 == 1', 1 == 1) //=> TRUE
console.log('1 == 2', 1 == 2) //=> FALSE
console.log("1 == '1'", 1 == '1') //=> TRUE

console.log('1 === 1', 1 === 1) //=> TRUE
console.log("1 === '1'", 1 === '1') //=> FALSE

console.log('1 != 1', 1 != 1) //=> FALSE
console.log("1 != '1'", 1 != '1') //=> FALSE
console.log('1 != 2', 1 != 2) //=> TRUE

console.log('1 !== 1', 1 !== 1) //=> FALSE
console.log("1 !== '1'", 1 !== '1') //=> TRUE
console.log('1 !== 2', 1 !== 2) //=> TRUE

console.log('1 > 1', 1 > 1) //=> FALSE
console.log('1 > 2', 1 > 2) //=> FALSE
console.log('2 > 1', 2 > 1) //=> TRUE

console.log('1 < 1', 1 < 1) //=> FALSE
console.log('1 < 0', 1 < 0) //=> FALSE
console.log('1 < 2', 1 < 2) //=> TRUE

console.log('1 >= 1', 1 >= 1) //=> TRUE
console.log('1 <= 1', 1 <= 1) //=> TRUE

console.log("'oi' === 'oi'", 'oi' === 'oi') //=> TRUE
console.log("'oi' === 'oii'", 'oi' === 'oii') //=> FALSE
console.log("'oi' !== 'oii'", 'oi' !== 'oii') //=> TRUE
console.log("'oi' === 'oI'", 'oi' === 'oI') //=> FALSE
console.log("'caio' === 'Caio'", 'caio' === 'Caio') //=> FALSE