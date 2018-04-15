// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../bindings/Icon.js");
var React = require("react");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var Tooltip = require("./Tooltip.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");
var PlatformsStyles = require("./PlatformsStyles.js");

function platform(icon, name, label) {
  return React.createElement("div", undefined, icon, React.createElement("a", {
                  href: "/platform/" + name
                }, Vrroom.text(label)));
}

function tooltip(platforms) {
  var match = +platforms.includes("browser");
  var match$1 = +platforms.includes("node");
  var match$2 = +platforms.includes("native");
  var match$3 = +platforms.includes("any");
  return React.createElement("div", {
              className: TypedGlamor.toString(PlatformsStyles.tooltip)
            }, Vrroom.text("Platforms:"), match !== 0 ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.Html5[/* make */1](/* int array */[])), "browser", "Browser") : Vrroom.nothing, match$1 !== 0 ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.Nodejs[/* make */1](/* int array */[])), "node", "Node.js") : Vrroom.nothing, match$2 !== 0 ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.Matrix[/* make */1](/* int array */[])), "native", "Native") : Vrroom.nothing, match$3 !== 0 ? platform(ReasonReact.element(/* None */0, /* None */0, Icon.$$Infinity[/* make */1](/* int array */[])), "any", "Any") : Vrroom.nothing);
}

var component = ReasonReact.statelessComponent("Platforms");

function make(platforms, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var match = +platforms.includes("browser");
      var match$1 = +platforms.includes("node");
      var match$2 = +platforms.includes("native");
      var match$3 = +platforms.includes("any");
      return React.createElement("div", {
                  className: "platforms " + TypedGlamor.toString(PlatformsStyles.root)
                }, ReasonReact.element(/* None */0, /* None */0, Tooltip.make(tooltip(platforms), ReasonReact.element(/* None */0, /* None */0, Vrroom.Fragment[/* make */0](/* array */[
                                  match !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.Html5[/* make */1](/* int array */[])) : Vrroom.nothing,
                                  match$1 !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.Nodejs[/* make */1](/* int array */[])) : Vrroom.nothing,
                                  match$2 !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.Matrix[/* make */1](/* int array */[])) : Vrroom.nothing,
                                  match$3 !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.$$Infinity[/* make */1](/* int array */[])) : Vrroom.nothing
                                ])))));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles = Styles;
exports.platform = platform;
exports.tooltip = tooltip;
exports.component = component;
exports.make = make;
/* component Not a pure module */