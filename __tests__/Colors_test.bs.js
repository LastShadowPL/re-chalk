// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Chalk$ReChalk = require("../src/Chalk.bs.js");

var colors = $$Array.map((function (c) {
        return /* tuple */[
                Chalk$ReChalk.Helpers[/* colorToString */1](c),
                c
              ];
      }), /* array */[
      /* Reset */0,
      /* Bold */1,
      /* Dim */2,
      /* Italic */3,
      /* Underline */4,
      /* Inverse */5,
      /* Hidden */6,
      /* Strikethrough */7,
      /* Visible */8,
      /* Black */9,
      /* Red */10,
      /* Green */11,
      /* Yellow */12,
      /* Blue */13,
      /* Magenta */14,
      /* Cyan */15,
      /* White */16,
      /* Gray */17,
      /* RedBright */18,
      /* GreenBright */19,
      /* YellowBright */20,
      /* BlueBright */21,
      /* MagentaBright */22,
      /* CyanBright */23,
      /* WhiteBright */24,
      /* BgBlack */25,
      /* BgRed */26,
      /* BgGreen */27,
      /* BgYellow */28,
      /* BgBlue */29,
      /* BgMagenta */30,
      /* BgCyan */31,
      /* BgWhite */32,
      /* BgBlackBright */33,
      /* BgRedBright */34,
      /* BgGreenBright */35,
      /* BgYellowBright */36,
      /* BgBlueBright */37,
      /* BgMagentaBright */38,
      /* BgCyanBright */39,
      /* BgWhiteBright */40
    ]);

Jest.describe("Colors", (function (param) {
        return $$Array.iter((function (item) {
                      var t = item[0];
                      var x = Chalk$ReChalk.colorify(item[1], t);
                      console.log(x);
                      return Jest.test(t, (function (param) {
                                    return Jest.Expect[/* toMatch */14](t, Jest.Expect[/* expect */0](x));
                                  }));
                    }), colors);
      }));

var text = "Hello";

exports.text = text;
exports.colors = colors;
/* colors Not a pure module */
