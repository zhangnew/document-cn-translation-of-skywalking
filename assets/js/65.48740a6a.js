(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{297:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("阅读 "),s("router-link",{attrs:{to:"./../concepts-and-designs/oal.html"}},[t._v("OAL 概述")]),t._v(" 以了解 OAL 脚本。")],1),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("官方 official_analysis.oal 在"),s("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/oap-server/generated-analysis/src/main/resources/official_analysis.oal",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"编写-oal-观测性分析语言-脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写-oal-观测性分析语言-脚本"}},[this._v("#")]),this._v(" 编写 OAL (观测性分析语言) 脚本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"在源代码中查找-oal-脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在源代码中查找-oal-脚本"}},[this._v("#")]),this._v(" 在源代码中查找 oal 脚本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"生成工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成工具"}},[this._v("#")]),this._v(" 生成工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("oap-server/generate-tool")]),this._v(" 模块包含编译工具的源代码。该工具已经集成在 maven 编译阶段。所以, 除非您想要更改工具源代码, 否则无需进行任何设置。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("运行 "),e("code",[this._v("./mvnw compile")]),this._v(" 或 "),e("code",[this._v("./mvnw package")]),this._v(", 生成的 oal 脚本代码位于 "),e("code",[this._v("oap-server/generate-tool/target/generated-sources/oal/*")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"编写并重新编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写并重新编译"}},[this._v("#")]),this._v(" 编写并重新编译")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("您可以更改 "),e("code",[this._v("official_analysis.oal")]),this._v(" 脚本, 然后重新编译代码.\n生成的代码位于 "),e("code",[this._v("oap-server/generated-analysis/target/generated-sources/oal")]),this._v(".")])}],!1,null,null,null);e.default=r.exports}}]);