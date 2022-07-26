/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/UI.js":
/*!************************!*\
  !*** ./frontend/UI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _services_TaskService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/TaskService.js */ \"./frontend/services/TaskService.js\");\n/* harmony import */ var _timeagoEsp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeagoEsp */ \"./frontend/timeagoEsp.js\");\n\r\n\r\n\r\nconst taskService = new _services_TaskService_js__WEBPACK_IMPORTED_MODULE_0__.TaskService();\r\n\r\nclass UI {\r\n    constructor() {}\r\n\r\n    async renderTasks() {\r\n        const tasks = await taskService.getTasks();\r\n        const container = document.getElementById('tasks');\r\n        container.innerHTML = '';\r\n        const taskContainer = document.createElement('div');\r\n        const taskCompletedContainer = document.createElement('div');\r\n        tasks.forEach(task => {\r\n            let content = task.completa == 1 ? taskCompletedContainer : taskContainer;\r\n            content.innerHTML += `\r\n                <div id=\"${task.id}\" class=\"card mb-3\" style=\"max-width: 36rem; width: 100%;\">\r\n                    <div class=\"card-body ${task.completa == 1 ? 'text-decoration-line-through' : ''}\">\r\n                        <h5 class=\"card-title\">${task.tarea}</h5>\r\n                        <h6 class=\"card-subtitle mb-2 text-muted\">Tarea creada: ${(0,_timeagoEsp__WEBPACK_IMPORTED_MODULE_1__.timeago)(task.fecha)}</h6>\r\n                        <p class=\"card-text\">${task.descripcion}</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <p class=\"text-end\">\r\n                            <button class=\"btn-edit btn btn-secondary\">Editar</button>\r\n                            <button class=\"btn-delete btn btn-danger\">Eliminar</button>\r\n                        </p>\r\n                        <div class=\"form-check form-check-reverse\">\r\n                            <label class=\"form-check-label\" for=\"completar\">\r\n                                Completar tarea\r\n                            </label>\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"1\" id=\"completar\" ${task.completa == 1 ? 'checked' : ''}>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            `;\r\n        });\r\n        container.appendChild(taskContainer);\r\n        container.appendChild(taskCompletedContainer);\r\n    }\r\n\r\n    async addTask(task) {\r\n        const response = await taskService.postTask(task);\r\n        this.showAlert(response.mensaje, 'success', 1500)\r\n        this.renderTasks();\r\n        document.getElementById(\"task-form\").reset();\r\n        document.getElementById(\"title\").focus();\r\n    }\r\n\r\n    async findOneTask(taskId) {\r\n        const taskFound = await taskService.getOneTask(taskId);\r\n        document.getElementById('id').value = taskFound.id;\r\n        document.getElementById('title').value = taskFound.tarea;\r\n        document.getElementById('description').value = taskFound.descripcion;\r\n        document.getElementById('estado').value = taskFound.completa;\r\n    }\r\n\r\n    async editTask(taskId, task) {\r\n        const response = await taskService.updateTask(taskId, task);\r\n        this.showAlert(response.mensaje, 'warning', 1500);\r\n        this.renderTasks();\r\n        document.getElementById(\"task-form\").reset();\r\n        document.getElementById(\"title\").focus();\r\n    }\r\n\r\n    async updateStateTask(taskId, state) {\r\n        const taskFound = await taskService.getOneTask(taskId);\r\n        const taskState = {\r\n            \"tarea\": taskFound.tarea,\r\n            \"descripcion\": taskFound.descripcion,\r\n            \"completa\": state\r\n        }\r\n        const response = await taskService.updateTask(taskId, taskState);\r\n        this.showAlert(response.mensaje, 'warning', 1500);\r\n        this.renderTasks();\r\n    }\r\n\r\n    async deleteTask(taskId) {\r\n        const response = await taskService.deleteTask(taskId);\r\n        this.showAlert(response.mensaje, 'danger', 1500)\r\n        this.renderTasks();\r\n    }\r\n\r\n    showAlert(message, color, seconds) {\r\n        const alert = document.createElement('div');\r\n        alert.className = `alert alert-${color} m-3 text-center`;\r\n        alert.style = \"width: 18rem;\"\r\n        alert.textContent = message;\r\n        const container = document.getElementById('message-container');\r\n        window.scrollTo(0, 0);\r\n        container.appendChild(alert);\r\n        setTimeout(() => {\r\n            document.querySelector(\".alert\").remove();\r\n        }, seconds)\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://crud-mysql-express/./frontend/UI.js?");

/***/ }),

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./frontend/UI.js\");\n__webpack_require__(/*! ./styles/style.css */ \"./frontend/styles/style.css\");\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI();\r\n  ui.renderTasks();\r\n});\r\n\r\nconst taskForm = document.getElementById('task-form');\r\n\r\ntaskForm.addEventListener('submit', e => {\r\n  e.preventDefault();\r\n  const id = document.getElementById('id');\r\n  const tarea = document.getElementById('title').value;\r\n  const descripcion = document.getElementById('description').value;\r\n  const completa = document.getElementById('estado').value; \r\n\r\n  const nuevaTarea = { \r\n    tarea,\r\n    descripcion,\r\n    completa\r\n  }\r\n\r\n  const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI();\r\n  if (id.value > 0) {\r\n    ui.editTask(id.value, nuevaTarea);\r\n    id.value = 0;\r\n  } else {\r\n    ui.addTask(nuevaTarea);\r\n  }\r\n  \r\n});\r\n\r\nconst taskContainer = document.getElementById('tasks');\r\ntaskContainer.addEventListener('click', e => {\r\n  const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI();\r\n  const taskId = e.target.parentElement.parentElement.parentElement.id;\r\n  if (e.target.className.includes('btn-delete')) {\r\n    ui.deleteTask(taskId);\r\n  } else if (e.target.className.includes('btn-edit')) {\r\n    ui.findOneTask(taskId);\r\n    ui.showAlert('Editando tarea', 'info', 1500)\r\n  } else if (e.target.id = 'completar') {\r\n    if (e.target.checked == true) {\r\n      ui.updateStateTask(taskId, 1)\r\n    } else {\r\n      ui.updateStateTask(taskId, 0)\r\n    }\r\n  }\r\n});\n\n//# sourceURL=webpack://crud-mysql-express/./frontend/app.js?");

/***/ }),

/***/ "./frontend/services/TaskService.js":
/*!******************************************!*\
  !*** ./frontend/services/TaskService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskService\": () => (/* binding */ TaskService)\n/* harmony export */ });\nclass TaskService {\r\n    constructor () {\r\n        this.URI = 'http://localhost:3000/api/tasks';\r\n    }\r\n\r\n    async getTasks() {\r\n        try {\r\n            const response = await fetch(this.URI);\r\n            const tasks = await response.json();\r\n            return tasks;\r\n        } catch (err) {\r\n            console.log(err);\r\n        }\r\n    }\r\n\r\n    async getOneTask(taskId) {\r\n        try {\r\n            const response = await fetch(`${this.URI}/${taskId}`, {\r\n                method: 'GET'\r\n            });\r\n            const task = await response.json();\r\n            return task[0];\r\n        } catch (err) {\r\n            console.log(err);\r\n        }\r\n    }\r\n\r\n    async postTask(task) {\r\n        try {\r\n            const response = await fetch(this.URI, {\r\n                headers: {\r\n                    'content-type': 'application/json'\r\n                },\r\n                method: 'POST',\r\n                body: JSON.stringify(task)\r\n            });\r\n            const newTask = await response.json();\r\n            return newTask;\r\n        } catch(err) {\r\n            console.log(err);\r\n        }\r\n    }\r\n\r\n    async updateTask(taskId, task) {\r\n        try {\r\n            const response = await fetch(`${this.URI}/${taskId}`, {\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                },\r\n                method: 'PUT',\r\n                body: JSON.stringify(task)\r\n            });\r\n            const taskUpdated = response.json();\r\n            return taskUpdated;\r\n        } catch (err) {\r\n            console.log(err)\r\n        }\r\n    }\r\n\r\n    async deleteTask(taskId) {\r\n        try {\r\n            const response = await fetch(`${this.URI}/${taskId}`, {\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                },\r\n                method: 'DELETE'\r\n            });\r\n            const taskDeleted = response.json();\r\n            return taskDeleted;\r\n        } catch(err) {\r\n            console.log(err);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://crud-mysql-express/./frontend/services/TaskService.js?");

/***/ }),

/***/ "./frontend/timeagoEsp.js":
/*!********************************!*\
  !*** ./frontend/timeagoEsp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeago\": () => (/* binding */ timeago)\n/* harmony export */ });\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n\r\n\r\n(0,timeago_js__WEBPACK_IMPORTED_MODULE_0__.register)('es_ES', (number, index, total_sec) => [\r\n    ['justo ahora', 'ahora mismo'],\r\n    ['hace %s segundos', 'en %s segundos'],\r\n    ['hace 1 minuto', 'en 1 minuto'],\r\n    ['hace %s minutos', 'en %s minutos'],\r\n    ['hace 1 hora', 'en 1 hora'],\r\n    ['hace %s horas', 'in %s horas'],\r\n    ['hace 1 dia', 'en 1 dia'],\r\n    ['hace %s dias', 'en %s dias'],\r\n    ['hace 1 semana', 'en 1 semana'],\r\n    ['hace %s semanas', 'en %s semanas'],\r\n    ['1 mes', 'en 1 mes'],\r\n    ['hace %s meses', 'en %s meses'],\r\n    ['hace 1 año', 'en 1 año'],\r\n    ['hace %s años', 'en %s años']\r\n][index]);\r\n\r\nconst timeago = timestamp => (0,timeago_js__WEBPACK_IMPORTED_MODULE_0__.format)(timestamp, 'es_ES');\n\n//# sourceURL=webpack://crud-mysql-express/./frontend/timeagoEsp.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/styles/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background-color: #f3f3f3;\\r\\n}\\r\\n\\r\\n#message-container {\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://crud-mysql-express/./frontend/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./frontend/styles/style.css":
/*!***********************************!*\
  !*** ./frontend/styles/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./frontend/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://crud-mysql-express/./frontend/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/esm/format.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/esm/utils/date.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n\n\n/**\n * format a TDate into string\n * @param date\n * @param locale\n * @param opts\n */\nvar format = function (date, locale, opts) {\n    // diff seconds\n    var sec = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.diffSec)(date, opts && opts.relativeDate);\n    // format it with locale\n    return (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatDiff)(sec, (0,_register__WEBPACK_IMPORTED_MODULE_1__.getLocale)(locale));\n};\n//# sourceMappingURL=format.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/format.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancel\": () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.cancel),\n/* harmony export */   \"format\": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.format),\n/* harmony export */   \"register\": () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__.register),\n/* harmony export */   \"render\": () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.render)\n/* harmony export */ });\n/* harmony import */ var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en_US */ \"./node_modules/timeago.js/esm/lang/en_US.js\");\n/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/zh_CN */ \"./node_modules/timeago.js/esm/lang/zh_CN.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ \"./node_modules/timeago.js/esm/format.js\");\n/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime */ \"./node_modules/timeago.js/esm/realtime.js\");\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\n\n\n\n(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/index.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/en_US.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {\n    if (idx === 0)\n        return ['just now', 'right now'];\n    var unit = EN_US[Math.floor(idx / 2)];\n    if (diff > 1)\n        unit += 's';\n    return [diff + \" \" + unit + \" ago\", \"in \" + diff + \" \" + unit];\n}\n//# sourceMappingURL=en_US.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/lang/en_US.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/zh_CN.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {\n    if (idx === 0)\n        return ['刚刚', '片刻后'];\n    var unit = ZH_CN[~~(idx / 2)];\n    return [diff + \" \" + unit + \"\\u524D\", diff + \" \" + unit + \"\\u540E\"];\n}\n//# sourceMappingURL=zh_CN.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/lang/zh_CN.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/realtime.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancel\": () => (/* binding */ cancel),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ \"./node_modules/timeago.js/esm/utils/dom.js\");\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/esm/utils/date.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n\n\n\n// all realtime timer\nvar TIMER_POOL = {};\n/**\n * clear a timer from pool\n * @param tid\n */\nvar clear = function (tid) {\n    clearTimeout(tid);\n    delete TIMER_POOL[tid];\n};\n// run with timer(setTimeout)\nfunction run(node, date, localeFunc, opts) {\n    // clear the node's exist timer\n    clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));\n    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;\n    // get diff seconds\n    var diff = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.diffSec)(date, relativeDate);\n    // render\n    node.innerText = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.formatDiff)(diff, localeFunc);\n    var tid = setTimeout(function () {\n        run(node, date, localeFunc, opts);\n    }, Math.min(Math.max((0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.nextInterval)(diff), minInterval || 1) * 1000, 0x7fffffff));\n    // there is no need to save node in object. Just save the key\n    TIMER_POOL[tid] = 0;\n    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.setTimerId)(node, tid);\n}\n/**\n * cancel a timer or all timers\n * @param node - node hosting the time string\n */\nfunction cancel(node) {\n    // cancel one\n    if (node)\n        clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));\n    // cancel all\n    // @ts-ignore\n    else\n        Object.keys(TIMER_POOL).forEach(clear);\n}\n/**\n * render a dom realtime\n * @param nodes\n * @param locale\n * @param opts\n */\nfunction render(nodes, locale, opts) {\n    // by .length\n    // @ts-ignore\n    var nodeList = nodes.length ? nodes : [nodes];\n    nodeList.forEach(function (node) {\n        run(node, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDateAttribute)(node), (0,_register__WEBPACK_IMPORTED_MODULE_2__.getLocale)(locale), opts || {});\n    });\n    return nodeList;\n}\n//# sourceMappingURL=realtime.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/realtime.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/register.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/register.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocale\": () => (/* binding */ getLocale),\n/* harmony export */   \"register\": () => (/* binding */ register)\n/* harmony export */ });\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\n/**\n * All supported locales\n */\nvar Locales = {};\n/**\n * register a locale\n * @param locale\n * @param func\n */\nvar register = function (locale, func) {\n    Locales[locale] = func;\n};\n/**\n * get a locale, default is en_US\n * @param locale\n * @returns {*}\n */\nvar getLocale = function (locale) {\n    return Locales[locale] || Locales['en_US'];\n};\n//# sourceMappingURL=register.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/register.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/date.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"diffSec\": () => (/* binding */ diffSec),\n/* harmony export */   \"formatDiff\": () => (/* binding */ formatDiff),\n/* harmony export */   \"nextInterval\": () => (/* binding */ nextInterval),\n/* harmony export */   \"toDate\": () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\nvar SEC_ARRAY = [\n    60,\n    60,\n    24,\n    7,\n    365 / 7 / 12,\n    12,\n];\n/**\n * format Date / string / timestamp to timestamp\n * @param input\n * @returns {*}\n */\nfunction toDate(input) {\n    if (input instanceof Date)\n        return input;\n    // @ts-ignore\n    if (!isNaN(input) || /^\\d+$/.test(input))\n        return new Date(parseInt(input));\n    input = (input || '')\n        // @ts-ignore\n        .trim()\n        .replace(/\\.\\d+/, '') // remove milliseconds\n        .replace(/-/, '/')\n        .replace(/-/, '/')\n        .replace(/(\\d)T(\\d)/, '$1 $2')\n        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC\n        .replace(/([+-]\\d\\d):?(\\d\\d)/, ' $1$2'); // -04:00 -> -0400\n    return new Date(input);\n}\n/**\n * format the diff second to *** time ago, with setting locale\n * @param diff\n * @param localeFunc\n * @returns\n */\nfunction formatDiff(diff, localeFunc) {\n    /**\n     * if locale is not exist, use defaultLocale.\n     * if defaultLocale is not exist, use build-in `en`.\n     * be sure of no error when locale is not exist.\n     *\n     * If `time in`, then 1\n     * If `time ago`, then 0\n     */\n    var agoIn = diff < 0 ? 1 : 0;\n    /**\n     * Get absolute value of number (|diff| is non-negative) value of x\n     * |diff| = diff if diff is positive\n     * |diff| = -diff if diff is negative\n     * |0| = 0\n     */\n    diff = Math.abs(diff);\n    /**\n     * Time in seconds\n     */\n    var totalSec = diff;\n    /**\n     * Unit of time\n     */\n    var idx = 0;\n    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {\n        diff /= SEC_ARRAY[idx];\n    }\n    /**\n     * Math.floor() is alternative of ~~\n     *\n     * The differences and bugs:\n     * Math.floor(3.7) -> 4 but ~~3.7 -> 3\n     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552\n     *\n     * More information about the performance of algebraic:\n     * https://www.youtube.com/watch?v=65-RbBwZQdU\n     */\n    diff = Math.floor(diff);\n    idx *= 2;\n    if (diff > (idx === 0 ? 9 : 1))\n        idx += 1;\n    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());\n}\n/**\n * calculate the diff second between date to be formatted an now date.\n * @param date\n * @param relativeDate\n * @returns {number}\n */\nfunction diffSec(date, relativeDate) {\n    var relDate = relativeDate ? toDate(relativeDate) : new Date();\n    return (+relDate - +toDate(date)) / 1000;\n}\n/**\n * nextInterval: calculate the next interval time.\n * - diff: the diff sec between now and date to be formatted.\n *\n * What's the meaning?\n * diff = 61 then return 59\n * diff = 3601 (an hour + 1 second), then return 3599\n * make the interval with high performance.\n **/\nfunction nextInterval(diff) {\n    var rst = 1, i = 0, d = Math.abs(diff);\n    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {\n        diff /= SEC_ARRAY[i];\n        rst *= SEC_ARRAY[i];\n    }\n    d = d % rst;\n    d = d ? rst - d : rst;\n    return Math.ceil(d);\n}\n//# sourceMappingURL=date.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/utils/date.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDateAttribute\": () => (/* binding */ getDateAttribute),\n/* harmony export */   \"getTimerId\": () => (/* binding */ getTimerId),\n/* harmony export */   \"setTimerId\": () => (/* binding */ setTimerId)\n/* harmony export */ });\nvar ATTR_TIMEAGO_TID = 'timeago-id';\n/**\n * get the datetime attribute, `datetime` are supported.\n * @param node\n * @returns {*}\n */\nfunction getDateAttribute(node) {\n    return node.getAttribute('datetime');\n}\n/**\n * set the node attribute, native DOM\n * @param node\n * @param timerId\n * @returns {*}\n */\nfunction setTimerId(node, timerId) {\n    // @ts-ignore\n    node.setAttribute(ATTR_TIMEAGO_TID, timerId);\n}\n/**\n * get the timer id\n * @param node\n */\nfunction getTimerId(node) {\n    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));\n}\n//# sourceMappingURL=dom.js.map\n\n//# sourceURL=webpack://crud-mysql-express/./node_modules/timeago.js/esm/utils/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/app.js");
/******/ 	
/******/ })()
;