(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[6436],{"../../node_modules/@tamagui/button/dist/esm/Button.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zx:()=>Button2});var _tamagui_font_size__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@tamagui/font-size/dist/esm/getFontSize.mjs"),_tamagui_get_button_sized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/get-button-sized/dist/esm/index.js"),_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/helpers-tamagui/dist/esm/index.js"),_tamagui_stacks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),_tamagui_text__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/SizableText.js"),_tamagui_text__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useProps.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createComponent.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const ButtonContext=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_4__.i)({}),ButtonFrame=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_5__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_6__.K,{name:"Button",tag:"button",context:ButtonContext,focusable:!0,role:"button",variants:{unstyled:{false:{size:"$true",justifyContent:"center",alignItems:"center",flexWrap:"nowrap",flexDirection:"row",cursor:"pointer",hoverTheme:!0,pressTheme:!0,backgrounded:!0,borderWidth:1,borderColor:"transparent",focusStyle:{outlineColor:"$borderColorFocus",outlineStyle:"solid",outlineWidth:2}}},variant:{outlined:{backgroundColor:"transparent",borderWidth:2,borderColor:"$borderColor",hoverStyle:{backgroundColor:"transparent",borderColor:"$borderColorHover"},pressStyle:{backgroundColor:"transparent",borderColor:"$borderColorPress"},focusStyle:{backgroundColor:"transparent",borderColor:"$borderColorFocus"}}},size:{"...size":_tamagui_get_button_sized__WEBPACK_IMPORTED_MODULE_0__.f},disabled:{true:{pointerEvents:"none"}}},defaultVariants:{unstyled:!1}}),ButtonText=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_5__.z)(_tamagui_text__WEBPACK_IMPORTED_MODULE_7__.J,{name:"Button",context:ButtonContext,variants:{unstyled:{false:{userSelect:"none",cursor:"pointer",flexGrow:0,flexShrink:1,ellipse:!0,color:"$color"}}},defaultVariants:{unstyled:!1}}),ButtonComponent=ButtonFrame.styleable((function(props,ref){const{props:buttonProps}=function useButton(propsIn,{Text=Button2.Text}={Text:Button2.Text}){const{children,icon,iconAfter,noTextWrap,theme:themeName,space,spaceFlex,scaleIcon=1,scaleSpace=.66,separator,color,fontWeight,letterSpacing,fontSize,fontFamily,fontStyle,textAlign,textProps,...rest}=propsIn,isNested=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ButtonNestingContext),propsActive=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_10__.wN)(propsIn),size=propsActive.size||(propsActive.unstyled?void 0:"$true"),iconSize=("number"==typeof size?.5*size:(0,_tamagui_font_size__WEBPACK_IMPORTED_MODULE_8__.yv)(size))*scaleIcon,getThemedIcon=(0,_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_1__.useGetThemedIcon)({size:iconSize,color}),[themedIcon,themedIconAfter]=[icon,iconAfter].map(getThemedIcon),spaceSize=propsActive.space??(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_11__.Ve)(iconSize)*scaleSpace,contents=(0,_tamagui_text__WEBPACK_IMPORTED_MODULE_12__.k)(Text,propsActive,Text===ButtonText&&!0!==propsIn.unstyled?{unstyled:!1,size}:void 0),inner=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_13__.P9)({space:spaceSize,spaceFlex,separator,direction:"column"===propsActive.flexDirection||"column-reverse"===propsActive.flexDirection?"vertical":"horizontal",children:[themedIcon,...contents,themedIconAfter]}),tag=isNested?"span":"link"===propsIn.accessibilityRole?"a":void 0,props={...propsActive.disabled&&{focusable:void 0,focusStyle:{borderColor:"$background"}},...tag&&{tag},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonNestingContext.Provider,{value:!0,children:inner})};return{spaceSize,isNested,props}}(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonFrame,{...buttonProps,ref})})),Button2=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_9__.$)(ButtonComponent,{Text:ButtonText,Icon:props=>{const{children,scaleIcon=1}=props,{size,color}=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ButtonContext),iconSize=("number"==typeof size?.5*size:(0,_tamagui_font_size__WEBPACK_IMPORTED_MODULE_8__.yv)(size))*scaleIcon;return(0,_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_1__.useGetThemedIcon)({size:iconSize,color})(children)}}),ButtonNestingContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(!1)},"../../node_modules/solito/build/link/core.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.LinkCore=function LinkCore(_ref){var children=_ref.children,href=_ref.href,as=_ref.as,componentProps=_ref.componentProps,Component=_ref.Component,replace=_ref.replace,experimental=_ref.experimental,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);if("web"===_Platform.default.OS)return(0,_jsxRuntime.jsx)(_nextLink.NextLink,Object.assign({},props,{replace,href,as,passHref:!0,legacyBehavior:!0,children:(0,_jsxRuntime.jsx)(Component,Object.assign({},componentProps,{children}),void 0)}),void 0);var linkTo=(0,_useCustomLink.useLink)({href,as,replace,experimental});return(0,_jsxRuntime.jsx)(Component,Object.assign({accessibilityRole:"link"},componentProps,{onPress:function onPress(e){null==componentProps||null==componentProps.onPress||componentProps.onPress(e);var link=as||href;null!=e&&e.defaultPrevented||("string"==typeof link&&isAbsoluteUrl(link)?(0,_linking.openURL)(link):linkTo.onPress(e))},children}),void 0)};var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_jsxRuntime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),_Platform=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Platform/index.js")),_linking=__webpack_require__("../../node_modules/solito/build/link/linking.web.js"),_nextLink=__webpack_require__("../../node_modules/solito/build/link/next-link.web.js"),_useCustomLink=__webpack_require__("../../node_modules/solito/build/link/use-custom-link.js"),_excluded=["children","href","as","componentProps","Component","replace","experimental"];var ABSOLUTE_URL_REGEX=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=function isAbsoluteUrl(url){return ABSOLUTE_URL_REGEX.test(url)}},"../../node_modules/solito/build/link/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _core=__webpack_require__("../../node_modules/solito/build/link/core.js");Object.keys(_core).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_core[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _core[key]}}))}));var _textLink=__webpack_require__("../../node_modules/solito/build/link/text-link.js");Object.keys(_textLink).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_textLink[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _textLink[key]}}))}));var _link=__webpack_require__("../../node_modules/solito/build/link/link.js");Object.keys(_link).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_link[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _link[key]}}))}));var _useCustomLink=__webpack_require__("../../node_modules/solito/build/link/use-custom-link.js");Object.keys(_useCustomLink).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useCustomLink[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useCustomLink[key]}}))}))},"../../node_modules/solito/build/link/link.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Link=function Link(_ref){var viewProps=_ref.viewProps,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_core.LinkCore,Object.assign({},props,{Component:_Platform.default.select({web:_View.default,default:_Pressable.default}),componentProps:viewProps}),void 0)};var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_jsxRuntime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),_Platform=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Platform/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Pressable/index.js")),_View=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/View/index.js")),_core=__webpack_require__("../../node_modules/solito/build/link/core.js"),_excluded=["viewProps"]},"../../node_modules/solito/build/link/linking.web.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.openURL=void 0;exports.openURL=function openURL(url){}},"../../node_modules/solito/build/link/next-link.web.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"NextLink",{enumerable:!0,get:function get(){return _link.default}});var _link=_interopRequireDefault(__webpack_require__("../../node_modules/next/link.js"))},"../../node_modules/solito/build/link/text-link.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextLink=function TextLink(_ref){var textProps=_ref.textProps,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(_core.LinkCore,Object.assign({},props,{Component:_Text.default,componentProps:Object.assign({selectable:!1},textProps)}),void 0)};var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_jsxRuntime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),_Text=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Text/index.js")),_core=__webpack_require__("../../node_modules/solito/build/link/core.js"),_excluded=["textProps"]},"../../node_modules/solito/build/link/use-custom-link.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useLink=function useLink(_ref){var href=_ref.href,as=_ref.as,shallow=_ref.shallow,scroll=_ref.scroll,replace=_ref.replace,experimental=_ref.experimental,router=(0,_router.useRouter)();return{accessibilityRole:"link",onPress:function onPress(e){var _e$currentTarget,shouldHandle=!1;if("web"===_Platform.default.OS&&e?e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||null!=e.button&&0!==e.button||![void 0,null,"","self"].includes(null==(_e$currentTarget=e.currentTarget)?void 0:_e$currentTarget.target)||(e.preventDefault(),shouldHandle=!0):shouldHandle=!e||!e.defaultPrevented,shouldHandle){if("#"===href)return;replace?router.replace(href,as,{shallow,scroll,experimental}):router.push(href,as,{shallow,scroll})}},href:router.parseNextPath(as||href)}};var _Platform=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Platform/index.js")),_router=__webpack_require__("../../node_modules/solito/build/router/index.js")},"../../node_modules/solito/build/router/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _parseNextPath=__webpack_require__("../../node_modules/solito/build/router/parse-next-path.js");Object.keys(_parseNextPath).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_parseNextPath[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _parseNextPath[key]}}))}));var _useRouter=__webpack_require__("../../node_modules/solito/build/router/use-router.js");Object.keys(_useRouter).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_useRouter[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _useRouter[key]}}))}))},"../../node_modules/solito/build/router/parse-next-path.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseNextPath=void 0;exports.parseNextPath=function parseNextPath(from){var path=("string"==typeof from?from:from.pathname)||"";if("object"==typeof from&&from.query&&"object"==typeof from.query){var query=Object.assign({},from.query);for(var key in query){var _query$key;if(path.includes("["+key+"]"))path=path.replace("["+key+"]",""+(null!=(_query$key=query[key])?_query$key:"")),delete query[key];else if(path.includes("[..."+key+"]")){var values=query[key];Array.isArray(values)&&(path=path.replace("[..."+key+"]",values.join("/")),delete query[key])}}if(Object.keys(query).length){path+="?";var _loop=function _loop(_key){var value=query[_key];Array.isArray(value)?value.forEach((function(item){path+=_key+"="+item+"&"})):null!=value&&(path+=_key+"="+value+"&")};for(var _key in query)_loop(_key);(path.endsWith("&")||path.endsWith("?"))&&(path=path.slice(0,-1))}}return path}},"../../node_modules/solito/build/router/replace-helpers.web.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStateFromPath=exports.getActionFromState=exports.StackActions=exports.LinkingContext=void 0;var LinkingContext=(0,__webpack_require__("../../node_modules/next/dist/compiled/react/index.js").createContext)({options:void 0});exports.LinkingContext=LinkingContext,exports.getActionFromState=undefined,exports.getStateFromPath=undefined,exports.StackActions=undefined},"../../node_modules/solito/build/router/use-link-to.web.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useLinkTo=void 0;var noOp=function noOp(){throw new Error("[use-link-to] is not supported on the web. Something went wrong if you called this.")};exports.useLinkTo=function useLinkTo(){return noOp}},"../../node_modules/solito/build/router/use-next-router.web.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useNextRouter",{enumerable:!0,get:function get(){return _router.useRouter}});var _router=__webpack_require__("../../node_modules/next/router.js")},"../../node_modules/solito/build/router/use-router.js":(__unused_webpack_module,exports,__webpack_require__)=>{var console=__webpack_require__("../../node_modules/console-browserify/index.js"),_interopRequireDefault=__webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useRouter=function useRouter(){var linkTo=(0,_useLinkTo.useLinkTo)(),navigation=(0,_useNavigation.useNavigation)(),nextRouter=(0,_useNextRouter.useNextRouter)(),linking=(0,_react.useContext)(_replaceHelpers.LinkingContext);return(0,_react.useMemo)((function(){return{push:function push(url,as,transitionOptions){if("web"===_Platform.default.OS)null==nextRouter||nextRouter.push(url,as,transitionOptions);else{var to=(0,_parseNextPath.parseNextPath)(as||url);to&&linkTo(to)}},replace:function replace(url,as,transitionOptions){if("web"===_Platform.default.OS)null==nextRouter||nextRouter.replace(url,as,transitionOptions);else{var _transitionOptions$ex,to=(0,_parseNextPath.parseNextPath)(as||url);if(to)if("stack-replace"===(null==transitionOptions||null==(_transitionOptions$ex=transitionOptions.experimental)?void 0:_transitionOptions$ex.nativeBehavior))if(null!=linking&&linking.options){var options=linking.options,state=null!=options&&options.getStateFromPath?options.getStateFromPath(to,options.config):(0,_replaceHelpers.getStateFromPath)(to,null==options?void 0:options.config);if(state){var action=(0,_replaceHelpers.getActionFromState)(state,null==options?void 0:options.config);if(void 0!==action)if("payload"in action&&action.payload&&"name"in action.payload&&action.payload.name){var _transitionOptions$ex2,_action$payload=action.payload,name=_action$payload.name,params=_action$payload.params;null!=transitionOptions&&null!=(_transitionOptions$ex2=transitionOptions.experimental)&&_transitionOptions$ex2.isNestedNavigator&&params&&"screen"in params&&params.screen?null==navigation||navigation.dispatch(_replaceHelpers.StackActions.replace(params.screen,params.params)):null==navigation||navigation.dispatch(_replaceHelpers.StackActions.replace(name,params))}else null==navigation||navigation.dispatch(action);else null==navigation||navigation.reset(state)}}else console.warn('[solito] replace("'+to+"\") faced an issue. You should still see your new screen, but it probably didn't replace the previous one. This may be due to a breaking change in React Navigation. \n  Please open an issue at https://github.com/nandorojo/solito and report how this happened. Thanks!"),linkTo(to);else linkTo(to)}},back:function back(){"web"===_Platform.default.OS?null==nextRouter||nextRouter.back():null==navigation||navigation.goBack()},parseNextPath:_parseNextPath.parseNextPath}}),[linkTo,navigation])};var _react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_Platform=_interopRequireDefault(__webpack_require__("../../node_modules/react-native-web/dist/exports/Platform/index.js")),_parseNextPath=__webpack_require__("../../node_modules/solito/build/router/parse-next-path.js"),_replaceHelpers=__webpack_require__("../../node_modules/solito/build/router/replace-helpers.web.js"),_useLinkTo=__webpack_require__("../../node_modules/solito/build/router/use-link-to.web.js"),_useNavigation=__webpack_require__("../../node_modules/solito/build/router/use-navigation.web.js"),_useNextRouter=__webpack_require__("../../node_modules/solito/build/router/use-next-router.web.js")},"../../node_modules/solito/link/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _link=__webpack_require__("../../node_modules/solito/build/link/index.js");Object.keys(_link).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_link[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _link[key]}}))}))},"../../node_modules/solito/router/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _router=__webpack_require__("../../node_modules/solito/build/router/index.js");Object.keys(_router).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_router[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _router[key]}}))}))},"../../node_modules/next/compat/router.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/next/dist/client/compat/router.js")},"../../node_modules/next/dist/client/compat/router.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useRouter",{enumerable:!0,get:function(){return useRouter}});const _react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_routercontext=__webpack_require__("../../node_modules/next/dist/shared/lib/router-context.js");function useRouter(){return(0,_react.useContext)(_routercontext.RouterContext)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../node_modules/next/dist/client/components/router-reducer/router-reducer-types.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{PrefetchKind:function(){return PrefetchKind},ACTION_REFRESH:function(){return ACTION_REFRESH},ACTION_NAVIGATE:function(){return ACTION_NAVIGATE},ACTION_RESTORE:function(){return ACTION_RESTORE},ACTION_SERVER_PATCH:function(){return ACTION_SERVER_PATCH},ACTION_PREFETCH:function(){return ACTION_PREFETCH},ACTION_FAST_REFRESH:function(){return ACTION_FAST_REFRESH},ACTION_SERVER_ACTION:function(){return ACTION_SERVER_ACTION}});const ACTION_REFRESH="refresh",ACTION_NAVIGATE="navigate",ACTION_RESTORE="restore",ACTION_SERVER_PATCH="server-patch",ACTION_PREFETCH="prefetch",ACTION_FAST_REFRESH="fast-refresh",ACTION_SERVER_ACTION="server-action";var PrefetchKind;!function(PrefetchKind){PrefetchKind.AUTO="auto",PrefetchKind.FULL="full",PrefetchKind.TEMPORARY="temporary"}(PrefetchKind||(PrefetchKind={})),("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../node_modules/next/dist/client/get-domain-locale.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}});const _normalizetrailingslash=__webpack_require__("../../node_modules/next/dist/client/normalize-trailing-slash.js"),basePath={}.__NEXT_ROUTER_BASEPATH||"";function getDomainLocale(path,locale,locales,domainLocales){if({}.__NEXT_I18N_SUPPORT){const normalizeLocalePath=__webpack_require__("../../node_modules/next/dist/client/normalize-locale-path.js").normalizeLocalePath,detectDomainLocale=__webpack_require__("../../node_modules/next/dist/client/detect-domain-locale.js").detectDomainLocale,target=locale||normalizeLocalePath(path,locales).detectedLocale,domain=detectDomainLocale(domainLocales,void 0,target);if(domain){const proto="http"+(domain.http?"":"s")+"://",finalLocale=target===domain.defaultLocale?"":"/"+target;return""+proto+domain.domain+(0,_normalizetrailingslash.normalizePathTrailingSlash)(""+basePath+finalLocale+path)}return!1}return!1}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../node_modules/next/dist/client/link.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("../../node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("../../node_modules/next/dist/compiled/react/index.js")),_resolvehref=__webpack_require__("../../node_modules/next/dist/shared/lib/router/utils/resolve-href.js"),_islocalurl=__webpack_require__("../../node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),_formaturl=__webpack_require__("../../node_modules/next/dist/shared/lib/router/utils/format-url.js"),_utils=__webpack_require__("../../node_modules/next/dist/shared/lib/utils.js"),_addlocale=__webpack_require__("../../node_modules/next/dist/client/add-locale.js"),_routercontext=__webpack_require__("../../node_modules/next/dist/shared/lib/router-context.js"),_approutercontext=__webpack_require__("../../node_modules/next/dist/shared/lib/app-router-context.js"),_useintersection=__webpack_require__("../../node_modules/next/dist/client/use-intersection.js"),_getdomainlocale=__webpack_require__("../../node_modules/next/dist/client/get-domain-locale.js"),_addbasepath=__webpack_require__("../../node_modules/next/dist/client/add-base-path.js"),_routerreducertypes=__webpack_require__("../../node_modules/next/dist/client/components/router-reducer/router-reducer-types.js"),prefetched=new Set;function prefetch(router,href,as,options,appOptions,isAppRouter){if("undefined"==typeof window)return;if(!isAppRouter&&!(0,_islocalurl.isLocalURL)(href))return;if(!options.bypassPrefetchedCheck){const prefetchedKey=href+"%"+as+"%"+(void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0);if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}const prefetchPromise=isAppRouter?router.prefetch(href,appOptions):router.prefetch(href,as,options);Promise.resolve(prefetchPromise).catch((err=>{0}))}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:(0,_formaturl.formatUrl)(urlObjOrString)}const _default=_react.default.forwardRef((function LinkComponent(props,forwardedRef){let children;const{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp=null,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!1,...restProps}=props;children=childrenProp,!legacyBehavior||"string"!=typeof children&&"number"!=typeof children||(children=_react.default.createElement("a",null,children));const pagesRouter=_react.default.useContext(_routercontext.RouterContext),appRouter=_react.default.useContext(_approutercontext.AppRouterContext),router=null!=pagesRouter?pagesRouter:appRouter,isAppRouter=!pagesRouter,prefetchEnabled=!1!==prefetchProp,appPrefetchKind=null===prefetchProp?_routerreducertypes.PrefetchKind.AUTO:_routerreducertypes.PrefetchKind.FULL;const{href,as}=_react.default.useMemo((()=>{if(!pagesRouter){const resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}const[resolvedHref,resolvedAs]=(0,_resolvehref.resolveHref)(pagesRouter,hrefProp,!0);return{href:resolvedHref,as:asProp?(0,_resolvehref.resolveHref)(pagesRouter,asProp):resolvedAs||resolvedHref}}),[pagesRouter,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);let child;legacyBehavior&&(child=_react.default.Children.only(children));const childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=(0,_useintersection.useIntersection)({rootMargin:"200px"}),setRef=_react.default.useCallback((el=>{previousAs.current===as&&previousHref.current===href||(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el),childRef&&("function"==typeof childRef?childRef(el):"object"==typeof childRef&&(childRef.current=el))}),[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect((()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale},{kind:appPrefetchKind},isAppRouter)}),[as,href,isVisible,locale,prefetchEnabled,null==pagesRouter?void 0:pagesRouter.locale,router,isAppRouter,appPrefetchKind]);const childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&(e.defaultPrevented||function linkClicked(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled){const{nodeName}=e.currentTarget;if("A"===nodeName.toUpperCase()&&(function isModifiedEvent(event){const target=event.currentTarget.getAttribute("target");return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!isAppRouter&&!(0,_islocalurl.isLocalURL)(href)))return;e.preventDefault();const navigate=()=>{const routerScroll=null==scroll||scroll;"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll:routerScroll}):router[replace?"replace":"push"](as||href,{forceOptimisticNavigation:!prefetchEnabled,scroll:routerScroll})};isAppRouter?_react.default.startTransition(navigate):navigate()}(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled))},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},{kind:appPrefetchKind},isAppRouter))},onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},{kind:appPrefetchKind},isAppRouter))}};if((0,_utils.isAbsoluteUrl)(as))childProps.href=as;else if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){const curLocale=void 0!==locale?locale:null==pagesRouter?void 0:pagesRouter.locale,localeDomain=(null==pagesRouter?void 0:pagesRouter.isLocaleDomain)&&(0,_getdomainlocale.getDomainLocale)(as,curLocale,null==pagesRouter?void 0:pagesRouter.locales,null==pagesRouter?void 0:pagesRouter.domainLocales);childProps.href=localeDomain||(0,_addbasepath.addBasePath)((0,_addlocale.addLocale)(as,curLocale,null==pagesRouter?void 0:pagesRouter.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):_react.default.createElement("a",{...restProps,...childProps},children)}));("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../node_modules/next/dist/client/normalize-locale-path.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"normalizeLocalePath",{enumerable:!0,get:function(){return normalizeLocalePath}});const normalizeLocalePath=(pathname,locales)=>({}.__NEXT_I18N_SUPPORT?__webpack_require__("../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js").normalizeLocalePath(pathname,locales):{pathname,detectedLocale:void 0});("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../node_modules/next/dist/client/use-intersection.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});const _react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_requestidlecallback=__webpack_require__("../../node_modules/next/dist/client/request-idle-callback.js"),hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];function observe(element,callback,options){const{id,observer,elements}=function createObserver(options){const id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find((obj=>obj.root===id.root&&obj.margin===id.margin));let instance;if(existing&&(instance=observers.get(existing),instance))return instance;const elements=new Map,observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{const callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)}))}),options);return instance={id,observer,elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function unobserve(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);const index=idList.findIndex((obj=>obj.root===id.root&&obj.margin===id.margin));index>-1&&idList.splice(index,1)}}}function useIntersection(param){let{rootRef,rootMargin,disabled}=param;const isDisabled=disabled||!hasIntersectionObserver,[visible,setVisible]=(0,_react.useState)(!1),elementRef=(0,_react.useRef)(null),setElement=(0,_react.useCallback)((element=>{elementRef.current=element}),[]);(0,_react.useEffect)((()=>{if(hasIntersectionObserver){if(isDisabled||visible)return;const element=elementRef.current;if(element&&element.tagName){return observe(element,(isVisible=>isVisible&&setVisible(isVisible)),{root:null==rootRef?void 0:rootRef.current,rootMargin})}}else if(!visible){const idleCallback=(0,_requestidlecallback.requestIdleCallback)((()=>setVisible(!0)));return()=>(0,_requestidlecallback.cancelIdleCallback)(idleCallback)}}),[isDisabled,rootMargin,rootRef,visible,elementRef.current]);const resetVisible=(0,_react.useCallback)((()=>{setVisible(!1)}),[]);return[setElement,visible,resetVisible]}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"../../node_modules/next/link.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/next/dist/client/link.js")},"../../node_modules/tamagui/dist/esm/views/Spinner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});var _tamagui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/themeable.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useTheme.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_native_web__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react-native-web/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const Spinner=_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.FA.extractable((0,_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.Y)(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const{size,color:colorProp,...stackProps}=props,theme=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.Fg)();let color=colorProp;return color&&"$"===color[0]&&(color=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.lk)(theme[color])),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.FA,{ref,...stackProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_native_web__WEBPACK_IMPORTED_MODULE_6__.P2,{size,color})})})),{componentName:"Spinner"}))}}]);