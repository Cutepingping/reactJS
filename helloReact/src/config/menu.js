let menuList = [
  {
		"key": "index",
		"value": "01",
		"name": "首页",
		"icon": "icon-jiaoseguanli",
    "clickable": false,
    "child": null
	},
	//模板-模板组件
  {
		"key": "template",
    "value": "02",
    "name": "组件例子",
    "icon": "icon-jiaoseguanli",
		"clickable": false,
		"child": [
			{
				"key": "popUpSelect",
        "value": "021",
				"name": "弹框选择",
				"icon": "icon-huiyuanliebiao",
      },
      {
				"key": "kingEditor",
        "value": "022",
				"name": "富文本",
				"icon": "icon-huiyuanliebiao",
			},
			{
				"key": "category",
        "value": "023",
				"name": "分类",
				"icon": "icon-huiyuanliebiao",
			},
			{
				"key": "myPage",
        "value": "024",
				"name": "我的页面",
				"icon": "icon-huiyuanliebiao",
			},
		]
	},
	//商品管理-商品列表
	{
    "key": "goodsMgmt",
    "name": "商品管理",
    "icon": "icon-shanghushouye",
    "value": "11",
    "child": [
      {
        "key": "goodsList",
        "name": "商品列表",
        "icon": "icon-wodechanpin",
        "value": "111"
			},
			{
        "key": "goodsDetail",
        "name": "商品详情",
        "icon": "icon-wodechanpin",
        "value": "112"
			},
		]
  }
];

module.exports = menuList;
