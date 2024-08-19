class Node{
   constructor(value){
    this.value =value
    this.left = null
    this.right = null
   }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            return this.insertNode(newNode,this.root)
        }
    }
    insertNode(newNode,node){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(newNode,node.left)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                return this.insertNode(newNode,node.right)
            }
        }
    }
    preOrder(node=this.root,result=[]){
        if(node!==null){
            result.push(node.value)
            this.preOrder(node.left,result)
            this.preOrder(node.right,result)
        }
        return result
    }
    inOrder(node=this.root,result=[]){
        if(node!== null){
            this.inOrder(node.left,result)
            result.push(node.value)
            this.inOrder(node.right,result)
        }
        return result
    }
    postOrder(node=this.root,result=[]){
        if(node!== null){
            this.postOrder(node.left,result)
            this.postOrder(node.right,result)
            result.push(node.value)
        }
        return result
    }
    minValue(node=this.root){
        if(!node){
            return null;
        }
        while(node.left!==null){
            node = node.left
        }
        return node.value
    }
    maxValue(node=this.root){
      if(!node){
        return null
      }
      while(node.right!==null){
        node = node.right
      }
      return node.value
    }
}

const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(10)
bst.insert(30)
console.log(bst.postOrder());
console.log(bst.isEmpty());
console.log(bst.minValue());
console.log(bst.maxValue());