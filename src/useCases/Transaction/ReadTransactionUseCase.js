const ReadBlockUseCase = require('../Block/ReadBlockUseCase');

class ReadTransactionUseCase extends ReadBlockUseCase {
  constructor(conn) {
    super(conn);
    this.connection = conn;
  }

  async getTransactionsFromLastBlock() {
    const blockNumber = await this.lastBlockNumber();
    return this.getTransactionFromBlock(blockNumber);
  }

  async getTransactionFromBlock(blockNumber = null) {
    return this.getBlock(blockNumber).then((result) => result.transactions);
  }

  async getTransaction(hash) {
    return this.connection.eth.getTransaction(hash).then((result) => result);
  }
}

module.exports = ReadTransactionUseCase;
