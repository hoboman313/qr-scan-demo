"use strict"
define("qr-scan-demo/app",["exports","qr-scan-demo/resolver","ember-load-initializers","qr-scan-demo/config/environment"],function(e,n,t,r){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default});(0,t.default)(a,r.default.modulePrefix),e.default=a}),define("qr-scan-demo/components/code-scanner",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Component,t=Ember.set,r=Ember.$
e.default=n.extend({classNames:["centered"],didInsertElement:function(){var e=this,n=function(n){t(e,"error",n.name+" "+(n.message?"-":"")+" "+n.message)},a={resultFunction:function(n){t(e,"result","Format: "+n.format+" - Value: "+n.code)},getDevicesError:n,getUserMediaError:n,cameraError:n}
r("canvas#camera-view").WebCodeCamJQuery(a).data().plugin_WebCodeCamJQuery.play()}})}),define("qr-scan-demo/helpers/app-version",["exports","qr-scan-demo/config/environment","ember-cli-app-version/utils/regexp"],function(e,n,t){function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return n.hideSha?a.match(t.versionRegExp)[0]:n.hideVersion?a.match(t.shaRegExp)[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r
var a=n.default.APP.version
e.default=Ember.Helper.helper(r)}),define("qr-scan-demo/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("qr-scan-demo/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("qr-scan-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","qr-scan-demo/config/environment"],function(e,n,t){Object.defineProperty(e,"__esModule",{value:!0})
var r=void 0,a=void 0
t.default.APP&&(r=t.default.APP.name,a=t.default.APP.version),e.default={name:"App Version",initialize:(0,n.default)(r,a)}}),define("qr-scan-demo/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("qr-scan-demo/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("qr-scan-demo/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:n.default}}),define("qr-scan-demo/initializers/export-application-global",["exports","qr-scan-demo/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var r,a=n.default.exportApplicationGlobal
r="string"==typeof a?a:Ember.String.classify(n.default.modulePrefix),t[r]||(t[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("qr-scan-demo/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("qr-scan-demo/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("qr-scan-demo/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("qr-scan-demo/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:n.default}}),define("qr-scan-demo/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("qr-scan-demo/router",["exports","qr-scan-demo/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){}),e.default=t}),define("qr-scan-demo/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("qr-scan-demo/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"HVktNdfG",block:'{"symbols":[],"statements":[[6,"h2"],[9,"class","centered"],[7],[0,"Bar code and QR code scanning demo"],[8],[0,"\\n\\n"],[1,[18,"code-scanner"],false]],"hasEval":false}',meta:{moduleName:"qr-scan-demo/templates/application.hbs"}})}),define("qr-scan-demo/templates/components/code-scanner",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"JT9KtpmA",block:'{"symbols":[],"statements":[[6,"canvas"],[9,"id","camera-view"],[7],[8],[0,"\\n\\n"],[4,"if",[[20,["result"]]],null,{"statements":[[0,"  "],[6,"h3"],[7],[1,[18,"result"],false],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[20,["error"]]],null,{"statements":[[0,"  "],[6,"h3"],[7],[0,"Error: "],[1,[18,"error"],false],[8],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"qr-scan-demo/templates/components/code-scanner.hbs"}})}),define("qr-scan-demo/config/environment",[],function(){try{var e="qr-scan-demo/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("qr-scan-demo/app").default.create({name:"qr-scan-demo",version:"0.0.0+f5f5d721"})
