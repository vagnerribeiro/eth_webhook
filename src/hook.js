require('dotenv/config');
const ReadTransactionUseCase = require('./useCases/Transaction/ReadTransactionUseCase');
const provider = require('./utils/connection');

const transactions = new ReadTransactionUseCase(provider);

transactions.getTransaction('0x31cde37d8772e52161c2f399764631aba962d11a983df86a435f833b7d95e888').then((result) => {
  console.log(result);
});
