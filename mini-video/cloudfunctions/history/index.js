// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event.item)
  switch (event.action) {
    case 'getlist': {
      return getlist(event)
    }
    case 'uplist': {
      return uplist(event)
    }
  }
}

async function getlist(event) {
    const getlist = await db.collection('history').where({
         id: event.userInfo.openId 
        }).get()
    return getlist
  }

  async function uplist(event) {
      let duration = parseFloat((Math.random() * 60).toFixed(2))
      let time = new Date()
      var getlist = await db.collection('history').where({
        id: event.userInfo.openId ,
        name:event.item.name
       }).get()
       console.log('getlist:',getlist)
       if(getlist.data.length===0){
       var  list = await db.collection('history').add({
          data: {
            id: event.userInfo.openId,
            file_url: event.item.url,
            img: event.item.img,
            name: event.item.name,
            kind: event.item.type,
            duration: duration,
            time: time
          }
        }) 
  }
  return list
}
