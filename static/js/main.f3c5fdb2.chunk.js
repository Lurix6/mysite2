(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(39)},24:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),l=(n(24),n(1)),o=n(2),s=n(4),u=n(3),m=n(5),p=(n(26),n(14)),d=n.n(p),h=n(7),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).endedMusic=function(){console.log("ended eeeeeeeeee")},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.curentElement,n=(e.musics,t);return r.a.createElement("div",{className:"curentMusic"},r.a.createElement(d.a,{src:n.url_link,controls:!0,loop:!0,onEnded:!0}),r.a.createElement("div",{id:"about_current_music"},r.a.createElement("img",{src:null===n.icon?"assets/img/music/default_music_img.png":n.icon}),r.a.createElement("div",null,r.a.createElement("p",null,n.title),r.a.createElement("p",null,n.executor))))}}]),t}(r.a.Component),v=Object(h.b)(function(e){return{musics:e.musics,curentElement:e.curentElement}})(f),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={curentState:"myMysic"},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t={borderBottom:"2px solid #00AEB5"};return r.a.createElement("div",{className:"category"},r.a.createElement("p",{onClick:function(){e.props.updateCurentCategory("myMysic"),e.setState({curentState:"myMysic"})},style:"myMysic"===this.state.curentState?t:null},"\u041c\u043e\u044f \u041c\u0443\u0437\u0438\u043a\u0430"),r.a.createElement("p",{onClick:function(){e.props.updateCurentCategory("playList"),e.setState({curentState:"playList"})},style:"playList"===this.state.curentState?t:null},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0438"),r.a.createElement("p",{onClick:function(){e.props.updateCurentCategory("recommend"),e.setState({curentState:"recommend"})},style:"recommend"===this.state.curentState?t:null},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0456"))}}]),t}(r.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.categoryMusic?r.a.createElement("div",{className:"about_list"},r.a.createElement("p",null,"\u0410\u0443\u0434\u0456\u043e\u0437\u0430\u043f\u0438\u0441\u0438"),r.a.createElement("p",null,"\u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c")):r.a.createElement("div",{className:"about_list"},r.a.createElement("p",{style:{fontSize:"18px"}},r.a.createElement("span",null,"1")," \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0456\u0434\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f")))}}]),t}(r.a.Component),E=(n(33),function(e){return function(t){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={hover:!1},t.hoverOn=function(){t.setState({hover:!0})},t.hoverOff=function(){t.setState({hover:!1})},t}return Object(m.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,this.state,{hoverOn:this.hoverOn,hoverOff:this.hoverOff}))}}]),n}(r.a.Component)}),b="DELETE_MUSIC_ELEMENT",_="CHANGE_CARENT_MUSIC",j="SEARCH_MUSICS",O="ADD_NEW_MUSIC_IN_MY_LIST";function w(e){return{type:_,payload:{element:e}}}var C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).decorateMainImg=function(e){e.opacity=.25;return r.a.createElement("img",{src:"assets/img/music/play(white).png",style:{position:"absolute",marginLeft:"10px",marginTop:"10px",width:"30px",height:"30px",zIndex:"2"},alt:""})},n.getImageBody=function(){n.props.element;return r.a.createElement("div",null,r.a.createElement("img",{src:"assets/img/music/magic1.png",alt:"",title:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0441\u0445\u043e\u0436\u0456"}),n.state.myList?null:r.a.createElement("img",{src:"assets/img/music/del1.png",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442",alt:"",onClick:n.hendleDelete}),r.a.createElement("img",{src:n.state.myList?"assets/img/music/plus.png":"assets/img/music/more1.png",alt:"",onClick:n.state.myList?n.hendleAddNewMusick:null,title:n.state.myList?"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u0441\u0432\u0456\u0439 \u0441\u043f\u0438\u0441\u043e\u043a":"\u0411\u043b\u0456\u043b\u044c\u0448\u0435"}))},n.hendleDelete=function(){var e=n.props;(0,e.deleteMusicElement)(e.element.id)},n.hendleAddNewMusick=function(){console.log("ADDDDDDD");var e=n.props;(0,e.addNewMusic)(e.element)},n.state={myList:void 0===n.props.root_width},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.element,n=e.hover,a=e.hoverOn,i=e.hoverOff,c={opacity:"1"},l={width:e.root_width};return r.a.createElement("div",{className:"root",style:l,onMouseEnter:a,onMouseLeave:i},r.a.createElement("div",null,n?this.decorateMainImg(c):null,r.a.createElement("img",{src:null===t.icon?"assets/img/music/default_music_img.png":t.icon,style:c,alt:""}),r.a.createElement("div",{className:"list_music_inf"},r.a.createElement("span",null,t.title),r.a.createElement("span",null,t.executor))),r.a.createElement("div",{className:"list_music_time"},n?this.getImageBody():t.full_time))}}]),t}(r.a.Component),k=Object(h.b)(null,{deleteMusicElement:function(e){return{type:b,payload:{id:e}}},addNewMusic:function(e){return{type:O,payload:{element:e}}}})(E(C)),M=(n(35),n(17)),x=Object(M.a)(function(e){return e.musics},function(e){return e.search},function(e,t){return e.filter(function(e){return e.title.toUpperCase().includes(t.toUpperCase())||e.executor.toUpperCase().includes(t.toUpperCase())})}),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.listElements.map(function(t){return r.a.createElement("li",{onClick:function(){(0,e.props.setNewCarentMusic)(t)},key:t.id},r.a.createElement(k,{element:t,root_width:"550px"}))});return r.a.createElement("div",{id:"list_music"},r.a.createElement("ul",null,t))}}]),t}(a.Component),S=Object(h.b)(function(e){return{listElements:x(e)}},{setNewCarentMusic:w})(N),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"playList"},r.a.createElement("h3",null,"Hi im playlist "))}}]),t}(r.a.Component),D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleUserChange=function(e){""!==e.target.value&&(0,n.props.setSearchDate)(e.target.value)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",id:"audio_search",placeholder:"\u041f\u043e\u0448\u0443\u043a \u0437\u0430 \u043c\u0443\u0437\u0438\u043a\u043e\u044e",onChange:this.handleUserChange}),r.a.createElement("button",{className:"button_search"}))}}]),t}(r.a.Component),L=Object(h.b)(null,{setSearchDate:function(e){return{type:j,payload:{search:e}}}})(D),I=(n(37),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.listElements.map(function(t){return r.a.createElement("li",{onClick:function(){(0,e.props.setNewCarentMusic)(t)},key:t.id},r.a.createElement(k,{element:t}))});return r.a.createElement("ul",null,t)}}]),t}(a.Component)),T=Object(h.b)(function(e){return{listElements:e.noveltySongs}},{setNewCarentMusic:w})(I),R=E(function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).decorateShowAll=function(e){return{transitionDuration:".8s",marginLeft:"10px",transition:"1s"}},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.hover,n=e.hoverOn,a=e.hoverOff,i={};return r.a.createElement("div",{className:"recommend_root"},r.a.createElement("div",{className:"recommend"},r.a.createElement("div",null,r.a.createElement("div",{className:"specially_for_you"},"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0412\u0430\u0441"),r.a.createElement("div",{className:"new_songs"},"Portugal. The Man, Timo Maas, Inter Delirium \u0442\u0430 \u0456\u043d\u0448\u0456"),r.a.createElement("input",{id:"listen_all",type:"button",value:"\u0421\u043b\u0443\u0445\u0430\u0442\u0438 \u0432\u0441\u0435"})),r.a.createElement("div",null,r.a.createElement("img",{className:"new_songs_img",src:"assets/img/music/recommend/adv111.png"}))),r.a.createElement("div",{className:"black_line"}),r.a.createElement("div",{id:"novelty"},r.a.createElement("div",{id:"novelty_text"},r.a.createElement("p",null,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"),r.a.createElement("div",{onMouseEnter:n,onMouseLeave:a,id:"show_all"},r.a.createElement("p",null,"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0456"),r.a.createElement("img",{src:"assets/img/music/recommend/show_all(right).png",style:t?this.decorateShowAll(i):i,alt:""}))),r.a.createElement("div",{id:"novelty_list"},r.a.createElement(T,null))))}}]),t}(r.a.Component)),z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={curentCategory:"myMysic"},n.updateCurentCategory=function(e){console.log(n.state.curentCategory),n.setState({curentCategory:e})},n.openCategory=function(){console.log("oppppppeeeeeeeeeeeeennnnnnnnnnnnnnnnn");var e=n.state.curentCategory;return"myMysic"===e?r.a.createElement(S,null):"playList"===e?r.a.createElement(A,null):"recommend"===e?r.a.createElement(R,null):void 0},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"musicBlock"},r.a.createElement(v,null),r.a.createElement("div",{className:"fullListMusic"},r.a.createElement(y,{updateCurentCategory:this.updateCurentCategory,defaultCurentCategory:this.curentCategory}),r.a.createElement("hr",null),r.a.createElement("div",{className:"showlist"},r.a.createElement(L,null),r.a.createElement(g,{categoryMusic:this.state.curentCategory}),this.openCategory())))}}]),t}(a.Component),U=n(8),W=n(18),H=[{id:"56c782f18990ecf954f6e027",executor:"Alan Walker",title:"Darkside (feat. Au/Ra and Tomine Harket)",icon:"https://pp.userapi.com/c834303/v834303863/18f3d4/zcxfviEegeU.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=480275022",full_time:"3:50"},{id:"56c782f17b4e0ba78c7ad717",executor:"Alan Walker",title:"New Day (Official Video) [New Song 2018]",icon:"https://pp.userapi.com/c639721/v639721949/5131e/-bf4PRxQZ40.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=473944656",full_time:"3:50"},{id:"56c782f1978fdf9a0100df52",executor:"Alan Walker",title:"The Spectre",icon:"https://pp.userapi.com/c639721/v639721949/5131e/-bf4PRxQZ40.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=309831866",full_time:"3:50"},{id:"56c782f1e17f4f9311dfaa2c",executor:"Alan Walker",title:"Fade [NCS Release]",icon:"https://pp.userapi.com/c639721/v639721949/5131e/-bf4PRxQZ40.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=177671751",full_time:"3:50"},{id:"56c782f197fe2bad471b3740",executor:"Simple Plan(Nightcore)",title:"Take My Hand",icon:"https://pp.userapi.com/c636816/v636816452/7517a/ksYp012gDwM.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=237941008",full_time:"3:50"},{id:"56c782f1a2c2c3268ddb3206",executor:"Shinedown(Nightcore)",title:"My Name [Wearing Me Out]",icon:"https://pp.userapi.com/c636816/v636816452/66e65/7-iDZ9DvGhA.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=172168066",full_time:"3:50"},{id:"56c782fghgfc2c3268ddb3206",executor:"Leader",title:"Warrior Inside",icon:null,url_link:"http://taimp3nhanh.com/stream/stream.php?id=209231331",full_time:"3:50"}],P=[{id:"wd14eut1kt",executor:"no name",title:"\u0413\u0440\u0443\u0441\u0442\u043d\u043e\u0435 \u043d\u0435\u0431\u043e \u043f\u043b\u0430\u0447\u0435\u0442\u2665",icon:null,url_link:"http://muzlishko.ru/dl/2559918aa5e20",full_time:"3:50"},{id:"kwu3kzt2db",executor:"EA7",title:"\u0442\u0432\u043e\u044f \u043b\u044e\u0431\u043e\u0432\u044c \u044d\u0442\u043e \u0442\u0430\u043a \u043a\u0440\u0430\u0441\u0438\u0432\u043e",icon:"https://pp.userapi.com/c637323/v637323100/60738/h4x2-v6SRSw.jpg",url_link:"https://uzimusic.ru/mp3/9150800/Sergejj_Lazarev_-_Tak_Krasivo(uzimusic.ru).mp3",full_time:"3:50"},{id:"r53ht09e21",executor:"Manowar",title:"The Gods Made Heavy Metal",icon:null,url_link:"https://uzimusic.ru/mp3/5090528/Manowar_-_The_Gods_Made_Heavy_Metal(uzimusic.ru).mp3",full_time:"3:50"},{id:"11b3l37izf",executor:"Powerwolf",title:"Die, Die, Crucified",icon:"https://pp.userapi.com/c847018/v847018199/9276b/nnsVy6Qk_Ek.jpg",url_link:"http://dl1.mp3party.net/download/186731",full_time:"3:50"},{id:"x50g14r080",executor:"Smash Into Pieces",title:"Higher",icon:"https://pp.userapi.com/c841621/v841621830/1ba8d/Zna-fMYkj1w.jpg",url_link:"http://dl5.mp3party.net/download/7103519",full_time:"3:50"},{id:"wppxu3dx63",executor:"Kevin Rudolf Ft. Flo-Rida",title:"You Make The Rain Fall",icon:"https://pp.userapi.com/c836537/v836537446/467cc/m-Vxsr-ACp8.jpg",url_link:"http://megapesni.com/get/ep2PdjAfcGudXXExaK_w4A/1541115253/15f359f0/Kevin_Rudolf_feat._Flo_Rida___You_Make_The_Rain_Fall.mp3",full_time:"3:50"}],B=Object(U.b)({musics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case b:return e.filter(function(e){return e.id!==a.id});case O:return Object(W.a)({},e,{payload:a})}return e},curentElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H[5],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case _:return a.element}return e},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return a.search}return e},noveltySongs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case"exemple":return e}return e}}),F=Object(U.c)(B);window.store=F;var G=F;var Y=function(){return r.a.createElement(h.a,{store:G},r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.f3c5fdb2.chunk.js.map