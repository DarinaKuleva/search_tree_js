 function BinarySearchTree() {
    this.Node = function (key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
      this.root = null;
      this.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
          if (node.left === null) {
            node.left = newNode
          }
          else {
            this.insertNode(node.left, newNode);
          }
        }
        else {
          if (node.right === null) {
            node.right = newNode;
          }
          else {
            this.insertNode(node.right, newNode);
          }
        }
      }
}

BinarySearchTree.prototype.insert = function (key) {
  let newNode = new this.Node(key);
  if (this.root === null) {
    this.root = newNode
  }
  else {
    this.insertNode(this.root, newNode);
  }
}

 BinarySearchTree.prototype.findMinNode = function (node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
  return null;
}

BinarySearchTree.prototype.remove = function (key) {
  this.root = this.removeNode(this.root, key);
}

BinarySearchTree.prototype.removeNode = function (node, key) {
  if (node === null) {
    return null;
  }
  if (key < node.key) {
    node.left = this.removeNode(node.left, key);
    return node;
  }
  else
    if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      const aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
}

BinarySearchTree.prototype.search = function (key) {
  return this.searchNode(this.root, key);
}

BinarySearchTree.prototype.searchNode = function (node, key) {
  if (node === null) {
    return false;
  }
  if (key < node.key) {
    return this.searchNode(node.left, key);
  }
  else
    if (key > node.key) {
      return this.searchNode(node.right, key);
    }
    return true;
}

        let tree1 = new BinarySearchTree();
        tree1.insert(8);
        tree1.insert(3);
        tree1.insert(10);
        tree1.insert(1);
        tree1.insert(6);
        tree1.insert(14);
        tree1.insert(4);
        tree1.insert(7);
        tree1.insert(13);
        console.log(tree1.root);
        tree1.remove(3);
        tree1.remove(8);
        console.log(tree1.root);
        tree1.searchNode(30);


