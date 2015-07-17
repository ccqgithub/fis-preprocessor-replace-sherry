sherry 
====

fis 插件，作用于preprocessor阶段。

预定义常量替换，主要用于sherry-web。

主要用途：将文件中的特定变量替换为配置的字符串。

配置：

    // =========== sherry-preprocessor-replace 配置 ===========
    fis.config.set('settings.preprocessor.replace', {
        vars: [
            {
                from: /__ROOT__/g,
                to: 'http://dev.sherryui.com'
            }
        ]
    });

使用：

    var url = __ROOT__ + '/test.html'