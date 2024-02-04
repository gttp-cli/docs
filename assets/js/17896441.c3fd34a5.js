(self.webpackChunkgttp_documentation=self.webpackChunkgttp_documentation||[]).push([[752],{3920:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>qt});var s=n(5508),a=n(7737),o=n(7676),c=n(8776);const i=s.createContext(null);function l(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,c.jsx)(i.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(i);if(null===e)throw new o.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,c.jsx)(a.U7,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(5880),m=n(1672),h=n(4564),p=n(7172);function f(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,c.jsxs)(p.c,{className:(0,u.c)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,c.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,c.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,c.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,c.jsx)(f,{...t,subLabel:(0,c.jsx)(h.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,c.jsx)(f,{...n,subLabel:(0,c.jsx)(h.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=r();return(0,c.jsx)(x,{previous:e.previous,next:e.next})}var b=n(2252),j=n(3672),v=n(9008),N=n(6392),C=n(2184);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,c.jsx)(h.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,c.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,c.jsx)(h.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,c.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function y(e){const t=L[e.versionMetadata.banner];return(0,c.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,c.jsx)(h.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,c.jsx)("b",{children:(0,c.jsx)(p.c,{to:n,onClick:s,children:(0,c.jsx)(h.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,b.c)(),{pluginId:a}=(0,j.UF)({failfast:!0}),{savePreferredVersionName:o}=(0,N.iy)(a),{latestDocSuggestion:i,latestVersionSuggestion:l}=(0,j.i8)(a),r=i??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,c.jsxs)("div",{className:(0,u.c)(t,v.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,c.jsx)("div",{children:(0,c.jsx)(y,{siteTitle:s,versionMetadata:n})}),(0,c.jsx)("div",{className:"margin-top--md",children:(0,c.jsx)(k,{versionLabel:l.label,to:r.path,onClick:()=>o(l.name)})})]})}function B(e){let{className:t}=e;const n=(0,C.E)();return n.banner?(0,c.jsx)(_,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,C.E)();return n.badge?(0,c.jsx)("span",{className:(0,u.c)(t,v.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(h.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,c.jsx)(h.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,c.jsx)("b",{children:(0,c.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function E(e){let{lastUpdatedBy:t}=e;return(0,c.jsx)(h.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,c.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,c.jsxs)("span",{className:v.W.common.lastUpdated,children:[(0,c.jsx)(h.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,c.jsx)(T,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,c.jsx)(E,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const H={iconEdit:"iconEdit_XstY"};function M(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.c)(H.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function U(e){let{editUrl:t}=e;return(0,c.jsxs)(p.c,{to:t,className:v.W.common.editThisPage,children:[(0,c.jsx)(M,{}),(0,c.jsx)(h.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const I={tag:"tag_Srg7",tagRegular:"tagRegular_mD7n",tagWithCount:"tagWithCount_igET"};function S(e){let{permalink:t,label:n,count:s}=e;return(0,c.jsxs)(p.c,{href:t,className:(0,u.c)(I.tag,s?I.tagWithCount:I.tagRegular),children:[n,s&&(0,c.jsx)("span",{children:s})]})}const W={tags:"tags_jQrT",tag:"tag_JDSN"};function R(e){let{tags:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(h.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,u.c)(W.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,c.jsx)("li",{className:W.tag,children:(0,c.jsx)(S,{label:t,permalink:n})},n)}))})]})}const z={lastUpdated:"lastUpdated_kRUi"};function V(e){return(0,c.jsx)("div",{className:(0,u.c)(v.W.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,c.jsx)("div",{className:"col",children:(0,c.jsx)(R,{...e})})})}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,c.jsxs)("div",{className:(0,u.c)(v.W.docs.docFooterEditMetaRow,"row"),children:[(0,c.jsx)("div",{className:"col",children:t&&(0,c.jsx)(U,{editUrl:t})}),(0,c.jsx)("div",{className:(0,u.c)("col",z.lastUpdated),children:(n||s)&&(0,c.jsx)(A,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function D(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,i=o.length>0,l=!!(t||n||a);return i||l?(0,c.jsxs)("footer",{className:(0,u.c)(v.W.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,c.jsx)(V,{tags:o}),l&&(0,c.jsx)(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var P=n(3160),$=n(5456);function F(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function q(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function G(e){const t=e.getBoundingClientRect();return t.top===t.bottom?G(e.parentNode):t}function Y(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>G(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(G(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function Q(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,$.y)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function X(e){const t=(0,s.useRef)(void 0),n=Q();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),l=Y(i,{anchorTopOffset:n.current}),r=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function Z(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,c.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,c.jsxs)("li",{children:[(0,c.jsx)(p.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,c.jsx)(Z,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const J=s.memo(Z);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:l,...r}=e;const d=(0,$.y)(),u=i??d.tableOfContents.minHeadingLevel,m=l??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>q({toc:F(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return X((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,c.jsx)(J,{toc:h,className:n,linkClassName:a,...r})}const ee={tocCollapsibleButton:"tocCollapsibleButton_LD_l",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_W4Ml"};function te(e){let{collapsed:t,...n}=e;return(0,c.jsx)("button",{type:"button",...n,className:(0,u.c)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,c.jsx)(h.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_nT4N",tocCollapsibleContent:"tocCollapsibleContent_Dl_c",tocCollapsibleExpanded:"tocCollapsibleExpanded_uxhl"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:i}=(0,P.a)({initialState:!0});return(0,c.jsxs)("div",{className:(0,u.c)(ne.tocCollapsible,!o&&ne.tocCollapsibleExpanded,n),children:[(0,c.jsx)(te,{collapsed:o,onClick:i}),(0,c.jsx)(P.U,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:o,children:(0,c.jsx)(K,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_j8CO"};function oe(){const{toc:e,frontMatter:t}=r();return(0,c.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.c)(v.W.docs.docTocMobile,ae.tocMobile)})}const ce={tableOfContents:"tableOfContents_L0AS",docItemContainer:"docItemContainer_UUs8"},ie="table-of-contents__link toc-highlight",le="table-of-contents__link--active";function re(e){let{className:t,...n}=e;return(0,c.jsx)("div",{className:(0,u.c)(ce.tableOfContents,"thin-scrollbar",t),children:(0,c.jsx)(K,{...n,linkClassName:ie,linkActiveClassName:le})})}function de(){const{toc:e,frontMatter:t}=r();return(0,c.jsx)(re,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.W.docs.docTocDesktop})}var ue=n(9580),me=n(1232),he=n(4859),pe=n(7880),fe=n(8464);function xe(){const{prism:e}=(0,$.y)(),{colorMode:t}=(0,fe.U)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var ge=n(4400),be=n.n(ge);const je=/title=(?<quote>["'])(?<title>.*?)\1/,ve=/\{(?<range>[\d,-]+)\}/,Ne={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Ce={...Ne,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Le=Object.keys(Ne);function ye(e,t){const n=e.map((e=>{const{start:n,end:s}=Ce[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function ke(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&ve.test(o)){const e=o.match(ve).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=be()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return ye(["js","jsBlock"],t);case"jsx":case"tsx":return ye(["js","jsBlock","jsx"],t);case"html":return ye(["js","jsBlock","html"],t);case"python":case"py":case"bash":return ye(["bash"],t);case"markdown":case"md":return ye(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return ye(["tex"],t);case"lua":case"haskell":case"sql":return ye(["lua"],t);case"wasm":return ye(["wasm"],t);case"vb":case"vba":case"visual-basic":return ye(["vb","rem"],t);case"vbnet":return ye(["vbnet","rem"],t);case"batch":return ye(["rem"],t);case"basic":return ye(["rem","f90"],t);case"fsharp":return ye(["js","ml"],t);case"ocaml":case"sml":return ye(["ml"],t);case"fortran":return ye(["f90"],t);case"cobol":return ye(["cobol"],t);default:return ye(Le,t)}}(s,a),i=n.split("\n"),l=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?l[r[t]].range+=`${h},`:d[t]?l[d[t]].start=h:u[t]&&(l[u[t]].range+=`${l[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;be()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const _e={codeBlockContainer:"codeBlockContainer_LbuK"};function Be(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(xe());return(0,c.jsx)(t,{...n,style:s,className:(0,u.c)(n.className,_e.codeBlockContainer,v.W.common.codeBlock)})}const we={codeBlockContent:"codeBlockContent_SXi1",codeBlockTitle:"codeBlockTitle_DTqf",codeBlock:"codeBlock_F1OL",codeBlockStandalone:"codeBlockStandalone_OAsC",codeBlockLines:"codeBlockLines_qDuC",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_Y7O1",buttonGroup:"buttonGroup_fNeV"};function Te(e){let{children:t,className:n}=e;return(0,c.jsx)(Be,{as:"pre",tabIndex:0,className:(0,u.c)(we.codeBlockStandalone,"thin-scrollbar",n),children:(0,c.jsx)("code",{className:we.codeBlockLines,children:t})})}const Ee={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ae(e,t){const[n,a]=(0,s.useState)(),c=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=Ee);const a=(0,o.yA)(t),c=(0,o.Mh)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,c),()=>t.disconnect()}),[e,a,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var He=n(7548);const Me={codeLine:"codeLine_Q4IX",codeLineNumber:"codeLineNumber_A2A1",codeLineContent:"codeLineContent_DQpL"};function Ue(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,u.c)(n,s&&Me.codeLine)}),l=t.map(((e,t)=>(0,c.jsx)("span",{...o({token:e,key:t})},t)));return(0,c.jsxs)("span",{...i,children:[s?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:Me.codeLineNumber}),(0,c.jsx)("span",{className:Me.codeLineContent,children:l})]}):l,(0,c.jsx)("br",{})]})}function Ie(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Se(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const We={copyButtonCopied:"copyButtonCopied_Gcsa",copyButtonIcons:"copyButtonIcons_nYhB",copyButtonIcon:"copyButtonIcon_ky2u",copyButtonSuccessIcon:"copyButtonSuccessIcon_fAqS"};function Re(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(o.removeAllRanges(),o.addRange(c)),a&&a.focus()}(t),o(!0),i.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,c.jsx)("button",{type:"button","aria-label":a?(0,h.G)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.G)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.G)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.c)("clean-btn",n,We.copyButton,a&&We.copyButtonCopied),onClick:l,children:(0,c.jsxs)("span",{className:We.copyButtonIcons,"aria-hidden":"true",children:[(0,c.jsx)(Ie,{className:We.copyButtonIcon}),(0,c.jsx)(Se,{className:We.copyButtonSuccessIcon})]})})}function ze(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const Ve={wordWrapButtonIcon:"wordWrapButtonIcon_JyYM",wordWrapButtonEnabled:"wordWrapButtonEnabled_USgO"};function Oe(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,h.G)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.jsx)("button",{type:"button",onClick:n,className:(0,u.c)("clean-btn",t,s&&Ve.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,c.jsx)(ze,{className:Ve.wordWrapButtonIcon,"aria-hidden":"true"})})}function De(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:i,language:l}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,$.y)(),m=function(e){return e?.toLowerCase()}(l??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),h=xe(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Ae(o,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),f=function(e){return e?.match(je)?.groups.title??""}(a)||o,{lineClassNames:x,code:g}=ke(t,{metastring:a,language:m,magicComments:d}),b=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,c.jsxs)(Be,{as:"div",className:(0,u.c)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[f&&(0,c.jsx)("div",{className:we.codeBlockTitle,children:f}),(0,c.jsxs)("div",{className:we.codeBlockContent,children:[(0,c.jsx)(He.gl,{theme:h,code:g,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,c.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.c)(t,we.codeBlock,"thin-scrollbar"),style:n,children:(0,c.jsx)("code",{className:(0,u.c)(we.codeBlockLines,b&&we.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,c.jsx)(Ue,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:b},t)))})})}}),(0,c.jsxs)("div",{className:we.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,c.jsx)(Oe,{className:we.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,c.jsx)(Re,{className:we.codeButton,code:g})]})]})]})}function Pe(e){let{children:t,...n}=e;const a=(0,pe.c)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof o?De:Te;return(0,c.jsx)(i,{...n,children:o},String(a))}function $e(e){return(0,c.jsx)("code",{...e})}var Fe=n(4160);const qe={details:"details_v_Gn",isBrowser:"isBrowser_yP0x",collapsibleContent:"collapsibleContent_kDpV"};function Ge(e){return!!e&&("SUMMARY"===e.tagName||Ge(e.parentElement))}function Ye(e,t){return!!e&&(e===t||Ye(e.parentElement,t))}function Qe(e){let{summary:t,children:n,...a}=e;(0,Fe.c)().collectAnchor(a.id);const o=(0,pe.c)(),i=(0,s.useRef)(null),{collapsed:l,setCollapsed:r}=(0,P.a)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,c.jsx)("summary",{children:t??"Details"});return(0,c.jsxs)("details",{...a,ref:i,open:d,"data-collapsed":l,className:(0,u.c)(qe.details,o&&qe.isBrowser,a.className),onMouseDown:e=>{Ge(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ge(t)&&Ye(t,i.current)&&(e.preventDefault(),l?(r(!1),m(!0)):r(!0))},children:[h,(0,c.jsx)(P.U,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),m(!e)},children:(0,c.jsx)("div",{className:qe.collapsibleContent,children:n})})]})}const Xe={details:"details_VMZs"},Ze="alert alert--info";function Je(e){let{...t}=e;return(0,c.jsx)(Qe,{...t,className:(0,u.c)(Ze,Xe.details,t.className)})}function Ke(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,c.jsx)(c.Fragment,{children:t.filter((e=>e!==n))});return(0,c.jsx)(Je,{...e,summary:n,children:a})}function et(e){return(0,c.jsx)(ue.c,{...e})}const tt={containsTaskList:"containsTaskList_gKFQ"};function nt(e){if(void 0!==e)return(0,u.c)(e,e?.includes("contains-task-list")&&tt.containsTaskList)}const st={img:"img_mrfj"};function at(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,c.jsx)(c.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}const ot={admonition:"admonition_wLin",admonitionHeading:"admonitionHeading_oR7S",admonitionIcon:"admonitionIcon_vhse",admonitionContent:"admonitionContent_S3Vd"};function ct(e){let{type:t,className:n,children:s}=e;return(0,c.jsx)("div",{className:(0,u.c)(v.W.common.admonition,v.W.common.admonitionType(t),ot.admonition,n),children:s})}function it(e){let{icon:t,title:n}=e;return(0,c.jsxs)("div",{className:ot.admonitionHeading,children:[(0,c.jsx)("span",{className:ot.admonitionIcon,children:t}),n]})}function lt(e){let{children:t}=e;return t?(0,c.jsx)("div",{className:ot.admonitionContent,children:t}):null}function rt(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,c.jsxs)(ct,{type:t,className:o,children:[(0,c.jsx)(it,{title:s,icon:n}),(0,c.jsx)(lt,{children:a})]})}function dt(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const ut={icon:(0,c.jsx)(dt,{}),title:(0,c.jsx)(h.c,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function mt(e){return(0,c.jsx)(rt,{...ut,...e,className:(0,u.c)("alert alert--secondary",e.className),children:e.children})}function ht(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const pt={icon:(0,c.jsx)(ht,{}),title:(0,c.jsx)(h.c,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function ft(e){return(0,c.jsx)(rt,{...pt,...e,className:(0,u.c)("alert alert--success",e.className),children:e.children})}function xt(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const gt={icon:(0,c.jsx)(xt,{}),title:(0,c.jsx)(h.c,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function bt(e){return(0,c.jsx)(rt,{...gt,...e,className:(0,u.c)("alert alert--info",e.className),children:e.children})}function jt(e){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const vt={icon:(0,c.jsx)(jt,{}),title:(0,c.jsx)(h.c,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Nt(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Ct={icon:(0,c.jsx)(Nt,{}),title:(0,c.jsx)(h.c,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Lt={icon:(0,c.jsx)(jt,{}),title:(0,c.jsx)(h.c,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const yt={...{note:mt,tip:ft,info:bt,warning:function(e){return(0,c.jsx)(rt,{...vt,...e,className:(0,u.c)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,c.jsx)(rt,{...Ct,...e,className:(0,u.c)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(mt,{title:"secondary",...e}),important:e=>(0,c.jsx)(bt,{title:"important",...e}),success:e=>(0,c.jsx)(ft,{title:"success",...e}),caution:function(e){return(0,c.jsx)(rt,{...Lt,...e,className:(0,u.c)("alert alert--warning",e.className),children:e.children})}}};function kt(e){const t=at(e),n=(s=t.type,yt[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),yt.info));var s;return(0,c.jsx)(n,{...t})}const _t={Head:he.c,details:Ke,Details:Ke,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,c.jsx)($e,{...e}):(0,c.jsx)(Pe,{...e})},a:function(e){return(0,c.jsx)(p.c,{...e})},pre:function(e){return(0,c.jsx)(c.Fragment,{children:e.children})},ul:function(e){return(0,c.jsx)("ul",{...e,className:nt(e.className)})},li:function(e){return(0,Fe.c)().collectAnchor(e.id),(0,c.jsx)("li",{...e})},img:function(e){return(0,c.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.c)(t,st.img))});var t},h1:e=>(0,c.jsx)(et,{as:"h1",...e}),h2:e=>(0,c.jsx)(et,{as:"h2",...e}),h3:e=>(0,c.jsx)(et,{as:"h3",...e}),h4:e=>(0,c.jsx)(et,{as:"h4",...e}),h5:e=>(0,c.jsx)(et,{as:"h5",...e}),h6:e=>(0,c.jsx)(et,{as:"h6",...e}),admonition:kt,mermaid:()=>null};function Bt(e){let{children:t}=e;return(0,c.jsx)(me.I,{components:_t,children:t})}function wt(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,c.jsxs)("div",{className:(0,u.c)(v.W.docs.docMarkdown,"markdown"),children:[n&&(0,c.jsx)("header",{children:(0,c.jsx)(ue.c,{as:"h1",children:n})}),(0,c.jsx)(Bt,{children:t})]})}var Tt=n(5708),Et=n(4488),At=n(4200);function Ht(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Mt={breadcrumbHomeIcon:"breadcrumbHomeIcon_YIzv"};function Ut(){const e=(0,At.c)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(p.c,{"aria-label":(0,h.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(Ht,{className:Mt.breadcrumbHomeIcon})})})}const It={breadcrumbsContainer:"breadcrumbsContainer_CCad"};function St(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,c.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,c.jsx)(p.c,{className:a,href:n,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:a,children:t})}function Wt(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,c.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.c)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Rt(){const e=(0,Tt.js)(),t=(0,Et.Y5)();return e?(0,c.jsx)("nav",{className:(0,u.c)(v.W.docs.docBreadcrumbs,It.breadcrumbsContainer),"aria-label":(0,h.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(Ut,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(Wt,{active:s,index:n,addMicrodata:!!a,children:(0,c.jsx)(St,{href:a,isLast:s,children:t.label})},n)}))]})}):null}function zt(){return(0,c.jsx)(h.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Vt(){return(0,c.jsx)(h.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Ot(){return(0,c.jsx)(he.c,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Dt(e){let{className:t}=e;return(0,c.jsx)(kt,{type:"caution",title:(0,c.jsx)(zt,{}),className:(0,u.c)(t,v.W.common.unlistedBanner),children:(0,c.jsx)(Vt,{})})}function Pt(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Ot,{}),(0,c.jsx)(Dt,{...e})]})}const $t={docItemContainer:"docItemContainer_IfWq",docItemCol:"docItemCol_E3S2"};function Ft(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.U)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,c.jsx)(oe,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,c.jsx)(de,{})}}(),{metadata:{unlisted:s}}=r();return(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:(0,u.c)("col",!n.hidden&&$t.docItemCol),children:[s&&(0,c.jsx)(Pt,{}),(0,c.jsx)(B,{}),(0,c.jsxs)("div",{className:$t.docItemContainer,children:[(0,c.jsxs)("article",{children:[(0,c.jsx)(Rt,{}),(0,c.jsx)(w,{}),n.mobile,(0,c.jsx)(wt,{children:t}),(0,c.jsx)(D,{})]}),(0,c.jsx)(g,{})]})]}),n.desktop&&(0,c.jsx)("div",{className:"col col--3",children:n.desktop})]})}function qt(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,c.jsx)(l,{content:e.content,children:(0,c.jsxs)(a.cr,{className:t,children:[(0,c.jsx)(d,{}),(0,c.jsx)(Ft,{children:(0,c.jsx)(n,{})})]})})}},4400:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1232:(e,t,n)=>{"use strict";n.d(t,{I:()=>i,M:()=>c});var s=n(5508);const a={},o=s.createContext(a);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);