(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{lQLR:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("+I+c"),i=(a("mXGw"),a("/FXl")),o=a("TjRS"),l=(a("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useAnalyticsApi.mdx"}});var b={_frontmatter:l},s=o.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"useAnalyticsApi"),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Use this hook to load and access the ",Object(i.b)("a",{parentName:"p",href:"https://ga-dev-tools.appspot.com/embed-api/"},"Google Analytics Embed API")," (",Object(i.b)("inlineCode",{parentName:"p"},"gapi"),")."),Object(i.b)("p",null,"The hook will run the ",Object(i.b)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started#step-2"},"library loading script from Google"),", grab the API out from ",Object(i.b)("inlineCode",{parentName:"p"},"window.gapi")," (where Google loads it to), and store it as a singleton.\nIt will reference the singleton thereafter, keeping ",Object(i.b)("inlineCode",{parentName:"p"},"window")," interaction to a minimum."),Object(i.b)("p",null,"State changes that happen outside of React (such as API readiness and ",Object(i.b)("a",{parentName:"p",href:"/react-use-analytics-api/useAuthorize"},"authorization"),") are synchronized across all hooks via a singleton emitter effect. This allows you to use the hook in multiple places while keeping them all in sync."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { useAnalyticsApi } from "react-use-analytics-api";\n')),Object(i.b)("p",null,"Then in your function component:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { ready, gapi, authorized, error } = useAnalyticsApi();\n")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"ready")," is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"gapi")," object will be set to the loaded and ready-to-use ",Object(i.b)("a",{parentName:"p",href:"https://ga-dev-tools.appspot.com/embed-api/"},"Google Analytics Embed API"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"gapi")," object will be ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," until it is ready to use."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"authorized")," property will be ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when the user is authorized, ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise. If you authorize via the ",Object(i.b)("a",{parentName:"p",href:"/react-use-analytics-api/useAuthorize"},Object(i.b)("inlineCode",{parentName:"a"},"useAuthorize"))," hook, this property will be updated for all ",Object(i.b)("inlineCode",{parentName:"p"},"useAnalyticsApi")," hooks. Otherwise, it will be set to the last known value when the hook was instantiated."),Object(i.b)("p",null,"If something goes wrong, ",Object(i.b)("inlineCode",{parentName:"p"},"error")," will tell you what happened."),Object(i.b)("h3",{id:"using-the-api-itself"},"Using The API Itself"),Object(i.b)("p",null,"Changes via the ",Object(i.b)("inlineCode",{parentName:"p"},"gapi")," API happen outside of the React ecosystem and often need to occur after rendering is completed.\nFor instance, when ",Object(i.b)("a",{parentName:"p",href:"/react-use-analytics-api/useDataChart"},"rendering a chart")," via the API, content is injected directly into a DOM element. That DOM element must be fully rendered or else you'll get an error."),Object(i.b)("p",null,"Therefore, any time you interact with ",Object(i.b)("inlineCode",{parentName:"p"},"gapi"),", it should be ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"treated as a side-effect"),"."),Object(i.b)("p",null,"This library also provides helper hooks for the API's ",Object(i.b)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference"},"built-in components"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/react-use-analytics-api/useAuthorize"},"useAuthorize")," - ",Object(i.b)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth"},"Authorize")," the user"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/react-use-analytics-api/useViewSelector"},"useViewSelector")," - Render an Analytics ",Object(i.b)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector"},"ViewSelector")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/react-use-analytics-api/useDataChart"},"useDataChart")," - Render a ",Object(i.b)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart"},"DataChart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/react-use-analytics-api/useData"},"useData")," - Query ",Object(i.b)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#data"},"data")," from the Google Analytics Core Reporting API and get back the results"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/react-use-analytics-api/useSignOut"},"useSignOut")," - Sign the user out")),Object(i.b)("p",null,"If you need to do anything with the API outside of these operations, be sure to ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"use an effect")," and do cleanup where appropriate."),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useAnalyticsApi() => { ready: boolean; gapi?: GoogleAnalyticsEmbedAPI; authorized: boolean; error?: Error; }")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("p",null,"The hook takes no arguments."),Object(i.b)("h3",{id:"return"},"Return"),Object(i.b)("p",null,"The hook returns an object containing:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ready"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")," when the Google Analytics Embed API is ready to use, ",Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"gapi"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://developers.google.com/analytics/devguides/reporting/embed/v1"},"GoogleAnalyticsEmbedAPI")," ","|"," undefined"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("a",{parentName:"td",href:"https://ga-dev-tools.appspot.com/embed-api/"},"Google Analytics Embed API"),". This will be ",Object(i.b)("inlineCode",{parentName:"td"},"undefined")," until the analytics API is fully loaded and ready.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"authorized"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")," if the user is authorized, ",Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise. If you authorize via the ",Object(i.b)("a",{parentName:"td",href:"/react-use-analytics-api/useAuthorize"},Object(i.b)("inlineCode",{parentName:"a"},"useAuthorize"))," hook, this property will be updated for all ",Object(i.b)("inlineCode",{parentName:"td"},"useAnalyticsApi")," hooks. Otherwise, it will be set to the last known value when the hook was instantiated.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"error"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"},"Error")," ","|"," undefined"),Object(i.b)("td",{parentName:"tr",align:null},"When not ",Object(i.b)("inlineCode",{parentName:"td"},"undefined"),", this indicates an error loading the API.")))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"The following demonstrates loading the Google Analytics Embed API and showing whether the user is authorized."),Object(i.b)("p",null,"See the ",Object(i.b)("a",{parentName:"p",href:"/react-use-analytics-api/useAuthorize#example"},"useAuthorize hook example")," to test logging in and out, and see the ",Object(i.b)("a",{parentName:"p",href:"/react-use-analytics-api/useDataChart#example"},"useDataChart hook example")," for a full example of everything this library offers."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { useAnalyticsApi } from "react-use-analytics-api";\n\nexport function UseAnalyticsApiExample() {\n  const { ready, gapi, authorized, error } = useAnalyticsApi();\n  if (error) {\n    console.error(error);\n  }\n  return (\n    <div>\n      {!error &&\n        (ready && !!gapi ? (\n          <>\n            <div>✔️ Loaded and ready to use!</div>\n            {authorized && <div>☀️ Logged into Google Analytics!</div>}\n            {!authorized && <div>🔐 Not logged into Google Analytics</div>}\n          </>\n        ) : (\n          <div>⌛ Loading...</div>\n        ))}\n      {error && (\n        <div>\n          <div style={{ fontSize: "120%" }}>❌ Error</div>\n          <hr style={{ border: 0, borderTop: "solid 1px rosybrown" }} />\n          <p>{error.toString()}</p>\n          <p>See the console for more information.</p>\n        </div>\n      )}\n    </div>\n  );\n}\n')))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useAnalyticsApi.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-analytics-api-mdx-6a2f845b1a7ebb4a80e3.js.map