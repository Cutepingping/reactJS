# reactJS
This is my reactJS's learning mark.It contains all my demos about reactJS
## HTML模板
  使用React的网页源码，结构大致如下：
  <!DOCTYPE html>
  <html>
    <head>
      <script src="../build/react.js"></script>
      <script src="../build/react-dom.js"></script>
      <script src="../build/browser.min.js"></script>
   </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      //***Our code 
     </script>
  </body>
  </html>
  上面代码中最后一个<script>标签的type 属性为text/babel.这是因为React独有的JSX语法，跟JavaScript不兼容。<br>
  其次，上面代码一共用了三个库，react.js react-dom.js和Browser.js。他们首先被加载。其中react.js是react的核心库。react-dom.js是提供与DOM相关的功能。Browser.js是将JSX语法转换为JavaScript语法。实际上线的时候，通过 $ babel src --out--dir build来讲src子目录中的js文件进行语法转换，转码后的文件全部放在build子目录。
  
## Index
1  Render JSX <br>
2  Use JavaScript in JSX <br>
3  Use array in JSX <br>
4  Define a component <br>
5  this.props.children  <br>
6  PropTypes  <br>
7  Finding a DOM node <br>
8  this.state <br>
9  Form <br>
10 Component Lifecycle  <br>
11 Ajax <br>
12 Display value from a Promise <br>
13 Server-side rendering  <br>
 <hr/>
## ReactDOM.render()
  ReactDOM.render()是React的最基本方法，用于将模板转为html语言，并插入指定的DOM节点</br>
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
  );
  
