// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let soma = 0
  for (let i = 0; i < birdsPerDay.length; i++){
     soma += birdsPerDay[i] 
  } 
  return soma
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let soma = 0
  const start = 7 * (week -1)
  const stop = start + 6
  for (let i = start; i <= stop; i++){
    soma += birdsPerDay[i]
  } 
  return soma
}


/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay[0] += 1
  for (let i = 0; i <= birdsPerDay.length; i++){
      birdsPerDay[i] += 1
    }
    return birdsPerDay
  }

