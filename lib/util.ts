'use strict'

export const getBooleanOption = (options, key) => {
  let value = false
  if (key in options && typeof (value = options[key]) !== 'boolean') {
    throw new TypeError(`Expected the "${key}" option to be a boolean`)
  }
  return value
}

export const cppdb: unique symbol = Symbol()
export const inspect = Symbol.for('nodejs.util.inspect.custom')