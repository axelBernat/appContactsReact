(this.webpackJsonpappcontacts=this.webpackJsonpappcontacts||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),o=n(7),l=n(8),i=n(10),j=n(9),m=(n(28),n(12)),u=n(0);function b(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"navbar navbar-dark bg-primary mb-3 py-0",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("a",{href:"/liste",className:"navbar-brand",children:"AppContacts"}),Object(u.jsxs)("ul",{className:"navbar-nav d-inline-block",children:[Object(u.jsx)("li",{className:"nav-item d-inline-block mr-2",children:Object(u.jsx)(m.b,{to:"/liste",className:"nav-link",children:"Accueil"})}),Object(u.jsx)("li",{className:"nav-item d-inline-block mr-2",children:Object(u.jsx)(m.b,{to:"/ajoute",className:"nav-link",children:"Ajouter"})}),Object(u.jsx)("li",{className:"nav-item d-inline-block mr-2",children:Object(u.jsx)(m.b,{to:"/apropos",className:"nav-link",children:"\xc0 propos"})})]})]})})})}var d=n(23),h=c.a.createContext(),p=function(e,t){switch(t.type){case"DELETE_CONTACT":return{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))};case"ADD_CONTACT":return{contacts:[t.payload].concat(Object(d.a)(e.contacts))};default:return e}},O=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:1,nom:"John Doe",email:"john@gmail.com",tel:"555-555-5555"},{id:2,nom:"John Doe",email:"john@gmail.com",tel:"555-555-5555"},{id:3,nom:"John Doe",email:"john@gmail.com",tel:"555-555-5555"}],dispatch:function(t){e.setState((function(e){return p(e,t)}))}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(h.Provider,{value:this.state,children:this.props.children})}}]),n}(a.Component),x=h.Consumer,f=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={show:!1},e.montrerContact=function(){e.setState({show:!e.state.show})},e.supprimeContact=function(e,t){t({type:"DELETE_CONTACT",payload:e})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)(x,{children:function(t){return Object(u.jsxs)("div",{className:"card card-body mb-3 text-center",children:[Object(u.jsxs)("h4",{children:[e.props.nom,"\xa0 ",Object(u.jsx)("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:e.montrerContact}),Object(u.jsx)("i",{onClick:function(){return e.supprimeContact(e.props.id,t.dispatch)},className:"fas fa-times",style:{color:"red",cursor:"pointer",float:"right"}})]}),e.state.show?Object(u.jsxs)("ul",{className:"card card-body mb-3",children:[Object(u.jsxs)("li",{className:"list-group-item",children:["Email: ",e.props.email]}),Object(u.jsxs)("li",{className:"list-group-item",children:["T\xe9l\xe9phone: ",e.props.tel]})]}):null]})}})}}]),n}(a.Component),v=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("Le composant est bien assembl\xe9")}},{key:"render",value:function(){return Object(u.jsx)(x,{children:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"display-4 my-4",children:"Nos contacts : "}),e.contacts.map((function(e){return Object(u.jsx)(f,{id:e.id,nom:e.nom,email:e.email,tel:e.tel},e.id)}))]})}})}}]),n}(a.Component),y=n(21),N=n(22),g=n.n(N),C=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={nom:"",email:"",tel:""},e.onChange=function(t){return e.setState(Object(y.a)({},t.target.name,t.target.value))},e.onSubmit=function(t,n){n.preventDefault();var a={id:g()(),nom:e.state.nom,email:e.state.email,tel:e.state.tel};if(""==a.nom||""==a.email||""==a.tel)return alert("Veuillez remplir correctement les champs.");t({type:"ADD_CONTACT",payload:a}),e.setState({nom:"",email:"",tel:""}),e.props.history.push("/")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)(x,{children:function(t){return Object(u.jsxs)("div",{className:"card mb-3",children:[Object(u.jsx)("div",{className:"card-header",children:"Ajouter un contact"}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{onSubmit:e.onSubmit.bind(e,t.dispatch),children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"nom",children:"Nom"}),Object(u.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Entrez un nom...",name:"nom",value:e.state.nom,onChange:e.onChange})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Entrez un Email...",name:"email",value:e.state.email,onChange:e.onChange})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"tel",children:"T\xe9l\xe9phone"}),Object(u.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"T\xe9l\xe9phone...",name:"tel",value:e.state.tel,onChange:e.onChange})]}),Object(u.jsx)("input",{type:"submit",value:"Ajouter un Contact",className:"btn btn-block btn-primary"})]})})]})}})}}]),n}(a.Component),k=n(2);function A(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"display-4",children:" Les details de mon app..."}),Object(u.jsx)("p",{className:"lead",children:"Version 1.0.0"})]})}function E(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"display-3",children:"Erreur 404 / page non trouv\xe9"})})}var T=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(O,{children:Object(u.jsx)(m.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{exact:!0,path:"/ajoute",component:C}),Object(u.jsx)(k.a,{exact:!0,path:"/liste",component:v}),Object(u.jsx)(k.a,{exact:!0,path:"/",component:v}),Object(u.jsx)(k.a,{exact:!0,path:"/apropos",component:A}),Object(u.jsx)(k.a,{component:E})]})})]})})})}}]),n}(a.Component);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1bcb91b9.chunk.js.map