webpackJsonp([0x842f7261779c],{1085:function(e,s){e.exports={data:{package:{id:"@glennsl/bs-revamp",score:.4955262460971034,name:"@glennsl/bs-revamp",version:"0.1.1",description:"A safe and functional API for JavaScript regexes",keywords:["bucklescript","regular expressions"],license:"MIT",updated:"2018-01-04T07:59:59.484Z",stars:3,type:"published",quality:.8545699625427375,popularity:.02189810101996614,maintenance:.66140263422084,readme:'<h1>bs-re:vamp</h1>\n<p>An experimental safe and functional API for JavaScript regexes</p>\n<p><a href="https://npmjs.org/@glennsl/bs-revamp"><img src="https://img.shields.io/npm/v/@glennsl/bs-revamp.svg" alt="npm"></a>\n<a href="https://travis-ci.org/glennsl/bs-revamp"><img src="https://img.shields.io/travis/glennsl/bs-revamp/master.svg" alt="Travis"></a>\n<a href="https://coveralls.io/github/glennsl/bs-revamp?branch=master"><img src="https://img.shields.io/coveralls/glennsl/bs-revamp/master.svg" alt="Coveralls"></a>\n<a href="https://github.com/glennsl/bs-revamp/network/dependencies"><img src="https://img.shields.io/david/glennsl/bs-revamp.svg" alt="Dependencies"></a>\n<a href="https://github.com/glennsl/bs-revamp/issues"><img src="https://img.shields.io/github/issues/glennsl/bs-revamp.svg" alt="Issues"></a>\n<a href="https://github.com/glennsl/bs-revamp/commits/master"><img src="https://img.shields.io/github/last-commit/glennsl/bs-revamp.svg" alt="Last Commit"></a>\n<a href="https://github.com/glennsl/bs-revamp/blob/master/lib/js/src/Revamp.js"><img src="https://img.shields.io/github/size/glennsl/bs-revamp/lib/js/src/Revamp.js.svg" alt="Size"></a></p>\n<h2>Example</h2>\n<pre><code class="language-reason">/**\n * Reason\n *\n * Dasherize camelCased identifiers inside string literals\n */\n\nlet code = {|\n  let borderLeftColor = "borderLeftColor";\n  let borderRightColor = "borderRightColor";\n|};\n\ncode |> Revamp.replace({|"([^"]+)"|},                /* Matches the content of string literals */\n          Revamp.replace("[A-Z]", letter =>          /* Matches uppercase letters */\n            "-" ++ letter |> Js.String.toLowerCase)) /* Convert to lower case and prefix with a dash */\n     |> Js.log;\n\n/* Outputs:\n\n  let borderLeftColor = "border-left-color";\n  let borderRightColor = "border-right-color";\n*/\n</code></pre>\n<pre><code class="language-ml">(**\n * OCaml\n *\n * Dasherize camelCased identifiers inside string literals\n *)\n\nlet code = {|\n  let borderLeftColor = "borderLeftColor";\n  let borderRightColor = "borderRightColor";\n|}\n\nlet () =\n  code |> Revamp.replace {|"([^"]*)"|}                (* Matches the content of string literals *)\n            (Revamp.replace "[A-Z]" (fun letter ->    (* Matches uppercase letters *)\n              "-" ^ letter |> Js.String.toLowerCase)) (* Convert to lower case and prefix with a dash *)\n       |> Js.log\n\n(* Outputs:\n\n  let borderLeftColor = "border-left-color";\n  let borderRightColor = "border-right-color";\n*)\n</code></pre>\n<h2>Installation</h2>\n<pre><code class="language-sh">npm install --save @glennsl/bs-revamp\n</code></pre>\n<p>Then add <code>@glennsl/bs-revamp</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-js">{\n  ...\n  "bs-dependencies": ["@glennsl/bs-revamp"]\n}\n</code></pre>\n<h2>Goals</h2>\n<ul>\n<li>A sane, safe API</li>\n<li>Low performance overhead (secondary)</li>\n</ul>\n<h2>Non-goals</h2>\n<ul>\n<li>Full feature parity</li>\n</ul>\n<h2>Documentation</h2>\n<p>For the moment, please see the interface file, <a href="https://github.com/glennsl/bs-revamp/blob/master/src/Revamp.rei">Revamp.rei</a>.</p>\n<h2>Changes</h2>\n<h3>0.1.0</h3>\n<ul>\n<li>Changed type of <code>captures</code> from <code>Sequence.t(array(string))</code> to <code>Sequence.t(list(option(string)))</code> because the former was unsound.</li>\n<li>Added <code>Match.match</code> and <code>Match.captures</code></li>\n<li>Deprecated <code>Match.matches</code> due to being unsound</li>\n</ul>\n',homepageUrl:"https://github.com/glennsl/bs-revamp#readme",repositoryUrl:"https://github.com/glennsl/bs-revamp",npmUrl:"https://www.npmjs.com/package/%40glennsl%2Fbs-revamp",issuesUrl:"https://github.com/glennsl/bs-revamp/issues",slug:"packages/@glennsl/bs-revamp"}},pathContext:{id:"@glennsl/bs-revamp"}}}});
//# sourceMappingURL=path---packages-glennsl-bs-revamp-35afb8de07fb984e2c87.js.map