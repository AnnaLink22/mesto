(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._likesNumber=e.likes.length,this._likes=e.likes,this._id=e._id,this._userId=r,this._api=n,this._ownerId=e.ownerId,this._cardSelector=o,this._handleCardClick=i,this._handleDeleteIconClick=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_handleLike",value:function(){var e=this;this._api.addLike(this._id).then((function(t){e.updateLikesNumber(t.likes.length)})).catch((function(e){console.log(e)}))}},{key:"_deleteLike",value:function(){var e=this;this._api.deleteLike(this._id).then((function(t){e.updateLikesNumber(t.likes.length)})).catch((function(e){console.log(e)}))}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".card__like-button");t.addEventListener("click",(function(){t.classList.contains("card__like-button_liked")?(e._deleteLike(),t.classList.remove("card__like-button_liked")):(e._handleLike(),t.classList.add("card__like-button_liked"))})),this._element.querySelector(".card__delete").addEventListener("click",(function(){e._handleDeleteIconClick(e._data)})),this._element.querySelector(".card__pic").addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})}))}},{key:"_addDeleteIcon",value:function(){this._ownerId===this._userId&&this._element.querySelector(".card__delete").classList.add("card__delete_active")}},{key:"updateLikes",value:function(){var e=this;this._likes.map((function(e){return{ownersId:e._id}})).forEach((function(t){t.ownersId===e._userId&&e._element.querySelector(".card__like-button").classList.add("card__like-button_liked")}))}},{key:"updateLikesNumber",value:function(e){this._element.querySelector(".card__like-numbers").textContent=e}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._addDeleteIcon(),this._setEventListeners(),this._element.querySelector(".card__name").textContent=this._name,this._elementPic=this._element.querySelector(".card__pic"),this._elementPic.alt=this._name,this._elementPic.src=this._link,this.updateLikesNumber(this._likesNumber),this.updateLikes(),this._element}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showError",(function(e,t){var n=o._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.textContent=t,n.classList.add(o._errorClass)})),r(this,"_hideError",(function(e){var t=o._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.classList.remove(o._errorClass),t.textContent=""})),r(this,"_checkInputValidity",(function(e){o._hasInvalidInput()?o._showError(e,e.validationMessage):o._hideError(e)})),r(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),r(this,"_toggleButtonState",(function(){o._hasInvalidInput()?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.setAttribute("disabled",!0)):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.removeAttribute("disabled"))})),r(this,"_setEventListeners",(function(){o._toggleButtonState(),o._formElement.addEventListener("reset",(function(){o._inputList.forEach((function(e){o._hideError(e),o._toggleButtonState()}))})),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))}))})),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,o;return t=e,(o=[{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._toggleButtonState()})),this._setEventListeners()}}])&&n(t.prototype,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){t?this._container.prepend(e):this._container.append(e)}}])&&i(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(e){u._name.textContent=e.name,u._job.textContent=e.about,u._avatar.src=e.avatar},(o="setUserInfo")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._name=document.querySelector(t),this._job=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}}])&&a(t.prototype,n),e}(),s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},l=document.querySelector(".profile__edit-button"),f=document.querySelector(".profile__add-button"),p=document.querySelector(".popup__form_type_info"),_=p.querySelector(".popup__input_text_name"),h=p.querySelector(".popup__input_text_job"),d=document.querySelector(".popup__form_type_new-pic"),y=document.querySelector(".popup__form_type_avatar"),m=document.querySelector(".profile__container");function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-btn"))&&e.closePopup()}))}}])&&v(t.prototype,n),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?L(e):t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n,r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(e){n._submitButton.textContent=e?"Сохранение...":n._text},(o="renderLoading")in(r=L(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._submitHandler=t,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._popup.querySelector(".popup__button"),n._text=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;E(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues()),e.closePopup()}))}},{key:"closePopup",value:function(){this._form.reset(),E(C(u.prototype),"closePopup",this).call(this)}}])&&g(t.prototype,n),u}(b);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__pic-opened"),t._popupSubtitle=t._popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._popupImg.src=t,this._popupImg.alt=e,this._popupSubtitle.textContent=e,I(T(u.prototype),"openPopup",this).call(this)}}])&&j(t.prototype,n),u}(b);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;N(U(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(),e.closePopup()}))}},{key:"setSubmitCallback",value:function(e){this._submitHandler=e}},{key:"openPopup",value:function(e){this._data=e,N(U(u.prototype),"openPopup",this).call(this)}}])&&B(t.prototype,n),u}(b);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},z=null,M=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(G)}},{key:"saveUserInfo",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(G)}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(G)}},{key:"saveNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(G)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(G)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(G)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(G)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(G)}}])&&J(t.prototype,n),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-20/",headers:{authorization:"80be98b0-1ace-488a-8aba-b244c003f55b","Content-Type":"application/json"}}),F=new c(".profile__name",".profile__job",".profile__pic");M.getInfo().then((function(e){return{name:e.name,about:e.about,avatar:e.avatar,_id:e._id}})).then((function(e){z=e._id,F.setUserInfo(e)})).catch((function(e){console.log(e)}));var K=new P(".popup_type_info",(function(e){K.renderLoading(!0),setTimeout((function(){M.saveUserInfo(e.name,e.job).then((function(e){F.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){K.renderLoading(!1)}))}),300)}));K.setEventListeners();var Q=new u((function(e){Q.addItem(W(e))}),".card-grid");M.getAllCards().then((function(e){var t=e.map((function(e){return{name:e.name,link:e.link,_id:e._id,likes:e.likes,ownerId:e.owner._id}}));Q.renderItems(t)})).catch((function(e){console.log(e)}));var W=function(e){var n=new t(e,M,z,".card__template",(function(e){$(e)}),(function(e){Z.setSubmitCallback((function(){M.deleteCard(e._id).then((function(){n.removeCard()})).catch((function(e){console.log(e)}))})),Z.openPopup(e)}));return n.generateCard()},X=new P(".popup_type_avatar",(function(e){X.renderLoading(!0),setTimeout((function(){M.editAvatar(e.avatar).then((function(e){F.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally((function(){X.renderLoading(!1)}))}),300)}));X.setEventListeners(),m.addEventListener("click",(function(){X.openPopup()}));var Y=new P(".popup_type_new-pic",(function(e){Y.renderLoading(!0),setTimeout((function(){M.saveNewCard(e).then((function(e){return{name:e.name,link:e.link,_id:e._id,likes:e.likes,ownerId:e.owner._id}})).then((function(e){Q.addItem(W(e),!0)})).catch((function(e){return console.log(e)})).finally((function(){Y.renderLoading(!1)}))}),300)}));Y.setEventListeners(),l.addEventListener("click",(function(){var e=F.getUserInfo();_.value=e.name,h.value=e.job,K.openPopup()}));var Z=new H(".popup_type_submit");Z.setEventListeners();var $=function(e){ee.openPopup(e.name,e.link)},ee=new x(".popup_type_pic");ee.setEventListeners(),f.addEventListener("click",(function(){Y.openPopup()}));var te=new o(s,p),ne=new o(s,d),re=new o(s,y);te.enableValidation(),ne.enableValidation(),re.enableValidation()})();