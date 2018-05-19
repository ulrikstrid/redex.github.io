webpackJsonp([84992188558386],{1147:function(s,a){s.exports={data:{package:{id:"bs-react-native",stars:301,name:"bs-react-native",version:"0.7.0",category:"binding",flags:[],platforms:["node"],description:"[![Build Status](https://travis-ci.org/reasonml-community/bs-react-native.svg?branch=master)](https://travis-ci.org/reasonml-community/bs-react-native)",keywords:["react","ui"],license:"MIT",updated:"2018-05-09T10:51:10.984Z",type:"published",score:.6187169824552384,quality:.7114249704730489,popularity:.15814636603491392,maintenance:.9998236091460113,readme:'<h1 id="bucklescript-bindings-for-react-native"><a href="#bucklescript-bindings-for-react-native" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/facebook/react-native">React Native</a></h1>\n<p><a href="https://travis-ci.org/reasonml-community/bs-react-native"><img src="https://travis-ci.org/reasonml-community/bs-react-native.svg?branch=master" alt="Build Status"></a></p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<p>Great that you want to use Reason with React Native! To get everything running are just a couple of steps.\nLet\'s assume that you already have a React Native project. Otherwise follow the React Native <a href="http://facebook.github.io/react-native/docs/getting-started.html">instructions</a> until you have your app running.</p>\n<ol>\n<li>Install <a href="https://github.com/bloomberg/bucklescript">Bucklescript</a> (the Reason -> JS compiler), <a href="https://github.com/reasonml/reason-react">Reason-React</a> and <code>bs-react-native</code>:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code><span class="hljs-comment"># substitute yarn with npm if you prefer</span>\nyarn add bs-platform reason-react bs-react-native</code></pre></div>\n<ol start="2">\n<li>Create a <code>re</code> folder (there will be your Reason code)</li>\n<li>Create a <code>bsconfig.json</code> with the following content file in your project root</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n    <span class="hljs-string">"name"</span>: <span class="hljs-string">"my-awesome-app"</span>,\n    <span class="hljs-string">"reason"</span>: {\n        <span class="hljs-string">"react-jsx"</span>: <span class="hljs-number">2</span>\n    },\n    <span class="hljs-string">"bsc-flags"</span>: [<span class="hljs-string">"-bs-super-errors"</span>],\n    <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-react-native"</span>, <span class="hljs-string">"reason-react"</span>],\n    <span class="hljs-string">"sources"</span>: [{\n        <span class="hljs-string">"dir"</span>: <span class="hljs-string">"re"</span>\n    }],\n    <span class="hljs-string">"refmt"</span>: <span class="hljs-number">3</span>\n}</code></pre></div>\n<ol start="4">\n<li>You are nearly done, the last configuration before we get to the fun stuff. In your <code>package.json</code> add to the <code>"scripts"</code> section two scripts:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"scripts"</span>: {\n  ...\n  <span class="hljs-string">"build"</span>: <span class="hljs-string">"bsb -make-world -clean-world"</span>,\n  <span class="hljs-string">"watch"</span>: <span class="hljs-string">"bsb -make-world -clean-world -w"</span>\n}</code></pre></div>\n<ol start="5">\n<li>Now you can build all your (so far nonexsisting) Reason in two modes:</li>\n</ol>\n<ul>\n<li><code>yarn build</code> performs a single build</li>\n<li><code>yarn watch</code> enters the watch mode</li>\n</ul>\n<ol start="6">\n<li>Now we come to the fun stuff! Create a new file <code>re/app.re</code> and make it look like this:</li>\n</ol>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsReactNative</span>;\n\n<span class="hljs-keyword">let</span> app = () =&gt;\n  &lt;<span class="hljs-type">View</span> style=<span class="hljs-type">Style</span>.(style([flex(<span class="hljs-number">1</span>.), justifyContent(<span class="hljs-type">Center</span>), alignItems(<span class="hljs-type">Center</span>)]))&gt;\n    &lt;<span class="hljs-type">Text</span> value=<span class="hljs-string">"Reason is awesome!"</span> /&gt;\n  &lt;/<span class="hljs-type">View</span>&gt;;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsReactNative</span>\n<span class="hljs-keyword">let</span> app <span class="hljs-literal">()</span> =\n  ((<span class="hljs-type">View</span>.createElement\n      ~style:(<span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Style</span> <span class="hljs-keyword">in</span>\n                style [flex <span class="hljs-number">1.</span>; justifyContent <span class="hljs-type">Center</span>; alignItems <span class="hljs-type">Center</span>])\n      ~children:[((<span class="hljs-type">Text</span>.createElement ~<span class="hljs-keyword">value</span>:<span class="hljs-string">"Reason is awesome!"</span>\n                     ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<p>and start the watcher with <code>yarn run watch</code> if you haven\'t done it yet.</p>\n<ol start="7">\n<li>We are nearly done! We now have to adopt the <code>index.ios.js</code> / <code>index.android.js</code> to look like this</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>import { app } from <span class="hljs-string">"./lib/js/re/app.js"</span>;\nimport <span class="hljs-type">React</span> from <span class="hljs-string">"react"</span>;\nimport {\n  <span class="hljs-type">AppRegistry</span>\n} from <span class="hljs-symbol">\'react</span>-native\';\n\n<span class="hljs-type">AppRegistry</span>.registerComponent(<span class="hljs-symbol">\'MyAwesomeProject\'</span>, <span class="hljs-literal">()</span> =&gt; app);</code></pre></div>\n<p><strong>Note:</strong> Make sure that the first argument to <code>AppRegistry.registerComponent</code> is <strong>your</strong> correct project name.</p>\n<p>If you are using <code>react-native-scripts</code>, then you will need to modify <code>App.js</code> to be like this</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-keyword">import</span> { app } from <span class="hljs-string">"./lib/js/re/app.js"</span>;\n\nexport <span class="hljs-keyword">default</span> app;</code></pre></div>\n<ol start="8">\n<li>\n<p>Now go to a new tab and start your app with <code>react-native run-ios</code> or <code>react-native run-android</code>.</p>\n</li>\n<li>\n<p>Great you are all set up! Check the source of <code>bs-react-native</code> to find out more about the implemented APIs and Components. If you get stuck just ask on our <a href="https://discord.gg/reasonml">Discord Server</a>! Happy Hacking!</p>\n</li>\n</ol>\n<p>Here are some more things which will be probably useful for you:</p>\n<ul>\n<li><a href="https://reasonml.github.io/reason-react/">Reason-React Documentation</a></li>\n<li><a href="http://bucklescript.github.io/bucklescript/Manual.html">Bucklescript Manual</a></li>\n</ul>\n<h2 id="can-i-really-build-my-react-native-app-with-reason"><a href="#can-i-really-build-my-react-native-app-with-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Can I really build my React Native app with Reason?</h2>\n<p>Yes! Check out the <a href="https://github.com/FormidableLabs/seattlejsconf-app">Seattle JS Conf App</a> for a real world App written with Reason.</p>\n<h3 id="disclaimer"><a href="#disclaimer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Disclaimer</h3>\n<p>There are some components and APIs missing. You can find an overview of the implemented components and APIs <a href="STATUS.md">here</a>. Contributions of Components and APIs are very welcome! The bindings are targeted to React Native <strong>0.46+</strong>.</p>\n<h2 id="style"><a href="#style" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Style</h2>\n<p>Since we have a proper type system we can make styles <strong>typesafe</strong>! Therefore styles are a little bit different declared than in JavaScript:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsReactNative</span>;\n\n<span class="hljs-comment">/* inline styles */</span>\n&lt;<span class="hljs-type">View</span>\n  style=(\n    <span class="hljs-type">Style</span>.style([\n      <span class="hljs-type">Style</span>.flexDirection(<span class="hljs-type">Column</span>),\n      <span class="hljs-type">Style</span>.backgroundColor(<span class="hljs-string">"#6698FF"</span>),\n      <span class="hljs-type">Style</span>.marginTop(<span class="hljs-type">Pt</span>(<span class="hljs-number">5</span>.))\n    ])\n  )\n/&gt;;\n\n<span class="hljs-comment">/* inline styles with a local open */</span>\n&lt;<span class="hljs-type">View</span> style=<span class="hljs-type">Style</span>.(style([flexDirection(<span class="hljs-type">Column</span>), backgroundColor(<span class="hljs-string">"#6698FF"</span>), marginTop(<span class="hljs-type">Pt</span>(<span class="hljs-number">5</span>.))])) /&gt;;\n\n<span class="hljs-comment">/* StyleSheets with a local open */</span>\n<span class="hljs-keyword">let</span> styles =\n  <span class="hljs-type">StyleSheet</span>.create(\n    <span class="hljs-type">Style</span>.({<span class="hljs-string">"wrapper"</span>: style([flexDirection(<span class="hljs-type">Column</span>), backgroundColor(<span class="hljs-string">"#6698FF"</span>), marginTop(<span class="hljs-type">Pt</span>(<span class="hljs-number">5</span>.))])})\n  );\n\n&lt;<span class="hljs-type">View</span> style=styles##wrapper /&gt;;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsReactNative</span>\n<span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">View</span>.createElement\n      ~style:(<span class="hljs-type">Style</span>.style\n                [<span class="hljs-type">Style</span>.flexDirection <span class="hljs-type">Column</span>;\n                <span class="hljs-type">Style</span>.backgroundColor <span class="hljs-string">"#6698FF"</span>;\n                <span class="hljs-type">Style</span>.marginTop ((<span class="hljs-type">Pt</span> (<span class="hljs-number">5.</span>))[@explicit_arity ])]) ~children:<span class="hljs-literal">[]</span>\n      <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n<span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">View</span>.createElement\n      ~style:(<span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Style</span> <span class="hljs-keyword">in</span>\n                style\n                  [flexDirection <span class="hljs-type">Column</span>;\n                  backgroundColor <span class="hljs-string">"#6698FF"</span>;\n                  marginTop ((<span class="hljs-type">Pt</span> (<span class="hljs-number">5.</span>))[@explicit_arity ])]) ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n  [@<span class="hljs-type">JSX</span> ])\n<span class="hljs-keyword">let</span> styles =\n  <span class="hljs-type">StyleSheet</span>.create\n    (<span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Style</span> <span class="hljs-keyword">in</span>\n       [%bs.obj\n         {\n           wrapper =\n             (style\n                [flexDirection <span class="hljs-type">Column</span>;\n                backgroundColor <span class="hljs-string">"#6698FF"</span>;\n                marginTop ((<span class="hljs-type">Pt</span> (<span class="hljs-number">5.</span>))[@explicit_arity ])])\n         }])\n<span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">View</span>.createElement ~style:(## styles wrapper) ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<h3 id="animations"><a href="#animations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Animations</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsReactNative</span>;\n\n[...]\n<span class="hljs-keyword">type</span> state = {animatedValue: <span class="hljs-type">Animated</span>.<span class="hljs-type">Value</span>.t};\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.reducerComponent(<span class="hljs-string">"Example"</span>);\n\ninitialState: () =&gt; {animatedValue: <span class="hljs-type">Animated</span>.<span class="hljs-type">Value</span>.create((-<span class="hljs-number">100</span>.))},\n\n<span class="hljs-comment">/* Start animation in method */</span>\n<span class="hljs-type">Animated</span>.<span class="hljs-type">CompositeAnimation</span>.start(\n  <span class="hljs-type">Animated</span>.<span class="hljs-type">Timing</span>.animate(\n    ~value=state.animatedValue,\n    ~toValue=`raw(<span class="hljs-number">0</span>.),\n    ()\n  ),\n  ()\n);\n[...]\n\n<span class="hljs-comment">/* Styles with an animated value */</span>\n\n&lt;<span class="hljs-type">Animated</span>.<span class="hljs-type">View</span>\n  style=<span class="hljs-type">Style</span>.(style([flexDirection(<span class="hljs-type">Column</span>), backgroundColor(<span class="hljs-string">"#6698FF"</span>), top(<span class="hljs-type">Animated</span>(state.animatedValue))]))\n  )\n/&gt;;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2516</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="troubleshooting"><a href="#troubleshooting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting</h2>\n<h3 id="native-module-cannot-be-null-with-create-react-native-app"><a href="#native-module-cannot-be-null-with-create-react-native-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Native module cannot be null</code> with create-react-native-app</h3>\n<p>Currently BuckleScript can generate <code>import * as ReactNative from \'react-native\'</code>, which breaks\ncreate-react-native-app. To get around this you can force BuckleScript to generate CommonJS\nmodules instead of ES Modules using:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-comment">/* bsconfig.json */</span>\n{\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-string">"package-specs"</span>: [\n    {\n      <span class="hljs-string">"module"</span>: <span class="hljs-string">"commonjs"</span>\n    }\n  ]\n}</code></pre></div>\n',homepageUrl:"https://github.com/reasonml-community/bs-react-native#readme",repositoryUrl:"https://github.com/reasonml-community/bs-react-native",npmUrl:"https://www.npmjs.com/package/bs-react-native",issuesUrl:"https://github.com/reasonml-community/bs-react-native/issues",slug:"/package/bs-react-native"}},pathContext:{id:"bs-react-native"}}}});
//# sourceMappingURL=path---package-bs-react-native-b66b64e3caf7d21e1af2.js.map