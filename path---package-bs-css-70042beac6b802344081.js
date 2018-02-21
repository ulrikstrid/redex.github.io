webpackJsonp([0xa9ac3a6d947c],{1060:function(s,a){s.exports={data:{package:{id:"bs-css",stars:61,name:"bs-css",version:"6.3.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for glamor",keywords:["css"],license:"ISC",updated:"2018-02-15T08:50:59.668Z",type:"published",score:.6150423323393657,quality:.7583326666363501,popularity:.10726437813845897,maintenance:1,readme:'<h1 id="bs-css"><a href="#bs-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-css</h1>\n<p>statically typed DSL for writing css in reason.</p>\n<p>Bs-css is a statically typed interface to <a href="https://github.com/threepointone/glamor">Glamor</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-css</code></pre></div>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-css"</code> in the <code>bs-dependencies</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Styles</span> = </span>{\n  <span class="hljs-keyword">let</span> card = style([\n    display(flexBox),\n    flexDirection(column), \n    alignItems(stretch),\n    backgroundColor(white),\n    boxShadow(~y=<span class="hljs-number">3</span>, ~blur=<span class="hljs-number">5</span>, rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>)),\n    padding(<span class="hljs-type">Theme</span>.basePadding)\n  ]);\n\n  <span class="hljs-keyword">let</span> title = style([\n    fontSize(rem(<span class="hljs-number">1.5</span>)),\n    color(<span class="hljs-type">Theme</span>.textColor),\n    marginBottom(<span class="hljs-type">Theme</span>.basePadding)\n  ]);\n  <span class="hljs-keyword">let</span> actionButton = disabled =&gt;\n    style([\n      background(disabled ? darkGray : white),\n      color(black),\n      border(px(<span class="hljs-number">1</span>) solid black),\n      borderRadius(px(<span class="hljs-number">3</span>)),\n    ])\n};\n\n&lt;div className=<span class="hljs-type">Style</span>.card&gt;\n  &lt;h1 className=<span class="hljs-type">Styles</span>.title&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Hello"</span>)) &lt;/h1&gt;\n  &lt;button className=<span class="hljs-type">Styles</span>.actionbutton(<span class="hljs-literal">false</span>)&gt;\n&lt;/div&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">880</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>Global css</strong></p>\n<p> You can defined global css rules with <code>global</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Css</span>.(\n  global(<span class="hljs-string">"body"</span>, [margin(px(<span class="hljs-number">0</span>))])\n);\n\n<span class="hljs-type">Css</span>.(\n  global(<span class="hljs-string">"h1, h2, h3"</span>, [color(rgb(<span class="hljs-number">33</span>, <span class="hljs-number">33</span>, <span class="hljs-number">33</span>))])\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span> global <span class="hljs-string">"body"</span> [margin (px <span class="hljs-number">0</span>)]\n<span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span> global <span class="hljs-string">"h1, h2, h3"</span> [color (rgb <span class="hljs-number">33</span> <span class="hljs-number">33</span> <span class="hljs-number">33</span>)]</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Keyframes</strong></p>\n<p>define animation keyframes;</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> bounce = <span class="hljs-type">Css</span>.keyframes([\n  (<span class="hljs-number">0</span>, [ transform( scale(<span class="hljs-number">0.1</span>, <span class="hljs-number">0.1</span>) ),  opacity(<span class="hljs-number">0.0</span>) ]),\n  (<span class="hljs-number">60</span>, [ transform( scale(<span class="hljs-number">1.2</span>, <span class="hljs-number">1.2</span>) ),  opacity(<span class="hljs-number">1.0</span>) ]),\n  (<span class="hljs-number">100</span>, [ transform( scale(<span class="hljs-number">1.0</span>,<span class="hljs-number">1.0</span>) ), opacity(<span class="hljs-number">1.0</span>) ])\n]);\n\n<span class="hljs-keyword">let</span> styles = style([\n  animationName(bounce),\n  animationDuration(<span class="hljs-number">2000</span>),\n  width(px(<span class="hljs-number">50</span>)),\n  height(px(<span class="hljs-number">50</span>)),\n  backgroundColor(rgb(<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>))\n]);\n\n<span class="hljs-comment">// ...</span>\n&lt;div className=styles&gt;\n  (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"bounce!"</span>))\n&lt;/div&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>unknown refmt error</code></pre>\n      </div>\n    </div>\n  \n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run start</code></pre></div>\n<h2 id="where-is-the-documentation"><a href="#where-is-the-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where is the documentation?</h2>\n<p>Its on its way!\nuntil then you can check out <a href="./src/Css.rei">css.rei</a>.</p>\n<h2 id="thanks"><a href="#thanks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks</h2>\n<p>Thanks to <a href="https://github.com/threepointone/glamor">glamor</a> which is doing all the heavi lifting.\nThanks to <a href="https://github.com/poeschko/bs-glamor">bs-glamor</a> which this repo was forked from.\nThanks to <a href="https://github.com/rtfeldman/elm-css">elm-css</a> for dsl design inspiration.</p>\n',homepageUrl:"https://github.com/SentiaAnalytics/bs-css#readme",repositoryUrl:"https://github.com/SentiaAnalytics/bs-css",npmUrl:"https://www.npmjs.com/package/bs-css",issuesUrl:"https://github.com/SentiaAnalytics/bs-css/issues",slug:"/package/bs-css"}},pathContext:{id:"bs-css"}}}});
//# sourceMappingURL=path---package-bs-css-70042beac6b802344081.js.map