"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83498],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){return function(r){var n=m(r.components);return t.createElement(e,i({},r,{components:n}))}},m=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=m(e.components);return t.createElement(s.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,u=p["".concat(o,".").concat(c)]||p[c]||h[c]||i;return n?t.createElement(u,l(l({ref:r},s),{},{components:n})):t.createElement(u,l({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38442:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var t=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"field-logger",title:"relayFieldLogger",slug:"/api-reference/field-logger/",description:"API reference for the `relayFieldLogger` Environment config option",keywords:["environment","logging","error"]},d=void 0,s={unversionedId:"api-reference/relay-runtime/field-logger",id:"api-reference/relay-runtime/field-logger",title:"relayFieldLogger",description:"API reference for the `relayFieldLogger` Environment config option",source:"@site/docs/api-reference/relay-runtime/field-logger.md",sourceDirName:"api-reference/relay-runtime",slug:"/api-reference/field-logger/",permalink:"/docs/next/api-reference/field-logger/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/relay-runtime/field-logger.md",tags:[],version:"current",frontMatter:{id:"field-logger",title:"relayFieldLogger",slug:"/api-reference/field-logger/",description:"API reference for the `relayFieldLogger` Environment config option",keywords:["environment","logging","error"]},sidebar:"docs",previous:{title:"Store",permalink:"/docs/next/api-reference/store/"},next:{title:"commitMutation",permalink:"/docs/next/api-reference/commit-mutation/"}},p={},m=[{value:"Event Types",id:"event-types",level:2},{value:"Missing Expected Data Log",id:"missing-expected-data-log",level:2},{value:"Missing Expected Data Throw",id:"missing-expected-data-throw",level:2},{value:"Missing Required Field Log",id:"missing-required-field-log",level:2},{value:"Missing Required Field Throw",id:"missing-required-field-throw",level:2},{value:"Relay Resolver Error",id:"relay-resolver-error",level:2}],c={toc:m};function h(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Relay includes a number of features that allow for granular handling of field errors:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/next/guides/required-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@required"))," provides declarative handling of field nullability"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/next/guides/catch-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@catch"))," allows you to explicitly handle field errors"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/next/guides/throw-on-field-error-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@throwOnFieldError"))," lets you treat field errors as exceptions"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/next/guides/relay-resolvers/introduction"},"Relay Resolvers")," coerce thrown exceptions to null, matching the GraphQL spec")),(0,i.mdx)("p",null,"In each of these cases, field errors are handled by Relay. However, it can still be important to track that these errors are occurring in your app, and monitor or resolve them. To enable this, the Relay Environment can be configured with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"relayFieldLogger"),". This logger is a function which is called with events each time Relay handles a field-level error."),(0,i.mdx)("p",null,"Providing a field logger looks something like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},'import {Environment} from "relay-runtime";\n\nconst environment = new Environment({\n    relayFieldLogger: (event) => {\n        switch(event.kind) {\n            case "missing_expected_data.log":\n                // ...\n                break;\n            // ... handle other events\n        }\n    },\n    network: // ...\n    store: // ...\n});\n')),(0,i.mdx)("h2",{id:"event-types"},"Event Types"),(0,i.mdx)("p",null,"The Field Logger currently can receive the following events:"),(0,i.mdx)("h2",{id:"missing-expected-data-log"},"Missing Expected Data Log"),(0,i.mdx)("p",null,"Data which Relay expected to be in the store (because it was requested by the parent query/mutation/subscription) was missing. This can happen due to graph relationship changes observed by other queries/mutations, or imperative updates that don't provide all needed data."),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"../../debugging/why-null/#graph-relationship-change"},"Graph Relationship Changes"),"."),(0,i.mdx)("p",null,"In this case Relay will render with the referenced field as ",(0,i.mdx)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"This may break with the type contract of Relay's generated types.")),(0,i.mdx)("p",null,"To turn this into a hard error for a given fragment/query, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/throw-on-field-error-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@throwOnFieldError"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"export type MissingExpectedDataLogEvent = {\n  +kind: 'missing_expected_data.log',\n  +owner: string,\n  +fieldPath: string,\n};\n")),(0,i.mdx)("h2",{id:"missing-expected-data-throw"},"Missing Expected Data Throw"),(0,i.mdx)("p",null,"Data which Relay expected to be in the store (because it was requested by the parent query/mutation/subscription) was missing. This can happen due to graph relationship changes observed by other queries/mutations, or imperative updates that don't provide all needed data."),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"../../debugging/why-null/#graph-relationship-change"},"Graph Relationship Changes"),"."),(0,i.mdx)("p",null,"This event is called ",(0,i.mdx)("inlineCode",{parentName:"p"},".throw")," because the missing data was encountered in a\nquery/fragment/mutation with ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/throw-on-field-error-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@throwOnFieldError"))),(0,i.mdx)("p",null,"Relay will throw immediately after logging this event. If you wish to\ncustomize the error being thrown, you may throw your own error."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Only throw on this event if ",(0,i.mdx)("inlineCode",{parentName:"p"},"handled")," is false. Errors that have been handled by a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," directive or by making a resolver null will have ",(0,i.mdx)("inlineCode",{parentName:"p"},"handled: true")," and should not trigger a throw.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"export type MissingExpectedDataThrowEvent = {\n  +kind: 'missing_expected_data.throw',\n  +owner: string,\n  +fieldPath: string,\n  +handled: boolean,\n};\n")),(0,i.mdx)("h2",{id:"missing-required-field-log"},"Missing Required Field Log"),(0,i.mdx)("p",null,"A field was marked as ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/guides/required-directive/#action"},"@required(action: LOG)")," but was null or missing in the store."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"export type MissingRequiredFieldLogEvent = {\n  +kind: 'missing_required_field.log',\n  +owner: string,\n  +fieldPath: string,\n};\n")),(0,i.mdx)("h2",{id:"missing-required-field-throw"},"Missing Required Field Throw"),(0,i.mdx)("p",null,"A field was marked as ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/guides/required-directive/#action"},"@required(action: THROW)")," but was null or missing in the* store."),(0,i.mdx)("p",null,"Relay will throw immediately after logging this event. If you wish to customize the error being thrown, you may throw your own error."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Only throw on this event if ",(0,i.mdx)("inlineCode",{parentName:"p"},"handled")," is false. Errors that have been\nhandled by a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," directive or by making a resolver null will have\n",(0,i.mdx)("inlineCode",{parentName:"p"},"handled: true")," and should not trigger a throw.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"export type MissingRequiredFieldThrowEvent = {\n  +kind: 'missing_required_field.throw',\n  +owner: string,\n  +fieldPath: string,\n  +handled: boolean,\n};\n")),(0,i.mdx)("h2",{id:"relay-resolver-error"},"Relay Resolver Error"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/introduction"},"Relay Resolver")," that is currently being read threw a JavaScript error when it was last evaluated. By default, the value has been coerced to null and passed to the product code."),(0,i.mdx)("p",null,"If ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/guides/throw-on-field-error-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@throwOnFieldError"))," was used on the parent query/fragment/mutation, you will also receive a runtime exception when the field is read."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Only throw on this event if ",(0,i.mdx)("inlineCode",{parentName:"p"},"handled")," is false. Errors that have been handled by a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," directive or by making a resolver null will have ",(0,i.mdx)("inlineCode",{parentName:"p"},"handled: true")," and should not trigger a throw."),(0,i.mdx)("pre",{parentName:"admonition"},(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"export type RelayResolverErrorEvent = {\n  +kind: 'relay_resolver.error',\n  +owner: string,\n  +fieldPath: string,\n  +error: Error,\n  +shouldThrow: boolean,\n  +handled: boolean,\n};\n")),(0,i.mdx)("h2",{parentName:"admonition",id:"graphql-payload-field-error"},"GraphQL Payload Field Error"),(0,i.mdx)("p",{parentName:"admonition"},"A field being read by Relay was marked as being in an error state by the ",(0,i.mdx)("a",{parentName:"p",href:"https://spec.graphql.org/October2021/#sec-Errors.Field-errors"},"GraphQL response")),(0,i.mdx)("p",{parentName:"admonition"},"If the field's parent query/fragment/mutation was annotated with ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/guides/throw-on-field-error-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@throwOnFieldError"))," and no ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/guides/catch-directive/"},(0,i.mdx)("inlineCode",{parentName:"a"},"@catch"))," directive was used to catch the error, Relay will throw an error immediately after logging this event.")),(0,i.mdx)("p",null,"Only throw on this event if ",(0,i.mdx)("inlineCode",{parentName:"p"},"handled")," is false. Errors that have been handled by a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@catch")," directive or by making a resolver null will have ",(0,i.mdx)("inlineCode",{parentName:"p"},"handled: true")," and should not trigger a throw.\n:::"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"export type RelayFieldPayloadErrorEvent = {\n  +kind: 'relay_field_payload.error',\n  +owner: string,\n  +fieldPath: string,\n  +error: TRelayFieldError,\n  +shouldThrow: boolean,\n  +handled: boolean,\n};\n")))}h.isMDXComponent=!0}}]);