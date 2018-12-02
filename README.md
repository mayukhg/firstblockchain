This is a sample implementation of blockchain concept using Javascript.

It contains 2 files

blockchain.js - Module to create a blockchain. It contains the following methods

(a) initBlockchain - Create the first block - Genesis block
(b) hashBlock - Hash a block
(c) isHashValid - Check validity of last block on the basis of difficulty leves (count of leading zeros - in our case '0000')
(d) getLastHash - Get hash of previous block which is required to create a new block
(e) addNewBlock - Add new block to blockchain

index.js - Controller script to
(a) Create the first block
(b) Add new blocks to the block chain

Note: Please run the index.js in order to generate the new blockchain



