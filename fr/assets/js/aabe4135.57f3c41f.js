"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[247],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(m,i(i({ref:t},g),{},{components:a})):n.createElement(m,i({ref:t},g))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(9668),r=(a(6540),a(5680));const o={title:"Vue d'ensemble",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:3},i=void 0,p={unversionedId:"private-dns/api/overview",id:"private-dns/api/overview",title:"Vue d'ensemble",description:"\x3c!--",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/private-dns/api/overview.md",sourceDirName:"private-dns/api",slug:"/private-dns/api/overview",permalink:"/KnowledgeBaseDNS/fr/private-dns/api/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Vue d'ensemble",sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"Vue d'ensemble",permalink:"/KnowledgeBaseDNS/fr/private-dns/overview"},next:{title:"Reference",permalink:"/KnowledgeBaseDNS/fr/private-dns/api/reference"}},l={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Generate Access token",id:"generate-access-token",level:3},{value:"Example request",id:"example-request",level:4},{value:"Example response",id:"example-response",level:4},{value:"Generate Access Token from Refresh Token",id:"generate-access-token-from-refresh-token",level:3},{value:"Example request",id:"example-request-1",level:4},{value:"Example response",id:"example-response-1",level:4},{value:"Revoking a Refresh Token",id:"revoking-a-refresh-token",level:3},{value:"Request Example",id:"request-example",level:4},{value:"Authorization endpoint",id:"authorization-endpoint",level:3},{value:"Accessing API",id:"accessing-api",level:3},{value:"API",id:"api",level:2},{value:"Reference",id:"reference",level:3},{value:"OpenAPI spec",id:"openapi-spec",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Feedback",id:"feedback",level:2}],g={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"AdGuard DNS provides a REST API you can use to integrate your apps with it."),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("h3",{id:"generate-access-token"},"Generate Access token"),(0,r.yg)("p",null,"Make a POST request for the following URL with the given params to generate the ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token"),":"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"username")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Account email")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Account password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"mfa_token"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Two-Factor authentication token (if enabled in account settings)")))),(0,r.yg)("p",null,"In the response, you will get both ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," will expire after some specified seconds (represented by the ",(0,r.yg)("inlineCode",{parentName:"p"},"expires_in")," param in the response). You can regenerate a new ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token")," (Refer: ",(0,r.yg)("inlineCode",{parentName:"p"},"Generate Access Token from Refresh Token"),").")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token")," is permanent. To revoke a ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh_token"),", refer: ",(0,r.yg)("inlineCode",{parentName:"p"},"Revoking a Refresh Token"),"."))),(0,r.yg)("h4",{id:"example-request"},"Example request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'username=user%40adguard.com' \\\n    -d 'password=********' \\\n    -d 'mfa_token=727810'\n")),(0,r.yg)("h4",{id:"example-response"},"Example response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2620978\n}\n')),(0,r.yg)("h3",{id:"generate-access-token-from-refresh-token"},"Generate Access Token from Refresh Token"),(0,r.yg)("p",null,"Access tokens have limited validity. Once it expires, your app will have to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh token")," to request for a new ",(0,r.yg)("inlineCode",{parentName:"p"},"access token"),"."),(0,r.yg)("p",null,"Make the following POST request with the given params to get a new access token:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"refresh_token")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," using which a new access token has to be generated.")))),(0,r.yg)("h4",{id:"example-request-1"},"Example request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,r.yg)("h4",{id:"example-response-1"},"Example response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2627999\n}\n')),(0,r.yg)("h3",{id:"revoking-a-refresh-token"},"Revoking a Refresh Token"),(0,r.yg)("p",null,"To revoke a refresh token, make the following POST request with the given params:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/revoke_token")),(0,r.yg)("h4",{id:"request-example"},"Request Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \\\n    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"refresh_token")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," which is to be revoked")))),(0,r.yg)("h3",{id:"authorization-endpoint"},"Authorization endpoint"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"To access this endpoint, you need to contact us at ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"mailto:devteam@adguard.com"},"devteam@adguard.com")),". Please describe the reason and use cases for this endpoint, as well as provide the redirect URI. Upon approval, you will receive a unique client identifier, which should be used for the ",(0,r.yg)("strong",{parentName:"p"},"client_id")," parameter.")),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"/oapi/v1/oauth_authorize")," endpoint is used to interact with the resource owner and get the authorization to access the protected resource."),(0,r.yg)("p",null,"The service redirects you to AdGuard to authenticate (if you are not already logged in) and then back to your application."),(0,r.yg)("p",null,"The request parameters of the ",(0,r.yg)("strong",{parentName:"p"},"/oapi/v1/oauth_authorize")," endpoint are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"response_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Tells the authorization server which grant to execute")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"client_id")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The ID of the OAuth client that asks for authorization")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"redirect_uri")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Contains a URL. A successful response from this endpoint results in a redirect to this URL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"state")),(0,r.yg)("td",{parentName:"tr",align:"left"},"An opaque value used for security purposes. If this request parameter is set in the request, it is returned to the application as part of the ",(0,r.yg)("strong",{parentName:"td"},"redirect_uri"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"aid")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Affiliate identifier")))),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82\n")),(0,r.yg)("p",null,"To inform the authorization server which grant type to use, the ",(0,r.yg)("strong",{parentName:"p"},"response_type")," request parameter is used as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For the Implicit grant, use ",(0,r.yg)("strong",{parentName:"li"},"response_type=token")," to include an access token.")),(0,r.yg)("p",null,"A successful response is ",(0,r.yg)("strong",{parentName:"p"},"302 Found"),", which triggers a redirect to ",(0,r.yg)("strong",{parentName:"p"},"redirect_uri")," (which is a request parameter). The response parameters are embedded in the fragment component (the part after ",(0,r.yg)("inlineCode",{parentName:"p"},"#"),") of the ",(0,r.yg)("strong",{parentName:"p"},"redirect_uri")," parameter in the ",(0,r.yg)("strong",{parentName:"p"},"Location")," header."),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"HTTP/1.1 302 Found\nLocation: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82\n")),(0,r.yg)("h3",{id:"accessing-api"},"Accessing API"),(0,r.yg)("p",null,"Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Header name should be ",(0,r.yg)("inlineCode",{parentName:"li"},"Authorization")),(0,r.yg)("li",{parentName:"ul"},"Header value should be ",(0,r.yg)("inlineCode",{parentName:"li"},"Bearer {access_token}"))),(0,r.yg)("h2",{id:"api"},"API"),(0,r.yg)("h3",{id:"reference"},"Reference"),(0,r.yg)("p",null,"Please see the methods reference ",(0,r.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/fr/private-dns/api/reference"},"here"),"."),(0,r.yg)("h3",{id:"openapi-spec"},"OpenAPI spec"),(0,r.yg)("p",null,"OpenAPI specification is available at ",(0,r.yg)("a",{parentName:"p",href:"https://api.adguard-dns.io/static/swagger/openapi.json"},"https://api.adguard-dns.io/static/swagger/openapi.json"),"."),(0,r.yg)("p",null,"You can use different tools to view the list of available API methods. For instance, you can open this file in ",(0,r.yg)("a",{parentName:"p",href:"https://editor.swagger.io/"},"https://editor.swagger.io/"),"."),(0,r.yg)("h3",{id:"changelog"},"Changelog"),(0,r.yg)("p",null,"The complete AdGuard DNS API changelog is available on ",(0,r.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/fr/private-dns/api/changelog"},"this page"),"."),(0,r.yg)("h2",{id:"feedback"},"Feedback"),(0,r.yg)("p",null,"If you would like this API to be extended with new methods, please email us to ",(0,r.yg)("inlineCode",{parentName:"p"},"devteam@adguard.com")," and let us know what you would like to be added."))}u.isMDXComponent=!0}}]);