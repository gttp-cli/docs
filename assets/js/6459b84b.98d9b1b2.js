"use strict";(self.webpackChunkgttp_documentation=self.webpackChunkgttp_documentation||[]).push([[280],{2596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>S,default:()=>C,frontMatter:()=>T,metadata:()=>E,toc:()=>_});var r=n(8776),a=n(1232),l=n(5508),s=n(5880),i=n(880),o=n(4752),u=n(9880),c=n(7716),d=n(7964),h=n(3448);function p(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.Uz)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._M)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=m(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,c]=b({queryString:n,groupId:r}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,h.IN)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=o??d;return g({value:e,tabValues:a})?e:null})();(0,u.c)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var x=n(7880);const v={tabList:"tabList_REJG",tabItem:"tabItem_nNd6"};function y(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==a&&(c(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.c)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,r.jsxs)("div",{className:(0,s.c)("tabs-container",v.tabList),children:[(0,r.jsx)(y,{...e,...t}),(0,r.jsx)(j,{...e,...t})]})}function I(e){const t=(0,x.c)();return(0,r.jsx)(w,{...e,children:p(e.children)},String(t))}const k={tabItem:"tabItem_GTcl"};function V(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.c)(k.tabItem,a),hidden:n,children:t})}const T={sidebar_position:1},S="\u2699\ufe0f Installation",E={id:"getting-started/installation",title:"\u2699\ufe0f Installation",description:"There are multiple ways to install gttp on your system.",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/gttp-cli/gttp/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/"},next:{title:"\ud83d\ude80 Run Demo Template",permalink:"/getting-started/run-demo"}},N={},_=[{value:"Install using Go",id:"install-using-go",level:2},{value:"Install Using Web Installer",id:"install-using-web-installer",level:2}];function q(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\ufe0f-installation",children:"\u2699\ufe0f Installation"}),"\n",(0,r.jsxs)(t.p,{children:["There are multiple ways to install ",(0,r.jsx)(t.code,{children:"gttp"})," on your system."]}),"\n",(0,r.jsx)(t.h2,{id:"install-using-go",children:"Install using Go"}),"\n",(0,r.jsxs)(t.p,{children:["If you have ",(0,r.jsx)(t.a,{href:"https://go.dev",children:"Go"})," installed, you can install ",(0,r.jsx)(t.code,{children:"gttp"})," using the following command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"go install github.com/gttp-cli/gttp@latest\n"})}),"\n",(0,r.jsx)(t.h2,{id:"install-using-web-installer",children:"Install Using Web Installer"}),"\n",(0,r.jsxs)(t.p,{children:["You can install ",(0,r.jsx)(t.code,{children:"gttp"})," using ",(0,r.jsx)(t.a,{href:"https://instl.sh",children:"instl"}),".\nUsing instl is the simplest way to install ",(0,r.jsx)(t.code,{children:"gttp"})," on your system."]}),"\n",(0,r.jsx)(t.p,{children:"Just copy the following command and paste it into your terminal:"}),"\n",(0,r.jsxs)(I,{groupId:"os",children:[(0,r.jsx)(V,{value:"macos",label:"macOS",children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"curl -sSL instl.sh/gttp-cli/gttp/macos | bash"})})}),(0,r.jsx)(V,{value:"windows",label:"Windows",children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"iwr instl.sh/gttp-cli/gttp/windows | iex"})})}),(0,r.jsx)(V,{value:"linux",label:"linux",children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"curl -sSL instl.sh/gttp-cli/gttp/linux | bash"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"If you want to take a look at the script before running it, you can open the instl.sh URL in your browser."})})]})}function C(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}},1232:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>s});var r=n(5508);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);