/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 760:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,(()=>(()=>{var e={302:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(o++,"%c"===e&&(i=o))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(65)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},65:(e,t,n)=>{e.exports=function(e){function t(e){let n,i,r,a=null;function s(...e){if(!s.enabled)return;const o=s,i=Number(new Date),r=i-(n||i);o.diff=r,o.prev=n,o.curr=i,n=i,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,i)=>{if("%%"===n)return"%";a++;const r=t.formatters[i];if("function"==typeof r){const t=e[a];n=r.call(o,t),e.splice(a,1),a--}return n})),t.formatArgs.call(o,e);(o.log||t.log).apply(o,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=o,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(i!==t.namespaces&&(i=t.namespaces,r=t.enabled(e)),r),set:e=>{a=e}}),"function"==typeof t.init&&t.init(s),s}function o(e,n){const o=t(this.namespace+(void 0===n?":":n)+e);return o.log=this.log,o}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),i=o.length;for(n=0;n<i;n++)o[n]&&("-"===(e=o[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(247),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},247:e=>{var t=1e3,n=60*t,o=60*n,i=24*o;function r(e){if(!((e=String(e)).length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(r){var a=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function a(e){var r=Math.abs(e);return r>=i?Math.round(e/i)+"d":r>=o?Math.round(e/o)+"h":r>=n?Math.round(e/n)+"m":r>=t?Math.round(e/t)+"s":e+"ms"}function s(e){var r=Math.abs(e);return r>=i?l(e,r,i,"day"):r>=o?l(e,r,o,"hour"):r>=n?l(e,r,n,"minute"):r>=t?l(e,r,t,"second"):e+" ms"}function l(e,t,n,o){var i=t>=1.5*n;return Math.round(e/n)+" "+o+(i?"s":"")}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return r(e);if("number"===n&&isFinite(e))return t.long?s(e):a(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"==typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"==typeof o.then)return o}var r=Object.create(null);n.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,n.d(r,a),r}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var o={};return(()=>{"use strict";n.r(o),n.d(o,{ActionObjectType:()=>_,ChannelType:()=>B,ChildAppWindow:()=>Co,DialogDimension:()=>V,ErrorCode:()=>k,FileOpenPreference:()=>F,FrameContexts:()=>H,HostClientType:()=>L,HostName:()=>N,LiveShareHost:()=>Vi,NotificationTypes:()=>_n,ParentAppWindow:()=>vo,SecondaryM365ContentIdName:()=>O,TaskModuleDimension:()=>W,TeamType:()=>U,UserSettingTypes:()=>kn,UserTeamRole:()=>x,ViewerActionTypes:()=>On,app:()=>pt,appEntity:()=>ur,appInitialization:()=>ai,appInstallDialog:()=>Gn,authentication:()=>Qe,barCode:()=>lo,calendar:()=>Eo,call:()=>ri,chat:()=>co,clipboard:()=>po,conversations:()=>Mn,dialog:()=>ot,enablePrintCapability:()=>di,executeDeepLink:()=>Ai,externalAppAuthentication:()=>or,externalAppCardActions:()=>ir,files:()=>rr,geoLocation:()=>go,getAdaptiveCardSchemaVersion:()=>wo,getContext:()=>pi,getMruTabInstances:()=>Ti,getTabInstances:()=>Ii,initialize:()=>ui,initializeWithFrameContext:()=>Fi,liveShare:()=>xi,location:()=>bo,logs:()=>Fn,mail:()=>Ro,marketplace:()=>nr,media:()=>Jn,meeting:()=>yo,meetingRoom:()=>ar,menus:()=>it,monetization:()=>Po,navigateBack:()=>Di,navigateCrossDomain:()=>Mi,navigateToTab:()=>ki,notifications:()=>sr,openFilePreview:()=>xn,pages:()=>It,people:()=>_o,print:()=>fi,profile:()=>Oo,registerAppButtonClickHandler:()=>hi,registerAppButtonHoverEnterHandler:()=>wi,registerAppButtonHoverLeaveHandler:()=>Ci,registerBackButtonHandler:()=>vi,registerBeforeUnloadHandler:()=>bi,registerChangeSettingsHandler:()=>Pi,registerCustomHandler:()=>Hn,registerFocusEnterHandler:()=>yi,registerFullScreenHandler:()=>gi,registerOnLoadHandler:()=>Si,registerOnThemeChangeHandler:()=>mi,registerUserSettingsChangeHandler:()=>Un,remoteCamera:()=>lr,returnFocus:()=>Oi,search:()=>Zo,secondaryBrowser:()=>ho,sendCustomEvent:()=>Nn,sendCustomMessage:()=>Ln,setFrameContext:()=>Ri,settings:()=>Li,shareDeepLink:()=>Ei,sharing:()=>Qo,stageView:()=>Xo,tasks:()=>Ui,teams:()=>dr,teamsCore:()=>Fo,thirdPartyCloudStorage:()=>li,uploadCustomApp:()=>Dn,version:()=>Oe,videoEffects:()=>Ko,videoEffectsEx:()=>fr,visualMedia:()=>ti,webStorage:()=>ni});const e=(0,n(302).debug)("teamsJs");function t(t){return e.extend(t)}function i(e,t){return`${e}_${t}`}function r(e){return/^v\d+_[\w.]+$/.test(e)}var a,s;!function(e){e.V_0="v0",e.V_1="v1",e.V_2="v2",e.V_3="v3"}(a||(a={})),function(e){e.App_GetContext="app.getContext",e.App_Initialize="app.initialize",e.App_NotifyAppLoaded="app.notifyAppLoaded",e.App_NotifyExpectedFailure="app.notifyExpectedFailure",e.App_NotifyFailure="app.notifyFailure",e.App_NotifySuccess="app.notifySuccess",e.App_OpenLink="app.openLink",e.App_RegisterOnThemeChangeHandler="app.registerOnThemeChangeHandler",e.AppEntity_SelectAppEntity="appEntity.selectAppEntity",e.BarCode_HasPermission="barCode.hasPermission",e.BarCode_RequestPermission="barCode.requestPermission",e.BarCode_ScanBarCode="barCode.scanBarCode",e.Calendar_ComposeMeeting="calendar.composeMeeting",e.Calendar_OpenCalendarItem="calendar.openCalendarItem",e.Call_StartCall="call.startCall",e.Clipboard_Read="clipboard.read",e.Clipboard_Write="clipboard.write",e.Dialog_AdaptiveCard_Bot_Open="dialog.adaptiveCard.bot.open",e.Dialog_AdaptiveCard_Open="dialog.adaptiveCard.open",e.Dialog_Update_Resize="dialog.update.resize",e.Dialog_Url_Bot_Open="dialog.url.bot.open",e.Dialog_Url_Open="dialog.url.open",e.Dialog_Url_Submit="dialog.url.submit",e.Dialog_Url_SendMessageToParentFromDialog="dialog.url.sendMessageToParentFromDialog",e.Dialog_Url_SendMessageToDialog="dialog.url.sendMessageToDialog",e.GeoLocation_GetCurrentLocation="geoLocation.getCurrentLocation",e.GeoLocation_HasPermission="geoLocation.hasPermission",e.GeoLocation_Map_ChooseLocation="geoLocation.map.chooseLocation",e.GeoLocation_RequestPermission="geoLocation.hasPermission",e.GeoLocation_ShowLocation="geoLocation.showLocation",e.Location_GetLocation="location.getLocation",e.Location_ShowLocation="location.showLocation",e.Mail_ComposeMail="mail.composeMail",e.Mail_OpenMailItem="mail.openMailItem",e.Marketplace_AddOrUpdateCartItems="marketplace.addOrUpdateCartItems",e.Marketplace_GetCart="marketplace.getCart",e.Marketplace_RemoveCardItems="marketplace.removeCartItems",e.Marketplace_UpdateCartStatus="marketplace.updateCartStatus",e.Media_CaptureImage="media.captureImage",e.Media_Controller="media.controller",e.Media_GetMedia="media.getMedia",e.Media_HasPermission="media.hasPermission",e.Media_RequestPermission="media.requestPermission",e.Media_ScanBarCode="media.scanBarCode",e.Media_SelectMedia="media.selectMedia",e.Media_ViewImages="media.viewImages",e.Navigation_NavigateBack="navigation.navigateBack",e.Navigation_NavigateCrossDomain="navigation.navigateCrossDomain",e.Navigation_NavigateToTab="navigation.navigateToTab",e.Navigation_ReturnFocus="navigation.returnFocus",e.Pages_AppButton_OnClick="pages.appButton.onClick",e.Pages_AppButton_OnHoverEnter="pages.appButton.onHoverEnter",e.Pages_AppButton_OnHoverLeave="pages.appButton.onHoverLeave",e.Pages_BackStack_NavigateBack="pages.backStack.navigateBack",e.Pages_BackStack_RegisterBackButtonHandler="pages.backStack.registerBackButtonHandler",e.Pages_Config_RegisterChangeConfigHandler="pages.config.registerChangeConfigHandler",e.Pages_Config_RegisterOnRemoveHandlerHelper="pages.config.registerOnRemoveHandlerHelper",e.Pages_Config_RegisterOnSaveHandlerHelper="pages.config.registerOnSaveHandlerHelper",e.Pages_Config_SetConfig="pages.config.setConfig",e.Pages_Config_SetValidityState="pages.config.setValidityState",e.Pages_CurrentApp_NavigateTo="pages.currentApp.navigateTo",e.Pages_CurrentApp_NavigateToDefaultPage="pages.currentApp.navigateToDefaultPage",e.Pages_FullTrust_EnterFullscreen="pages.fullTrust.enterFullscreen",e.Pages_FullTrust_ExitFullscreen="pages.fullTrust.exitFullscreen",e.Pages_GetConfig="pages.getConfig.",e.Pages_NavigateCrossDomain="pages.navigateCrossDomain",e.Pages_NavigateToApp="pages.navigateToApp",e.Pages_RegisterFocusEnterHandler="pages.registerFocusEnterHandler",e.Pages_RegisterFullScreenHandler="pages.registerFullScreenHandler",e.Pages_ReturnFocus="pages.returnFocus",e.Pages_SetCurrentFrame="pages.setCurrentFrame",e.Pages_ShareDeepLink="pages.shareDeepLink",e.Pages_Tabs_GetMruTabInstances="pages.tabs.getMruTabInstances",e.Pages_Tabs_GetTabInstances="pages.tabs.getTabInstances",e.Pages_Tabs_NavigateToTab="pages.tabs.navigateToTab",e.PublicAPIs_ExecuteDeepLink="executeDeepLink",e.PublicAPIs_GetContext="getContext",e.PublicAPIs_GetMruTabInstances="getMruTabInstances",e.PublicAPIs_GetTabInstances="getTabInstances",e.PublicAPIs_Initialize="initialize",e.PublicAPIs_RegisterAppButtonClickHandler="registerAppButtonClickHandler",e.PublicAPIs_RegisterAppButtonHoverEnterHandler="registerAppButtonHoverEnterHandler",e.PublicAPIs_RegisterAppButtonHoverLeaveHandler="registerAppButtonHoverLeaveHandler",e.PublicAPIs_RegisterBackButtonHandler="registerBackButtonHandler",e.PublicAPIs_RegisterChangeSettingsHandler="registerChangeSettingsHandler",e.PublicAPIs_RegisterFocusEnterHandler="registerFocusEnterHandler",e.PublicAPIs_RegisterFullScreenHandler="registerFullScreenHandler",e.PublicAPIs_RegisterOnLoadHandler="registerOnLoadHandler",e.PublicAPIs_RegisterOnThemeChangeHandlerHelper="registerOnThemeChangeHandlerHelper",e.PublicAPIs_SetFrameContext="setFrameContext",e.PublicAPIs_ShareDeepLink="shareDeepLink",e.RegisterHandler="registerHandler",e.RegisterOnThemeChangeHandler="registerOnThemeChangeHandler",e.Settings_Remove_Failure="settings.remove.failure",e.Settings_Remove_Success="settings.remove.success",e.Settings_Save_Failure="settings.save.failure",e.Settings_Save_Success="settings.save.success",e.Tasks_StartTask="tasks.startTask",e.Tasks_SubmitTask="tasks.submitTask",e.Tasks_UpdateTask="tasks.updateTask"}(s||(s={}));const l=JSON.parse('{"validOrigins":["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","teams.live.com","devspaces.skype.com","ssauth.skype.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","outlook.live.com","outlook-sdf.live.com","*.teams.microsoft.com","*.www.office.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.microsoft365.com","www.microsoft365.com","bing.com","edgeservices.bing.com","www.bing.com","www.staging-bing-int.com","teams.cloud.microsoft","outlook.cloud.microsoft","m365.cloud.microsoft","copilot.microsoft.com"]}');const c="2.0.1",u="2.0.3",d="1.9.0",f="1.8.0",p=n.t(l,2).validOrigins,m=new URL("https://res.cdn.office.net/teams-js/validDomains/json/validDomains.json"),g=/^https:\/\//,h="https",w="teams.microsoft.com",C="The library has not yet been initialized",v="The runtime has not yet been initialized",S="The runtime version is not supported";class b{}b.initializeCalled=!1,b.initializeCompleted=!1,b.additionalValidOrigins=[],b.initializePromise=void 0,b.isFramelessWindow=!1,b.frameContext=void 0,b.hostClientType=void 0,b.printCapabilityEnabled=!1;const y={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let P;const I=new Uint8Array(16);function T(){if(!P&&(P="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!P))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return P(I)}const E=[];for(let e=0;e<256;++e)E.push((e+256).toString(16).slice(1));function A(e,t=0){return(E[e[t+0]]+E[e[t+1]]+E[e[t+2]]+E[e[t+3]]+"-"+E[e[t+4]]+E[e[t+5]]+"-"+E[e[t+6]]+E[e[t+7]]+"-"+E[e[t+8]]+E[e[t+9]]+"-"+E[e[t+10]]+E[e[t+11]]+E[e[t+12]]+E[e[t+13]]+E[e[t+14]]+E[e[t+15]]).toLowerCase()}const R=function(e,t,n){if(y.randomUUID&&!t&&!e)return y.randomUUID();const o=(e=e||{}).random||(e.rng||T)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return A(o)};var F,_,O,k,M,D,L,N,H,U,x,V;!function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(F||(F={})),function(e){e.M365Content="m365content"}(_||(_={})),function(e){e.DriveId="driveId",e.GroupId="groupId",e.SiteId="siteId",e.UserId="userId"}(O||(O={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(k||(k={})),function(e){e.GeoLocation="geolocation",e.Media="media"}(M||(M={})),function(e){e.TextPlain="text/plain",e.TextHtml="text/html",e.ImagePNG="image/png",e.ImageJPEG="image/jpeg"}(D||(D={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.macos="macos",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(L||(L={})),function(e){e.office="Office",e.outlook="Outlook",e.outlookWin32="OutlookWin32",e.orange="Orange",e.places="Places",e.teams="Teams",e.teamsModern="TeamsModern"}(N||(N={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(H||(H={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(U||(U={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(x||(x={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(V||(V={}));var B,W=V;!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(B||(B={}));const z={errorCode:k.NOT_SUPPORTED_ON_PLATFORM},j=1,G=5,q={adaptiveCardSchemaVersion:{majorVersion:1,minorVersion:5}},$=new Error("Invalid input count: Must supply a valid image count (limit of 10)."),J=new Error("Invalid response: Received more images than the specified max limit in the response.");function K(e){return(t,n)=>{if(!t)throw new Error(e||n)}}function Z(e,t){if("string"!=typeof e||"string"!=typeof t)return NaN;const n=e.split("."),o=t.split(".");function i(e){return/^\d+$/.test(e)}if(!n.every(i)||!o.every(i))return NaN;for(;n.length<o.length;)n.push("0");for(;o.length<n.length;)o.push("0");for(let e=0;e<n.length;++e)if(Number(n[e])!=Number(o[e]))return Number(n[e])>Number(o[e])?1:-1;return 0}function Q(){return R()}function X(e){return Object.keys(e).forEach((t=>{"object"==typeof e[t]&&X(e[t])})),Object.freeze(e)}function Y(e,t,...n){const o=e(...n);return o.then((e=>{t&&t(void 0,e)})).catch((e=>{t&&t(e)})),o}function ee(e,t,...n){const o=e(...n);return o.then((()=>{t&&t(null)})).catch((e=>{t&&t(e)})),o}function te(e,t,...n){const o=e(...n);return o.then((e=>{t&&t(null,e)})).catch((e=>{t&&t(e,null)})),o}function ne(e,t,n){return new Promise(((o,i)=>{const r=setTimeout(i,t,n);e().then((e=>{clearTimeout(r),o(e)})).catch((e=>{clearTimeout(r),i(e)}))}))}function oe(e){const t=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId)+"/"+encodeURIComponent(e.pageId));return e.webUrl&&t.searchParams.append("webUrl",e.webUrl),(e.channelId||e.subPageId)&&t.searchParams.append("context",JSON.stringify({channelId:e.channelId,subEntityId:e.subPageId})),t.toString()}function ie(e){return!(Z(`${e.majorVersion}.${e.minorVersion}`,`${j}.${G}`)>=0)}function re(e){return"https:"===e.protocol}function ae(e,t){return new Promise(((n,o)=>{e||o("MimeType cannot be null or empty."),t||o("Base64 string cannot be null or empty.");const i=atob(t);if(e.startsWith("image/")){const t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);n(new Blob([t],{type:e}))}n(new Blob([i],{type:e}))}))}function se(e){return new Promise(((t,n)=>{0===e.size&&n(new Error("Blob cannot be empty."));const o=new FileReader;o.onloadend=()=>{o.result?t(o.result.toString().split(",")[1]):n(new Error("Failed to read the blob"))},o.onerror=()=>{n(o.error)},o.readAsDataURL(e)}))}function le(){if(ce())throw new Error("window object undefined at SSR check");return window}function ce(){return"undefined"==typeof window}const ue=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function de(e){if(!ue.test(e))throw new Error("App ID is not valid. Must be GUID format. App ID: "+e)}var fe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n};const pe=t("runtime"),me=3;function ge(e){return e.apiVersion===me}const he={apiVersion:-1,supports:{}};function we(e){if(ge(e))return!0;throw-1===e.apiVersion?new Error(v):new Error(S)}let Ce=he;const ve={apiVersion:3,hostVersionsInfo:q,isLegacyTeams:!0,supports:{appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{card:{bot:{}},url:{bot:{}},update:{}},interactive:{},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{config:{},backStack:{},fullTrust:{}},remoteCamera:{},teams:{fullTrust:{}},teamsCore:{},video:{sharedFrame:{}}}},Se=[L.desktop,L.web,L.rigel,L.surfaceHub,L.teamsRoomsWindows,L.teamsRoomsAndroid,L.teamsPhones,L.teamsDisplays],be=[L.android,L.ios,L.ipados],ye=[...Se,...be];function Pe(e){let t=e;if(t.apiVersion<me&&Ie.forEach((e=>{t.apiVersion===e.versionToUpgradeFrom&&(t=e.upgradeToNextVersion(t))})),ge(t))return t;throw new Error("Received a runtime that could not be upgraded to the latest version")}const Ie=[{versionToUpgradeFrom:1,upgradeToNextVersion:e=>{var t;return{apiVersion:2,hostVersionsInfo:void 0,isLegacyTeams:e.isLegacyTeams,supports:Object.assign(Object.assign({},e.supports),{dialog:e.supports.dialog?{card:void 0,url:e.supports.dialog,update:null===(t=e.supports.dialog)||void 0===t?void 0:t.update}:void 0})}}},{versionToUpgradeFrom:2,upgradeToNextVersion:e=>{const t=e.supports,{appNotification:n}=t,o=fe(t,["appNotification"]);return Object.assign(Object.assign({},e),{apiVersion:3,supports:o})}}],Te={"1.0.0":[{capability:{pages:{appButton:{},tabs:{}},stageView:{}},hostClientTypes:Se}],"1.9.0":[{capability:{location:{}},hostClientTypes:ye}],"2.0.0":[{capability:{people:{}},hostClientTypes:ye},{capability:{sharing:{}},hostClientTypes:[L.desktop,L.web]}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[L.android,L.desktop,L.ios,L.teamsRoomsAndroid,L.teamsPhones,L.teamsDisplays,L.web]},{capability:{webStorage:{}},hostClientTypes:[L.desktop]}],"2.0.5":[{capability:{webStorage:{}},hostClientTypes:[L.android,L.ios]}],"2.0.8":[{capability:{sharing:{}},hostClientTypes:[L.android,L.ios]}]},Ee=pe.extend("generateBackCompatRuntimeConfig");function Ae(e,t){const n=Object.assign({},e);for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&("object"!=typeof t[o]||Array.isArray(t[o])?o in e||(n[o]=t[o]):n[o]=Ae(e[o]||{},t[o]));return n}function Re(e,t,n){Ee("generating back compat runtime config for %s",e);let o=Object.assign({},t.supports);Ee("Supported capabilities in config before updating based on highestSupportedVersion: %o",o),Object.keys(n).forEach((t=>{Z(e,t)>=0&&n[t].forEach((e=>{void 0!==b.hostClientType&&e.hostClientTypes.includes(b.hostClientType)&&(o=Ae(o,e.capability))}))}));const i={apiVersion:me,hostVersionsInfo:q,isLegacyTeams:!0,supports:o};return Ee("Runtime config after updating based on highestSupportedVersion: %o",i),i}const Fe=pe.extend("applyRuntimeConfig");function _e(e){"string"==typeof e.apiVersion&&(Fe("Trying to apply runtime with string apiVersion, processing as v1: %o",e),e=Object.assign(Object.assign({},e),{apiVersion:1})),Fe("Fast-forwarding runtime %o",e);const t=Pe(e);Fe("Applying runtime %o",t),Ce=X(t)}const Oe="2.19.0",ke=t("internal"),Me=ke.extend("ensureInitializeCalled"),De=ke.extend("ensureInitialized");function Le(){if(!b.initializeCalled)throw Me(C),new Error(C)}function Ne(e,...t){if(!b.initializeCompleted)throw De("%s. initializeCalled: %s",C,b.initializeCalled.toString()),new Error(C);if(t&&t.length>0){let e=!1;for(let n=0;n<t.length;n++)if(t[n]===b.frameContext){e=!0;break}if(!e)throw new Error(`This call is only allowed in following contexts: ${JSON.stringify(t)}. Current context: "${b.frameContext}".`)}return we(e)}function He(e=c){const t=Z(b.clientSupportedSDKVersion,e);return!isNaN(t)&&t>=0}function Ue(){return b.hostClientType==L.android||b.hostClientType==L.ios||b.hostClientType==L.ipados}function xe(e=c){if(!Ue()){throw{errorCode:k.NOT_SUPPORTED_ON_PLATFORM}}if(!He(e)){throw{errorCode:k.OLD_PLATFORM}}}function Ve(e){let t=b.additionalValidOrigins.concat(e.filter((e=>"string"==typeof e&&g.test(e))));const n={};t=t.filter((e=>!n[e]&&(n[e]=!0,!0))),b.additionalValidOrigins=t}function Be(e){return null==e}var We=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};let ze=[];const je=t("validateOrigin");function Ge(){return We(this,void 0,void 0,(function*(){yield $e()}))}function qe(){return 0!==ze.length}function $e(){return We(this,void 0,void 0,(function*(){return qe()?ze:ce()?(ze=p,p):fetch(m).then((e=>{if(!e.ok)throw new Error("Invalid Response from Fetch Call");return e.json().then((e=>{if(Je(JSON.stringify(e)))return ze=e.validOrigins,ze;throw new Error("Valid Origins List Is Invalid")}))})).catch((e=>(je("validOrigins fetch call to CDN failed with error: %s. Defaulting to fallback list",e),ze=p,ze)))}))}function Je(e){let t=JSON.parse(e);try{t=JSON.parse(e)}catch(e){return!1}if(!t.validOrigins)return!1;for(const e of t.validOrigins)try{new URL("https://"+e)}catch(t){return je("isValidOriginsFromCDN call failed to validate origin: %s",e),!1}return!0}function Ke(e,t){if("*."===e.substring(0,2)){const n=e.substring(1);if(t.length>n.length&&t.split(".").length===n.split(".").length&&t.substring(t.length-n.length)===n)return!0}else if(e===t)return!0;return!1}function Ze(e){return $e().then((t=>{if(!re(e))return je("Origin %s is invalid because it is not using https protocol. Protocol being used: %s",e,e.protocol),!1;const n=e.host;if(t.some((e=>Ke(e,n))))return!0;for(const e of b.additionalValidOrigins){if(Ke("https://"===e.substring(0,8)?e.substring(8):e,n))return!0}return je("Origin %s is invalid because it is not an origin approved by this library or included in the call to app.initialize.\nOrigins approved by this library: %o\nOrigins included in app.initialize: %o",e,t,b.additionalValidOrigins),!1}))}var Qe;!function(e){let t,n,o,i;function r(e){return new Promise(((n,o)=>{if(b.hostClientType===L.desktop||b.hostClientType===L.android||b.hostClientType===L.ios||b.hostClientType===L.ipados||b.hostClientType===L.macos||b.hostClientType===L.rigel||b.hostClientType===L.teamsRoomsWindows||b.hostClientType===L.teamsRoomsAndroid||b.hostClientType===L.teamsPhones||b.hostClientType===L.teamsDisplays||b.hostClientType===L.surfaceHub){const t=document.createElement("a");t.href=e.url,n(on("authentication.authenticate",[t.href,e.width,e.height,e.isExternal]).then((([e,t])=>{if(e)return t;throw new Error(t)})))}else t={success:n,fail:o},c(e)}))}function a(e){return new Promise((t=>{t(on("authentication.getAuthToken",[null==e?void 0:e.resources,null==e?void 0:e.claims,null==e?void 0:e.silent]))})).then((([e,t])=>{if(e)return t;throw new Error(t)}))}function s(){return new Promise((e=>{e(on("authentication.getUser"))})).then((([e,t])=>{if(e)return t;throw new Error(t)}))}function l(){u();try{Gt.childWindow&&Gt.childWindow.close()}finally{Gt.childWindow=null,Gt.childOrigin=null}}function c(e){l();let t=e.width||600,n=e.height||400;t=Math.min(t,Gt.currentWindow.outerWidth-400),n=Math.min(n,Gt.currentWindow.outerHeight-200);const o=document.createElement("a");o.href=e.url.replace("{oauthRedirectMethod}","web");let i=void 0!==Gt.currentWindow.screenLeft?Gt.currentWindow.screenLeft:Gt.currentWindow.screenX,r=void 0!==Gt.currentWindow.screenTop?Gt.currentWindow.screenTop:Gt.currentWindow.screenY;i+=Gt.currentWindow.outerWidth/2-t/2,r+=Gt.currentWindow.outerHeight/2-n/2,Gt.childWindow=Gt.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+r+", left="+i+", width="+t+", height="+n),Gt.childWindow?d():p("FailedToOpenWindow")}function u(){n&&(clearInterval(n),n=0),kt("initialize"),kt("navigateCrossDomain")}function d(){u(),n=Gt.currentWindow.setInterval((()=>{if(!Gt.childWindow||Gt.childWindow.closed)p("CancelledByUser");else{const e=Gt.childOrigin;try{Gt.childOrigin="*",Tn("ping")}finally{Gt.childOrigin=e}}}),100),Ot("initialize",(()=>[H.authentication,b.hostClientType])),Ot("navigateCrossDomain",(()=>!1))}function f(e){try{t&&t.success(e)}finally{t=void 0,l()}}function p(e){try{t&&t.fail(new Error(e))}finally{t=void 0,l()}}function m(e,t,n){if(e){const o=document.createElement("a");o.href=decodeURIComponent(e),o.host&&o.host!==le().location.host&&"outlook.office.com"===o.host&&o.search.indexOf("client_type=Win32_Outlook")>-1&&(t&&"result"===t&&(n&&(o.href=g(o.href,"result",n)),Gt.currentWindow.location.assign(g(o.href,"authSuccess",""))),t&&"reason"===t&&(n&&(o.href=g(o.href,"reason",n)),Gt.currentWindow.location.assign(g(o.href,"authFailure",""))))}}function g(e,t,n){const o=e.indexOf("#");let i=-1===o?"#":e.substr(o);return i=i+"&"+t+(""!==n?"="+n:""),(e=-1===o?e:e.substr(0,o))+i}e.initialize=function(){Ot("authentication.authenticate.success",f,!1),Ot("authentication.authenticate.failure",p,!1)},e.registerAuthenticationHandlers=function(e){o=e},e.authenticate=function(e){const t=void 0!==e,n=t?e:o;if(!n)throw new Error("No parameters are provided for authentication");return Ne(Ce,H.content,H.sidePanel,H.settings,H.remove,H.task,H.stage,H.meetingStage),r(n).then((e=>{try{return n&&n.successCallback?(n.successCallback(e),""):e}finally{t||(o=void 0)}})).catch((e=>{try{if(n&&n.failureCallback)return n.failureCallback(e.message),"";throw e}finally{t||(o=void 0)}}))},e.getAuthToken=function(e){return Le(),a(e).then((t=>e&&e.successCallback?(e.successCallback(t),""):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),"";throw t}))},e.getUser=function(e){return Le(),s().then((t=>e&&e.successCallback?(e.successCallback(t),null):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),null;throw t}))},e.notifySuccess=function(e,t){m(t,"result",e),Ne(Ce,H.authentication),sn("authentication.authenticate.success",[e]),Pn(Gt.parentWindow,(()=>setTimeout((()=>Gt.currentWindow.close()),200)))},e.notifyFailure=function(e,t){m(t,"reason",e),Ne(Ce,H.authentication),sn("authentication.authenticate.failure",[e]),Pn(Gt.parentWindow,(()=>setTimeout((()=>Gt.currentWindow.close()),200)))},function(e){e.Public="public",e.EUDB="eudb",e.Other="other"}(i=e.DataResidency||(e.DataResidency={}))}(Qe||(Qe={}));const Xe=a.V_2;function Ye(e,t){if(Ne(Ce,H.content,H.sidePanel,H.task,H.meetingStage),!ot.update.isSupported())throw z;an(e,"tasks.updateTask",[t])}function et(e,t,n,o){if(Ne(Ce,H.content,H.sidePanel,H.meetingStage),!ot.url.isSupported())throw z;o&&Ot("messageForParent",o);an(e,"tasks.startTask",[ot.url.getDialogInfoFromUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),kt("messageForParent")}))}function tt(e,t,n,o){if(Ne(Ce,H.content,H.sidePanel,H.meetingStage),!ot.url.bot.isSupported())throw z;o&&Ot("messageForParent",o);an(e,"tasks.startTask",[ot.url.getDialogInfoFromBotUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),kt("messageForParent")}))}function nt(e,t,n){if(Ne(Ce,H.content,H.task),!ot.url.isSupported())throw z;an(e,"tasks.completeTask",[t,n?Array.isArray(n)?n:[n]:[]])}var ot,it;!function(e){const t=[];function n(e){b.frameContext&&(b.frameContext===H.task?t.push(e):kt("messageForChild"))}let o,r,a;e.initialize=function(){Ot("messageForChild",n,!1)},function(e){function n(){return Ne(Ce)&&void 0!==(Ce.supports.dialog&&Ce.supports.dialog.url)}let o;function r(e){return{url:e.url,height:e.size?e.size.height:V.Small,width:e.size?e.size.width:V.Small,title:e.title,fallbackUrl:e.fallbackUrl}}e.open=function(e,t,n){et(i(Xe,s.Dialog_Url_Open),e,t,n)},e.submit=function(e,t){nt(i(Xe,s.Dialog_Url_Submit),e,t)},e.sendMessageToParentFromDialog=function(e){if(Ne(Ce,H.task),!n())throw z;an(i(Xe,s.Dialog_Url_SendMessageToParentFromDialog),"messageForParent",[e])},e.sendMessageToDialog=function(e){if(Ne(Ce,H.content,H.sidePanel,H.meetingStage),!n())throw z;an(i(Xe,s.Dialog_Url_SendMessageToDialog),"messageForChild",[e])},e.registerOnMessageFromParent=function(e){if(Ne(Ce,H.task),!n())throw z;for(kt("messageForChild"),Ot("messageForChild",e),t.reverse();t.length>0;){e(t.pop())}},e.isSupported=n,function(e){e.open=function(e,t,n){tt(i(Xe,s.Dialog_Url_Bot_Open),e,t,n)},e.isSupported=function(){return Ne(Ce)&&void 0!==(Ce.supports.dialog&&Ce.supports.dialog.url&&Ce.supports.dialog.url.bot)}}(o=e.bot||(e.bot={})),e.getDialogInfoFromUrlDialogInfo=r,e.getDialogInfoFromBotUrlDialogInfo=function(e){const t=r(e);return t.completionBotId=e.completionBotId,t}}(o=e.url||(e.url={})),e.isSupported=function(){return!(!Ne(Ce)||!Ce.supports.dialog)},function(e){e.resize=function(e){Ye(i(Xe,s.Dialog_Update_Resize),e)},e.isSupported=function(){return!(!Ne(Ce)||!Ce.supports.dialog)&&!!Ce.supports.dialog.update}}(r=e.update||(e.update={})),function(e){function t(){const e=Ce.hostVersionsInfo&&Ce.hostVersionsInfo.adaptiveCardSchemaVersion&&!ie(Ce.hostVersionsInfo.adaptiveCardSchemaVersion);return Ne(Ce)&&void 0!==(e&&Ce.supports.dialog&&Ce.supports.dialog.card)}let n;function o(e){return{card:e.card,height:e.size?e.size.height:V.Small,width:e.size?e.size.width:V.Small,title:e.title}}function r(e){const t=o(e);return t.completionBotId=e.completionBotId,t}e.open=function(e,n){if(Ne(Ce,H.content,H.sidePanel,H.meetingStage),!t())throw z;const r=o(e);an(i(Xe,s.Dialog_AdaptiveCard_Open),"tasks.startTask",[r],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t,function(e){function t(){const e=Ce.hostVersionsInfo&&Ce.hostVersionsInfo.adaptiveCardSchemaVersion&&!ie(Ce.hostVersionsInfo.adaptiveCardSchemaVersion);return Ne(Ce)&&void 0!==(e&&Ce.supports.dialog&&Ce.supports.dialog.card&&Ce.supports.dialog.card.bot)}e.open=function(e,n){if(Ne(Ce,H.content,H.sidePanel,H.meetingStage),!t())throw z;const o=r(e);an(i(Xe,s.Dialog_AdaptiveCard_Bot_Open),"tasks.startTask",[o],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t}(n=e.bot||(e.bot={}))}(a=e.adaptiveCard||(e.adaptiveCard={}))}(ot||(ot={})),function(e){let t,n,o,i,r;!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(t=e.DisplayMode||(e.DisplayMode={}));function a(e){r&&r(e)||(Ne(Ce),sn("viewConfigItemPress",[e]))}function s(e){o&&o(e)||(Ne(Ce),sn("handleNavBarMenuItemPress",[e]))}function l(e){i&&i(e)||(Ne(Ce),sn("handleActionMenuItemPress",[e]))}function c(){return!(!Ne(Ce)||!Ce.supports.menus)}e.MenuItem=class{constructor(){this.enabled=!0,this.selected=!1}},function(e){e.dropDown="dropDown",e.popOver="popOver"}(n=e.MenuListType||(e.MenuListType={})),e.initialize=function(){Ot("navBarMenuItemPress",s,!1),Ot("actionMenuItemPress",l,!1),Ot("setModuleView",a,!1)},e.setUpViews=function(e,t){if(Ne(Ce),!c())throw z;r=t,sn("setUpViews",[e])},e.setNavBarMenu=function(e,t){if(Ne(Ce),!c())throw z;o=t,sn("setNavBarMenu",[e])},e.showActionMenu=function(e,t){if(Ne(Ce),!c())throw z;i=t,sn("showActionMenu",[e])},e.isSupported=c}(it||(it={}));const rt=a.V_2,at=5e3,st=t("app");function lt(e,t){if(ce()){return st.extend("initialize")("window object undefined at initialization"),Promise.resolve()}return ne((()=>ut(e,t)),at,new Error("SDK initialization timed out."))}const ct=st.extend("initializeHelper");function ut(e,t){return new Promise((n=>{b.initializeCalled||(b.initializeCalled=!0,At(),b.initializePromise=$t(t,e).then((({context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:o=c})=>{b.frameContext=e,b.hostClientType=t,b.clientSupportedSDKVersion=o;try{ct("Parsing %s",n);const e=JSON.parse(n);if(ct("Checking if %o is a valid runtime object",null!=e?e:"null"),!e||!e.apiVersion)throw new Error("Received runtime config is invalid");n&&_e(e)}catch(e){if(!(e instanceof SyntaxError))throw e;try{ct("Attempting to parse %s as an SDK version",n),isNaN(Z(n,c))||(b.clientSupportedSDKVersion=n);const e=JSON.parse(o);if(ct("givenRuntimeConfig parsed to %o",null!=e?e:"null"),!e)throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");_e(e)}catch(e){if(!(e instanceof SyntaxError))throw e;_e(Re(b.clientSupportedSDKVersion,ve,Te))}}b.initializeCompleted=!0})),Qe.initialize(),it.initialize(),It.config.initialize(),ot.initialize()),Array.isArray(t)&&Ve(t),void 0!==b.initializePromise?n(b.initializePromise):ct("GlobalVars.initializePromise is unexpectedly undefined")}))}function dt(e,t){!Be(t)&&Le(),Lt(e,t)}function ft(e,t){return new Promise((n=>{Ne(Ce,H.content,H.sidePanel,H.settings,H.task,H.stage,H.meetingStage),n(Qt(e,"executeDeepLink",t))}))}var pt;function mt(e){var t;return{actionInfo:e.actionInfo,app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:N.teams,clientType:e.hostClientType?e.hostClientType:L.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:b.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,sourceOrigin:e.sourceOrigin},user:{id:null!==(t=e.userObjectId)&&void 0!==t?t:"",displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0}}!function(e){const n=t("app");let o,r,a;e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(o=e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(r=e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return b.initializeCompleted},e.getFrameContext=function(){return b.frameContext},function(){if(ce())return;const e=document.getElementsByTagName("script"),t=e&&e[e.length-1]&&e[e.length-1].src,o="Today, teamsjs can only be used from a single script or you may see undefined behavior. This log line is used to help detect cases where teamsjs is loaded multiple times -- it is always written. The presence of the log itself does not indicate a multi-load situation, but multiples of these log lines will. If you would like to use teamjs from more than one script at the same time, please open an issue at https://github.com/OfficeDev/microsoft-teams-library-js/issues";t&&0!==t.length?n("teamsjs is being used from %s. %s",t,o):n("teamsjs is being used from a script tag embedded directly in your html. %s",o)}(),e.initialize=function(e){return Ge(),lt(i(rt,s.App_Initialize),e)},e._initialize=function(e){Gt.currentWindow=e},e._uninitialize=function(){b.initializeCalled&&(Rt(),b.initializeCalled=!1,b.initializeCompleted=!1,b.initializePromise=void 0,b.additionalValidOrigins=[],b.frameContext=void 0,b.hostClientType=void 0,b.isFramelessWindow=!1,Jt())},e.getContext=function(){return new Promise((e=>{Le(),e(Kt(i(rt,s.App_GetContext),"getContext"))})).then((e=>mt(e)))},e.notifyAppLoaded=function(){Le(),an(i(rt,s.App_NotifyAppLoaded),e.Messages.AppLoaded,[Oe])},e.notifySuccess=function(){Le(),an(i(rt,s.App_NotifySuccess),e.Messages.Success,[Oe])},e.notifyFailure=function(t){Le(),an(i(rt,s.App_NotifyFailure),e.Messages.Failure,[t.reason,t.message])},e.notifyExpectedFailure=function(t){Le(),an(i(rt,s.App_NotifyExpectedFailure),e.Messages.ExpectedFailure,[t.reason,t.message])},e.registerOnThemeChangeHandler=function(e){dt(i(rt,s.App_RegisterOnThemeChangeHandler),e)},e.openLink=function(e){return ft(i(rt,s.App_OpenLink),e)},function(e){e.registerBeforeSuspendOrTerminateHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerBeforeSuspendOrTerminateHandler] Handler cannot be null");Ne(Ce),Bt(e)},e.registerOnResumeHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerOnResumeHandler] Handler cannot be null");Ne(Ce),Wt(e)}}(a=e.lifecycle||(e.lifecycle={}))}(pt||(pt={}));const gt=a.V_2;function ht(e,t){return new Promise((n=>{if(Ne(Ce,H.content,H.sidePanel,H.settings,H.remove,H.task,H.stage,H.meetingStage),!It.isSupported())throw z;n(Yt(e,"navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",t))}))}function wt(e){return new Promise((t=>{if(Ne(Ce),!It.backStack.isSupported())throw z;t(Yt(e,"navigateBack","Back navigation is not supported in the current client or context."))}))}function Ct(e,t){return new Promise((n=>{if(Ne(Ce),!It.tabs.isSupported())throw z;n(Yt(e,"navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",t))}))}function vt(e,t){if(Ne(Ce),!It.isSupported())throw z;an(e,"returnFocus",[t])}function St(e,t){return new Promise((n=>{if(Ne(Ce),!It.tabs.isSupported())throw z;n(Kt(e,"getTabInstances",t))}))}function bt(e,t){return new Promise((n=>{if(Ne(Ce),!It.tabs.isSupported())throw z;n(Kt(e,"getMruTabInstances",t))}))}function yt(e,t){if(Ne(Ce,H.content,H.sidePanel,H.meetingStage),!It.isSupported())throw z;an(e,"shareDeepLink",[t.subPageId,t.subPageLabel,t.subPageWebUrl])}function Pt(e,t){if(Ne(Ce,H.content),!It.isSupported())throw z;an(e,"setFrameContext",[t])}var It;!function(e){function t(e){Pt(i(gt,s.Pages_SetCurrentFrame),e)}function n(){return!(!Ne(Ce)||!Ce.supports.pages)}let o,r,a,l,c,u;e.returnFocus=function(e){vt(i(gt,s.Pages_ReturnFocus),e)},e.registerFocusEnterHandler=function(e){Dt(i(gt,s.Pages_RegisterFocusEnterHandler),"focusEnter",e,[],(()=>{if(!n())throw z}))},e.setCurrentFrame=t,e.initializeWithFrameContext=function(e,n,o){pt.initialize(o).then((()=>n&&n())),t(e)},e.getConfig=function(){return new Promise((e=>{if(Ne(Ce,H.content,H.settings,H.remove,H.sidePanel),!n())throw z;e(Kt(i(gt,s.Pages_GetConfig),"settings.getSettings"))}))},e.navigateCrossDomain=function(e){return ht(i(gt,s.Pages_NavigateCrossDomain),e)},e.navigateToApp=function(e){return new Promise((t=>{if(Ne(Ce,H.content,H.sidePanel,H.settings,H.task,H.stage,H.meetingStage),!n())throw z;const o=i(gt,s.Pages_NavigateCrossDomain);Ce.isLegacyTeams?t(Qt(o,"executeDeepLink",oe(e))):t(Qt(o,"pages.navigateToApp",e))}))},e.shareDeepLink=function(e){return yt(i(gt,s.Pages_ShareDeepLink),e)},e.registerFullScreenHandler=function(e){Dt(i(gt,s.Pages_RegisterFullScreenHandler),"fullScreenChange",e,[],(()=>{if(!Be(e)&&!n())throw z}))},e.isSupported=n,function(e){e.navigateToTab=function(e){return Ct(i(gt,s.Pages_Tabs_NavigateToTab),e)},e.getTabInstances=function(e){return St(i(gt,s.Pages_Tabs_GetTabInstances),e)},e.getMruTabInstances=function(e){return bt(i(gt,s.Pages_Tabs_GetMruTabInstances),e)},e.isSupported=function(){return!(!Ne(Ce)||!Ce.supports.pages)&&!!Ce.supports.pages.tabs}}(o=e.tabs||(e.tabs={})),function(e){let t,n;function o(e,n){!Be(e)&&Ne(Ce,H.settings),n&&n(),t=e,!Be(e)&&an(i(gt,s.Pages_Config_RegisterOnSaveHandlerHelper),"registerHandler",["save"])}function r(e,t){!Be(e)&&Ne(Ce,H.remove,H.settings),t&&t(),n=e,!Be(e)&&an(i(gt,s.Pages_Config_RegisterOnRemoveHandlerHelper),"registerHandler",["remove"])}function a(e){const n=new l(e);t?t(n):Gt.childWindow?Tn("settings.save",[e]):n.notifySuccess()}e.initialize=function(){Ot("settings.save",a,!1),Ot("settings.remove",c,!1)},e.setValidityState=function(e){if(Ne(Ce,H.settings,H.remove),!d())throw z;an(i(gt,s.Pages_Config_SetValidityState),"settings.setValidityState",[e])},e.setConfig=function(e){return new Promise((t=>{if(Ne(Ce,H.content,H.settings,H.sidePanel),!d())throw z;t(Qt(i(gt,s.Pages_Config_SetConfig),"settings.setSettings",e))}))},e.registerOnSaveHandler=function(e){o(e,(()=>{if(!Be(e)&&!d())throw z}))},e.registerOnSaveHandlerHelper=o,e.registerOnRemoveHandler=function(e){r(e,(()=>{if(!Be(e)&&!d())throw z}))},e.registerOnRemoveHandlerHelper=r,e.registerChangeConfigHandler=function(e){Dt(i(gt,s.Pages_Config_RegisterChangeConfigHandler),"changeSettings",e,[H.content],(()=>{if(!d())throw z}))};class l{constructor(e){this.notified=!1,this.result=e||{}}notifySuccess(){this.ensureNotNotified(),an(i(gt,s.Settings_Save_Success),"settings.save.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),an(i(gt,s.Settings_Save_Failure),"settings.save.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")}}function c(){const e=new u;n?n(e):Gt.childWindow?Tn("settings.remove",[]):e.notifySuccess()}class u{constructor(){this.notified=!1}notifySuccess(){this.ensureNotNotified(),an(i(gt,s.Settings_Remove_Success),"settings.remove.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),an(i(gt,s.Settings_Remove_Failure),"settings.remove.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The removeEventType may only notify success or failure once.")}}function d(){return!(!Ne(Ce)||!Ce.supports.pages)&&!!Ce.supports.pages.config}e.isSupported=d}(r=e.config||(e.config={})),function(e){let t;function n(){return wt(i(gt,s.Pages_BackStack_NavigateBack))}function o(e,n,o){!Be(n)&&Ne(Ce),o&&o(),t=n,!Be(n)&&an(e,"registerHandler",["backButton"])}function r(){t&&t()||(Gt.childWindow?Tn("backButtonPress",[]):n())}function a(){return!(!Ne(Ce)||!Ce.supports.pages)&&!!Ce.supports.pages.backStack}e._initialize=function(){Ot("backButtonPress",r,!1)},e.navigateBack=n,e.registerBackButtonHandler=function(e){o(i(gt,s.Pages_BackStack_RegisterBackButtonHandler),e,(()=>{if(!Be(e)&&!a())throw z}))},e.registerBackButtonHandlerHelper=o,e.isSupported=a}(a=e.backStack||(e.backStack={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.pages)&&!!Ce.supports.pages.fullTrust}e.enterFullscreen=function(){if(Ne(Ce,H.content),!t())throw z;an(i(gt,s.Pages_FullTrust_EnterFullscreen),"enterFullscreen",[])},e.exitFullscreen=function(){if(Ne(Ce,H.content),!t())throw z;an(i(gt,s.Pages_FullTrust_ExitFullscreen),"exitFullscreen",[])},e.isSupported=t}(l=e.fullTrust||(e.fullTrust={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.pages)&&!!Ce.supports.pages.appButton}e.onClick=function(e){Dt(i(gt,s.Pages_AppButton_OnClick),"appButtonClick",e,[H.content],(()=>{if(!t())throw z}))},e.onHoverEnter=function(e){Dt(i(gt,s.Pages_AppButton_OnHoverEnter),"appButtonHoverEnter",e,[H.content],(()=>{if(!t())throw z}))},e.onHoverLeave=function(e){Dt(i(gt,s.Pages_AppButton_OnHoverLeave),"appButtonHoverLeave",e,[H.content],(()=>{if(!t())throw z}))},e.isSupported=t}(c=e.appButton||(e.appButton={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.pages)&&!!Ce.supports.pages.currentApp}e.navigateTo=function(e){return new Promise((n=>{if(Ne(Ce,H.content,H.sidePanel,H.settings,H.task,H.stage,H.meetingStage),!t())throw z;n(en(i(gt,s.Pages_CurrentApp_NavigateTo),"pages.currentApp.navigateTo",e))}))},e.navigateToDefaultPage=function(){return new Promise((e=>{if(Ne(Ce,H.content,H.sidePanel,H.settings,H.task,H.stage,H.meetingStage),!t())throw z;e(en(i(gt,s.Pages_CurrentApp_NavigateToDefaultPage),"pages.currentApp.navigateToDefaultPage"))}))},e.isSupported=t}(u=e.currentApp||(e.currentApp={}))}(It||(It={}));const Tt=t("handlers");class Et{static initializeHandlers(){Et.handlers.themeChange=Nt,Et.handlers.load=Ut,Et.handlers.beforeUnload=Vt,It.backStack._initialize()}static uninitializeHandlers(){Et.handlers={},Et.themeChangeHandler=null,Et.loadHandler=null,Et.beforeUnloadHandler=null,Et.beforeSuspendOrTerminateHandler=null,Et.resumeHandler=null}}function At(){Et.initializeHandlers()}function Rt(){Et.uninitializeHandlers()}Et.handlers={},Et.themeChangeHandler=null,Et.loadHandler=null,Et.beforeUnloadHandler=null,Et.beforeSuspendOrTerminateHandler=null,Et.resumeHandler=null;const Ft=Tt.extend("callHandler");function _t(e,t){const n=Et.handlers[e];if(n){Ft("Invoking the registered handler for message %s with arguments %o",e,t);return[!0,n.apply(this,t)]}return Gt.childWindow?(Tn(e,t),[!1,void 0]):(Ft("Handler for action message %s not found.",e),[!1,void 0])}function Ot(e,t,n=!0,o=[]){t?(Et.handlers[e]=t,n&&an(i(a.V_0,s.RegisterHandler),"registerHandler",[e,...o])):delete Et.handlers[e]}function kt(e){delete Et.handlers[e]}function Mt(e){return null!=Et.handlers[e]}function Dt(e,t,n,o,i){n&&Ne(Ce,...o),i&&i(),Ot(t,n)}function Lt(e,t){Et.themeChangeHandler=t,!Be(t)&&an(e,"registerHandler",["themeChange"])}function Nt(e){Et.themeChangeHandler&&Et.themeChangeHandler(e),Gt.childWindow&&Tn("themeChange",[e])}function Ht(e){Et.loadHandler=e,!Be(e)&&an(i(a.V_2,s.RegisterHandler),"registerHandler",["load"])}function Ut(e){Et.resumeHandler?Et.resumeHandler(e):Et.loadHandler&&Et.loadHandler(e),Gt.childWindow&&Tn("load",[e])}function xt(e){Et.beforeUnloadHandler=e,!Be(e)&&an(i(a.V_2,s.RegisterHandler),"registerHandler",["beforeUnload"])}function Vt(){const e=()=>{sn("readyToUnload",[])};Et.beforeSuspendOrTerminateHandler?(Et.beforeSuspendOrTerminateHandler(),Gt.childWindow?Tn("beforeUnload"):e()):Et.beforeUnloadHandler&&Et.beforeUnloadHandler(e)||(Gt.childWindow?Tn("beforeUnload"):e())}function Bt(e){Et.beforeSuspendOrTerminateHandler=e,!Be(e)&&sn("registerHandler",["beforeUnload"])}function Wt(e){Et.resumeHandler=e,!Be(e)&&sn("registerHandler",["load"])}var zt=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};const jt=t("communication");class Gt{}class qt{}function $t(e,t){if(qt.messageListener=e=>zt(this,void 0,void 0,(function*(){return yield dn(e)})),Gt.currentWindow=Gt.currentWindow||le(),Gt.parentWindow=Gt.currentWindow.parent!==Gt.currentWindow.self?Gt.currentWindow.parent:Gt.currentWindow.opener,(Gt.parentWindow||e)&&Gt.currentWindow.addEventListener("message",qt.messageListener,!1),!Gt.parentWindow){const e=Gt.currentWindow;if(!e.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));b.isFramelessWindow=!0,e.onNativeMessage=hn}try{return Gt.parentOrigin="*",nn(t,"initialize",[Oe,me]).then((([e,t,n,o])=>({context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:o})))}finally{Gt.parentOrigin=null}}function Jt(){Gt.currentWindow&&Gt.currentWindow.removeEventListener("message",qt.messageListener,!1),Gt.currentWindow=null,Gt.parentWindow=null,Gt.parentOrigin=null,Gt.childWindow=null,Gt.childOrigin=null,qt.parentMessageQueue=[],qt.childMessageQueue=[],qt.nextMessageId=0,qt.callbacks={},qt.promiseCallbacks={}}function Kt(e,t,...n){return nn(e,t,n).then((([e])=>e))}function Zt(e,...t){return on(e,t).then((([e])=>e))}function Qt(e,t,...n){return nn(e,t,n).then((([e,t])=>{if(!e)throw new Error(t)}))}function Xt(e,...t){return on(e,t).then((([e,t])=>{if(!e)throw new Error(t)}))}function Yt(e,t,n,...o){return nn(e,t,o).then((([e,t])=>{if(!e)throw new Error(t||n)}))}function en(e,t,...n){return nn(e,t,n).then((([e,t])=>{if(e)throw e;return t}))}function tn(e,...t){return on(e,t).then((([e,t])=>{if(e)throw e;return t}))}function nn(e,t,n=void 0){if(!r(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return new Promise((o=>{o(rn(cn(e,t,n).id))}))}function on(e,t=void 0){return new Promise((n=>{n(rn(cn(i(a.V_0,"testing"),e,t).id))}))}function rn(e){return new Promise((t=>{qt.promiseCallbacks[e]=t}))}function an(e,t,n,o){let i;if(n instanceof Function?o=n:n instanceof Array&&(i=n),!r(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);const a=cn(e,t,i);o&&(qt.callbacks[a.id]=o)}function sn(e,t,n){let o;t instanceof Function?n=t:t instanceof Array&&(o=t);const r=cn(i(a.V_0,"testing"),e,o);n&&(qt.callbacks[r.id]=n)}qt.parentMessageQueue=[],qt.childMessageQueue=[],qt.nextMessageId=0,qt.callbacks={},qt.promiseCallbacks={};const ln=jt.extend("sendMessageToParentHelper");function cn(e,t,n){const o=ln,i=Gt.parentWindow,r=En(e,t,n);if(o("Message %i information: %o",r.id,{actionName:t,args:n}),b.isFramelessWindow)Gt.currentWindow&&Gt.currentWindow.nativeInterface&&(o("Sending message %i to parent via framelessPostMessage interface",r.id),Gt.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(r)));else{const e=Sn(i);i&&e?(o("Sending message %i to parent via postMessage",r.id),i.postMessage(r,e)):(o("Adding message %i to parent message queue",r.id),vn(i).push(r))}return r}const un=jt.extend("processMessage");function dn(e){return zt(this,void 0,void 0,(function*(){if(!e||!e.data||"object"!=typeof e.data)return void un("Unrecognized message format received by app, message being ignored. Message: %o",e);const t=e.source||e.originalEvent&&e.originalEvent.source,n=e.origin||e.originalEvent&&e.originalEvent.origin;return pn(t,n).then((o=>{o?(mn(t,n),t===Gt.parentWindow?hn(e):t===Gt.childWindow&&Cn(e)):un("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin")}))}))}const fn=jt.extend("shouldProcessMessage");function pn(e,t){return zt(this,void 0,void 0,(function*(){if(Gt.currentWindow&&e===Gt.currentWindow)return fn("Should not process message because it is coming from the current window"),!1;if(Gt.currentWindow&&Gt.currentWindow.location&&t&&t===Gt.currentWindow.location.origin)return!0;{const e=yield Ze(new URL(t));return e||fn("Message has an invalid origin of %s",t),e}}))}function mn(e,t){b.isFramelessWindow||Gt.parentWindow&&!Gt.parentWindow.closed&&e!==Gt.parentWindow?Gt.childWindow&&!Gt.childWindow.closed&&e!==Gt.childWindow||(Gt.childWindow=e,Gt.childOrigin=t):(Gt.parentWindow=e,Gt.parentOrigin=t),Gt.parentWindow&&Gt.parentWindow.closed&&(Gt.parentWindow=null,Gt.parentOrigin=null),Gt.childWindow&&Gt.childWindow.closed&&(Gt.childWindow=null,Gt.childOrigin=null),yn(Gt.parentWindow),yn(Gt.childWindow)}const gn=jt.extend("handleParentMessage");function hn(e){const t=gn;if("id"in e.data&&"number"==typeof e.data.id){const n=e.data,o=qt.callbacks[n.id];t("Received a response from parent for message %i",n.id),o&&(t("Invoking the registered callback for message %i with arguments %o",n.id,n.args),o.apply(null,[...n.args,n.isPartialResponse]),wn(e)||(t("Removing registered callback for message %i",n.id),delete qt.callbacks[n.id]));const i=qt.promiseCallbacks[n.id];i&&(t("Invoking the registered promise callback for message %i with arguments %o",n.id,n.args),i(n.args),t("Removing registered promise callback for message %i",n.id),delete qt.promiseCallbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){const n=e.data;t("Received an action message %s from parent",n.func),_t(n.func,n.args)}else t("Received an unknown message: %O",e)}function wn(e){return!0===e.data.isPartialResponse}function Cn(e){if("id"in e.data&&"func"in e.data){const t=e.data,[n,o]=_t(t.func,t.args);n&&void 0!==o?In(t.id,Array.isArray(o)?o:[o]):sn(t.func,t.args,((...e)=>{if(Gt.childWindow){const n=e.pop();In(t.id,e,n)}}))}}function vn(e){return e===Gt.parentWindow?qt.parentMessageQueue:e===Gt.childWindow?qt.childMessageQueue:[]}function Sn(e){return e===Gt.parentWindow?Gt.parentOrigin:e===Gt.childWindow?Gt.childOrigin:null}const bn=jt.extend("flushMessageQueue");function yn(e){const t=Sn(e),n=vn(e),o=e==Gt.parentWindow?"parent":"child";for(;e&&t&&n.length>0;){const i=n.shift();bn("Flushing message %i from "+o+" message queue via postMessage.",null==i?void 0:i.id),e.postMessage(i,t)}}function Pn(e,t){let n;n=Gt.currentWindow.setInterval((()=>{0===vn(e).length&&(clearInterval(n),t())}),100)}function In(e,t,n){const o=Gt.childWindow,i=An(e,t,n),r=Sn(o);o&&r&&o.postMessage(i,r)}function Tn(e,t){const n=Gt.childWindow,o=Rn(e,t),i=Sn(n);n&&i?n.postMessage(o,i):vn(n).push(o)}function En(e,t,n){return{id:qt.nextMessageId++,func:t,timestamp:Date.now(),args:n||[],apiversiontag:e}}function An(e,t,n){return{id:e,args:t||[],isPartialResponse:n}}function Rn(e,t){return{func:e,args:t||[]}}var Fn,_n,On,kn,Mn;function Dn(e,t){Ne(Ce),sn("uploadCustomApp",[e],t||K())}function Ln(e,t,n){Ne(Ce),sn(e,t,n)}function Nn(e,t){if(Ne(Ce),!Gt.childWindow)throw new Error("The child window has not yet been initialized or is not present");Tn(e,t)}function Hn(e,t){Ne(Ce),Ot(e,((...e)=>t.apply(this,e)))}function Un(e,t){Ne(Ce),Ot("userSettingsChange",t,!0,[e])}function xn(e){Ne(Ce,H.content,H.task);sn("openFilePreview",[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId,e.sizeInBytes])}!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.logs)}e.registerGetLogHandler=function(e){if(!Be(e)&&Ne(Ce),!Be(e)&&!t())throw z;e?Ot("log.request",(()=>{sn("log.receive",[e()])})):kt("log.request")},e.isSupported=t}(Fn||(Fn={})),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(_n||(_n={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(On||(On={})),function(e){e.fileOpenPreference="fileOpenPreference",e.theme="theme"}(kn||(kn={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.conversations)}e.openConversation=function(e){return new Promise((n=>{if(Ne(Ce,H.content),!t())throw z;const o=Xt("conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&Ot("startConversation",((t,n,o,i)=>{var r;return null===(r=e.onStartConversation)||void 0===r?void 0:r.call(e,{subEntityId:t,conversationId:n,channelId:o,entityId:i})})),e.onCloseConversation&&Ot("closeConversation",((t,n,o,i)=>{var r;return null===(r=e.onCloseConversation)||void 0===r?void 0:r.call(e,{subEntityId:t,conversationId:n,channelId:o,entityId:i})})),n(o)}))},e.closeConversation=function(){if(Ne(Ce,H.content),!t())throw z;sn("conversations.closeConversation"),kt("startConversation"),kt("closeConversation")},e.getChatMembers=function(){return new Promise((e=>{if(Ne(Ce),!t())throw z;e(Zt("getChatMembers"))}))},e.isSupported=t}(Mn||(Mn={}));const Vn="users";function Bn(e,t,n){if(0===e.length)throw new Error("Must have at least one user when creating a chat deep link");const o=`${Vn}=`+e.map((e=>encodeURIComponent(e))).join(","),i=void 0===t?"":`&topicName=${encodeURIComponent(t)}`,r=void 0===n?"":`&message=${encodeURIComponent(n)}`;return`${h}://${w}/l/chat/0/0?${o}${i}${r}`}function Wn(e,t,n){if(0===e.length)throw new Error("Must have at least one target when creating a call deep link");const o=`${Vn}=`+e.map((e=>encodeURIComponent(e))).join(","),i=void 0===t?"":`&withVideo=${encodeURIComponent(t)}`,r=void 0===n?"":`&source=${encodeURIComponent(n)}`;return`${h}://${w}/l/call/0/0?${o}${i}${r}`}function zn(e,t,n,o,i){const r=void 0===e?"":"attendees="+e.map((e=>encodeURIComponent(e))).join(","),a=void 0===t?"":`&startTime=${encodeURIComponent(t)}`,s=void 0===n?"":`&endTime=${encodeURIComponent(n)}`,l=void 0===o?"":`&subject=${encodeURIComponent(o)}`,c=void 0===i?"":`&content=${encodeURIComponent(i)}`;return`${h}://${w}/l/meeting/new?${r}${a}${s}${l}${c}`}function jn(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return`${h}://${w}/l/app/${encodeURIComponent(e)}`}var Gn;!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.appInstallDialog)}e.openAppInstallDialog=function(e){return new Promise((n=>{if(Ne(Ce,H.content,H.sidePanel,H.settings,H.task,H.stage,H.meetingStage),!t())throw new Error("Not supported");Ce.isLegacyTeams?n(Xt("executeDeepLink",jn(e.appId))):(sn("appInstallDialog.openAppInstallDialog",[e]),n())}))},e.isSupported=t}(Gn||(Gn={}));const qn=a.V_1,$n=t("media");var Jn;function Kn(e,t){if(null==e||null==t||e.length<=0)return null;let n=null,o=1;return e.sort(((e,t)=>e.sequence>t.sequence?1:-1)),e.forEach((e=>{e.sequence==o&&(n=n?new Blob([n,e.file],{type:t}):new Blob([e.file],{type:t}),o++)})),n}function Zn(e,t){if(null==e||null==t)return null;const n=atob(e.chunk),o=new Array(n.length);for(let e=0;e<n.length;e++)o[e]=n.charCodeAt(e);const i=new Uint8Array(o),r=new Blob([i],{type:t});return{sequence:e.chunkSequence,file:r}}function Qn(e){to(e)?xe("2.0.2"):no(e)?xe(u):eo(e)&&xe("2.0.4")}function Xn(e){return!(e.mediaType!=Jn.MediaType.Video||!e.videoProps||!e.videoProps.videoController)}function Yn(e){return!(null==e||e.maxMediaCount>10)}function eo(e){var t;return!((null==e?void 0:e.mediaType)!=Jn.MediaType.Image||!(null===(t=null==e?void 0:e.imageProps)||void 0===t?void 0:t.imageOutputFormats))}function to(e){return!(!e||e.mediaType!=Jn.MediaType.VideoAndImage&&!e.videoAndImageProps)}function no(e){return!(!e||e.mediaType!=Jn.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}function oo(e,t,n){return null!=e&&null!=t&&t==Jn.FileFormat.ID&&null!=n}function io(e){return!(null==e||e.length<=0||e.length>10)}function ro(e){return!e||!(null===e.timeOutIntervalInSec||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec<=0||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec>60)}function ao(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}!function(e){let t,n,o,r,a,l,c;!function(e){e.Base64="base64",e.ID="id"}(t=e.FileFormat||(e.FileFormat={}));class d{}function p(){return!(!Ne(Ce)||!Ce.supports.permissions)}e.File=d,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");if(Ne(Ce,H.content,H.task),b.isFramelessWindow)if(He("1.7.0"))an(i(qn,s.Media_CaptureImage),"captureImage",e);else{e({errorCode:k.OLD_PLATFORM},[])}else{e({errorCode:k.NOT_SUPPORTED_ON_PLATFORM},[])}},e.hasPermission=function(){if(Ne(Ce,H.content,H.task),!p())throw z;const e=M.Media;return new Promise((t=>{t(en(i(qn,s.Media_HasPermission),"permissions.has",e))}))},e.requestPermission=function(){if(Ne(Ce,H.content,H.task),!p())throw z;const e=M.Media;return new Promise((t=>{t(en(i(qn,s.Media_RequestPermission),"permissions.request",e))}))};class m extends d{constructor(e){super(),e&&(this.content=e.content,this.format=e.format,this.mimeType=e.mimeType,this.name=e.name,this.preview=e.preview,this.size=e.size)}getMedia(e){if(!e)throw new Error("[get Media] Callback cannot be null");if(Ne(Ce,H.content,H.task),He(f))if(oo(this.mimeType,this.format,this.content))He("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e);else{e({errorCode:k.INVALID_ARGUMENTS},new Blob)}else{e({errorCode:k.OLD_PLATFORM},new Blob)}}getMediaViaCallback(e){const t={mediaMimeType:this.mimeType,assembleAttachment:[]},n=[this.content];an(i(qn,s.Media_GetMedia),"getMedia",n,(function(n){if(e)if(n&&n.error)e(n.error,new Blob);else if(n&&n.mediaChunk)if(n.mediaChunk.chunkSequence<=0){const o=Kn(t.assembleAttachment,t.mediaMimeType);e(n.error,null!=o?o:new Blob)}else{const e=Zn(n.mediaChunk,t.mediaMimeType);e?t.assembleAttachment.push(e):$n(`Received a null assemble attachment for when decoding chunk sequence ${n.mediaChunk.chunkSequence}; not including the chunk in the assembled file.`)}else e({errorCode:k.INTERNAL_ERROR,message:"data received is null"},new Blob)}))}getMediaViaHandler(e){const t=Q(),n={mediaMimeType:this.mimeType,assembleAttachment:[]},o=[t,this.content];this.content&&!Be(e)&&an(i(qn,s.Media_GetMedia),"getMedia",o),Ot("getMedia"+t,(function(o){if(e){const i=JSON.parse(o);if(i.error)e(i.error,new Blob),kt("getMedia"+t);else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){const o=Kn(n.assembleAttachment,n.mediaMimeType);e(i.error,null!=o?o:new Blob),kt("getMedia"+t)}else{const e=Zn(i.mediaChunk,n.mediaMimeType);e&&n.assembleAttachment.push(e)}else e({errorCode:k.INTERNAL_ERROR,message:"data received is null"},new Blob),kt("getMedia"+t)}}))}}e.Media=m;class g{constructor(e){this.controllerCallback=e}notifyEventToHost(e,t){Ne(Ce,H.content,H.task);try{xe(u)}catch(e){return void(t&&t(e))}const n={mediaType:this.getMediaType(),mediaControllerEvent:e};an(i(qn,s.Media_Controller),"media.controller",[n],(e=>{t&&t(e)}))}stop(e){this.notifyEventToHost(n.StopRecording,e)}}e.VideoController=class extends g{getMediaType(){return a.Video}notifyEventToApp(e){if(this.controllerCallback)switch(e){case n.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}}},function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(n=e.MediaControllerEvent||(e.MediaControllerEvent={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(o=e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(r=e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(a=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(l=e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(c=e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(e,t){if(!t)throw new Error("[select Media] Callback cannot be null");if(Ne(Ce,H.content,H.task),!He(f)){const e={errorCode:k.OLD_PLATFORM};return void t(e,[])}try{Qn(e)}catch(e){return void t(e,[])}if(!Yn(e)){const e={errorCode:k.INVALID_ARGUMENTS};return void t(e,[])}const n=[e];an(i(qn,s.Media_SelectMedia),"selectMedia",n,((n,o,i)=>{var r,a;if(i)return void(Xn(e)&&(null===(a=null===(r=null==e?void 0:e.videoProps)||void 0===r?void 0:r.videoController)||void 0===a||a.notifyEventToApp(i)));if(!o)return void t(n,[]);const s=[];for(const e of o)s.push(new m(e));t(n,s)}))},e.viewImages=function(e,t){if(!t)throw new Error("[view images] Callback cannot be null");if(Ne(Ce,H.content,H.task),!He(f)){return void t({errorCode:k.OLD_PLATFORM})}if(!io(e)){return void t({errorCode:k.INVALID_ARGUMENTS})}const n=[e];an(i(qn,s.Media_ViewImages),"viewImages",n,t)},e.scanBarCode=function(e,t){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");if(Ne(Ce,H.content,H.task),b.hostClientType!==L.desktop&&b.hostClientType!==L.web&&b.hostClientType!==L.rigel&&b.hostClientType!==L.teamsRoomsWindows&&b.hostClientType!==L.teamsRoomsAndroid&&b.hostClientType!==L.teamsPhones&&b.hostClientType!==L.teamsDisplays)if(He("1.9.0"))if(ro(t))an(i(qn,s.Media_ScanBarCode),"media.scanBarCode",[t],e);else{e({errorCode:k.INVALID_ARGUMENTS},"")}else{e({errorCode:k.OLD_PLATFORM},"")}else{e({errorCode:k.NOT_SUPPORTED_ON_PLATFORM},"")}}}(Jn||(Jn={}));const so=a.V_2;var lo,co;!function(e){function t(){return!!(Ne(Ce)&&Ce.supports.barCode&&Ce.supports.permissions)}e.scanBarCode=function(e){return new Promise((n=>{if(Ne(Ce,H.content,H.task),!t())throw z;if(!ro(e))throw{errorCode:k.INVALID_ARGUMENTS};n(en(i(so,s.BarCode_ScanBarCode),"media.scanBarCode",e))}))},e.hasPermission=function(){if(Ne(Ce,H.content,H.task),!t())throw z;const e=M.Media;return new Promise((t=>{t(en(i(so,s.BarCode_HasPermission),"permissions.has",e))}))},e.requestPermission=function(){if(Ne(Ce,H.content,H.task),!t())throw z;const e=M.Media;return new Promise((t=>{t(en(i(so,s.BarCode_RequestPermission),"permissions.request",e))}))},e.isSupported=t}(lo||(lo={})),function(e){function t(e){return new Promise((t=>{if(Ne(Ce,H.content,H.task),!n())throw z;if(Ce.isLegacyTeams)t(Xt("executeDeepLink",Bn([e.user],void 0,e.message)));else{t(Xt("chat.openChat",{members:[e.user],message:e.message}))}}))}function n(){return!(!Ne(Ce)||!Ce.supports.chat)}e.openChat=t,e.openGroupChat=function(e){return new Promise((o=>{if(e.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===e.users.length){o(t({user:e.users[0],message:e.message}))}else{if(Ne(Ce,H.content,H.task),!n())throw z;if(Ce.isLegacyTeams)o(Xt("executeDeepLink",Bn(e.users,e.topic,e.message)));else{o(Xt("chat.openChat",{members:e.users,message:e.message,topic:e.topic}))}}}))},e.isSupported=n}(co||(co={}));var uo=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};const fo=a.V_2;var po;!function(e){function t(){return!!(Ne(Ce)&&navigator&&navigator.clipboard&&Ce.supports.clipboard)}e.write=function(e){return uo(this,void 0,void 0,(function*(){if(Ne(Ce,H.content,H.meetingStage,H.task,H.settings,H.stage,H.sidePanel),!t())throw z;if(!e.type||!Object.values(D).includes(e.type))throw new Error(`Blob type ${e.type} is not supported. Supported blob types are ${Object.values(D)}`);const n=yield se(e),o={mimeType:e.type,content:n};return en(i(fo,s.Clipboard_Write),"clipboard.writeToClipboard",o)}))},e.read=function(){return uo(this,void 0,void 0,(function*(){if(Ne(Ce,H.content,H.meetingStage,H.task,H.settings,H.stage,H.sidePanel),!t())throw z;if(Ue()||b.hostClientType===L.macos){const e=JSON.parse(yield tn("clipboard.readFromClipboard"));return ae(e.mimeType,e.content)}return en(i(fo,s.Clipboard_Read),"clipboard.readFromClipboard")}))},e.isSupported=t}(po||(po={}));const mo=a.V_2;var go,ho;function wo(){return Ce.hostVersionsInfo?Ce.hostVersionsInfo.adaptiveCardSchemaVersion:void 0}!function(e){function t(){return!!(Ne(Ce)&&Ce.supports.geoLocation&&Ce.supports.permissions)}let n;e.getCurrentLocation=function(){if(Ne(Ce,H.content,H.task),!t())throw z;return en(i(mo,s.GeoLocation_GetCurrentLocation),"location.getLocation",{allowChooseLocation:!1,showMap:!1})},e.hasPermission=function(){if(Ne(Ce,H.content,H.task),!t())throw z;const e=M.GeoLocation;return new Promise((t=>{t(en(i(mo,s.GeoLocation_HasPermission),"permissions.has",e))}))},e.requestPermission=function(){if(Ne(Ce,H.content,H.task),!t())throw z;const e=M.GeoLocation;return new Promise((t=>{t(en(i(mo,s.GeoLocation_RequestPermission),"permissions.request",e))}))},e.isSupported=t,function(e){function t(){return!!(Ne(Ce)&&Ce.supports.geoLocation&&Ce.supports.geoLocation.map&&Ce.supports.permissions)}e.chooseLocation=function(){if(Ne(Ce,H.content,H.task),!t())throw z;return en(i(mo,s.GeoLocation_Map_ChooseLocation),"location.getLocation",{allowChooseLocation:!0,showMap:!0})},e.showLocation=function(e){if(Ne(Ce,H.content,H.task),!t())throw z;if(!e)throw{errorCode:k.INVALID_ARGUMENTS};return en(i(mo,s.GeoLocation_ShowLocation),"location.showLocation",e)},e.isSupported=t}(n=e.map||(e.map={}))}(go||(go={}));class Co{postMessage(e,t){Ne(Ce),sn("messageForChild",[e],t||K())}addEventListener(e,t){Ne(Ce),"message"===e&&Ot("messageForParent",t)}}class vo{static get Instance(){return this._instance||(this._instance=new this)}postMessage(e,t){Ne(Ce,H.task),sn("messageForParent",[e],t||K())}addEventListener(e,t){Ne(Ce,H.task),"message"===e&&Ot("messageForChild",t)}}!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.secondaryBrowser)}e.open=function(e){if(Ne(Ce,H.content),!t())throw z;if(!e||!re(e))throw{errorCode:k.INVALID_ARGUMENTS,message:"Invalid Url: Only https URL is allowed"};return tn("secondaryBrowser.open",e.toString())},e.isSupported=t}(ho||(ho={}));const So=a.V_1;var bo;!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.location)}e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");if(Ne(Ce,H.content,H.task),!He(d))throw{errorCode:k.OLD_PLATFORM};if(!e)throw{errorCode:k.INVALID_ARGUMENTS};if(!t())throw z;an(i(So,s.Location_GetLocation),"location.getLocation",[e],n)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");if(Ne(Ce,H.content,H.task),!He(d))throw{errorCode:k.OLD_PLATFORM};if(!e)throw{errorCode:k.INVALID_ARGUMENTS};if(!t())throw z;an(i(So,s.Location_ShowLocation),"location.showLocation",[e],n)},e.isSupported=t}(bo||(bo={}));var yo,Po,Io=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};!function(e){let t,n,o,i,r,a;function s(e,n){sn("meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((o,i)=>{if(o&&null!=i)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(o)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${o.errorCode} ${o.message}`);if("boolean"!=typeof i)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");Ot("meeting.micStateChanged",(n=>Io(this,void 0,void 0,(function*(){try{const o=yield e.micMuteStateChangedCallback(n);c(o,o.isMicMuted===n.isMicMuted?t.HostInitiated:t.AppDeclinedToChange)}catch(e){c(n,t.AppFailedToChange)}}))));Ot("meeting.audioDeviceSelectionChanged",(t=>{var n;null===(n=e.audioDeviceSelectionChangedCallback)||void 0===n||n.call(e,t)})),n(i)}))}function l(e,t){sn("meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((e,n)=>{if(e&&null!=n)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(e)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${e.errorCode} ${e.message}`);if("boolean"!=typeof n)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");Mt("meeting.micStateChanged")&&kt("meeting.micStateChanged"),Mt("meeting.audioDeviceSelectionChanged")&&kt("meeting.audioDeviceSelectionChanged"),t(n)}))}function c(e,t){Ne(Ce,H.sidePanel,H.meetingStage),sn("meeting.updateMicState",[e,t])}!function(e){e[e.HostInitiated=0]="HostInitiated",e[e.AppInitiated=1]="AppInitiated",e[e.AppDeclinedToChange=2]="AppDeclinedToChange",e[e.AppFailedToChange=3]="AppFailedToChange"}(t||(t={})),function(e){e.like="like",e.heart="heart",e.laugh="laugh",e.surprised="surprised",e.applause="applause"}(n=e.MeetingReactionType||(e.MeetingReactionType={})),function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(o=e.MeetingType||(e.MeetingType={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(i=e.CallType||(e.CallType={})),function(e){e.Collaborative="Collaborative",e.ScreenShare="ScreenShare"}(r=e.SharingProtocol||(e.SharingProtocol={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),sn("getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),sn("toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage,H.settings,H.content),sn("meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage,H.task),sn("meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");Ne(Ce,H.sidePanel),sn("meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,t,n){if(!e)throw new Error("[request start live streaming] Callback cannot be null");Ne(Ce,H.sidePanel),sn("meeting.requestStartLiveStreaming",[t,n],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");Ne(Ce,H.sidePanel),sn("meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");Ne(Ce,H.sidePanel),Ot("meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,t,n={sharingProtocol:r.Collaborative}){if(!e)throw new Error("[share app content to stage] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),sn("meeting.shareAppContentToStage",[t,n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),sn("meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),sn("meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),sn("meeting.getAppContentStageSharingState",e)},e.registerSpeakingStateChangeHandler=function(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),Ot("meeting.speakingStateChanged",e)},e.registerRaiseHandStateChangedHandler=function(e){if(!e)throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),Ot("meeting.raiseHandStateChanged",e)},e.registerMeetingReactionReceivedHandler=function(e){if(!e)throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),Ot("meeting.meetingReactionReceived",e)},function(e){e.setOptions=function(e){Ne(Ce,H.sidePanel),e.contentUrl&&new URL(e.contentUrl),sn("meeting.appShareButton.setOptions",[e])}}(a=e.appShareButton||(e.appShareButton={})),e.requestAppAudioHandling=function(e,t){if(!t)throw new Error("[requestAppAudioHandling] Callback response cannot be null");if(!e.micMuteStateChangedCallback)throw new Error("[requestAppAudioHandling] Callback Mic mute state handler cannot be null");Ne(Ce,H.sidePanel,H.meetingStage),e.isAppHandlingAudio?s(e,t):l(e,t)},e.updateMicState=function(e){c(e,t.AppInitiated)}}(yo||(yo={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.monetization)}e.openPurchaseExperience=function(e,n){let o,i;return"function"==typeof e?(o=e,i=n):i=e,Ne(Ce,H.content),te((()=>new Promise((e=>{if(!t())throw z;e(tn("monetization.openPurchaseExperience",i))}))),o)},e.isSupported=t}(Po||(Po={}));const To=a.V_2;var Eo;!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.calendar)}e.openCalendarItem=function(e){return new Promise((n=>{if(Ne(Ce,H.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openCalendarItem");n(Qt(i(To,s.Calendar_OpenCalendarItem),"calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((n=>{if(Ne(Ce,H.content),!t())throw new Error("Not supported");Ce.isLegacyTeams?n(Xt("executeDeepLink",zn(e.attendees,e.startTime,e.endTime,e.subject,e.content))):n(Qt(i(To,s.Calendar_ComposeMeeting),"calendar.composeMeeting",e))}))},e.isSupported=t}(Eo||(Eo={}));const Ao=a.V_2;var Ro,Fo,_o,Oo;function ko(e){return e?e.modality&&"string"!=typeof e.modality?[!1,"modality must be a string"]:e.targetElementBoundingRect&&"object"==typeof e.targetElementBoundingRect?e.triggerType&&"string"==typeof e.triggerType?Mo(e.persona):[!1,"triggerType must be a valid string"]:[!1,"targetElementBoundingRect must be a DOMRect"]:[!1,"A request object is required"]}function Mo(e){return e?e.displayName&&"string"!=typeof e.displayName?[!1,"displayName must be a string"]:e.identifiers&&"object"==typeof e.identifiers?e.identifiers.AadObjectId||e.identifiers.Smtp||e.identifiers.Upn?e.identifiers.AadObjectId&&"string"!=typeof e.identifiers.AadObjectId?[!1,"AadObjectId identifier must be a string"]:e.identifiers.Smtp&&"string"!=typeof e.identifiers.Smtp?[!1,"Smtp identifier must be a string"]:e.identifiers.Upn&&"string"!=typeof e.identifiers.Upn?[!1,"Upn identifier must be a string"]:[!0,void 0]:[!1,"at least one valid identifier must be provided"]:[!1,"persona identifiers object must be provided"]:[!1,"persona object must be provided"]}!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.mail)}let n;e.openMailItem=function(e){return new Promise((n=>{if(Ne(Ce,H.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openMailItem");n(Qt(i(Ao,s.Mail_OpenMailItem),"mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((n=>{if(Ne(Ce,H.content),!t())throw new Error("Not supported");n(Qt(i(Ao,s.Mail_ComposeMail),"mail.composeMail",e))}))},e.isSupported=t,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(n=e.ComposeMailType||(e.ComposeMailType={}))}(Ro||(Ro={})),function(e){function t(){le().print()}function n(e,t){!Be(e)&&Ne(Ce),!Be(e)&&t&&t(),Ht(e)}function o(e,t){!Be(e)&&Ne(Ce),!Be(e)&&t&&t(),xt(e)}function i(){return!(!Ne(Ce)||!Ce.supports.teamsCore)}e.enablePrintCapability=function(){if(!b.printCapabilityEnabled){if(Ne(Ce),!i())throw z;b.printCapabilityEnabled=!0,document.addEventListener("keydown",(e=>{(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(t(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}},e.print=t,e.registerOnLoadHandler=function(e){n(e,(()=>{if(!Be(e)&&!i())throw z}))},e.registerOnLoadHandlerHelper=n,e.registerBeforeUnloadHandler=function(e){o(e,(()=>{if(!Be(e)&&!i())throw z}))},e.registerBeforeUnloadHandlerHelper=o,e.isSupported=i}(Fo||(Fo={})),function(e){function t(e){return new Promise((t=>{if(!He("2.0.0"))throw{errorCode:k.OLD_PLATFORM};if(!ao(e))throw{errorCode:k.INVALID_ARGUMENTS};if(!n())throw z;t(tn("people.selectPeople",e))}))}function n(){return!(!Ne(Ce)||!Ce.supports.people)}e.selectPeople=function(e,n){let o,i;return Ne(Ce,H.content,H.task,H.settings),"function"==typeof e?[o,i]=[e,n]:i=e,Y(t,o,i)},e.isSupported=n}(_o||(_o={})),function(e){e.showProfile=function(e){return Ne(Ce,H.content),new Promise((t=>{const[n,o]=ko(e);if(!n)throw{errorCode:k.INVALID_ARGUMENTS,message:o};t(tn("profile.showProfile",{modality:e.modality,persona:e.persona,triggerType:e.triggerType,targetRectangle:{x:e.targetElementBoundingRect.x,y:e.targetElementBoundingRect.y,width:e.targetElementBoundingRect.width,height:e.targetElementBoundingRect.height}}))}))},e.isSupported=function(){return!(!Ne(Ce)||!Ce.supports.profile)}}(Oo||(Oo={}));var Do,Lo=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};function No(e,t,n,o){var i,r;return Lo(this,void 0,void 0,(function*(){const a=xo();!ce()&&(null===(r=null===(i=window.chrome)||void 0===i?void 0:i.webview)||void 0===r||r.registerTextureStream(e,a)),Vo(yield Uo(e,n,o),new Bo(n,t),a.writable)}))}function Ho(e,t,n,o){var i,r;return Lo(this,void 0,void 0,(function*(){const a=xo();!ce()&&(null===(r=null===(i=window.chrome)||void 0===i?void 0:i.webview)||void 0===r||r.registerTextureStream(e,a)),Vo(yield Uo(e,n,o),new jo(n,t),a.writable)}))}function Uo(e,t,n){return Lo(this,void 0,void 0,(function*(){if(ce())throw z;const o=le().chrome;try{null==n||n.reportGettingTextureStream(e);const t=(yield o.webview.getTextureStream(e)).getVideoTracks();if(0===t.length)throw new Error(`No video track in stream ${e}`);return null==n||n.reportTextureStreamAcquired(),t[0]}catch(n){throw t(`Failed to get video track from stream ${e}, error: ${n}`),new Error(`Internal error: can't get video track from stream ${e}`)}}))}function xo(){if(ce())throw z;const e=window.MediaStreamTrackGenerator;if(!e)throw z;return new e({kind:"video"})}function Vo(e,t,n){new(0,le().MediaStreamTrackProcessor)({track:e}).readable.pipeThrough(new TransformStream(t)).pipeTo(n)}!function(e){e.TimestampIsNull="timestamp of the original video frame is null",e.UnsupportedVideoFramePixelFormat="Unsupported video frame pixel format"}(Do||(Do={}));class Bo{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.transform=(e,t)=>Lo(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const o=yield this.videoFrameHandler({videoFrame:e}),i=new VideoFrame(o,{timestamp:n});t.enqueue(i),e.close(),o.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError(Do.TimestampIsNull)}))}}class Wo{constructor(e,t){if(this.headerBuffer=e,this.notifyError=t,this.ONE_TEXTURE_INPUT_ID=1869900081,this.INVALID_HEADER_ERROR="Invalid video frame header",this.UNSUPPORTED_LAYOUT_ERROR="Unsupported texture layout",this.headerDataView=new Uint32Array(e),this.headerDataView.length<8)throw this.notifyError(this.INVALID_HEADER_ERROR),new Error(this.INVALID_HEADER_ERROR);if(this.headerDataView[0]!==this.ONE_TEXTURE_INPUT_ID)throw this.notifyError(this.UNSUPPORTED_LAYOUT_ERROR),new Error(this.UNSUPPORTED_LAYOUT_ERROR)}get oneTextureLayoutId(){return this.headerDataView[0]}get version(){return this.headerDataView[1]}get frameRowOffset(){return this.headerDataView[2]}get frameFormat(){return this.headerDataView[3]}get frameWidth(){return this.headerDataView[4]}get frameHeight(){return this.headerDataView[5]}get multiStreamHeaderRowOffset(){return this.headerDataView[6]}get multiStreamCount(){return this.headerDataView[7]}}class zo{constructor(e,t){this.metadataMap=new Map,this.AUDIO_INFERENCE_RESULT_STREAM_ID=828664161;const n=new Uint32Array(e);for(let o=0,i=0;o<t;o++){const t=n[i++],o=n[i++],r=n[i++],a=new Uint8Array(e,o,r);this.metadataMap.set(t,a)}}get audioInferenceResult(){return this.metadataMap.get(this.AUDIO_INFERENCE_RESULT_STREAM_ID)}}class jo{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.shouldDiscardAudioInferenceResult=!1,this.transform=(e,t)=>Lo(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const{videoFrame:o,metadata:{audioInferenceResult:i}={}}=yield this.extractVideoFrameAndMetadata(e),r=yield this.videoFrameHandler({videoFrame:o,audioInferenceResult:i}),a=new VideoFrame(r,{timestamp:n});t.enqueue(a),o.close(),e.close(),r.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError(Do.TimestampIsNull)})),this.extractVideoFrameAndMetadata=e=>Lo(this,void 0,void 0,(function*(){if(ce())throw z;if("NV12"!==e.format)throw this.notifyError(Do.UnsupportedVideoFramePixelFormat),new Error(Do.UnsupportedVideoFramePixelFormat);const t={x:0,y:0,width:e.codedWidth,height:2},n=new ArrayBuffer(t.width*t.height*3/2);yield e.copyTo(n,{rect:t});const o=new Wo(n,this.notifyError),i={x:0,y:o.multiStreamHeaderRowOffset,width:e.codedWidth,height:e.codedHeight-o.multiStreamHeaderRowOffset},r=new ArrayBuffer(i.width*i.height*3/2);yield e.copyTo(r,{rect:i});const a=new zo(r,o.multiStreamCount);return{videoFrame:new VideoFrame(e,{timestamp:e.timestamp,visibleRect:{x:0,y:o.frameRowOffset,width:o.frameWidth,height:o.frameHeight}}),metadata:{audioInferenceResult:this.shouldDiscardAudioInferenceResult?void 0:a.audioInferenceResult}}})),Ot("video.mediaStream.audioInferenceDiscardStatusChange",(({discardAudioInferenceResult:e})=>{this.shouldDiscardAudioInferenceResult=e}))}}function Go(e,t){return(n,o)=>{null==t||t.reportApplyingVideoEffect(n||"",o),e(n,o).then((()=>{null==t||t.reportVideoEffectChanged(n||"",o),sn("video.videoEffectReadiness",[!0,n,void 0,o])})).catch((e=>{const t=e in Ko.EffectFailureReason?e:Ko.EffectFailureReason.InitializationFailure;sn("video.videoEffectReadiness",[!1,n,t,o])}))}}class qo{static setTimeout(e,t){const n=performance.now(),o=Q();return qo.setTimeoutCallbacks[o]={callback:e,timeoutInMs:t,startedAtInMs:n},o}static clearTimeout(e){delete qo.setTimeoutCallbacks[e]}static setInterval(e,t){qo.setTimeout((function n(){e(),qo.setTimeout(n,t)}),t)}static tick(){const e=performance.now(),t=[];for(const n in qo.setTimeoutCallbacks){const o=qo.setTimeoutCallbacks[n];e-o.startedAtInMs>=o.timeoutInMs&&t.push(n)}for(const e of t){qo.setTimeoutCallbacks[e].callback(),delete qo.setTimeoutCallbacks[e]}}}qo.setTimeoutCallbacks={};class $o{constructor(e,t){this.reportStatisticsResult=t,this.sampleCount=0,this.distributionBins=new Uint32Array(e)}processStarts(e,t,n,o){qo.tick(),this.suitableForThisSession(e,t,n,o)||this.reportAndResetSession(this.getStatistics(),e,o,t,n),this.start()}processEnds(){const e=performance.now()-this.frameProcessingStartedAt,t=Math.floor(Math.max(0,Math.min(this.distributionBins.length-1,e)));this.distributionBins[t]+=1,this.sampleCount+=1}getStatistics(){return this.currentSession?{effectId:this.currentSession.effectId,effectParam:this.currentSession.effectParam,frameHeight:this.currentSession.frameHeight,frameWidth:this.currentSession.frameWidth,duration:performance.now()-this.currentSession.startedAtInMs,sampleCount:this.sampleCount,distributionBins:this.distributionBins.slice()}:null}start(){this.frameProcessingStartedAt=performance.now()}suitableForThisSession(e,t,n,o){return this.currentSession&&this.currentSession.effectId===e&&this.currentSession.effectParam===o&&this.currentSession.frameWidth===t&&this.currentSession.frameHeight===n}reportAndResetSession(e,t,n,o,i){e&&this.reportStatisticsResult(e),this.resetCurrentSession(this.getNextTimeout(t,this.currentSession),t,n,o,i),this.timeoutId&&qo.clearTimeout(this.timeoutId),this.timeoutId=qo.setTimeout((()=>this.reportAndResetSession(this.getStatistics(),t,n,o,i)).bind(this),this.currentSession.timeoutInMs)}resetCurrentSession(e,t,n,o,i){this.currentSession={startedAtInMs:performance.now(),timeoutInMs:e,effectId:t,effectParam:n,frameWidth:o,frameHeight:i},this.sampleCount=0,this.distributionBins.fill(0)}getNextTimeout(e,t){return t&&t.effectId===e?Math.min($o.maxSessionTimeoutInMs,2*t.timeoutInMs):$o.initialSessionTimeoutInMs}}$o.initialSessionTimeoutInMs=1e3,$o.maxSessionTimeoutInMs=3e4;class Jo{constructor(e){this.reportPerformanceEvent=e,this.isFirstFrameProcessed=!1,this.frameProcessTimeLimit=100,this.frameProcessingStartedAt=0,this.frameProcessingTimeCost=0,this.processedFrameCount=0,this.performanceStatistics=new $o(Jo.distributionBinSize,(e=>this.reportPerformanceEvent("video.performance.performanceDataGenerated",[e])))}startMonitorSlowFrameProcessing(){qo.setInterval((()=>{if(0===this.processedFrameCount)return;const e=this.frameProcessingTimeCost/this.processedFrameCount;e>this.frameProcessTimeLimit&&this.reportPerformanceEvent("video.performance.frameProcessingSlow",[e]),this.frameProcessingTimeCost=0,this.processedFrameCount=0}),Jo.calculateFPSInterval)}setFrameProcessTimeLimit(e){this.frameProcessTimeLimit=e}reportApplyingVideoEffect(e,t){var n,o;(null===(n=this.applyingEffect)||void 0===n?void 0:n.effectId)===e&&(null===(o=this.applyingEffect)||void 0===o?void 0:o.effectParam)===t||(this.applyingEffect={effectId:e,effectParam:t},this.appliedEffect=void 0)}reportVideoEffectChanged(e,t){void 0===this.applyingEffect||this.applyingEffect.effectId!==e&&this.applyingEffect.effectParam!==t||(this.appliedEffect={effectId:e,effectParam:t},this.applyingEffect=void 0,this.isFirstFrameProcessed=!1)}reportStartFrameProcessing(e,t){qo.tick(),this.appliedEffect&&(this.frameProcessingStartedAt=performance.now(),this.performanceStatistics.processStarts(this.appliedEffect.effectId,e,t,this.appliedEffect.effectParam))}reportFrameProcessed(){var e;this.appliedEffect&&(this.processedFrameCount++,this.frameProcessingTimeCost+=performance.now()-this.frameProcessingStartedAt,this.performanceStatistics.processEnds(),this.isFirstFrameProcessed||(this.isFirstFrameProcessed=!0,this.reportPerformanceEvent("video.performance.firstFrameProcessed",[Date.now(),this.appliedEffect.effectId,null===(e=this.appliedEffect)||void 0===e?void 0:e.effectParam])))}reportGettingTextureStream(e){this.gettingTextureStreamStartedAt=performance.now(),this.currentStreamId=e}reportTextureStreamAcquired(){if(void 0!==this.gettingTextureStreamStartedAt){const e=performance.now()-this.gettingTextureStreamStartedAt;this.reportPerformanceEvent("video.performance.textureStreamAcquired",[this.currentStreamId,e])}}}Jo.distributionBinSize=1e3,Jo.calculateFPSInterval=1e3;var Ko,Zo,Qo,Xo,Yo=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},ei=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n};!function(e){const t=ce()?void 0:new Jo(sn);let n,o,i;function r(e){sn("video.videoFrameProcessed",[e])}function a(e){sn("video.notifyError",[e])}function s(){return Ne(Ce)&&!!Ce.supports.video&&(!!Ce.supports.video.mediaStream||!!Ce.supports.video.sharedFrame)}function l(e,n){if(Ne(Ce,H.sidePanel),!s()||!f())throw z;Ot("video.startVideoExtensibilityVideoStream",(n=>Yo(this,void 0,void 0,(function*(){const{streamId:o}=n,i=c(e,t);yield No(o,i,a,t)}))),!1),sn("video.mediaStream.registerForVideoFrame",[n])}function c(e,t){return n=>Yo(this,void 0,void 0,(function*(){const o=n.videoFrame;null==t||t.reportStartFrameProcessing(o.codedWidth,o.codedHeight);const i=yield e(n);return null==t||t.reportFrameProcessed(),i}))}function u(e,n){if(Ne(Ce,H.sidePanel),!s()||!m())throw z;Ot("video.newVideoFrame",(n=>{if(n){const o=n.timestamp;null==t||t.reportStartFrameProcessing(n.width,n.height),e(d(n),(()=>{null==t||t.reportFrameProcessed(),r(o)}),a)}}),!1),sn("video.registerForVideoFrame",[n])}function d(e){if("videoFrameBuffer"in e)return e;{const{data:t}=e,n=ei(e,["data"]);return Object.assign(Object.assign({},n),{videoFrameBuffer:t})}}function f(){var e;return Ne(Ce,H.sidePanel)&&p()&&!!(null===(e=Ce.supports.video)||void 0===e?void 0:e.mediaStream)}function p(){var e,t,n,o;return!(!(null===(t=null===(e=le().chrome)||void 0===e?void 0:e.webview)||void 0===t?void 0:t.getTextureStream)||!(null===(o=null===(n=le().chrome)||void 0===n?void 0:n.webview)||void 0===o?void 0:o.registerTextureStream))}function m(){var e;return Ne(Ce,H.sidePanel)&&!!(null===(e=Ce.supports.video)||void 0===e?void 0:e.sharedFrame)}!function(e){e.NV12="NV12"}(n=e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e.EffectChanged="EffectChanged",e.EffectDisabled="EffectDisabled"}(o=e.EffectChangeType||(e.EffectChangeType={})),function(e){e.InvalidEffectId="InvalidEffectId",e.InitializationFailure="InitializationFailure"}(i=e.EffectFailureReason||(e.EffectFailureReason={})),e.registerForVideoFrame=function(e){if(Ne(Ce,H.sidePanel),!s())throw z;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if(Ot("video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e.timeLimit)),!1),f())l(e.videoFrameHandler,e.config);else{if(!m())throw z;u(e.videoBufferHandler,e.config)}null==t||t.startMonitorSlowFrameProcessing()},e.notifySelectedVideoEffectChanged=function(e,t){if(Ne(Ce,H.sidePanel),!s())throw z;sn("video.videoEffectChanged",[e,t])},e.registerForVideoEffect=function(e){if(Ne(Ce,H.sidePanel),!s())throw z;Ot("video.effectParameterChange",Go(e,t),!1),sn("video.registerForVideoEffect")},e.isSupported=s}(Ko||(Ko={})),function(e){const t="search.queryChange",n="search.queryClose",o="search.queryExecute";function i(){return!(!Ne(Ce)||!Ce.supports.search)}e.registerHandlers=function(e,r,a){if(Ne(Ce,H.content),!i())throw z;Ot(n,e),Ot(o,r),a&&Ot(t,a)},e.unregisterHandlers=function(){if(Ne(Ce,H.content),!i())throw z;sn("search.unregister"),kt(t),kt(n),kt(o)},e.isSupported=i,e.closeSearch=function(){return new Promise((e=>{if(Ne(Ce,H.content),!i())throw new Error("Not supported");e(Xt("search.closeSearch"))}))}}(Zo||(Zo={})),function(e){function t(t){return new Promise((n=>{if(!r())throw z;n(tn(e.SharingAPIMessages.shareWebContent,t))}))}function n(e){if(!(e&&e.content&&e.content.length)){throw{errorCode:k.INVALID_ARGUMENTS,message:"Shared content is missing"}}}function o(e){let t;if(e.content.some((e=>!e.type)))throw t={errorCode:k.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"},t;if(e.content.some((t=>t.type!==e.content[0].type)))throw t={errorCode:k.INVALID_ARGUMENTS,message:"Shared content must be of the same type"},t}function i(e){let t;if("URL"!==e.content[0].type)throw t={errorCode:k.INVALID_ARGUMENTS,message:"Content type is unsupported"},t;if(e.content.some((e=>!e.url)))throw t={errorCode:k.INVALID_ARGUMENTS,message:"URLs are required for URL content types"},t}function r(){return!(!Ne(Ce)||!Ce.supports.sharing)}e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(e,r){try{n(e),o(e),i(e)}catch(e){return ee((()=>Promise.reject(e)),r)}return Ne(Ce,H.content,H.sidePanel,H.task,H.stage,H.meetingStage),ee(t,r,e)},e.isSupported=r}(Qo||(Qo={})),function(e){let t;function n(){return!(!Ne(Ce)||!Ce.supports.stageView)}!function(e){e.modal="modal",e.popout="popout",e.popoutWithChat="popoutWithChat"}(t=e.StageViewOpenMode||(e.StageViewOpenMode={})),e.open=function(e){return new Promise((t=>{if(Ne(Ce,H.content),!n())throw z;if(!e)throw new Error("[stageView.open] Stage view params cannot be null");t(tn("stageView.open",e))}))},e.isSupported=n}(Xo||(Xo={}));var ti,ni,oi=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};!function(e){let t,n,o;!function(e){e[e.FrontOrRear=1]="FrontOrRear",e[e.FrontOnly=2]="FrontOnly",e[e.RearOnly=3]="RearOnly"}(t=e.CameraRestriction||(e.CameraRestriction={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(n=e.Source||(e.Source={})),e.hasPermission=function(){if(Ne(Ce,H.content,H.task),!o.isSupported())throw z;return tn("permissions.has",M.Media)},e.requestPermission=function(){if(Ne(Ce,H.content,H.task),!o.isSupported())throw z;return tn("permissions.request",M.Media)},function(e){function t(){return!!(Ne(Ce)&&Ce.supports.visualMedia&&Ce.supports.visualMedia.image&&Ce.supports.permissions)}function n(){if(!t())throw z}function o(e){if(!e||e.maxVisualMediaCount>10||e.maxVisualMediaCount<1)throw $}function i(e,t){if(t.length>e)throw J}e.captureImages=function(e){return oi(this,void 0,void 0,(function*(){Ne(Ce,H.content,H.task),n(),o(e);const t=yield tn("visualMedia.image.captureImages",e);return i(e.maxVisualMediaCount,t),t}))},e.retrieveImages=function(e){return oi(this,void 0,void 0,(function*(){Ne(Ce,H.content,H.task),n(),o(e);const t=yield tn("visualMedia.image.retrieveImages",e);return i(e.maxVisualMediaCount,t),t}))},e.isSupported=t}(o=e.image||(e.image={}))}(ti||(ti={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.webStorage)}e.isWebStorageClearedOnUserLogOut=function(){return Ne(Ce),t()},e.isSupported=t}(ni||(ni={}));const ii=a.V_2;var ri,ai;!function(e){let t;function n(){return!(!Ne(Ce)||!Ce.supports.call)}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(t=e.CallModalities||(e.CallModalities={})),e.startCall=function(e){const o=i(ii,s.Call_StartCall);return new Promise((i=>{var r;if(Ne(Ce,H.content,H.task),!n())throw z;if(!Ce.isLegacyTeams)return an(o,"call.startCall",[e],i);i(Kt(o,"executeDeepLink",Wn(e.targets,null===(r=e.requestedModalities)||void 0===r?void 0:r.includes(t.Video),e.source)).then((e=>{if(!e)throw new Error("The call was not properly started");return e})))}))},e.isSupported=n}(ri||(ri={})),function(e){e.Messages=pt.Messages,e.FailedReason=pt.FailedReason,e.ExpectedFailureReason=pt.ExpectedFailureReason,e.notifyAppLoaded=function(){pt.notifyAppLoaded()},e.notifySuccess=function(){pt.notifySuccess()},e.notifyFailure=function(e){pt.notifyFailure(e)},e.notifyExpectedFailure=function(e){pt.notifyExpectedFailure(e)}}(ai||(ai={}));const si=t("thirdPartyCloudStorage");var li;!function(e){let t=[],n={fileType:"",assembleAttachment:[]},o=!0,i=null;function r(e){if(i)if(e&&e.error)i([],e.error),i=null;else if(e&&e.fileChunk)try{o||0!==e.fileChunk.chunkSequence||(si("Last chunk is not received or 'endOfFile' value for previous chunk was not set to true"),o=!0,i([],{errorCode:k.INTERNAL_ERROR,message:"error occurred while receiving data"}),t=[],i=null);const r=Zn(e.fileChunk,e.fileType);if(r?n.assembleAttachment.push(r):(si(`Received a null assemble attachment for when decoding chunk sequence ${e.fileChunk.chunkSequence}; not including the chunk in the assembled file.`),i?i([],{errorCode:k.INTERNAL_ERROR,message:"error occurred while receiving data"}):i=null,t=[],i=null,o=!0),o=e.fileChunk.endOfFile,e.fileChunk.endOfFile){const r=Kn(n.assembleAttachment,n.fileType);if(r){const n=new File([r],e.fileName,{type:r.type});t.push(n)}e.isLastFile&&i&&(i(t,e.error),t=[],i=null,o=!0),n={fileType:"",assembleAttachment:[]}}}catch(e){i&&(i([],{errorCode:k.INTERNAL_ERROR,message:e}),t=[],i=null,o=!0)}else i([],{errorCode:k.INTERNAL_ERROR,message:"data received is null"}),t=[],i=null,o=!0}function a(){return!(!Ne(Ce)||!Ce.supports.thirdPartyCloudStorage)}e.getDragAndDropFiles=function(e,t){if(!t)throw new Error("[getDragAndDropFiles] Callback cannot be null");if(e&&""!==e){if(Ne(Ce,H.content,H.task),!a())throw z;if(i)throw i=null,new Error("getDragAndDropFiles cannot be called twice");i=t,o=!0,sn("thirdPartyCloudStorage.getDragAndDropFiles",[e],r)}else{t([],{errorCode:k.INVALID_ARGUMENTS})}},e.isSupported=a}(li||(li={}));const ci=a.V_1;function ui(e,t){lt(i(ci,s.PublicAPIs_Initialize),t).then((()=>{e&&e()}))}function di(){Fo.enablePrintCapability()}function fi(){Fo.print()}function pi(e){Le(),an(i(ci,s.PublicAPIs_GetContext),"getContext",(t=>{t.frameContext||(t.frameContext=b.frameContext),e(t)}))}function mi(e){dt(i(ci,s.PublicAPIs_RegisterOnThemeChangeHandlerHelper),e)}function gi(e){Dt(i(ci,s.PublicAPIs_RegisterFullScreenHandler),"fullScreenChange",e,[])}function hi(e){Dt(i(ci,s.PublicAPIs_RegisterAppButtonClickHandler),"appButtonClick",e,[H.content])}function wi(e){Dt(i(ci,s.PublicAPIs_RegisterAppButtonHoverEnterHandler),"appButtonHoverEnter",e,[H.content])}function Ci(e){Dt(i(ci,s.PublicAPIs_RegisterAppButtonHoverLeaveHandler),"appButtonHoverLeave",e,[H.content])}function vi(e){It.backStack.registerBackButtonHandlerHelper(i(ci,s.PublicAPIs_RegisterBackButtonHandler),e)}function Si(e){Fo.registerOnLoadHandlerHelper(e)}function bi(e){Fo.registerBeforeUnloadHandlerHelper(e)}function yi(e){Dt(i(ci,s.PublicAPIs_RegisterFocusEnterHandler),"focusEnter",e,[])}function Pi(e){Dt(i(ci,s.PublicAPIs_RegisterChangeSettingsHandler),"changeSettings",e,[H.content])}function Ii(e,t){Ne(Ce),St(i(ci,s.PublicAPIs_GetTabInstances),t).then((t=>{e(t)}))}function Ti(e,t){Ne(Ce),bt(i(ci,s.PublicAPIs_GetMruTabInstances),t).then((t=>{e(t)}))}function Ei(e){yt(i(ci,s.PublicAPIs_ShareDeepLink),{subPageId:e.subEntityId,subPageLabel:e.subEntityLabel,subPageWebUrl:e.subEntityWebUrl})}function Ai(e,t){Ne(Ce,H.content,H.sidePanel,H.settings,H.task,H.stage,H.meetingStage);const n=null!=t?t:K();ft(i(ci,s.PublicAPIs_ExecuteDeepLink),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function Ri(e){Pt(i(ci,s.PublicAPIs_SetFrameContext),e)}function Fi(e,t,n){lt(i(ci,s.PublicAPIs_Initialize),n).then((()=>t&&t())),Pt(i(ci,s.PublicAPIs_SetFrameContext),e)}const _i=a.V_1;function Oi(e){vt(i(_i,s.Navigation_ReturnFocus),e)}function ki(e,t){Ne(Ce);const n=null!=t?t:K();Ct(i(_i,s.Navigation_NavigateToTab),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function Mi(e,t){Ne(Ce,H.content,H.sidePanel,H.settings,H.remove,H.task,H.stage,H.meetingStage);const n=null!=t?t:K();ht(i(_i,s.Navigation_NavigateCrossDomain),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function Di(e){Ne(Ce);const t=null!=e?e:K();wt(i(_i,s.Navigation_NavigateBack)).then((()=>{t(!0)})).catch((e=>{t(!1,e.message)}))}var Li;!function(e){e.setValidityState=function(e){It.config.setValidityState(e)},e.getSettings=function(e){Ne(Ce,H.content,H.settings,H.remove,H.sidePanel),It.getConfig().then((t=>{e(t)}))},e.setSettings=function(e,t){Ne(Ce,H.content,H.settings,H.sidePanel);const n=null!=t?t:K();It.config.setConfig(e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))},e.registerOnSaveHandler=function(e){It.config.registerOnSaveHandlerHelper(e)},e.registerOnRemoveHandler=function(e){It.config.registerOnRemoveHandlerHelper(e)}}(Li||(Li={}));var Ni=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n};const Hi=a.V_1;var Ui,xi;!function(e){function t(e){if(void 0===e.url)throw new Error("url property of taskInfo object can't be undefined");return{url:e.url,size:{height:e.height?e.height:W.Small,width:e.width?e.width:W.Small},title:e.title,fallbackUrl:e.fallbackUrl}}function n(e){if(void 0===e.url||void 0===e.completionBotId)throw new Error(`Both url ${e.url} and completionBotId ${e.completionBotId} are required for bot url dialog. At least one is undefined.`);return{url:e.url,size:{height:e.height?e.height:W.Small,width:e.width?e.width:W.Small},title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function o(e){return e.height=e.height?e.height:W.Small,e.width=e.width?e.width:W.Small,e}e.startTask=function(e,o){const r=i(Hi,s.Tasks_StartTask),a=o?e=>{var t,n;return o(null!==(t=e.err)&&void 0!==t?t:"",null!==(n=e.result)&&void 0!==n?n:"")}:void 0;return void 0===e.card&&void 0===e.url||e.card?(Ne(Ce,H.content,H.sidePanel,H.meetingStage),an(r,"tasks.startTask",[e],o)):void 0!==e.completionBotId?tt(r,n(e),a):et(r,t(e),a),new Co},e.updateTask=function(e){e=o(e);const{width:t,height:n}=e,r=Ni(e,["width","height"]);if(Object.keys(r).length)throw new Error("resize requires a TaskInfo argument containing only width and height");Ye(i(Hi,s.Tasks_UpdateTask),e)},e.submitTask=function(e,t){nt(i(Hi,s.Tasks_SubmitTask),e,t)},e.getDefaultSizeIfNotProvided=o}(Ui||(Ui={})),function(e){let t,n;!function(e){e.guest="Guest",e.attendee="Attendee",e.presenter="Presenter",e.organizer="Organizer"}(t=e.UserMeetingRole||(e.UserMeetingRole={})),function(e){e.added="Added",e.alreadyExists="AlreadyExists",e.conflict="Conflict",e.notFound="NotFound"}(n=e.ContainerState||(e.ContainerState={})),e.isSupported=function(){return!(!Ne(Ce,H.meetingStage,H.sidePanel)||!Ce.supports.interactive)}}(xi||(xi={}));class Vi{getFluidTenantInfo(){return Bi(),new Promise((e=>{e(tn("interactive.getFluidTenantInfo"))}))}getFluidToken(e){return Bi(),new Promise((t=>{t(tn("interactive.getFluidToken",e))}))}getFluidContainerId(){return Bi(),new Promise((e=>{e(tn("interactive.getFluidContainerId"))}))}setFluidContainerId(e){return Bi(),new Promise((t=>{t(tn("interactive.setFluidContainerId",e))}))}getNtpTime(){return Bi(),new Promise((e=>{e(tn("interactive.getNtpTime"))}))}registerClientId(e){return Bi(),new Promise((t=>{t(tn("interactive.registerClientId",e))}))}getClientRoles(e){return Bi(),new Promise((t=>{t(tn("interactive.getClientRoles",e))}))}getClientInfo(e){return Bi(),new Promise((t=>{t(tn("interactive.getClientInfo",e))}))}static create(){return Bi(),new Vi}}function Bi(){if(!xi.isSupported())throw new Error("LiveShareHost Not supported")}const Wi=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const zi=function(e){return"string"==typeof e&&Wi.test(e)};var ji=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n};function Gi(e){try{return e.cartItems=qi(e.cartItems),e}catch(e){throw new Error("Error deserializing cart")}}function qi(e){return e.map((e=>{if(e.imageURL){const t=new URL(e.imageURL);e.imageURL=t}return e.accessories&&(e.accessories=qi(e.accessories)),e}))}const $i=e=>{try{return e.map((e=>{const{imageURL:t,accessories:n}=e,o=ji(e,["imageURL","accessories"]),i=Object.assign({},o);return t&&(i.imageURL=t.href),n&&(i.accessories=$i(n)),i}))}catch(e){throw new Error("Error serializing cart items")}};function Ji(e){if(!Array.isArray(e)||0===e.length)throw new Error("cartItems must be a non-empty array");for(const t of e)Zi(t),Ki(t.accessories)}function Ki(e){if(null!=e){if(!Array.isArray(e)||0===e.length)throw new Error("CartItem.accessories must be a non-empty array");for(const t of e){if(t.accessories)throw new Error("Item in CartItem.accessories cannot have accessories");Zi(t)}}}function Zi(e){if(!e.id)throw new Error("cartItem.id must not be empty");if(!e.name)throw new Error("cartItem.name must not be empty");Xi(e.price),Yi(e.quantity)}function Qi(e){if(null!=e){if(!e)throw new Error("id must not be empty");if(!1===zi(e))throw new Error("id must be a valid UUID")}}function Xi(e){if("number"!=typeof e||e<0)throw new Error(`price ${e} must be a number not less than 0`);if(parseFloat(e.toFixed(3))!==e)throw new Error(`price ${e} must have at most 3 decimal places`)}function Yi(e){if("number"!=typeof e||e<=0||parseInt(e.toString())!==e)throw new Error(`quantity ${e} must be an integer greater than 0`)}function er(e){if(!Object.values(nr.CartStatus).includes(e))throw new Error(`cartStatus ${e} is not valid`)}const tr=a.V_2;var nr,or,ir,rr,ar,sr,lr;!function(e){let t,n;function o(){return!(!Ne(Ce)||!Ce.supports.marketplace)}e.cartVersion={majorVersion:1,minorVersion:1},function(e){e.TACAdminUser="TACAdminUser",e.TeamsAdminUser="TeamsAdminUser",e.TeamsEndUser="TeamsEndUser"}(t=e.Intent||(e.Intent={})),function(e){e.Open="Open",e.Processing="Processing",e.Processed="Processed",e.Closed="Closed",e.Error="Error"}(n=e.CartStatus||(e.CartStatus={})),e.getCart=function(){if(Ne(Ce,H.content,H.task),!o())throw z;return en(i(tr,s.Marketplace_GetCart),"marketplace.getCart",e.cartVersion).then(Gi)},e.addOrUpdateCartItems=function(t){if(Ne(Ce,H.content,H.task),!o())throw z;if(!t)throw new Error("addOrUpdateCartItemsParams must be provided");return Qi(null==t?void 0:t.cartId),Ji(null==t?void 0:t.cartItems),en(i(tr,s.Marketplace_AddOrUpdateCartItems),"marketplace.addOrUpdateCartItems",Object.assign(Object.assign({},t),{cartItems:$i(t.cartItems),cartVersion:e.cartVersion})).then(Gi)},e.removeCartItems=function(t){if(Ne(Ce,H.content,H.task),!o())throw z;if(!t)throw new Error("removeCartItemsParams must be provided");if(Qi(null==t?void 0:t.cartId),!Array.isArray(null==t?void 0:t.cartItemIds)||0===(null==t?void 0:t.cartItemIds.length))throw new Error("cartItemIds must be a non-empty array");return en(i(tr,s.Marketplace_RemoveCardItems),"marketplace.removeCartItems",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(Gi)},e.updateCartStatus=function(t){if(Ne(Ce,H.content,H.task),!o())throw z;if(!t)throw new Error("updateCartStatusParams must be provided");return Qi(null==t?void 0:t.cartId),er(null==t?void 0:t.cartStatus),en(i(tr,s.Marketplace_UpdateCartStatus),"marketplace.updateCartStatus",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(Gi)},e.isSupported=o}(nr||(nr={})),function(e){const t="Action.Execute";let n,o,i;function r(e){if(e.requestType===n.ActionExecuteInvokeRequest){const n=e;if(n.type!==t){throw{errorCode:i.INTERNAL_ERROR,message:`Invalid action type ${n.type}. Action type must be "${t}"`}}}else if(e.requestType===n.QueryMessageExtensionRequest){if(e.commandId.length>64)throw new Error("originalRequestInfo.commandId exceeds the maximum size of 64 characters");if(e.parameters.length>5)throw new Error("originalRequestInfo.parameters exceeds the maximum size of 5");for(const t of e.parameters){if(t.name.length>64)throw new Error("originalRequestInfo.parameters.name exceeds the maximum size of 64 characters");if(t.value.length>512)throw new Error("originalRequestInfo.parameters.value exceeds the maximum size of 512 characters")}}}function a(){return!(!Ne(Ce)||!Ce.supports.externalAppAuthentication)}!function(e){e.ActionExecuteInvokeRequest="ActionExecuteInvokeRequest",e.QueryMessageExtensionRequest="QueryMessageExtensionRequest"}(n=e.OriginalRequestType||(e.OriginalRequestType={})),function(e){e.ActionExecuteInvokeResponse="ActionExecuteInvokeResponse",e.QueryMessageExtensionResponse="QueryMessageExtensionResponse"}(o=e.InvokeResponseType||(e.InvokeResponseType={})),function(e){e.INTERNAL_ERROR="INTERNAL_ERROR"}(i=e.InvokeErrorCode||(e.InvokeErrorCode={})),e.authenticateAndResendRequest=function(e,t,n){if(Ne(Ce,H.content),!a())throw z;return de(e),r(n),on("externalAppAuthentication.authenticateAndResendRequest",[e,n,t.url.href,t.width,t.height,t.isExternal]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.authenticateWithSSO=function(e,t){if(Ne(Ce,H.content),!a())throw z;return de(e),on("externalAppAuthentication.authenticateWithSSO",[e,t.claims,t.silent]).then((([e,t])=>{if(!e)throw t}))},e.authenticateWithSSOAndResendRequest=function(e,t,n){if(Ne(Ce,H.content),!a())throw z;return de(e),r(n),on("externalAppAuthentication.authenticateWithSSOAndResendRequest",[e,n,t.claims,t.silent]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.isSupported=a}(or||(or={})),function(e){let t,n,o;function i(){return!(!Ne(Ce)||!Ce.supports.externalAppCardActions)}!function(e){e.DeepLinkDialog="DeepLinkDialog",e.DeepLinkOther="DeepLinkOther",e.DeepLinkStageView="DeepLinkStageView",e.GenericUrl="GenericUrl"}(t=e.ActionOpenUrlType||(e.ActionOpenUrlType={})),function(e){e.INTERNAL_ERROR="INTERNAL_ERROR",e.INVALID_LINK="INVALID_LINK",e.NOT_SUPPORTED="NOT_SUPPORTED"}(n=e.ActionOpenUrlErrorCode||(e.ActionOpenUrlErrorCode={})),function(e){e.INTERNAL_ERROR="INTERNAL_ERROR"}(o=e.ActionSubmitErrorCode||(e.ActionSubmitErrorCode={})),e.processActionSubmit=function(e,t){if(Ne(Ce,H.content),!i())throw z;return de(e),on("externalAppCardActions.processActionSubmit",[e,t]).then((([e,t])=>{if(!e)throw t}))},e.processActionOpenUrl=function(e,t){if(Ne(Ce,H.content),!i())throw z;return de(e),on("externalAppCardActions.processActionOpenUrl",[e,t.href]).then((([e,t])=>{if(e)throw e;return t}))},e.isSupported=i}(ir||(ir={})),function(e){let t,n,o,i,r,a;function s(e,t){return{errorCode:e,message:t}}!function(e){e.Dropbox="DROPBOX",e.Box="BOX",e.Sharefile="SHAREFILE",e.GoogleDrive="GOOGLEDRIVE",e.Egnyte="EGNYTE",e.SharePoint="SharePoint"}(t=e.CloudStorageProvider||(e.CloudStorageProvider={})),function(e){e[e.Sharepoint=0]="Sharepoint",e[e.WopiIntegration=1]="WopiIntegration",e[e.Google=2]="Google",e[e.OneDrive=3]="OneDrive",e[e.Recent=4]="Recent",e[e.Aggregate=5]="Aggregate",e[e.FileSystem=6]="FileSystem",e[e.Search=7]="Search",e[e.AllFiles=8]="AllFiles",e[e.SharedWithMe=9]="SharedWithMe"}(n=e.CloudStorageProviderType||(e.CloudStorageProviderType={})),function(e){e.ClassMaterials="classMaterials"}(o=e.SpecialDocumentLibraryType||(e.SpecialDocumentLibraryType={})),function(e){e.Readonly="readonly"}(i=e.DocumentLibraryAccessType||(e.DocumentLibraryAccessType={})),function(e){e.Downloaded="Downloaded",e.Downloading="Downloading",e.Failed="Failed"}(r=e.FileDownloadStatus||(e.FileDownloadStatus={})),function(e){e.Download="DOWNLOAD",e.Upload="UPLOAD",e.Delete="DELETE"}(a=e.CloudStorageProviderFileAction||(e.CloudStorageProviderFileAction={})),e.getCloudStorageFolders=function(e,t){if(Ne(Ce,H.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");sn("files.getCloudStorageFolders",[e],t)},e.addCloudStorageFolder=function(e,t){if(Ne(Ce,H.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");sn("files.addCloudStorageFolder",[e],t)},e.deleteCloudStorageFolder=function(e,t,n){if(Ne(Ce,H.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");sn("files.deleteCloudStorageFolder",[e,t],n)},e.getCloudStorageFolderContents=function(e,t,n){if(Ne(Ce,H.content),!e||!t)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");sn("files.getCloudStorageFolderContents",[e,t],n)},e.openCloudStorageFile=function(e,t,n){if(Ne(Ce,H.content),!e||!t)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");sn("files.openCloudStorageFile",[e,t,n])},e.getExternalProviders=function(e=!1,t){if(Ne(Ce,H.content),!t)throw new Error("[files.getExternalProviders] Callback cannot be null");sn("files.getExternalProviders",[e],t)},e.copyMoveFiles=function(e,t,n,o,i=!1,r){if(Ne(Ce,H.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!o)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] callback cannot be null");sn("files.copyMoveFiles",[e,t,n,o,i],r)},e.getFileDownloads=function(e){if(Ne(Ce,H.content),!e)throw new Error("[files.getFileDownloads] Callback cannot be null");sn("files.getFileDownloads",[],e)},e.openDownloadFolder=function(e=void 0,t){if(Ne(Ce,H.content),!t)throw new Error("[files.openDownloadFolder] Callback cannot be null");sn("files.openDownloadFolder",[e],t)},e.addCloudStorageProvider=function(e){if(Ne(Ce,H.content),!e)throw s(k.INVALID_ARGUMENTS,"[files.addCloudStorageProvider] callback cannot be null");sn("files.addCloudStorageProvider",[],e)},e.removeCloudStorageProvider=function(e,t){if(Ne(Ce,H.content),!t)throw s(k.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] callback cannot be null");if(!e||!e.content)throw s(k.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");sn("files.removeCloudStorageProvider",[e],t)},e.addCloudStorageProviderFile=function(e,t){if(Ne(Ce,H.content),!t)throw s(k.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw s(k.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");sn("files.addCloudStorageProviderFile",[e],t)},e.renameCloudStorageProviderFile=function(e,t){if(Ne(Ce,H.content),!t)throw s(k.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw s(k.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");sn("files.renameCloudStorageProviderFile",[e],t)},e.deleteCloudStorageProviderFile=function(e,t){if(Ne(Ce,H.content),!t)throw s(k.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw s(k.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");sn("files.deleteCloudStorageProviderFile",[e],t)},e.downloadCloudStorageProviderFile=function(e,t){if(Ne(Ce,H.content),!t)throw s(k.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw s(k.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");sn("files.downloadCloudStorageProviderFile",[e],t)},e.uploadCloudStorageProviderFile=function(e,t){if(Ne(Ce,H.content),!t)throw s(k.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw s(k.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");if(!e.content.destinationFolder)throw s(k.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] Invalid destination folder details");sn("files.uploadCloudStorageProviderFile",[e],t)},e.registerCloudStorageProviderListChangeHandler=function(e){if(Ne(Ce),!e)throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");Ot("files.cloudStorageProviderListChange",e)},e.registerCloudStorageProviderContentChangeHandler=function(e){if(Ne(Ce),!e)throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");Ot("files.cloudStorageProviderContentChange",e)}}(rr||(rr={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.meetingRoom)}e.getPairedMeetingRoomInfo=function(){return new Promise((e=>{if(Ne(Ce),!t())throw z;e(tn("meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((n=>{if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(Ne(Ce),!t())throw z;n(tn("meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");if(Ne(Ce),!t())throw z;Ot("meetingRoom.meetingRoomCapabilitiesUpdate",(t=>{Ne(Ce),e(t)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");if(Ne(Ce),!t())throw z;Ot("meetingRoom.meetingRoomStatesUpdate",(t=>{Ne(Ce),e(t)}))},e.isSupported=t}(ar||(ar={})),function(e){function t(){return!(!Ne(Ce)||!Ce.supports.notifications)}e.showNotification=function(e){if(Ne(Ce,H.content),!t())throw z;sn("notifications.showNotification",[e])},e.isSupported=t}(sr||(sr={})),function(e){let t,n,o;function i(){return!(!Ne(Ce)||!Ce.supports.remoteCamera)}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(t=e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(n=e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled",e[e.ControlTerminatedToAllowOtherController=10]="ControlTerminatedToAllowOtherController"}(o=e.SessionTerminatedReason||(e.SessionTerminatedReason={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;sn("remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,t){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!t)throw new Error("[remoteCamera.requestControl] Callback cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;sn("remoteCamera.requestControl",[e],t)},e.sendControlCommand=function(e,t){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!t)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;sn("remoteCamera.sendControlCommand",[e],t)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;sn("remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;Ot("remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;Ot("remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;Ot("remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");if(Ne(Ce,H.sidePanel),!i())throw z;Ot("remoteCamera.sessionStatusChange",e)},e.isSupported=i}(lr||(lr={}));const cr=a.V_1;var ur,dr;!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.appEntity)}e.selectAppEntity=function(e,n,o,r){if(Ne(Ce,H.content),!t())throw z;if(!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!r)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");an(i(cr,s.AppEntity_SelectAppEntity),"appEntity.selectAppEntity",[e,n,o],r)},e.isSupported=t}(ur||(ur={})),function(e){let t,n;function o(){return!(!Ne(Ce)||!Ce.supports.teams)}!function(e){e[e.Regular=0]="Regular",e[e.Private=1]="Private",e[e.Shared=2]="Shared"}(t=e.ChannelType||(e.ChannelType={})),e.getTeamChannels=function(e,t){if(Ne(Ce,H.content),!o())throw z;if(!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!t)throw new Error("[teams.getTeamChannels] Callback cannot be null");sn("teams.getTeamChannels",[e],t)},e.refreshSiteUrl=function(e,t){if(Ne(Ce),!o())throw z;if(!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!t)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");sn("teams.refreshSiteUrl",[e],t)},e.isSupported=o,function(e){let t;function n(){return!(!Ne(Ce)||!Ce.supports.teams)&&!!Ce.supports.teams.fullTrust}!function(e){function t(){return!(!Ne(Ce)||!Ce.supports.teams)&&(!!Ce.supports.teams.fullTrust&&!!Ce.supports.teams.fullTrust.joinedTeams)}e.getUserJoinedTeams=function(e){return new Promise((n=>{if(Ne(Ce),!t())throw z;if((b.hostClientType===L.android||b.hostClientType===L.teamsRoomsAndroid||b.hostClientType===L.teamsPhones||b.hostClientType===L.teamsDisplays)&&!He("2.0.1")){const e={errorCode:k.OLD_PLATFORM};throw new Error(JSON.stringify(e))}n(Zt("getUserJoinedTeams",e))}))},e.isSupported=t}(t=e.joinedTeams||(e.joinedTeams={})),e.getConfigSetting=function(e){return new Promise((t=>{if(Ne(Ce),!n())throw z;t(Zt("getConfigSetting",e))}))},e.isSupported=n}(n=e.fullTrust||(e.fullTrust={}))}(dr||(dr={}));var fr,pr=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};!function(e){e.frameProcessingTimeoutInMs=2e3;const t=ce()?void 0:new Jo(sn);let n;function o(){const t=setTimeout((()=>{l(`Frame not processed in ${e.frameProcessingTimeoutInMs}ms`,n.Warn)}),e.frameProcessingTimeoutInMs);return function(){clearTimeout(t)}}function i(e,t){return n=>pr(this,void 0,void 0,(function*(){const i=n.videoFrame;t.reportStartFrameProcessing(i.codedWidth,i.codedHeight);const r=o(),a=yield e(n);return r(),t.reportFrameProcessed(),a}))}function r(e){return e.videoFrameBuffer=e.videoFrameBuffer||e.data,delete e.data,e}function a(){return Ne(Ce),Ko.isSupported()}function s(e){sn("video.videoFrameProcessed",[e])}function l(e,t=n.Warn){sn("video.notifyError",[e,t])}!function(e){e.Fatal="fatal",e.Warn="warn"}(n=e.ErrorLevel||(e.ErrorLevel={})),e.registerForVideoFrame=function(e){var n,c;if(!a())throw z;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if(Ne(Ce,H.sidePanel)){if(Ot("video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e)),!1),null===(n=Ce.supports.video)||void 0===n?void 0:n.mediaStream)Ot("video.startVideoExtensibilityVideoStream",(n=>pr(this,void 0,void 0,(function*(){const{streamId:o,metadataInTexture:r}=n,a=t?i(e.videoFrameHandler,t):e.videoFrameHandler;r?yield Ho(o,a,l,t):yield No(o,a,l,t)}))),!1),sn("video.mediaStream.registerForVideoFrame",[e.config]);else{if(!(null===(c=Ce.supports.video)||void 0===c?void 0:c.sharedFrame))throw z;Ot("video.newVideoFrame",(n=>{if(n){null==t||t.reportStartFrameProcessing(n.width,n.height);const i=o(),a=n.timestamp;e.videoBufferHandler(r(n),(()=>{i(),null==t||t.reportFrameProcessed(),s(a)}),l)}}),!1),sn("video.registerForVideoFrame",[e.config])}null==t||t.startMonitorSlowFrameProcessing()}},e.notifySelectedVideoEffectChanged=function(e,t,n){if(Ne(Ce,H.sidePanel),!a())throw z;sn("video.videoEffectChanged",[e,t,n])},e.registerForVideoEffect=function(e){if(Ne(Ce,H.sidePanel),!a())throw z;Ot("video.effectParameterChange",Go(e,t),!1),sn("video.registerForVideoEffect")},e.updatePersonalizedEffects=function(e){if(Ne(Ce,H.sidePanel),!Ko.isSupported())throw z;sn("video.personalizedEffectsChanged",[e])},e.isSupported=a,e.notifyFatalError=function(e){if(Ne(Ce),!Ko.isSupported())throw z;l(e,n.Fatal)}}(fr||(fr={}))})(),o})()));
//# sourceMappingURL=MicrosoftTeams.min.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(760);
;// CONCATENATED MODULE: ./src/utils.ts

let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.setAttribute("aria-label", config.name);
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            let input;
            let valueGetter;
            const defaultInputValue = (config.inputs[i].defaultValue) ? config.inputs[i].defaultValue : null;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    if (defaultInputValue) {
                        input.checked = defaultInputValue;
                    }
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            if (defaultInputValue) {
                                input.value = defaultInputValue;
                            }
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.setAttribute("aria-label", "input-" + config.name);
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.setAttribute("aria-label", "textarea-" + config.name);
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    container.appendChild(element);
    button.addEventListener("click", function () {
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}
function initializeDownloadLinks() {
    const csv = "Id,Value\n1,Hello world!\n";
    const data = new Blob([csv]);
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = URL.createObjectURL(data);
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.onclick = () => {
        const csv = "Id, Value\n1,Hello world!\n";
        const data = new Blob([csv]);
        let downloadLink = document.getElementById("hiddenDownloadLink");
        if (downloadLink == null) {
            downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', 'DownloadViaButton.csv');
            downloadLink.setAttribute('id', 'hiddenDownloadLink');
            document.body.appendChild(downloadLink);
        }
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        downloadLink.href = URL.createObjectURL(data);
        downloadLink.style.display = 'none';
        downloadLink.click();
    };
}
function outputTabRenderedLocation(getContext) {
    if (isInTeams()) {
        getContext(outputTabRenderedLocationInTeams);
    }
    else {
        add_page_header(`Currently running outside of Microsoft Teams.`);
    }
    function isInTeams() {
        if ((window.parent === window.self && window.nativeInterface) ||
            window.name === "embedded-page-container" ||
            window.name === "extension-tab-frame") {
            return true;
        }
        return false;
    }
}
function outputTabRenderedLocationInTeams(context) {
    var appLocation = 'unidentified location...';
    const perfData = window.performance;
    if (context.meetingId) {
        appLocation = 'Meeting';
    }
    else if (context.chatId) {
        appLocation = 'Chat';
    }
    else if (context.teamId && context.channelId) {
        appLocation = `${context.channelName} channel in ${context.teamName}`;
    }
    else {
        appLocation = 'Teams App';
    }
    if (isInConfig()) {
        appLocation = `${appLocation} (Config page)`;
    }
    else if (isInSidePanel()) {
        appLocation = `${appLocation} (Side Panel)`;
    }
    add_page_header(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`);
    function isInConfig() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.settings;
    }
    function isInSidePanel() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.sidePanel;
    }
}
;
function add_page_header(content) {
    var h2 = document.createElement("h2");
    h2.textContent = content;
    container.prepend(h2);
}

;// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min.initialize(undefined, ["https://teams.microsoftonline.cn"]);
        MicrosoftTeams_min.appInitialization.notifyAppLoaded();
        initializeDownloadLinks();
        outputTabRenderedLocation(MicrosoftTeams_min.getContext);
        addModule({
            name: "enablePrintCapability",
            initializedRequired: true,
            hasOutput: false,
            action: function () {
                MicrosoftTeams_min.enablePrintCapability();
            },
        });
        addModule({
            name: "print",
            initializedRequired: true,
            hasOutput: false,
            action: function () {
                MicrosoftTeams_min.print();
            },
        });
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getContext(output);
            },
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getTabInstances(output);
            },
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getMruTabInstances(output);
            },
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            },
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "navigateForward",
                },
            ],
            action: function (navigateForward) {
                MicrosoftTeams_min.returnFocus(navigateForward);
            },
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            },
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
            },
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerChangeSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            },
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            },
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            },
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverLeaveHandler(function () {
                    output(`Hover leave event received`);
                });
            },
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "deepLinkParameters",
                },
            ],
            action: function (deepLinkParameters) {
                MicrosoftTeams_min.shareDeepLink(deepLinkParameters);
            },
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "deepLink",
                },
            ],
            action: function (deepLink) {
                MicrosoftTeams_min.executeDeepLink(deepLink);
            },
        });
        addModule({
            name: "navigateToApp",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "navigateToAppParameters",
                },
            ],
            action: (navigateToAppParameters) => {
                MicrosoftTeams_min.pages.navigateToApp(navigateToAppParameters);
            },
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            hasOutput: true,
            action: function (url, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    },
                });
            },
        });
        addModule({
            name: "authentication_externalBrowser",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "mockOAuth", // do not go to the actual oauth provider, for scenario testing purpose
                },
            ],
            hasOutput: true,
            action: function (mockOAuth, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: `auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${mockOAuth ? "1" : "{authId}"}&mockOAuth=${mockOAuth}&hostRedirectUrl={hostRedirectUrl}`,
                    isExternal: true,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                    },
                });
            },
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                    defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
                },
            ],
            action: function (taskInfo, output) {
                childWindow = MicrosoftTeams_min.tasks.startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            },
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "message",
                },
            ],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            },
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "message",
                },
            ],
            action: function (message, output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            },
        });
        addModule({
            name: "register listener for parent message(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.addEventListener("message", function (message) {
                        output("message from tab: " + message);
                    });
                }
                else {
                    output("parent window not available");
                }
            },
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "showNotificationParameters",
                },
            ],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            },
        });
        addModule({
            name: "authentication.getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "getAuthTokenParameters",
                },
            ],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min.authentication.getAuthToken(getAuthTokenParameters);
            },
        });
        addModule({
            name: "authentication.getUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.authentication.getUser({
                    successCallback: output,
                    failureCallback: output,
                });
            },
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                MicrosoftTeams_min.authentication.notifyFailure(reason);
            },
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "result",
                },
            ],
            action: function (result) {
                MicrosoftTeams_min.authentication.notifySuccess(result);
            },
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.getSettings(output);
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    MicrosoftTeams_min.settings.setSettings({
                        websiteUrl: configUrl,
                        contentUrl: configUrl,
                        entityId: "tabconfig",
                        suggestedDisplayName: "Test Tab RegisterOnSave",
                    });
                    output("SaveEvent recieved");
                });
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                window.saveEvent &&
                    window.saveEvent.notifyFailure(reason);
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            },
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "settings",
                    defaultValue: '{"contentUrl": "https://teams-test-tab.azurewebsites.net/", "entityId": "someEntity", "websiteUrl": "https://teams-test-tab.azurewebsites.net/"}',
                },
            ],
            hasOutput: true,
            action: function (settings, output) {
                MicrosoftTeams_min.settings.setSettings(settings);
            },
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "validityState",
                },
            ],
            action: function (validityState) {
                MicrosoftTeams_min.settings.setValidityState(validityState);
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                window.removeEvent &&
                    window.removeEvent.notifyFailure(reason);
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent &&
                    window.removeEvent.notifySuccess();
            },
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "filePreviewParameters",
                },
            ],
            action: function (filePreviewParameters) {
                MicrosoftTeams_min.openFilePreview(filePreviewParameters);
            },
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "result",
                },
                {
                    type: "string",
                    name: "appId",
                },
            ],
            action: function (result, appId) {
                MicrosoftTeams_min.tasks.submitTask(result, appId);
            },
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                    defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
                },
            ],
            hasOutput: true,
            action: function (taskInfo, output) {
                MicrosoftTeams_min.tasks.startTask(taskInfo, (error, result) => {
                    if (error) {
                        output("Error: " + error);
                    }
                    else {
                        output("Result: " + result);
                    }
                });
            },
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                },
            ],
            action: function (taskInfo) {
                MicrosoftTeams_min.tasks.updateTask(taskInfo);
            },
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "showNotificationParameters",
                },
            ],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            },
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.conversations.getChatMembers().then(output);
            },
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.teams.fullTrust.joinedTeams
                    .getUserJoinedTeams()
                    .then(output);
            },
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "readyToUnloadDelay",
                },
            ],
            action: function (readyToUnloadDelay) {
                const delay = Number(readyToUnloadDelay);
                MicrosoftTeams_min.registerBeforeUnloadHandler(function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    setTimeout(() => {
                        readyToUnload();
                    }, delay);
                    alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
                    return true;
                });
            },
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            },
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "includeHistory",
                    defaultValue: true,
                },
            ],
            hasOutput: true,
            action: function (includeHistory, output) {
                totalStates++;
                if (includeHistory) {
                    window.history.pushState({ some: "state", id: totalStates }, "tab state" + totalStates, "/testTab");
                }
                output("total States: " + totalStates);
                let historyStates = totalStates;
                window.addEventListener("popstate", function (event) {
                    historyStates--;
                    output("onpopstate: back button clicked. total remaining state: " +
                        historyStates);
                }, false);
            },
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                MicrosoftTeams_min.registerBackButtonHandler(function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            },
        });
        addModule({
            name: "navigateBack",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.pages.backStack.navigateBack();
            },
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "navigateForward",
                },
            ],
            action: function (navigateForward) {
                MicrosoftTeams_min.returnFocus(navigateForward);
            },
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "openConversationRequest",
                },
            ],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " +
                        conversationResponse.subEntityId +
                        " Conversation Id: " +
                        conversationResponse.conversationId +
                        " Entity Id: " +
                        conversationResponse.entityId +
                        " Channel Id: " +
                        conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " +
                        conversationResponse.subEntityId +
                        " Conversation Id: " +
                        conversationResponse.conversationId +
                        " Entity Id: " +
                        conversationResponse.entityId +
                        " Channel Id: " +
                        conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams_min.conversations.openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            },
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.conversations.closeConversation();
            },
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                MicrosoftTeams_min.media.captureImage((err, files) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const file = files[0];
                    let content = "";
                    let len = 20;
                    if (file.content) {
                        len = Math.min(len, file.content.length);
                        content = file.content.substr(0, len);
                    }
                    output("format: " +
                        file.format +
                        ", size: " +
                        file.size +
                        ", mimeType: " +
                        file.mimeType +
                        ", content: " +
                        content);
                });
            },
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: '{"mediaType":1,"maxMediaCount":1,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                },
            ],
            action: (mediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    let message = "";
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        let preview = "";
                        let len = 20;
                        if (media.preview) {
                            len = Math.min(len, media.preview.length);
                            preview = media.preview.substr(0, len);
                        }
                        message +=
                            "[format: " +
                                media.format +
                                ", size: " +
                                media.size +
                                ", mimeType: " +
                                media.mimeType +
                                ", content: " +
                                media.content +
                                ", preview: " +
                                preview +
                                "],";
                    }
                    output(message);
                });
            },
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "inputParams",
                    defaultValue: '{"mediaType":1,"maxMediaCount":1,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                },
            ],
            action: (inputParams, output) => {
                MicrosoftTeams_min.media.selectMedia(inputParams, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const media = medias[0];
                    media.getMedia((gmErr, blob) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            if (reader.result) {
                                output("Received Blob");
                            }
                        };
                    });
                });
            },
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "selectMediaInputs",
                    defaultValue: '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                },
            ],
            action: (selectMediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(selectMediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const urlList = [];
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        urlList.push({
                            value: media.content,
                            type: 1, //microsoftTeams.ImageUriType.ID
                        });
                    }
                    MicrosoftTeams_min.media.viewImages(urlList, (gmErr) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        output("Success");
                    });
                });
            },
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "imageUrls",
                    defaultValue: '["https://www.w3schools.com/images/picture.jpg","https://www.w3schools.com/images/picture.jpg"]',
                },
            ],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2, //microsoftTeams.ImageUriType.URL
                    });
                }
                MicrosoftTeams_min.media.viewImages(urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            },
        });
        addModule({
            name: "getLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "locationProps",
                    defaultValue: '{"allowChooseLocation":true,"showMap":true}',
                },
            ],
            action: (locationProps, output) => {
                MicrosoftTeams_min.location.getLocation(locationProps, (err, location) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(JSON.stringify(location));
                });
            },
        });
        addModule({
            name: "showLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "location",
                    defaultValue: '{"latitude":17,"longitude":17}',
                },
            ],
            action: (location, output) => {
                MicrosoftTeams_min.location.showLocation(location, (err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "geoLocation.requestPermission",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output(""); // Clear output
                MicrosoftTeams_min.geoLocation
                    .requestPermission()
                    .then((value) => output(`Consented: ${value}`))
                    .catch((err) => output(err));
            },
        });
        addModule({
            name: "media.scanBarCode",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "scanBarCodeConfig",
                    defaultValue: '{"timeOutIntervalInSec":30}',
                },
            ],
            action: (scanBarCodeConfig, output) => {
                MicrosoftTeams_min.media.scanBarCode((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, scanBarCodeConfig);
            },
        });
        addModule({
            name: "call.startCall",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "startCallParams",
                    defaultValue: '{"requestedModalities":["audio"],"targets":["yudogan@microsoft.com"]}',
                },
            ],
            action: function (startCallParams, output) {
                MicrosoftTeams_min.call
                    .startCall(startCallParams)
                    .then(() => output("Success"))
                    .catch((err) => output(`Error: ${err}`));
            },
        });
        addModule({
            name: "meeting.getMeetingDetails",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getMeetingDetails((err, meetingDetailsResponse) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(meetingDetailsResponse);
                });
            },
        });
        addModule({
            name: "meeting.shareAppContentToStage",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.shareAppContentToStage((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, window.location.href);
            },
        });
        addModule({
            name: "meeting.getAppContentStageSharingState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAppContentStageSharingState((err, appContentStageSharingState) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(appContentStageSharingState);
                });
            },
        });
        addModule({
            name: "meeting.getAppContentStageSharingCapabilities",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAppContentStageSharingCapabilities((err, appContentStageSharingCapabilities) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(appContentStageSharingCapabilities);
                });
            },
        });
        addModule({
            name: "monetization.openPurchaseExperience",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.monetization.openPurchaseExperience((err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(null);
                });
            },
        });
        addModule({
            name: "getIncomingClientAudioState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getIncomingClientAudioState((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "toggleIncomingClientAudio",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.toggleIncomingClientAudio((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "meeting.getAuthenticationTokenForAnonymousUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAuthenticationTokenForAnonymousUser((err, authenticationTokenOfAnonymousUser) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(authenticationTokenOfAnonymousUser);
                });
            },
        });
        addModule({
            name: "people.selectPeople",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "peoplePickerInputs",
                    defaultValue: '{"title":"", "setSelected":[], "openOrgWideSearchInChatOrChannel":false, "singleSelect":false}',
                },
            ],
            action: (peoplePickerInputs, output) => {
                MicrosoftTeams_min.people.selectPeople((err, people) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("People length: " + people.length + " " + JSON.stringify(people));
                }, peoplePickerInputs);
            },
        });
        addModule({
            name: "setFrameContext",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "frameContext",
                    defaultValue: '{"contentUrl":"", "websiteUrl":""}',
                },
            ],
            action: (frameContext) => {
                MicrosoftTeams_min.setFrameContext(frameContext);
            },
        });
        addModule({
            name: "navigateToTab",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "tabInstance",
                },
            ],
            action: (tabInstance, output) => {
                MicrosoftTeams_min.navigateToTab(tabInstance, (status, reason) => {
                    if (reason) {
                        output(reason);
                        return;
                    }
                    output(status);
                });
            },
        });
        addModule({
            name: "sharing.shareWebContent",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "shareWebContentRequest",
                    defaultValue: '{"content":[{"type":"URL","url":"https://teams-test-tab.azurewebsites.net/"}]}',
                },
            ],
            action: (shareWebContentRequest, output) => {
                // Clear the output box prior to action
                output("");
                MicrosoftTeams_min.sharing.shareWebContent(shareWebContentRequest, (err) => {
                    if (err) {
                        output(err.message);
                        return;
                    }
                    output("Sharing was successful.");
                });
            },
        });
        addModule({
            name: "stageView.open",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "stageViewParams",
                },
            ],
            action: function (stageViewParams) {
                MicrosoftTeams_min.stageView.open(stageViewParams);
            },
        });
        addModule({
            name: "setNavBarMenu",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "navBarMenuItems",
                    defaultValue: '[{"id":"submenu1","title":"SubMenu1","displayMode":1,"icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptMi4zMTItNC44OTdjMCAyLjIwNiAxLjc5NCA0IDQgNHM0LTEuNzk0IDQtNC0xLjc5NC00LTQtNC00IDEuNzk0LTQgNHptMTAgMGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiLz48L3N2Zz4=","contentDescription":"SubMenu1","enabled":"true"},{"id":"submenu2","title":"SubMenu2","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEgMTFoLTExdi0yaDExYy41NTIgMCAxLS40NDggMS0xcy0uNDQ4LTEtMS0xYy0uNDAzIDAtLjc0Ny4yNDItLjkwNS41ODdsLTEuNzQ5LS45NTZjLjQ5OS0uOTY1IDEuNDk0LTEuNjMxIDIuNjU0LTEuNjMxIDMuOTcxIDAgMy45NjkgNiAwIDZ6bTcgN2MwLTEuNjU2LTEuMzQ0LTMtMy0zaC0xNXYyaDE1Yy41NTIgMCAxIC40NDggMSAxcy0uNDQ4IDEtMSAxYy0uNDAzIDAtLjc0Ny0uMjQyLS45MDUtLjU4N2wtMS43NDkuOTU2Yy40OTkuOTY1IDEuNDk0IDEuNjMxIDIuNjU0IDEuNjMxIDEuNjU2IDAgMy0xLjM0NCAzLTN6bTEuMDE0LTcuNjU1Yy4wODItLjc1My43MTItMS4zNDUgMS40ODYtMS4zNDUuODI3IDAgMS41LjY3MyAxLjUgMS41cy0uNjczIDEuNS0xLjUgMS41aC0yMC41djJoMjAuNWMxLjkzMiAwIDMuNS0xLjU2OCAzLjUtMy41cy0xLjU2OC0zLjUtMy41LTMuNWMtMS42MjQgMC0yLjk3NyAxLjExNi0zLjM3MiAyLjYxN2wxLjg4Ni43Mjh6bS0xMy43NjQtNy44NDVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLjUtMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0uNSAxOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMC41IDJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLTNjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTExIC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tLjUtNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEuNSA2LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xMy0zYy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xNy41LTJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xNy0xMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTQgMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptNi00LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTMgMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMiAuOTY5Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM3Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tMyAxLjAzMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMC0zLjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS00LjUgOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xLjUtN2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEgM2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTItNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTkuNSAyMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMy41IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTE1IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6Ii8+PC9zdmc+","contentDescription":"SubMenu2","enabled":"true"},{"id":"submenu3","title":"SubMenu3","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTkyIDQuMjIxbC0yLjg4MSAyLjg4MWMtLjQxMS0uNTI4LS44ODYtMS4wMDMtMS40MTQtMS40MTRsMi44ODEtMi44ODEgMS40MTQgMS40MTR6bS04LjE5Mi0uMTUydi00LjA2OWgtMnY0LjA2OWMuMzI4LS4wNDEuNjYxLS4wNjkgMS0uMDY5cy42NzIuMDI4IDEgLjA2OXptNi45MzEgNi45MzFjLjA0MS4zMjguMDY5LjY2MS4wNjkgMXMtLjAyOC42NzItLjA2OSAxaDQuMDY5di0yaC00LjA2OXptLTEuOTMxIDFjMCAuMzQxLS4wMzUuNjc0LS4wOSAxaC0xMS44MmMtLjA1NS0uMzI2LS4wOS0uNjU5LS4wOS0xIDAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDZ6bS0xMC44OTctNi4zMTJsLTIuODgxLTIuODgxLTEuNDE0IDEuNDE0IDIuODgxIDIuODgxYy40MTEtLjUyOS44ODUtMS4wMDMgMS40MTQtMS40MTR6bS03LjEwMyA1LjMxMnYyaDQuMDY5Yy0uMDQxLS4zMjgtLjA2OS0uNjYxLS4wNjktMXMuMDI4LS42NzIuMDY5LTFoLTQuMDY5em05LjA2MiAxMS42NjdjLTEuMjA1LTEuMTk1LTEuMzY0LTEuODkzLS4zMTItMy4yNi4zNy0uNDgxLjUzLS45NDIuNTMtMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIzLTMuMDA2bC0xLjQ0OSAxLjM3OWMxLjM3NSAxLjYgMS4yNDcgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NS0xLjMzNHptOC42ODggMGMtMS4yMDUtMS4xOTUtMS4zNjQtMS44OTMtLjMxMi0zLjI2LjM3LS40ODEuNTI5LS45NDIuNTI5LTEuNCAwLS45NTktLjY5OS0xLjkwNi0xLjYyMi0zLjAwNmwtMS40NDggMS4zNzljMS4zNzUgMS42IDEuMjQ2IDEuNzcyLjI2IDMuMTg0LS4zMTYuNDUzLS40NDYuOTA4LS40NDYgMS4zNTUgMCAxLjE1OS44NzYgMi4yNTkgMS42NjUgMy4wODJsMS4zNzQtMS4zMzR6bS00LjM5NiAwYy0xLjIwNS0xLjE5NS0xLjM2NC0xLjg5My0uMzEyLTMuMjYuMzctLjQ4MS41MjktLjk0Mi41MjktMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIyLTMuMDA2bC0xLjQ0OCAxLjM3OWMxLjM3NSAxLjYgMS4yNDYgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NC0xLjMzNHoiLz48L3N2Zz4","contentDescription":"SubMenu3","enabled":"true"},{"id":"submenu4","title":"SubMenu4","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuNSAyYy44MjcgMCAxLjUuNjczIDEuNSAxLjV2Ny41MjVjMCAxLjU2OS41MTQgMi4yODcgMS40MTEgMy4wNSAxLjAxLjg1OCAxLjU4OSAyLjEwNiAxLjU4OSAzLjQyNSAwIDIuNDgxLTIuMDE5IDQuNS00LjUgNC41cy00LjUtMi4wMTktNC41LTQuNWMwLTEuMzE5LjU3OS0yLjU2NyAxLjU5LTMuNDI1Ljg5Ni0uNzYxIDEuNDEtMS40NzkgMS40MS0zLjA1di03LjUyNWMwLS44MjcuNjczLTEuNSAxLjUtMS41em0wLTJjLTEuOTMzIDAtMy41IDEuNTY3LTMuNSAzLjV2Ny41MjVjMCAuNTg3LS4yNTggMS4xNDYtLjcwNSAxLjUyNS0xLjQwMyAxLjE5Mi0yLjI5NSAyLjk2NS0yLjI5NSA0Ljk1IDAgMy41OSAyLjkwOSA2LjUgNi41IDYuNXM2LjUtMi45MSA2LjUtNi41YzAtMS45ODUtLjg5Mi0zLjc1OC0yLjI5NS00Ljk1LS40NDctLjM4LS43MDUtLjkzOC0uNzA1LTEuNTI1di03LjUyNWMwLTEuOTMzLTEuNTY3LTMuNS0zLjUtMy41em0yLjEwNyAxNC43MThjLTEuMDEyLS44OS0xLjYwNy0xLjczNC0xLjYwNy0zLjIydi02LjQ5OGgtMXY2LjQ5OGMwIDEuNDg0LS41OTcgMi4zMzItMS42MDcgMy4yMi0uNzk0LjY5OC0xLjM5MyAxLjY0Mi0xLjM5MyAyLjc4MiAwIDEuOTMzIDEuNTY3IDMuNSAzLjUgMy41czMuNS0xLjU2NyAzLjUtMy41YzAtMS4xNC0uNTk5LTIuMDgzLTEuMzkzLTIuNzgyem0tOS42MDctNi4yMThjMCAxLjkzMy0xLjU2NyAzLjUtMy41IDMuNXMtMy41LTEuNTY3LTMuNS0zLjUgMS41NjctMy41IDMuNS0zLjUgMy41IDEuNTY3IDMuNSAzLjV6bS04IDBjMC0uMTcxLjAzMi0uMzMzLjA1MS0uNWgtMi4wNTF2MWgyLjA1MWMtLjAxOS0uMTY3LS4wNTEtLjMyOS0uMDUxLS41em0xLjcwNS0zLjUwMWwtMS40NDgtMS40NDktLjcwNy43MDcgMS40NDggMS40NDhjLjIxLS4yNjEuNDQ1LS40OTcuNzA3LS43MDZ6bTYuMjk3LjcwNmwxLjQ0Ny0xLjQ0OC0uNzA3LS43MDctMS40NDggMS40NDhjLjI2My4yMS40OTguNDQ1LjcwOC43MDd6bS0zLjUwMi0xLjcwNWMuMTcxIDAgLjMzNC4wMzIuNS4wNXYtMi4wNWgtMXYyLjA1Yy4xNjYtLjAxOC4zMjktLjA1LjUtLjA1em0wIDljLS4xNzEgMC0uMzM0LS4wMzItLjUtLjA1djIuMDVoMXYtMi4wNWMtLjE2Ni4wMTgtLjMyOS4wNS0uNS4wNXptNC40NDktNWMuMDE5LjE2Ny4wNTEuMzI5LjA1MS41bC0uMDUxLjVoMi4wNTF2LTFoLTIuMDUxem0tNy45NTEgMy4yOTRsLTEuNDQ4IDEuNDQ5LjcwNy43MDcgMS40NDgtMS40NDhjLS4yNjItLjIxLS40OTctLjQ0Ni0uNzA3LS43MDh6bTYuMjk2LjcwOGwxLjQ0OCAxLjQ0OC43MDctLjcwNy0xLjQ0Ny0xLjQ0OGMtLjIxLjI2Mi0uNDQ1LjQ5Ny0uNzA4LjcwN3oiLz48L3N2Zz4=","contentDescription":"SubMenu4","enabled":"true"},{"id":"submenu5","title":"SubMenu5","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4zOTYgOWgtMi4zOTZ2LTJoMi4zOTZ2MnptNy42MDQtNi40NTh2LTIuNTQyaC0ydjIuNTQyaDJ6bS00Ljc5My44NzZsLTEuODU5LTEuODU5LTEuNDE0IDEuNDE0IDEuODU5IDEuODU5IDEuNDE0LTEuNDE0em05LjIyMi0yLjE1NmwtMS44NzUgMS44NzUgMS40MTQgMS40MTQgMS44NzUtMS44NzUtMS40MTQtMS40MTR6bS0xMS40NiAxMC42NjdsLTIuMDUzIDEuNzczIDEuMzAzIDEuNTE3IDIuMDUzLTEuNzczLTEuMzAzLTEuNTE3em0yMS4wMzEgMi43OTNjMCAyLjM2Mi0xLjk0OSA0LjI3OC00LjM1NCA0LjI3OGgtMTAuMjkyYy0yLjQwNSAwLTQuMzU0LTEuOTE2LTQuMzU0LTQuMjc4IDAtLjc3LjIxMS0xLjQ5LjU3NC0yLjExMy0uOTY1LS45MDctMS41NzQtMi4xOC0xLjU3NC0zLjYwOSAwLTIuNzYyIDIuMjM4LTUgNS01IDEuMzI4IDAgMi41MjMuNTI4IDMuNDE0IDEuMzc2LjY0OC0uMjQgMS4zNS0uMzc2IDIuMDg2LS4zNzYgMy4xNzIgMCA1Ljc1MyAyLjQ0MyA1LjkyMiA1LjUxNiAyLjAzMy4zNTkgMy41NzggMi4xMDUgMy41NzggNC4yMDZ6bS0xOC01LjcyMmMwIC44Ni4zNyAxLjYyOC45NTUgMi4xNzIuNDg0LS4zMTYgMS4wMjktLjU1MSAxLjYyMy0uNjU2LjA4OS0xLjYxLjg0NC0zLjA0MiAxLjk5NC00LjA0Ni0uNDU5LS4yODgtLjk5LS40Ny0xLjU3Mi0uNDctMS42NTQgMC0zIDEuMzQ2LTMgM3ptMTYgNS43MjJjMC0yLjA3Ni0xLjk3OS0yLjYxOC0zLjQ4OC0yLjUxMi4yMTctMS40MzktLjI0MS01LjIxLTQuMDEyLTUuMjEtMy44NzUgMC00LjA2MiAzLjg1NC00LjAxMiA1LjIwOS0xLjM4NC0uMDg0LTMuNDg4LjM5NS0zLjQ4OCAyLjUxMyAwIDEuMjU2IDEuMDU3IDIuMjc4IDIuMzU0IDIuMjc4aDEwLjI5MWMxLjI5OCAwIDIuMzU1LTEuMDIyIDIuMzU1LTIuMjc4em0tMTUuNTggOS4yNzhsLTEuNDEtMS40MSAyLjU5LTIuNTkgMS40MSAxLjQxLTIuNTkgMi41OXptNy41NDMtMi41OWwtMS40MS0xLjQxLTIuNTkgMi41OSAxLjQxIDEuNDEgMi41OS0yLjU5em00Ljg3NSAwbC0xLjQxLTEuNDEtMi41OSAyLjU5IDEuNDEgMS40MSAyLjU5LTIuNTl6Ii8+PC9zdmc+","contentDescription":"SubMenu5","enabled":"true"}]',
                },
            ],
            action: function (navBarMenuItems, output) {
                MicrosoftTeams_min.menus.setNavBarMenu(navBarMenuItems, (id) => {
                    navBarMenuItems.map((item) => {
                        if (item.id === id) {
                            output("Clicked id is : " + id);
                        }
                    });
                    return true;
                });
            },
        });
        addModule({
            name: "appEntity.selectAppEntity",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "selectAppEntityParams",
                },
            ],
            action: function (selectAppEntityParams, output) {
                MicrosoftTeams_min.appEntity.selectAppEntity(selectAppEntityParams.threadId, selectAppEntityParams.categories, selectAppEntityParams.subEntityId, (sdkError, appEntity) => {
                    output(sdkError || appEntity);
                });
            },
        });
        addModule({
            name: "chat.openGroupChat",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "openChatRequest",
                    defaultValue: '{"message":"Test Group Chat Message","topic":"Test Group Chat","users":["a@contoso.com","b@contoso.com"]}',
                },
            ],
            action: function (openChatRequest, output) {
                MicrosoftTeams_min.chat
                    .openGroupChat(openChatRequest)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        MicrosoftTeams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min.appInitialization.notifyFailure({
            reason: MicrosoftTeams_min.appInitialization.FailedReason.Other,
            message: err.message,
        });
    }
};

;// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();

})();

/******/ })()
;
//# sourceMappingURL=app.474eee0d5b23b028b011.js.map