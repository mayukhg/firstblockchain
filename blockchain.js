
//import sha256 library for javascript
const sha256 = require('js-sha256').sha256


const blockchain = (function(){
  const blocks = []

//method to create the Genesis block
  const initBlockchain = () => {
    const data = 'Hello World!'
    const timestamp = new Date()
    const previousHash = 0
  // index intialized to 0 since this is the first block
    const index = 0
  //creating hash of the block
    hashBlock(data, timestamp, previousHash, index)
  }

 //method to create a valid hash
  const hashBlock = (data, timestamp, prevHash, index) => {
    let hash = '', nonce = 0

    while( !isHashValid(hash) ){
      let input = `${data}${timestamp}${prevHash}${index}${nonce}`
      hash = sha256(input)
      nonce += 1
    }
    console.log(nonce)
    blocks.push(hash)
  }

  const getLastHash = blocks => blocks.slice(-1)[0]

  const isHashValid = hash => hash.startsWith('0000') // Difficulty

  const addNewBlock = data => {
    const index = blocks.length
    const previousHash = getLastHash(blocks)
    hashBlock(data, new Date(), previousHash, index)
  }

  const getAllBlocks = () => blocks

  return {
    initBlockchain,
    getLastHash,
    blocks,
    getAllBlocks,
    addNewBlock
  }
})()

module.exports = blockchain
