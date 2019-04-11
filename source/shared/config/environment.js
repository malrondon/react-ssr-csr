const NODE_ENV = process.env.NODE_ENV || 'development';
const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:8000';
const BFF = process.env.BFF || 'http://localhost:8000';
const MOCK = `${process.env.PUBLIC_URL}/mock` || 'http://localhost:8000/mock';

module.exports = {
  NODE_ENV,
  PUBLIC_URL,
  BFF,
  MOCK,
};
