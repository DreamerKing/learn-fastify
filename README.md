# learn-fastify

Fastify(options) 工厂函数配置项
+ http2 是否启用HTTP/2模块
+ https 配置TLS对象
+ connectionTimeout 服务超时时间
+ keepAliveTimeout 服务keep-alive超时时间，仅当使用HTTTP/1时有效
+ ignoreTrailingSlash 是否忽略路由中的尾斜杠
+ maxParamLength 路由参数的最大长度
+ bodyLimit 服务可接受的最大payload
+ onProtoPoisoning 指定解析带有`__proto__`属性的对象的行为
+ onConstructorPoisoning 指定解析带有`constructor`方法的对象的行为
+ logger 配置日志行为
+ serverFactory(handle, options) 自定义Server
+ caseSensitive 路由是否对大小写敏感
+ requestIdHeader 设置请求id属性名
+ requestIdLogLabel 设置日志中请求id的标签
+ genReqId 生成请求id的函数
+ trustProxy 配置可信代理
+ pluginTimeout 允许单个中间件加载的最长时间
+ querystringParse 自定义query解析器
+ versioning 版本号设置
+ return503OnClosing 设置调用`close`方法的行为
+ ajv 配置ajv实例
+ http2SessionTimeout 设置http2会话的超时时间
+ frameworkErrors 配置错误处理方法
+ clientErrorHandler 配置监听客户端连接造成的`error`事件
+ rewriteUrl 重写URL
  
服务器实例方法
+ after() 配置当前插件加载完后的调用
+ ready() 所有插件都加载完后调用
+ listen() ready之后触发
+ route() 路由配置
+ close() 
+ decorate*() 向服务、响应或请求添加装饰器函数
+ register() 注册插件
+ addHook() 添加特定的生命周期钩子函数
+ prefix 路径前缀
+ pluginName 当前插件名称
+ log
+ inject
+ addSchema() 添加JSONSchema
+ getSchema()
+ setReplySerializer() 配置所有路由默认序列化方法
+ setValidatorCompiler()
+ setSerializerCompiler()
+ validatorCompiler()
+ serializerCompiler()
+ setNotFoundHandler() 
+ setErrorHandler()
+ printRoutes() 输出路由树,在read()函数内部或之后调用它。