webpackJsonp([46790134690666],{1054:function(e,s){e.exports={data:{package:{id:"bs-cookie-parser",stars:1,name:"bs-cookie-parser",version:"0.0.1",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"cookie-parser binding in ReasonML",keywords:["parsing"],license:"ISC",updated:"2018-01-29T02:58:50.948Z",type:"published",score:.4983121321399342,quality:.7021867936137827,popularity:.030676681130695008,maintenance:.7911978733144462,readme:'<h1 id="bs-cookie-parser"><a href="#bs-cookie-parser" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-cookie-parser</h1>\n<p><a href="https://github.com/expressjs/cookie-parser">cookie-parser</a> binding in ReasonML</p>\n<h1 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h1>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code><span class="hljs-keyword">let</span> app = <span class="hljs-type">Express</span>.express <span class="hljs-literal">()</span>;\n\n<span class="hljs-type">App</span>.use app (<span class="hljs-type">CookieParser</span>.make <span class="hljs-literal">()</span>); \n\n<span class="hljs-type">App</span>.listen app port::<span class="hljs-number">3000</span> ;</code></pre></div>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>\n<blockquote>\n<p>TODO</p>\n</blockquote>\n<h1 id="testing-in-development"><a href="#testing-in-development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing in development</h1>\n<p>In one terminal:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run start</code></pre></div>\n<p>In second terminal:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">cd</span> tests &amp;&amp; ./test.sh</code></pre></div>\n<blockquote>\n<p>Testing relies on querying a the <code>example/Index.re</code> server and making sure the output matches the <code>tests/reference.data</code>.</p>\n</blockquote>\n',homepageUrl:"https://github.com/BuckleTypes/bs-cookie-parser#readme",repositoryUrl:"https://github.com/BuckleTypes/bs-cookie-parser",npmUrl:"https://www.npmjs.com/package/bs-cookie-parser",issuesUrl:"https://github.com/BuckleTypes/bs-cookie-parser/issues",slug:"/package/bs-cookie-parser"}},pathContext:{id:"bs-cookie-parser"}}}});
//# sourceMappingURL=path---package-bs-cookie-parser-5e8c4173d27b35574608.js.map