const chainMaker = {
  listLinks: [],
  getLength: () => listLinks.length(),
  addLink: (value) => this.listLinks.push(`( ${value} )~~`),
  removeLink: (position) => {
    if (position > getLength() || position < 1 || typeof (position) !== 'number') {
      listLinks = [];
      throw new Error('Error');
    }
    return listLinks.splice(position - 1, 1);

  },
  reverseChain: () => listLinks.reverse(),
  finishChain: () => {
    let finish = listLinks.join('').slice(0, -2);
    listLinks = [];
    return finish;
  }
};

module.exports = chainMaker;
