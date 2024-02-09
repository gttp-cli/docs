"use strict";(self.webpackChunkgttp_documentation=self.webpackChunkgttp_documentation||[]).push([[332],{1576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(8776),i=t(1232);const s={},r="Number",o={id:"syntax/types/number",title:"Number",description:"The number type can be used to define variables that accept numeric input.",source:"@site/docs/syntax/types/number.md",sourceDirName:"syntax/types",slug:"/syntax/types/number",permalink:"/syntax/types/number",draft:!1,unlisted:!1,editUrl:"https://github.com/gttp-cli/gttp/docs/syntax/types/number.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Multiselect",permalink:"/syntax/types/multiselect"},next:{title:"Select",permalink:"/syntax/types/select"}},l={},c=[{value:"Basic",id:"basic",level:2},{value:"Validation",id:"validation",level:2},{value:"Minimum",id:"minimum",level:3},{value:"Maximum",id:"maximum",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"number",children:"Number"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"number"})," type can be used to define variables that accept numeric input."]}),"\n",(0,a.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,a.jsxs)(n.p,{children:["Basic syntax for the ",(0,a.jsx)(n.code,{children:"number"})," type:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"variables:\n  - name: Age\n    type: number # Set the type to number\n    description: Age of the person\ntemplate: |-\n  You are {{ .Age }} years old.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,a.jsx)(n.h3,{id:"minimum",children:"Minimum"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"min"})," property to define a minimum value for validation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"variables:\n  - name: Age\n    type: number\n    min: 18 # only allow ages 18 and above\n    description: Age of the person\ntemplate: |-\n  You are {{ .Age }} years old.\n"})}),"\n",(0,a.jsx)(n.h3,{id:"maximum",children:"Maximum"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"max"})," property to define a maximum value for validation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"variables:\n  - name: Age\n    type: number\n    max: 99 # only allow ages 99 and below\n    description: Age of the person\ntemplate: |-\n  You are {{ .Age }} years old.\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1232:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var a=t(5508);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);