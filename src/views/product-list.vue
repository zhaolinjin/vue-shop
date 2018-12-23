<template>
  <div>
      <div class="list-header">
          <div class="header-left">电商网站</div>
          <div class="header-right">购物车</div>
      </div>
      <div class="list-content">
          <sortSelection v-for="item of selections" :key="item.label" :selections="item" @getSelectedItem="getSelectedItem"></sortSelection>
          <div class="product-list clear-fix">
            <productExhibition v-for="item of getFilterData" :key="item.id" :product="item" class="product-item"></productExhibition>
            <div v-show="getFilterData.length === 0">暂无商品</div>
          </div>
      </div>
  </div>
</template>

<script>
import sortSelection from '../components/sort-selection'
import productExhibition from '../components/product-exhibition'
export default {
  name: '',
  data () {
    return {
       selections: '',
       selectedItem: '',
       selectionObj: '',
       filterData: ''
    }
  },
  components: {
      sortSelection,
      productExhibition
  },
  computed: {
    // 商品列表原始数据
    productions() {
      return this.$store.state.products.products
    },
    // 商品列表筛选值
    getFilterData() {
      let list = [...this.productions];
      // 数据筛选顺序为品牌、颜色然后排序
      var label_data = Object.keys(this.filterData);
      var sortStr = label_data.pop();
      var newArr = [];
      if(label_data.length === 2) {
        // 筛选品牌
        var middleArr = [];
        this.filterData.brand.forEach(element => {
          middleArr.push(...(list.filter(item => item.brand === element)))
        });
        // 筛选颜色
        this.filterData.color.forEach(element => {
          newArr.push(...(middleArr.filter(item => item.color === element)))
        });
        list = newArr;
      } else if(label_data.length === 1) {
        this.filterData[label_data[0]].forEach(element => {
          newArr.push(...(list.filter(item => item[label_data[0]] === element)))
        });
        list = newArr;
      }
      // 进行排序
      if(newArr.length > 0) {
        list = this.sortFn(newArr);
      }else {
        list = this.sortFn(list);
      }
      return list;
    }
    
  },
  mounted () {
    // 顶部选项渲染数据
    this.$store.dispatch('getSelections');
    this.selections = this.$store.state.selections.selections;
    // 页面初始化产品列表数据
    this.$store.dispatch('getProductsList');
  },
  methods: {
    getSelectedItem(obj, selectionObj, filter_data) {
      this.selectedItem = obj;
      this.selectionObj = selectionObj;
      this.filterData = filter_data
    },
    sortFn(arr) {
      if(this.selections.length) {
        // 获取排序中的被选中的值
        var selectedSortVal = this.getSortVal();
      }
      if(selectedSortVal === 'sales') {
          arr.sort(function(a, b) {
            return b.sales - a.sales
          })
        } else if (selectedSortVal === 'price-asc') {
          arr.sort(function(a, b) {
            return b.price - a.price
          })
        } else if (selectedSortVal === 'price-desc') {
          arr.sort(function(a, b) {
            return a.price - b.price
          })
        }
        return arr;
    },
    // 获取排序中选中的值
    getSortVal() {
      var selectedSortVal;
      this.selections.forEach((ele)=> {
        if(ele.field === 'sort') {
          ele.items.forEach((val)=> {
            if(val.selected) {
              selectedSortVal = val.value;
            }
          })
        }
      });
      return selectedSortVal;
    }
  }
}
</script>

<style scoped>
.list-header {
    display: flex;
    height: 50px;
    background-color: #cccccc;
}
.header-left, .header-right {
    flex: 1;
    text-align: left;
}
.header-right {
    text-align: right;
}
.list-content {
    padding: 10px;
}
.product-item {
  float: left;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
