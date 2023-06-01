class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    console.log(newNode.val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    return recursiveHelper(this.root, newNode);

    function recursiveHelper(currentNode, newNode) {
      if (!currentNode) {
        return newNode;
      }
      if (newNode.val < currentNode.val) {
        currentNode.left = recursiveHelper(currentNode.left, newNode);
      } else {
        currentNode.right = recursiveHelper(currentNode.right, newNode);
      }
      console.log(currentNode);
      return currentNode;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      }
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let currentNode = this.root;
    return recursiveHelper(currentNode, val);

    function recursiveHelper(currentNode, val) {
      if (!currentNode) {
        return undefined;
      }
      if (currentNode.val === val) {
        return currentNode;
      }
      if (currentNode.val > val) {
        return recursiveHelper(currentNode.left, val);
      } else {
        return recursiveHelper(currentNode.right, val);
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let currentNode = this.root;
    let data = [];

    function traverse(node) {
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(currentNode);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let currentNode = this.root;
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(currentNode);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let currentNode = this.root;
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }

    traverse(currentNode);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(50);
console.log(binarySearchTree.bfs()); //([15, 10, 20, 1, 12, 50, 5]);
