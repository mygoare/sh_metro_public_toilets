Page({
  data: {
    lines: [
      {
        line_no: 1,
        color: '#e3002b',
        bgcolor: '#fdeae9',
        line_name: '1号线'
      },
      {
        line_no: 2,
        color: '#8cc220',
        bgcolor: '#EBF7EC',
        line_name: '2号线'
      },
      {
        line_no: 3,
        color: '#fcd600',
        bgcolor: '#fffee5',
        line_name: '3号线'
      },
      {
        line_no: 4,
        color: '#461d84',
        bgcolor: '#f1ebf4',
        line_name: '4号线'
      },
      {
        line_no: 5,
        color: '#944d9a',
        bgcolor: '#e8d2f0',
        line_name: '5号线'
      },
      {
        line_no: 6,
        color: '#d40068',
        bgcolor: '#ffcae4',
        line_name: '6号线'
      },
      {
        line_no: 7,
        color: '#ed6f00',
        bgcolor: '#ffcc99',
        line_name: '7号线'
      },
      {
        line_no: 8,
        color: '#0094d8',
        bgcolor: '#60b7d4',
        line_name: '8号线'
      },
      {
        line_no: 9,
        color: '#87caed',
        bgcolor: '#85C6DA',
        line_name: '9号线'
      },
      {
        line_no: 10,
        color: '#c6afd4',
        bgcolor: '#e0c5f0',
        line_name: '10号线'
      },
      {
        line_no: 11,
        color: '#871c2b',
        bgcolor: '#BB8866',
        line_name: '11号线'
      },
      {
        line_no: 12,
        color: '#007a60',
        bgcolor: '#99CBC1',
        line_name: '12号线'
      },
      {
        line_no: 13,
        color: '#e999c0',
        bgcolor: '#f4b8d2',
        line_name: '13号线'
      },
      {
        line_no: 16,
        color: '#98d1c0',
        bgcolor: '#C6E8DF',
        line_name: '16号线'
      },
      {
        line_no: 17,
        color: '#bb796f',
        bgcolor: '#ebd6d3',
        line_name: '17号线'
      },
      {
        line_no: 41,
        color: '#b5b6b6',
        bgcolor: '#f2f7f7',
        line_name: '浦江线'
      }
    ],
    line_index: '',
    stop_index: 0,
    stops: [
    ],
    bigData: {
      '1':
      [{
        key: '0111',
        value: '莘庄',
        toilet_position: '费区外 站外50米，北广场公共厕所'
      },
      {
        key: '0112',
        value: '外环路',
        toilet_position: '费区外 站外100米，南广场与北广场公交站点厕所'
      },
      {
        key: '0113',
        value: '莲花路',
        toilet_position: '费区外 站外100米，南广场与北广场公交站点厕所'
      },
      { key: '0114', value: '锦江乐园', toilet_position: '费区内 往富锦路方向站台车尾' },
      {
        key: '0115',
        value: '上海南站',
        toilet_position: '1号线 费区内 往富锦路方向站台车头\r\n<br />3号线 费区内 往上海南站方向站台车尾'
      },
      {
        key: '0116',
        value: '漕宝路',
        toilet_position: '1号线 费区外 站外800米，1号口外第八人民医院\r\n<br/>12号线 费区外 站厅8号口处\r\n'
      },
      { key: '0117', value: '上海体育馆', toilet_position: '费区内 往莘庄方向站台车头' },
      { key: '0118', value: '徐家汇', toilet_position: '费区内 往莘庄方向站台车头' },
      { key: '0119', value: '衡山路', toilet_position: '费区内 往富锦路方向站台车头' },
      { key: '0120', value: '常熟路', toilet_position: '费区内 往莘庄方向站台车头' },
      {
        key: '0121',
        value: '陕西南路',
        toilet_position: '1号线 费区内 往莘庄方向站台车头\r\n<br />10号线 费区外 站厅西端，近7号口\r\n<br />12号线 费区内 往金海路方向站台车头'
      },
      { key: '0122', value: '黄陂南路', toilet_position: '费区内 往富锦路方向站台车头' },
      { key: '0123', value: '人民广场', toilet_position: ':费区内 往莘庄方向站台车头' },
      { key: '0124', value: '新闸路', toilet_position: '费区内 往富锦路方向站台车头' },
      {
        key: '0125',
        value: '汉中路',
        toilet_position: '1号线 费区外 3号口外30米，地铁恒通大厦\r\n<br/>12号线 费区外 站厅南端靠近车控室旁\r\n<br/>13号线 费区外 站厅南端靠近车控室旁'
      },
      {
        key: '0126',
        value: '上海火车站',
        toilet_position: '1号线 费区内 往莘庄方向站台车头\r\n<br />3号线 费区内 往江杨北路方向站台车头（3、4号共线）'
      },
      { key: '0127', value: '中山北路', toilet_position: '费区外 2号口外' },
      { key: '0128', value: '延长路', toilet_position: '费区外 3号口外' },
      {
        key: '0129',
        value: '上海马戏城',
        toilet_position: '费区外 2号口外30米公共厕所'
      },
      { key: '0130', value: '汶水路', toilet_position: '费区外 2号口楼梯旁' },
      { key: '0131', value: '彭浦新村', toilet_position: '费区外 4号口旁' },
      {
        key: '0132',
        value: '共康路',
        toilet_position: '费区外 1号口外50米商场有厕所'
      },
      {
        key: '0133',
        value: '通河新村',
        toilet_position: '费区外 2号口外20米有公共厕所'
      },
      {
        key: '0134',
        value: '呼兰路',
        toilet_position: '费区外 2号口外10米有公共厕所'
      },
      {
        key: '0135',
        value: '共富新村',
        toilet_position: '费区外 2、4号口外50米公交站点厕所'
      },
      { key: '0136', value: '宝安公路', toilet_position: '费区外 3号口站厅' },
      { key: '0137', value: '友谊西路', toilet_position: '费区内 北厅' },
      { key: '0138', value: '富锦路', toilet_position: '费区内 南厅' }],
      '2':
      [{ key: '0234', value: '徐泾东', toilet_position: '费区外 站厅东端近2号口' },
      { key: '0235', value: '虹桥火车站', toilet_position: '费区内 站台' },
      { key: '0236', value: '虹桥2号航站楼', toilet_position: '车站外 机场厕所' },
      {
        key: '0237',
        value: '淞虹路',
        toilet_position: '费区内 往徐泾东方向车头、通往4、5号口长通道处'
      },
      { key: '0238', value: '北新泾', toilet_position: '费区内 往徐泾东方向站台车头' },
      {
        key: '0239',
        value: '威宁路',
        toilet_position: '费区内 往浦东国际机场方向站台车头'
      },
      { key: '0240', value: '娄山关路', toilet_position: '费区内 往徐泾东方向站台车头' },
      {
        key: '0241',
        value: '中山公园',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车头\r\n<br />3号线 费区外 北厅\r\n<br />4号线 费区外 北厅'
      },
      {
        key: '0242',
        value: '江苏路',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车头\r\n<br />11号线 费区外 B1站厅层，5、8号口中间'
      },
      { key: '0243', value: '静安寺', toilet_position: '费区内 往徐泾东方向站台车头' },
      {
        key: '0244',
        value: '南京西路',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车头（站台东端）\r\n<br />12号线 费区外 客服中心对面\r\n<br />13号线 费区外 B2层站厅南端'
      },
      {
        key: '0245',
        value: '人民广场',
        toilet_position: '费区内 往浦东国际机场方向站台站台车尾'
      },
      {
        key: '0246',
        value: '南京东路',
        toilet_position: '费区内 往浦东国际机场方向站台车尾（站台西端）'
      },
      { key: '0247', value: '陆家嘴', toilet_position: '费区内 往徐泾东方向站台车尾' },
      {
        key: '0248',
        value: '东昌路',
        toilet_position: '费区内 往浦东国际机场方向站台车头'
      },
      {
        key: '0249',
        value: '世纪大道',
        toilet_position: '2号线 费区内 往徐泾东方向站台车头\r\n<br />4号线 至2、6号线站台\r\n<br />6号线 费区内 往东方体育中心方向站台车尾\r\n<br />6号线 费区内 往港城路方向站台车头\r\n<br />9号线 至2、6号线站台'
      },
      {
        key: '0250',
        value: '上海科技馆',
        toilet_position: '费区内 往浦东国际机场方向站台车头'
      },
      {
        key: '0251',
        value: '世纪公园',
        toilet_position: '费区内 往浦东国际机场方向站台车头'
      },
      {
        key: '0252',
        value: '龙阳路',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车尾\r\n<br />7号线 费区内 2换7通道处\r\n<br />16号线 费区内 站厅层，近12号口'
      },
      { key: '0253', value: '张江高科', toilet_position: '费区外 东站厅近2号口' },
      { key: '0254', value: '金科路', toilet_position: '费区外 西站厅近3号口' },
      { key: '0255', value: '广兰路', toilet_position: '费区外 西站厅近4号口' },
      { key: '0256', value: '唐镇', toilet_position: '费区外 1号口外50米，公共厕所' },
      { key: '0257', value: '创新中路', toilet_position: '费区外 西站厅近3号口' },
      { key: '0258', value: '华夏东路', toilet_position: '费区外 北端近4号口' },
      { key: '0259', value: '川沙', toilet_position: '费区外 1号口通道' },
      { key: '0260', value: '凌空路', toilet_position: '费区外 3号口通道' },
      {
        key: '0261',
        value: '远东大道',
        toilet_position: '费区内 站房走道内，近1号口与2号口中部'
      },
      { key: '0262', value: '海天三路', toilet_position: '费区内 站厅南侧，近2号口' },
      { key: '0263', value: '浦东国际机场', toilet_position: '车站外 机场厕所' }],
      '3':
      [{
        key: '0311',
        value: '上海南站',
        toilet_position: '1号线 费区内 往富锦路方向站台车头\r\n<br />3号线 费区内 往上海南站方向站台车尾'
      },
      { key: '0312', value: '石龙路', toilet_position: '费区外 南广场' },
      {
        key: '0313',
        value: '龙漕路',
        toilet_position: '3号线 费区内 近2号口\r\n<br/>12号线 费区外 4号口站厅'
      },
      { key: '0314', value: '漕溪路', toilet_position: '费区外 近2号口' },
      {
        key: '0315',
        value: '宜山路',
        toilet_position: '3号线 车站外 KFC厕所\r\n<br />3号线 费区内 至4号线站台\r\n<br />4号线 费区内 往外圈（逆时针）方向站台车头\r\n<br />9号线 费区外 B1站厅层，近4号口'
      },
      { key: '0316', value: '虹桥路', toilet_position: '费区外 2号口一楼' },
      {
        key: '0317',
        value: '延安西路',
        toilet_position: '3号线 费区外 近2号口（3、4号共线）'
      },
      {
        key: '0318',
        value: '中山公园',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车头\r\n<br />3号线 费区外 北厅\r\n<br />4号线 费区外 北厅'
      },
      {
        key: '0319',
        value: '金沙江路',
        toilet_position: '3号线 费区内 站厅层，近换乘通道处，近13号线（3、4号共线）\r\n<br />13号线 费区外 站厅层，近6号口'
      },
      { key: '0320', value: '曹杨路', toilet_position: '费区内 车站中间近6号口' },
      {
        key: '0321',
        value: '镇坪路',
        toilet_position: '3号线 费区内 站厅层，东站厅楼梯下方（近换乘通道）（3、4号共线）\r\n<br />7号线 费区外 近6号口'
      },
      { key: '0322', value: '中潭路', toilet_position: '费区外 西厅一楼站厅层2间' },
      {
        key: '0323',
        value: '上海火车站',
        toilet_position: '1号线 费区内 往莘庄方向站台车头\r\n<br />3号线 费区内 往江杨北路方向站台车头（3、4号共线）'
      },
      { key: '0324', value: '宝山路', toilet_position: '费区外 站厅东北侧' },
      {
        key: '0325',
        value: '东宝兴路',
        toilet_position: '费区外 近2号口\r\n<br />费区内 北厅上行楼梯旁的小楼梯上'
      },
      {
        key: '0326',
        value: '虹口足球场',
        toilet_position: '费区外 3号口外50米，车站楼下2楼商场内'
      },
      {
        key: '0327',
        value: '赤峰路',
        toilet_position: '费区外 4号口外10米，车站楼下2楼商场内'
      },
      { key: '0328', value: '大柏树', toilet_position: '费区内 北厅' },
      { key: '0329', value: '江湾镇', toilet_position: '费区外 近7号口' },
      { key: '0330', value: '殷高西路', toilet_position: '费区内 站厅南侧' },
      { key: '0331', value: '长江南路', toilet_position: '费区内 站厅北侧' },
      { key: '0332', value: '淞发路', toilet_position: '费区内 站厅北侧' },
      { key: '0333', value: '张华浜', toilet_position: '费区内 站厅南侧' },
      { key: '0334', value: '淞滨路', toilet_position: '费区外 近2号口' },
      { key: '0335', value: '水产路', toilet_position: '费区内 站厅走到底' },
      { key: '0336', value: '宝杨路', toilet_position: '费区内 近站房' },
      { key: '0337', value: '友谊路', toilet_position: '费区内 站厅北侧' },
      { key: '0338', value: '铁力路', toilet_position: '费区外 1号口左转' },
      { key: '0339', value: '江杨北路', toilet_position: '费区内 站厅西侧' }],
      '4':
      [{ key: '0401', value: '上海体育馆', toilet_position: '费区内 外圈车头' },
      {
        key: '0402',
        value: '宜山路',
        toilet_position: '3号线 车站外 KFC厕所\r\n<br />3号线 费区内 至4号线站台\r\n<br />4号线 费区内 往外圈（逆时针）方向站台车头\r\n<br />9号线 费区外 B1站厅层，近4号口'
      },
      { key: '0403', value: '虹桥路', toilet_position: '费区外 2号口一楼' },
      {
        key: '0404',
        value: '延安西路',
        toilet_position: '3号线 费区外 近2号口（3、4号共线）'
      },
      {
        key: '0405',
        value: '中山公园',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车头\r\n<br />3号线 费区外 北厅\r\n<br />4号线 费区外 北厅'
      },
      {
        key: '0406',
        value: '金沙江路',
        toilet_position: '3号线 费区内 站厅层，近换乘通道处，近13号线（3、4号共线）\r\n<br />13号线 费区外 站厅层，近6号口'
      },
      { key: '0407', value: '曹杨路', toilet_position: '费区内 车站中间，近6号口' },
      {
        key: '0408',
        value: '镇坪路',
        toilet_position: '3号线 费区内 站厅层，东站厅楼梯下方（近换乘通道）（3、4号共线）\r\n<br />7号线 费区外 近6号口'
      },
      { key: '0409', value: '中潭路', toilet_position: '费区外 西厅一楼站厅层2间' },
      {
        key: '0410',
        value: '上海火车站',
        toilet_position: '1号线 费区内 往莘庄方向站台车头\r\n<br />3号线 费区内 往江杨北路方向站台车头（3、4号共线）'
      },
      { key: '0411', value: '宝山路', toilet_position: '费区外 站厅东北侧' },
      { key: '0412', value: '海伦路', toilet_position: '费区内 站台' },
      {
        key: '0413',
        value: '临平路',
        toilet_position: '费区外 1号口外75米，公共厕所'
      },
      { key: '0414', value: '大连路', toilet_position: '费区内 站台' },
      { key: '0415', value: '杨树浦路', toilet_position: '费区内 站台' },
      {
        key: '0416',
        value: '浦东大道',
        toilet_position: '费区外 1号口外7米，公共厕所'
      },
      {
        key: '0417',
        value: '世纪大道',
        toilet_position: '2号线 费区内 往徐泾东方向站台车头\r\n<br />4号线 至2、6号线站台\r\n<br />6号线 费区内 往东方体育中心方向站台车尾\r\n<br />6号线 费区内 往港城路方向站台车头\r\n<br />9号线 至2、6号线站台'
      },
      {
        key: '0418',
        value: '浦电路',
        toilet_position: '费区外 2号口外100米，公共厕所'
      },
      { key: '0419', value: '蓝村路', toilet_position: '费区内 至6号线站厅层' },
      { key: '0420', value: '塘桥', toilet_position: '费区内 往宜山路方向站台车尾' },
      {
        key: '0421',
        value: '南浦大桥',
        toilet_position: '费区内 往内圈（顺时针）方向站台车头'
      },
      {
        key: '0422',
        value: '西藏南路',
        toilet_position: '4号线 费区内 至8号线站台\r\n<br />8号线 费区内 往沈杜公路方向站台车头'
      },
      {
        key: '0423',
        value: '鲁班路',
        toilet_position: '费区外 1号口外20米，公共厕所'
      },
      {
        key: '0424',
        value: '大木桥路',
        toilet_position: '4号线 费区外 4号口外200米，公共厕所\r\n<br />12号线 费区外 站厅层，近5号口'
      },
      { key: '0425', value: '东安路', toilet_position: '费区内 内圈站台车头' },
      {
        key: '0426',
        value: '上海体育场',
        toilet_position: '费区外 3号口外100米，公共场所'
      },
      { key: '0427', value: '内圈', toilet_position: '' },
      { key: '0428', value: '外圈', toilet_position: '' },
      { key: '0429', value: '内圈(宜山路)', toilet_position: '' },
      { key: '0430', value: '外圈(宜山路)', toilet_position: '' }],
      '5':
      [{
        key: '0501',
        value: '莘庄',
        toilet_position: '费区外 站外50米，北广场公共厕所'
      },
      {
        key: '0502',
        value: '春申路',
        toilet_position: '费区外 近1号口公共厕所（移动厕所）'
      },
      {
        key: '0503',
        value: '银都路',
        toilet_position: '费区外 近2号口公共厕所（移动厕所）'
      },
      {
        key: '0505',
        value: '颛桥',
        toilet_position: '费区外 近2号口公共厕所（移动厕所）'
      },
      {
        key: '0507',
        value: '北桥',
        toilet_position: '费区外 近2号口公共厕所（移动厕所）'
      },
      {
        key: '0508',
        value: '剑川路',
        toilet_position: '费区外 近1号口公共厕所（移动厕所）'
      },
      { key: '0509', value: '东川路', toilet_position: '' },
      { key: '0510', value: '金平路', toilet_position: '费区外 1号口外公共厕所' },
      { key: '0511', value: '华宁路', toilet_position: '费区外 1号口外公共厕所' },
      { key: '0512', value: '文井路', toilet_position: '费区外 1、2号口外' },
      { key: '0513', value: '闵行开发区', toilet_position: '费区外 近2号口公共厕所' }],
      '6':
      [{
        key: '0621',
        value: '东方体育中心',
        toilet_position: '6号线 费区内 往东方体育中心方向站台车尾\r\n<br />6号线 费区内 往港城路路方向站台车头\r\n<br />8号线 费区内 往市光路方向站台车尾\r\n<br />11号线 费区内 至6、8号线站台'
      },
      { key: '0622', value: '灵岩南路', toilet_position: '费区外 2号口站厅' },
      { key: '0623', value: '上南路', toilet_position: '费区内 往港城路方向站台' },
      { key: '0624', value: '华夏西路', toilet_position: '费区外 2号口站厅' },
      { key: '0625', value: '高青路', toilet_position: '费区内 2号口站厅' },
      { key: '0626', value: '东明路', toilet_position: '费区内 2号口站厅' },
      { key: '0627', value: '高科西路', toilet_position: '费区外 4号口站厅' },
      { key: '0628', value: '临沂新村 ', toilet_position: '费区内 往港城路方向站台' },
      {
        key: '0629',
        value: '上海儿童医学中心',
        toilet_position: '费区内 往东方体育中心方向站台车头'
      },
      { key: '0630', value: '蓝村路', toilet_position: '费区内 站厅南端' },
      {
        key: '0631',
        value: '浦电路 ',
        toilet_position: '费区内 往港城路方向站台车尾、往东方体育中心方向站台车头'
      },
      {
        key: '0632',
        value: '世纪大道',
        toilet_position: '2号线 费区内 往徐泾东方向站台车头\r\n<br />4号线 至2、6号线站台\r\n<br />6号线 费区内 往东方体育中心方向站台车尾\r\n<br />6号线 费区内 往港城路方向站台车头\r\n<br />9号线 至2、6号线站台'
      },
      { key: '0633', value: '源深体育中心', toilet_position: '费区外 2号口站厅' },
      { key: '0634', value: '民生路', toilet_position: '费区内 2、3号口站厅' },
      { key: '0635', value: '北洋泾路', toilet_position: '费区外 1号口站厅' },
      {
        key: '0636',
        value: '德平路',
        toilet_position: '费区内 往港城路方向站厅靠近客服中心'
      },
      { key: '0637', value: '云山路', toilet_position: '费区内 往港城路方向站厅' },
      { key: '0638', value: '金桥路', toilet_position: '费区外 3号口站厅' },
      { key: '0639', value: '博兴路', toilet_position: '费区内 2号口站厅' },
      { key: '0640', value: '五莲路', toilet_position: '费区内 站厅' },
      { key: '0641', value: '巨峰路', toilet_position: '费区内 站厅' },
      { key: '0642', value: '东靖路', toilet_position: '费区内 站厅办公区门口南端' },
      { key: '0643', value: '五洲大道', toilet_position: '费区内 站厅' },
      { key: '0644', value: '洲海路', toilet_position: '费区外 站厅' },
      { key: '0645', value: '外高桥保税区南站', toilet_position: '费区外 办公区域外' },
      { key: '0646', value: '航津路', toilet_position: '费区外 办公区域外' },
      { key: '0647', value: '外高桥保税区北站', toilet_position: '费区外 办公区域外' },
      { key: '0648', value: '港城路', toilet_position: '费区外 2号口处' }],
      '7':
      [{ key: '0721', value: '美兰湖', toilet_position: '费区外 近1号口' },
      { key: '0722', value: '罗南新村', toilet_position: '费区外 近1号口' },
      { key: '0723', value: '潘广路', toilet_position: '费区外 近2号口' },
      { key: '0724', value: '刘行', toilet_position: '费区外 近3号口' },
      { key: '0725', value: '顾村公园', toilet_position: '费区外 近3号口' },
      { key: '0726', value: '祁华路', toilet_position: '费区外 站厅层，近3号口' },
      { key: '0727', value: '上海大学', toilet_position: '费区外 站厅近客服中心' },
      { key: '0728', value: '南陈路', toilet_position: '费区外 站厅近1号处' },
      { key: '0729', value: '上大路', toilet_position: '费区外 2号口旁' },
      { key: '0730', value: '场中路', toilet_position: '费区外 3号口' },
      { key: '0731', value: '大场镇', toilet_position: '费区外 南站厅，近进站闸机处' },
      { key: '0732', value: '行知路', toilet_position: '费区外 近3号口' },
      { key: '0733', value: '大华三路', toilet_position: '费区外 近1号口' },
      { key: '0734', value: '新村路', toilet_position: '费区外 近2号口' },
      { key: '0735', value: '岚皋路', toilet_position: '费区外 近3号口' },
      {
        key: '0736',
        value: '镇坪路',
        toilet_position: '3号线 费区内 站厅层，东站厅楼梯下方（近换乘通道）（3、4号共线）\r\n<br />7号线 费区外 近6号口'
      },
      {
        key: '0737',
        value: '长寿路',
        toilet_position: '7号线 费区外 站厅层，近1号口'
      },
      { key: '0738', value: '昌平路', toilet_position: '费区外 南厅近3号口' },
      { key: '0739', value: '静安寺', toilet_position: '费区外 近南厅客服中心' },
      { key: '0740', value: '常熟路', toilet_position: '费区外 近6号口' },
      {
        key: '0741',
        value: '肇嘉浜路',
        toilet_position: '7号线 费区外 站厅层，近4号口\r\n<br />7号线 费区内 往花木路方向站台车头\r\n<br />9号线 费区内 往松江新城方向站台车头'
      },
      { key: '0742', value: '东安路', toilet_position: '费区外 站厅' },
      {
        key: '0743',
        value: '龙华中路',
        toilet_position: '7号线 费区外 站厅层，近11号口\r\n<br />12号线 费区内 往七莘路方向站台车尾\r\n<br />12号线 费区内 往金海路方向站台中部'
      },
      { key: '0744', value: '后滩', toilet_position: '费区外 近4号口进站闸机处' },
      { key: '0745', value: '长清路', toilet_position: '费区外 近1号口' },
      { key: '0746', value: '耀华路', toilet_position: '费区内 至8号线站台厕所' },
      { key: '0747', value: '云台路', toilet_position: '费区外 3号口处站厅通道内' },
      { key: '0748', value: '高科西路', toilet_position: '费区外 4号口站厅' },
      { key: '0749', value: '杨高南路', toilet_position: '费区外 近3号口' },
      { key: '0750', value: '锦绣路', toilet_position: '费区外 近2号口' },
      { key: '0751', value: '芳华路', toilet_position: '费区外 近1号口' },
      {
        key: '0752',
        value: '龙阳路',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车尾\r\n<br />7号线 费区内 2换7通道处\r\n<br />16号线 费区内 站厅层，近12号口'
      },
      { key: '0753', value: '花木路', toilet_position: '费区外 近5号口' }],
      '8':
      [{ key: '0820', value: '沈杜公路', toilet_position: '费区外 站厅层南端' },
      { key: '0821', value: '联航路', toilet_position: '费区外 站厅层北端' },
      { key: '0822', value: '江月路', toilet_position: '费区外 站厅层南端' },
      { key: '0823', value: '浦江镇', toilet_position: '费区外 站厅层南端' },
      { key: '0824', value: '芦恒路', toilet_position: '费区外 2号口站厅' },
      { key: '0825', value: '凌兆新村', toilet_position: '费区外 2号口进站闸机旁' },
      {
        key: '0826',
        value: '东方体育中心',
        toilet_position: '6号线 费区内 往东方体育中心方向站台车尾\r\n<br />6号线 费区内 往港城路路方向站台车头\r\n<br />8号线 费区内 往市光路方向站台车尾\r\n<br />11号线 费区内 至6、8号线站台'
      },
      { key: '0827', value: '杨思', toilet_position: '费区外 1号口通道' },
      { key: '0828', value: '成山路', toilet_position: '费区内 站台南端' },
      { key: '0829', value: '耀华路', toilet_position: '费区内 8号线两边站台都有' },
      {
        key: '0830',
        value: '中华艺术宫',
        toilet_position: '费区内 往沈杜公路方向站台车尾'
      },
      {
        key: '0831',
        value: '西藏南路',
        toilet_position: '4号线 费区内 至8号线站台\r\n<br />8号线 费区内 往沈杜公路方向站台车头'
      },
      { key: '0832', value: '陆家浜路', toilet_position: '费区外 7号口站厅' },
      { key: '0833', value: '老西门', toilet_position: '费区内 站台南端' },
      { key: '0834', value: '大世界', toilet_position: '费区内 往沈杜公路方向站台车头' },
      {
        key: '0835',
        value: '人民广场',
        toilet_position: '费区内 往沈杜公路方向站台车头'
      },
      { key: '0836', value: '曲阜路', toilet_position: '费区外 近5号口' },
      { key: '0837', value: '中兴路', toilet_position: '费区内 往沈杜公路方向站台' },
      { key: '0838', value: '西藏北路', toilet_position: '费区内 往市光路方向站台' },
      { key: '0839', value: '虹口足球场', toilet_position: '费区内 往沈杜公路方向站台' },
      { key: '0840', value: '曲阳路', toilet_position: '费区内 两边站台各1个' },
      { key: '0841', value: '四平路', toilet_position: '费区内 往市光路方向站台车尾' },
      { key: '0842', value: '鞍山新村', toilet_position: '费区内 往市光路方向站台车尾' },
      {
        key: '0843',
        value: '江浦路',
        toilet_position: '费区内 往沈杜公路方向站台车头女厕，往市光路方向站台车尾男厕'
      },
      { key: '0844', value: '黄兴路', toilet_position: '费区内 往沈杜公路方向站台车尾' },
      { key: '0845', value: '延吉中路', toilet_position: '费区内 往市光路方向站台车头' },
      { key: '0846', value: '黄兴公园', toilet_position: '费区外 1、2号口地面层' },
      { key: '0847', value: '翔殷路', toilet_position: '费区内 往沈杜公路方向站台' },
      { key: '0848', value: '嫩江路', toilet_position: '费区内 往沈杜公路方向站台' },
      { key: '0849', value: '市光路', toilet_position: '费区内 往沈杜公路方向站台' }],
      '9':
      [{ key: '0918', value: '松江南站', toilet_position: '费区外 站厅' },
      {
        key: '0919',
        value: '醉白池',
        toilet_position: '费区外 2号口外50米，马路对面公共厕所'
      },
      { key: '0920', value: '松江体育中心', toilet_position: '费区外 站厅' },
      { key: '0921', value: '松江新城', toilet_position: '费区外 站外50米' },
      { key: '0922', value: '松江大学城', toilet_position: '费区外 站外40米' },
      { key: '0923', value: '洞泾', toilet_position: '费区外 站外50米' },
      { key: '0924', value: '佘山', toilet_position: '费区外 站外100米' },
      { key: '0925', value: '泗泾', toilet_position: '费区外 站外70米' },
      { key: '0926', value: '九亭', toilet_position: '费区外 站厅2号口费区外' },
      { key: '0927', value: '中春路', toilet_position: '费区内 站厅中部' },
      { key: '0928', value: '七宝', toilet_position: '费区内 往曹路方向站台车尾' },
      { key: '0929', value: '星中路', toilet_position: '费区内 往曹路方向站台车头' },
      {
        key: '0930',
        value: '合川路',
        toilet_position: '车站外 1号口外100米，合川大厦厕所'
      },
      {
        key: '0931',
        value: '漕河泾开发区',
        toilet_position: '费区内 往曹路方向站台车尾'
      },
      { key: '0932', value: '桂林路', toilet_position: '费区内 站厅中部' },
      {
        key: '0933',
        value: '宜山路',
        toilet_position: '3号线 车站外 KFC厕所\r\n<br />3号线 费区内 至4号线站台\r\n<br />4号线 费区内 往外圈（逆时针）方向站台车头\r\n<br />9号线 费区外 B1站厅层，近4号口'
      },
      { key: '0934', value: '徐家汇', toilet_position: '费区外 站厅中部(近16号口）' },
      {
        key: '0935',
        value: '肇嘉浜路',
        toilet_position: '7号线 费区外 站厅层，近4号口\r\n<br />7号线 费区内 往花木路方向站台车头\r\n<br />9号线 费区内 往松江新城方向站台车头'
      },
      {
        key: '0936',
        value: '嘉善路',
        toilet_position: '9号线 费区外 站厅层，近2号口\r\n<br />12号线 费区外 站厅层，近4、6号口'
      },
      { key: '0937', value: '打浦桥', toilet_position: '车站外 站外300米，商场厕所' },
      {
        key: '0938',
        value: '马当路',
        toilet_position: '车站外 3号口外50米，KFC厕所'
      },
      { key: '0939', value: '陆家浜路', toilet_position: '费区外 7号口站厅' },
      { key: '0940', value: '小南门', toilet_position: '费区内 往松江南站方向站台车头' },
      { key: '0941', value: '商城路', toilet_position: '费区外 站厅近1号口' },
      {
        key: '0942',
        value: '世纪大道',
        toilet_position: '2号线 费区内 往徐泾东方向站台车头\r\n<br />4号线 至2、6号线站台\r\n<br />6号线 费区内 往东方体育中心方向站台车尾\r\n<br />6号线 费区内 往港城路方向站台车头\r\n<br />9号线 至2、6号线站台'
      },
      { key: '0943', value: '杨高中路', toilet_position: '费区外 站厅近1号口' },
      { key: '0944', value: '芳甸路', toilet_position: '费区内 往曹路方向站台车尾' },
      { key: '0945', value: '蓝天路', toilet_position: '费区内 往曹路方向站台车头' },
      { key: '0946', value: '台儿庄路', toilet_position: '费区内 往曹路方向站台车尾' },
      { key: '0947', value: '金桥', toilet_position: '费区内 往曹路方向站台车尾' },
      { key: '0948', value: '金吉路', toilet_position: '费区内 往曹路方向站台车头' },
      { key: '0949', value: '金海路', toilet_position: '费区内 往曹路方向站台车头' },
      { key: '0950', value: '顾唐路', toilet_position: '费区内 往曹路方向站台车头' },
      { key: '0951', value: '民雷路', toilet_position: '费区内 往曹路方向站台车头' },
      { key: '0952', value: '曹路', toilet_position: '费区内 往曹路方向车尾' }],
      '10':
      [{ key: '1018', value: '航中路', toilet_position: '费区外 站厅近5号口处' },
      { key: '1019', value: '紫藤路', toilet_position: '费区外 站厅东部近1号口长通道' },
      { key: '1020', value: '龙柏新村', toilet_position: '费区外 站厅，近4号口处' },
      {
        key: '1041',
        value: '虹桥火车站',
        toilet_position: '费区内 2号线往浦东国际机场方向站台'
      },
      { key: '1042', value: '虹桥2号航站楼', toilet_position: '车站外 机场厕所' },
      { key: '1043', value: '虹桥1号航站楼', toilet_position: '费区外 站厅东面' },
      { key: '1044', value: '上海动物园', toilet_position: '费区外 站厅近4号口' },
      { key: '1045', value: '龙溪路', toilet_position: '费区内 站厅近1号口' },
      { key: '1046', value: '水城路', toilet_position: '费区外 站厅近3号口' },
      { key: '1047', value: '伊犁路', toilet_position: '费区外 站厅近1号口' },
      { key: '1048', value: '宋园路', toilet_position: '费区外 站厅近1号口' },
      { key: '1049', value: '虹桥路', toilet_position: '费区外 站厅东部' },
      { key: '1050', value: '交通大学', toilet_position: '费区外 站厅西部' },
      { key: '1051', value: '上海图书馆', toilet_position: '费区外 1号口处' },
      {
        key: '1052',
        value: '陕西南路',
        toilet_position: '1号线 费区内 往莘庄方向站台车头\r\n<br />10号线 费区外 站厅西端，近7号口\r\n<br />12号线 费区内 往金海路方向站台车头'
      },
      { key: '1053', value: '新天地', toilet_position: '费区外 站厅西端通道内' },
      { key: '1054', value: '老西门', toilet_position: '费区外 站厅南端近6号口' },
      { key: '1055', value: '豫园', toilet_position: '费区外 站厅南端近3号口' },
      { key: '1056', value: '南京东路', toilet_position: '费区外 站厅北端' },
      { key: '1057', value: '天潼路', toilet_position: '费区内 站厅近1号口' },
      { key: '1058', value: '四川北路', toilet_position: '费区外 站厅近2号口' },
      { key: '1059', value: '海伦路', toilet_position: '费区外 近7号口站厅' },
      { key: '1060', value: '邮电新村', toilet_position: '费区外 近2号口' },
      { key: '1061', value: '四平路', toilet_position: '费区外 2号口通道内' },
      { key: '1062', value: '同济大学', toilet_position: '费区外 站厅南侧，近4号口' },
      { key: '1063', value: '国权路', toilet_position: '费区外 3号口南侧站厅处' },
      { key: '1064', value: '五角场', toilet_position: '费区外 近3号口进站闸机旁' },
      {
        key: '1065',
        value: '江湾体育场',
        toilet_position: '费区外 地面无障碍电梯站厅层位置'
      },
      { key: '1066', value: '三门路', toilet_position: '费区内 往新江湾城方向站台车尾' },
      {
        key: '1067',
        value: '殷高东路 ',
        toilet_position: '费区内 往航中路方向站台车头'
      },
      { key: '1068', value: '新江湾城', toilet_position: '费区外 站厅中部近2号口' }],
      '11':
      [{ key: '1114', value: '花桥', toilet_position: '费区外 站外10米，副楼1楼' },
      { key: '1115', value: '光明路', toilet_position: '费区内 站厅西端' },
      { key: '1116', value: '兆丰路', toilet_position: '费区内 站厅西端通道口' },
      { key: '1117', value: '安亭', toilet_position: '费区外 近1号口外' },
      {
        key: '1118',
        value: '上海汽车城',
        toilet_position: '费区内 往迪士尼方向站台车头'
      },
      {
        key: '1119',
        value: '昌吉东路',
        toilet_position: '费区内 往迪士尼方向站台车头\r\n<br />费区内 往花桥方向站台车尾'
      },
      {
        key: '1120',
        value: '上海赛车场',
        toilet_position: '费区内 往迪士尼方向站台车头\r\n<br />费区内 往花桥方向站台车尾'
      },
      { key: '1131', value: '嘉定北', toilet_position: '费区外 站外10米，公共厕所' },
      { key: '1132', value: '嘉定西', toilet_position: '费区外 近3号口' },
      { key: '1133', value: '白银路', toilet_position: '费区外 近1号口' },
      {
        key: '1134',
        value: '嘉定新城',
        toilet_position: '费区外 站厅南端，近2、3号口之间'
      },
      { key: '1135', value: '马陆', toilet_position: '费区外 近1号口' },
      { key: '1137', value: '南翔', toilet_position: '费区外 近2号口' },
      { key: '1138', value: '桃浦新村', toilet_position: '费区内 往迪士尼方向站台车头' },
      { key: '1139', value: '武威路', toilet_position: '费区外 近1号口' },
      { key: '1140', value: '祁连山路', toilet_position: '费区外 近3号口' },
      { key: '1141', value: '李子园', toilet_position: '费区外 近3号口' },
      { key: '1142', value: '上海西站', toilet_position: '费区外 近4号口' },
      { key: '1143', value: '真如', toilet_position: '费区外 近2号口' },
      { key: '1144', value: '枫桥路', toilet_position: '费区外 近1号口' },
      { key: '1145', value: '曹杨路', toilet_position: '费区外 近2号口' },
      { key: '1146', value: '隆德路', toilet_position: '费区外 B1站厅层，近2号口' },
      {
        key: '1147',
        value: '江苏路',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车头\r\n<br />11号线 费区外 B1站厅层，5、8号口中间'
      },
      {
        key: '1148',
        value: '交通大学',
        toilet_position: '费区外 至10号线站厅西部近5号口'
      },
      { key: '1149', value: '徐家汇', toilet_position: '费区外 9号线客服中心对面' },
      { key: '1150', value: '上海游泳馆', toilet_position: '费区外 近3号口' },
      {
        key: '1151',
        value: '龙华',
        toilet_position: '11号线 站外 2号口外400米，公共厕所\r\n<br/>12号线 费区外 6号口站厅'
      },
      { key: '1152', value: '云锦路', toilet_position: '费区外 近2号口' },
      { key: '1153', value: '龙耀路', toilet_position: '费区外 近2号口' },
      {
        key: '1154',
        value: '东方体育中心',
        toilet_position: '6号线 费区内 往东方体育中心方向站台车尾\r\n<br />6号线 费区内 往港城路路方向站台车头\r\n<br />8号线 费区内 往市光路方向站台车尾\r\n<br />11号线 费区内 至6、8号线站台'
      },
      { key: '1155', value: '三林', toilet_position: '费区外 近2号口' },
      { key: '1156', value: '三林东', toilet_position: '费区外 近4号口' },
      { key: '1157', value: '浦三路', toilet_position: '费区外 近2号口' },
      { key: '1158', value: '严御路', toilet_position: '' },
      { key: '1159', value: '御桥', toilet_position: '费区外 近7号口' },
      { key: '1160', value: '罗山路', toilet_position: '费区外 5号口外' },
      { key: '1161', value: '秀沿路', toilet_position: '费区外 北端车控室旁' },
      { key: '1162', value: '康新公路', toilet_position: '费区内 西端车控室旁' },
      {
        key: '1163',
        value: '迪士尼',
        toilet_position: '费区内 往嘉定北/花桥方向站台车头'
      }],
      '12':
      [{ key: '1220', value: '七莘路', toilet_position: '费区外 3号口站厅层' },
      { key: '1221', value: '虹莘路', toilet_position: '费区外 站厅东侧近1号口' },
      { key: '1222', value: '顾戴路', toilet_position: '费区外 2号口站厅层' },
      { key: '1223', value: '东兰路', toilet_position: '费区内 下行车尾' },
      { key: '1224', value: '虹梅路', toilet_position: '费区外 站厅7号口处' },
      { key: '1225', value: '虹漕路', toilet_position: '费区外 站厅2号口处' },
      { key: '1226', value: '桂林公园', toilet_position: '费区外 站厅4号口处' },
      {
        key: '1227',
        value: '漕宝路',
        toilet_position: '1号线 费区外 站外800米，1号口外第八人民医院\r\n<br/>12号线 费区外 站厅8号口处'
      },
      {
        key: '1228',
        value: '龙漕路',
        toilet_position: '3号线 费区内 近2号口\r\n<br/>12号线 费区外 4号口站厅'
      },
      {
        key: '1229',
        value: '龙华',
        toilet_position: '11号线 站外 2号口外400米，公共厕所\r\n<br/>12号线 费区外 6号口站厅'
      },
      {
        key: '1230',
        value: '龙华中路',
        toilet_position: '7号线 费区外 站厅层，近11号口\r\n<br />12号线 费区内 往七莘路方向站台车尾\r\n<br />12号线 费区内 往金海路方向站台中部'
      },
      {
        key: '1231',
        value: '大木桥路',
        toilet_position: '4号线 费区外 4号口外200米，公共厕所\r\n<br />12号线 费区外 站厅层，近5号口'
      },
      {
        key: '1232',
        value: '嘉善路',
        toilet_position: '9号线 费区外 站厅层，近2号口\r\n<br />12号线 费区外 站厅层，近4、6号口'
      },
      {
        key: '1233',
        value: '陕西南路',
        toilet_position: '1号线 费区内 往莘庄方向站台车头\r\n<br />10号线 费区外 站厅西端，近7号口\r\n<br />12号线 费区内 往金海路方向站台车头'
      },
      {
        key: '1234',
        value: '南京西路',
        toilet_position: '2号线    费区内    往浦东国际机场方向站台车头（站台东端）<br />\r\n12号线    费区外    客服中心对面<br />\r\n13号线    费区外    B2层站厅南端'
      },
      {
        key: '1235',
        value: '汉中路',
        toilet_position: '1号线 费区外 3号口外30米，地铁恒通大厦\r\n<br/>12号线 费区外 站厅南端靠近车控室旁\r\n<br/>13号线 费区外 站厅南端靠近车控室旁'
      },
      { key: '1236', value: '曲阜路', toilet_position: '费区外 近5号口' },
      {
        key: '1237',
        value: '天潼路',
        toilet_position: '费区内 站厅1号口，与10号线共用'
      },
      { key: '1238', value: '国际客运中心', toilet_position: '费区外 站厅东侧近1号口' },
      { key: '1239', value: '提篮桥', toilet_position: '费区外 近2号口' },
      { key: '1240', value: '大连路', toilet_position: '费区外 近6号口' },
      { key: '1241', value: '江浦公园', toilet_position: '费区外 近1号口' },
      { key: '1242', value: '宁国路', toilet_position: '费区外 近4号口' },
      { key: '1243', value: '隆昌路', toilet_position: '费区外 近3号口' },
      { key: '1244', value: '爱国路', toilet_position: '费区外 近2号口' },
      { key: '1245', value: '复兴岛', toilet_position: '费区外 2号口站厅' },
      { key: '1246', value: '东陆路', toilet_position: '费区外 近1号口' },
      { key: '1247', value: '巨峰路', toilet_position: '费区内 至6号线站厅' },
      { key: '1248', value: '杨高北路', toilet_position: '费区外 近1号口' },
      { key: '1249', value: '金京路', toilet_position: '费区外 近2号口' },
      { key: '1250', value: '申江路', toilet_position: '费区外 近1号口' },
      { key: '1251', value: '金海路', toilet_position: '费区外 近3号口' }],
      '13':
      [{ key: '1321', value: '金运路', toilet_position: '费区外 近8号口站厅' },
      { key: '1322', value: '金沙江西路', toilet_position: '费区外 近4号口' },
      { key: '1323', value: '丰庄', toilet_position: '费区外 近3号口站厅' },
      { key: '1324', value: '祁连山南路', toilet_position: '费区外 站厅层，近1号口' },
      { key: '1325', value: '真北路', toilet_position: '费区外 站厅层，近4号口' },
      { key: '1326', value: '大渡河路', toilet_position: '费区外 近1号口站厅' },
      {
        key: '1327',
        value: '金沙江路',
        toilet_position: '3号线 费区内 站厅层，近换乘通道处，近13号线（3、4号共线）\r\n<br />13号线 费区外 站厅层，近6号口'
      },
      { key: '1328', value: '隆德路', toilet_position: '费区外 B1站厅层，近2号口' },
      { key: '1329', value: '武宁路', toilet_position: '费区外 近2号口' },
      {
        key: '1330',
        value: '长寿路',
        toilet_position: '7号线 费区外 站厅层，近1号口'
      },
      { key: '1331', value: '江宁路', toilet_position: '费区外 站厅东端2号口' },
      {
        key: '1332',
        value: '汉中路',
        toilet_position: '1号线 费区外 3号口外30米，地铁恒通大厦\r\n<br/>12号线 费区外 站厅南端靠近车控室旁\r\n<br/>13号线 费区外 站厅南端靠近车控室旁'
      },
      {
        key: '1333',
        value: '自然博物馆',
        toilet_position: '费区外 站厅南端1号口<br />\r\nB3设备层'
      },
      {
        key: '1334',
        value: '南京西路',
        toilet_position: '2号线    费区内    往浦东国际机场方向站台车头（站台东端）<br />\r\n12号线    费区外    客服中心对面<br />\r\n13号线    费区外    B2层站厅南端'
      },
      { key: '1335', value: '淮海中路', toilet_position: '费区外 近1号口' },
      {
        key: '1336',
        value: '新天地',
        toilet_position: '10号线 费区外 站厅西端通道内'
      },
      {
        key: '1337',
        value: '马当路',
        toilet_position: '9号线    站外    3号口外50米 KFC厕所'
      },
      { key: '1338', value: '世博会博物馆', toilet_position: '费区外 近3b号口' },
      { key: '1339', value: '世博大道', toilet_position: '费区外 近3号口' }],
      '16':
      [{
        key: '1621',
        value: '龙阳路',
        toilet_position: '2号线 费区内 往浦东国际机场方向站台车尾\r\n<br />7号线 费区内 2换7通道处\r\n<br />16号线 费区内 站厅层，近12号口'
      },
      { key: '1622', value: '华夏中路', toilet_position: '费区外 南厅管理用房门口' },
      { key: '1623', value: '罗山路', toilet_position: '费区外 近3号口' },
      { key: '1624', value: '周浦东', toilet_position: '费区外 站厅层，近1号口' },
      { key: '1625', value: '鹤沙航城', toilet_position: '车站外近4号口' },
      { key: '1626', value: '航头东', toilet_position: '费区外 北厅管理用房通道外' },
      { key: '1627', value: '新场', toilet_position: '费区外 近1号口' },
      {
        key: '1628',
        value: '野生动物园',
        toilet_position: '费区外 站厅北厅，1楼大门旁'
      },
      { key: '1629', value: '惠南', toilet_position: '费区外 近2号口' },
      { key: '1630', value: '惠南东', toilet_position: '费区外 近4号口' },
      { key: '1631', value: '书院', toilet_position: '费区内 站厅层，近2号口' },
      { key: '1632', value: '临港大道', toilet_position: '费区外 站厅北侧近4号口' },
      { key: '1633', value: '滴水湖', toilet_position: '费区外 站厅层，近1号口' }],
      '17':
      [{ key: '1721', value: '虹桥火车站', toilet_position: '' },
      { key: '1722', value: '诸光路', toilet_position: '费区内 往东方绿舟方向车尾' },
      { key: '1723', value: '蟠龙路', toilet_position: '费区内 往东方绿舟方向车尾' },
      { key: '1724', value: '徐盈路', toilet_position: '费区内 往虹桥火车站方向车头' },
      { key: '1725', value: '徐泾北城', toilet_position: '费区内 往虹桥火车站方向车头' },
      {
        key: '1726',
        value: '嘉松中路',
        toilet_position: '费区内 东端通道口\r\n<br />西端通道口'
      },
      {
        key: '1727',
        value: '赵巷',
        toilet_position: '费区内 东端中间通道内\r\n<br />西端下行方向车头电梯处'
      },
      {
        key: '1728',
        value: '汇金路',
        toilet_position: '费区内 往虹桥火车站方向车头\r\n<br />往东方绿舟方向车头'
      },
      { key: '1729', value: '青浦新城', toilet_position: '费区内 往虹桥火车站方向车头' },
      { key: '1730', value: '漕盈路', toilet_position: '费区内 往东方绿舟方向车头' },
      { key: '1731', value: '淀山湖大道', toilet_position: '费区内 往东方绿舟方向车头' },
      { key: '1732', value: '朱家角', toilet_position: '费区内 往东方绿舟方向车头' },
      { key: '1733', value: '东方绿舟', toilet_position: '费区内 往虹桥火车站方向车头' }],
      '41':
      [{ key: '4101', value: '沈杜公路', toilet_position: '8号线：费区外 站厅层南端' },
      { key: '4102', value: '三鲁公路', toilet_position: '费区外 近1号口' },
      { key: '4103', value: '闵瑞路', toilet_position: '费区外 近2号口' },
      { key: '4104', value: '浦航路', toilet_position: '费区外 近2号口' },
      { key: '4105', value: '东城一路', toilet_position: '费区外 近2号口' },
      { key: '4106', value: '汇臻路', toilet_position: '费区外 近1号口' }]
    },
    toilet_position: "" ,
    headerColor: ""
  },
  bindPickerChange: function (e) {
    let n = e.detail.value

    let bigDataKey = this.data.lines[n]["line_no"]

    this.setData({
      line_index: e.detail.value,      
      stops: this.data.bigData[bigDataKey],
      stop_index: 0,
      toilet_position: this.data.bigData[bigDataKey][0].toilet_position ? this.data.bigData[bigDataKey][0].toilet_position.split("<br />").join("\n") : "无",
      headerColor: this.data.lines[n].color
    })
  },
  bindStopChange: function(e) {
    
    let stop = this.data.stops[e.detail.value]
    if (stop === undefined) {
      wx.showModal({
        title: '',
        content: '请先选择地铁线路',
        showCancel: false,
      })
      return false;
    }
    let toilet = stop.toilet_position
    toilet = toilet ? toilet : "无" 

    this.setData({
      stop_index: e.detail.value,
      toilet_position: toilet.split("<br />").join("\n")
    })
  }


})