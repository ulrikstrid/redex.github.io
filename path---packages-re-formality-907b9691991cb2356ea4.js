webpackJsonp([96293522899504],{1100:function(s,a){s.exports={data:{package:{id:"re-formality",score:.48754220963482964,name:"re-formality",version:"0.0.3",description:"Reasonable form validation tool for reason-react",keywords:["reason-react","react","ocaml","bucklescript"],license:"MIT",updated:"2018-01-07T01:49:54.103Z",stars:2,type:"published",quality:.43023169051497684,popularity:.02999322473098364,maintenance:.9942144966414065,readme:'<h1 id="formality"><a href="#formality" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Formality</h1>\n<p>Reasonable form validation tool for <a href="https://reasonml.github.io/reason-react/"><code>reason-react</code></a>.</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why</h2>\n<p>The main goal of the library is to simplify an implementation of forms validation preserving an excellent UX. It offers set of predefined strategies to handle different kinds of validation flows.</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<ul>\n<li>Signup form [ <a href="https://formality.now.sh">live</a> · <a href="examples/SignupForm.re">source</a> ]</li>\n</ul>\n<h2 id="-wip-"><a href="#-wip-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🚧 WIP 🚧</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Base API</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Validation strategies</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Dependant fields validation</li>\n<li class="task-list-item"><input type="checkbox" disabled> Async validations</li>\n<li class="task-list-item"><input type="checkbox" disabled> Convert <a href="https://github.com/shakacode/react-validation-layer/tree/master/__tests__">test suit</a></li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-shell"><code><span class="hljs-comment"># yarn / npm</span>\nyarn add re-formality\nnpm install --save re-formality</code></pre>\n      </div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Docs are WIP. Here\'s the quick example. See <a href="examples/"><code>examples</code></a> for real-world cases.</p>\n<blockquote>\n<p>Also, you can read more on <code>strategies</code> <a href="https://github.com/shakacode/react-validation-layer#propsstrategy">here</a></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MyForm</span> = </span>{\n  <span class="hljs-keyword">type</span> field =\n    | <span class="hljs-type">Email</span>\n    | <span class="hljs-type">Password</span>;\n  <span class="hljs-keyword">type</span> state = {\n    email: string,\n    password: string\n  };\n  <span class="hljs-keyword">let</span> update = ((field, value), state) =&gt;\n    <span class="hljs-keyword">switch</span> (field, value) {\n    | (<span class="hljs-type">Email</span>, value) =&gt; {...state, email: value}\n    | (<span class="hljs-type">Password</span>, value) =&gt; {...state, password: value}\n    };\n  <span class="hljs-keyword">let</span> strategy = <span class="hljs-type">Formality</span>.<span class="hljs-type">Strategy</span>.<span class="hljs-type">OnFirstSuccessOrFirstBlur</span>;\n  <span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Validators</span> = <span class="hljs-title">Formality</span>.<span class="hljs-title">MakeValidators</span>(</span>{<span class="hljs-keyword">type</span> t = field;});\n  <span class="hljs-keyword">type</span> validators = <span class="hljs-type">Validators</span>.t(<span class="hljs-type">Formality</span>.validator(field, state));\n  <span class="hljs-keyword">let</span> validators = <span class="hljs-type">Formality</span>.(\n    <span class="hljs-type">Validators</span>.empty\n    |&gt; <span class="hljs-type">Validators</span>.add(<span class="hljs-type">Email</span>, {\n         strategy: <span class="hljs-type">None</span>, <span class="hljs-comment">/* None means global strategy will be used, you can override it w/ Some(Formality.Strategy.t) */</span>\n         dependents: <span class="hljs-type">None</span>, <span class="hljs-comment">/* You can define fields which must be revalidated on change of this field\'s value */</span>\n         validate: (value, state) =&gt; {\n           <span class="hljs-keyword">switch</span> (value |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Option</span>.getWithDefault(state.email)) {\n           | <span class="hljs-string">""</span> =&gt; <span class="hljs-type">Valid</span>(<span class="hljs-literal">false</span>)\n           | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">Valid</span>(<span class="hljs-literal">true</span>)\n           }\n         }\n       })\n    |&gt; <span class="hljs-type">Validators</span>.add(<span class="hljs-type">Password</span>, {\n         strategy: <span class="hljs-type">None</span>, <span class="hljs-comment">/* None means global strategy will be used, you can override it w/ Some(Formality.Strategy.t) */</span>\n         dependents: <span class="hljs-type">None</span>, <span class="hljs-comment">/* You can define fields which must be revalidated on change of this field\'s value */</span>\n         validate: (value, state) =&gt; {\n           <span class="hljs-keyword">switch</span> (value |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Option</span>.getWithDefault(state.password)) {\n           | <span class="hljs-string">""</span> =&gt; <span class="hljs-type">Valid</span>(<span class="hljs-literal">false</span>)\n           | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">Valid</span>(<span class="hljs-literal">true</span>)\n           }\n         }\n       })\n    );\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Container</span> = <span class="hljs-title">Formality</span>.<span class="hljs-title">Make</span>(<span class="hljs-title">MyForm</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">component</span> = <span class="hljs-title">ReasonReact</span>.<span class="hljs-title">statelessComponent</span>("<span class="hljs-title">MyForm</span>");\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (<span class="hljs-title">_</span>) =&gt; </span>{\n  ...component,\n  render: (<span class="hljs-number">_</span>) =&gt;\n    &lt;<span class="hljs-type">Container</span>\n      initialState={email: <span class="hljs-string">""</span>, password: <span class="hljs-string">""</span>}\n      onSubmit=((~notifyOnSuccess, ~notifyOnFailure, state) =&gt; {<span class="hljs-comment">/* Submit form... */</span>})&gt;\n      ...(\n           ({state, results, update, blur, submit, submitting}) =&gt;\n             &lt;form className=<span class="hljs-string">"form"</span> onSubmit=submit&gt;\n               &lt;input\n                 value=state.email\n                 disabled=(submitting |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)\n                 onChange=(update(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span>))\n                 onBlur=(blur(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span>))\n               /&gt;\n               (\n                 <span class="hljs-keyword">switch</span> (<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span> |&gt; results) {\n                 | <span class="hljs-type">Some</span>(<span class="hljs-type">Formality</span>.<span class="hljs-type">Valid</span>(valid)) =&gt;\n                   &lt;div className=(<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"form-message"</span>, valid ? <span class="hljs-string">"success"</span> : <span class="hljs-string">"failure"</span>]))&gt;\n                     ((valid ? <span class="hljs-string">"Nice!"</span> : <span class="hljs-string">"Uh oh error"</span>) |&gt; <span class="hljs-type">ReasonReact</span>.stringToElement)\n                   &lt;/div&gt;\n                 | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">ReasonReact</span>.nullElement\n                 }\n               )\n               &lt;input\n                 value=state.password\n                 disabled=(submitting |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)\n                 onChange=(update(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span>))\n                 onBlur=(blur(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span>))\n               /&gt;\n               (\n                 <span class="hljs-keyword">switch</span> (<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span> |&gt; results) {\n                 | <span class="hljs-type">Some</span>(<span class="hljs-type">Formality</span>.<span class="hljs-type">Valid</span>(valid)) =&gt;\n                   &lt;div className=(<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"form-message"</span>, valid ? <span class="hljs-string">"success"</span> : <span class="hljs-string">"failure"</span>]))&gt;\n                     ((valid ? <span class="hljs-string">"Nice!"</span> : <span class="hljs-string">"Uh oh error"</span>) |&gt; <span class="hljs-type">ReasonReact</span>.stringToElement)\n                   &lt;/div&gt;\n                 | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">ReasonReact</span>.nullElement\n                 }\n               )\n               &lt;button disabled=(submitting |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)&gt;\n                 ((submitting ? <span class="hljs-string">"Submitting..."</span> : <span class="hljs-string">"Submit"</span>) |&gt; <span class="hljs-type">ReasonReact</span>.stringToElement)\n               &lt;/button&gt;\n             &lt;/form&gt;\n         )\n    &lt;/<span class="hljs-type">Container</span>&gt;\n};</code></pre>\n      </div>\n',homepageUrl:"https://github.com/alexfedoseev/re-formality#readme",repositoryUrl:"https://github.com/alexfedoseev/re-formality",npmUrl:"https://www.npmjs.com/package/re-formality",issuesUrl:"https://github.com/alexfedoseev/re-formality/issues",slug:"packages/re-formality"}},pathContext:{id:"re-formality"}}}});
//# sourceMappingURL=path---packages-re-formality-907b9691991cb2356ea4.js.map