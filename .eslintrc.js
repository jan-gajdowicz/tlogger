module.exports = {
    "parser": "babel-eslint",
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "env": {
      "browser": true,
      "node" : true
    }, 
    "rules": {
      "no-mixed-spaces-and-tabs" : 0,
      "react/prop-types":        0,
      "spaced-comment":         [2, "always" ],
      "vars-on-top":            2,
      "no-undef":               0,
      "no-undefined":           2,
      "comma-dangle":           [ 2, "never" ],
      "quotes":                 [ 2, "single" ],
      "semi":                   [ 2, "never" ],
      "guard-for-in":           2,
      "no-eval":                2,
      "no-with":                2,
      "valid-typeof":           2,
      "no-unused-vars":         1,
      "no-continue":            1,
      "no-extra-semi":          1,
      "no-unreachable":         1,
      "no-unused-expressions":  1,
      "no-magic-numbers":       0,
      "max-len":                [1, 80, 4],
      "indent":                 [ "error", 2, { "SwitchCase": 1 } ]
    }
  }
  
