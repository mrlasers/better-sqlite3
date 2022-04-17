'use strict'
const descriptor = {
  value: 'SqliteError',
  writable: true,
  enumerable: false,
  configurable: true,
}

// export class SqliteError implements Error {
//   name: 'SqliteError'
//   message: ''
// }

export function SqliteError(message, code): void {
  if (new.target !== SqliteError) {
    return new SqliteError(message, code)
  }
  if (typeof code !== 'string') {
    throw new TypeError('Expected second argument to be a string')
  }
  Error.call(this, message)
  descriptor.value = '' + message
  Object.defineProperty(this, 'message', descriptor)
  Error.captureStackTrace(this, SqliteError)
  this.code = code
}
Object.setPrototypeOf(SqliteError, Error)
Object.setPrototypeOf(SqliteError.prototype, Error.prototype)
Object.defineProperty(SqliteError.prototype, 'name', descriptor)
module.exports = SqliteError
