<template>
  <div class="select-container">
    <div class="select-label">{{selections.label}}:</div>
    <div class="select-items">
        <ul>
          <li v-for="(val, i) of selections.items" 
          :key="val.name" class="select-item" 
          @click.stop="getIndex(i, selections, val)" 
          :class="{'select-bg': val.selected}">{{val.name}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        filterSelected: ''
    }
  },
  props: {
      selections: Object,
  },
  components: {

  },
  methods: {
      // 实现单选和多选
      getIndex(i, selections, val) {
        if(selections.select === 'multiple') {
          this.selections.items[i].selected = !this.selections.items[i].selected;
        }else if(selections.select=== 'single'){
          this.selections.items.forEach((element, index) => {
            if(index === i) {
              element.selected = true;
              if(element.name === '价格') {
                if(element.value === 'price-asc') {
                  element.value = 'price-desc'
                } else {
                  element.value = 'price-asc'
                }
              }
            }else {
              element.selected = false;
            }
          });
        };
        // 向父组件传值
        var params = this.getSelected();
        this.$emit('getSelectedItem', val, selections, params);
        // 传参数进行排序
        // this.sortList(params);
      },
      // 获取当前所有选中的值
      getSelected() {
        var selections = this.$store.state.selections.selections;
        var obj = {};
        selections.forEach((ele)=> {
          ele.items.forEach((val)=> {
            if(val.selected) {
              if(!obj[ele.field]) {
                obj[ele.field] = [];
              }            
              obj[ele.field].push(val.value);
            }
          })
        });
        return obj
      },
  }
}
</script>

<style scoped>
.select-container {
    display: flex;
    margin-top: 10px;
}
.select-label {
    width: 50px;
    text-align: right;
}
.select-items {
    flex: 1;
}
.select-items ul {
    list-style: none;
    margin-left: 10px;
}
.select-items ul li {
  cursor: pointer;
}
.select-item {
    border: 1px solid #cccccc;
    padding: 5px;
    display: inline-block;
    margin-right: 10px;
}
.select-bg {
    background: #cccccc;
}

</style>
