function BinaryST(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

//функция добавления новых элементов
BinaryST.prototype.insert = function(val){
  let root = this.root;
if(!root){
  this.root = new BinaryST(val);
  return;
}
  let newBinaryST = new BinaryST(val);

  while(root){
    if (val < root.value) {
      if(!root.left){
        root.left = newBinaryST;
        break;
      }
      else {
        root = root.left;
      }
    } 
    else {
      if(!root.right){
        root.right = newBinaryST;
        break;
      }
      else{
        root = root.right;
      }
    }
  }
}

//функция нахождения элементов в дереве

BinaryST.prototype.contains = function (value) {
  if ((this.root === undefined) || (this.root === null)) {
    return false;
  }

  let root = this.root;
  if (value < root.value) {
    return this.contains(root.left);
  }
  else
    if (value > root.value) {
      return this.contains(root.right);
    }
    return true;
}

//функция удаления элементов из дерева

var bst = new BinaryST();
bst.insert(16);
bst.insert(21);
bst.insert(8);
console.log(bst);
