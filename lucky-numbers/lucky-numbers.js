// @ts-check

import { String } from "core-js";

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  
  let num1 = '';

  for (let i = 0; i < array1.length; i++) {
    num1 += array1[i];
  }
  
  let num2 = '';
    for (let i = 0; i < array2.length; i++) {
    num2 += array2[i];
  }
  return Number(num1) + Number(num2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reverseNum = ''
  let num = String(value)

  for (let i = num.length - 1; i >= 0; i--) {
    reverseNum += num[i]
  }

  return reverseNum === num
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let newInput = String(input)
  let error 

  if (newInput === '' || input === null || input === undefined){
    error = 'Required field'

  } else if (isNaN(Number(newInput)) || Number(newInput) === 0) {
    error = 'Must be a number besides 0'

  } else {error = ''}
  return error
}
