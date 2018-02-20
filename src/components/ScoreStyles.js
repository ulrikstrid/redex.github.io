// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");

var root = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.position(TypedGlamor.relative),
      /* :: */[
        TypedGlamor.fontSize(TypedGlamor.em(0.85)),
        /* :: */[
          TypedGlamor.whiteSpace(TypedGlamor.nowrap),
          /* :: */[
            TypedGlamor.cursor(TypedGlamor.help),
            /* :: */[
              TypedGlamor.select("& > .popover", /* :: */[
                    TypedGlamor.display(TypedGlamor.block),
                    /* :: */[
                      TypedGlamor.position(TypedGlamor.absolute),
                      /* :: */[
                        TypedGlamor.offsetBottom(TypedGlamor.pct(100)),
                        /* :: */[
                          TypedGlamor.zIndex(TypedGlamor.$$int(10)),
                          /* :: */[
                            TypedGlamor.backgroundColor(TypedGlamor.white),
                            /* :: */[
                              TypedGlamor.boxShadows(/* :: */[
                                    TypedGlamor.shadow(TypedGlamor.px(1), TypedGlamor.px(1), /* None */0, /* None */0, /* None */0, TypedGlamor.rgba(0, 0, 0, 0.1)),
                                    /* [] */0
                                  ]),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]),
              /* :: */[
                TypedGlamor.select("&:hover > .popover", /* :: */[
                      TypedGlamor.display(TypedGlamor.block),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var icon = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.marginLeft(TypedGlamor.em(0.25)),
      /* :: */[
        TypedGlamor.transforms(/* :: */[
              TypedGlamor.translateY(TypedGlamor.px(-1)),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var tooltip = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.backgroundColor(TypedGlamor.white),
      /* :: */[
        TypedGlamor.boxShadows(/* :: */[
              TypedGlamor.shadow(TypedGlamor.px(1), TypedGlamor.px(1), /* Some */[TypedGlamor.px(3)], /* Some */[TypedGlamor.px(1)], /* None */0, TypedGlamor.rgba(0, 0, 0, 0.1)),
              /* [] */0
            ]),
        /* :: */[
          TypedGlamor.padding2(TypedGlamor.em(0.5), TypedGlamor.em(1)),
          /* :: */[
            TypedGlamor.select("& div", /* :: */[
                  TypedGlamor.whiteSpace(TypedGlamor.nowrap),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var factor = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.justifyContent(TypedGlamor.spaceBetween),
        /* :: */[
          TypedGlamor.select("& > span:last-child", /* :: */[
                TypedGlamor.marginLeft(TypedGlamor.em(1)),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

exports.root = root;
exports.icon = icon;
exports.tooltip = tooltip;
exports.factor = factor;
/* root Not a pure module */