// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Tag           = require("../components/Tag.js");
var Icon          = require("../bindings/Icon.js");
var Link          = require("../bindings/gatsby/link.js");
var Curry         = require("bs-platform/lib/js/curry.js");
var Score         = require("../components/Score.js");
var React         = require("react");
var Config        = require("../Config.js");
var Helmet        = require("../bindings/gatsby/helmet.js");
var Vrroom        = require("vrroom/src/Vrroom.bs.js");
var TimeAgo       = require("../bindings/TimeAgo.js");
var Version       = require("../components/Version.js");
var Platforms     = require("../components/Platforms.js");
var ReasonReact   = require("reason-react/src/ReasonReact.js");
var Js_primitive  = require("bs-platform/lib/js/js_primitive.js");
var PackageStyles = require("../styles/PackageStyles.js");

((require('../../static/hljs.css')));

var component = ReasonReact.statelessComponent("Package");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var $$package = data.package;
      var match = $$package.license;
      var tmp = { };
      var tmp$1 = Js_primitive.null_undefined_to_opt($$package.homepageUrl);
      if (tmp$1) {
        tmp.href = tmp$1[0];
      }
      var tmp$2 = { };
      var tmp$3 = Js_primitive.null_undefined_to_opt($$package.repositoryUrl);
      if (tmp$3) {
        tmp$2.href = tmp$3[0];
      }
      var tmp$4 = { };
      var tmp$5 = Js_primitive.null_undefined_to_opt($$package.npmUrl);
      if (tmp$5) {
        tmp$4.href = tmp$5[0];
      }
      var tmp$6 = { };
      var tmp$7 = Js_primitive.null_undefined_to_opt($$package.issuesUrl);
      if (tmp$7) {
        tmp$6.href = tmp$7[0];
      }
      var tmp$8 = { };
      var tmp$9 = Js_primitive.null_undefined_to_opt($$package.docsUrl);
      if (tmp$9) {
        tmp$8.href = tmp$9[0];
      }
      return React.createElement("div", {
                  className: PackageStyles.root
                }, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate($$package.name)], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("header", {
                      className: PackageStyles.header($$package.type)
                    }, React.createElement("div", {
                          className: PackageStyles.props
                        }, ReasonReact.element(/* None */0, /* None */0, Curry._2(Vrroom.Control[/* IfSome */3][/* make */1], Js_primitive.null_undefined_to_opt($$package.stars), (function (stars) {
                                    return React.createElement("div", {
                                                className: PackageStyles.stars
                                              }, Vrroom.Helpers[/* text */0](stars), ReasonReact.element(/* None */0, /* None */0, Icon.Star[/* make */0](/* Some */[PackageStyles.starIcon], /* array */[])));
                                  }))), ReasonReact.element(/* None */0, /* None */0, Score.make($$package, /* array */[])), (match == null) ? React.createElement("div", {
                                className: PackageStyles.nolicense
                              }, Vrroom.Helpers[/* text */0]("No license")) : React.createElement("div", {
                                className: PackageStyles.license
                              }, Vrroom.Helpers[/* text */0](match)), React.createElement("div", {
                              className: PackageStyles.updated
                            }, ReasonReact.element(/* None */0, /* None */0, TimeAgo.make($$package.updated, /* array */[])))), React.createElement("div", {
                          className: PackageStyles.title
                        }, ReasonReact.element(/* None */0, /* None */0, Link.make($$package.slug, /* Some */[PackageStyles.name], /* None */0, /* array */[Vrroom.Helpers[/* text */0]($$package.name)])), ReasonReact.element(/* None */0, /* None */0, Version.make($$package.version, +($$package.type === "published"), /* array */[])), ReasonReact.element(/* None */0, /* None */0, Platforms.make($$package.platforms, /* array */[]))), React.createElement("div", {
                          className: PackageStyles.fields
                        }, React.createElement("div", {
                              className: PackageStyles.description
                            }, Vrroom.Helpers[/* text */0]($$package.description)), React.createElement("div", {
                              className: PackageStyles.tags
                            }, ReasonReact.element(/* None */0, /* None */0, Icon.Tags[/* make */0](/* Some */[PackageStyles.tagsIcon], /* array */[])), ReasonReact.element(/* None */0, /* None */0, Tag.Category[/* make */2]($$package.category, /* array */[])), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], $$package.keywords, /* None */0, (function (keyword) {
                                        return ReasonReact.element(/* Some */[keyword], /* None */0, Tag.Keyword[/* make */1](keyword, /* array */[]));
                                      }))))), React.createElement("div", {
                          className: PackageStyles.links
                        }, React.createElement("a", tmp, Vrroom.Helpers[/* text */0]("homepage")), React.createElement("a", tmp$2, Vrroom.Helpers[/* text */0]("repository")), React.createElement("a", tmp$4, Vrroom.Helpers[/* text */0]("npm")), React.createElement("a", tmp$6, Vrroom.Helpers[/* text */0]("issues")), React.createElement("a", tmp$8, Vrroom.Helpers[/* text */0]("documentation")))), React.createElement("div", {
                      className: PackageStyles.readme,
                      dangerouslySetInnerHTML: {
                        __html: $$package.readme
                      }
                    }));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query PackageQuery($id: String!) {
      package: packages(id: { eq: $id }) {
        type
        id
        name
        version
        category
        condition
        platforms
        description
        keywords
        license
        updated
        stars
        score
        quality
        popularity
        maintenance
        readme
        homepageUrl
        repositoryUrl
        npmUrl
        issuesUrl

        slug
      }
    }
  `

;

var Control = 0;

var Styles = 0;

exports.Control   = Control;
exports.Styles    = Styles;
exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/*  Not a pure module */
