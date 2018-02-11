webpackJsonp([0x8d2e5f2f2cb3],{1158:function(s,e){s.exports={data:{package:{id:"reason-simple-server",stars:null,name:"reason-simple-server",version:"1.2.0",category:"library",flags:["neglected"],platforms:["native"],description:"This is a library for native reason (with bsb-native) that lets you stand up a simple server without too much trouble.",keywords:["http server"],license:"MIT",updated:"2018-01-28T18:19:04.861Z",type:"published",score:.3168300585720628,quality:.6202322739015691,popularity:.04026774209978681,maintenance:.3333333333333334,readme:'<h1 id="reason-simple-server"><a href="#reason-simple-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason Simple Server</h1>\n<p>This is a library for native reason (with bsb-native) that lets you stand up a simple server without too much trouble.</p>\n<h2 id="basic-server"><a href="#basic-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Server</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReasonSimpleServer</span>.<span class="hljs-type">Basic</span>.<span class="hljs-type">Response</span>;\n\n<span class="hljs-keyword">let</span> handler = (<span class="hljs-keyword">method</span>, path, headers) =&gt; {\n  switch (<span class="hljs-keyword">method</span>, path) {\n  | (<span class="hljs-string">"GET"</span>, <span class="hljs-string">"/"</span>) =&gt; {\n    <span class="hljs-type">Ok</span>(<span class="hljs-string">"text/plain"</span>, <span class="hljs-string">"All clear boss!"</span>)\n  }\n  | (<span class="hljs-string">"POST"</span>, _) =&gt; <span class="hljs-type">Bad</span>(<span class="hljs-number">401</span>, <span class="hljs-string">"Can\'t do that"</span>)\n  | (<span class="hljs-string">"Get"</span>, <span class="hljs-string">"/"</span>) =&gt; <span class="hljs-type">Ok</span>(<span class="hljs-string">"text/html"</span>, <span class="hljs-string">"&lt;h1&gt;Howdy&lt;/h1&gt;"</span>)\n  }\n};\n\n<span class="hljs-type">ReasonSimpleServer</span>.<span class="hljs-type">Basic</span>.listen(~port=<span class="hljs-number">3451</span>, handler);</code></pre></div>\n<p>There\'s lots of features missing, but it\'s very small and light.</p>\n<h2 id="static-server"><a href="#static-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Static Server</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>ReasonSimpleServer.Static.run(~port=<span class="hljs-number">3451</span>, <span class="hljs-string">"./"</span>);</code></pre></div>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/reason-simple-server",issuesUrl:null,slug:"/package/reason-simple-server"}},pathContext:{id:"reason-simple-server"}}}});
//# sourceMappingURL=path---package-reason-simple-server-74c2e7cc13b0f2a38455.js.map