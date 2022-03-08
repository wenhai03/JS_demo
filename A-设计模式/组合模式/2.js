function Folder (name) {
  this.name = name
  this.children = []
  this.parent = null
}

Folder.prototype.add = function (child) {
  child.parent = this
  this.children.push(child)
}

Folder.prototype.show = function () {
  console.log('文件夹' + this.name)
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].show()
    
  }
}

// 文件 File    文件夹 Folder

function File(name) {
  this.name = name
}
File.prototype.add = function(child) {
  child.parent = this
  this.children.push(child)
}

File.prototype.show = function () {
  console.log('文件' +this.name)
}

let video = new Folder('video')
let vue = new Folder('vue')
let react = new Folder('react')

let vuejs = new File('vuejs')
let reactjs = new File('reactjs')

vue.add(vuejs)
react.add(reactjs)

video.add(vue)
video.add(react)

video.show()
