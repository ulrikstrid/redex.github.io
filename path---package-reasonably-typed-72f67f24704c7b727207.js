webpackJsonp([0x9bdedb2a76e9],{1126:function(e,s){e.exports={data:{package:{id:"reasonably-typed",stars:235,name:"reasonably-typed",version:"0.13.0",category:"tool",flags:[],platforms:["node"],description:"Converts flow definitions to Bucklescript definitions",keywords:["code generation"],license:"MIT",updated:"2018-01-23T07:06:28.953Z",type:"published",score:.5836881788494569,quality:.6317523355749245,popularity:.1268671500160137,maintenance:.9993113590610708,readme:'<h1 align="center"><img src="https://github.com/rrdelaney/ReasonablyTyped/raw/master/docs/logo.png"></h1>\n<pre align="center">\n  $ npm install --global reasonably-typed\n</pre>\n<h4 align="center"><i>Converts TypeScript and Flow definitions to Reason interfaces</i></h4>\n<hr>\n<h3 align="center">Take your Flow or TypeScript definition</h3>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>// class.js\n<span class="hljs-built_in">declare</span> module <span class="hljs-string">\'classes\'</span> {\n  <span class="hljs-built_in">declare</span> <span class="hljs-built_in">type</span> State = {\n    id: number,\n    storeName: string\n  };\n\n  <span class="hljs-built_in">declare</span> <span class="hljs-built_in">export</span> class Store {\n    constructor(initialState: State): Store;\n    state: State;\n    update(nextState: State): void;\n  }\n}</code></pre></div>\n<h3 align="center">Run retyped</h3>\n<pre align="center">\n$ retyped class.js\n</pre>\n<h3 align="center">Get Reason</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Module classes */</span>\n\n<span class="hljs-keyword">type</span> state = <span class="hljs-type">Js</span>.t {. id : float, storeName : string};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Store</span> = </span>{\n  <span class="hljs-keyword">type</span> t = <span class="hljs-type">Js</span>.t {. state : state, update : (state =&gt; unit) [@bs.meth]};\n  external make : state =&gt; t = <span class="hljs-string">"Store"</span> [@@bs.<span class="hljs-keyword">new</span>] [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"classes"</span>];\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">442</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="docs"><a href="#docs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Docs</h2>\n<p><details>\n<summary><b><a href="https://rrdelaney.github.io/ReasonablyTyped">Examples</a></b></summary>\n</details></p>\n<p><details>\n<summary><b>TypeScript</b></summary>\n<p>TypeScript has a similar workflow. Compile your TypeScript file with:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ retyped my-definition.d.ts</code></pre></div>\n</details></p>\n<p><details>\n<summary><b>Command-line Usage</b></summary>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>Usage:\n  $ retyped ...files\n\nExamples:\n  $ retyped file1.js file2.js file3.d.ts                                           [boolean]</code></pre></div>\n</details></p>\n<p><details>\n<summary><b>Usage as a library</b></summary>\nReasonablyTyped also exports a library for use! See the example below:\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-comment">// lib-usage.js</span>\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> <span class="hljs-type">ReasonablyTyped</span> from \'reasonably-typed\'\n\nconst libSrc = fs.readFileSync(\'lib.js\').<span class="hljs-built_in">toString</span>()\nconst bsInterface = <span class="hljs-type">ReasonablyTyped</span>.compile(libSrc)</code></pre></div>\n<p><strong><code>format (code: string) => string</code></strong></p>\n<p>Formats a block of code using <code>refmt</code></p>\n<p><strong><code>compile (code: string, filename?: string) => string</code></strong></p>\n<p>Compiles a libdef, formats the result, and handles errors cleanly</p>\n</details></p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<p>See <a href="DEVELOPING.md">DEVELOPING</a> and <a href="CONTRIBUTING.md">CONTRIBUTING</a>.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p><a href="https://circleci.com/gh/ReasonablyTyped/ReasonablyTyped"><img src="https://circleci.com/gh/ReasonablyTyped/ReasonablyTyped.svg?style=svg" alt="CircleCI"></a></p>\n<h2 id="roadmap"><a href="#roadmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Roadmap</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Basic types like <code>string</code></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Function types</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Record types</li>\n<li class="task-list-item"><input type="checkbox" disabled> Literals as types</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Union types</li>\n<li class="task-list-item"><input type="checkbox" disabled> Instersection types</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Named types</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Optional parameters</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Classes</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Generics</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Built-ins like Promises</li>\n<li class="task-list-item"><input type="checkbox" disabled> React components</li>\n</ul>\n',homepageUrl:"https://github.com/rrdelaney/ReasonablyTyped",repositoryUrl:"https://github.com/rrdelaney/ReasonablyTyped",npmUrl:"https://www.npmjs.com/package/reasonably-typed",issuesUrl:"https://github.com/rrdelaney/ReasonablyTyped/issues",slug:"/package/reasonably-typed"}},pathContext:{id:"reasonably-typed"}}}});
//# sourceMappingURL=path---package-reasonably-typed-72f67f24704c7b727207.js.map