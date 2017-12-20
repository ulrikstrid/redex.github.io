// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var React       = require("react");
var Rebase      = require("reason-rebase/src/rebase.js");
var Control     = require("../components/helpers/Control.js");
var Graphql     = require("../utils/Graphql.js");
var Helpers     = require("../utils/Helpers.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var PackageList = require("../components/PackageList.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Keywords");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Control.$$Map[/* make */1](Graphql.getNodes(data.keywords), (function (keyword) {
                            return React.createElement("div", {
                                        key: keyword.name
                                      }, React.createElement("h2", undefined, Helpers.text(keyword.name)), ReasonReact.element(/* None */0, /* None */0, PackageList.make(Rebase.$$Array[/* filter */10]((function (p) {
                                                        return +(p !== null);
                                                      }), keyword.packages).sort((function (a, b) {
                                                      return Caml_string.caml_string_compare(a.name, b.name);
                                                    })), /* array */[])));
                          }))));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query KeywordsQuery {
      keywords: allKeywords(sort: { fields: [name] }) {
        edges {
          node {
            name

            packages {
              type
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
    }
  `

;

exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
