!function(e){var t=window.webpackJsonp;window.webpackJsonp=function(n,r,i){for(var c,u,a=0,l=[];a<n.length;a++)u=n[a],o[u]&&l.push(o[u][0]),o[u]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);for(t&&t(n,r,i);l.length;)l.shift()()};var n={},o={9:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=o[e];if(0===t)return new Promise(function(e){e()});if(t)return t[2];var n=new Promise(function(n,r){t=o[e]=[n,r]});t[2]=n;var i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,r.nc&&c.setAttribute("nonce",r.nc),c.src=r.p+"scripts/"+({}[e]||e)+"-67c12.js";var u=setTimeout(a,12e4);function a(){c.onerror=c.onload=null,clearTimeout(u);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}return c.onerror=c.onload=a,i.appendChild(c),n},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e},r(r.s=17)}([function(e,t,n){e.exports=n(10)(1)},function(e,t,n){e.exports=function(e){n.e(3).then(function(t){e(n(28))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(5).then(function(t){e(n(29))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(8).then(function(t){e(n(30))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(4).then(function(t){e(n(31))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(7).then(function(t){e(n(32))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(6).then(function(t){e(n(33))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(2).then(function(t){e(n(34))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(1).then(function(t){e(n(35))}.bind(null,n)).catch(n.oe)}},function(e,t,n){e.exports=function(e){n.e(0).then(function(t){e(n(36))}.bind(null,n)).catch(n.oe)}},function(e,t){e.exports=styledComponents_dll},function(e,t){e.exports=react_dll},function(e,t){},function(e,t,n){e.exports=n(11)(39)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),r=o.default,i=o.css,c=o.injectGlobal,u=o.keyframes,a=o.ThemeProvider;t.css=i,t.injectGlobal=c,t.keyframes=u,t.ThemeProvider=a,t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(26),r=n(27),i={colors:o.default,sizes:r.default};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TechSlide={title:"Technology",path:"/tech",key:"technology",module:"Technology"},t.ContactMeSlide={title:"Contact Me",path:"/contract-me",key:"contractMe",module:"ContactMe"},t.FeaturesSlide={title:"Features",path:"/features",key:"features",module:"Features"},t.TeamMembersSlide={title:"Team Members",path:"/team-members",key:"teamMembers",module:"TeamMembers"},t.AdvisorsSlide={title:"Advisors",path:"/advisors",key:"advisors",module:"Advisors"},t.SupportersSlide={title:"Supporters",path:"/supporters",key:"supporters",module:"Supporters"},t.homepageBlocks=[t.TechSlide,t.ContactMeSlide,t.FeaturesSlide,t.TeamMembersSlide,t.AdvisorsSlide,t.SupportersSlide];var o=[{path:"/",key:"Header",module:"Header"},{path:"/",key:"Homepage",module:"Homepage",exact:!0}].concat(t.homepageBlocks,[{path:"/faq",key:"FAQ",module:"FAQ"}]);t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(18);n(12),n(19);var i=n(20),c=function(e){return r.render(o.createElement(e,null),document.getElementById("root"))};c(i.default)},function(e,t,n){e.exports=n(11)(38)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);n(12);var r=n(13),i=n(21),c=n(14),u=n(15),a=n(16);t.default=function(){return o.createElement(c.ThemeProvider,{theme:u.default},o.createElement(r.HashRouter,null,o.createElement(o.Fragment,null,i.default(a.default))))}},function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(13),c=n(22),u=n(23);t.default=function(e){return e.map(function(e){return r.createElement(i.Route,o({},e,{render:(t=e.module,function(e){if(!t)return null;var i=n(24)("./"+t);return r.createElement(c.default,{load:i},function(t){return t?r.createElement(t,o({},e)):r.createElement(u.default,null)})})}));var t})}},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={mod:null},t}return r(t,e),t.prototype.componentDidMount=function(){this.load(this.props)},t.prototype.componentWillReceiveProps=function(e){e.load!==this.props.load&&this.load(e)},t.prototype.load=function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})},t.prototype.render=function(){return this.state.mod?this.props.children(this.state.mod):null},t}(n(0).Component);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(){return o.createElement("div",null,"Loading")}},function(e,t,n){var o={"./Advisors":1,"./Advisors/":1,"./Advisors/index":1,"./Advisors/index.tsx":1,"./ContactMe":2,"./ContactMe/":2,"./ContactMe/index":2,"./ContactMe/index.tsx":2,"./FAQ":3,"./FAQ/":3,"./FAQ/index":3,"./FAQ/index.tsx":3,"./Features":4,"./Features/":4,"./Features/index":4,"./Features/index.tsx":4,"./Header":5,"./Header/":5,"./Header/index":5,"./Header/index.tsx":5,"./Homepage":6,"./Homepage/":6,"./Homepage/index":6,"./Homepage/index.tsx":6,"./Supporters":7,"./Supporters/":7,"./Supporters/index":7,"./Supporters/index.tsx":7,"./TeamMembers":8,"./TeamMembers/":8,"./TeamMembers/index":8,"./TeamMembers/index.tsx":8,"./Technology":9,"./Technology/":9,"./Technology/index":9,"./Technology/index.tsx":9};function r(e){return n(i(e))}function i(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=24},function(e,t,n){e.exports=n(10)(40)},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BLUE="#1F2346",e.WHITE="#FFF",e.RED="#F3492D",e.GREEN="#33C69B"}(o=t.COLORS||(t.COLORS={})),t.default={background:o.BLUE,primary:o.GREEN,highlight:o.RED,plain:o.WHITE}},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.F1="0.5rem",e.F2="0.75rem",e.F3="1rem",e.F4="1.125rem",e.F5="1.25rem",e.F6="1.375rem",e.F7="1.5rem",e.F8="1.75rem",e.F9="2rem",e.F_MAX="6.125rem"}(o=t.SIZES||(t.SIZES={})),t.default={root:"16px",blockTitleHeight:o.F4,slogan:o.F_MAX,headerHeight:"9.875rem",logoHOffset:"12px",navSpan:"4.125rem",dashLineWidth:"2px",centerBlockTitleVSpan:"2.9375rem",navItemHeight:o.F7,centerBlockMaxWidth:"1514px",centerBlockWidth:"78.8%",subscribeBtnFontSize:o.F3,descFontSize:o.F6,primaryTitleFontSize:"3.875rem",secondaryTitleFontSize:o.F9,titleColorBlockWidth:"20px",titleColorBlockRightSpan:"2rem",descLeftPadding:"3rem",descTopPadding:"7.5rem",subscribeFormLineHeight:"5.4rem",subscribeFormLineWidth:"30.18rem",highlightBtnWidth:"12.5rem",highlightBtnHeight:"4rem",historyCircleDiameter:"20px",historyCircleBandWidth:"5px",historyColBorderBottomWidth:"5px",historyItemIconDiameter:"5px",memberBlockHeight:"200px",memberBlockDescPaddingLeft:"35px",pageBlockMarginTop:"112px",centerBlockTitleWidth:"300px",chartDescPaddingTop:"60px"}}]);