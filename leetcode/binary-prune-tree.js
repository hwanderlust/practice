function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const pruneTree = function (root) {
  console.log(`root:`, root)
  if(root === null) return root

  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  if(root.val === 1 || root.left !== null || root.right !== null) return root 

  return null 
};

// ex1
// const rootNode = new TreeNode(1)
// const node1 = null
// const node2 = new TreeNode(0)
// const node3 = new TreeNode(0)
// const node4 = new TreeNode(1)

// rootNode.left = node1
// rootNode.right = node2
// node2.left = node3
// node2.right = node4

// pruneTree(rootNode) // => [1,null,0,null,1]

// ex2
// const rootNode = new TreeNode(1)
// const node1 = new TreeNode(0)
// const node2 = new TreeNode(1)
// const node3 = new TreeNode(0)
// const node4 = new TreeNode(0)
// const node5 = new TreeNode(0)
// const node6 = new TreeNode(1)

// rootNode.left = node1
// rootNode.right = node2
// node1.left = node3
// node1.right = node4 
// node2.left = node5
// node2.right = node6

// pruneTree(rootNode) // => [1,null,1,null,1]

// ex3
const rootNode = new TreeNode(1)
const node1 = new TreeNode(1)
const node2 = new TreeNode(0)
const node3 = new TreeNode(1)
const node4 = new TreeNode(1)
const node5 = new TreeNode(0)
const node6 = new TreeNode(1)
const node7 = new TreeNode(0)

rootNode.left = node1
rootNode.right = node2
node1.left = node3
node1.right = node4 
node2.left = node5
node2.right = node6
node3.left = node7

pruneTree(rootNode) // => [1,1,0,1,1,null,1]
