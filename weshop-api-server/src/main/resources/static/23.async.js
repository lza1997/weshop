(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{OTy5:function(e,a,t){"use strict";var l=t("TqRt"),u=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("/zsF");var r=l(t("PArb"));t("+L6B");var d=l(t("2/Rp"));t("5NDa");var n=l(t("5rEg")),f=l(t("pVnL")),c=l(t("lwsE")),m=l(t("W8MJ")),i=l(t("a1gu")),s=l(t("Nsbk")),o=l(t("7W2i"));t("y8nQ");var p=l(t("Vl3Y"));t("OaEy");var E,v,y,h=l(t("2fM7")),b=u(t("q1tI")),g=t("MuoO"),w=l(t("usdK")),k=l(t("7GcH")),q=h.default.Option,x={labelCol:{span:5},wrapperCol:{span:19}},C=(E=(0,g.connect)(function(e){var a=e.form;return{data:a.step}}),v=p.default.create(),E(y=v(y=function(e){function a(){return(0,c.default)(this,a),(0,i.default)(this,(0,s.default)(a).apply(this,arguments))}return(0,o.default)(a,e),(0,m.default)(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.dispatch,l=e.data,u=a.getFieldDecorator,c=a.validateFields,m=function(){c(function(e,a){e||(t({type:"form/saveStepFormData",payload:a}),w.default.push("/form/step-form/confirm"))})};return b.default.createElement(b.Fragment,null,b.default.createElement(p.default,{layout:"horizontal",className:k.default.stepForm,hideRequiredMark:!0},b.default.createElement(p.default.Item,(0,f.default)({},x,{label:"\u4ed8\u6b3e\u8d26\u6237"}),u("payAccount",{initialValue:l.payAccount,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed8\u6b3e\u8d26\u6237"}]})(b.default.createElement(h.default,{placeholder:"test@example.com"},b.default.createElement(q,{value:"ant-design@alipay.com"},"ant-design@alipay.com")))),b.default.createElement(p.default.Item,(0,f.default)({},x,{label:"\u6536\u6b3e\u8d26\u6237"}),b.default.createElement(n.default.Group,{compact:!0},b.default.createElement(h.default,{defaultValue:"alipay",style:{width:100}},b.default.createElement(q,{value:"alipay"},"\u652f\u4ed8\u5b9d"),b.default.createElement(q,{value:"bank"},"\u94f6\u884c\u8d26\u6237")),u("receiverAccount",{initialValue:l.receiverAccount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u8d26\u6237"},{type:"email",message:"\u8d26\u6237\u540d\u5e94\u4e3a\u90ae\u7bb1\u683c\u5f0f"}]})(b.default.createElement(n.default,{style:{width:"calc(100% - 100px)"},placeholder:"test@example.com"})))),b.default.createElement(p.default.Item,(0,f.default)({},x,{label:"\u6536\u6b3e\u4eba\u59d3\u540d"}),u("receiverName",{initialValue:l.receiverName,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}]})(b.default.createElement(n.default,{placeholder:"\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d"}))),b.default.createElement(p.default.Item,(0,f.default)({},x,{label:"\u8f6c\u8d26\u91d1\u989d"}),u("amount",{initialValue:l.amount,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8f6c\u8d26\u91d1\u989d"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8bf7\u8f93\u5165\u5408\u6cd5\u91d1\u989d\u6570\u5b57"}]})(b.default.createElement(n.default,{prefix:"\uffe5",placeholder:"\u8bf7\u8f93\u5165\u91d1\u989d"}))),b.default.createElement(p.default.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:x.wrapperCol.span,offset:x.labelCol.span}},label:""},b.default.createElement(d.default,{type:"primary",onClick:m},"\u4e0b\u4e00\u6b65"))),b.default.createElement(r.default,{style:{margin:"40px 0 24px"}}),b.default.createElement("div",{className:k.default.desc},b.default.createElement("h3",null,"\u8bf4\u660e"),b.default.createElement("h4",null,"\u8f6c\u8d26\u5230\u652f\u4ed8\u5b9d\u8d26\u6237"),b.default.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002"),b.default.createElement("h4",null,"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"),b.default.createElement("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002")))}}]),a}(b.default.PureComponent))||y)||y),V=C;a.default=V}}]);