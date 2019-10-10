var articles = [
  {
    articleId:'0',
    avatar: '/images/avatar/u1.jpg',
    date: '2019-10-10',
    time:'2天前',
    title: '金志文的歌曲',
    img: 'http://www.qiucinews.com/ent/images/attachement/jpg/site2/20141103/00e06f12a37e15c15b6538.jpg',
    desc: '金志文的描述',
    star: 30,
    view: 20,
    content:'金志文',
    music:{
      src: 'http://antiserver.kuwo.cn/anti.s?format=mp3|aac&rid=3189713&type=convert_url&response=res',
      title: '我们结婚吧',
      coverImgUrl: 'http://www.qiucinews.com/ent/images/attachement/jpg/site2/20141103/00e06f12a37e15c15b6538.jpg'
    }
  },
  {
    articleId: '1',
    avatar: 'http://www.qiucinews.com/ent/images/attachement/jpg/site2/20141103/00e06f12a37e15c15b6538.jpg',
    date: '2019-10-10',
    time: '3天前',
    title: '广东雨神的歌曲',
    img: 'http://p0.ifengimg.com/pmop/2018/0805/1EDCFA38BAAA9809AEC5FC396727C2C2FDC48AA8_size21_w640_h427.jpeg',
    desc: '广东雨神的描述',
    star: 30,
    view: 20,
    content: '广东雨神',
    music: {
      src: ' http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3',
      title: '广东爱情故事',
      coverImgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570691254895&di=85df392e38967a242f398b65b1751855&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20181101%2F20181101132346_572fca3e271eab9e7422a53769560281_1.jpeg'
    }    
  },
]

module.exports = {
  articles: articles
}
/*
1.为爱痴狂：
封面：http://oxoxtpvtn.bkt.clouddn.com/%E4%B8%BA%E7%88%B1%E7%97%B4%E7%8B%82.jpg
歌曲：http://oxoxtpvtn.bkt.clouddn.com/%E9%87%91%E5%BF%97%E6%96%87%20-%20%E4%B8%BA%E7%88%B1%E7%97%B4%E7%8B%82.mp3

2.风吹麦浪
封面：http://oxoxtpvtn.bkt.clouddn.com/%E9%A3%8E%E5%90%B9%E9%BA%A6%E6%B5%AA.jpg
歌曲：http://oxoxtpvtn.bkt.clouddn.com/%E6%9D%8E%E5%81%A5%E3%80%81%E5%AD%99%E4%BF%AA%20-%20%E9%A3%8E%E5%90%B9%E9%BA%A6%E6%B5%AA%20%28Live%29.mp3

3.最远的你是我最近的爱
封面：http://oxoxtpvtn.bkt.clouddn.com/%E8%BD%A6%E7%BB%A7%E9%93%83%E6%9C%80%E8%BF%9C%E7%9A%84%E4%BD%A0%E6%98%AF%E6%88%91%E6%9C%80%E8%BF%91%E7%9A%84%E7%88%B1.jpg
歌曲：http://oxoxtpvtn.bkt.clouddn.com/%E8%BD%A6%E7%BB%A7%E9%93%83%20-%20%E6%9C%80%E8%BF%9C%E7%9A%84%E4%BD%A0%E6%98%AF%E6%88%91%E6%9C%80%E8%BF%91%E7%9A%84%E7%88%B1.mp3

4.演员
封面;http://oxoxtpvtn.bkt.clouddn.com/%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%91%98.jpg
歌曲：http://oxoxtpvtn.bkt.clouddn.com/%E8%96%9B%E4%B9%8B%E8%B0%A6%20-%20%E6%BC%94%E5%91%98.mp3

5.喜欢你
封面：http://oxoxtpvtn.bkt.clouddn.com/%E9%82%93%E7%B4%AB%E6%A3%8B%E5%96%9C%E6%AC%A2%E4%BD%A0.jpg
歌曲：http://oxoxtpvtn.bkt.clouddn.com/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%96%9C%E6%AC%A2%E4%BD%A0.mp3

6.听海
封面：http://oxoxtpvtn.bkt.clouddn.com/%E5%90%AC%E6%B5%B7.jpg
歌曲：http://oxoxtpvtn.bkt.clouddn.com/%E5%BC%A0%E6%83%A0%E5%A6%B9%20-%20%E5%90%AC%E6%B5%B7%20%28Live%29.mp3
*/
/*
豆瓣api:

正在热映
http://t.yushu.im/v2/movie/in_theaters?start=0&count=3

即将上映
http://t.yushu.im/v2/movie/coming_soon?start=0&count=3

豆瓣Top250
http://t.yushu.im/v2/movie/top250?start=0&count=3

*/