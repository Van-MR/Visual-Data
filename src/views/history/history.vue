<template lang="html">
     <div class="community">
        <Row>
            <Col span="24">
               <h3 class="info">样本数据预处理</h3>
               <div :style="{marginLeft:'15px',marginTop:'20px'}">
                 <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button icon="ios-cloud-upload-outline" type="primary" large>本地导入</Button>
                </Upload>
               </div>
            </Col>
        </Row>
        <Divider />
        <Row>
            <h3 class="info">清理数据列表</h3>
            <Form :style="{marginTop:'20px',marginLeft:'15px'}">
               <FormItem>
                   <Row>
                     <Col span='5'>
                       <FormItem label="预处理时间:">
                               <DatePicker type="datetime" placeholder="请选择" :value="starttime" @on-change="handlechange"></DatePicker>
                       </FormItem>
                     </Col>
                     <Col span='5'>
                       <FormItem label="和TV型号:">
                         <Select v-model="station" style="width:180px" clearable>
                             <Option v-for="item in stationList" :value="item.name" :key="item.name">{{ item.name }}</Option>
                         </Select>
                       </FormItem>
                     </Col>
                     <Col span='5'>
                       <FormItem label="厂商:">
                         <Select v-model="station" style="width:180px" clearable>
                             <Option v-for="item in factoryList" :value="item.name" :key="item.name">{{ item.name }}</Option>
                         </Select>
                       </FormItem>
                     </Col>
                     <Col span='5'>
                       <FormItem label="地区:">
                         <Select v-model="station" style="width:180px" clearable>
                             <Option v-for="item in areaList" :value="item.name" :key="item.name">{{ item.name }}</Option>
                         </Select>
                       </FormItem>
                     </Col>
                     <Col span="4">
                        <Button type="primary" icon="ios-search-outline" :style="{color:'#edf6fb',marginRight:'10px'}" @click="Search">搜索</Button>
                        <Button type="success" icon="ios-cloud-download-outline" :style="{color:'#edf6fb',marginRight:'10px'}" @click="Expor">导出</Button>
                     </Col>
                   </Row>
               </FormItem>
            </Form>
            <div :style="{padding:'0 15px',marginTop:'30px'}" class="table">
              <Row :style="{marginBottom:'45px'}">
                  <Table :loading="loading" :columns="columns1" :data="data1" ></Table>
              </Row>
              <Row :style="{marginTop: '35px'}">
                  <Page :style="{float:'right'}" :total='dataCount' size="small" :page-size="pageSize" show-total show-elevator @on-change="changepage"></Page>
              </Row>
            </div>
        </Row>
     </div>
</template>

<script>
export default {
  data(){
    return{
       loading:false,
       loadings:false,
       loading1:false,
       imgSrc:'',
       area:'',
       station:'HW-1234',
       starttime:'',
       endtime:'',
       installer:'',
       dataCount:5,
       pageSize:8,
       ajaxHistoryData:[],
       stationList:[{name:'HW-1234'}],
       factoryList:[],
       areaList:[],
       data1:[
         {order:'1',model:'HW-1234',time:'2018-11-07 17:00:00',quality:5,factory:'华为',area:'华容区'},
         {order:'2',model:'HW-1234',time:'2018-11-07 17:00:00',quality:5,factory:'华为',area:'华容区'},
         {order:'3',model:'HW-1234',time:'2018-11-07 17:00:00',quality:5,factory:'华为',area:'华容区'},
         {order:'4',model:'HW-1234',time:'2018-11-07 17:00:00',quality:5,factory:'华为',area:'华容区'},
         {order:'5',model:'HW-1234',time:'2018-11-07 17:00:00',quality:5,factory:'华为',area:'华容区'}
       ],
       columns1:[
         {
             title: '序号',
             key: 'order',
             align:'center'
         },
         {
             title: '和TV型号',
             key: 'model',
             align:'center'
         },
         {
             title: '故障数量',
             key: 'quality',
             align:'center'
         },
         {
             title: '厂商',
             key: 'factory',
             align:'center'
         },
         {
             title: '地区',
             key: 'area',
             align:'center'
         },
         {
             title: '预处理时间',
             key: 'time',
             align:'center'
         }
       ]
    }
  },
  mounted(){
    //this.getDataList()
  },
  methods:{
    getDataList(){
         this.loading = true
         this.$axios.get(`${this.URL_PREFIX}/capital/list?starttime=${this.starttime}&endtime=${this.endtime}&work=${this.station}`)
                    .then(res => {
                       if(res.data.code == '0'){
                         this.loading = false
                         this.data1 = res.data.result
                         this.ajaxHistoryData = this.data1
                         this.dataCount = res.data.result.length
                         this.handleListApproveHistory()
                       }
                    })
                    .catch(error => {
                      this.loading = false
                      console.log(error)
                    })
    },
    //搜索
    Search(){
      // this.loading = true
      // this.$axios.get(`${this.URL_PREFIX}/capital/list?starttime=${this.starttime}&endtime=${this.endtime}&work=${this.station}`)
      //            .then(res => {
      //               if(res.data.code == '0'){
      //                 this.loading = false
      //                 this.data1 = res.data.result
      //                 this.ajaxHistoryData = this.data1
      //                 this.dataCount = res.data.result.length
      //                 this.handleListApproveHistory()
      //               }
      //            })
      //            .catch(error => {
      //              this.loading = false
      //              console.log(error)
      //            })
    },
    //导出
    Expor(){},
    handleListApproveHistory(){
          if(this.data1 < this.pageSize){
              this.data1 = this.ajaxHistoryData;
          }else{
              this.data1 = this.ajaxHistoryData.slice(0,this.pageSize);
          }


      },
    handlechange(datetime){
        this.starttime =datetime
    },
    handlechange1(datetime){
         this.endtime =datetime
    },
    changepage(index){
          var _start = ( index - 1 ) * this.pageSize;
          var _end = index * this.pageSize;
          this.data1 = this.ajaxHistoryData.slice(_start,_end);
      }
  }
}
</script>

<style lang="scss" scoped>
    .community{
      .info{
        margin-top: 15px;
        margin-left: 15px;
      }
    }
</style>
