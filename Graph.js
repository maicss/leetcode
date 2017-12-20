const {Queue, Stack} = require('./QueueAndStack')
function Graph () {
  // 存储所有顶点的名字
  const vertices = []
  // 存储邻接表 adjacency list
  let adjList = new Map()

  const initializeColor = function () {
    const color = {}
    for (let vertex of vertices) {
      color[vertex] = 'white'
    }
    return color
  }

  // 添加一个顶点
  this.addVertex = function (v) {
    vertices.push(v)
    adjList.set(v, [])

  }

  // 添加一个链接(对应有俩顶点增加链接记录)
  this.addEdge = function (v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.toString = function () {
    let s = ''
    for (let vertex of vertices) {
      s += `${vertex} -> ${adjList.get(vertex).join(' ')} \n`
    }
    return s
  }

  this.bfs = (v, cb) => {
    const color = initializeColor()
    const queue = new Queue()
    queue.enqueue(v)
    while (queue.size) {
      let u = queue.dequeue()
      let neighbors = adjList.get(u)
      color[u] = 'grey'
      for (let i of neighbors) {
        if (color[i] === 'white') {
          color[i] = 'grey'
          queue.enqueue(i)
        }
      }
      color[u] = 'black'
      cb && cb(u)
    }
  }
  this.dfs = (v, cb) => {
    const color = initializeColor()
    const stack = new Stack()
    stack.push(v)
    while (stack.size) {
      let u = stack.pop()
      let neighbors = adjList.get(u)
      color[u] = 'grey'
      for (let i of neighbors) {
        if (color[i] === 'white') {
          color[i] = 'grey'
          stack.push(i)
        }
      }
      color[u] = 'black'
      cb && cb(u)
    }
  }
}

function printNode (value) {
  console.log('Visited vertex: ', value)
}

const graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let vertex of myVertices) {
  graph.addVertex(vertex)
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.bfs(myVertices[0], printNode))
console.log(graph.dfs(myVertices[0], printNode))