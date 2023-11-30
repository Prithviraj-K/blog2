exports.id = "component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-forest-index-mdx";
exports.ids = ["component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-forest-index-mdx"];
exports.modules = {

/***/ "./content/posts/forest/index.mdx":
/*!****************************************!*\
  !*** ./content/posts/forest/index.mdx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/


function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    pre: "pre",
    code: "code",
    p: "p",
    h3: "h3",
    ul: "ul",
    li: "li",
    h4: "h4",
    strong: "strong",
    h5: "h5",
    em: "em",
    span: "span"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h1, null, "Recon"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "Nmap"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "nmap -v -A -oA nmap/forest 10.10.10.161\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "Ping"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "ping 10.10.10.161\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Ping tool suggests the box is windows as it has a ttl of 127."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "Standard TTLs"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "Linux default ttl is 64"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "Windows default ttl is 128 (-1 for router)"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "Routers or network devices are 255 (usually above 128)"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "DNS"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "nslookup \n> server 10.10.10.161\n> 127.0.0.1\n> 127.0.0.2\n> 10.10.10.161\n\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Maybe some DNS recursion or some issue which is stopping us from getting hostname"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "Ports/Services"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h4, null, "445"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Usually used for Microsoft Directory Services for Active Directory and for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "Server Message Block (SMB)"), " protocol over TCP/IP"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h5, null, "smb"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Host script results shows that it is running smb"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Let's try smbclient first using -L flag"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "-L"), " This option allows you to look at what services are available on a server. You use it as smbclient -L host and a list should appear. The -I option may be useful if your NetBIOS names don't match your TCP/IP DNS host names or if you are trying to reach a host on another network."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "smbclient -L 10.10.10.161\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Looks like nothing is available"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h4, null, "LDAP - getting users and password spraying"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "LDAP seems like another service with a decent attack surface"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "We can get the DN (domain name) from using ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "ldapsearch"), " (namingContexts)"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "the machine [[Ypuffy]] explains this better"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "ldapsearch -x -s base -H ldap://10.10.10.161\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "-x"), ": Use simple authentication instead of SASL."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "-s"), ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "base"), "|one|sub|children"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Specify the scope of the search to be one of:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "base"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "one"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "sub"), ", or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "children"), " to specify a base object, one-level, subtree, or children search."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "The default is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "sub"), "."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Note: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.em, null, "children"), " scope requires LDAPv3 subordinate feature extension"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "From the command, we now know the base domain name to be ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "DC=htb,DC=local")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "-b"), " basedn, basedn for search"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "DC"), " = domain component"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.span, {
    dangerouslySetInnerHTML: {
      __html: "<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 892px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 50.83333333333333%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABDklEQVR42p2S2W6DQAxF+Qv2sAUISGEnLBL//1mujqWhtEqltg9XY8+g42tsK8syCYJAPM9T+b6v+p7/VlZVVVIUhSZhGCocERuZgq7rqkz8rqBV17Xs+y6v10umaZLn8ylN08g8z5r3fS/DMEiappIkicRxrCcCcC2iwMfjIdu2ybquMo6jAtu2lWVZtAhgxBsncGKK0d39fpc8zyWKIoWeQAB8hDuA3CGgyAANHOEeKF3iXIFcHMdxtg2s67rTNeKNYryTE2MAM7Zti+M4ny3z07FLBU4j7m+325c3kxuRmyGeQ6F//gvOyrJU+2aq1/V5px/XhpYYBjBWiN386/6dQNoByhrg8LqX/wF+AMCcG8/bTGyKAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"ldap1\"\n        title=\"\"\n        src=\"/static/8cdc177d6103c748bb4c2dd74be452fe/aff63/ldap1.png\"\n        srcset=\"/static/8cdc177d6103c748bb4c2dd74be452fe/5243c/ldap1.png 240w,\n/static/8cdc177d6103c748bb4c2dd74be452fe/ab158/ldap1.png 480w,\n/static/8cdc177d6103c748bb4c2dd74be452fe/aff63/ldap1.png 892w\"\n        sizes=\"(max-width: 892px) 100vw, 892px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"
    }
  }), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "ldapsearch -H ldap://10.10.10.161 -x -b \"DC=htb,DC=local\" > ldap-anonymous.out\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "This includes all the LDAP information that we can query"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "we can get the groups by grep for memberof"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "cat ldap-anonymous.out | grep -i memberof\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.span, {
    dangerouslySetInnerHTML: {
      __html: "<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 63.33333333333333%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfklEQVR42mWSaa6CUAyF2YUIGg3gFBUVnAcMYf9rqvn6cvCa96Npe297ejpEdV3barWy3W5nZVn2er1e23a7dY1fFIWNx2ObTqc2mUxcRqORDYdDS9O0l6jrOtvv9/Z4POz5fNr7/Xb7er3a/X53jX86nexyubiPfT6f7XA4OBnAkyT5A+QDFnzC7ng8egFYVVXl79hiQ6I0ALz/MGzb1hNut5szQmACC9hQEKEYQjFGQY5GlGXZlyFABIRtiG2o+YMxQhfqhB3QYQ/4er16QGZFIEEkwhRfWgCAo/HJI1/LiVgE1AmiRbEgARBsErHVQcgSP8/zL0NmttlsPIgEKhKIRgRAARUUGP/khqfjSyFJC2AEWgTs1e5sNrPlcmnz+byXxWLh9/mzZRJ12Ihmw1zCrXLQg8HA4jh2LcFXu/1hw5CFNE3jZ8PmKYQWc94pAHh4NowAQv8OG2bMhCAKKFFMNUstKDz6sO0IZgxW56Ht6kTCrQOgd9kUY74C/ABHzY3efU1dTgAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"ldap2\"\n        title=\"\"\n        src=\"/static/75ffa70c17827a0fc1ec981731b41313/7d769/ldap2.png\"\n        srcset=\"/static/75ffa70c17827a0fc1ec981731b41313/5243c/ldap2.png 240w,\n/static/75ffa70c17827a0fc1ec981731b41313/ab158/ldap2.png 480w,\n/static/75ffa70c17827a0fc1ec981731b41313/7d769/ldap2.png 960w,\n/static/75ffa70c17827a0fc1ec981731b41313/ccea8/ldap2.png 1218w\"\n        sizes=\"(max-width: 960px) 100vw, 960px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"
    }
  }), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "The followind command will dump only the things that have the objectClass as Person"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "ldasearch -H ldap://10.10.10.161 -x -b \"DC=htb,DC=local\" '(objectClass=Person)'\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "From this we notice that the account name is sAMAccountName so we can apply a filter to ldapsearch\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "ldapsearch -H ldap://10.10.10.161 -x -b \"DC=htb,DC=local\" '(objectClass=Person)' sAMAccountName | grep sAMAccountName > ldap-account-name.out")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "cat ldap-account-name.out")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.span, {
    dangerouslySetInnerHTML: {
      __html: "<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 384px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 51.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABe0lEQVR42mWSV4oDQQxE9xS2cc454pxzThh8/6vU8grGa9iPZqbV6tJTqX9isZiKxaIGg4E6nY7y+bxKpZJXo9FwrFqtemUyGaXTadXrde/L5bIqlYq/5KP1E4/HtV6v9X6/9Xg8NJlMvD8ej1qtVno+n3q9Xjqfz77YbDYdu1wuOp1OBjkcDr5jwYCw1+up1WqZkH2hUDAJhAFFMplUNpv1GYs8uoA6FAr9ES4WC1Ncr1eNRiMtl0vt93vHiUEEMcKIbDabTx73ut2uwuGw0DIhidPp1JRcCDxpt9tuCYparaZUKuUOaJtuEomEyaLRqOk+hLPZzCRQDIdDzedz7XY7F8Gf2+1mYgpRhH/8o23E0PgIBoSI9vt95XI5Uwb+EAumjIfBGYRM/ZvOgmBDxNSgYcp4AyEeQn2/301F4fF4rO126zNsiUQi/wnxBxGSqQ4NMdojxjcgYvEPPXkA/fOQavgEDYS8v2DKvD/eJ/QQMhD8pivsYFDfgr/vnTe2bALTxAAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"ldap2\"\n        title=\"\"\n        src=\"/static/9392533a061f5a3155b44fa06fbb5235/643d6/ldap3.png\"\n        srcset=\"/static/9392533a061f5a3155b44fa06fbb5235/5243c/ldap3.png 240w,\n/static/9392533a061f5a3155b44fa06fbb5235/643d6/ldap3.png 384w\"\n        sizes=\"(max-width: 384px) 100vw, 384px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"
    }
  }), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "As we can see there are users called sebastien, lucinda, andy, mark and santi. There are also other accounts:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "Guest"), " cannot be bruteforced"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "anything with $ at the end, like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "FOREST$"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "EXCH01$"), " is generated by AD as a machine account and the password cannot be cracked"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "then the rest are generated by exchange and won't be cracked"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "left with the last 5 entries"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h5, null, "Format"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "We only need these account names so lets awk $2 and delete everything before sebastien manually."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "cat ldap-account-name.out | awk '{print $2}' > accounts.out\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.span, {
    dangerouslySetInnerHTML: {
      __html: "<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 206px; \"\n    >\n      <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 90.29126213592234%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB5klEQVR42p1Ux6pqQRD0D8w55xxQUFTMCCLGhRhwoWDYqCj+P3WphiP6DNf7Fn0m9JmamuqaUdntdijhcrmkDYfDCAaDt3n2ORcIBOB0OuU/t9sNm82G+/UMFT9WqxV+vx+z2QybzQbH4xGn0wmr1Qrb7RbT6RT9fh+dTkfmmB+NRk9gN0DuxJ2LxSJqtRrK5TLa7bb06/U6crkcksmk5KvVKkqlElKplKz5l6XqfqDX66HT6aTVaDTS12q1MlZyBoMBJpMJFovlPUOGw+EQRqFQSPSKxWLIZrOIx+PChrlIJCLa8V/GW0AmuWOr1cJyuRSdBoMBxuOx6Lfb7XA+n3G9XpHJZIThR0BFR1YxnU4LO7KhbqwwI5FISO5ddV9qaDQabxoqmprNZnEBW8YnsIcqezweDIdDOWKv1xP7NBoNRKNRkeOTbi996PP5sFgsMJlMxHPsr9drmWf+N6CXGvLItAVbCk/WfwF70lAxKkGUYvym2ROgYhkuvlwuEjwur+HhcBBfcoNv9HsoCu3Aq0X/0cQ0d6FQkI3+W0NaRq1Wy7Wjlhz/hd0DQz5JZJTP5+XyVyoVNJtNmaPR6cGvbUNA2mM+n2O/34t29GO32xULUQIy/hrw/oH1er23h5YA1FYZf3PkH16ABNBrceqFAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"\n  ></span>\n  <img\n        class=\"gatsby-resp-image-image\"\n        alt=\"format\"\n        title=\"\"\n        src=\"/static/96ae66830984169e26a2568a31bb9fb3/8904d/format.png\"\n        srcset=\"/static/96ae66830984169e26a2568a31bb9fb3/8904d/format.png 206w\"\n        sizes=\"(max-width: 206px) 100vw, 206px\"\n        style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n        loading=\"lazy\"\n        decoding=\"async\"\n      />\n    </span>"
    }
  }), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h1, null, "Tools"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "CRACKMAPEXEC"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Using crackmapexec we can dump the password policy of Active Directory using a null authentication, then doing a password spray since we now have a better idea of what the password looks like"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Null authentication request with null username and password"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "crackmapexec smb 10.10.10.161 --pass-pol -u '' -p ''\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, "Using the option ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "--pass-pol"), " you can get the password policy of the domain"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h2, null, "Enum4Linux (also gives password policy)"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "We'll run enum4linux which is a tool for enumerating information from Windows and Samba systems. It’s a wrapper around the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "Samba tools smbclient, rpclient, net and nmblookup"), ". With special configuration, you can even have it query ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "LDAP")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "Check for null and Guest access on smb services"), " (this won't work on modern Windows versions), it only works on Windows systems that have been upgraded from older versions as this was required in older versions"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "enum4linux -a -u \"\" -p \"\" 10.10.10.161 && enum4linux -a -u \"guest\" -p \"\" 10.10.10.161\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Using this tool  a user that we did not have before from ldapsearch can be seen called ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.code, null, "svc-alfresco"), "\nAdd this user to the userlist we made before password spraying"));
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_createMdxContent, props)) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* reexport safe */ _components_post__WEBPACK_IMPORTED_MODULE_1__.Head),
/* harmony export */   "default": () => (/* binding */ MinimalBlogCorePost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx");


function MinimalBlogCorePost({
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_post__WEBPACK_IMPORTED_MODULE_1__["default"], props);
}


/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.mjs");
/* harmony import */ var _lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lekoarts/themes-utils */ "./node_modules/@lekoarts/themes-utils/dist/index.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_prism_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/prism-themes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-themes.ts");







const Code = ({
  codeString,
  withLineNumbers = false,
  title = ``,
  className: blockClassName,
  highlight = ``
}) => {
  const {
    showLineNumbers,
    showCopyButton
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [colorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.useColorMode)();
  const isDark = colorMode === `dark`;
  const language = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_2__.getLanguage)(blockClassName);
  const shouldHighlightLine = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_2__.calculateLinesToHighlight)(highlight);
  const shouldShowLineNumbers = withLineNumbers || showLineNumbers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_1__.Highlight, {
    code: codeString
    // @ts-ignore
    ,

    language: language,
    theme: isDark ? _utils_prism_themes__WEBPACK_IMPORTED_MODULE_5__.darkTheme : _utils_prism_themes__WEBPACK_IMPORTED_MODULE_5__.lightTheme
  }, ({
    className,
    tokens,
    getLineProps,
    getTokenProps
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "gatsby-highlight",
    "data-language": language
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "code-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    className: className,
    "data-linenumber": shouldShowLineNumbers
  }, showCopyButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_copy__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: codeString,
    fileName: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    className: `code-content language-${language}`
  }, tokens.map((line, i) => {
    const lineProps = getLineProps({
      line,
      key: i
    });
    if (shouldHighlightLine(i)) {
      lineProps.className = `${lineProps.className} highlight-line`;
      lineProps.style = {
        ...lineProps.style,
        backgroundColor: `var(--theme-ui-colors-highlightLineBg)`
      };
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", lineProps, shouldShowLineNumbers && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "line-number-style"
    }, i + 1), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", getTokenProps({
      token,
      key
    }))));
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/** @jsx jsx */



// CSS Styles adapted from: https://codepen.io/aaroniker/pen/KGpXZo

const iconBaseStyles = {
  position: `relative`,
  width: `24px`,
  height: `24px`,
  borderRadius: `50%`,
  transition: `all 0.45s ease`,
  "&:before": {
    content: `""`,
    position: `absolute`,
    right: `-9px`,
    top: `-9px`,
    height: `24px`,
    width: `24px`,
    transition: `transform 0.45s ease`,
    borderRadius: `50%`
  },
  "&:after": {
    content: `""`,
    width: `8px`,
    height: `8px`,
    borderRadius: `50%`,
    margin: `-4px 0 0 -4px`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transition: `all 0.35s ease`,
    boxShadow: t => `0 -23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 0 23px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -23px 0 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px 15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, 15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}, -15px -15px 0 ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`
  }
};
const buttonBaseStyles = {
  opacity: 0.65,
  position: `relative`,
  borderRadius: `4px`,
  width: `40px`,
  height: `25px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  transition: `opacity 0.3s ease`,
  border: `none`,
  outline: `none`,
  background: `none`,
  cursor: `pointer`,
  padding: 0,
  appearance: `none`,
  "&:hover, &:focus": {
    opacity: 1
  }
};
const FallbackIcon = () => (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
  type: "button",
  sx: buttonBaseStyles
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  sx: {
    ...iconBaseStyles,
    transform: `scale(0.55)`,
    "&:before": {
      ...iconBaseStyles[`&:before`],
      opacity: 0
    },
    "&:after": {
      ...iconBaseStyles[`&:after`],
      transform: `scale(0)`
    }
  }
}));
const TogglePrimitive = ({
  children,
  fallback = undefined
}) => {
  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    if (!fallback) {
      return null;
    }
    return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, fallback);
  }
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
};
const ColorModeToggle = () => {
  const [colorMode, setColorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.useColorMode)();
  const isDark = colorMode === `dark`;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(TogglePrimitive, {
    fallback: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(FallbackIcon, null)
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    onClick: () => {
      const next = isDark ? `light` : `dark`;
      setColorMode(next);
      document.documentElement.classList.value = `theme-ui-${next}`;
    },
    type: "button",
    "aria-label": isDark ? `Activate Light Mode` : `Activate Dark Mode`,
    title: isDark ? `Activate Light Mode` : `Activate Dark Mode`,
    sx: buttonBaseStyles
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    sx: {
      ...iconBaseStyles,
      border: t => isDark ? `4px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
      backgroundColor: isDark ? `toggleIcon` : `transparent`,
      transform: isDark ? `scale(0.55)` : `scale(1)`,
      overflow: isDark ? `visible` : `hidden`,
      boxShadow: t => isDark ? `none` : `inset 8px -8px 0px 0px ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}`,
      "&:before": {
        ...iconBaseStyles[`&:before`],
        border: t => isDark ? `2px solid ${(0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.get)(t, `colors.toggleIcon`)}` : `none`,
        transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
        opacity: isDark ? 0 : 1
      },
      "&:after": {
        ...iconBaseStyles[`&:after`],
        transform: isDark ? `scale(1)` : `scale(0)`
      }
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorModeToggle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/copy.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/copy-to-clipboard */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts");
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts");
/** @jsx jsx */




const delay = duration => new Promise(resolve => {
  setTimeout(resolve, duration);
});
const Copy = ({
  content,
  duration = 5000,
  fileName = ``,
  trim = false
}) => {
  const {
    0: copied,
    1: setCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const label = copied ? `${fileName ? `${fileName} ` : ``}copied to clipboard` : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    type: "button",
    name: label,
    disabled: copied,
    className: "code-copy-button",
    sx: {
      variant: `copyButton`
    },
    onClick: async () => {
      await (0,_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["default"])(trim ? content.trim() : content);
      setCopied(true);
      await delay(duration);
      setCopied(false);
    }
  }, copied ? `Copied` : `Copy`, (0,theme_ui__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    sx: _styles_utils__WEBPACK_IMPORTED_MODULE_2__.visuallyHidden,
    "aria-roledescription": "status"
  }, label));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copy);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/** @jsx jsx */


const Footer = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, "\xA9 ", new Date().getFullYear(), " by ", siteTitle, ". All rights reserved."), (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme's GitHub repository",
    href: "https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
  }, "Theme"), ` `, "by", ` `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    "aria-label": "Link to the theme author's website",
    href: "https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
  }, "LekoArts")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */



const HeaderExternalLinks = () => {
  const {
    externalLinks
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, externalLinks && externalLinks.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    sx: {
      "a:not(:first-of-type)": {
        ml: 3
      },
      fontSize: [1, `18px`]
    }
  }, externalLinks.map(link => (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
    key: link.url,
    href: link.url
  }, link.name))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderExternalLinks);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/** @jsx jsx */





const HeaderTitle = () => {
  const {
    siteTitle
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_1__["default"])(`/${basePath}`),
    "aria-label": `${siteTitle} - Back to home`,
    sx: {
      color: `heading`,
      textDecoration: `none`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    sx: {
      my: 0,
      fontWeight: `semibold`,
      fontSize: [3, 4]
    }
  }, siteTitle));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTitle);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _colormode_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colormode-toggle */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx");
/* harmony import */ var _header_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-title */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-title.tsx");
/* harmony import */ var _header_external_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-external-links */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links.tsx");
/** @jsx jsx */






const Header = () => {
  const {
    navigation: nav
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("header", {
    sx: {
      mb: [5, 6]
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_6__.Flex, {
    sx: {
      alignItems: `center`,
      justifyContent: `space-between`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header_title__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_colormode_toggle__WEBPACK_IMPORTED_MODULE_1__["default"], null)), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    sx: {
      boxSizing: `border-box`,
      display: `flex`,
      variant: `dividers.bottom`,
      alignItems: `center`,
      justifyContent: `space-between`,
      mt: 3,
      color: `secondary`,
      a: {
        color: `secondary`,
        ":hover": {
          color: `heading`
        }
      },
      flexFlow: `wrap`
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    nav: nav
  }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header_external_links__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/** @jsx jsx */





const ItemTags = ({
  tags
}) => {
  const {
    tagsPath,
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tags.map((tag, i) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: tag.slug
  }, !!i && `, `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    sx: t => {
      var _t$styles;
      return {
        ...((_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a)
      };
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${basePath}/${tagsPath}/${tag.slug}`)
  }, tag.name))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemTags);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _mdx_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mdx-components */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx");
/* harmony import */ var _styles_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/code */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts");
/* harmony import */ var _skip_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skip-nav */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx");
/** @jsx jsx */









const Layout = ({
  children,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.MDXProvider, {
  components: _mdx_components__WEBPACK_IMPORTED_MODULE_0__["default"]
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
  styles: t => ({
    "*": {
      boxSizing: `inherit`
    },
    "[hidden]": {
      display: `none`
    },
    "::selection": {
      backgroundColor: (0,theme_ui__WEBPACK_IMPORTED_MODULE_8__.get)(t, `colors.text`),
      color: (0,theme_ui__WEBPACK_IMPORTED_MODULE_8__.get)(t, `colors.background`)
    }
  })
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skip_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Skip to content"), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_9__.Container, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_9__.Box, {
  id: "skip-nav",
  as: "main",
  variant: "layout.main",
  sx: {
    ..._styles_code__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  className: className
}, children), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx":
/*!********************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/mdx-components.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lekoarts/themes-utils */ "./node_modules/@lekoarts/themes-utils/dist/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/code.tsx");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx");





const MdxComponents = {
  Text: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(theme_ui__WEBPACK_IMPORTED_MODULE_4__.Text, props),
  Title: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title__WEBPACK_IMPORTED_MODULE_3__["default"], props),
  pre: preProps => {
    const props = (0,_lekoarts_themes_utils__WEBPACK_IMPORTED_MODULE_1__.preToCodeBlock)(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_code__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    }
    // it's possible to have a pre without a code in it
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", preProps);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdxComponents);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/navigation.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-minimal-blog-config */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx");
/* harmony import */ var _utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/replaceSlashes */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts");
/** @jsx jsx */





const Navigation = ({
  nav
}) => {
  const {
    basePath
  } = (0,_hooks_use_minimal_blog_config__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, nav && nav.length > 0 && (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav", {
    sx: {
      "a:not(:last-of-type)": {
        mr: 3
      },
      fontSize: [1, `18px`],
      ".active": {
        color: `heading`
      }
    }
  }, nav.map(item => (0,theme_ui__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    activeClassName: "active",
    key: item.slug,
    sx: t => {
      var _t$styles;
      return {
        ...((_t$styles = t.styles) === null || _t$styles === void 0 ? void 0 : _t$styles.a)
      };
    },
    to: (0,_utils_replaceSlashes__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${basePath}/${item.slug}`)
  }, item.title))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unused-vars */

const PostFooter = ({
  post
}) => null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostFooter);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout.tsx");
/* harmony import */ var _item_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-tags */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags.tsx");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seo */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx");
/* harmony import */ var _post_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-footer */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer.tsx");
/** @jsx jsx */







const px = [`16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.1) 0px ${v} ${v} 0px`);
const Post = ({
  data: {
    post
  },
  children
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_6__.Heading, {
  as: "h1",
  variant: "styles.h1"
}, post.title), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
  sx: {
    color: `secondary`,
    mt: 3,
    a: {
      color: `secondary`
    },
    fontSize: [1, 1, 2]
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("time", null, post.date), post.tags && (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ` — `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_item_tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
  tags: post.tags
})), post.timeToRead && ` — `, post.timeToRead && (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", null, post.timeToRead, " min read")), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
  sx: {
    my: 5,
    ".gatsby-resp-image-wrapper": {
      my: [4, 4, 5],
      borderRadius: `4px`,
      boxShadow: shadow.join(`, `),
      ".gatsby-resp-image-image": {
        borderRadius: `4px`
      }
    },
    variant: `layout.content`
  }
}, children), (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_post_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  post: post
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
const Head = ({
  data: {
    post
  }
}) => {
  var _post$banner, _post$banner$childIma, _post$banner$childIma2;
  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: post.title,
    description: post.description ? post.description : post.excerpt,
    image: post.banner ? (_post$banner = post.banner) === null || _post$banner === void 0 ? void 0 : (_post$banner$childIma = _post$banner.childImageSharp) === null || _post$banner$childIma === void 0 ? void 0 : (_post$banner$childIma2 = _post$banner$childIma.resize) === null || _post$banner$childIma2 === void 0 ? void 0 : _post$banner$childIma2.src : undefined,
    pathname: post.slug,
    canonicalUrl: post.canonicalUrl
  });
};

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx");



const Seo = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``
}) => {
  const site = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
    author,
    siteLanguage
  } = site;
  const seo = {
    title: title ? `${title} | ${siteTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", {
    lang: siteLanguage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, seo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:creator",
    content: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "gatsby-theme",
    content: "@lekoarts/gatsby-theme-minimal-blog"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-32x32.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/favicon-16x16.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(`/apple-touch-icon.png`)
  }), canonicalUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "canonical",
    href: canonicalUrl
  }) : null, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/** @jsx jsx */

const skipNavStyles = {
  border: 0,
  clip: `react(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
  "&:focus": {
    padding: 3,
    position: `fixed`,
    top: `15px`,
    left: `15px`,
    backgroundColor: `heading`,
    color: `background`,
    zIndex: 1,
    width: `auto`,
    height: `auto`,
    clip: `auto`,
    textDecoration: `none`
  }
};
const SkipNavLink = ({
  children,
  ...props
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", Object.assign({}, props, {
  sx: skipNavStyles,
  href: "#skip-nav",
  "data-skip-link": "true"
}), children);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipNavLink);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/** @jsx jsx */


const Title = ({
  text,
  children,
  as = `h2`,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    justifyContent: `space-between`,
    alignItems: `center`,
    borderBottomStyle: `solid`,
    borderBottomWidth: `1px`,
    borderBottomColor: `divide`,
    pb: 3,
    mb: 4,
    flexFlow: `wrap`,
    boxSizing: `border-box`,
    display: `flex`
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
  as: as,
  sx: {
    fontWeight: `medium`,
    fontSize: [3, 4],
    fontFamily: `heading`,
    lineHeight: `heading`,
    color: `heading`
  },
  className: className
}, text), children ? (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    color: `secondary`,
    a: {
      variant: `links.secondary`
    }
  }
}, children) : null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3090400250_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/3090400250.json */ "./public/page-data/sq/d/3090400250.json");

const useMinimalBlogConfig = () => {
  const data = _public_page_data_sq_d_3090400250_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.minimalBlogConfig;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMinimalBlogConfig);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2421966660_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/2421966660.json */ "./public/page-data/sq/d/2421966660.json");

const useSiteMetadata = () => {
  const data = _public_page_data_sq_d_2421966660_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.site.siteMetadata;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/code.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts");

const code = {
  ".prism-code": {
    fontSize: [1, 1, 2],
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3
      }
    }
  },
  ".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']": {
    ".code-content": {
      pt: `1rem`
    }
  },
  ".code-content": {
    padding: `2rem 1rem 1rem 1rem`,
    color: `plain-color`,
    backgroundColor: `plain-backgroundColor`
  },
  ".token": {
    display: `inline-block`
  },
  "p > code, li > code": {
    bg: `muted`,
    color: `heading`,
    px: 2,
    py: 1,
    borderRadius: `4px`,
    fontSize: `0.95em`
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    borderRadius: `4px`,
    overflow: `hidden`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 4px 4px`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.035rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      fontFamily: `body`,
      fontWeight: 600
    },
    'pre[class~="language-golang"]:before, pre[class~="language-go"]:before': {
      content: `"go"`,
      background: `#79d4fd`,
      color: `black`
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-svg"]:before': {
      content: `"svg"`,
      background: `#005a9c`,
      color: `white`
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`
    },
    'pre[class~="language-php"]:before': {
      content: `"php"`,
      background: `#777bb3`,
      color: `black`
    },
    'pre[class~="language-py"]:before, pre[class~="language-python"]:before': {
      content: `"py"`,
      background: `#306998`,
      color: `white`
    },
    'pre[class~="language-text"]:before': {
      content: `"text"`
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`
    },
    "pre[class~='language-sh']:before": {
      content: `'sh'`
    },
    "pre[class~='language-bash']:before": {
      content: `'bash'`
    },
    "pre[class~='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-yml']:before": {
      content: `'yml'`,
      background: `#ffa8df`
    },
    "pre[class~='language-markdown']:before": {
      content: `'md'`
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      content: `'json'`,
      background: `linen`
    },
    "pre[class~='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`
    }
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`
  },
  ".gatsby-highlight pre::-webkit-scrollbar": {
    width: 2,
    height: 2
  },
  ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
    backgroundColor: `primary`
  },
  ".gatsby-highlight pre::-webkit-scrollbar-track": {
    background: `muted`
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`
  },
  ".code-title": {
    backgroundColor: `muted`,
    color: `text`,
    fontSize: 1,
    px: 3,
    py: 2,
    fontFamily: `body`
  },
  ".token-line": {
    pr: 3
  },
  ".highlight-line": {
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`
    }
  },
  ".footnotes": {
    borderTopStyle: `solid`,
    borderTopWidth: `1px`,
    borderTopColor: `divide`,
    pt: 2,
    mt: 5,
    overflow: `auto`,
    ".sr-only": _utils__WEBPACK_IMPORTED_MODULE_0__.visuallyHidden
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/styles/utils.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visuallyHidden: () => (/* binding */ visuallyHidden)
/* harmony export */ });
const visuallyHidden = {
  // include `px` so we can use it with `sx`
  border: 0,
  clip: `rect(0, 0, 0, 0)`,
  height: `1px`,
  margin: `-1px`,
  overflow: `hidden`,
  padding: 0,
  position: `absolute`,
  whiteSpace: `nowrap`,
  width: `1px`
};

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/copy-to-clipboard.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const copyToClipboard = str => {
  const {
    clipboard
  } = window.navigator;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API is not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, `true`);
    textarea.setAttribute(`contenteditable`, `true`);
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.appendChild(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel === null || sel === void 0 ? void 0 : sel.removeAllRanges();
    sel === null || sel === void 0 ? void 0 : sel.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    document.body.removeChild(textarea);
    return Promise.resolve(true);
  }
  return clipboard.writeText(str);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyToClipboard);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replace double slashes // with one slash /
 * @description This prevents double slashes as users might add e.g. the basePath as "/blog" or "blog"
 * @param input
 * @return {string} - Sanitized string
 */
function replaceSlashes(input) {
  return input.replace(/\/\/+/g, `/`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSlashes);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx?__contentFilePath=/Users/rajkhandekar/Documents/blog/blog2/content/posts/forest/index.mdx&export=default":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-minimal-blog-core/src/templates/post-query.tsx?__contentFilePath=/Users/rajkhandekar/Documents/blog/blog2/content/posts/forest/index.mdx&export=default ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* reexport safe */ _components_post__WEBPACK_IMPORTED_MODULE_2__.Head),
/* harmony export */   "default": () => (/* binding */ GatsbyMDXWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_rajkhandekar_Documents_blog_blog2_content_posts_forest_index_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/posts/forest/index.mdx */ "./content/posts/forest/index.mdx");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/@lekoarts/gatsby-theme-minimal-blog-core/components/post.tsx");



_components_post__WEBPACK_IMPORTED_MODULE_2__["default"];
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_post__WEBPACK_IMPORTED_MODULE_2__["default"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Users_rajkhandekar_Documents_blog_blog2_content_posts_forest_index_mdx__WEBPACK_IMPORTED_MODULE_1__["default"], props));
}

const query = "2040642971";

/***/ }),

/***/ "./node_modules/lodash.kebabcase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.kebabcase/index.js ***!
  \************************************************/
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

/***/ "./node_modules/@lekoarts/themes-utils/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@lekoarts/themes-utils/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateLinesToHighlight: () => (/* binding */ m),
/* harmony export */   getLanguage: () => (/* binding */ d),
/* harmony export */   kebabCase: () => (/* reexport default export from named module */ lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   mdxResolverPassthrough: () => (/* binding */ y),
/* harmony export */   preToCodeBlock: () => (/* binding */ h),
/* harmony export */   slugify: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.kebabcase */ "./node_modules/lodash.kebabcase/index.js");
var d=(e="")=>e.split("language-").pop(),h=e=>{if(e?.children?.props){let{children:a,className:s="",...t}=e.children.props,n=s.match(/language-([\0-\uFFFF]*)/);return{codeString:a.trim(),className:s,language:n!==null?n[1]:"",...t}}},m=e=>{if(!e)return()=>!1;let a=e.split(",").map(s=>s.split("-").map(t=>parseInt(t,10)));return s=>{let t=s+1;return a.some(([n,r])=>r?t>=n&&t<=r:t===n)}},y=e=>async(a,s,t,n)=>{let r=n.schema.getType("Mdx"),g=t.nodeModel.getNodeById({id:a.parent}),l=r.getFields()[e].resolve;return await l(g,s,t,n)},L=(e,a)=>{let s=e.slug?e.slug:lodash_kebabcase__WEBPACK_IMPORTED_MODULE_0__(e.title);return`/${a}/${s}`.replace(/\/\/+/g,"/")};


/***/ }),

/***/ "./public/page-data/sq/d/2421966660.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2421966660.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"Raj Khandekar","siteTitleAlt":"Raj Khandekar","siteHeadline":"Raj Khandekar","siteUrl":"https://rajkhandekar.com","siteDescription":"Hacker Writeups","siteImage":"/banner.jpg","siteLanguage":"en","author":"@lekoarts_de"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3090400250.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3090400250.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"minimalBlogConfig":{"basePath":"/","blogPath":"/blog","postsPath":"content/posts","pagesPath":"content/pages","tagsPath":"/tags","externalLinks":[{"name":"LinkedIn","url":"https://www.linkedin.com/in/rajkhandekar/"},{"name":"Twitter","url":""}],"navigation":[{"title":"Blog","slug":"/blog"},{"title":"About","slug":"/about"}],"showLineNumbers":false,"showCopyButton":true}}}');

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-forest-index-mdx.js.map