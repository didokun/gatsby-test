(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),n=r(156),s=r(138),l=(r(162),r(66),r(46),r(224),r(6)),o=r.n(l),d=r(4),p=r.n(d),u=(r(226),r(227),r(228)),c=r.n(u),f=r(161),w=r.n(f),m=function(e){function t(){var t;return(t=e.call(this)||this).state={currentYear:0},t}o()(t,e);var r=t.prototype;return r.selectYear=function(e){this.setState({currentYear:e})},r.render=function(){var e=this,t=w.a.keys(this.props.items).sort().reverse();return i.a.createElement("div",null,i.a.createElement(c.a,{dots:!1,infinite:!1,speed:500,slidesToShow:5,slidesToScroll:5},i.a.createElement("div",{key:"0"},i.a.createElement("button",{onClick:function(){return e.selectYear(0)}},"All")),t.map(function(t){return i.a.createElement("div",{key:t},i.a.createElement("button",{onClick:function(){return e.selectYear(t)}},t))})),i.a.createElement("div",null,t.map(function(t){return i.a.createElement("div",{key:t},e.state.currentYear===t||0===e.state.currentYear?i.a.createElement("div",{className:"animated fast bounceInUp"},i.a.createElement("h3",null,t),i.a.createElement("div",null,i.a.createElement(q,{items:e.props.items[t]}))):null)})))},t}(i.a.Component);m.propTypes={items:p.a.object.isRequired};var q=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this,t=Object.keys(this.props.items);return i.a.createElement(i.a.Fragment,null,t.map(function(t){return i.a.createElement("div",{key:t},i.a.createElement("h4",null,t),i.a.createElement("div",null,i.a.createElement("div",null,e.props.items[t].map(function(e){return i.a.createElement("div",{key:e.nid},i.a.createElement("a",{href:e.file,target:"_blank"},i.a.createElement("h5",null,e.title),i.a.createElement("span",null,e.date)))}))))}))},t}(i.a.Component);q.propTypes={items:p.a.object.isRequired};var h=r(150),y=r(151);t.default=function(e){var t=e.pageContext,r="en"==t.lang?h:y;return i.a.createElement(n.a,{context:t},i.a.createElement(s.f,null,i.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:t.node_content.body[0].value}})),r.length,i.a.createElement(m,{items:r}))}},150:function(e){e.exports={2014:{q2:[{nid:15,title:"Q3 2014 Earnings presentation",period:"q2",file:"http://www.parrot-corporate.local/sites/default/files/2018-12/q32017presentation.pdf",date:"2014-05-18",year:2014}]},2015:{q1:[{nid:14,title:"Slide show: Earnings",period:"q1",file:"http://www.parrot-corporate.local/sites/default/files/2018-12/activitesetresultats2017_0.pdf",date:"2015-05-01",year:2015}]},2016:{q3:[{nid:13,title:"2016 fourth-quarter earnings",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-12/activitesetresultatsdu3etrimestre2017.pdf",date:"2016-03-01",year:2016}]},2017:{q3:[{nid:9,title:" Q3 2017 presentation - Oddo BHF forum - January 11-12 update",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/presentationt32017_0.pdf",date:"2017-01-11",year:2017},{nid:8,title:"Q3 2017 presentation",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/q32017presentation.pdf",date:"2017-11-16",year:2017},{nid:7,title:"2017 third-quarter business and earnings",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/2017third-quarterbusinessandearnings.pdf",date:"2017-11-13",year:2017}]},2018:{q1:[{nid:12,title:"2018 first-quarter business and earnings",period:"q1",file:"http://www.parrot-corporate.local/sites/default/files/2018-12/2017businessandearnings.pdf",date:"2018-12-12",year:2018}],q2:[{nid:11,title:"2018 first-quarter business and earnings",period:"q2",file:"http://www.parrot-corporate.local/sites/default/files/2018-12/activitesetresultats2017.pdf",date:"2018-05-28",year:2018},{nid:10,title:" 2018 second-quarter business and earnings",period:"q2",file:"http://www.parrot-corporate.local/sites/default/files/2018-12/2017third-quarterbusinessandearnings.pdf",date:"2018-08-02",year:2018},{nid:5,title:" 2018 second-quarter business and earnings",period:"q2",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/2018second-quarterbusinessandearnings.pdf",date:"2018-08-02",year:2018}],q4:[{nid:6,title:"2017 business and earnings",period:"q4",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/2017businessandearnings.pdf",date:"2018-03-15",year:2018}],q3:[{nid:4,title:"2018 third-quarter business and earnings 23/11/2018 ",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/2018third-quarterbusinessandearnings.pdf",date:"2018-11-23",year:2018}]}}},151:function(e){e.exports={2017:{q3:[{nid:9,title:"Présentation T3 2017 - Oddo BHF forum - January 11-12 update",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/presentationt32017_0.pdf",date:"2017-01-11",year:2017},{nid:8,title:"Présentation T3 2017",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/presentationt32017.pdf",date:"2017-11-16",year:2017},{nid:7,title:"Activités et résultats du 3e trimestre 2017",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/activitesetresultatsdu3etrimestre2017.pdf",date:"2017-11-13",year:2017}]},2018:{q4:[{nid:6,title:"Activités et résultats 2017",period:"q4",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/activitesetresultats2017.pdf",date:"2018-03-15",year:2018}],q2:[{nid:5,title:"Activité et résultats du 2ème trimestre 2018",period:"q2",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/activiteetresultatsdu2emetrimestre2018.pdf",date:"2018-08-02",year:2018}],q3:[{nid:4,title:"Activité et résultats du 3ème trimestre",period:"q3",file:"http://www.parrot-corporate.local/sites/default/files/2018-11/activiteetresultatsdu3emetrimestre2018.pdf",date:"2018-11-23",year:2018}]}}},226:function(e,t,r){},227:function(e,t,r){}}]);
//# sourceMappingURL=component---src-templates-financial-publication-js-db5380635c7e2bd9e0cf.js.map