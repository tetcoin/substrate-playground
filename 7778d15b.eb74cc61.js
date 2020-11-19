(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(83)),o={id:"cicd",title:"CI/CD"},c={unversionedId:"building/cicd",id:"building/cicd",isDocsHomePage:!1,title:"CI/CD",description:"substrate-playground follows a Continuous Integration/Continuous Delivery approach",source:"@site/docs/building/cicd.md",slug:"/building/cicd",permalink:"/substrate-playground/docs/building/cicd",editUrl:"https://github.com/paritytech/substrate-playground/edit/master/website/docs/building/cicd.md",version:"current",sidebar:"someSidebar",previous:{title:"Build",permalink:"/substrate-playground/docs/building/build"},next:{title:"Deployment",permalink:"/substrate-playground/docs/operating/deployment"}},p=[{value:"Deployments",id:"deployments",children:[{value:"Playground",id:"playground",children:[]},{value:"Base template images",id:"base-template-images",children:[]},{value:"Template images",id:"template-images",children:[]}]},{value:"Github configuration",id:"github-configuration",children:[{value:"Secrets",id:"secrets",children:[]},{value:"Matrix messages",id:"matrix-messages",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"substrate-playground")," follows a Continuous Integration/Continuous Delivery approach"),Object(i.b)("h2",{id:"deployments"},"Deployments"),Object(i.b)("h3",{id:"playground"},"Playground"),Object(i.b)("p",null,"The main branch is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/tree/develop"}),"develop"),". Changes can be merged only via PR.\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/tree/develop"}),"develop")," (reflected by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://playground-staging.substrate.dev/"}),"staging"),") and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/substrate-playground/tree/master"}),"master")," (reflected by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://playground.substrate.dev/"}),"production"),") are continuously deployed on their respective environment."),Object(i.b)("p",null,"Once manually approved on the staging environment, changes are promoted to master."),Object(i.b)("h3",{id:"base-template-images"},"Base template images"),Object(i.b)("h3",{id:"template-images"},"Template images"),Object(i.b)("h2",{id:"github-configuration"},"Github configuration"),Object(i.b)("h3",{id:"secrets"},"Secrets"),Object(i.b)("p",null,"A number of ",Object(i.b)("inlineCode",{parentName:"p"},"secrets")," must be defined:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"GCLOUD_KEY")," is the base64 of the gcloud service account JSON file\nGet the JSON file from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/iam-admin/serviceaccounts?authuser=1&hl=fr&project=substrateplayground-252112&folder=&organizationId=&supportedpurview=project"}),"https://console.cloud.google.com/iam-admin/serviceaccounts?authuser=1&hl=fr&project=substrateplayground-252112&folder=&organizationId=&supportedpurview=project"),"\n... -> Actions -> Create Key\nthen ",Object(i.b)("inlineCode",{parentName:"p"},"cat substrateplayground-XXX.json | base64"),"\n(see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/GoogleCloudPlatform/github-actions/blob/master/setup-gcloud/README.md#inputs"}),"https://github.com/GoogleCloudPlatform/github-actions/blob/master/setup-gcloud/README.md#inputs"),")"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DOCKER_USERNAME")," and ",Object(i.b)("inlineCode",{parentName:"p"},"DOCKER_PASSWORD")," pointing to a valid dockerhub account having acccess to paritytech organization"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MATRIX_ACCESS_TOKEN")," and ",Object(i.b)("inlineCode",{parentName:"p"},"MATRIX_ROOM_ID")," pointing to a specific Matrix room"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PAT_TOKEN")," a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.github.com/en/actions/reference/events-that-trigger-workflows#triggering-new-workflows-using-a-personal-access-token"}),"token")," with ",Object(i.b)("inlineCode",{parentName:"p"},"repo")," access"),Object(i.b)("h3",{id:"matrix-messages"},"Matrix messages"),Object(i.b)("h4",{id:"create-a-new-user"},"Create a new user"),Object(i.b)("p",null,"Go to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://riot.im/app/#/register"}),"https://riot.im/app/#/register")," (advanced, ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://matrix.parity.io"}),"https://matrix.parity.io"),")\nUsername: ",Object(i.b)("inlineCode",{parentName:"p"},"playground-bot"),"\nEmail: ",Object(i.b)("inlineCode",{parentName:"p"},"julien+playground-bot@parity.io")),Object(i.b)("p",null,"Then retrieve ",Object(i.b)("inlineCode",{parentName:"p"},"access_token")," via ",Object(i.b)("inlineCode",{parentName:"p"},'curl -XPOST -d \'{"type":"m.login.password", "user":"playground-bot", "password":"PASSWORD"}\' "https://matrix.parity.io:8448/_matrix/client/r0/login"')," and use it as a Github repository secret."))}l.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);