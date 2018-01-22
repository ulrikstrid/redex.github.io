// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Icon            = require("../bindings/Icon.js");
var Curry           = require("bs-platform/lib/js/curry.js");
var React           = require("react");
var Vrroom          = require("vrroom/src/Vrroom.bs.js");
var Tooltip         = require("./Tooltip.js");
var Fragment        = require("../bindings/react/Fragment.js");
var ReasonReact     = require("reason-react/src/ReasonReact.js");
var PlatformsStyles = require("./PlatformsStyles.js");

function platform(icon, label) {
  return React.createElement("div", {
              key: label
            }, icon, Vrroom.Helpers[/* text */0](label));
}

function tooltip(platforms) {
  return React.createElement("div", {
              className: PlatformsStyles.tooltip
            }, Vrroom.Helpers[/* text */0]("Platforms:"), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], platforms, /* None */0, (function (other) {
                        switch (other) {
                          case "any" : 
                              return platform(ReasonReact.element(/* None */0, /* None */0, Icon.$$Infinity[/* make */1](/* int array */[])), "Any");
                          case "browser" : 
                              return platform(ReasonReact.element(/* None */0, /* None */0, Icon.Html5[/* make */1](/* int array */[])), "Browser");
                          case "native" : 
                              return platform(ReasonReact.element(/* None */0, /* None */0, Icon.Matrix[/* make */1](/* int array */[])), "Native");
                          case "node" : 
                              return platform(ReasonReact.element(/* None */0, /* None */0, Icon.Nodejs[/* make */1](/* int array */[])), "Node.js");
                          default:
                            return React.createElement("div", undefined, Vrroom.Helpers[/* text */0]("Unknown: " + other));
                        }
                      }))));
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
                  className: PlatformsStyles.root
                }, ReasonReact.element(/* None */0, /* None */0, Tooltip.make(tooltip(platforms), /* None */0, ReasonReact.element(/* None */0, /* None */0, Fragment.make(/* array */[
                                  match !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.Html5[/* make */1](/* int array */[])) : Vrroom.Helpers[/* null */1],
                                  match$1 !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.Nodejs[/* make */1](/* int array */[])) : Vrroom.Helpers[/* null */1],
                                  match$2 !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.Matrix[/* make */1](/* int array */[])) : Vrroom.Helpers[/* null */1],
                                  match$3 !== 0 ? ReasonReact.element(/* None */0, /* None */0, Icon.$$Infinity[/* make */1](/* int array */[])) : Vrroom.Helpers[/* null */1]
                                ])))));
    });
  return newrecord;
}

var Control = 0;

var Styles = 0;

exports.Control   = Control;
exports.Styles    = Styles;
exports.platform  = platform;
exports.tooltip   = tooltip;
exports.component = component;
exports.make      = make;
/* component Not a pure module */