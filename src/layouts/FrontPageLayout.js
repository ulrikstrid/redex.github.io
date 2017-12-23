// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Link                  = require("../bindings/gatsby/link.js");
var Curry                 = require("bs-platform/lib/js/curry.js");
var React                 = require("react");
var Footer                = require("../components/Footer.js");
var Helmet                = require("../bindings/gatsby/helmet.js");
var Helpers               = require("../utils/Helpers.js");
var ReasonReact           = require("reason-react/src/ReasonReact.js");
var CommonStyles          = require("../styles/CommonStyles.js");
var FrontPageLayoutStyles = require("./FrontPageLayoutStyles.js");

var component = ReasonReact.statelessComponent("FrontPageLayout");

function make(children, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: FrontPageLayoutStyles.root
                }, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */["redex | Reason Package Index"], /* None */0, /* None */0, /* None */0, /* array */[
                          React.createElement("html", {
                                lang: "en"
                              }),
                          React.createElement("meta", {
                                content: "Package index for the ReasonML/BuckleScript ecosystem",
                                name: "description"
                              })
                        ])), React.createElement("div", {
                      className: FrontPageLayoutStyles.links
                    }, ReasonReact.element(/* None */0, /* None */0, Link.make("/packages", /* None */0, /* None */0, /* array */[Helpers.text("Packages")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/keywords", /* None */0, /* None */0, /* array */[Helpers.text("Keywords")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/packages/unpublished", /* None */0, /* None */0, /* array */[Helpers.text("Unpublished")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/", /* Some */[FrontPageLayoutStyles.inactiveLink], /* None */0, /* array */[Helpers.text("Documentation")]))), React.createElement("div", {
                      className: FrontPageLayoutStyles.header
                    }, React.createElement("div", {
                          className: CommonStyles.widthContainer
                        }, React.createElement("h1", {
                              className: FrontPageLayoutStyles.title
                            }, React.createElement("svg", {
                                  className: FrontPageLayoutStyles.logo
                                }, React.createElement("use", {
                                      href: "/logo.svg#logo",
                                      xlinkHref: "/logo.svg#logo",
                                      xmlnsXlink: "http://www.w3.org/1999/xlink"
                                    })), React.createElement("em", undefined, Helpers.text("re")), Helpers.text("ason package in"), React.createElement("em", undefined, Helpers.text("dex"))))), React.createElement("div", {
                      className: CommonStyles.widthContainer
                    }, Curry._1(children, /* () */0)), ReasonReact.element(/* None */0, /* None */0, Footer.make(/* Front */431720585, /* array */[])));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children, /* array */[]);
      }));

var Styles = 0;

var $$__esModule = /* true */1;

exports.Styles       = Styles;
exports.component    = component;
exports.make         = make;
exports.$$default    = $$default;
exports.default      = $$default;
exports.__esModule   = true;
exports.$$__esModule = $$__esModule;
/* component Not a pure module */
