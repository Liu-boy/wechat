// pages/start/start.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
random:"",
random1:"",
jieguo:"",
shibai:"",
count:0,
state:"开始",
chonglai:""
    },
    input(e){
       console.log(e);
        this.setData({
        random1:e.detail.value
        })
    },
randomf(){
    this.setData({
        random:Math.ceil(Math.random()*100)
    })
},

button(){
    if(this.data.count<9)
    {
        this.setData({
        count:this.data.count+1
    })
}

    else if(this.data.count==9)
    { if(this.data.random1!=this.data.random)
    this.setData({
        state:"重来",
        count:this.data.count+1,
        chonglai:"次数用完了哦，再来一次吧"
    })
    else
    this.setData({
        state:"重来",
        count:this.data.count+1,
    })
}
   else if(this.data.count>9)
   {
this.setData({
    state:"开始",
    count:0,
    chonglai:""
})
this.randomf()
   }
   if(this.data.count==0){
       this.setData({
           shibai:"",
           jieguo:""
       })
   }
   else if(this.data.count<=10&&this.data.count>0)
   {if(this.data.random1>this.data.random)
{
        this.setData({
jieguo:"猜大了哟，亲。",
shibai:"第"+this.data.count+"回合："+"您的值："+this.data.random1
    });
}
    else if(this.data.random1<this.data.random)
{
    this.setData({
        jieguo:"猜小了哟，亲。",
        shibai:"第"+this.data.count+"回合："+"您的值："+this.data.random1
    })
}
    else if(this.data.random1==this.data.random)
{
       this.setData({
        jieguo:"猜对了，亲，你真厉害!",
        shibai:"第"+this.data.count+"回合："+"您的值："+this.data.random1,
        state:"重来",
        count:10
    })
}
   } 
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.randomf();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})