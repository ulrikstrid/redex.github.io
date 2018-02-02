webpackJsonp([0x778630383f1c],{1060:function(s,e){s.exports={data:{package:{id:"bs-promise-router",stars:1,name:"bs-promise-router",version:"0.2.0",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"BuckleScript interface to express-promise-router",keywords:["routing","express"],license:"BSD-2-Clause",updated:"2018-01-19T19:54:16.724Z",type:"published",score:.4733704212428641,quality:.43307160541565154,popularity:.03497278613333698,maintenance:.946309898490002,readme:'<h1 id="bs-promise-router"><a href="#bs-promise-router" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-promise-router</h1>\n<p>A BuckleScript interface to <a href="https://www.npmjs.com/package/express-promise-router">express-promise-router</a>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> heartbeat = (<span class="hljs-number">_</span>, res: <span class="hljs-type">Express</span>.<span class="hljs-type">Response</span>.t) =&gt; {\n  <span class="hljs-type">Express</span>.<span class="hljs-type">Response</span>.sendString(res, <span class="hljs-string">"ok"</span>) |&gt; ignore;\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(<span class="hljs-type">Js</span>.undefined)\n};\n\n<span class="hljs-keyword">let</span> router = <span class="hljs-type">PromiseRouter</span>.make();\n\n<span class="hljs-type">PromiseRouter</span>.<span class="hljs-keyword">get</span>(router, ~path=<span class="hljs-string">"/"</span>, heartbeat);\n\n<span class="hljs-type">Express</span>.<span class="hljs-type">App</span>.use(app, asMiddleware(router));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> heartbeat _ (res : <span class="hljs-type">Express</span>.<span class="hljs-type">Response</span>.t) =\n  (<span class="hljs-type">Express</span>.<span class="hljs-type">Response</span>.sendString res <span class="hljs-string">"ok"</span>) |&gt; ignore;\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-type">Js</span>.undefined\n<span class="hljs-keyword">let</span> router = <span class="hljs-type">PromiseRouter</span>.make <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">PromiseRouter</span>.get router ~path:<span class="hljs-string">"/"</span> heartbeat\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Express</span>.<span class="hljs-type">App</span>.use app (asMiddleware router)</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/ecliptic/bucklescript-tools#readme",repositoryUrl:"https://github.com/ecliptic/bucklescript-tools",npmUrl:"https://www.npmjs.com/package/bs-promise-router",issuesUrl:"https://github.com/ecliptic/bucklescript-tools/issues",slug:"/package/bs-promise-router"}},pathContext:{id:"bs-promise-router"}}}});
//# sourceMappingURL=path---package-bs-promise-router-9ba49aff2723d1f93bd9.js.map