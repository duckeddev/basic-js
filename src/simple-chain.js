const chainMaker = {
    chain: [],
    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      this.chain.push(value === undefined ? '' : String(value));
      return this;
    },
    removeLink(position) {
      try{
        if (isNaN(position)
          || position < 1 
          || position > this.chain.length
          || Math.round(position) != position) throw new Error();
        this.chain.splice(position - 1, 1);
        return this;
      }
      catch(er){
        this.chain = [];
        throw new Error();
      }
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {
      let result = this.chain.map(x => '( ' + x + ' )').join('~~');
      this.chain = [];
      return result;
    }
  };
  
  module.exports = chainMaker;