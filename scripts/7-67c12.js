webpackJsonp([7],{32:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=t(37),r=t(43),l=[{label:"WHITE PAPER",path:"white-paper"},{label:"FAQ",path:"faq"},{label:"EN",path:"en"},{label:"CN",path:"cn"}];e.default=function(){return i.createElement(o.Header,null,i.createElement(o.Logo,{src:r,alt:"NervOS"}),i.createElement(o.Navs,null,l.map(function(n){return i.createElement(o.NavItem,{key:n.path},i.createElement("a",{href:n.path},n.label))})))}},37:function(n,e,t){"use strict";var i=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var o=t(14),r=t(15);o.injectGlobal(d||(d=i(["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n    min-height: 100vh;\n    overflow: auto;\n  }\n"],["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n    min-height: 100vh;\n    overflow: auto;\n  }\n"])),r.default.colors.background,r.default.sizes.root),e.Header=o.default.header(h||(h=i(["\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n"],["\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n"])),function(n){return n.theme.sizes.headerHeight},function(n){return n.theme.sizes.headerHeight},function(n){return n.theme.sizes.centerBlockMaxWidth},function(n){return n.theme.sizes.centerBlockWidth}),e.Logo=o.default.img(c||(c=i(["\n  height: 100%;\n  margin-left: ",";\n  transform: ",";\n"],["\n  height: 100%;\n  margin-left: ",";\n  transform: ",";\n"])),function(n){return-n.theme.sizes.headerHeight.slice(0,-3)/2+"rem"},function(n){return"translateX("+n.theme.sizes.logoHOffset+")"}),e.Navs=o.default.ul(u||(u=i(["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  margin-right: ",";\n  transform: ",";\n"],["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  margin-right: ",";\n  transform: ",";\n"])),function(n){return n.theme.colors.plain},function(n){return-n.theme.sizes.headerHeight.slice(0,-3)/2+"rem"},function(n){return"translateX("+n.theme.sizes.logoHOffset+")"}),e.NavItem=o.default.li(f||(f=i(["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n"],["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n"])),function(n){return n.theme.sizes.navSpan},function(n){return n.theme.sizes.navItemHeight}),e.ScreenDiv=o.default.div(m||(m=i(["\n  display: flex;\n  /* max-width: ",";\n  width: ","; */\n  /* margin: 0 auto; */\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"],["\n  display: flex;\n  /* max-width: ",";\n  width: ","; */\n  /* margin: 0 auto; */\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"])),function(n){return n.theme.sizes.centerBlockMaxWidth},function(n){return n.theme.sizes.centerBlockWidth},function(n){return n.theme.colors.background}),e.CenterBlock=o.default.div(p||(p=i(["\n  display: flex;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  margin-top: ",";\n"],["\n  display: flex;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  margin-top: ",";\n"])),function(n){return n.theme.sizes.centerBlockMaxWidth},function(n){return n.theme.sizes.centerBlockWidth},function(n){return n.theme.sizes.pageBlockMarginTop}),e.CenterBlockTitles=o.default.div(g||(g=i(["\n  display: inline-block;\n  width: ",";\n  font-size: ",";\n"],["\n  display: inline-block;\n  width: ",";\n  font-size: ",";\n"])),function(n){return n.theme.sizes.centerBlockTitleWidth},function(n){return n.theme.sizes.blockTitleHeight}),e.CenterBlockTitle=o.default.h5(b||(b=i(["\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  margin-bottom: ",";\n  cursor: pointer;\n  font-weight: 100;\n"],["\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  margin-bottom: ",";\n  cursor: pointer;\n  font-weight: 100;\n"])),function(n){return n.theme.sizes.blockTitleHeight},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.centerBlockTitleVSpan}),e.CenterBlockIndex=o.default.span(z||(z=i(["\n  font-weight: inherit;\n  color: ",";\n"],["\n  font-weight: inherit;\n  color: ",";\n"])),function(n){return n.theme.colors.primary}),e.CenterBlockContent=o.default.div(x||(x=i(["\n  flex: 1;\n"],["\n  flex: 1;\n"]))),e.Slogan=o.default.h1(k||(k=i(["\n  color: ",";\n  font-family: Futura;\n  font-size: ",";\n  font-weight: 100;\n  margin: 0;\n  /* margin-top: -1.125rem; */\n  margin-top: ",";\n"],["\n  color: ",";\n  font-family: Futura;\n  font-size: ",";\n  font-weight: 100;\n  margin: 0;\n  /* margin-top: -1.125rem; */\n  margin-top: ",";\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.slogan},function(n){return"-"+n.theme.sizes.blockTitleHeight});var l=o.default.div;e.ColorizedDiv=l(w||(w=i(["\n  border-left: ",";\n"],["\n  border-left: ",";\n"])),function(n){return n.theme.sizes.dashLineWidth+" dotted "+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)+"\n  "}),e.RippleInput=o.default.input(y||(y=i(["\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 2px, 100% 2px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 2px, 100% 2px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"],["\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 2px, 100% 2px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 2px, 100% 2px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"])),function(n){return"linear-gradient(to top, "+n.theme.colors.plain+", "+n.theme.colors.plain+"), linear-gradient(to top, "+n.theme.colors.primary+", "+n.theme.colors.primary+")"},function(n){return n.theme.colors.plain},function(n){return n.theme.colors.plain}),e.HighlightButton=o.default.button(v||(v=i(["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  /* padding: 10px 25px; */\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n"],["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  /* padding: 10px 25px; */\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.colors.highlight},function(n){return n.theme.sizes.subscribeBtnFontSize},function(n){return n.theme.sizes.highlightBtnWidth},function(n){return n.theme.sizes.highlightBtnHeight},function(n){return n.theme.sizes.highlightBtnHeight}),e.Desc=o.default.div(B||(B=i(["\n  color: ",";\n  font-size: ",";\n  padding-left: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"],["\n  color: ",";\n  font-size: ",";\n  padding-left: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"])),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.descFontSize},function(n){return n.theme.sizes.descLeftPadding},function(n){return n.theme.sizes.descTopPadding});var a=o.default.h1;e.ColorizedTitle=a(H||(H=i(["\n  line-height: 0.8;\n  font-size: ",";\n  color: ",";\n  \n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n"],["\n  line-height: 0.8;\n  font-size: ",";\n  color: ",";\n  \n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n"])),function(n){return""+(n.h1?n.theme.sizes.primaryTitleFontSize:n.theme.sizes.secondaryTitleFontSize)},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.titleColorBlockWidth},function(n){return""+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)},function(n){return"-"+n.theme.sizes.dashLineWidth},function(n){return""+n.theme.sizes.titleColorBlockRightSpan}),e.SubscribeFormLine=o.default.div(C||(C=i(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n"],["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n"])),function(n){return n.theme.sizes.subscribeFormLineHeight},function(n){return n.theme.sizes.subscribeFormLineWidth}),e.SubscribeButtonContainer=o.default.div(W||(W=i(["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n"],["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n"]))),e.HistoryCol=o.default.div(S||(S=i(["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: 40px;\n  padding-left: 15px;\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: 40px;\n  padding-left: 15px;\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),function(n){return n.theme.sizes.dashLineWidth+" dotted "+n.theme.colors.primary},function(n){return n.theme.sizes.historyColBorderBottomWidth+" solid "+n.theme.colors.primary},function(n){return n.theme.sizes.historyCircleDiameter},function(n){return n.theme.sizes.historyCircleDiameter},function(n){return n.theme.sizes.historyCircleBandWidth+" solid "+n.theme.colors.primary},function(n){return n.theme.colors.background},function(n){return"0 0 0 "+n.theme.sizes.historyCircleBandWidth+" "+n.theme.colors.background}),e.HistoryYearLabel=o.default.span(T||(T=i(["\n  position: absolute;\n  bottom: 100%;\n  right: 0;\n  padding-bottom: 28px;\n  color: ",";\n"],["\n  position: absolute;\n  bottom: 100%;\n  right: 0;\n  padding-bottom: 28px;\n  color: ",";\n"])),function(n){return n.theme.colors.plain}),e.HistoryItem=o.default.p(L||(L=i(["\n  margin: 1rem 0;\n  position: relative;\n  padding: 0 10px;\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"],["\n  margin: 1rem 0;\n  position: relative;\n  padding: 0 10px;\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"])),function(n){return n.theme.sizes.historyItemIconDiameter},function(n){return n.theme.sizes.historyItemIconDiameter},function(n){return n.theme.colors.highlight}),e.MemberBlock=o.default.div(D||(D=i(["\n  position: relative;\n  width: 50%;\n  display: inline-block;\n  padding-left: ",";\n  height: ",";\n"],["\n  position: relative;\n  width: 50%;\n  display: inline-block;\n  padding-left: ",";\n  height: ",";\n"])),function(n){return n.theme.sizes.memberBlockHeight},function(n){return n.theme.sizes.memberBlockHeight}),e.MemberBlockAvatar=o.default.img(I||(I=i(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"])),function(n){return n.theme.sizes.memberBlockHeight},function(n){return n.theme.sizes.memberBlockHeight}),e.MemberBlockName=o.default.div(P||(P=i(["\n  font-size: 46px;\n  color: ",";\n  position: absolute;\n  top: 50%;\n  margin-top: -1em;\n  left: ",";\n  padding-left: ",";\n  font-weight: 100;\n"],["\n  font-size: 46px;\n  color: ",";\n  position: absolute;\n  top: 50%;\n  margin-top: -1em;\n  left: ",";\n  padding-left: ",";\n  font-weight: 100;\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.memberBlockHeight},function(n){return n.theme.sizes.memberBlockDescPaddingLeft}),e.MemberBlockDesc=o.default.div(F||(F=i(["\n  position: absolute;\n  bottom: 0;\n  left: ",";\n  color: ",";\n  padding-left: ",";\n  font-size: 20px;\n"],["\n  position: absolute;\n  bottom: 0;\n  left: ",";\n  color: ",";\n  padding-left: ",";\n  font-size: 20px;\n"])),function(n){return n.theme.sizes.memberBlockHeight},function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.memberBlockDescPaddingLeft}),e.ChartBlock=o.default.div(j||(j=i(["\n  display: inline-block;\n  width: 33%;\n  padding-right: 116px;\n"],["\n  display: inline-block;\n  width: 33%;\n  padding-right: 116px;\n"])));var s=o.default.h1;e.ChartTitle=s(M||(M=i(["\n  font-size: 32px;\n  line-height: 1;\n  display:block;\n  height: 2em;\n  color: ",";\n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n  text-transform: uppercase;\n  letter-spacing: 3px;\n"],["\n  font-size: 32px;\n  line-height: 1;\n  display:block;\n  height: 2em;\n  color: ",";\n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n  text-transform: uppercase;\n  letter-spacing: 3px;\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.titleColorBlockWidth},function(n){return""+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)},function(n){return"-"+n.theme.sizes.dashLineWidth},function(n){return""+n.theme.sizes.titleColorBlockRightSpan}),e.ChartDesc=o.default.div(N||(N=i(["\n  color: ",";\n  font-size: ",";\n  padding-left: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"],["\n  color: ",";\n  font-size: ",";\n  padding-left: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"])),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.descFontSize},function(n){return n.theme.sizes.descLeftPadding},function(n){return n.theme.sizes.chartDescPaddingTop}),e.ChartIcon=o.default.img(E||(E=i(["\n  width: 184px;\n  height: 184px;\n  margin-bottom: 100px;\n"],["\n  width: 184px;\n  height: 184px;\n  margin-bottom: 100px;\n"]))),e.SlideNavs=o.default.div(O||(O=i(["\n  position: fixed;\n  top: 50%;\n  left: 100px;\n"],["\n  position: fixed;\n  top: 50%;\n  left: 100px;\n"])));var d,h,c,u,f,m,p,g,b,z,x,k,w,y,v,B,H,C,W,S,T,L,D,I,P,F,j,M,N,E,O,_,R=o.default.div;e.SlideNav=R(_||(_=i(["\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n\n"],["\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n\n"])),function(n){return""+(n.active?n.theme.colors.highlight:"rgba(255, 255, 255, 0.8)")},function(n){return n.active?"default":"pointer"})},43:function(n,e,t){n.exports=t.p+"images/nerveos-3181f7e4b275977fca1ee0690dc08f93.svg"}});