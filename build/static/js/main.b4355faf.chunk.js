(this.webpackJsonpboardgameio=this.webpackJsonpboardgameio||[]).push([[0],{51:function(e,t,a){},76:function(e,t){},80:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),s=a(39),p=a(41),n=function(){for(var e=Array(12).fill({top:"",bottom:"",leftLower:"",rightLower:"",className:"",isEmpty:!0,isAnimated:!1}),t=0;t<e.length;t++)e[t]={top:"",bottom:"open",leftLower:"",rightLower:"",className:"board-space outer",isEmpty:!0,isAnimated:!1};return e[0]={top:"Startlandia",bottom:"~ rest here ~",leftLower:"",rightLower:"",className:"board-space outer startlandia",isEmpty:!1,isAnimated:!1},e[5]={top:"switch player",bottom:"\ud83e\udd8b",leftLower:"",rightLower:"",className:"board-space inner switch",isEmpty:!1,isAnimated:!1},e[6]={top:"roll dice",bottom:"*",leftLower:"",rightLower:"",className:"board-space inner dice",isEmpty:!1,isAnimated:!1},console.log(e),e},c={name:"startlandia",setup:function(){return{positions:{player1:0,player2:0},spaces:n()}},moves:{rollDie:function(e,t){e.dieRoll=t.random.D6(),e.spaces[6].bottom=e.dieRoll},switchPlayer:function(e,t){"0"===t.currentPlayer?e.spaces[5].bottom="\ud83e\udd84":e.spaces[5].bottom="\ud83e\udd8b",t.events.endTurn()},occupySpace:function(e,t,a){"0"===t.currentPlayer?e.positions.player1=a:e.positions.player2=a},fillSpace:function(e,t,a){e.spaces[a].isAnimated=!1,e.spaces[a].isEmpty=!1,e.spaces[a].top=prompt("action rule","draw a monster"),e.spaces[a].bottom=prompt("movement rule","2 spaces forward")}}},i=a(8),l=a(9),m=a(12),u=a(11),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.id,className:this.props.className},o.a.createElement("p",{className:"top-text"},this.props.spaceData.top),o.a.createElement("p",{className:"bottom-text"},this.props.spaceData.bottom),o.a.createElement("div",{className:"player-area"},o.a.createElement("h1",{className:"player"},this.props.player1),o.a.createElement("h1",{className:"player"},this.props.player2)))}}]),a}(r.Component),y=(a(51),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onClick=function(t){5===t?e.props.moves.switchPlayer():6===t?e.props.moves.rollDie():e.props.G.spaces[t].isEmpty?(e.props.moves.occupySpace(t),e.props.moves.fillSpace(t)):e.props.moves.occupySpace(t)},e}return Object(l.a)(a,[{key:"render",value:function(){for(var e=this,t=[],a=0;a<3;a++){for(var r=[],s=function(t){var s=4*a+t,p=e.props.G.spaces[s].className;p+=e.props.G.spaces[s].isEmpty?" empty":" filled",r.push(o.a.createElement("td",{key:s,onClick:function(){return e.onClick(s)}},o.a.createElement(d,{spaceNum:s,spaceData:e.props.G.spaces[s],className:p,player1:e.props.G.positions.player1===s?"\ud83e\udd8b":"",player2:e.props.G.positions.player2===s?"\ud83e\udd84":""})))},p=0;p<4;p++)s(p);t.push(o.a.createElement("tr",{key:a},r))}return o.a.createElement("div",{id:"board-container"},o.a.createElement("table",{id:"board"},o.a.createElement("tbody",null,t)))}}]),a}(o.a.Component)),b=Object(p.a)({game:c,board:y,debug:!1});Object(s.render)(o.a.createElement(b,null),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.b4355faf.chunk.js.map