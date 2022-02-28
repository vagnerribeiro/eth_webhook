require('dotenv/config');
const ReadBlockUseCase = require('./useCases/Block/ReadBlockUseCase');
const ReadTransactionUseCase = require('./useCases/Transaction/ReadTransactionUseCase');
const provider = require('./utils/connection');

const block = new ReadBlockUseCase(provider);
const transactionUseCase = new ReadTransactionUseCase(provider);

block.lastBlockNumber().then((blockNumber) => {
  transactionUseCase.getTransactionFromBlock(blockNumber).then((transactions) => {
    transactions.forEach((hash) => {
      transactionUseCase.getTransaction(hash).then((transaction) => {
        console.log(transaction);
      });
    });
  });
});
