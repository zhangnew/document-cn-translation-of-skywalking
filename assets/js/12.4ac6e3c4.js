(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("ul",[s("li",[t._v("前向"),s("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("发布页面"),s("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("新目录结构如下：")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"下载skywalking探针发布版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载skywalking探针发布版本"}},[this._v("#")]),this._v(" 下载skywalking探针发布版本")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"部署探针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署探针"}},[this._v("#")]),this._v(" 部署探针")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("拷贝skywalking-agent目录到所需位置，探针包含整个目录，请不要改变目录结构")]),this._v(" "),a("li",[this._v("增加JVM启动参数，"),a("code",[this._v("-javaagent:/path/to/skywalking-agent/skywalking-agent.jar")]),this._v("。参数值为skywalking-agent.jar的绝对路径。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("+-- skywalking-agent\n    +-- activations\n         apm-toolkit-log4j-1.x-activation.jar\n         apm-toolkit-log4j-2.x-activation.jar\n         apm-toolkit-logback-1.x-activation.jar\n         ...\n    +-- config\n         agent.config  \n    +-- plugins\n         apm-dubbo-plugin.jar\n         apm-feign-default-http-9.x.jar\n         apm-httpClient-4.x-plugin.jar\n         .....\n    skywalking-agent.jar\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("/config/agent.config")]),this._v("包含探针所需配置，中文说明如下。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前的应用编码，最终会显示在webui上。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建议一个应用的多个实例，使用有相同的application_code。请使用英文")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("agent.application_code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Your_ApplicationName")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每三秒采样的Trace数量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认为负数，代表在保证不超过内存Buffer区的前提下，采集所有的Trace")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# agent.sample_n_per_3_secs=-1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置需要忽略的请求地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认配置如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# agent.ignore_suffix=.jpg,.jpeg,.js,.css,.png,.bmp,.gif,.ico,.mp3,.mp4,.html,.svg")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 探针调试开关，如果设置为true，探针会将所有操作字节码的类输出到/debugging目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# skywalking团队可能在调试，需要此文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# agent.is_open_debugging_class = true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对应Collector的config/application.yml配置文件中 agent_server/jetty/port 配置内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 单节点配置：SERVERS="127.0.0.1:8080" ')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 集群配置：SERVERS="10.2.45.126:8080,10.2.45.127:7600" ')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("collector.servers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("127.0.0.1:10800")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志文件名称前缀")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("logging.file_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("skywalking-agent.log")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志文件最大大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果超过此大小，则会生成新文件。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认为300M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("logging.max_file_size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("314572800")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志级别，默认为DEBUG。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("logging.level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("DEBUG")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("启动被监控应用。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"高级特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级特性"}},[this._v("#")]),this._v(" 高级特性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("插件会被统一放置在"),s("code",[t._v("plugins")]),t._v("目录中，新的插件，也只需要在启动阶段，放在目录中，就自动生效。删除则失效。")]),t._v(" "),s("li",[t._v("配置除了通过"),s("code",[t._v("/config/agent.config")]),t._v("文件外，可以通过环境变量和VM参数（-D）来进行设置\n"),s("ul",[s("li",[t._v("参数的key = "),s("code",[t._v("skywalking.")]),t._v(" + "),s("code",[t._v("agent.config")]),t._v("文件中的key")]),t._v(" "),s("li",[t._v("优先级：系统环境变量 > VM参数（-D） > "),s("code",[t._v("/config/agent.config")]),t._v("中的配置")])])]),t._v(" "),s("li",[t._v("Log默认使用文件输出，输出到"),s("code",[t._v("/logs")]),t._v("目录中")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"tomcat配置探针faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat配置探针faq"}},[this._v("#")]),this._v(" Tomcat配置探针FAQ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Tomcat 7\n修改"),a("code",[this._v("tomcat/bin/catalina.sh")]),this._v("，在首行加入如下信息")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CATALINA_OPTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CATALINA_OPTS")]),t._v(' -javaagent:/path/to/skywalking-agent/skywalking-agent.jar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" CATALINA_OPTS\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Tomcat 8\n修改"),a("code",[this._v("tomcat/bin/catalina.sh")]),this._v("，在首行加入如下信息")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("set")]),this._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[this._v('"CATALINA_OPTS=... -javaagent:E:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\a"}},[this._v("\\a")]),this._v('pache-tomcat-8.5.20\\skywalking-agent\\skywalking-agent.jar"')]),this._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);