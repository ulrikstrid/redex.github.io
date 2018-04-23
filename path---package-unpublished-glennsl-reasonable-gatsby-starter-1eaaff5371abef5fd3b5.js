webpackJsonp([0x9a60849b8ade],{1209:function(e,a){e.exports={data:{package:{id:"unpublished/glennsl/reasonable-gatsby-starter",stars:4,name:"glennsl/reasonable-gatsby-starter",version:"1.0.0",category:"boilerplate",flags:["neglected"],platforms:["node"],description:"Gatsby default starter",keywords:["boilerplate"],license:"MIT",updated:"2018-02-27T10:54:02.864Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reasonable-gatsby-starter"><a href="#reasonable-gatsby-starter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reasonable-gatsby-starter</h1>\n<h2 id="limitations"><a href="#limitations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Limitations</h2>\n<ul>\n<li>\n<p>Gatsby uses filenames to generate urls and look up special pages like custom error pages. BuckleScript unfortunately does not support as wide a range of filenames due to filenames being used to generate module names. For the porting of this project specifically the consequences are:</p>\n<ul>\n<li>Since <code>404.re</code> is not valid, the code for the custom error page has been put in <code>error404.re</code> and a <code>404.js</code> that simply re-exports <code>error404</code> has been aded as a bridge.</li>\n<li>Dashes aren\'t valid in filenames, so <code>page-2.re</code> has been renamed to <code>page_2.re</code>, which of course causes the generated url to use an underscore instead of a dash too.</li>\n<li>Filenames must be unique across the project, which heavily restricts possible URLs. In particular, only being able to have one <code>index.re</code> is causing significant problems. The solution currently used is to rename the file to something unique, e.g. <code>layouts_index.re</code>, then add an <code>index.js</code> that re-exports it.</li>\n</ul>\n</li>\n</ul>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h2>\n<ul>\n<li>Integrate bs compilation into gatsby build process (probably via a plugin similar to <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript">https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript</a>)</li>\n<li>Add support for writing plugins, gatsby-config.js, gatsby-node.js etc. in Reason</li>\n<li>Find or make some graphql bindings</li>\n<li>Add bindings for the more common gatsby plugins, remark, glamor etc.</li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/glennsl/reasonable-gatsby-starter",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/glennsl/reasonable-gatsby-starter"}},pathContext:{id:"unpublished/glennsl/reasonable-gatsby-starter"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-reasonable-gatsby-starter-1eaaff5371abef5fd3b5.js.map