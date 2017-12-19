// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array     = require("bs-platform/lib/js/array.js");
var React       = require("react");
var PackageList = require("../components/PackageList.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Package");

function make(data, pathContext, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("h1", undefined, pathContext.keyword), ReasonReact.element(/* None */0, /* None */0, PackageList.make($$Array.map((function (edge) {
                                return edge.node;
                              }), data.packages.edges), /* array */[])));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, jsProps.pathContext, /* array */[]);
      }));


  export const query = graphql`
    query KeywordQuery($keyword: String!) {
      packages: allPackages(filter: { keywords: { in: [$keyword] }}) {
        edges {
          node {
            id
            name
            version
            description
            keywords
            license
            updated
            stars
            slug
          }
        }
      }
    }
  `

;

exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */