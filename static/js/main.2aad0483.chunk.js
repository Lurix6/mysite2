(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(35)},22:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=(a(22),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),p=(a(24),a(14)),h=a.n(p),d=a(7),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.curentElement;e.musics;console.log(t.title);var a=t;return r.a.createElement("div",{className:"curentMusic"},r.a.createElement(h.a,{src:a.url_link,controls:!0,loop:!0}),r.a.createElement("div",{id:"about_current_music"},r.a.createElement("img",{src:null===a.icon?"assets/img/music/default_music_img.png":a.icon}),r.a.createElement("div",null,r.a.createElement("p",null,a.title),r.a.createElement("p",null,a.executor))))}}]),t}(r.a.Component),v=Object(d.b)(function(e){return{musics:e.musics,curentElement:e.curentElement}})(f),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={myMusic:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t={borderBottom:"2px solid #00AEB5"};return r.a.createElement("div",{className:"category"},r.a.createElement("p",{onClick:function(){e.props.updateCurentCategory(!0),e.setState({myMusic:!0})},style:this.state.myMusic?t:null},"\u041c\u043e\u044f \u041c\u0443\u0437\u0438\u043a\u0430"),r.a.createElement("p",{onClick:function(){e.props.updateCurentCategory(!1),e.setState({myMusic:!1})},style:this.state.myMusic?null:t},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0438"))}}]),t}(r.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.categoryMusic?r.a.createElement("div",{className:"about_list"},r.a.createElement("p",null,"\u0410\u0443\u0434\u0456\u043e\u0437\u0430\u043f\u0438\u0441\u0438"),r.a.createElement("p",null,"\u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c")):r.a.createElement("div",{className:"about_list"},r.a.createElement("p",{style:{fontSize:"18px"}},r.a.createElement("span",null,"1")," \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0456\u0434\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f")))}}]),t}(r.a.Component),y=(a(31),"DELETE_MUSIC_ELEMENT"),b="CHANGE_CARENT_MUSIC";var O,j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).decorateMainImg=function(e){e.opacity=.25;return r.a.createElement("img",{src:"assets/img/music/play(white).png",style:{position:"absolute",marginLeft:"12px",marginTop:"12px",width:"25px",height:"25px",zIndex:"2"},alt:""})},a.getImageBody=function(){a.props.element;return r.a.createElement("div",null,r.a.createElement("img",{src:"assets/img/music/magic.png",alt:""}),r.a.createElement("img",{src:"assets/img/music/del.png",alt:"",onClick:a.hendleDelete}),r.a.createElement("img",{src:"assets/img/music/more.png",alt:""}))},a.hendleDelete=function(){var e=a.props;(0,e.deleteMusicElement)(e.element.id),console.log("delete11111111111111111")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.element,a=e.hover,n=e.hoverOn,c=e.hoverOff,i={opacity:"1"};return r.a.createElement("div",{className:"root",onMouseEnter:n,onMouseLeave:c},r.a.createElement("div",null,a?this.decorateMainImg(i):null,r.a.createElement("img",{src:null===t.icon?"assets/img/music/default_music_img.png":t.icon,style:i,alt:""}),r.a.createElement("div",{className:"list_music_inf"},r.a.createElement("span",null,t.title),r.a.createElement("span",null,t.executor))),r.a.createElement("div",{className:"list_music_time"},a?this.getImageBody():t.full_time))}}]),t}(r.a.Component),k=Object(d.b)(null,{deleteMusicElement:function(e){return{type:y,payload:{id:e}}}})((O=j,function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1},a.hoverOn=function(){a.setState({hover:!0})},a.hoverOff=function(){a.setState({hover:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O,Object.assign({},this.props,this.state,{hoverOn:this.hoverOn,hoverOff:this.hoverOff}))}}]),t}(r.a.Component))),_=(a(33),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.listElements.map(function(t){return r.a.createElement("li",{onClick:function(){(0,e.props.setNewCarentMusic)(t)},key:t.id},r.a.createElement(k,{element:t}))});return r.a.createElement("div",{id:"list_music"},r.a.createElement("ul",null,t))}}]),t}(n.Component)),C=Object(d.b)(function(e){return{listElements:e.musics}},{setNewCarentMusic:function(e){return{type:b,payload:{element:e}}}})(_),M=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"playList"},r.a.createElement("h3",null,"Hi im playlist "))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={curentCategoryMyMusic:!0},a.updateCurentCategory=function(e){a.setState({curentCategoryMyMusic:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"musicBlock"},r.a.createElement(v,null),r.a.createElement("div",{className:"fullListMusic"},r.a.createElement(g,{updateCurentCategory:this.updateCurentCategory,defaultCurentCategory:this.curentCategoryMyMusic}),r.a.createElement("hr",null),r.a.createElement("div",{className:"showlist"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",id:"audio_search",placeholder:"\u041f\u043e\u0448\u0443\u043a \u0437\u0430 \u043c\u0443\u0437\u0438\u043a\u043e\u044e"}),r.a.createElement("button",{className:"button_search"})),r.a.createElement(E,{categoryMusic:this.state.curentCategoryMyMusic}),this.state.curentCategoryMyMusic?r.a.createElement(C,null):r.a.createElement(M,null))))}}]),t}(n.Component),x=a(8),N={id:"56c782f18990ecf954f6e027",executor:"Alan Walker",title:"Darkside (feat. Au/Ra and Tomine Harket)",icon:"https://pp.userapi.com/c834303/v834303863/18f3d4/zcxfviEegeU.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=480275022",full_time:"3:50"},A=[{id:"56c782f18990ecf954f6e027",executor:"Alan Walker",title:"Darkside (feat. Au/Ra and Tomine Harket)",icon:"https://pp.userapi.com/c834303/v834303863/18f3d4/zcxfviEegeU.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=480275022",full_time:"3:50"},{id:"56c782f17b4e0ba78c7ad717",executor:"Alan Walker",title:"New Day (Official Video) [New Song 2018]",icon:"https://pp.userapi.com/c639721/v639721949/5131e/-bf4PRxQZ40.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=473944656",full_time:"3:50"},{id:"56c782f1978fdf9a0100df52",executor:"Alan Walker",title:"The Spectre",icon:"https://pp.userapi.com/c639721/v639721949/5131e/-bf4PRxQZ40.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=309831866",full_time:"3:50"},{id:"56c782f1e17f4f9311dfaa2c",executor:"Alan Walker",title:"Fade [NCS Release]",icon:"https://pp.userapi.com/c639721/v639721949/5131e/-bf4PRxQZ40.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=177671751",full_time:"3:50"},{id:"56c782f197fe2bad471b3740",executor:"Simple Plan(Nightcore)",title:"Take My Hand",icon:"https://pp.userapi.com/c636816/v636816452/7517a/ksYp012gDwM.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=237941008",full_time:"3:50"},{id:"56c782f1a2c2c3268ddb3206",executor:"Shinedown(Nightcore)",title:"My Name [Wearing Me Out]",icon:"https://pp.userapi.com/c636816/v636816452/66e65/7-iDZ9DvGhA.jpg",url_link:"http://taimp3nhanh.com/stream/stream.php?id=172168066",full_time:"3:50"},{id:"56c782fghgfc2c3268ddb3206",executor:"Leader",title:"Warrior Inside",icon:null,url_link:"http://taimp3nhanh.com/stream/stream.php?id=209231331",full_time:"3:50"}],S=Object(x.b)({musics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case y:return e.filter(function(e){return e.id!==n.id})}return e},curentElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case b:return n.element}return e}}),D=Object(x.c)(S);window.store=D;var I=D;var W=function(){return r.a.createElement(d.a,{store:I},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.2aad0483.chunk.js.map