export default [
  {
    label: '品牌',
    select: 'multiple',
    field: 'brand',
    items: [
      { name: 'Apple', selected: false, value: 'Apple' },
      { name: 'Beats', selected: false, value: 'Beats' },
      { name: 'Sony', selected: false, value: 'Sony' },
      { name: 'B&O', selected: false, value: 'B&O' },
      { name: 'Bose', selected: false, value: 'Bose' },
    ]

  },
  {
    label: '颜色',
    select: 'multiple',
    field: 'color',
    items: [
      { name: '白色', selected: false, value: 'white' },
      { name: '金色', selected: false, value: 'gold' },
      { name: '红色', selected: false, value: 'red' },
      { name: '黄色', selected: false, value: 'yellow' },
      { name: '绿色', selected: false, value: 'green' },
    ]
  },
  {
    label: '排序',
    select: 'single',
    field: 'sort',
    items: [
      { name: '默认', selected: true, value: 'default' },
      { name: '销量', selected: false, value: 'sales' },
      { name: '价格', selected: false, value: 'price-asc' }, // asc和desc,升序和降序
    ]
  },

]