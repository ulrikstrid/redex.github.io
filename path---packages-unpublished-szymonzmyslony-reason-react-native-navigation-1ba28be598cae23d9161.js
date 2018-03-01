webpackJsonp([91879633314198],{1137:function(e,n){e.exports={data:{package:{id:"unpublished/szymonzmyslony/reason-react-native-navigation",score:0,name:"szymonzmyslony/reason-react-native-navigation",version:"0.1.0",description:"This is a simple react native navigation written in reason.",keywords:["react-native","bucklescript","navigation"],license:"MIT",updated:"2018-01-15T12:14:17.881Z",stars:21,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>reason-react-native-navigation</h1>\n<p>This is a simple react native navigation written in reason. It has been created with an eye to fully utilize Reason type-system.\nCurrently, only stack-navigation (standard slide from left for iOS and slide from button from Android) is implemented.\nMain problem that we are trying to solve with this is passing props to child components in a straightforward and type-safe way.</p>\n<h2>How does it look like?</h2>\n<p>The example app is avaialble at <a href="https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp">https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp</a></p>\n<p>This is how this example app looks like:\n<img src="reason-navigation.gif" alt="Switch between screens"></p>\n<p>As you can see the count update (state of the root component) doesn\'t get rerendered when you click increment or decrement on the second screen. This is the first issue that I will be working on solving.</p>\n<h2>How to use it (when you want to have a full control over your navigation state)?</h2>\n<p>StackNavigator is a functor that expects one type for your navigationState variant:</p>\n<pre><code class="language-reason">module type Impl = {\n  type navigationState;\n};\n</code></pre>\n<p>This is how you create a functor:</p>\n<pre><code class="language-reason">module StackNavigator =\n  StackNavigator.Make {\n    type navigationState = screen;\n  };\n</code></pre>\n<p>For example, in my simple app, I had:</p>\n<pre><code class="language-reason">type screen =\n  | Login\n  | MainScreen\n  | Player int string;\n</code></pre>\n<p>StackNavigator requires navigation state to be managed by parent component. Thus, we need to pass\nnavigation state, pop, and push methods, and two render functions (header and screen). This is how root render in my app looks\nlike:</p>\n<pre><code class="language-reason"> render: fun {state, update, handle} =>\n    ReasonReact.element @@\n    StackNavigator.make\n      navigationState::state.navigationState\n      goBack::(update pop)\n      getHeaderConfig::headerTitle\n      render::(\n        renderScreen\n          ::handle\n          pop::(update pop)\n          push::(update push)\n          updateProjects::(update updateProjects)\n          projects::state.projects\n      )\n</code></pre>\n<p>renderScreen and render can take any arguments needed from the root of the app and pass it down to other screens:</p>\n<pre><code class="language-reason">let renderScreen\n    pop::(pop: \'a => unit)\n    push::(push: screen => unit)\n    ::projects\n    ::handle\n    ::updateProjects\n    screen =>\n  switch screen {\n  | Login => ReasonReact.element @@ LoginScreen.make ()\n  | Player index _id => DetailViewProject.render project::(List.nth projects index)\n  | MainScreen =>\n    ReasonReact.element @@ MainScreenContainer.make ::push ::updateProjects ::projects\n  };\n\nlet headerTitle screen =>\n  switch screen {\n  | MainScreen => "Shows"\n  | _ => "test"\n  };\n</code></pre>\n<p>  New StatefullStackNavigator module avoid boilerplate for push and pop actions.\nThe example app (<a href="https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp">https://github.com/szymonzmyslony/reason-react-native-navigation-exampleApp</a>)\nis showing how to use it. </p>\n',homepageUrl:"https://github.com/szymonzmyslony/reason-react-native-navigation#readme",repositoryUrl:"https://github.com/szymonzmyslony/reason-react-native-navigation",npmUrl:null,issuesUrl:"https://github.com/szymonzmyslony/reason-react-native-navigation/issues",slug:"packages/unpublished/szymonzmyslony/reason-react-native-navigation"}},pathContext:{id:"unpublished/szymonzmyslony/reason-react-native-navigation"}}}});
//# sourceMappingURL=path---packages-unpublished-szymonzmyslony-reason-react-native-navigation-1ba28be598cae23d9161.js.map