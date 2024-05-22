/*! For license information please see components-ModalButton-ModalButton-stories.c2c9fe6c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[836],{"./src/components/ModalButton/ModalButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalConfig:()=>ModalConfig,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ModalButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),Modal=__webpack_require__("./src/components/Modal/Modal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const ModalButton_stories={title:"Example/ModalButton",component:function ModalButton(){var _useState2=_slicedToArray((0,react.useState)(""),2),text=_useState2[0],setText=_useState2[1],_useState4=_slicedToArray((0,react.useState)(!1),2),modal=_useState4[0],setModal=_useState4[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{placeholder:"Текст модалки",value:text,onInput:function onInput(e){return setText(e.target.value)}}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){setModal((function(state){return!state}))},children:"toggle modal"}),(0,jsx_runtime.jsx)(Modal.Z,{shown:modal,children:text})]})},tags:["autodocs"]};var ModalConfig={args:{}};ModalConfig.parameters={...ModalConfig.parameters,docs:{...ModalConfig.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...ModalConfig.parameters?.docs?.source}}};const __namedExportsOrder=["ModalConfig"]},"./src/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modal});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.Z,options);const Modal_Modal_module=Modal_module.Z&&Modal_module.Z.locals?Modal_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Modal(_ref){var shown=_ref.shown,darkMode=_ref.darkMode,children=_ref.children,modal=(0,react.useRef)(null);return(0,react.useEffect)((function(){shown&&function showModal(){modal.current.showModal()}()}),[shown]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("dialog",{ref:modal,className:"".concat(Modal_Modal_module.modal," ").concat(darkMode&&Modal_Modal_module["modal--dark"]),children:[(0,jsx_runtime.jsx)("h2",{className:Modal_Modal_module.modalTitle,children:"Привет !"}),(0,jsx_runtime.jsx)("p",{className:Modal_Modal_module.modalContent,children:children||"Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый\n          кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их\n          труду ежегодно сотни питомцев находят свой новый дом."}),(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.modalFooter,children:(0,jsx_runtime.jsx)("button",{className:Modal_Modal_module.modalBtn,onClick:function closeModal(){modal.current.close()},children:"close"})})]})})}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{shown:{defaultValue:null,description:"",name:"shown",required:!1,type:{name:"boolean"}},darkMode:{defaultValue:null,description:"",name:"darkMode",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ufBCdpCOc3toUKeBZLdA{border:none;border-radius:8px;width:375px}.ufBCdpCOc3toUKeBZLdA::backdrop{opacity:0;visibility:hidden;background-color:rgba(0,0,0,.5)}.ufBCdpCOc3toUKeBZLdA[open]::backdrop{animation:KNliF1OkOrxj_N89ouQt .2s ease forwards}.DyfE9otH31AEfUHK7sGc{background:#000;color:#fff}.DyfE9otH31AEfUHK7sGc .X_39hkjSaB0jFYXXJ5B1{color:#1ea7fd}.hCf_BBnCzgf_u6wFCT68{display:flex;justify-content:flex-end;padding-top:8px;border-top:1px solid #d3d3d3}.X_39hkjSaB0jFYXXJ5B1{border:none;background:none;color:teal;cursor:pointer;font-size:16px;font-family:inherit;font-weight:600;outline:none}.nEmDlVchua7fUPXevd3r,.quXdZvXtA1tv8V5TxYLx{margin:0 0 16px}@keyframes KNliF1OkOrxj_N89ouQt{0%{opacity:0;visibility:hidden}100%{opacity:1;visibility:visible}}","",{version:3,sources:["webpack://./src/components/Modal/Modal.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA,CACA,iBAAA,CACA,WAAA,CAEA,gCACE,SAAA,CACA,iBAAA,CACA,+BAAA,CAIA,sCACE,gDAAA,CAIJ,sBACE,eAAA,CACA,UAAA,CAEA,4CACE,aAAA,CAKN,sBACE,YAAA,CACA,wBAAA,CACA,eAAA,CACA,4BAAA,CAGF,sBACE,WAAA,CACA,eAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CACA,mBAAA,CACA,eAAA,CACA,YAAA,CAGF,4CACE,eAAA,CAGF,gCACE,GACE,SAAA,CACA,iBAAA,CAGF,KACE,SAAA,CACA,kBAAA,CAAA",sourcesContent:[".modal {\n  border: none;\n  border-radius: 8px;\n  width: 375px;\n\n  &::backdrop {\n    opacity: 0;\n    visibility: hidden;\n    background-color: rgba(0,0,0, 0.5);\n  }\n\n  &[open] {\n    &::backdrop {\n      animation: fade 0.2s ease forwards;\n    }\n  }\n\n  &--dark {\n    background: black;\n    color: white;\n\n    .modalBtn {\n      color: #1ea7fd;\n    }\n  }\n}\n\n.modalFooter {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 8px;\n  border-top: 1px solid lightgray;\n}\n\n.modalBtn {\n  border: none;\n  background: none;\n  color: teal;\n  cursor: pointer;\n  font-size: 16px;\n  font-family: inherit;\n  font-weight: 600;\n  outline: none;\n}\n\n.modalTitle, .modalContent {\n  margin: 0 0 16px;\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  100% {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={modal:"ufBCdpCOc3toUKeBZLdA",fade:"KNliF1OkOrxj_N89ouQt","modal--dark":"DyfE9otH31AEfUHK7sGc",modalBtn:"X_39hkjSaB0jFYXXJ5B1",modalFooter:"hCf_BBnCzgf_u6wFCT68",modalTitle:"nEmDlVchua7fUPXevd3r",modalContent:"quXdZvXtA1tv8V5TxYLx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);