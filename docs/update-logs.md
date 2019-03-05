# Update logs of Uke-admin-web-scaffold

## v0.16.15

- 添加了自动刷新的机制

## v0.16.14

- 添加可配置清除按钮的 props

## v0.16.13

- 添加了清空搜索条件的功能

## v0.16.12

- 优化 ActionAgent 的写法，避免潜在的内存泄漏问题

## v0.16.11

- 修复 mini nav 的 key 的警告

## v0.16.10

- 完善 Statusbar 的配置

## v0.16.9

- 状态栏新增分割线

## v0.16.8

- 优化状态栏的实现

## v0.16.7

- 调整导航栏的样式

## v0.16.6

- 调整总体的样式

## v0.16.5

- 新增 Footer 插件，可以自定义右下角的内容
- 优化新版本的提示交互

## v0.16.4

- 优化左菜单的样式

## v0.16.3

- 完善 StatusbarConfig

## v0.16.2

- 脚手架添加是否 tab 在 statusbar 的选项: tabInStatusbar

## v0.16.1

- 调整 tab 的样式

## v0.16.0

- 调整顶级的 Tab 的样式和实现方式

## v0.15.40

- 调整 statusbar 的位置

## v0.15.39

- 优化导航栏的样式，添加导航栏配置

## v0.15.38

- 去除没有定义按钮时的警告

## v0.15.37

- 修复表格的问题

## v0.15.36

- 调整模版引擎传入 Table 的 props 的方式

## v0.15.35

- 删除多余样式

## v0.15.34

- 升级版本号，与 2.13.10，因为 npm 的 bug

## v0.15.33

- 调整表格的操作按钮，可以添加颜色

## v0.15.32

- 优化 handleQueryData 接口

## v0.15.31

- 修复一些问题

## v0.15.30

- 提供 DashBoard 完整的 props 参数

## v0.15.29

- PluginComponent 传入 onNavigate

## v0.15.28

- 增强高阶模版的使用方式，增加一个新的参数

## v0.15.27

- 修复一些问题

## v0.15.26

- 脚手架新增 pageProps 参数，可以从外层传入参数给所有的 props

## v0.15.25

- 调整左菜单的 icon 样式
- 调整搜索框的实现，使用 ClickAway 的方式
- 调整 UI 库组件的引用方式

## v0.15.23

- 添加每个 Tab 页是否激活状态的

## v0.15.22

- 调整表格模版 didMountQuery 的策略

## v0.15.21

- 表格模版新增 refreshData 接口
- 表格模版新增 calculateHeight props 接口，用于标记是否需要自动计算表格高度
- 调整表格模版的高度调整策略，如果该页面被隐藏，则在下一次 update 的时候更新此高度，保证高度的正确性

## v0.15.20

- 添加 Link 的 onClick 接口
- 修复渲染模版的问题

## v0.15.19

- 完善 onChangeCondition 接口

## v0.15.18

- 完善 onChangeCondition 接口

## v0.15.17

- 新增一个 onChangeCondition 接口

## v0.15.16

- 修复左菜单错位的问题

## v0.15.15

- 调整版本号的位置和结构
- 调整左菜单的样式，以及收缩的效果

## v0.15.14

- 优化自动表格引擎的高度设置机制

## v0.15.13

- 优化查询的操作，默认跳转到第一页
- 优化表格的高度设置

## v0.15.12

- 调整脚手架的样式
- 新增可以设置最大可打开 Tab 的接口
- 优化表格模版引擎

## v0.15.11

- 调整分页

## v0.15.10

- 添加分页配置

## v0.15.9

- 去除 login 的 scss

## v0.15.8

- 完善左菜单的样式

## v0.15.7

- 调整 status-bar 的命名

## v0.15.6

- 调整菜单的写法，避免错误
- 优化插件的写法

## v0.15.5

- 调整样式

## v0.15.4

- 调整部署的显示字段
- 调整 UI 风格

## v0.15.3

- 完善背景机制

## v0.15.2

- 调整背景，抽离成配置

## v0.15.1

- 调整菜单样式

## v0.15.0

### 新功能

- 新增部署路径配置

### 调整

- 重做系统的外层样式，使用亮色主题

------------

## v0.14.10

- 去除 console log

## v0.14.9

- 添加内置的退出登录按钮，调整接口的名称

## v0.14.8

- 完善 ActionAgent 的 state 管理

## v0.14.7

- 优化 hideCondition 的样式

## v0.14.6

- 修复一些问题

## v0.14.5

- 修复发布模块创建项目时的错误

## v0.14.4

- 完善系统的提示

## v0.14.3

- 支持按钮 ID，用于标记所有按钮，便于分配权限

## v0.14.2

- actionAgent 中的 after 现在支持异步函数

## v0.14.0

- 优化路由机制
- 新增 DashBoard 组件，当所有页面关闭是出现
- 依赖最新的 UI 库，调整了相关组件的引用

## v0.13.14

- 修复 history state 的引用问题

## v0.13.12

- 新增表格的按钮拓展接口

## v0.13.9

- 调整快捷键
- 优化标签页的行为，优化关闭的机制

## v0.13.8

- 调整功能图标，使用 ToolTip
- 调整版本组件的样式

## v0.13.5

- 优化菜单是否激活的判定
- 优化样式

## v0.13.2

- 升级 UI 库
- 修复一些引用问题

## v0.13.0

- 新增表格模版高阶组件的引用，业务组件可以通过 this.ReportRef 引用
- 表格组件提供一个删除所有已选择项的接口，通过 this.clearCheckeds() 调用
- 修复 report 的已选项引用错误问题，现在可以通过 this.checkedItems 引用
- 使用最新 UI 库 2.6.1 和 basic-helper 1.4.4