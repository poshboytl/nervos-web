webpackJsonp([1],{69:function(n,e,t){"use strict";var i=this&&this.__assign||Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n};Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),o=t(23),a=t(76),s=t(77),l=t(83),d=t(85),c=t(78).default({slogan:"slogan",description:"description",download:"download",whitepaper:"whitepaper"})(function(n){return r.createElement(o.I18n,{ns:"translations"},function(e,t){return t.i18n,r.createElement(r.Fragment,null,r.createElement(l.default,null),r.createElement(s.SloganContainer,null,r.createElement(a.Slogan,null,e(n.slogan)),r.createElement(a.HomepageDesc,null,e(n.description)),r.createElement(d.Download,null,e(n.download)," ",e(n.whitepaper))))})});e.default=function(n){return r.createElement(c,i({},n))}},74:function(n,e,t){"use strict";var i=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var r=t(22),o=t(24);r.injectGlobal(u||(u=i(["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n\n    @media (max-width: 1500px) {\n      font-size: 14px;\n    }\n    @media (max-width: 1200px) {\n      font-size: 12px;\n    }\n    @media (max-width: 992px) {\n      font-size: 10px;\n    }\n    @media (max-width: 768px) {\n    }\n    *::selection{\n      background-color: ",";\n    }\n  }\n  header {\n    padding-top: ","\n  }\n"],["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n\n    @media (max-width: 1500px) {\n      font-size: 14px;\n    }\n    @media (max-width: 1200px) {\n      font-size: 12px;\n    }\n    @media (max-width: 992px) {\n      font-size: 10px;\n    }\n    @media (max-width: 768px) {\n    }\n    *::selection{\n      background-color: ",";\n    }\n  }\n  header {\n    padding-top: ","\n  }\n"])),o.default.colors.background,o.default.sizes.root,o.default.colors.highlight,o.default.sizes.header.paddingTop+"rem"),e.Header=r.default.div(h||(h=i(["\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 600px) {\n    max-width: auto;\n    width: 100vw;\n  }\n"],["\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 600px) {\n    max-width: auto;\n    width: 100vw;\n  }\n"])),function(n){return n.theme.sizes.header.height+"rem"},function(n){return n.theme.sizes.header.height+"rem"},function(n){return n.theme.sizes.screen.blockMaxWidth+"rem"},function(n){return n.theme.sizes.screen.blockWidthPercent}),e.Logo=r.default.img(f||(f=i(["\n  height: 100%;\n  cursor: pointer;\n  @media (max-width: 600px) {\n    margin-left: 50%;\n    transform: translateX(-50%);\n  }\n"],["\n  height: 100%;\n  cursor: pointer;\n  @media (max-width: 600px) {\n    margin-left: 50%;\n    transform: translateX(-50%);\n  }\n"]))),e.Navs=r.default.ul(m||(m=i(["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  @media (max-width: 600px) {\n    width: 100vw;\n    line-height: 1.4;\n  }\n"],["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  @media (max-width: 600px) {\n    width: 100vw;\n    line-height: 1.4;\n  }\n"])),function(n){return n.theme.colors.plain}),e.NavItem=r.default.li(p||(p=i(["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n  & > a,\n  & > span {\n    cursor: pointer;\n  }\n  @media (max-width: 750px) {\n    margin-left: 1.125rem;\n  }\n  @media (max-width: 600px) {\n    margin: 0;\n    width: 25vw;\n    text-align: center;\n  }\n"],["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n  & > a,\n  & > span {\n    cursor: pointer;\n  }\n  @media (max-width: 750px) {\n    margin-left: 1.125rem;\n  }\n  @media (max-width: 600px) {\n    margin: 0;\n    width: 25vw;\n    text-align: center;\n  }\n"])),function(n){return n.theme.sizes.navSpan},function(n){return n.theme.sizes.navItemHeight}),e.ScreenDiv=r.default.div(g||(g=i(["\n  display: flex;\n  /* max-width: ",";\n  width: ","; */\n  /* margin: 0 auto; */\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"],["\n  display: flex;\n  /* max-width: ",";\n  width: ","; */\n  /* margin: 0 auto; */\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"])),function(n){return n.theme.sizes.centerBlockMaxWidth},function(n){return n.theme.sizes.centerBlockWidth},function(n){return n.theme.colors.background}),e.CenterBlock=r.default.div(b||(b=i(["\n  position: relative;\n  display: flex;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  margin-top: ",";\n"],["\n  position: relative;\n  display: flex;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  margin-top: ",";\n"])),function(n){return n.theme.sizes.centerBlockMaxWidth},function(n){return n.theme.sizes.centerBlockWidth},function(n){return n.theme.sizes.pageBlockMarginTop}),e.CenterBlockTitles=r.default.div(y||(y=i(["\n  display: inline-block;\n  width: ",";\n  font-size: ",";\n"],["\n  display: inline-block;\n  width: ",";\n  font-size: ",";\n"])),function(n){return n.theme.sizes.centerBlockTitleWidth},function(n){return n.theme.sizes.blockTitleHeight}),e.CenterBlockTitle=r.default.h5(z||(z=i(["\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  margin-bottom: ",";\n  cursor: pointer;\n  font-weight: 100;\n"],["\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  margin-bottom: ",";\n  cursor: pointer;\n  font-weight: 100;\n"])),function(n){return n.theme.sizes.blockTitleHeight},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.centerBlockTitleVSpan}),e.CenterBlockIndex=r.default.span(w||(w=i(["\n  font-weight: inherit;\n  color: ",";\n"],["\n  font-weight: inherit;\n  color: ",";\n"])),function(n){return n.theme.colors.primary}),e.CenterBlockContent=r.default.div(x||(x=i(["\n  flex: 1;\n"],["\n  flex: 1;\n"]))),e.Slogan=r.default.h1(v||(v=i(["\n  color: ",";\n  font-family: Futura;\n  font-size: ",";\n  font-weight: 900;\n  margin: 0;\n  margin-top: ",";\n  margin-left: ",";\n  padding-left: ",";\n"],["\n  color: ",";\n  font-family: Futura;\n  font-size: ",";\n  font-weight: 900;\n  margin: 0;\n  margin-top: ",";\n  margin-left: ",";\n  padding-left: ",";\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.slogan},function(n){return"-"+n.theme.sizes.blockTitleHeight},function(n){return n.theme.sizes.dashLineWidth+"rem"},function(n){return""+n.theme.sizes.screen.desc.paddingLeft});var a=r.default.div;e.ColorizedDiv=a(k||(k=i(["\n  position: relative;\n  border-left: ",";\n  padding-left: ",";\n  &:before{\n    display:block;\n    content: '';\n    width: ",";\n    height: ",";\n    position: absolute;\n    top: 0;\n    left: ",";\n    background-color: ",";\n  }\n"],["\n  position: relative;\n  border-left: ",";\n  padding-left: ",";\n  &:before{\n    display:block;\n    content: '';\n    width: ",";\n    height: ",";\n    position: absolute;\n    top: 0;\n    left: ",";\n    background-color: ",";\n  }\n"])),function(n){return n.theme.sizes.dashLineWidth+"rem dotted "+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)},function(n){return n.chart?n.theme.sizes.chart.title.paddingLeft+n.theme.sizes.colorizedBlock.color.width+"rem":n.theme.sizes.colorizedBlock.paddingLeft+"rem"},function(n){return n.theme.sizes.colorizedBlock.color.width+"rem"},function(n){return n.theme.sizes.colorizedBlock.color.height*(n.colorBlockHeight||1)+"rem"},function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return n.primary?n.theme.colors.primary:n.theme.colors.highlight}),e.RippleInput=r.default.input(_||(_=i(["\n  font-size: ",";\n  line-height: 1.6;\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 3px, 100% 3px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 3px, 100% 3px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"],["\n  font-size: ",";\n  line-height: 1.6;\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 3px, 100% 3px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 3px, 100% 3px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"])),function(n){return n.theme.sizes.inputFontSize},function(n){return"linear-gradient(to top, "+n.theme.colors.primary+", "+n.theme.colors.primary+"), linear-gradient(to top, "+n.theme.colors.plain+", "+n.theme.colors.plain+")"},function(n){return n.theme.colors.plain},function(n){return n.theme.colors.plain}),e.HighlightButton=r.default.button(S||(S=i(["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n  cursor: pointer;\n"],["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n  cursor: pointer;\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.colors.highlight},function(n){return n.theme.sizes.subscribeBtnFontSize},function(n){return n.theme.sizes.highlightBtnWidth},function(n){return n.theme.sizes.highlightBtnHeight},function(n){return n.theme.sizes.highlightBtnHeight});var s=r.default.h1;e.ColorizedTitle=s(j||(j=i(["\n  line-height: 0.8;\n  font-size: ",";\n  color: ",";\n  \n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n  font-weight: 900;\n"],["\n  line-height: 0.8;\n  font-size: ",";\n  color: ",";\n  \n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n  font-weight: 900;\n"])),function(n){return""+(n.h1?n.theme.sizes.primaryTitleFontSize:n.theme.sizes.secondaryTitleFontSize)},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.titleColorBlockWidth},function(n){return""+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)},function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return""+n.theme.sizes.titleColorBlockRightSpan}),e.SubscribeFormLine=r.default.div(O||(O=i(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n"],["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n"])),function(n){return n.theme.sizes.subscribeFormLineHeight},function(n){return n.theme.sizes.subscribeFormLineWidth}),e.SubscribeButtonContainer=r.default.div(B||(B=i(["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n"],["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n"]))),e.HistoryCol=r.default.div(T||(T=i(["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: ",";\n  padding-left: ",";\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: ",";\n  padding-left: ",";\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),function(n){return n.theme.sizes.dashLineWidth+"rem dotted "+n.theme.colors.primary},function(n){return n.theme.sizes.historyColBorderBottomWidth+" solid "+n.theme.colors.primary},function(n){return n.theme.sizes.HistoryColPaddingTop},function(n){return n.theme.sizes.HistoryColPaddingLeft},function(n){return n.theme.sizes.historyCircleDiameter},function(n){return n.theme.sizes.historyCircleDiameter},function(n){return n.theme.sizes.historyCircleBandWidth+" solid "+n.theme.colors.primary},function(n){return n.theme.colors.background},function(n){return"0 0 0 "+n.theme.sizes.historyCircleBandWidth+" "+n.theme.colors.background}),e.HistoryYearLabel=r.default.span(H||(H=i(["\n  position: absolute;\n  bottom: 100%;\n  right: ",";\n  padding-bottom: ",";\n  color: ",";\n"],["\n  position: absolute;\n  bottom: 100%;\n  right: ",";\n  padding-bottom: ",";\n  color: ",";\n"])),function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return n.theme.sizes.HistoryYearLabelPaddingBottom},function(n){return n.theme.colors.plain}),e.HistoryItem=r.default.p(C||(C=i(["\n  margin: 1rem 0;\n  position: relative;\n  padding: ",";\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"],["\n  margin: 1rem 0;\n  position: relative;\n  padding: ",";\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"])),function(n){return"0 "+n.theme.sizes.HistoryItemHPadding},function(n){return n.theme.sizes.historyItemIconDiameter},function(n){return n.theme.sizes.historyItemIconDiameter},function(n){return n.theme.colors.assist}),e.Members=r.default.div(P||(P=i(["\n  display: flex;\n  flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  /* grid-template-rows: repeat(1fr, 2); */\n  grid-gap: 4vh 5%;\n  @media (max-width: 1200px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  /* grid-template-rows: repeat(1fr, 2); */\n  grid-gap: 4vh 5%;\n  @media (max-width: 1200px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),e.MemberBlock=r.default.div(I||(I=i(["\n  /* width: 50%; */\n  height: ",";\n  display: flex;\n  flex-wrap: wrap;\n"],["\n  /* width: 50%; */\n  height: ",";\n  display: flex;\n  flex-wrap: wrap;\n"])),function(n){return n.theme.sizes.memberBlockHeight}),e.MemberAvatar=r.default.img(D||(D=i(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"],["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"])),function(n){return n.theme.sizes.memberBlockHeight},function(n){return n.theme.sizes.memberBlockHeight}),e.MemberInfo=r.default.div(W||(W=i(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-left: 3.6rem;\n"],["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-left: 3.6rem;\n"]))),e.MemberName=r.default.div(E||(E=i(["\n  flex: 1;\n  font-size: ",";\n  font-weight: 100;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"],["\n  flex: 1;\n  font-size: ",";\n  font-weight: 100;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])),function(n){return n.theme.sizes.memberNameFontSize},function(n){return n.theme.colors.plain}),e.MemberDesc=r.default.div(M||(M=i(["\n  flex: 1;\n  color: ",";\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"],["\n  flex: 1;\n  color: ",";\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])),function(n){return n.theme.colors.primary}),e.ChartIcon=r.default.img(L||(L=i(["\n  width: ",";\n  height: ",";\n"],["\n  width: ",";\n  height: ",";\n"])),function(n){return n.theme.sizes.chart.icon.size+"rem"},function(n){return n.theme.sizes.chart.icon.size+"rem"}),e.SlideNavs=r.default.div(F||(F=i(["\n  position: fixed;\n  top: 50vh;\n  transform: translateY(-50%);\n  left: ",";\n"],["\n  position: fixed;\n  top: 50vh;\n  transform: translateY(-50%);\n  left: ",";\n"])),function(n){return n.theme.sizes.slideNav.left+"rem"});var l=r.default.div;e.SlideNav=l(N||(N=i(["\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n\n"],["\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n\n"])),function(n){return""+(n.active?n.theme.colors.highlight:"rgba(255, 255, 255, 0.8)")},function(n){return n.active?"default":"pointer"});var d=r.default.div,c=r.keyframes(Y||(Y=i(["{\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n"],["{\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n"])));e.Rect=d(V||(V=i(["\n  position: absolute;\n  top:0;\n  left:0;\n  display: block;\n  width: ",";\n  height: ",";\n  opacity: 0;\n  background-color: ",";\n  transform: ",";\n  transform-origin: ",";\n    animation:",";\n    animation-delay: ","\n"],["\n  position: absolute;\n  top:0;\n  left:0;\n  display: block;\n  width: ",";\n  height: ",";\n  opacity: 0;\n  background-color: ",";\n  transform: ",";\n  transform-origin: ",";\n    animation:",";\n    animation-delay: ","\n"])),function(n){return n.theme.sizes.rect.width+"px"},function(n){return 4*n.theme.sizes.rect.width+"px"},function(n){return n.theme.colors.highlight},function(n){return"rotate("+n.deg+"deg) "},function(n){return"center "+(+n.theme.sizes.rect.offset+100)+"%"},function(n){return c+" 0.5s forwards"},function(n){return 1+.1*(n.index||0)+"s"});r.default.div;var u,h,f,m,p,g,b,y,z,w,x,v,k,_,S,j,O,B,T,H,C,P,I,D,W,E,M,L,F,N,Y,V,R,X,q=r.default.div;e.HomepageWidget=q(R||(R=i(["\n  position: absolute;\n  width: ",";\n  height: ",";\n  transform-origin: center center;\n  transform: ",";\n  &>div{\n    top: ",";\n    left: ",";\n  }\n"],["\n  position: absolute;\n  width: ",";\n  height: ",";\n  transform-origin: center center;\n  transform: ",";\n  &>div{\n    top: ",";\n    left: ",";\n  }\n"])),function(n){return 4*n.theme.sizes.rect.width*2.82+"px"},function(n){return 4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+n.theme.sizes.rect.width/2+"px"},function(n){return n.primary?"rotate(60deg)":"translateX("+4*n.theme.sizes.rect.width*(2*+n.theme.sizes.rect.offset+100)/100+"px) rotate(-120deg) "},function(n){return"-"+n.theme.sizes.rect.width/2+"px"},function(n){return(4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+n.theme.sizes.rect.width/2)/2+"px"}),e.HomepageWidgets=r.default.div(X||(X=i(["\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  transform: translate(39vw, -210px) rotate(60deg);\n  transform-origin: ",";\n  width: ",";\n  height: ",";\n"],["\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  transform: translate(39vw, -210px) rotate(60deg);\n  transform-origin: ",";\n  width: ",";\n  height: ",";\n"])),function(n){return 100*(100+n.theme.sizes.rect.offset)/(300+4*n.theme.sizes.rect.offset)+"% center"},function(n){return 4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset/100*4+3)+"px"},function(n){return 4*+n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+ +n.theme.sizes.rect.width/2+"px"})},75:function(n,e,t){"use strict";var i=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var r=t(22),o=r.default.div;e.FadeInDiv=o(d||(d=i(["\n  opacity: ",";\n  transition: opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n"],["\n  opacity: ",";\n  transition: opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n"])),function(n){return""+(n.fadeIn?1:0)},function(n){return.05*(n.index||0)+"s"});var a=r.default.div;e.VerticalSlideInDiv=a(c||(c=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"])),function(n){return"translateY("+(n.slideIn?"0":n.fromTop?"-100vh":"100vh")+")"},function(n){return""+(n.slideIn?1:0)},function(n){return.05*(n.index||0)+"s"});var s=r.default.div;e.HorizontalSlideInDiv=s(u||(u=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"])),function(n){return"translateX("+(n.slideIn?"0":n.fromLeft?"-100vh":"100vh")+")"},function(n){return""+(n.slideIn?1:0)},function(n){return.05*(n.index||0)+"s"});var l=r.default.div;e.VerticalSlideOutDiv=l(h||(h=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"])),function(n){return"translateY("+(n.slideOut?"100vh":"0")+")"},function(n){return""+(n.slideOut,1)},function(n){return.05*(n.index||0)+"s"});var d,c,u,h,f,m=r.default.div;e.HorizontalSlideOutDiv=m(f||(f=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"])),function(n){return"translateY("+(n.slideOut?"100vh":"0")+")"},function(n){return""+(n.slideOut,1)},function(n){return.05*(n.index||0)+"s"}),e.SlideIn={vertical:e.VerticalSlideInDiv,horizontal:e.HorizontalSlideInDiv},e.SlideOut={vertical:e.VerticalSlideOutDiv,horizontal:e.HorizontalSlideOutDiv},e.Fade={in:e.FadeInDiv}},76:function(n,e,t){"use strict";var i=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,s,l,d,c,u=t(22);e.Slogan=u.default.h1(r||(r=i(["\n  color: ",";\n  font-family: Futura;\n  font-size: ",";\n  font-weight: 900;\n  margin: 0;\n  line-height: ",";\n  padding-bottom: ",";\n"],["\n  color: ",";\n  font-family: Futura;\n  font-size: ",";\n  font-weight: 900;\n  margin: 0;\n  line-height: ",";\n  padding-bottom: ",";\n"])),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.slogan.fontSize+"rem"},function(n){return n.theme.sizes.slogan.lineHeight},function(n){return n.theme.sizes.slogan.paddingBottom+"rem"}),e.HomepageDesc=u.default.div(o||(o=i(["\n  font-size: ",";\n  color: ",";\n  line-height: ",";\n  text-shadow: ",";\n  padding-bottom: ",";\n  text-align: justify;\n  text-align-last: left;\n"],["\n  font-size: ",";\n  color: ",";\n  line-height: ",";\n  text-shadow: ",";\n  padding-bottom: ",";\n  text-align: justify;\n  text-align-last: left;\n"])),function(n){return n.theme.sizes.homepageDesc.fontSize+"rem"},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.homepageDesc.lineHeight},function(n){return"0 0 5px "+n.theme.colors.highlight+", 0 0 5px "+n.theme.colors.primary},function(n){return n.theme.sizes.homepageDesc.paddingBottom+"rem"}),e.Desc=u.default.div(a||(a=i(["\n  color: ",";\n  font-size: ",";\n  padding-left: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"],["\n  color: ",";\n  font-size: ",";\n  padding-left: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"])),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.screen.desc.fontSize+"rem"},function(n){return n.theme.sizes.screen.desc.paddingLeft+"rem"},function(n){return n.theme.sizes.screen.desc.paddingTop+"rem"}),e.ScreenTitle=u.default.h1(s||(s=i(["\n  display: inline-block;\n  position: relative;\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  margin: 0;\n  font-weight: 900;\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    width: 55%;\n    height: ",";\n    background-color: ",";\n  }\n"],["\n  display: inline-block;\n  position: relative;\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  margin: 0;\n  font-weight: 900;\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    width: 55%;\n    height: ",";\n    background-color: ",";\n  }\n"])),function(n){return n.theme.sizes.screen.title.fontSize+"rem"},function(n){return n.theme.sizes.screen.title.lineHeight},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.screen.title.borderWidth+"rem"},function(n){return n.theme.colors.highlight}),e.ScreenSubTitle=u.default.h1(l||(l=i(["\n  font-size: ",";\n  color: ",";\n  margin: 0;\n"],["\n  font-size: ",";\n  color: ",";\n  margin: 0;\n"])),function(n){return n.theme.sizes.screen.subtitle.fontSize+"rem"},function(n){return n.theme.colors.plain}),e.ChartTitle=u.default.h1(d||(d=i(["\n  font-size: ",";\n  line-height: 1;\n  display: block;\n  height: 2em;\n  color: ",";\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: 900;\n"],["\n  font-size: ",";\n  line-height: 1;\n  display: block;\n  height: 2em;\n  color: ",";\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: 900;\n"])),function(n){return n.theme.sizes.chart.title.fontSize+"rem"},function(n){return n.theme.colors.plain}),e.ChartDesc=u.default.div(c||(c=i(["\n  color: ",";\n  font-size: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n  text-align: justify;\n  text-align-last: left;\n"],["\n  color: ",";\n  font-size: ",";\n  padding-top: ",";\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n  text-align: justify;\n  text-align-last: left;\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.screen.desc.fontSize+"rem"},function(n){return n.theme.sizes.chart.desc.paddingTop+"rem"})},77:function(n,e,t){"use strict";var i=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var r=t(22);e.ScreenDiv=r.default.div(o||(o=i(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  padding-top: ",";\n"],["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  padding-top: ",";\n"])),function(n){return n.theme.sizes.screen.blockMaxWidth+"rem"},function(n){return n.theme.sizes.screen.blockWidthPercent},function(n){return n.theme.sizes.header.height+n.theme.sizes.header.paddingTop+n.theme.sizes.screen.desc.paddingTop+"rem"}),e.SloganContainer=r.default.div(a||(a=i(["\n  position: relative;\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  &:after {\n    display: block;\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: ",";\n    height: ",";\n    width: ",";\n    background-color: ",";\n  }\n"],["\n  position: relative;\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  &:after {\n    display: block;\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: ",";\n    height: ",";\n    width: ",";\n    background-color: ",";\n  }\n"])),function(n){return n.theme.sizes.screen.desc.paddingLeft+"rem"},function(n){return n.theme.sizes.slogan.container.paddingTop-n.theme.sizes.screen.desc.paddingTop+"rem"},function(n){return n.theme.sizes.slogan.container.paddingBottom+"rem"},function(n){return n.theme.sizes.screen.desc.paddingLeft+"rem"},function(n){return n.theme.sizes.slogan.container.borderWidth+"rem"},function(n){return n.theme.sizes.slogan.container.borderLength+"rem"},function(n){return n.theme.colors.plain}),e.ScreenTitleContainer=r.default.div(s||(s=i(["\n  margin-top: ",";\n  margin-bottom: ",";\n"],["\n  margin-top: ",";\n  margin-bottom: ",";\n"])),function(n){return n.theme.sizes.screen.titleContainer.marginTop+"rem"},function(n){return n.theme.sizes.screen.titleContainer.marginBottom+"rem"}),e.ChartsContainer=r.default.div(l||(l=i(["\n  display: block;\n  margin-left: ",";\n  margin-right: ",";\n"],["\n  display: block;\n  margin-left: ",";\n  margin-right: ",";\n"])),function(n){return n.theme.sizes.screen.desc.paddingLeft-n.theme.sizes.chart.blockHPadding/2+"rem"},function(n){return n.theme.sizes.screen.desc.paddingLeft-n.theme.sizes.chart.blockHPadding/2+"rem"});var o,a,s,l,d,c=r.default.div;e.ChartBlock=c(d||(d=i(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 3vw;\n  grid-row-gap: 3vh;\n  & > img {\n    grid-column: ",";\n    grid-row: 1/2;\n    justify-self: ","\n  }\n  & > div {\n    grid-column: ",";\n    grid-row: 1/2;\n    justify-self: ","\n  }\n"],["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 3vw;\n  grid-row-gap: 3vh;\n  & > img {\n    grid-column: ",";\n    grid-row: 1/2;\n    justify-self: ","\n  }\n  & > div {\n    grid-column: ",";\n    grid-row: 1/2;\n    justify-self: ","\n  }\n"])),function(n){return n.index%2?"4/5":"1/2"},function(n){return n.index%2?"right":"left"},function(n){return n.index%2?"1/4":"2/5"},function(n){return n.index%2?"left":"right"})},78:function(n,e,t){"use strict";var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},function(n,e){function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),o=this&&this.__assign||Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n};Object.defineProperty(e,"__esModule",{value:!0});var a=t(0),s=t(23),l=t(77),d=t(76),c=t(79),u=t(75);e.default=function(n){return function(e){return function(t){function i(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={loaded:!1,navs:n.props.routes.filter(function(n){return n.navable})},n.navTo=function(e){n.props.history.push(e)},n.handleNavClick=function(e){return function(t){n.props.location.pathname!==e&&(n.setState({loaded:!1}),setTimeout(function(){n.navTo(e)},400))}},n}return r(i,t),i.prototype.componentDidMount=function(){var n=this;setTimeout(function(){n.setState(function(){return{loaded:!0}})},0)},i.prototype.render=function(){var t=this,i=this.state.loaded,r=this.props,h=n.screenInfo;return a.createElement(s.I18n,{ns:"translations"},function(s,f){f.i18n;return a.createElement(u.SlideIn.vertical,{slideIn:i},a.createElement(l.ScreenDiv,null,a.createElement(c.default,{slideIn:i,currentPath:r.location.pathname,onNav:t.handleNavClick,navs:t.state.navs}),h&&a.createElement(l.ScreenTitleContainer,null,a.createElement(d.ScreenTitle,null,s(h.title)),a.createElement(d.ScreenSubTitle,null,s(h.subtitle))),a.createElement(e,o({},n,{loaded:i}))))})},i}(a.Component)}}},79:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),r=t(74),o=t(75);e.default=function(n){var e=n.navs,t=n.onNav,a=n.currentPath,s=n.slideIn;return i.createElement(r.SlideNavs,null,e.map(function(n,e){return i.createElement(o.SlideOut.vertical,{slideOut:!s,index:e,key:n.path},i.createElement(r.SlideNav,{onClick:function(e){t(n.path)(e)},active:a===n.path}))}))}},83:function(n,e,t){"use strict";var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},function(n,e){function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});Object.defineProperty(e,"__esModule",{value:!0});var o=t(0),a=t(74),s=t(84),l=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.state={loaded:!1},e}return r(e,n),e.prototype.componentDidMount=function(){var n=this;setTimeout(function(){n.setState({loaded:!0})},0)},e.prototype.componentWillUnmount=function(){this.setState({loaded:!1})},e.prototype.render=function(){return console.log(this.state.loaded),o.createElement(a.HomepageWidgets,null,o.createElement(a.HomepageWidget,{primary:!0},o.createElement(s.default,null)),o.createElement(a.HomepageWidget,null,o.createElement(s.default,null)))},e}(o.Component);e.default=l},84:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),r=t(74),o=[0,60,120,180,240,300];e.default=function(n){return i.createElement(i.Fragment,null,o.map(function(n,e){return i.createElement(r.Rect,{index:e,deg:n+30,key:n})}))}},85:function(n,e,t){"use strict";var i=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(22);e.Download=o.default.a(r||(r=i(["\n  color: ",";\n  font-size: 1rem;\n"],["\n  color: ",";\n  font-size: 1rem;\n"])),function(n){return n.theme.colors.plain}),e.remain=!1}});