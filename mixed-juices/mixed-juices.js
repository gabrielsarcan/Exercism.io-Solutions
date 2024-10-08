// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0
  switch (name){
    case 'Pure Strawberry Joy':
      time = 0.5
      return time  
    case 'Energizer':
      time = 1.5
      return time
    case 'Green Garden':
      time = 1.5
      return time      
    case 'Tropical Island':
      time = 3
      return time
    case 'All or Nothing':
      time = 5
      return time
    default:
      return 2.5
  } return time
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limeNeed = 0
  for (let i = 0; i < limes.length; i++){
     if(wedgesNeeded <= 0){
      return limeNeed
      
    } else if (limes[i] == 'medium'){
      limeNeed++
      wedgesNeeded -= 8
      
    } else if (limes[i] == 'large'){
      limeNeed++
      wedgesNeeded -= 10
      
    } else if(limes[i] == 'small'){
      limeNeed++
      wedgesNeeded -= 6
    }

  } return limeNeed
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -=timeToMixJuice(orders[0])
      orders.shift()    
  } return orders
}