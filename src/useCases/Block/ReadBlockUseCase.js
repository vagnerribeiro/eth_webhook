class ReadBlockUseCase {
  constructor(conn) {
    this.connection = conn;
  }

  async lastBlockNumber() {
    return this.connection.eth.getBlockNumber().then((result) => result);
  }

  async getBlock(blockNumber) {
    return this.connection.eth.getBlock(blockNumber).then((result) => result);
  }
}

module.exports = ReadBlockUseCase;
