exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W2: () => (/* binding */ Container),
/* harmony export */   X6: () => (/* binding */ Heading),
/* harmony export */   kC: () => (/* binding */ Flex),
/* harmony export */   rU: () => (/* binding */ Link),
/* harmony export */   xu: () => (/* binding */ Box$1),
/* harmony export */   xv: () => (/* binding */ Text)
/* harmony export */ });
/* unused harmony exports Alert, AspectImage, AspectRatio, Avatar, Badge, Button, Card, Checkbox, Close, CloseIcon, Divider, Donut, Embed, Field, Grid, IconButton, Image, Input, Label, MenuButton, MenuIcon, Message, NavLink, Paragraph, Progress, Radio, Select, Slider, Spinner, Switch, Textarea, __isBoxStyledSystemProp */
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6050);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6657);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7184);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3431);




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded$g = ["__themeKey", "__css", "variant", "css", "sx", "as"];
var boxSystemProps = [// space scale props (inherited from @styled-system/space)
'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', // color props (inherited from @styled-system/color)
'color', 'backgroundColor', 'bg', 'opacity'];

/**
 * @internal
 */
var __isBoxStyledSystemProp = function __isBoxStyledSystemProp(prop) {
  return boxSystemProps.includes(prop);
};

var pickSystemProps = function pickSystemProps(props) {
  var res = {};

  for (var _iterator = _createForOfIteratorHelperLoose(boxSystemProps), _step; !(_step = _iterator()).done;) {
    var key = _step.value;
    res[key] = props[key];
  }

  return res;
};
/**
 * Use the Box component as a layout primitive to add margin, padding, and colors to content.
 * @see https://theme-ui.com/components/box
 */


var Box$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Box(props, ref) {
  var theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.u)();

  var _ref = props,
      _ref$__themeKey = _ref.__themeKey,
      __themeKey = _ref$__themeKey === void 0 ? 'variants' : _ref$__themeKey,
      __css = _ref.__css,
      variant = _ref.variant,
      cssProp = _ref.css,
      sx = _ref.sx,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$g);

  var baseStyles = {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  };

  var __cssStyles = (0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)(__css)(theme);

  var variantInTheme = (0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)(theme, __themeKey + "." + variant) || (0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)(theme, variant);
  var variantStyles = variantInTheme && (0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)(variantInTheme)(theme);
  var sxPropStyles = (0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)(sx)(theme);
  var systemPropsStyles = (0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)(pickSystemProps(rest))(theme);
  var style = [baseStyles, __cssStyles, variantStyles, sxPropStyles, systemPropsStyles, cssProp];
  boxSystemProps.forEach(function (name) {
    delete rest[name];
  });
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)(Component, _extends({
    ref: ref,
    css: style
  }, rest));
});

/**
 * Use the Flex component to create flexbox layouts.
 * @see https://theme-ui.com/components/flex
 */
var Flex = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Flex(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box$1, _extends({
    ref: ref
  }, props, {
    sx: _extends({
      display: 'flex'
    }, props.sx)
  }));
});

var getProps = function getProps(test) {
  return function (props) {
    var next = {};

    for (var key in props) {
      if (test(key || '')) next[key] = props[key];
    }

    return next;
  };
};
var MRE = /^m[trblxy]?$/;
var getMargin = getProps(function (k) {
  return MRE.test(k);
});
var omitMargin = getProps(function (k) {
  return !MRE.test(k);
});
/** @internal */

function __internalProps(props) {
  return props;
}
/**
 * @internal Props used by Theme UI Components not intended for user code.
 */

var _excluded$f = (/* unused pure expression or super */ null && (["width", "columns", "gap", "repeat"]));

var px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};

var singleWidthToColumns = function singleWidthToColumns(width, repeat) {
  return width ? "repeat(auto-" + repeat + ", minmax(" + px(width) + ", 1fr))" : null;
};

var widthToColumns = function widthToColumns(width, repeat) {
  return Array.isArray(width) ? width.map(function (w) {
    return singleWidthToColumns(w, repeat);
  }) : singleWidthToColumns(width, repeat);
};

var singleCountToColumns = function singleCountToColumns(n) {
  return n ? typeof n === 'number' ? "repeat(" + n + ", 1fr)" : n : null;
};

var countToColumns = function countToColumns(n) {
  return Array.isArray(n) ? n.map(singleCountToColumns) : singleCountToColumns(n);
};

/**
 * CSS grid layout component to arrange direct child elements in a tiled grid layout.
 * @see https://theme-ui.com/components/grid
 */
var Grid = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Grid(_ref, ref) {
  var width = _ref.width,
      columns = _ref.columns,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 3 : _ref$gap,
      _ref$repeat = _ref.repeat,
      repeat = _ref$repeat === void 0 ? 'fit' : _ref$repeat,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$f);

  var gridTemplateColumns = !!width ? widthToColumns(width, repeat) : countToColumns(columns);
  var __css = {
    display: 'grid',
    gridGap: gap,
    gridTemplateColumns: gridTemplateColumns
  };
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref
  }, props, __internalProps({
    __themeKey: 'grids',
    __css: __css
  })));
})));

var Box = (/* unused pure expression or super */ null && (Box$1));

/**
 * Primitive button component with variants
 * @see https://theme-ui.com/components/button
 */
var Button = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Button(props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    as: "button",
    variant: "primary"
  }, props, __internalProps({
    __themeKey: 'buttons',
    __css: {
      appearance: 'none',
      display: props.hidden ? undefined : 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 4
    }
  })));
})));

/**
 * Link variants can be defined in the `theme.links` object.
 * By default the Link component will use styles defined in `theme.styles.a`.
 * @see https://theme-ui.com/components/link
 */
var Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Link(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box$1, _extends({
    ref: ref,
    as: "a",
    variant: "styles.a"
  }, props, __internalProps({
    __themeKey: 'links'
  })));
});

/**
 * Primitive typographic component.
 *
 * Text style variants can be defined in the theme.text object.
 * The Paragraph component uses theme.text.paragraph as its default variant style.
 * @see https://theme-ui.com/components/paragraph
 */
var Paragraph = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Paragraph(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "p",
    variant: "paragraph"
  }, props, __internalProps({
    __themeKey: 'text',
    __css: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  })));
})));

/**
 * Primitive typographic component.
 *
 * Text style variants can be defined in the theme.text object.
 * @see https://theme-ui.com/components/text
 */
var Text = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Text(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box$1, _extends({
    as: "span",
    ref: ref,
    variant: "default"
  }, props, __internalProps({
    __themeKey: 'text'
  })));
});

/**
 * Primitive heading component, defaults to <h2>.
 *
 * Text style variants can be defined in the theme.text object.
 * The Heading component uses theme.text.heading as its default variant style.
 * @see https://theme-ui.com/components/heading
 */
var Heading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Heading(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box$1, _extends({
    ref: ref,
    as: "h2",
    variant: "heading"
  }, props, __internalProps({
    __themeKey: 'text',
    __css: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  })));
});

/**
 * Image style variants can be defined in the theme.images object.
 * @see https://theme-ui.com/components/image/
 */
var Image = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Image(props, ref) {
  var __outerCss = props.__css;
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "img"
  }, props, __internalProps({
    __themeKey: 'images',
    __css: _extends({
      maxWidth: '100%',
      height: 'auto'
    }, __outerCss)
  })));
})));

/**
 * Card style variants can be defined in the `theme.cards` object.
 * By default the Card component uses the `theme.cards.primary` variant.
 * @see https://theme-ui.com/components/card
 */
var Card = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Card(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    variant: "primary"
  }, props, __internalProps({
    __themeKey: 'cards'
  })));
})));

/**
 * Label variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.label` variant by default.
 * @see https://theme-ui.com/components/label/
 */
var Label = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Label(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "label",
    variant: "label"
  }, props, __internalProps({
    __themeKey: 'forms',
    __css: {
      width: '100%',
      display: 'flex'
    }
  })));
})));

var _excluded$e = (/* unused pure expression or super */ null && (["sx", "autofillBackgroundColor"]));
var autofillStyles = {
  boxShadow: 'inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)',
  fontSize: 'inherit',
  ':first-line': {
    fontSize: '1rem'
  }
};
var defaultInputStyles = {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent',
  ':autofill, :autofill:hover, :autofill:focus': autofillStyles,
  ':-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus': autofillStyles
};

/**
 * Input variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.input` variant by default.
 * @see https://theme-ui.com/components/input/
 */
var Input = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Input(_ref, ref) {
  var sx = _ref.sx,
      _ref$autofillBackgrou = _ref.autofillBackgroundColor,
      autofillBackgroundColor = _ref$autofillBackgrou === void 0 ? 'background' : _ref$autofillBackgrou,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$e);

  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "input",
    variant: "input",
    sx: _extends({
      '--theme-ui-input-autofill-bg': function themeUiInputAutofillBg(theme) {
        return theme.colors && get(theme.colors, autofillBackgroundColor, null);
      }
    }, sx)
  }, rest, __internalProps({
    __themeKey: 'forms',
    __css: defaultInputStyles
  })));
})));

var _excluded$d = ["size"];
var SVG = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function SVG(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$d);

  var svgProps = _extends({
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'currentcolor'
  }, rest);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box$1, _extends({
    ref: ref,
    as: "svg"
  }, svgProps));
});
SVG.displayName = 'SVG';

var _excluded$c = (/* unused pure expression or super */ null && (["arrow"]));

var DownArrow = function DownArrow(props) {
  return /*#__PURE__*/React.createElement(SVG, props, /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }));
};

/**
 * Select variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.select` variant by default.
 * @see https://theme-ui.com/components/select/
 */
var Select = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Select(_ref, ref) {
  var arrow = _ref.arrow,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$c);

  var __css = {
    display: 'block',
    width: '100%',
    p: 2,
    paddingRight: 4,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    backgroundColor: function backgroundColor(theme) {
      return get(theme, 'colors.background', null);
    }
  };
  return /*#__PURE__*/React.createElement(Box$1, _extends({}, getMargin(props), {
    sx: {
      display: 'flex'
    }
  }), /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "select",
    variant: "select"
  }, omitMargin(props), __internalProps({
    __themeKey: 'forms',
    __css: __css
  }))), arrow || /*#__PURE__*/React.createElement(DownArrow, {
    sx: {
      ml: -28,
      alignSelf: 'center',
      pointerEvents: 'none'
    }
  }));
})));

/**
 * Form textarea component
 *
 * Textarea variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.textarea` variant by default.
 * @see https://theme-ui.com/components/textarea/
 */
var Textarea = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Textarea(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "textarea",
    variant: "textarea"
  }, props, __internalProps({
    __themeKey: 'forms',
    __css: {
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 4,
      color: 'inherit',
      bg: 'transparent'
    }
  })));
})));

var _excluded$b = (/* unused pure expression or super */ null && (["className", "sx", "variant"]));

var RadioChecked = function RadioChecked(props) {
  return /*#__PURE__*/React.createElement(SVG, props, /*#__PURE__*/React.createElement("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};

var RadioUnchecked = function RadioUnchecked(props) {
  return /*#__PURE__*/React.createElement(SVG, props, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};

var RadioIcon = function RadioIcon(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RadioChecked, _extends({}, props, __internalProps({
    __css: {
      display: 'none',
      'input:checked ~ &': {
        display: 'block'
      }
    }
  }))), /*#__PURE__*/React.createElement(RadioUnchecked, _extends({}, props, __internalProps({
    __css: {
      display: 'block',
      'input:checked ~ &': {
        display: 'none'
      }
    }
  }))));
};

/**
 * Form radio input component
 *
 * Radio variants can be defined in `theme.forms` and the
 * component uses the `theme.forms.radio variant` by default.
 * @see https://theme-ui.com/components/radio/
 */
var Radio = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Radio(_ref, ref) {
  var className = _ref.className,
      sx = _ref.sx,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'radio' : _ref$variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$b);

  return /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      minWidth: 'min-content'
    }
  }, /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "input",
    type: "radio"
  }, props, {
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  })), /*#__PURE__*/React.createElement(Box$1, _extends({
    as: RadioIcon,
    "aria-hidden": "true",
    variant: variant,
    className: className,
    sx: sx
  }, __internalProps({
    __themeKey: 'forms',
    __css: {
      mr: 2,
      borderRadius: 9999,
      color: 'gray',
      flexShrink: 0,
      'input:checked ~ &': {
        color: 'primary'
      },
      'input:focus ~ &': {
        bg: 'highlight'
      }
    }
  }))));
})));

var _excluded$a = (/* unused pure expression or super */ null && (["className", "sx", "variant", "children"]));

var CheckboxChecked = function CheckboxChecked(props) {
  return /*#__PURE__*/React.createElement(SVG, props, /*#__PURE__*/React.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
};

var CheckboxUnchecked = function CheckboxUnchecked(props) {
  return /*#__PURE__*/React.createElement(SVG, props, /*#__PURE__*/React.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
};

var CheckboxIcon = function CheckboxIcon(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckboxChecked, _extends({}, props, __internalProps({
    __css: {
      display: 'none',
      'input:checked ~ &': {
        display: 'block'
      }
    }
  }))), /*#__PURE__*/React.createElement(CheckboxUnchecked, _extends({}, props, __internalProps({
    __css: {
      display: 'block',
      'input:checked ~ &': {
        display: 'none'
      }
    }
  }))));
};

/**
 * Form checkbox input component
 *
 * Checkbox variants can be defined in `theme.forms` and the
 * component uses the `theme.forms.checkbox` variant by default.
 * @see https://theme-ui.com/components/checkbox/
 */
var Checkbox = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Checkbox(_ref, ref) {
  var className = _ref.className,
      sx = _ref.sx,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'checkbox' : _ref$variant,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$a);

  return /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      minWidth: 'min-content'
    }
  }, /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "input",
    type: "checkbox"
  }, props, {
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  })), /*#__PURE__*/React.createElement(Box$1, _extends({
    as: CheckboxIcon,
    "aria-hidden": "true",
    variant: variant,
    className: className,
    sx: sx
  }, __internalProps({
    __themeKey: 'forms',
    __css: {
      mr: 2,
      borderRadius: 4,
      color: 'gray',
      flexShrink: 0,
      'input:checked ~ &': {
        color: 'primary'
      },
      'input:focus ~ &': {
        color: 'primary',
        bg: 'highlight'
      }
    }
  }))), children);
})));

var _excluded$9 = (/* unused pure expression or super */ null && (["className", "label", "sx", "variant"]));
var GUTTER = 2;
var SIZE = 18;

/**
 * Form switch component
 *
 * Switch variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.switch` variant by default.
 */
var Switch = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Switch(_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      sx = _ref.sx,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'switch' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$9);

  var __css = {
    position: 'relative',
    flexShrink: 0,
    bg: 'gray',
    borderRadius: SIZE,
    height: SIZE + GUTTER * 2,
    width: SIZE * 2 + GUTTER * 2,
    mr: 2,
    'input:disabled ~ &': {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '50%',
      height: SIZE,
      width: SIZE,
      bg: 'white',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      transform: 'translateX(0%)',
      transition: "transform 240ms cubic-bezier(0.165, 0.840, 0.440, 1.000)"
    },
    'input:checked ~ &': {
      bg: 'primary',
      '> div': {
        transform: 'translateX(100%)'
      }
    }
  };
  return /*#__PURE__*/React.createElement(Label, {
    sx: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "input",
    type: "checkbox",
    "aria-label": label
  }, rest, {
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  }, __internalProps({
    __themeKey: 'forms'
  }))), /*#__PURE__*/React.createElement(Box$1, _extends({
    css: {
      padding: GUTTER
    },
    variant: variant,
    className: className,
    sx: sx
  }, __internalProps({
    __themeKey: 'forms',
    __css: __css
  })), /*#__PURE__*/React.createElement(Box$1, null)), /*#__PURE__*/React.createElement("span", null, label));
})));

var thumbStyle = {
  appearance: 'none',
  width: 16,
  height: 16,
  bg: 'currentcolor',
  border: 0,
  borderRadius: 9999,
  variant: 'forms.slider.thumb'
};
var sliderStyle = {
  display: 'block',
  width: '100%',
  height: 4,
  my: 2,
  cursor: 'pointer',
  appearance: 'none',
  borderRadius: 9999,
  color: 'inherit',
  bg: 'gray',
  ':focus': {
    outline: 'none',
    color: 'primary'
  },
  '&::-webkit-slider-thumb': thumbStyle,
  '&::-moz-range-thumb': thumbStyle,
  '&::-ms-thumb': thumbStyle
};

/**
 * Range input element
 *
 * Slider variants can be defined in the `theme.forms` object.
 * The Slider component uses `theme.forms.slider` as its default variant style.
 * @see https://theme-ui.com/components/slider/
 */
var Slider = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Slider(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "input",
    type: "range",
    variant: "slider"
  }, props, __internalProps({
    __themeKey: 'forms',
    __css: sliderStyle
  })));
})));

var _excluded$8 = (/* unused pure expression or super */ null && (["as", "label", "id", "name"]));
var Field = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Field(_ref, ref) {
  var _ref$as = _ref.as,
      Control = _ref$as === void 0 ? Input : _ref$as,
      label = _ref.label,
      id = _ref.id,
      name = _ref.name,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$8);

  var fieldIdentifier = id || name;

  var controlProps = _extends({
    ref: ref,
    name: name,
    id: fieldIdentifier
  }, omitMargin(rest));

  return /*#__PURE__*/React.createElement(Box$1, getMargin(rest), /*#__PURE__*/React.createElement(Label, {
    htmlFor: fieldIdentifier
  }, label), /*#__PURE__*/React.createElement(Control, controlProps));
}))); // Field is generic bcs of `as` prop, so we can't just use types from forwardRef

/**
 * Horizontal `<progress />` bar
 * @see https://theme-ui.com/components/progress/
 */
var Progress = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Progress(props, ref) {
  var __css = {
    display: 'block',
    width: '100%',
    height: '4px',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    appearance: 'none',
    color: 'primary',
    bg: 'gray',
    borderRadius: 9999,
    border: 'none',
    '&::-webkit-progress-bar': {
      bg: 'transparent'
    },
    '&::-webkit-progress-value': {
      bg: 'currentcolor'
    },
    '&::-moz-progress-bar': {
      bg: 'currentcolor'
    }
  };
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "progress",
    variant: "styles.progress"
  }, props, __internalProps({
    __css: __css
  })));
})));

var _excluded$7 = (/* unused pure expression or super */ null && (["size", "strokeWidth", "value", "min", "max", "title"]));

/**
 * Single value SVG donut chart
 * @see https://theme-ui.com/components/donut/
 */
var Donut = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Donut(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 128 : _ref$size,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 1 : _ref$max,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$7);

  var r = 16 - (typeof strokeWidth === 'number' ? strokeWidth : parseFloat(strokeWidth));
  var C = 2 * r * Math.PI;
  var offset = C - (value - min) / (max - min) * C;
  var svgProps = {
    strokeWidth: strokeWidth,
    viewBox: '0 0 32 32',
    width: size,
    height: size,
    fill: 'none',
    stroke: 'currentcolor'
  };
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "svg",
    role: "img",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, svgProps, props, __internalProps({
    __css: {
      color: 'primary'
    }
  })), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 16,
    r: r,
    opacity: 1 / 8
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 16,
    r: r,
    strokeDasharray: C,
    strokeDashoffset: offset,
    transform: "rotate(-90 16 16)"
  }));
})));

var _excluded$6 = (/* unused pure expression or super */ null && (["size", "strokeWidth", "max", "title", "duration"]));
var Spinner = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Spinner(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 48 : _ref$size,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 4 : _ref$strokeWidth;
      _ref.max;
      var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Loading' : _ref$title,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  var __css = {
    color: 'primary',
    overflow: 'visible'
  };
  var svgProps = {
    strokeWidth: strokeWidth,
    viewBox: '0 0 32 32',
    width: size,
    height: size,
    fill: 'none',
    stroke: 'currentColor',
    role: 'img'
  };
  var circleProps = {
    strokeWidth: strokeWidth,
    r: 16 - strokeWidth,
    cx: 16,
    cy: 16,
    fill: 'none'
  };
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "svg"
  }, svgProps, props, __internalProps({
    __css: __css
  })), /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", _extends({}, circleProps, {
    opacity: 1 / 8
  })), /*#__PURE__*/React.createElement("circle", _extends({}, circleProps, {
    strokeDasharray: "20 110"
  }), /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    from: "0 16 16",
    to: "360 16 16",
    dur: duration + "ms",
    repeatCount: "indefinite"
  })));
})));

var _excluded$5 = (/* unused pure expression or super */ null && (["size"]));
var Avatar = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Avatar(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 48 : _ref$size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  return /*#__PURE__*/React.createElement(Image, _extends({
    ref: ref,
    width: size,
    height: size,
    variant: "avatar"
  }, props, __internalProps({
    __css: {
      borderRadius: 9999
    }
  })));
})));

var Badge = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Badge(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    variant: "primary"
  }, props, __internalProps({
    __themeKey: 'badges',
    __css: {
      display: 'inline-block',
      verticalAlign: 'baseline',
      fontSize: 0,
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      px: 1,
      borderRadius: 2,
      color: 'white',
      bg: 'primary'
    }
  })));
})));

var _excluded$4 = (/* unused pure expression or super */ null && (["size"]));

/**
 * Transparent button for SVG icons
 *
 * IconButton variants can be defined in the `theme.buttons` object.
 * By default the IconButton component will use styles defined in `theme.buttons.icon`.
 *
 * @see https://theme-ui.com/components/icon-button
 */
var IconButton = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function IconButton(_ref, ref) {
  var _css;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 32 : _ref$size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  var emotionCssLabel = ((_css = props.__css) == null ? void 0 : _css.label) || 'IconButton';
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "button",
    variant: "icon"
  }, props, __internalProps({
    __themeKey: 'buttons',
    __css: {
      label: emotionCssLabel,
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 1,
      width: size,
      height: size,
      color: 'inherit',
      bg: 'transparent',
      border: 'none',
      borderRadius: 4
    }
  })));
})));

var _excluded$3 = (/* unused pure expression or super */ null && (["size"]));
var CloseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}));

/**
 * Button with close (×) icon.
 *
 * The Close component renders as a <button> element by default.
 * Pass any button attributes as props to the component.
 *
 * Close component variants can be defined in the theme.buttons object.
 * The Close component uses theme.buttons.close as its default variant style.
 */
var Close = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Close(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 32 : _ref$size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement(IconButton, _extends({
    ref: ref,
    size: size,
    title: "Close",
    "aria-label": "Close",
    variant: "close"
  }, props, {
    children: CloseIcon
  }));
})));

/**
 * Component for displaying messages, notifications, or other application state.
 *
 * Alert variants can be defined in `theme.alerts`.
 * The Alert component uses `theme.alerts.primary` as its default variant.
 */
var Alert = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    variant: "primary"
  }, props, __internalProps({
    __themeKey: 'alerts',
    __css: {
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: 2,
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      borderRadius: 4
    }
  })));
})));

/**
 * The Divider component reuses styles from `theme.styles.hr` as its default variant.
 */
var Divider = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Divider(props, ref) {
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "hr",
    variant: "styles.hr"
  }, props, __internalProps({
    __css: {
      color: 'gray',
      m: 0,
      my: 2,
      border: 0,
      borderBottom: '1px solid'
    }
  })));
})));

var _excluded$2 = (/* unused pure expression or super */ null && (["variant", "sx", "ratio", "src", "frameBorder", "allowFullScreen", "width", "height", "allow"]));
var getContainerProps = getProps(__isBoxStyledSystemProp);
var getIframeProps = getProps(function (str) {
  return !__isBoxStyledSystemProp(str);
});

/**
 * Responsive iframe for video embeds.
 *
 * Embed variants can be defined anywhere in the theme object.
 *
 * @see https://theme-ui.com/components/embed
 */
var Embed = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Embed(_ref, ref) {
  var variant = _ref.variant,
      sx = _ref.sx,
      _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === void 0 ? 16 / 9 : _ref$ratio,
      src = _ref.src,
      _ref$frameBorder = _ref.frameBorder,
      frameBorder = _ref$frameBorder === void 0 ? 0 : _ref$frameBorder,
      _ref$allowFullScreen = _ref.allowFullScreen,
      allowFullScreen = _ref$allowFullScreen === void 0 ? true : _ref$allowFullScreen,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 560 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 315 : _ref$height,
      allow = _ref.allow,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var iframeProps = _extends({
    src: src,
    width: width,
    height: height,
    frameBorder: frameBorder,
    allowFullScreen: allowFullScreen,
    allow: allow
  }, getIframeProps(rest));

  return /*#__PURE__*/React.createElement(Box$1, _extends({
    variant: variant,
    sx: sx
  }, getContainerProps(rest), __internalProps({
    __css: {
      width: '100%',
      height: 0,
      paddingBottom: 100 / ratio + '%',
      position: 'relative',
      overflow: 'hidden'
    }
  })), /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref,
    as: "iframe"
  }, iframeProps, __internalProps({
    __css: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0
    }
  }))));
})));

var _excluded$1 = (/* unused pure expression or super */ null && (["ratio", "children"]));

/**
 * Component for maintaining a fluid-width aspect ratio
 * @see https://theme-ui.com/components/aspect-ratio
 */
var AspectRatio = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function AspectRatio(_ref, ref) {
  var _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === void 0 ? 4 / 3 : _ref$ratio,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement(Box$1, {
    ref: ref,
    sx: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      width: '100%',
      height: 0,
      paddingBottom: 100 / ratio + '%'
    }
  }), /*#__PURE__*/React.createElement(Box$1, _extends({}, props, __internalProps({
    __css: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })), children));
})));

var _excluded = (/* unused pure expression or super */ null && (["ratio"]));

/**
 * Image component constrained by as aspect ratio.
 * @see https://theme-ui.com/components/aspect-image
 */
var AspectImage = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function AspectImage(_ref, ref) {
  var ratio = _ref.ratio,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(AspectRatio, {
    ratio: ratio
  }, /*#__PURE__*/React.createElement(Image, _extends({
    ref: ref
  }, props, __internalProps({
    __css: {
      objectFit: 'cover'
    }
  }))));
})));

/**
 * Centered, max-width layout component
 *
 * Container variants can be defined in the `theme.layout` object.
 * The Container component uses `theme.layout.container` as its default variant style.
 * @see https://theme-ui.com/components/container
 */
var Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Container(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box$1, _extends({
    ref: ref,
    variant: "container"
  }, props, __internalProps({
    __themeKey: 'layout',
    __css: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto'
    }
  })));
});

/**
 * Link component for use in navigation
 *
 * NavLink variants can be defined in the `theme.links` object.
 * By default the NavLink component will use styles defined in `theme.links.nav`.
 * @see https://theme-ui.com/components/nav-link
 */
var NavLink = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function NavLink(props, ref) {
  var __css = {
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    '&:hover, &:focus, &.active': {
      color: 'primary'
    }
  };
  return /*#__PURE__*/React.createElement(Link, _extends({
    ref: ref,
    variant: "nav"
  }, props, __internalProps({
    __css: __css
  })));
})));

/**
 * Styled Box component for callouts and inline messages
 *
 * Message variants can be defined in the theme.messages object.
 * @see https://theme-ui.com/components/message
 */
var Message = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function Message(props, ref) {
  var __css = {
    padding: 3,
    paddingLeft: function paddingLeft(t) {
      return t.space && Number(t.space[3]) - Number(t.space[1]);
    },
    borderLeftWidth: function borderLeftWidth(t) {
      return t.space && Number(t.space[1]);
    },
    borderLeftStyle: 'solid',
    borderLeftColor: 'primary',
    borderRadius: 4,
    bg: 'highlight'
  };
  return /*#__PURE__*/React.createElement(Box$1, _extends({
    ref: ref
  }, props, __internalProps({
    __themeKey: 'messages',
    __css: __css
  })));
})));

var MenuIcon = function MenuIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentColor",
    css: {
      display: 'block',
      margin: 0,
      boxSizing: 'border-box',
      minWidth: 0
    }
  }, jsx("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }));
};

/**
 * MenuButton variants can be defined in the `theme.buttons` object.
 * By default the MenuButton component will use styles defined in `theme.buttons.menu`.
 *
 * @see https://theme-ui.com/components/menu-button
 */
var MenuButton = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function MenuButton(props, ref) {
  return jsx(IconButton, _extends({
    ref: ref,
    title: "Menu",
    "aria-label": "Toggle Menu",
    variant: "menu"
  }, props), jsx(MenuIcon, null));
})));




/***/ }),

/***/ 8377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(6657);
// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(8733);
// EXTERNAL MODULE: ./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js
var theme_ui_css_esm = __webpack_require__(3431);
// EXTERNAL MODULE: ./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js
var theme_ui_components_esm = __webpack_require__(795);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
// EXTERNAL MODULE: external "/Users/rajkhandekar/Documents/blog/blog2/node_modules/react/index.js"
var index_js_ = __webpack_require__(7184);
// EXTERNAL MODULE: ./node_modules/@lekoarts/themes-utils/dist/index.js
var dist = __webpack_require__(4443);
// EXTERNAL MODULE: ./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js
var theme_ui_color_modes_esm = __webpack_require__(6197);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs + 1 modules
var prism_react_renderer_dist = __webpack_require__(1563);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts
const copyToClipboard=str=>{const{clipboard}=window.navigator;/*
   * fallback to older browsers (including Safari)
   * if clipboard API is not supported
   */if(!clipboard||typeof clipboard.writeText!==`function`){const textarea=document.createElement(`textarea`);textarea.value=str;textarea.setAttribute(`readonly`,`true`);textarea.setAttribute(`contenteditable`,`true`);textarea.style.position=`absolute`;textarea.style.left=`-9999px`;document.body.appendChild(textarea);textarea.select();const range=document.createRange();const sel=window.getSelection();sel===null||sel===void 0?void 0:sel.removeAllRanges();sel===null||sel===void 0?void 0:sel.addRange(range);textarea.setSelectionRange(0,textarea.value.length);document.execCommand(`copy`);document.body.removeChild(textarea);return Promise.resolve(true);}return clipboard.writeText(str);};/* harmony default export */ const copy_to_clipboard = (copyToClipboard);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts
var utils = __webpack_require__(8170);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx
/** @jsx jsx */const delay=duration=>new Promise(resolve=>{setTimeout(resolve,duration);});const Copy=({content,duration=5000,fileName=``,trim=false})=>{const{0:copied,1:setCopied}=(0,index_js_.useState)(false);const label=copied?`${fileName?`${fileName} `:``}copied to clipboard`:`${fileName?`${fileName}: `:``}copy code to clipboard`;return (0,theme_ui_esm/* jsx */.tZ)("button",{type:"button",name:label,disabled:copied,className:"code-copy-button",sx:{variant:`copyButton`},onClick:async()=>{await copy_to_clipboard(trim?content.trim():content);setCopied(true);await delay(duration);setCopied(false);}},copied?`Copied`:`Copy`,(0,theme_ui_esm/* jsx */.tZ)("span",{sx:utils/* visuallyHidden */.j,"aria-roledescription":"status"},label));};/* harmony default export */ const copy = (Copy);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx
var use_minimal_blog_config = __webpack_require__(3494);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-themes.ts + 1 modules
var prism_themes = __webpack_require__(4415);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx
const Code=({codeString,withLineNumbers=false,title=``,className:blockClassName,highlight=``})=>{const{showLineNumbers,showCopyButton}=(0,use_minimal_blog_config/* default */.Z)();const[colorMode]=(0,theme_ui_color_modes_esm/* useColorMode */.If)();const isDark=colorMode===`dark`;const language=(0,dist/* getLanguage */.G3)(blockClassName);const shouldHighlightLine=(0,dist/* calculateLinesToHighlight */.om)(highlight);const shouldShowLineNumbers=withLineNumbers||showLineNumbers;return/*#__PURE__*/index_js_.createElement(prism_react_renderer_dist/* Highlight */.y,{code:codeString// @ts-ignore
,language:language,theme:isDark?prism_themes/* darkTheme */.$_:prism_themes/* lightTheme */.Wb},({className,tokens,getLineProps,getTokenProps})=>/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement("div",{className:"gatsby-highlight","data-language":language},title&&/*#__PURE__*/index_js_.createElement("div",{className:"code-title"},/*#__PURE__*/index_js_.createElement("div",null,title)),/*#__PURE__*/index_js_.createElement("pre",{className:className,"data-linenumber":shouldShowLineNumbers},showCopyButton&&/*#__PURE__*/index_js_.createElement(copy,{content:codeString,fileName:title}),/*#__PURE__*/index_js_.createElement("code",{className:`code-content language-${language}`},tokens.map((line,i)=>{const lineProps=getLineProps({line,key:i});if(shouldHighlightLine(i)){lineProps.className=`${lineProps.className} highlight-line`;lineProps.style={...lineProps.style,backgroundColor:`var(--theme-ui-colors-highlightLineBg)`};}return/*#__PURE__*/index_js_.createElement("div",lineProps,shouldShowLineNumbers&&/*#__PURE__*/index_js_.createElement("span",{className:"line-number-style"},i+1),line.map((token,key)=>/*#__PURE__*/index_js_.createElement("span",getTokenProps({token,key}))));}))))));};/* harmony default export */ const code = (Code);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx
var title = __webpack_require__(5221);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx
const MdxComponents={Text:props=>/*#__PURE__*/index_js_.createElement(theme_ui_components_esm/* Text */.xv,props),Title:props=>/*#__PURE__*/index_js_.createElement(title/* default */.Z,props),pre:preProps=>{const props=(0,dist/* preToCodeBlock */.uX)(preProps);// if there's a codeString and some props, we passed the test
if(props){return/*#__PURE__*/index_js_.createElement(code,props);}// it's possible to have a pre without a code in it
return/*#__PURE__*/index_js_.createElement("pre",preProps);}};/* harmony default export */ const mdx_components = (MdxComponents);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx
/** @jsx jsx */// CSS Styles adapted from: https://codepen.io/aaroniker/pen/KGpXZo
const iconBaseStyles={position:`relative`,width:`24px`,height:`24px`,borderRadius:`50%`,transition:`all 0.45s ease`,"&:before":{content:`""`,position:`absolute`,right:`-9px`,top:`-9px`,height:`24px`,width:`24px`,transition:`transform 0.45s ease`,borderRadius:`50%`},"&:after":{content:`""`,width:`8px`,height:`8px`,borderRadius:`50%`,margin:`-4px 0 0 -4px`,position:`absolute`,top:`50%`,left:`50%`,transition:`all 0.35s ease`,boxShadow:t=>`0 -23px 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}, 0 23px 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}, 23px 0 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}, -23px 0 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}, 15px 15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}, -15px 15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}, 15px -15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}, -15px -15px 0 ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}`}};const buttonBaseStyles={opacity:0.65,position:`relative`,borderRadius:`4px`,width:`40px`,height:`25px`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`opacity 0.3s ease`,border:`none`,outline:`none`,background:`none`,cursor:`pointer`,padding:0,appearance:`none`,"&:hover, &:focus":{opacity:1}};const FallbackIcon=()=>(0,theme_ui_esm/* jsx */.tZ)("button",{type:"button",sx:buttonBaseStyles},(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{...iconBaseStyles,transform:`scale(0.55)`,"&:before":{...iconBaseStyles[`&:before`],opacity:0},"&:after":{...iconBaseStyles[`&:after`],transform:`scale(0)`}}}));const TogglePrimitive=({children,fallback=undefined})=>{const[mounted,setMounted]=index_js_.useState(false);index_js_.useEffect(()=>{setMounted(true);},[]);if(!mounted){if(!fallback){return null;}return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,fallback);}return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,children);};const ColorModeToggle=()=>{const[colorMode,setColorMode]=(0,theme_ui_color_modes_esm/* useColorMode */.If)();const isDark=colorMode===`dark`;return (0,theme_ui_esm/* jsx */.tZ)(TogglePrimitive,{fallback:(0,theme_ui_esm/* jsx */.tZ)(FallbackIcon,null)},(0,theme_ui_esm/* jsx */.tZ)("button",{onClick:()=>{const next=isDark?`light`:`dark`;setColorMode(next);document.documentElement.classList.value=`theme-ui-${next}`;},type:"button","aria-label":isDark?`Activate Light Mode`:`Activate Dark Mode`,title:isDark?`Activate Light Mode`:`Activate Dark Mode`,sx:buttonBaseStyles},(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{...iconBaseStyles,border:t=>isDark?`4px solid ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}`:`none`,backgroundColor:isDark?`toggleIcon`:`transparent`,transform:isDark?`scale(0.55)`:`scale(1)`,overflow:isDark?`visible`:`hidden`,boxShadow:t=>isDark?`none`:`inset 8px -8px 0px 0px ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}`,"&:before":{...iconBaseStyles[`&:before`],border:t=>isDark?`2px solid ${(0,theme_ui_css_esm/* get */.U2)(t,`colors.toggleIcon`)}`:`none`,transform:isDark?`translate(14px, -14px)`:`translate(0, 0)`,opacity:isDark?0:1},"&:after":{...iconBaseStyles[`&:after`],transform:isDark?`scale(1)`:`scale(0)`}}})));};/* harmony default export */ const colormode_toggle = (ColorModeToggle);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts
var replaceSlashes = __webpack_require__(3784);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx
/** @jsx jsx */const Navigation=({nav})=>{const{basePath}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,nav&&nav.length>0&&(0,theme_ui_esm/* jsx */.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,`18px`],".active":{color:`heading`}}},nav.map(item=>(0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{activeClassName:"active",key:item.slug,sx:t=>{var _t$styles;return{...((_t$styles=t.styles)===null||_t$styles===void 0?void 0:_t$styles.a)};},to:(0,replaceSlashes/* default */.Z)(`/${basePath}/${item.slug}`)},item.title))));};/* harmony default export */ const navigation = (Navigation);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx
var use_site_metadata = __webpack_require__(4232);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx
/** @jsx jsx */const HeaderTitle=()=>{const{siteTitle}=(0,use_site_metadata/* default */.Z)();const{basePath}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{to:(0,replaceSlashes/* default */.Z)(`/${basePath}`),"aria-label":`${siteTitle} - Back to home`,sx:{color:`heading`,textDecoration:`none`}},(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{my:0,fontWeight:`semibold`,fontSize:[3,4]}},siteTitle));};/* harmony default export */ const header_title = (HeaderTitle);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx
/** @jsx jsx */const HeaderExternalLinks=()=>{const{externalLinks}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,externalLinks&&externalLinks.length>0&&(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,`18px`]}},externalLinks.map(link=>(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{key:link.url,href:link.url},link.name))));};/* harmony default export */ const header_external_links = (HeaderExternalLinks);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx
/** @jsx jsx */const Header=()=>{const{navigation:nav}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)("header",{sx:{mb:[5,6]}},(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Flex */.kC,{sx:{alignItems:`center`,justifyContent:`space-between`}},(0,theme_ui_esm/* jsx */.tZ)(header_title,null),(0,theme_ui_esm/* jsx */.tZ)(colormode_toggle,null)),(0,theme_ui_esm/* jsx */.tZ)("div",{sx:{boxSizing:`border-box`,display:`flex`,variant:`dividers.bottom`,alignItems:`center`,justifyContent:`space-between`,mt:3,color:`secondary`,a:{color:`secondary`,":hover":{color:`heading`}},flexFlow:`wrap`}},(0,theme_ui_esm/* jsx */.tZ)(navigation,{nav:nav}),(0,theme_ui_esm/* jsx */.tZ)(header_external_links,null)));};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx
/** @jsx jsx */const Footer=()=>{const{siteTitle}=(0,use_site_metadata/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)("footer",{sx:{boxSizing:`border-box`,display:`flex`,justifyContent:`space-between`,mt:[6],color:`secondary`,a:{variant:`links.secondary`},flexDirection:[`column`,`column`,`row`],variant:`dividers.top`}},(0,theme_ui_esm/* jsx */.tZ)("div",null,"\xA9 ",new Date().getFullYear()," by ",siteTitle,". All rights reserved."),(0,theme_ui_esm/* jsx */.tZ)("div",null,(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme"),` `,"by",` `,(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Link */.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")));};/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts
const code_code={".prism-code":{fontSize:[1,1,2],webkitOverflowScrolling:`touch`,backgroundColor:`transparent`,minWidth:`100%`,mb:0,mt:0,overflow:`auto`,'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']":{".code-content":{pt:`1rem`}},".code-content":{padding:`2rem 1rem 1rem 1rem`,color:`plain-color`,backgroundColor:`plain-backgroundColor`},".token":{display:`inline-block`},"p > code, li > code":{bg:`muted`,color:`heading`,px:2,py:1,borderRadius:`4px`,fontSize:`0.95em`},".gatsby-highlight":{fontSize:[1,1,2],position:`relative`,webkitOverflowScrolling:`touch`,borderRadius:`4px`,overflow:`hidden`,mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:`100%`},"pre code":{float:`left`,minWidth:`100%`},'pre[class*="language-"]:before':{bg:`white`,borderRadius:`0 0 4px 4px`,color:`black`,fontSize:`12px`,letterSpacing:`0.035rem`,padding:`0.1rem 0.5rem`,position:`absolute`,left:`1rem`,textAlign:`right`,textTransform:`uppercase`,fontFamily:`body`,fontWeight:600},'pre[class~="language-golang"]:before, pre[class~="language-go"]:before':{content:`"go"`,background:`#79d4fd`,color:`black`},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:`"js"`,background:`#f7df1e`,color:`black`},'pre[class~="language-jsx"]:before':{content:`"jsx"`,background:`#61dafb`,color:`black`},'pre[class~="language-ts"]:before':{content:`"ts"`,background:`#61dafb`,color:`black`},'pre[class~="language-tsx"]:before':{content:`"tsx"`,background:`#61dafb`,color:`black`},'pre[class~="language-html"]:before':{content:`"html"`,background:`#005a9c`,color:`white`},'pre[class~="language-xml"]:before':{content:`"xml"`,background:`#005a9c`,color:`white`},'pre[class~="language-svg"]:before':{content:`"svg"`,background:`#005a9c`,color:`white`},'pre[class~="language-graphql"]:before':{content:`"GraphQL"`,background:`#E10098`},'pre[class~="language-css"]:before':{content:`"css"`,background:`#ff9800`,color:`black`},'pre[class~="language-mdx"]:before':{content:`"mdx"`,background:`#f9ac00`,color:`black`},'pre[class~="language-php"]:before':{content:`"php"`,background:`#777bb3`,color:`black`},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:`"py"`,background:`#306998`,color:`white`},'pre[class~="language-text"]:before':{content:`"text"`},"pre[class~='language-shell']:before":{content:`'shell'`},"pre[class~='language-sh']:before":{content:`'sh'`},"pre[class~='language-bash']:before":{content:`'bash'`},"pre[class~='language-yaml']:before":{content:`'yaml'`,background:`#ffa8df`},"pre[class~='language-yml']:before":{content:`'yml'`,background:`#ffa8df`},"pre[class~='language-markdown']:before":{content:`'md'`},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:`'json'`,background:`linen`},"pre[class~='language-diff']:before":{content:`'diff'`,background:`#e6ffed`}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:`normal`,wordBreak:`normal`,overflowWrap:`normal`,lineHeight:1.5,tabSize:4,hyphens:`none`},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:`primary`},".gatsby-highlight pre::-webkit-scrollbar-track":{background:`muted`},".line-number-style":{display:`inline-block`,width:`3em`,userSelect:`none`,opacity:0.3,textAlign:`center`,position:`relative`},".code-title":{backgroundColor:`muted`,color:`text`,fontSize:1,px:3,py:2,fontFamily:`body`},".token-line":{pr:3},".highlight-line":{borderLeft:`4px solid rgb(2, 155, 206)`,".line-number-style":{width:`calc(3em - 4px)`,opacity:0.5,left:`-2px`}},".footnotes":{borderTopStyle:`solid`,borderTopWidth:`1px`,borderTopColor:`divide`,pt:2,mt:5,overflow:`auto`,".sr-only":utils/* visuallyHidden */.j}};/* harmony default export */ const styles_code = (code_code);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx
/** @jsx jsx */const skipNavStyles={border:0,clip:`react(0 0 0 0)`,height:`1px`,width:`1px`,margin:`-1px`,padding:0,overflow:`hidden`,position:`absolute`,"&:focus":{padding:3,position:`fixed`,top:`15px`,left:`15px`,backgroundColor:`heading`,color:`background`,zIndex:1,width:`auto`,height:`auto`,clip:`auto`,textDecoration:`none`}};const SkipNavLink=({children,...props})=>(0,theme_ui_esm/* jsx */.tZ)("a",Object.assign({},props,{sx:skipNavStyles,href:"#skip-nav","data-skip-link":"true"}),children);/* harmony default export */ const skip_nav = (SkipNavLink);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx
/** @jsx jsx */const Layout=({children,className=``})=>(0,theme_ui_esm/* jsx */.tZ)(lib/* MDXProvider */.Zo,{components:mdx_components},(0,theme_ui_esm/* jsx */.tZ)(emotion_react_esm/* Global */.xB,{styles:t=>({"*":{boxSizing:`inherit`},"[hidden]":{display:`none`},"::selection":{backgroundColor:(0,theme_ui_css_esm/* get */.U2)(t,`colors.text`),color:(0,theme_ui_css_esm/* get */.U2)(t,`colors.background`)}})}),(0,theme_ui_esm/* jsx */.tZ)(skip_nav,null,"Skip to content"),(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Container */.W2,null,(0,theme_ui_esm/* jsx */.tZ)(header,null),(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Box */.xu,{id:"skip-nav",as:"main",variant:"layout.main",sx:{...styles_code},className:className},children),(0,theme_ui_esm/* jsx */.tZ)(footer,null)));/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8733);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
/** @jsx jsx */const Title=({text,children,as=`h2`,className=``})=>(0,theme_ui__WEBPACK_IMPORTED_MODULE_0__/* .jsx */ .tZ)("div",{sx:{justifyContent:`space-between`,alignItems:`center`,borderBottomStyle:`solid`,borderBottomWidth:`1px`,borderBottomColor:`divide`,pb:3,mb:4,flexFlow:`wrap`,boxSizing:`border-box`,display:`flex`}},(0,theme_ui__WEBPACK_IMPORTED_MODULE_0__/* .jsx */ .tZ)(theme_ui__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu,{as:as,sx:{fontWeight:`medium`,fontSize:[3,4],fontFamily:`heading`,lineHeight:`heading`,color:`heading`},className:className},text),children?(0,theme_ui__WEBPACK_IMPORTED_MODULE_0__/* .jsx */ .tZ)("div",{sx:{color:`secondary`,a:{variant:`links.secondary`}}},children):null);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ 3494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7076);
const useMinimalBlogConfig=()=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("3090400250");return data.minimalBlogConfig;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMinimalBlogConfig);

/***/ }),

/***/ 4232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7076);
const useSiteMetadata=()=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("2421966660");return data.site.siteMetadata;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ 8170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ visuallyHidden)
/* harmony export */ });
const visuallyHidden={// include `px` so we can use it with `sx`
border:0,clip:`rect(0, 0, 0, 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:0,position:`absolute`,whiteSpace:`nowrap`,width:`1px`};

/***/ }),

/***/ 3784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replace double slashes // with one slash /
 * @description This prevents double slashes as users might add e.g. the basePath as "/blog" or "blog"
 * @param input
 * @return {string} - Sanitized string
 */function replaceSlashes(input){return input.replace(/\/\/+/g,`/`);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSlashes);

/***/ }),

/***/ 5683:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = kebabCase;


/***/ }),

/***/ 4443:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G3: () => (/* binding */ d),
/* harmony export */   GL: () => (/* reexport default export from named module */ lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   om: () => (/* binding */ m),
/* harmony export */   uX: () => (/* binding */ h)
/* harmony export */ });
/* unused harmony exports mdxResolverPassthrough, slugify */
/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5683);
var d=(e="")=>e.split("language-").pop(),h=e=>{if(e?.children?.props){let{children:a,className:s="",...t}=e.children.props,n=s.match(/language-([\0-\uFFFF]*)/);return{codeString:a.trim(),className:s,language:n!==null?n[1]:"",...t}}},m=e=>{if(!e)return()=>!1;let a=e.split(",").map(s=>s.split("-").map(t=>parseInt(t,10)));return s=>{let t=s+1;return a.some(([n,r])=>r?t>=n&&t<=r:t===n)}},y=e=>async(a,s,t,n)=>{let r=n.schema.getType("Mdx"),g=t.nodeModel.getNodeById({id:a.parent}),l=r.getFields()[e].resolve;return await l(g,s,t,n)},L=(e,a)=>{let s=e.slug?e.slug:i(e.title);return`/${a}/${s}`.replace(/\/\/+/g,"/")};


/***/ })

};
;
//# sourceMappingURL=377.js.map