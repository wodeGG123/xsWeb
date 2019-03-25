webpackJsonp([41],{141:function(t,e,s){function a(t){s(490)}var n=s(5)(s(488),s(491),a,null,null);t.exports=n.exports},488:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(143),n=s.n(a),i=s(93);e.default={props:{pageInfo:Object,type:String,ids:Array,code:String,path:String},data:function(){return{systemModelTypes:[{value:"all",label:this.$t("topBar.systemModelTypes_all")},{value:"h5-exception",label:this.$t("topBar.systemModelTypes_h5")},{value:"node-exception",label:this.$t("topBar.systemModelTypes_node")},{value:"login",label:this.$t("topBar.systemModelTypes_login")}],targetSysLogType:"all",loadingState:!1,formState:{show:!1},searchkey:"",authPost:"0",authPostOptions:[{value:"0",label:"全部"},{value:"1",label:"待审核"}]}},methods:{changePostOptions:function(t){"0"==t?this.$store.dispatch("getContentList"):"1"==t&&this.$store.dispatch("getContentList",{state:!1})},selectSysLogType:function(t){this.targetSysLogType=t,"all"==t?this.$store.dispatch("getSystemLogsList"):this.$store.dispatch("getSystemLogsList",{type:t})},searchResult:function(t){var e=this.pageInfo?this.pageInfo.searchkey:"";"content"==this.type?this.$store.dispatch("getContentList",{searchkey:e}):"contentTag"==this.type?this.$store.dispatch("getContentTagList",{searchkey:e}):"contentMessage"==this.type?this.$store.dispatch("getContentMessageList",{searchkey:e}):"regUser"==this.type&&this.$store.dispatch("getRegUserList",{searchkey:e})},addUser:function(){this.$store.dispatch("showAdminUserForm")},addRole:function(){this.$store.dispatch("showAdminGroupForm")},addResource:function(){this.$store.dispatch("showAdminResourceForm",{type:"root",formData:{parentId:"0"}})},addContent:function(){this.$store.dispatch("showContentForm"),this.$router.push("/addContent")},addAds:function(){this.$store.dispatch("adsInfoForm",{edit:!1,formData:{}}),this.$router.push("/addAds")},addSysAnnounce:function(){this.$store.dispatch("showContentForm"),this.$router.push("/addSysAnnounce")},addTopCates:function(){this.$store.dispatch("showContentCategoryForm",{type:"root",formData:{parentId:"0"}})},clearSystemOptionLogs:function(){var t=this;this.$confirm(this.$t("main.del_notice"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){return i.a.clearSystemOptionLogs()}).then(function(e){200===e.data.status?(t.$store.dispatch("getSystemLogsList"),t.$message({message:"清空日志成功",type:"success"})):t.$message.error(e.data.message)}).catch(function(e){t.$message({type:"info",message:t.$t("main.scr_modal_del_error_info")})})},branchDelete:function(t){var e=this,s=this;if("msg"===t?this.$t("topBar.del_message"):"user"===t?this.$t("topBar.del_user"):"systemlogs"===t?this.$t("topBar.del_sysopt_log"):"systemnotify"===t&&this.$t("topBar.del_sys_notice"),n()(s.ids))return this.$message({type:"info",message:this.$t("validate.selectNull",{label:this.$t("main.target_Item")})}),!1;this.$confirm(this.$t("main.del_notice"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){var e=s.ids.join();return"msg"===t?i.a.deleteContentMessage({ids:e}):"user"===t?i.a.deleteRegUser({ids:e}):"systemlogs"===t?i.a.deleteSystemOptionLogs({ids:e}):"systemnotify"===t?i.a.deleteSystemNotify({ids:e}):"content"===t?i.a.deleteContent({ids:e}):void 0}).then(function(s){200===s.data.status?("msg"===t?e.$store.dispatch("getContentMessageList"):"user"===t?e.$store.dispatch("getRegUserList"):"systemlogs"===t?e.$store.dispatch("getSystemLogsList"):"systemnotify"===t?e.$store.dispatch("getSystemNotifyList"):"content"===t&&e.$store.dispatch("getContentList"),e.$message({message:""+e.$t("main.scr_modal_del_succes_info"),type:"success"})):e.$message.error(s.data.message)}).catch(function(t){e.$message({type:"info",message:e.$t("main.scr_modal_del_error_info")})})},addTag:function(){this.$store.dispatch("showContentTagForm")},delUser:function(){},bakUpData:function(){var t=this;this.$confirm(this.$t("backUpData.askBak"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){return t.loadingState=!0,i.a.bakUpData()}).then(function(e){200===e.data.status?(t.loadingState=!1,t.$store.dispatch("getBakDateList"),t.$message({message:t.$t("backUpData.bakSuccess"),type:"success"})):t.$message.error(e.data.message)}).catch(function(e){t.$message({type:"info",message:t.$t("backUpData.bakEr")+e})})},saveTemplate:function(){var t=this,e={code:this.code,path:this.path};i.a.updateTemplateFileText(e).then(function(e){200==e.data.status?t.$message({message:t.$t("main.updateSuccess"),type:"success"}):t.$message.error(e.data.message)})},setHasRead:function(){var t=this;if(n()(this.ids))return this.$message({type:"info",message:this.$t("validate.selectNull",{label:this.$t("main.target_Item")})}),!1;var e=this.ids.join();i.a.setNoticeRead({ids:e}).then(function(e){if(200===e.data.status){t.$store.dispatch("getSystemNotifyList");var s=t.$store.getters.loginState.noticeCounts;t.$store.dispatch("loginState",{noticeCounts:s-t.ids.length})}else t.$message.error(e.data.message)})}},components:{}}},489:function(t,e,s){e=t.exports=s(18)(!1),e.push([t.i,"\n.option-button {\n  display: inline-block;\n}\n",""])},490:function(t,e,s){var a=s(489);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(19)("fcbb14d8",a,!0,{})},491:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dr-toolbar"},[s("div",{staticClass:"option-button el-col-6"},["adminGroup"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addRole}},[s("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"adminUser"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addUser}},[s("i",{staticClass:"fa fa-fw fa-plus"})])],1):"adminResource"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addResource}},[s("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"content"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:function(e){return t.addContent("content")}}},[s("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("content")}}},[s("i",{staticClass:"fa fa-fw fa-trash-o"})])],1):"contentCategory"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addTopCates}},[s("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"contentMessage"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("msg")}}},[s("i",{staticClass:"fa fa-fw fa-trash-o"})])],1):"contentTag"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.addTag}},[s("i",{staticClass:"fa fa-fw fa-plus",attrs:{"aria-hidden":"true"}})])],1):"regUser"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("user")}}},[s("i",{staticClass:"fa fa-fw fa-trash-o"})])],1):"backUpData"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:"",loading:t.loadingState},on:{click:t.bakUpData}},[s("i",{staticClass:"fa fa-fw fa-cloud-download",attrs:{"aria-hidden":"true"}})])],1):"adminTemplate"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:t.saveTemplate}},[s("i",{staticClass:"fa fa-fw fa-save",attrs:{"aria-hidden":"true"}})])],1):"systemOptionLogs"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("systemlogs")}}},[s("i",{staticClass:"fa fa-fw fa-trash-o"})]),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"清空所有日志",placement:"right-start"}},[s("el-button",{attrs:{size:"small",type:"warning",plain:"",round:""},on:{click:t.clearSystemOptionLogs}},[s("i",{staticClass:"fa fa-fw fa-window-restore"})])],1)],1):"systemNotify"===t.type?s("div",[s("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""},on:{click:function(e){return t.setHasRead()}}},[s("i",{staticClass:"fa fa-fw fa-eye",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("el-button",{attrs:{size:"small",type:"danger",plain:"",round:""},on:{click:function(e){return t.branchDelete("systemnotify")}}},[s("i",{staticClass:"fa fa-fw fa-trash-o"})])],1):"systemAnnounce"===t.type?s("div",[s("el-button",{attrs:{type:"primary",size:"small",plain:"",round:""},on:{click:t.addSysAnnounce}},[s("i",{staticClass:"fa fa-fw fa-plus"})])],1):"ads"===t.type?s("div",[s("el-button",{attrs:{type:"primary",size:"small",plain:"",round:""},on:{click:t.addAds}},[s("i",{staticClass:"fa fa-fw fa-plus"})])],1):t._e()]),t._v(" "),s("div",{staticClass:"el-col-18"},["content"===t.type?s("div",{staticClass:"dr-toolbar-right"},[s("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("topBar.keywords"),"suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}}),t._v(" "),s("div",{staticClass:"dr-select-box"},[s("el-select",{attrs:{size:"small",placeholder:"请选择"},on:{change:t.changePostOptions},model:{value:t.authPost,callback:function(e){t.authPost=e},expression:"authPost"}},t._l(t.authPostOptions,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1):"contentTag"===t.type?s("div",{staticClass:"dr-toolbar-right"},[s("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("topBar.tagName"),"suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}})],1):"contentMessage"===t.type?s("div",{staticClass:"dr-toolbar-right"},[s("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("topBar.messageContent"),"suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}})],1):"regUser"===t.type?s("div",{staticClass:"dr-toolbar-right"},[s("el-input",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("topBar.regUser"),"suffix-icon":"el-icon-search","on-icon-click":t.searchResult},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.pageInfo.searchkey,callback:function(e){t.$set(t.pageInfo,"searchkey",e)},expression:"pageInfo.searchkey"}})],1):"systemOptionLogs"===t.type?s("div",{staticClass:"dr-toolbar-right"},[s("el-select",{staticClass:"dr-searchInput",attrs:{size:"small",placeholder:t.$t("main.ask_select_label")},on:{change:t.selectSysLogType},model:{value:t.targetSysLogType,callback:function(e){t.targetSysLogType=e},expression:"targetSysLogType"}},t._l(t.systemModelTypes,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1):"adminTemplate"===t.type?s("div",{staticClass:"dr-toolbar-right",staticStyle:{"text-align":"left"}},[s("el-tag",{attrs:{"v-if":t.path,type:"info",size:"small"}},[t._v(t._s(t.path))])],1):s("div",{staticClass:"dr-toolbar-right"},[t._v("\n           \n        ")])])])},staticRenderFns:[]}}});