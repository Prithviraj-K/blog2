"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 8560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* reexport */ Head),
  "default": () => (/* binding */ tags_query)
});

// EXTERNAL MODULE: external "/Users/rajkhandekar/Documents/blog/blog2/node_modules/react/index.js"
var index_js_ = __webpack_require__(7184);
// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(8733);
// EXTERNAL MODULE: ./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js
var theme_ui_components_esm = __webpack_require__(795);
// EXTERNAL MODULE: ./node_modules/@lekoarts/themes-utils/dist/index.js
var dist = __webpack_require__(4443);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx + 12 modules
var layout = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx
var use_minimal_blog_config = __webpack_require__(3494);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx
var seo = __webpack_require__(8871);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts
var replaceSlashes = __webpack_require__(3784);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/tags.tsx
/** @jsx jsx */// @ts-ignore
const Tags=({list})=>{const{tagsPath,basePath}=(0,use_minimal_blog_config/* default */.Z)();return (0,theme_ui_esm/* jsx */.tZ)(layout/* default */.Z,null,(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Heading */.X6,{as:"h1",variant:"styles.h1"},"Tags"),(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Box */.xu,{mt:[4,5]},list.map(listItem=>(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Flex */.kC,{key:listItem.fieldValue,mb:[1,1,2],sx:{alignItems:`center`}},(0,theme_ui_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{sx:t=>{var _t$styles;return{...((_t$styles=t.styles)===null||_t$styles===void 0?void 0:_t$styles.a),variant:`links.listItem`,mr:2};},to:(0,replaceSlashes/* default */.Z)(`/${basePath}/${tagsPath}/${(0,dist/* kebabCase */.GL)(listItem.fieldValue)}`)},listItem.fieldValue," ",(0,theme_ui_esm/* jsx */.tZ)("span",{sx:{color:`secondary`}},"(",listItem.totalCount,")"))))));};/* harmony default export */ const tags = (Tags);const Head=()=>(0,theme_ui_esm/* jsx */.tZ)(seo/* default */.Z,{title:"Tags"});
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/tags.tsx
function MinimalBlogCoreTags({...props}){const{data:{allPost}}=props;return/*#__PURE__*/index_js_.createElement(tags,Object.assign({list:allPost.group},props));}
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/tags-query.tsx

/* harmony default export */ const tags_query = (MinimalBlogCoreTags);

const query = "867389200";

/***/ }),

/***/ 8871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7184);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4232);
const Seo=({title=``,description=``,pathname=``,image=``,children=null,canonicalUrl=``})=>{const site=(0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();const{siteTitle,siteTitleAlt:defaultTitle,siteUrl,siteDescription:defaultDescription,siteImage:defaultImage,author,siteLanguage}=site;const seo={title:title?`${title} | ${siteTitle}`:defaultTitle,description:description||defaultDescription,url:`${siteUrl}${pathname||``}`,image:`${siteUrl}${image||defaultImage}`};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html",{lang:siteLanguage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,seo.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"image",content:seo.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:seo.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:url",content:seo.url}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:image",content:seo.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:image:alt",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:seo.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:url",content:seo.url}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:image",content:seo.image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:image:alt",content:seo.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:author}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-32x32.png`)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-16x16.png`)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/apple-touch-icon.png`)}),canonicalUrl?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"canonical",href:canonicalUrl}):null,children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tags-query-tsx.js.map