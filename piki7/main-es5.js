(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+E9W":
    /*!******************************************!*\
      !*** ./src/app/services/yard.service.ts ***!
      \******************************************/

    /*! exports provided: YardService */

    /***/
    function E9W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YardService", function () {
        return YardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var YardService = /*#__PURE__*/function () {
        function YardService(http, config) {
          _classCallCheck(this, YardService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url + '/patios';
        }

        _createClass(YardService, [{
          key: "getAllReport",
          value: function getAllReport() {
            return this.http.get("".concat(this.URL_API, "/getAllReport"));
          }
        }]);

        return YardService;
      }();

      YardService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      YardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], YardService);
      /***/
    },

    /***/
    "+ZOP":
    /*!*****************************************************!*\
      !*** ./src/app/pages/reporte/reporte.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ZOP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "/Elm":
    /*!****************************************************!*\
      !*** ./src/app/pages/reporte/reporte.component.ts ***!
      \****************************************************/

    /*! exports provided: ReporteComponent */

    /***/
    function Elm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReporteComponent", function () {
        return ReporteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reporte_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reporte.component.html */
      "e3N7");
      /* harmony import */


      var _reporte_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reporte.component.css */
      "+ZOP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_services_shift_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/services/shift.service */
      "GnyV");
      /* harmony import */


      var app_templates_tables_table_reportes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/templates/tables/table-reportes */
      "f4Bv");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var ReporteComponent = /*#__PURE__*/function () {
        function ReporteComponent(shiftService, spinner) {
          _classCallCheck(this, ReporteComponent);

          this.shiftService = shiftService;
          this.spinner = spinner;
          this.campos = [];
          this.turnos = [];
          this.info = [];
          this.filterCampos = {};
          this.showTable = false;
        }

        _createClass(ReporteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "filter",
          value: function filter(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var formFilter;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.spinner.show();
                      this.turnos = [];
                      this.campos = [];
                      formFilter = Object.assign({}, form);
                      form['campos'].forEach(function (campo) {
                        return _this.campos.push(campo.item_text);
                      });
                      formFilter['campos'] = this.campos.slice();
                      this.shiftService.getFilter(formFilter).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var i, j, _yield$Object, arrayTurnos, info;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!res.length) {
                                    _context.next = 14;
                                    break;
                                  }

                                  i = this.campos.indexOf('CONTENEDORES');
                                  if (i !== -1) this.campos.splice(i, 1, 'CONTENEDOR I', 'CONTENEDOR II');
                                  j = this.campos.indexOf('TIPO/TAMAÑO');
                                  if (j !== -1) this.campos.splice(j, 1, 'TIPO/TAMAÑO I', 'TIPO/TAMAÑO II');
                                  _context.next = 7;
                                  return Object(app_templates_tables_table_reportes__WEBPACK_IMPORTED_MODULE_5__["tableReportesTemplate"])(res, formFilter['campos']);

                                case 7:
                                  _yield$Object = _context.sent;
                                  arrayTurnos = _yield$Object.arrayTurnos;
                                  info = _yield$Object.info;
                                  this.filterCampos = Object.assign({}, form);
                                  delete this.filterCampos['campos'];
                                  this.info = info;
                                  this.turnos = arrayTurnos;

                                case 14:
                                  this.showTable = true;
                                  this.spinner.hide();

                                case 16:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, function (error) {
                        console.log('error: ', error);
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ReporteComponent;
      }();

      ReporteComponent.ctorParameters = function () {
        return [{
          type: app_services_shift_service__WEBPACK_IMPORTED_MODULE_4__["ShiftService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }];
      };

      ReporteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reporte',
        template: _raw_loader_reporte_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reporte_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_shift_service__WEBPACK_IMPORTED_MODULE_4__["ShiftService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])], ReporteComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/andycaicedo/Documents/angular/piki7/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0RDr":
    /*!*********************************************!*\
      !*** ./src/app/services/gestion.service.ts ***!
      \*********************************************/

    /*! exports provided: GestionService */

    /***/
    function RDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionService", function () {
        return GestionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var GestionService = /*#__PURE__*/function () {
        function GestionService(http, config) {
          _classCallCheck(this, GestionService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url;
        }

        _createClass(GestionService, [{
          key: "getInfo",
          value: function getInfo() {
            return this.http.get("".concat(this.URL_API, "/management"));
          }
        }, {
          key: "getCanceled",
          value: function getCanceled() {
            return this.http.get("".concat(this.URL_API, "/management/canceled"));
          }
        }, {
          key: "getShift",
          value: function getShift(id) {
            return this.http.get("".concat(this.URL_API, "/management/").concat(id));
          }
        }, {
          key: "createObvs",
          value: function createObvs(data, id) {
            return this.http.put("".concat(this.URL_API, "/management/save/").concat(id), data);
          }
        }]);

        return GestionService;
      }();

      GestionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      GestionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], GestionService);
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "1BMa":
    /*!*********************************!*\
      !*** ./src/app/config/index.js ***!
      \*********************************/

    /*! exports provided: config */

    /***/
    function BMa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });

      var config = {
        url: 'http://192.241.155.75:3000/api'
      };
      /***/
    },

    /***/
    2:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2Ta4":
    /*!****************************************************!*\
      !*** ./src/app/pages/company/company.component.ts ***!
      \****************************************************/

    /*! exports provided: CompanyComponent */

    /***/
    function Ta4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
        return CompanyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_company_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./company.component.html */
      "tsTQ");
      /* harmony import */


      var _company_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company.component.css */
      "lTHr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_services_conpany_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/services/conpany.service */
      "Bfw/");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CompanyComponent = /*#__PURE__*/function () {
        function CompanyComponent(companyService, modalService, formBuilder) {
          _classCallCheck(this, CompanyComponent);

          this.companyService = companyService;
          this.modalService = modalService;
          this.formBuilder = formBuilder;
          this.companies = [];
          this.Submitted = false;
          this.update = false;
          this.config = {
            itemsPerPage: 5,
            currentPage: 1
          };
          this.newCompanyForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(CompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCompany();
          }
        }, {
          key: "cf",
          get: function get() {
            return this.newCompanyForm.controls;
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(number) {
            this.config.currentPage = number;
          }
        }, {
          key: "onPageBoundsCorrection",
          value: function onPageBoundsCorrection(number) {
            this.config.currentPage = number;
          }
        }, {
          key: "open",
          value: function open(content) {
            var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var name = arguments.length > 2 ? arguments[2] : undefined;
            var id = arguments.length > 3 ? arguments[3] : undefined;
            console.log(name);
            this.update = update;
            this.newCompanyForm.controls.name.setValue(name);
            this.idUser = id;
            this.modalService.open(content);
          }
        }, {
          key: "getCompany",
          value: function getCompany() {
            var _this2 = this;

            this.companyService.getEmpresas().subscribe(function (res) {
              _this2.companies = res;
              console.log(res);
            });
          }
        }, {
          key: "newCompany",
          value: function newCompany() {
            var _this3 = this;

            try {
              this.getCompany();

              if (this.update) {
                console.log(this.newCompanyForm.value);
                this.companyService.updateCompany(this.idUser, this.newCompanyForm.value).subscribe(function (res) {
                  _this3.modalService.dismissAll();

                  _this3.getCompany();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    icon: 'success',
                    title: 'Actualizacion exitosa',
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this3.newCompanyForm.reset();
                });
              } else {
                this.companyService.newCompany(this.newCompanyForm.value).subscribe(function (res) {
                  _this3.getCompany();

                  _this3.newCompanyForm.reset();

                  _this3.modalService.dismissAll();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this3.getCompany();
                });
              }
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "deleteCompany",
          value: function deleteCompany(id) {
            var _this4 = this;

            try {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Estas Seguro?',
                text: "Esta accion no se podra revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminar!'
              }).then(function (result) {
                if (result.isConfirmed) {
                  _this4.companyService.deleteCompany(id).subscribe(function (res) {
                    _this4.getCompany();

                    console.log(res);
                  });

                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Eliminado!', 'La Empresa Fue Eliminada.', 'success');
                }
              });
            } catch (error) {
              console.log(error);
              this.getCompany();
            }
          }
        }]);

        return CompanyComponent;
      }();

      CompanyComponent.ctorParameters = function () {
        return [{
          type: app_services_conpany_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      };

      CompanyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-company',
        template: _raw_loader_company_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_conpany_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])], CompanyComponent);
      /***/
    },

    /***/
    3:
    /*!************************!*\
      !*** stream (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "3OJA":
    /*!**********************************************!*\
      !*** ./src/app/pages/user/user.component.ts ***!
      \**********************************************/

    /*! exports provided: UserComponent */

    /***/
    function OJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user.component.html */
      "QMMq");
      /* harmony import */


      var _user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.component.css */
      "Tt67");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var app_services_conpany_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/services/conpany.service */
      "Bfw/");
      /* harmony import */


      var app_services_role_service___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/services/role.service  */
      "Vwu7");
      /* harmony import */


      var app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/services/user.service */
      "qfBg");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent(userService, roleService, modalService, formBuilder, companyService) {
          _classCallCheck(this, UserComponent);

          this.userService = userService;
          this.roleService = roleService;
          this.modalService = modalService;
          this.formBuilder = formBuilder;
          this.companyService = companyService;
          this.users = [];
          this.companies = [];
          this.roles = [];
          this.Submitted = false;
          this.update = false;
          this.config = {
            itemsPerPage: 4,
            currentPage: 1
          };
          this.newUserForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            identification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            companyId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            roleId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }

        _createClass(UserComponent, [{
          key: "uf",
          get: function get() {
            return this.newUserForm.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsers();
            this.getCompany();
            this.getRoles();
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(number) {
            this.config.currentPage = number;
          }
        }, {
          key: "onPageBoundsCorrection",
          value: function onPageBoundsCorrection(number) {
            this.config.currentPage = number;
          }
        }, {
          key: "open",
          value: function open(content) {
            var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.update = update;
            this.modalService.open(content);
          }
        }, {
          key: "openModal",
          value: function openModal(content, user) {
            console.log(user);
            this.newUserForm.controls.name.setValue(user.name);
            this.newUserForm.controls.password.setValue(user.password);
            this.newUserForm.controls.identification.setValue(user.identification);
            this.newUserForm.controls.login.setValue(user.login);
            this.newUserForm.controls.email.setValue(user.email);
            this.newUserForm.controls.phone.setValue(user.phone);
            this.newUserForm.controls.companyId.setValue(user.companyId);
            this.newUserForm.controls.type.setValue(user.type);
            this.idUser = user.id;
            this.modalService.open(content);
          }
        }, {
          key: "getCompany",
          value: function getCompany() {
            var _this5 = this;

            this.companyService.getEmpresas().subscribe(function (res) {
              _this5.companies = res;
            });
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            var _this6 = this;

            this.roleService.getRole().subscribe(function (res) {
              _this6.roles = res;
            });
          }
        }, {
          key: "newUser",
          value: function newUser() {
            var _this7 = this;

            try {
              this.userService.newUser(this.newUserForm.value).subscribe(function (res) {
                _this7.responce = res;

                if (_this7.responce.status) {
                  console.log(_this7.responce);

                  _this7.getUsers();

                  _this7.newUserForm.reset();

                  _this7.modalService.dismissAll();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    icon: 'success',
                    title: _this7.responce.message,
                    showConfirmButton: false,
                    timer: 1500
                  });
                } else {}
              }, function (error) {
                console.log(error);

                if (error['status']) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    icon: 'error',
                    text: error.error.message,
                    footer: 'Intentalo nuevamente'
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    icon: 'error',
                    title: 'Error en el servidor. !Contacte a soporte',
                    showConfirmButton: false,
                    timer: 3000
                  });
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this8 = this;

            this.userService.getUsers().subscribe(function (res) {
              _this8.users = res;
              console.log(_this8.users);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this9 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              title: 'Estas Seguro?',
              text: "Esta accion no se podra revertir!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, Eliminar!'
            }).then(function (result) {
              if (result.isConfirmed) {
                _this9.userService.deleteUser(id).subscribe(function (res) {
                  _this9.getUsers();

                  console.log(res);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Eliminado!', 'La Empresa Fue Eliminada.', 'success');
                }), function (error) {
                  console.log(error.error);

                  _this9.getUsers();
                };
              }
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            var _this10 = this;

            try {
              this.userService.updateUser(this.idUser, this.newUserForm.value).subscribe(function (res) {
                _this10.modalService.dismissAll();

                _this10.getUsers();

                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                  icon: 'success',
                  title: 'Actualizacion exitosa',
                  showConfirmButton: false,
                  timer: 1500
                });

                _this10.newUserForm.reset();
              });
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return UserComponent;
      }();

      UserComponent.ctorParameters = function () {
        return [{
          type: app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: app_services_role_service___WEBPACK_IMPORTED_MODULE_7__["RoleService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: app_services_conpany_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
        }];
      };

      UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], app_services_role_service___WEBPACK_IMPORTED_MODULE_7__["RoleService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_services_conpany_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]])], UserComponent);
      /***/
    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "zvoc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ROUTES = [
      /*{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
      { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
      { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
      { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
      { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
      { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
      { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
      { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },*/
      {
        path: './dashboard',
        title: 'Inicio',
        icon: 'nc-align-center',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './carretera',
        title: 'Carretera',
        icon: 'nc-ambulance',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './urbanero',
        title: 'Urbanero',
        icon: 'nc-delivery-fast',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './exportacion',
        title: 'Exportacion',
        icon: 'nc-planet',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './reposicion',
        title: 'Reposicion',
        icon: 'nc-app',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './reenturneCa',
        title: 'Reenturne Carretera',
        icon: 'nc-ambulance',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './reenturneUr',
        title: 'Reenturne Urbanero',
        icon: 'nc-delivery-fast',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './gestion',
        title: 'Gestion',
        icon: 'nc-briefcase-24',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './reporte',
        title: 'Reportes',
        icon: 'nc-bullet-list-67',
        "class": '',
        role: [1, 2]
      }, {
        path: './empresas',
        title: 'empresas',
        icon: 'nc-bank',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './conductores',
        title: 'conductores',
        icon: 'nc-single-02',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './clientes',
        title: 'Clientes',
        icon: 'nc-badge',
        "class": '',
        role: [1, 2, 3]
      }, {
        path: './usuarios',
        title: 'Usuarios',
        icon: 'nc-single-02',
        "class": '',
        role: [1, 2]
      }, {
        path: './configuracion',
        title: 'Configuración',
        icon: 'nc-settings',
        "class": '',
        role: [1, 2]
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);

          this.user = {
            roleId: 1
          };
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.user = JSON.parse(localStorage.getItem('user'));
            this.menuItems = ROUTES.filter(function (menuItem) {
              for (var j = 0; j < menuItem.role.length; j++) {
                var r = menuItem.role[j];

                if (r === _this11.user.roleId) {
                  return r;
                }
              }
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SidebarComponent);
      /***/
    },

    /***/
    "550G":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "5FrL":
    /*!******************************************!*\
      !*** ./src/app/model/ShiftManagement.ts ***!
      \******************************************/

    /*! exports provided: ShiftManagement */

    /***/
    function FrL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShiftManagement", function () {
        return ShiftManagement;
      });

      var ShiftManagement = function ShiftManagement() {
        _classCallCheck(this, ShiftManagement);

        this.containers = [];
      };
      /***/

    },

    /***/
    "5My1":
    /*!**********************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
      \**********************************************************/

    /*! exports provided: FixedPluginModule */

    /***/
    function My1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
        return FixedPluginModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fixedplugin.component */
      "Pqk8");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var FixedPluginModule = function FixedPluginModule() {
        _classCallCheck(this, FixedPluginModule);
      };

      FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
      })], FixedPluginModule);
      /***/
    },

    /***/
    "6Upx":
    /*!***************************************************************************************!*\
      !*** ./src/app/views/tables/table-filter-reportes/table-filter-reportes.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TableFilterReportesComponent */

    /***/
    function Upx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableFilterReportesComponent", function () {
        return TableFilterReportesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_table_filter_reportes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./table-filter-reportes.component.html */
      "hDYL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_templates_pdf_export_pdf_reporte_turnos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/templates/pdf-export/pdf-reporte-turnos */
      "j/Ji");
      /* harmony import */


      var app_utils_excel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/utils/excel */
      "Rw9g");
      /* harmony import */


      var app_utils_pdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/utils/pdf */
      "jR5x");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var TableFilterReportesComponent = /*#__PURE__*/function () {
        function TableFilterReportesComponent(excel, pdf, spinner) {
          _classCallCheck(this, TableFilterReportesComponent);

          this.excel = excel;
          this.pdf = pdf;
          this.spinner = spinner;
          this.camposData = [];
          this.turnosData = [];
          this.infoData = {};
          this.filterData = {};
          this.config = {
            itemsPerPage: 5,
            currentPage: 1
          };
          this.volver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(TableFilterReportesComponent, [{
          key: "campos",
          set: function set(value) {
            this.camposData = value;
          }
        }, {
          key: "turnos",
          set: function set(value) {
            this.turnosData = value;
          }
        }, {
          key: "info",
          set: function set(value) {
            this.infoData = value;
          }
        }, {
          key: "filter",
          set: function set(value) {
            this.filterData = value;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "exportar",
          value: function exportar(tipo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var docDefinition;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.spinner.show();
                      _context3.t0 = tipo;
                      _context3.next = _context3.t0 === "PDF" ? 4 : _context3.t0 === "EXCEL" ? 9 : 11;
                      break;

                    case 4:
                      _context3.next = 6;
                      return Object(app_templates_pdf_export_pdf_reporte_turnos__WEBPACK_IMPORTED_MODULE_3__["pdfReporteTurnosTemplate"])(this.turnosData, this.camposData, this.infoData, this.filterData);

                    case 6:
                      docDefinition = _context3.sent;
                      this.pdf.exportAsPDFFile(docDefinition, "Reporte turnos");
                      return _context3.abrupt("break", 12);

                    case 9:
                      this.excel.exportAsExcelFile(this.turnosData, "Reporte turnos");
                      return _context3.abrupt("break", 12);

                    case 11:
                      return _context3.abrupt("break", 12);

                    case 12:
                      this.spinner.hide();

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(number) {
            this.config.currentPage = number;
          }
        }, {
          key: "onPageBoundsCorrection",
          value: function onPageBoundsCorrection(number) {
            this.config.currentPage = number;
          }
        }]);

        return TableFilterReportesComponent;
      }();

      TableFilterReportesComponent.ctorParameters = function () {
        return [{
          type: app_utils_excel__WEBPACK_IMPORTED_MODULE_4__["Excel"]
        }, {
          type: app_utils_pdf__WEBPACK_IMPORTED_MODULE_5__["PDF"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }];
      };

      TableFilterReportesComponent.propDecorators = {
        volver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        campos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['campos']
        }],
        turnos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['turnos']
        }],
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['info']
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['filter']
        }]
      };
      TableFilterReportesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-table-filter-reportes',
        template: _raw_loader_table_filter_reportes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_utils_excel__WEBPACK_IMPORTED_MODULE_4__["Excel"], app_utils_pdf__WEBPACK_IMPORTED_MODULE_5__["PDF"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])], TableFilterReportesComponent);
      /***/
    },

    /***/
    "8f1B":
    /*!*************************************!*\
      !*** ./src/app/model/ShiftClass.ts ***!
      \*************************************/

    /*! exports provided: ShiftClass */

    /***/
    function f1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShiftClass", function () {
        return ShiftClass;
      });

      var ShiftClass = function ShiftClass() {
        _classCallCheck(this, ShiftClass);
      };
      /***/

    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AK6u":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "Bfw/":
    /*!*********************************************!*\
      !*** ./src/app/services/conpany.service.ts ***!
      \*********************************************/

    /*! exports provided: CompanyService */

    /***/
    function Bfw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var CompanyService = /*#__PURE__*/function () {
        function CompanyService(http, config) {
          _classCallCheck(this, CompanyService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url;
        }

        _createClass(CompanyService, [{
          key: "getEmpresas",
          value: function getEmpresas() {
            return this.http.get("".concat(this.URL_API, "/empresas"));
          }
        }, {
          key: "newCompany",
          value: function newCompany(company) {
            return this.http.post("".concat(this.URL_API, "/empresas"), company);
          }
        }, {
          key: "updateCompany",
          value: function updateCompany(id, company) {
            return this.http.put("".concat(this.URL_API, "/empresas/") + id, company);
          }
        }, {
          key: "deleteCompany",
          value: function deleteCompany(id) {
            return this.http["delete"](this.URL_API + '/empresas/eliminar/' + id);
          }
        }]);

        return CompanyService;
      }();

      CompanyService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      CompanyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], CompanyService);
      /***/
    },

    /***/
    "CpGq":
    /*!****************************************!*\
      !*** ./src/app/model/ContainerYard.ts ***!
      \****************************************/

    /*! exports provided: ContainerYard */

    /***/
    function CpGq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerYard", function () {
        return ContainerYard;
      });

      var ContainerYard = function ContainerYard() {
        _classCallCheck(this, ContainerYard);
      };
      /***/

    },

    /***/
    "CpO+":
    /*!************************************************!*\
      !*** ./src/app/shared/navbar/navbar.module.ts ***!
      \************************************************/

    /*! exports provided: NavbarModule */

    /***/
    function CpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
        return NavbarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar.component */
      "EtQq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavbarModule = function NavbarModule() {
        _classCallCheck(this, NavbarModule);
      };

      NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
      })], NavbarModule);
      /***/
    },

    /***/
    "D+7Y":
    /*!************************************************************************************!*\
      !*** ./src/app/views/forms/form-filter-reportes/form-filter-reportes.component.ts ***!
      \************************************************************************************/

    /*! exports provided: FormFilterReportesComponent */

    /***/
    function D7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFilterReportesComponent", function () {
        return FormFilterReportesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_filter_reportes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-filter-reportes.component.html */
      "cyYJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/mocks/campos-filter.mock */
      "y2Y/");
      /* harmony import */


      var app_mocks_dropdown_settings_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/mocks/dropdown-settings.mock */
      "WK62");
      /* harmony import */


      var app_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/services/client.service */
      "Jmk/");
      /* harmony import */


      var app_services_line_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/services/line.service */
      "Eb4V");
      /* harmony import */


      var app_services_shift_class_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/services/shift-class.service */
      "h8ke");
      /* harmony import */


      var app_services_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/services/type.service */
      "OPps");
      /* harmony import */


      var app_services_yard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/services/yard.service */
      "+E9W");

      var FormFilterReportesComponent = /*#__PURE__*/function () {
        function FormFilterReportesComponent(formBuilder, clientService, lineService, shiftClassService, yardService, typeService) {
          _classCallCheck(this, FormFilterReportesComponent);

          this.formBuilder = formBuilder;
          this.clientService = clientService;
          this.lineService = lineService;
          this.shiftClassService = shiftClassService;
          this.yardService = yardService;
          this.typeService = typeService;
          this.filterData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.dropdownList = [];
          this.dropdownSettingsMultiple = {};
          this.dropdownSettingsSingle = {};
          this.dropdownSettingsSingleNoSearch = {};
          this.formFilter = this.formBuilder.group({
            campos: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fechaIni: [''],
            fechaFin: [''],
            cliente: [[]],
            linea: [[]],
            patio: [[]],
            clase: [[]],
            tipoTamanioContenedor: [[]],
            titulo: ['']
          });
          this.f.fechaFin.disable();
          this.dropdownSettingsMultiple = Object(app_mocks_dropdown_settings_mock__WEBPACK_IMPORTED_MODULE_5__["DropdownSettingsMultipleMock"])();
          this.dropdownSettingsSingle = Object(app_mocks_dropdown_settings_mock__WEBPACK_IMPORTED_MODULE_5__["DropdownSettingsSingleMock"])();
          this.dropdownSettingsSingleNoSearch = Object(app_mocks_dropdown_settings_mock__WEBPACK_IMPORTED_MODULE_5__["DropdownSettingsSingleNoSearchMock"])();
        }

        _createClass(FormFilterReportesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.formFilter.get('fechaIni').valueChanges.subscribe(function (values) {
              if (values) {
                _this12.min = values;

                _this12.f.fechaFin.enable();
              } else {
                _this12.f.fechaFin.setValue('');

                _this12.f.fechaFin.disable();
              }
            });
            this.getClients();
            this.getLines();
            this.getShiftClass();
            this.getYard();
            this.getType();
            this.dropdownList = Object(app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_4__["CamposFilterMock"])();
            this.f.campos.setValue(this.dropdownList);
          }
        }, {
          key: "f",
          get: function get() {
            return this.formFilter.controls;
          }
        }, {
          key: "getClients",
          value: function getClients() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.clientService.getAllReport().subscribe(function (res) {
                        _this13.clients = res;
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getLines",
          value: function getLines() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.lineService.getAllReport().subscribe(function (res) {
                        _this14.lines = res;
                      });

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getShiftClass",
          value: function getShiftClass() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this15 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.shiftClassService.getAllReport().subscribe(function (res) {
                        _this15.shiftClass = res;
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getYard",
          value: function getYard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this16 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.yardService.getAllReport().subscribe(function (res) {
                        _this16.containerYarn = res;
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getType",
          value: function getType() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this17 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.typeService.getAllReport().subscribe(function (res) {
                        _this17.containerType = res;
                      });

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "filter",
          value: function filter() {
            this.filterData.emit(this.formFilter.value);
          }
        }]);

        return FormFilterReportesComponent;
      }();

      FormFilterReportesComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: app_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"]
        }, {
          type: app_services_line_service__WEBPACK_IMPORTED_MODULE_7__["LineService"]
        }, {
          type: app_services_shift_class_service__WEBPACK_IMPORTED_MODULE_8__["ShiftClassService"]
        }, {
          type: app_services_yard_service__WEBPACK_IMPORTED_MODULE_10__["YardService"]
        }, {
          type: app_services_type_service__WEBPACK_IMPORTED_MODULE_9__["TypeService"]
        }];
      };

      FormFilterReportesComponent.propDecorators = {
        filterData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      FormFilterReportesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-form-filter-reportes',
        template: _raw_loader_form_filter_reportes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"], app_services_line_service__WEBPACK_IMPORTED_MODULE_7__["LineService"], app_services_shift_class_service__WEBPACK_IMPORTED_MODULE_8__["ShiftClassService"], app_services_yard_service__WEBPACK_IMPORTED_MODULE_10__["YardService"], app_services_type_service__WEBPACK_IMPORTED_MODULE_9__["TypeService"]])], FormFilterReportesComponent);
      /***/
    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "ywSW");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "pG9d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/services/auth.service */
      "lGQG");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(route, router, formBuilder, authService) {
          _classCallCheck(this, LoginComponent);

          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.Submitted = false;
          this.authForm = this.formBuilder.group({
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "af",
          get: function get() {
            return this.authForm.controls;
          }
        }, {
          key: "login",
          value: function login() {
            var _this18 = this;

            this.authService.login(this.authForm.value).subscribe(function (res) {
              _this18.token = res;
              localStorage.setItem('user', JSON.stringify(res.user));
              localStorage.setItem('token', _this18.token.token);

              _this18.router.navigate(['/dashboard']);

              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                icon: 'success',
                title: 'Inicio de sesion exitoso',
                showConfirmButton: false,
                timer: 1500
              });
            }, function (err) {
              console.log(err);
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Acceso denegado!'
              });
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], LoginComponent);
      /***/
    },

    /***/
    "Eb4V":
    /*!******************************************!*\
      !*** ./src/app/services/line.service.ts ***!
      \******************************************/

    /*! exports provided: LineService */

    /***/
    function Eb4V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineService", function () {
        return LineService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var LineService = /*#__PURE__*/function () {
        function LineService(http, config) {
          _classCallCheck(this, LineService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url + '/lineas';
        }

        _createClass(LineService, [{
          key: "getAllReport",
          value: function getAllReport() {
            return this.http.get("".concat(this.URL_API, "/getAllReport"));
          }
        }]);

        return LineService;
      }();

      LineService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      LineService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], LineService);
      /***/
    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/services/auth.service */
      "lGQG");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, authService, renderer, element, router) {
          _classCallCheck(this, NavbarComponent);

          this.authService = authService;
          this.renderer = renderer;
          this.element = element;
          this.router = router;
          this.isCollapsed = true;
          this.location = location;
          this.nativeElement = element.nativeElement;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
            this.router.events.subscribe(function (event) {
              _this19.sidebarClose();
            });
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            return 'Dashboard';
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            html.classList.add('nav-open');

            if (window.innerWidth < 991) {
              mainPanel.style.position = 'fixed';
            }

            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function () {
                mainPanel.style.position = '';
              }, 500);
            }

            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
            var navbar = document.getElementsByTagName('nav')[0];

            if (!this.isCollapsed) {
              navbar.classList.remove('navbar-transparent');
              navbar.classList.add('bg-white');
            } else {
              navbar.classList.add('navbar-transparent');
              navbar.classList.remove('bg-white');
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            window.location.reload();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      NavbarComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["navbar-cmp", {
            "static": false
          }]
        }]
      };
      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], NavbarComponent);
      /***/
    },

    /***/
    "GnyV":
    /*!*******************************************!*\
      !*** ./src/app/services/shift.service.ts ***!
      \*******************************************/

    /*! exports provided: ShiftService */

    /***/
    function GnyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShiftService", function () {
        return ShiftService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var ShiftService = /*#__PURE__*/function () {
        function ShiftService(http, config) {
          _classCallCheck(this, ShiftService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url + '/turnos';
        }

        _createClass(ShiftService, [{
          key: "getWithType",
          value: function getWithType(type) {
            return this.http.get("".concat(this.URL_API, "/tipo/") + type);
          }
        }, {
          key: "get",
          value: function get() {
            return this.http.get("".concat(this.URL_API, "/"));
          }
        }, {
          key: "getShift",
          value: function getShift(id) {
            return this.http.get("".concat(this.URL_API, "/").concat(id));
          }
        }, {
          key: "cancel",
          value: function cancel(shift, id) {
            return this.http["delete"]("".concat(this.URL_API, "/").concat(id, "?obvs=").concat(shift.obvs));
          }
        }, {
          key: "getMoney",
          value: function getMoney() {
            return this.http.get("".concat(this.URL_API, "/money"));
          }
        }, {
          key: "post",
          value: function post(shift) {
            return this.http.post("".concat(this.URL_API, "/"), shift);
          }
        }, {
          key: "postMoney",
          value: function postMoney(moeny) {
            return this.http.post("".concat(this.URL_API, "/money"), moeny);
          }
        }, {
          key: "postReShifted",
          value: function postReShifted(id, shift) {
            return this.http.put("".concat(this.URL_API, "/").concat(id), shift);
          }
        }, {
          key: "getFilter",
          value: function getFilter(filter) {
            return this.http.post("".concat(this.URL_API, "/getFilter"), filter);
          }
        }]);

        return ShiftService;
      }();

      ShiftService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      ShiftService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], ShiftService);
      /***/
    },

    /***/
    "Jmk/":
    /*!********************************************!*\
      !*** ./src/app/services/client.service.ts ***!
      \********************************************/

    /*! exports provided: ClientService */

    /***/
    function Jmk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientService", function () {
        return ClientService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var ClientService = /*#__PURE__*/function () {
        function ClientService(http, config) {
          _classCallCheck(this, ClientService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url + '/clientes';
        }

        _createClass(ClientService, [{
          key: "getAllReport",
          value: function getAllReport() {
            return this.http.get("".concat(this.URL_API, "/getAllReport"));
          }
        }]);

        return ClientService;
      }();

      ClientService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      ClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], ClientService);
      /***/
    },

    /***/
    "MzTg":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion/detalle-gestion.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MzTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-scale-multiple\" [fullScreen] = \"false\">\n    <p style=\"color: white\" > Cargando... </p>\n</ngx-spinner>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <div class=\"row\">\n                  <div class=\"col-md-8\">\n                      <h4 class=\"card-title\"> Detalle del Turno</h4>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs ml-3 mr-3\">\n                        <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink>Cliente</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"row m-3\">\n                                <div class=\"card mb-3 w-80\">\n                                    <div class=\"row no-gutters\">\n                                      <div class=\"col-md-4\">\n                                        <img class=\"m-3\" src=\"assets/img/edificio.png\" alt=\"cliente\">\n                                      </div>\n                                      <div class=\"col-md-8\">\n                                        <div class=\"card-body\">\n                                          <h5 class=\"card-title\">{{ client.name }}</h5>\n                                          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                                          <ul>\n                                              <li class=\"card-text\">Nit: {{ client.nit }}</li>\n                                              <li class=\"card-text\">Email: {{ client.email }}</li>\n                                              <li class=\"card-text\">Tel&eacute;fono: {{ client.phone }}</li>\n                                          </ul>\n                                          <p class=\"card-text\"><small class=\"text-muted\">Última actualizaci&oacute;n: {{ client.updatedAt }}</small></p>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                            </div>\n                        </ng-template>\n                        </li>\n                        <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink>Conductor</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"row m-3\">\n                                <div class=\"card mb-3 w-100\">\n                                    <div class=\"row no-gutters\">\n                                        <div class=\"col-md-4\">\n                                        <img class=\"m-3\" src=\"assets/img/driver.png\" alt=\"conductor\">\n                                        </div>\n                                        <div class=\"col-md-8\">\n                                        <div class=\"card-body\">\n                                            <h5 class=\"card-title\">{{ driver.name | titlecase }}</h5>\n                                            <p class=\"card-text\">Entidad que utiliza los servicios de un profesional o de una empresa.</p>\n                                            <ul>\n                                                <li class=\"card-text\">Identificaci&oacute;n: {{ driver.identification }}</li>\n                                                <li class=\"card-text\">Email: {{ driver.email }}</li>\n                                                <li class=\"card-text\">Tel&eacute;fono: {{ driver.phone }}</li>\n                                            </ul>\n                                            <p class=\"card-text\"><small class=\"text-muted\">Última actualizaci&oacute;n: {{ driver.updatedAt }}</small></p>\n                                        </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                        </li>\n                        <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink>Observaci&oacute;n</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"row m-3\">\n                                <div class=\"card mb-3 w-75\">\n                                    <h5 class=\"card-header\">\n                                      Descripci&oacute;n de la observaci&oacute;n\n                                    </h5>\n                                    <div class=\"card-body\">\n                                      <p class=\"card-text\">{{ shiftManagement.obvs }}</p>\n                                      <a *ngIf=\"shiftManagement.obvs.length > 0; else notice\" (click)=\"openModal(content, shiftManagement.id)\" class=\"btn btn-warning\">Editar</a>\n                                      <ng-template #notice ><p #notice class=\"card-text\">No hay ningún tipo de observaci&oacute;n registrada para este turno</p></ng-template>\n                                    </div>\n                                  </div>\n                            </div>\n                        </ng-template>\n                        </li>\n                        <li [ngbNavItem]=\"4\">\n                            <a ngbNavLink>General</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"row m-3\">\n                                    <div class=\"card mb-3 w-100\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-4\">\n                                                <div class=\"card-body\">\n                                                    <h5 class=\"card-title\">Fecha: {{ shiftManagement.date | date }}</h5>\n                                                    <h6 class=\"card-subtitle mb-2 text-muted\">Dias de turno: {{ shiftManagement.dayShift }}</h6>\n                                                    <p class=\"card-text\">Precio: {{ shiftManagement.price }} </p>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-4\">\n                                                <div class=\"card-body\">\n                                                    <ul>\n                                                        <li class=\"card-text\"> Patio: {{ containerYard.code }} </li>\n                                                        <li class=\"card-text\"> Linea: {{ transLine.code }} </li>\n                                                        <li class=\"card-text\"> Clase: {{ shiftClass.name }}</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-4\">\n                                                <div class=\"card-body\"> \n                                                    <h5 class=\"card-title\"> Contenedores </h5>\n                                                    <ul>\n                                                        <li class=\"card-text\"> {{ shiftManagement.containers.length > 1 ? shiftManagement.containers[0] : \"N/A\" }} </li>\n                                                        <li class=\"card-text\"> {{ shiftManagement.containers.length > 1 ? shiftManagement.containers[1] : \"N/A\" }} </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul>\n                    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">REGISTRAR OBSERVACION</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"shiftEditForm\" class=\"mb-5\">\n        <div class=\"form-group\">\n          <label class=\"form-label\" for=\"obvs\">Observaci&oacute;n</label>\n          <textarea [ngClass]=\"{'is-valid':!submitted && cf.obvs.valid,'is-invalid':cf.obvs.invalid && (cf.obvs.dirty || cf.obvs.touched)}\"\n                    type=\"text\" class=\"form-control\" formControlName=\"obvs\" id=\"obvs\" placeholder=\"Ingresa la observación\" rows=\"3\">\n          </textarea>\n        </div>\n        <div *ngIf=\"cf.obvs.invalid && (cf.obvs.dirty || cf.obvs.touched)\" class=\"text-danger\">\n          <div *ngIf=\"cf.obvs.errors.required\">\n            El campo es requerido\n          </div>\n          <div *ngIf=\"cf.obvs.errors.maxlength\">\n            El campo tiene un máximo de 500 caracteres\n          </div>\n        </div>\n        <div class=\"float-right\">\n          <button type=\"button\" class=\"btn btn-dark\" (click)=\"modal.close('cancel')\">\n            <span> Cancelar</span>\n          </button>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"modal.close('save')\" [disabled]=\"(cf.obvs.invalid)\">\n            <span>Guardar</span>\n          </button>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      \n  </div>\n  </ng-template>";
      /***/
    },

    /***/
    "OPps":
    /*!******************************************!*\
      !*** ./src/app/services/type.service.ts ***!
      \******************************************/

    /*! exports provided: TypeService */

    /***/
    function OPps(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeService", function () {
        return TypeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var TypeService = /*#__PURE__*/function () {
        function TypeService(http, config) {
          _classCallCheck(this, TypeService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url + '/tipos';
        }

        _createClass(TypeService, [{
          key: "getAllReport",
          value: function getAllReport() {
            return this.http.get("".concat(this.URL_API, "/getAllReport"));
          }
        }]);

        return TypeService;
      }();

      TypeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      TypeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], TypeService);
      /***/
    },

    /***/
    "P6kD":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function P6kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "AK6u");
      /* harmony import */


      var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-layout.component.scss */
      "vtrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminLayoutComponent);
      /***/
    },

    /***/
    "Pqk8":
    /*!*************************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
      \*************************************************************/

    /*! exports provided: FixedPluginComponent */

    /***/
    function Pqk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
        return FixedPluginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "550G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FixedPluginComponent = /*#__PURE__*/function () {
        function FixedPluginComponent() {
          _classCallCheck(this, FixedPluginComponent);

          this.sidebarColor = "black";
          this.sidebarActiveColor = "danger";
          this.state = true;
        }

        _createClass(FixedPluginComponent, [{
          key: "changeSidebarColor",
          value: function changeSidebarColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-color', color);
            }
          }
        }, {
          key: "changeSidebarActiveColor",
          value: function changeSidebarActiveColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarActiveColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-active-color', color);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FixedPluginComponent;
      }();

      FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FixedPluginComponent);
      /***/
    },

    /***/
    "QMMq":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function QMMq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\">\n     <div class=\"card\">\n       <div class=\"card-header\">\n         <div class=\"row\">\n           <h4 class=\"card-title col-10\">Usuarios Registrados En El Sistema</h4>\n           <div class=\"d-block align-self-end col-2\">\n             <button  type=\"button\" class=\"btn btn-danger\" (click)=\"open(content)\">\n               <i class=\"fa fa-plus text-white fa-lg\"></i>\n               <span class=\"text-white\"> NUEVO</span>\n             </button>\n           </div>\n         </div>\n       </div>\n       <div class=\"card-body\">\n         <div class=\"\">\n           <table class=\"table table-striped\">\n             <thead>\n               <tr>\n                 <th scope=\"col\">Nombre</th>\n                 <th scope=\"col\">Usuario</th>\n                 <th scope=\"col\">Email</th>\n                 <th scope=\"col\">Empresa</th>\n                 <th scope=\"col\">Telefono</th>\n                 <th scope=\"col\">Tipo</th>\n                 <th scope=\"col\">Rol</th>\n                 <th scope=\"col\" class=\"text-center w200\">Opciones</th>\n               </tr>\n             </thead>\n             <tbody >\n               <tr *ngFor=\"let item of users  | paginate: config \">\n                 <td>{{ item.name }}</td>\n                 <td>{{ item.login }}</td>\n                 <td>{{ item.email }}</td>\n                 <td>{{ item.company.name }}</td>\n                 <td>{{ item.phone }}</td>\n                 <td>{{ item.type }}</td>\n                 <td>{{ item.role.name }}</td>\n                 <td class=\"w200\">\n                    <div class=\"d-flex justify-content-center\">\n                      <button\n                      type=\"button\"\n                      class=\"btn btn-outline-danger float-right btn-round mr-3 btn-sm\"\n                      (click)=\"openModal( modalUpdate, item )\"\n                    >\n                      <i class=\"fa fa-pencil fa-sm\"></i>\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-danger float-right btn-round btn-sm\"\n                      (click)=\"deleteUser( item.id )\"\n                    >\n                      <i class=\"fa fa-trash fa-sm\"></i>\n                    </button>\n                   </div> \n                 </td>\n               </tr>\n             </tbody>\n           </table>\n           <div class=\"d-flex justify-content-between p-2\" >\n               <pagination-controls\n               (pageChange)=\"onPageChange($event)\"\n               (pageBoundsCorrection)=\"onPageBoundsCorrection($event)\"\n               previousLabel=\"Anterior\"\n               nextLabel=\"Siguiente\"\n               >\n               </pagination-controls>\n             </div>\n         </div>\n       </div>\n     </div>\n    </div>\n   </div>\n\n   <ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">REGISTRAR USUARIO</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"newUserForm\" class=\"mb-5\">\n          <div class=\"row\">\n            <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Nombre Completo*</label>\n               <input type=\"text\" \n               class=\"form-control\"  \n               formControlName=\"name\" \n               placeholder=\"Ingresa el nombre\"\n               \n               >\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.name.dirty || uf.name.touched) && uf.name.errors && Submitted\">\n               </small>\n           </div>\n          \n        <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Nombre De Usuario*</label>\n               <input type=\"text\" \n               class=\"form-control\"  \n               formControlName=\"login\" \n               placeholder=\"Ingresa el usuario\"\n               >\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.login.dirty || uf.login.touched) && uf.login.errors && Submitted\">\n               </small>\n           </div>\n        <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Correo Electronico*</label>\n               <input type=\"email\" \n               class=\"form-control\"  \n               formControlName=\"email\" \n               placeholder=\"Ingresa el correo\"\n               >\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.email.dirty || uf.email.touched) && uf.email.errors && Submitted\">\n               </small>\n           </div>\n        <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Contraseña*</label>\n               <input type=\"password\" \n               class=\"form-control\"  \n               formControlName=\"password\" \n               placeholder=\"Contraseña\"\n               >\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.password.dirty || uf.password.touched) && uf.password.errors && Submitted\">\n               </small>\n           </div>\n        <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Identificacion*</label>\n               <input type=\"number\" \n               class=\"form-control\"  \n               formControlName=\"identification\" \n               placeholder=\"N° Identificacion\"\n               >\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.identification.dirty || uf.identification.touched) && uf.identification.errors && Submitted\">\n               </small>\n           </div>\n        <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Telefono*</label>\n               <input type=\"number\" \n               class=\"form-control\"  \n               formControlName=\"phone\" \n               placeholder=\"Telefono\"\n               >\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.phone.dirty || uf.phone.touched) && uf.phone.errors && Submitted\">\n               </small>\n           </div>\n        <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Empresa*</label>\n               <select class=\"form-control\" formControlName=\"companyId\">\n                <option selected disabled value=\"\">Selecione una opcion</option>\n                   <option [ngValue]=\"item.id\" \n                   *ngFor=\"let item of companies\">\n                       {{ item.name }}\n                   </option>\n               </select>\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.companyId.dirty || uf.companyId.touched) && uf.companyId.errors && Submitted\">\n               </small>\n           </div>\n           <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Rol*</label>\n            <select class=\"form-control\" formControlName=\"roleId\">\n             <option selected disabled value=\"\">Selecione el rol</option>\n                <option [ngValue]=\"item.id\" \n                *ngFor=\"let item of roles\">\n                    {{ item.name }}\n                </option>\n            </select>\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.roleId.dirty || uf.roleId.touched) && uf.roleId.errors && Submitted\">\n            </small>\n        </div>\n         <div class=\"col-md-6 py-2\">\n               <label class=\"form-label \">Tipo*</label>\n               <select class=\"form-control\" formControlName=\"type\">\n                   <option selected disabled value=\"\">Selecione una opcion</option>\n                   <option value=\"1\">Tipo 1</option>\n                   <option value=\"2\">Tipo 2</option>\n                   \n               </select>\n               <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n               *ngIf=\"(uf.phone.dirty || uf.phone.touched) && uf.phone.errors && Submitted\">\n               </small>\n           </div>\n           </div>\n           <hr>\n            <div class=\" d-flex justify-content-center\">\n            <button type=\"button\" class=\"btn btn-danger w-50\" (click)=\"newUser()\" [disabled]=\"(newUserForm.invalid)\" >\n              <span>Guardar</span>\n            </button>\n            </div>\n\n        </form>\n      </div>\n</ng-template>\n<!-- disabled]=\"(newUserForm.invalid)\" -->\n<ng-template #modalUpdate let-modal>\n  <div class=\"modal-header\">\n      <h4 class=\"modal-title\">ACTUALIZAR USUARIO</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"newUserForm\">\n        <div class=\"row\">\n         <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Nombre Completo*</label>\n            <input type=\"text\" \n            class=\"form-control\"  \n            formControlName=\"name\" \n            placeholder=\"Ingresa el nombre\"\n            \n            >\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.name.dirty || uf.name.touched) && uf.name.errors && Submitted\">\n            </small>\n        </div>\n       \n     <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Nombre De Usuario*</label>\n            <input type=\"text\" \n            class=\"form-control\"  \n            formControlName=\"login\" \n            placeholder=\"Ingresa el usuario\"\n            >\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.login.dirty || uf.login.touched) && uf.login.errors && Submitted\">\n            </small>\n        </div>\n     <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Correo Electronico*</label>\n            <input type=\"email\" \n            class=\"form-control\"  \n            formControlName=\"email\" \n            placeholder=\"Ingresa el correo\"\n            >\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.email.dirty || uf.email.touched) && uf.email.errors && Submitted\">\n            </small>\n        </div>\n     <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Contraseña*</label>\n            <input type=\"password\" \n            class=\"form-control\"  \n            formControlName=\"password\" \n            placeholder=\"Contraseña\"\n            >\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.password.dirty || uf.password.touched) && uf.password.errors && Submitted\">\n            </small>\n        </div>\n     <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Identificacion*</label>\n            <input type=\"text\" \n            class=\"form-control\"  \n            formControlName=\"identification\" \n            placeholder=\"N° Identificacion\"\n            >\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.identification.dirty || uf.identification.touched) && uf.identification.errors && Submitted\">\n            </small>\n        </div>\n     <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Telefono*</label>\n            <input type=\"text\" \n            class=\"form-control\"  \n            formControlName=\"phone\" \n            placeholder=\"Telefono\"\n            >\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.phone.dirty || uf.phone.touched) && uf.phone.errors && Submitted\">\n            </small>\n        </div>\n     <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Empresa*</label>\n            <select class=\"form-control\" formControlName=\"companyId\">\n              <option selected disabled value=\"\">Selecione una opcion</option>\n                <option [ngValue]=\"item.id\" \n                *ngFor=\"let item of companies\">\n                    {{ item.name }}\n                </option>\n            </select>\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.companyId.dirty || uf.companyId.touched) && uf.companyId.errors && Submitted\">\n            </small>\n        </div>\n        <div class=\"col-md-6 py-2\">\n          <label class=\"form-label \">Rol*</label>\n          <select class=\"form-control\" formControlName=\"roleId\">\n           <option selected disabled value=\"\">Selecione el rol</option>\n              <option [ngValue]=\"item.id\" \n              *ngFor=\"let item of roles\">\n                  {{ item.name }}\n              </option>\n          </select>\n          <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n          *ngIf=\"(uf.roleId.dirty || uf.roleId.touched) && uf.roleId.errors && Submitted\">\n          </small>\n      </div>\n      <div class=\"col-md-6 py-2\">\n            <label class=\"form-label \">Tipo*</label>\n            <select class=\"form-control\" formControlName=\"type\">\n                <option selected disabled value=\"\">Selecione una opcion</option>\n                <option value=\"1\">Tipo 1</option>\n                <option value=\"2\">Tipo 2</option>\n                \n            </select>\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n            *ngIf=\"(uf.phone.dirty || uf.phone.touched) && uf.phone.errors && Submitted\">\n            </small>\n        </div>\n        </div>\n        <hr>\n          <div class=\"d-flex justify-content-center\">\n            <button type=\"button\" class=\"btn btn-danger w-50\" (click)=\"updateUser()\" [disabled]=\"(newUserForm.invalid)\" >\n              Actualizar\n            </button>\n          </div>\n\n      </form>\n    </div>\n</ng-template>";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Rw9g":
    /*!********************************!*\
      !*** ./src/app/utils/excel.ts ***!
      \********************************/

    /*! exports provided: Excel */

    /***/
    function Rw9g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Excel", function () {
        return Excel;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);

      var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      var EXCEL_EXTENSION = '.xlsx';

      var Excel = /*#__PURE__*/function () {
        function Excel() {
          _classCallCheck(this, Excel);
        }

        _createClass(Excel, [{
          key: "exportAsExcelFile",
          value: function exportAsExcelFile(json, excelFileName) {
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
            worksheet['!cols'] = [{
              wch: 15
            }, {
              wch: 21
            }, {
              wch: 18
            }];
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, {
              bookType: 'xlsx',
              type: 'array'
            });
            this.saveAsExcelFile(excelBuffer, excelFileName);
          }
        }, {
          key: "saveAsExcelFile",
          value: function saveAsExcelFile(buffer, fileName) {
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + EXCEL_EXTENSION);
          }
        }]);

        return Excel;
      }();

      Excel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Excel);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "Tt67":
    /*!***********************************************!*\
      !*** ./src/app/pages/user/user.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Tt67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "VQQb":
    /*!*************************************************************!*\
      !*** ./src/app/pages/gestion/detalle-gestion.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function VQQb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlLWdlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "VhGG":
    /*!*********************************!*\
      !*** ./src/app/model/Client.ts ***!
      \*********************************/

    /*! exports provided: Client */

    /***/
    function VhGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Client", function () {
        return Client;
      });

      var Client = function Client() {
        _classCallCheck(this, Client);
      };
      /***/

    },

    /***/
    "Vwu7":
    /*!*******************************************!*\
      !*** ./src/app/services/role.service .ts ***!
      \*******************************************/

    /*! exports provided: RoleService */

    /***/
    function Vwu7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleService", function () {
        return RoleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var RoleService = /*#__PURE__*/function () {
        function RoleService(http, config) {
          _classCallCheck(this, RoleService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url;
        }

        _createClass(RoleService, [{
          key: "getRole",
          value: function getRole() {
            return this.http.get("".concat(this.URL_API, "/roles"));
          }
        }, {
          key: "newRole",
          value: function newRole(role) {
            return this.http.post("".concat(this.URL_API, "/roles"), role);
          }
        }, {
          key: "updateRole",
          value: function updateRole(id, role) {
            return this.http.put("".concat(this.URL_API, "/roles/") + id, role);
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(id) {
            return this.http["delete"](this.URL_API + '/roles/eliminar/' + id);
          }
        }]);

        return RoleService;
      }();

      RoleService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      RoleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], RoleService);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "WK62":
    /*!*************************************************!*\
      !*** ./src/app/mocks/dropdown-settings.mock.ts ***!
      \*************************************************/

    /*! exports provided: DropdownSettingsMultipleMock, DropdownSettingsSingleMock, DropdownSettingsSingleNoSearchMock */

    /***/
    function WK62(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownSettingsMultipleMock", function () {
        return DropdownSettingsMultipleMock;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownSettingsSingleMock", function () {
        return DropdownSettingsSingleMock;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownSettingsSingleNoSearchMock", function () {
        return DropdownSettingsSingleNoSearchMock;
      });

      var DropdownSettingsMultipleMock = function DropdownSettingsMultipleMock() {
        return {
          "idField": "item_id",
          "textField": "item_text",
          "selectAllText": "Seleccionar todo",
          "unSelectAllText": "Quitar todo",
          "enableCheckAll": true,
          "allowSearchFilter": true,
          "searchPlaceholderText": "Buscar",
          "noDataAvailablePlaceholderText": "Datos no disponibles"
        };
      };

      var DropdownSettingsSingleMock = function DropdownSettingsSingleMock() {
        return {
          "singleSelection": true,
          "idField": "item_id",
          "textField": "item_text",
          "allowSearchFilter": true,
          "searchPlaceholderText": "Buscar",
          "noDataAvailablePlaceholderText": "Datos no disponibles",
          "closeDropDownOnSelection": true
        };
      };

      var DropdownSettingsSingleNoSearchMock = function DropdownSettingsSingleNoSearchMock() {
        return {
          "singleSelection": true,
          "idField": "item_id",
          "textField": "item_text",
          "noDataAvailablePlaceholderText": "Datos no disponibles",
          "closeDropDownOnSelection": true
        };
      };
      /***/

    },

    /***/
    "XPLf":
    /*!************************************!*\
      !*** ./src/app/model/TransLine.ts ***!
      \************************************/

    /*! exports provided: TransLine */

    /***/
    function XPLf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransLine", function () {
        return TransLine;
      });

      var TransLine = function TransLine() {
        _classCallCheck(this, TransLine);
      };
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sidebar/sidebar.module */
      "wCP4");
      /* harmony import */


      var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/footer/footer.module */
      "cNqA");
      /* harmony import */


      var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/navbar/navbar.module */
      "CpO+");
      /* harmony import */


      var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/fixedplugin/fixedplugin.module */
      "5My1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _pages_company_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/company/company.component */
      "2Ta4");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/user/user.component */
      "3OJA");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./auth.guard */
      "tIkO");
      /* harmony import */


      var _pages_gestion_gestion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pages/gestion/gestion.component */
      "reHI");
      /* harmony import */


      var _pipes_searchfilter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pipes/searchfilter.pipe */
      "arCq");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _pages_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/reporte/reporte.component */
      "/Elm");
      /* harmony import */


      var _views_tables_table_filter_reportes_table_filter_reportes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./views/tables/table-filter-reportes/table-filter-reportes.component */
      "6Upx");
      /* harmony import */


      var _views_forms_form_filter_reportes_form_filter_reportes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./views/forms/form-filter-reportes/form-filter-reportes.component */
      "D+7Y");
      /* harmony import */


      var _utils_excel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./utils/excel */
      "Rw9g");
      /* harmony import */


      var _utils_pdf__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./utils/pdf */
      "jR5x");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _pages_gestion_detalle_gestion_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./pages/gestion/detalle-gestion.component */
      "wIoh");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_17__["AdminLayoutComponent"], _pages_company_company_component__WEBPACK_IMPORTED_MODULE_18__["CompanyComponent"], _pages_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_26__["ReporteComponent"], _views_tables_table_filter_reportes_table_filter_reportes_component__WEBPACK_IMPORTED_MODULE_27__["TableFilterReportesComponent"], _views_forms_form_filter_reportes_form_filter_reportes_component__WEBPACK_IMPORTED_MODULE_28__["FormFilterReportesComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _pages_user_user_component__WEBPACK_IMPORTED_MODULE_21__["UserComponent"], _pages_gestion_gestion_component__WEBPACK_IMPORTED_MODULE_23__["GestionComponent"], _pipes_searchfilter_pipe__WEBPACK_IMPORTED_MODULE_24__["SearchfilterPipe"], _pages_gestion_detalle_gestion_component__WEBPACK_IMPORTED_MODULE_33__["DetalleGestionComponent"]],
        imports: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_25__["NgMultiSelectDropDownModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_16__["AppRoutes"], {
          useHash: true
        }), _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_13__["NavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_14__["FixedPluginModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MatMomentDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_31__["NgxSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_32__["NgxPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_13__["NavbarModule"]],
        providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], _utils_excel__WEBPACK_IMPORTED_MODULE_29__["Excel"], _utils_pdf__WEBPACK_IMPORTED_MODULE_30__["PDF"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "arCq":
    /*!********************************************!*\
      !*** ./src/app/pipes/searchfilter.pipe.ts ***!
      \********************************************/

    /*! exports provided: SearchfilterPipe */

    /***/
    function arCq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchfilterPipe", function () {
        return SearchfilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchfilterPipe = /*#__PURE__*/function () {
        function SearchfilterPipe() {
          _classCallCheck(this, SearchfilterPipe);
        }

        _createClass(SearchfilterPipe, [{
          key: "transform",
          value: function transform(shifts, searchValue) {
            if (!shifts || !searchValue) {
              return shifts;
            }

            return shifts.filter(function (shift) {
              return shift.driver.name.toLowerCase().includes(searchValue.toLowerCase()) || shift.containerYard.code.toLowerCase().includes(searchValue.toLowerCase()) || shift.driver.identification.toLowerCase().includes(searchValue.toLowerCase());
            });
          }
        }]);

        return SearchfilterPipe;
      }();

      SearchfilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchfilter'
      })], SearchfilterPipe);
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutes */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");

      var AppRoutes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [{
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }, {
        path: '**',
        redirectTo: 'login'
      }];
      /***/
    },

    /***/
    "cNqA":
    /*!************************************************!*\
      !*** ./src/app/shared/footer/footer.module.ts ***!
      \************************************************/

    /*! exports provided: FooterModule */

    /***/
    function cNqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer.component */
      "jQpT");

      var FooterModule = function FooterModule() {
        _classCallCheck(this, FooterModule);
      };

      FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
      })], FooterModule);
      /***/
    },

    /***/
    "cyYJ":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/form-filter-reportes/form-filter-reportes.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cyYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card card-user\">\n        <div class=\"card-header\">\n          <div class=\"px-4\">\n            <h5 class=\"card-title\">Reportes</h5>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"px-4\">\n            <form [formGroup]=\"formFilter\">\n              <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Campos <span class=\"text-danger\">*</span></label>\n                      <ng-multiselect-dropdown\n                          formControlName=\"campos\"\n                          placeholder=\"Seleccione los campos\"\n                          [settings]=\"dropdownSettingsMultiple\"\n                          [data]=\"dropdownList\"\n                      >\n                      </ng-multiselect-dropdown>\n                  </div>\n                </div>\n              </div>            \n              <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Título del documento</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese el título del documento\" formControlName=\"titulo\">\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Tipo de plantilla</label>\n                    <ng-multiselect-dropdown\n                          [formControl]=\"inputTipoPlantilla\"\n                          placeholder=\"Seleccione el tipo de plantilla\"\n                          [settings]=\"dropdownSettingsSingleNoSearch\"\n                          [data]=\"tipoPlantilla\"\n                      >\n                      </ng-multiselect-dropdown>\n                  </div>\n                </div>\n              </div> -->\n              <!-- <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-primary active\">\n                      <input type=\"radio\" name=\"options\" id=\"option1\" checked> Diaria\n                    </label>\n                    <label class=\"btn btn-primary\">\n                      <input type=\"radio\" name=\"options\" id=\"option2\"> Por rango de fechas\n                    </label>\n                  </div>\n                </div>\n              </div> -->\n              <div class=\"row\">\n                <div class=\"col-md-6 py-1\">\n                  <div class=\"form-group\">\n                    <label>Fecha Inicial</label>\n                    <input type=\"date\" class=\"form-control col-mx\" formControlName=\"fechaIni\">\n                  </div>\n                </div>\n                <div class=\"col-md-6 py-1\">\n                  <div class=\"form-group\">\n                    <label>Fecha Fin</label>\n                    <input type=\"date\" class=\"form-control col-mx\" formControlName=\"fechaFin\" [min]=\"min\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Cliente</label>\n                    <ng-multiselect-dropdown\n                          formControlName=\"cliente\"\n                          placeholder=\"Seleccione el cliente\"\n                          [settings]=\"dropdownSettingsSingle\"\n                          [data]=\"clients\"\n                      >\n                      </ng-multiselect-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Linea</label>\n                    <ng-multiselect-dropdown\n                          formControlName=\"linea\"\n                          placeholder=\"Seleccione la linea\"\n                          [settings]=\"dropdownSettingsSingle\"\n                          [data]=\"lines\"\n                      >\n                      </ng-multiselect-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Clase</label>\n                    <ng-multiselect-dropdown\n                          formControlName=\"clase\"\n                          placeholder=\"Seleccione la clase\"\n                          [settings]=\"dropdownSettingsSingleNoSearch\"\n                          [data]=\"shiftClass\"\n                      >\n                      </ng-multiselect-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Patio</label>\n                    <ng-multiselect-dropdown\n                          formControlName=\"patio\"\n                          placeholder=\"Seleccione un patio\"\n                          [settings]=\"dropdownSettingsSingle\"\n                          [data]=\"containerYarn\"\n                      >\n                      </ng-multiselect-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12 py-1\">\n                  <div class=\"form-group\">\n                    <label>Tipo/tamaño de contenedor</label>\n                    <ng-multiselect-dropdown\n                          formControlName=\"tipoTamanioContenedor\"\n                          placeholder=\"Seleccione un tipo/tamaño de contenedor\"\n                          [settings]=\"dropdownSettingsSingle\"\n                          [data]=\"containerType\"\n                      >\n                      </ng-multiselect-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"update ml-auto mr-auto\">\n                  <button class=\"btn btn-primary btn-round\" [disabled]=\"formFilter.invalid\" (click)=\"filter()\">Consultar</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
      /***/
    },

    /***/
    "e3N7":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reporte/reporte.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function e3N7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\" [fullScreen] = \"false\">\n    <p style=\"color: white\" > Cargando... </p>\n</ngx-spinner>\n<app-form-filter-reportes [hidden]=\"showTable\" (filterData)=\"filter($event)\"></app-form-filter-reportes>\n<app-table-filter-reportes *ngIf=\"showTable\" [campos]=\"campos\" [turnos]=\"turnos\" (volver)=\"showTable=false\" [info]=\"info\" [filter]=\"filterCampos\" ></app-table-filter-reportes>";
      /***/
    },

    /***/
    "f4Bv":
    /*!****************************************************!*\
      !*** ./src/app/templates/tables/table-reportes.ts ***!
      \****************************************************/

    /*! exports provided: tableReportesTemplate */

    /***/
    function f4Bv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tableReportesTemplate", function () {
        return tableReportesTemplate;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/mocks/campos-filter.mock */
      "y2Y/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

      var tableReportesTemplate = function tableReportesTemplate(turnos, campos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var info, arrayTurnos;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  info = {}; // console.time('hola')

                  /*
                  let arrayTurnos = []
                  for (let j = 0; j < turnos.length; j++) {
                      let datos = {}
                      for (let i = 0; i < campos.length; i++) {
                          if (campos[i] === "INGRESO") datos[campos[i]] = moment(turnos[j][ConvertirDatos[campos[i]]]).format('HH:mm:ss')
                          else datos[campos[i]] = turnos[j][ConvertirDatos[campos[i]]]
                      }
                      arrayTurnos.push(datos)
                  } */

                  arrayTurnos = turnos.map(function (turno) {
                    var datos = {};

                    if (turno['shiftClass']['name'] !== "reenturne carretera" && turno['shiftClass']['name'] !== "reenturne urbanero") {
                      if (!info[turno['shiftClass']['name']]) info[turno['shiftClass']['name']] = {};
                      info[turno['shiftClass']['name']]['price'] = (info[turno['shiftClass']['name']]['price'] || 0) + turno['price'];
                      info[turno['shiftClass']['name']]['count'] = (info[turno['shiftClass']['name']]['count'] || 0) + 1;
                    } else {
                      if (!info['reenturnados']) info['reenturnados'] = {};
                      info['reenturnados']['price'] = (info['reenturnados']['price'] || 0) + turno['price'];
                      info['reenturnados']['count'] = (info['reenturnados']['count'] || 0) + 1;
                    }

                    campos.map(function (campo) {
                      switch (campo) {
                        case "INGRESO":
                          datos[campo] = moment__WEBPACK_IMPORTED_MODULE_2__(turno[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]]).format('HH:mm:ss');
                          break;

                        case "PLACA":
                          datos[campo] = turno.driver[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]];
                          break;

                        case "CONDUCTOR O EMPRESA":
                          datos[campo] = (turno.driver[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]] || '') + (" - ".concat(turno.client[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]]) || '');
                          break;

                        case "CC O NIT":
                          datos[campo] = (turno.driver[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]] || '') + (" - ".concat(turno.client['nit']) || '');
                          break;

                        case "LINEA":
                          datos[campo] = turno.transLine[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]];
                          break;

                        case "PATIO":
                          datos[campo] = turno.containerYard[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]];
                          break;

                        case "CONTENEDORES":
                          datos['CONTENEDOR I'] = turno.containers[0] ? turno.containers[0][app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]] : '';
                          datos['CONTENEDOR II'] = turno.containers[1] ? turno.containers[1][app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]] : '';
                          break;

                        case "TIPO/TAMAÑO":
                          datos['TIPO/TAMAÑO I'] = turno.containers[0] && turno.containers[0].containerType ? turno.containers[0].containerType[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]] : '';
                          datos['TIPO/TAMAÑO II'] = turno.containers[1] && turno.containers[1].containerType ? turno.containers[1].containerType[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]] : '';
                          break;

                        default:
                          datos[campo] = turno[app_mocks_campos_filter_mock__WEBPACK_IMPORTED_MODULE_1__["ConvertirDatos"][campo]];
                          break;
                      }
                    });
                    return datos;
                  }); // console.timeEnd('hola')

                  return _context9.abrupt("return", {
                    arrayTurnos: arrayTurnos,
                    info: info
                  });

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));
      };
      /***/

    },

    /***/
    "h8ke":
    /*!*************************************************!*\
      !*** ./src/app/services/shift-class.service.ts ***!
      \*************************************************/

    /*! exports provided: ShiftClassService */

    /***/
    function h8ke(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShiftClassService", function () {
        return ShiftClassService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var ShiftClassService = /*#__PURE__*/function () {
        function ShiftClassService(http, config) {
          _classCallCheck(this, ShiftClassService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url + '/clases-turnos';
        }

        _createClass(ShiftClassService, [{
          key: "getAllReport",
          value: function getAllReport() {
            return this.http.get("".concat(this.URL_API, "/getAllReport"));
          }
        }]);

        return ShiftClassService;
      }();

      ShiftClassService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      ShiftClassService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], ShiftClassService);
      /***/
    },

    /***/
    "hDYL":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tables/table-filter-reportes/table-filter-reportes.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hDYL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-beat\" [fullScreen] = \"false\">\n  <p style=\"color: white\" > Descargando... </p>\n</ngx-spinner>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"d-flex justify-content-between px-4\">\n            <h4 class=\"card-title\" *ngIf=\"turnosData.length\">Reportes ({{ turnosData.length }})</h4>\n            <h4 class=\"card-title\" *ngIf=\"!turnosData.length\">Reportes</h4>\n            <div class=\"d-flex\">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-danger dropdown-toggle\" [disabled]=\"!turnosData.length\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Exportar\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <a class=\"dropdown-item\" (click)=\"exportar('EXCEL')\">EXCEL</a>\n                  <a class=\"dropdown-item\" (click)=\"exportar('PDF')\">PDF</a>\n                </div>\n              </div>\n              <button class=\"btn btn-secondary \" type=\"button\" (click)=\"volver.emit()\">\n                atras\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"px-4\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-sm\" *ngIf=\"camposData.length\">\n                <thead class=\" text-primary\">\n                  <th *ngFor=\"let campo of camposData\">\n                    {{ campo }}\n                  </th>\n                </thead>\n                <tbody *ngIf=\"turnosData.length\">\n                  <tr *ngFor=\"let turno of turnosData | paginate: config \">\n                    <td *ngFor=\"let campo of camposData\">\n                      {{ turno[campo] }}\n                    </td>\n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"!turnosData.length\">\n                  <td colspan=\"100%\" class=\"text-center py-4\">\n                    No hay datos relacionados\n                  </td>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"d-flex justify-content-between p-2\" *ngIf=\"turnosData.length\">\n              <pagination-controls\n              (pageChange)=\"onPageChange($event)\"\n              (pageBoundsCorrection)=\"onPageBoundsCorrection($event)\"\n              previousLabel=\"Anterior\"\n              nextLabel=\"Siguiente\"\n              >\n              </pagination-controls>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "j/Ji":
    /*!************************************************************!*\
      !*** ./src/app/templates/pdf-export/pdf-reporte-turnos.ts ***!
      \************************************************************/

    /*! exports provided: pdfReporteTurnosTemplate */

    /***/
    function jJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pdfReporteTurnosTemplate", function () {
        return pdfReporteTurnosTemplate;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

      moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('es');

      var pdfReporteTurnosTemplate = function pdfReporteTurnosTemplate(turnos, campos, info, filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          var filterData, formatter, table, widthsTable, options, headerTable, filterTable;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (!info['carretera']) info['carretera'] = {
                    count: 0,
                    price: 0
                  };
                  if (!info['urbanero']) info['urbanero'] = {
                    count: 0,
                    price: 0
                  };
                  if (!info['exportacion']) info['exportacion'] = {
                    count: 0,
                    price: 0
                  };
                  if (!info['reposiciones']) info['reposiciones'] = {
                    count: 0,
                    price: 0
                  };
                  if (!info['reenturnados']) info['reenturnados'] = {
                    count: 0,
                    price: 0
                  };
                  formatter = new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0
                  });
                  table = [];
                  widthsTable = [];
                  options = campos.length < 11 ? '*' : 'auto';
                  headerTable = campos.map(function (row) {
                    widthsTable.push(options);
                    return {
                      text: row,
                      style: 'headerTableData'
                    };
                  });
                  table.push(headerTable);
                  turnos.map(function (turno) {
                    var campoData = campos.map(function (c) {
                      return {
                        text: turno[c]
                      };
                    });
                    table.push(campoData);
                  });

                  if (filter.fechaIni || filter.fechaFin || filter.clase.length || filter.patio.length || filter.linea.length || filter.cliente.length || filter.tipoTamanioContenedor.length) {
                    filterTable = [];
                    if (filter.fechaIni) filterTable.push([{
                      text: 'FECHA',
                      style: 'tableFilter',
                      margin: [20, 0]
                    }, {
                      text: "".concat(moment__WEBPACK_IMPORTED_MODULE_1__(filter.fechaIni).format('LL'), " ").concat(filter.fechaFin ? ' - ' + moment__WEBPACK_IMPORTED_MODULE_1__(filter.fechaFin).format('LL') : ''),
                      alignment: 'center'
                    }]);
                    if (filter.clase.length) filterTable.push([{
                      text: 'CLASE',
                      style: 'tableFilter',
                      margin: [20, 0]
                    }, {
                      text: filter.clase[0].item_text,
                      alignment: 'center'
                    }]);
                    if (filter.patio.length) filterTable.push([{
                      text: 'PATIO',
                      style: 'tableFilter',
                      margin: [20, 0]
                    }, {
                      text: filter.patio[0].item_text,
                      alignment: 'center'
                    }]);
                    if (filter.linea.length) filterTable.push([{
                      text: 'LINEA',
                      style: 'tableFilter',
                      margin: [20, 0]
                    }, {
                      text: filter.linea[0].item_text,
                      alignment: 'center'
                    }]);
                    if (filter.cliente.length) filterTable.push([{
                      text: 'CLASE',
                      style: 'tableFilter',
                      margin: [20, 0]
                    }, {
                      text: filter.cliente[0].item_text,
                      alignment: 'center'
                    }]);
                    if (filter.tipoTamanioContenedor.length) filterTable.push([{
                      text: 'CLASE',
                      style: 'tableFilter',
                      margin: [20, 0]
                    }, {
                      text: filter.tipoTamanioContenedor[0].item_text,
                      alignment: 'center'
                    }]);
                    filterData = {
                      table: {
                        widths: ['auto', '*'],
                        body: filterTable
                      },
                      margin: [0, 25, 0, 0]
                    };
                  }

                  return _context10.abrupt("return", {
                    footer: function footer(currentPage, pageCount) {
                      return {
                        columns: [{
                          text: 'DIRECCIÓN: VIA ALTERNA KM-7 CALLE 15A # 47 BIS - 11 - BUENAVENTURA',
                          style: 'footer'
                        }, {
                          text: 'PÁGINA ' + currentPage.toString() + ' DE ' + pageCount,
                          alignment: 'right',
                          style: 'footer'
                        }],
                        margin: [20, 3, 20, 0]
                      };
                    },
                    pageSize: 'legal',
                    pageMargins: [20, 20, 20, 25],
                    pageOrientation: 'landscape',
                    content: [{
                      image: 'data:image/png;base64,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',
                      alignment: 'center'
                    }, {
                      text: '"PIKI7 SAS"',
                      fontSize: 12,
                      bold: true,
                      alignment: 'center'
                    }, {
                      text: 'NIT. 900.368.831-9',
                      fontSize: 10,
                      alignment: 'center'
                    }, filterData, {
                      text: filter.titulo ? filter.titulo.toUpperCase() : 'PLANILLA DE ENTURNAMIENTO',
                      alignment: 'center',
                      fontSize: 14,
                      bold: true,
                      margin: [0, 18, 0, 18]
                    }, {
                      style: 'tableContent',
                      table: {
                        widths: widthsTable,
                        headerRows: 1,
                        body: table
                      },
                      layout: {
                        fillColor: function fillColor(rowIndex, node, columnIndex) {
                          return rowIndex % 2 === 0 ? '#EEEEEE' : null;
                        }
                      },
                      margin: [0, 0, 0, 30]
                    }, {
                      text: 'RESUMEN ESTADISTICO',
                      alignment: 'center',
                      fontSize: 12,
                      bold: true,
                      margin: [0, 70, 0, 20]
                    }, {
                      style: 'tableContent',
                      table: {
                        widths: ['*', 'auto', 'auto'],
                        body: [[{
                          text: 'DETALLE',
                          alignment: 'right',
                          bold: true,
                          fillColor: '#95A5A6',
                          margin: [10, 0]
                        }, {
                          text: 'CANTIDADES',
                          style: 'headerTableStatistical'
                        }, {
                          text: 'PRECIOS',
                          style: 'headerTableStatistical'
                        }], [{
                          text: 'TURNOS TIPOS CARRETERA',
                          alignment: 'right',
                          bold: true,
                          margin: [10, 0]
                        }, {
                          text: "".concat(info['carretera'].count, " tuno(s)"),
                          alignment: 'center',
                          margin: [25, 0]
                        }, {
                          text: "".concat(formatter.format(info['carretera'].price), " COP"),
                          alignment: 'center',
                          margin: [25, 0]
                        }], [{
                          text: 'TURNOS TIPOS URBANERO',
                          alignment: 'right',
                          bold: true,
                          margin: [10, 0]
                        }, {
                          text: "".concat(info['urbanero'].count, " tuno(s)"),
                          alignment: 'center',
                          margin: [25, 0]
                        }, {
                          text: "".concat(formatter.format(info['urbanero'].price), " COP"),
                          alignment: 'center',
                          margin: [25, 0]
                        }], [{
                          text: 'TURNOS TIPOS EXPORTACION',
                          alignment: 'right',
                          bold: true,
                          margin: [10, 0]
                        }, {
                          text: "".concat(info['exportacion'].count, " tuno(s)"),
                          alignment: 'center',
                          margin: [25, 0]
                        }, {
                          text: "".concat(formatter.format(info['exportacion'].price), " COP"),
                          alignment: 'center',
                          margin: [25, 0]
                        }], [{
                          text: 'TURNOS TIPOS REPOSICIONES',
                          alignment: 'right',
                          bold: true,
                          margin: [10, 0]
                        }, {
                          text: "".concat(info['reposiciones'].count, " tuno(s)"),
                          alignment: 'center',
                          margin: [25, 0]
                        }, {
                          text: "".concat(formatter.format(info['reposiciones'].price), " COP"),
                          alignment: 'center',
                          margin: [25, 0]
                        }], [{
                          text: 'REENTURNADOS',
                          alignment: 'right',
                          bold: true,
                          margin: [10, 0]
                        }, {
                          text: "".concat(info['reenturnados'].count, " tuno(s)"),
                          alignment: 'center',
                          margin: [25, 0]
                        }, {
                          text: "".concat(formatter.format(info['reenturnados'].price), " COP"),
                          alignment: 'center',
                          margin: [25, 0]
                        }], [{
                          text: 'TOTAL',
                          alignment: 'right',
                          bold: true,
                          margin: [10, 0]
                        }, {
                          text: "".concat(info['carretera'].count + info['urbanero'].count + info['exportacion'].count + info['reposiciones'].count + info['reenturnados'].count, " tuno(s)"),
                          alignment: 'center',
                          bold: true,
                          margin: [25, 0]
                        }, {
                          text: "".concat(formatter.format(info['carretera'].price + info['urbanero'].price + info['exportacion'].price + info['reposiciones'].price + info['reenturnados'].price), " COP"),
                          alignment: 'center',
                          bold: true,
                          margin: [25, 0]
                        }]]
                      },
                      layout: {
                        fillColor: function fillColor(rowIndex, node, columnIndex) {
                          return rowIndex % 2 === 0 ? '#EEEEEE' : null;
                        }
                      }
                    }],
                    styles: {
                      headerTableData: {
                        bold: true,
                        fillColor: '#95A5A6'
                      },
                      headerTableStatistical: {
                        alignment: 'center',
                        bold: true,
                        fillColor: '#95A5A6',
                        margin: [10, 0]
                      },
                      footer: {
                        opacity: 0.4,
                        fontSize: 11
                      },
                      tableFilter: {
                        bold: true
                      },
                      tableContent: {
                        fontSize: 10
                      }
                    }
                  });

                case 14:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));
      };
      /***/

    },

    /***/
    "jGP6":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function jGP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Pacificode</a>\n        </div>\n    </div>\n</footer>\n";
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "jGP6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "jR5x":
    /*!******************************!*\
      !*** ./src/app/utils/pdf.ts ***!
      \******************************/

    /*! exports provided: PDF */

    /***/
    function jR5x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PDF", function () {
        return PDF;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__);

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default.a.pdfMake.vfs;

      var PDF = /*#__PURE__*/function () {
        function PDF() {
          _classCallCheck(this, PDF);
        }

        _createClass(PDF, [{
          key: "exportAsPDFFile",
          value: function exportAsPDFFile(docDefinition, PDFFileName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default.a.createPdf(docDefinition).download(PDFFileName);

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }]);

        return PDF;
      }();

      PDF = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PDF);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, config, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.config = config;
          this.router = router;
          this.URL = 'http://localhost:3000/api';
          this.URL_API = this.config.getConfig().url;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(user) {
            return this.http.post("".concat(this.URL_API, "/login"), user);
          }
        }, {
          key: "loggedInd",
          value: function loggedInd() {
            return !!localStorage.getItem('token');
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthService);
      /***/
    },

    /***/
    "lTHr":
    /*!*****************************************************!*\
      !*** ./src/app/pages/company/company.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function lTHr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "n/eK":
    /*!*******************************************************!*\
      !*** ./src/app/templates/pdf-export/tiquete-turno.ts ***!
      \*******************************************************/

    /*! exports provided: pdfTiqueteTurnosTemplate */

    /***/
    function nEK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pdfTiqueteTurnosTemplate", function () {
        return pdfTiqueteTurnosTemplate;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

      moment__WEBPACK_IMPORTED_MODULE_1__["locale"]('es');

      var pdfTiqueteTurnosTemplate = function pdfTiqueteTurnosTemplate(info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
          var formatter;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  formatter = new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0
                  });
                  return _context12.abrupt("return", {
                    pageSize: {
                      width: 300,
                      height: 'auto'
                    },
                    pageMargins: [20, 20, 20, 25],
                    content: [{
                      image: 'data:image/jpeg;base64,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',
                      alignment: 'center',
                      width: 50,
                      height: 50
                    }, {
                      text: '"PIKI7 SAS"',
                      fontSize: 12,
                      bold: true,
                      alignment: 'center'
                    }, {
                      text: 'NIT. 900.368.831-9',
                      fontSize: 10,
                      alignment: 'center'
                    }, {
                      text: "Tiquete Turno #".concat(info.dayShift),
                      alignment: 'center',
                      fontSize: 14,
                      bold: true,
                      margin: [0, 18, 0, 18]
                    }, {
                      style: 'tableContent',
                      table: {
                        widths: [150, 'auto'],
                        body: [[{
                          text: "".concat(info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? 'Nombre del conductor' : 'Nombre del empresa'),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.driver.name),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: "".concat(info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? 'Documento del conductor' : 'Nit del empresa'),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.driver.identification),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: "".concat(info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? 'Placa del vehiculo' : ''),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? info.driver.vehicle_plate : ''),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: 'Contenedor 1',
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.containers.length > 0 ? info.containers[0].code : 'N/A'),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: 'Tipo de cont',
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.containers.length > 0 ? info.containers[0].containerType.description : 'N/A'),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: 'Contenedor 2',
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.containers.length > 1 ? info.containers[1].code : 'N/A'),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: 'Tipo de cont',
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.containers.length > 1 ? info.containers[1].containerType.description : 'N/A'),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: 'Fecha de despacho',
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(moment__WEBPACK_IMPORTED_MODULE_1__(info.date).format('lll')),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: 'Destino',
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "".concat(info.containerYard.description),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right'
                        }], [{
                          text: "Observaciones: ",
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          bold: true
                        }, {
                          text: "",
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left'
                        }], [{
                          text: "".concat(info.obvs),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left'
                        }, {
                          text: "",
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left'
                        }], [{
                          text: 'TOTAL',
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'left',
                          fontSize: 18,
                          margin: [0, 20],
                          bold: true
                        }, {
                          text: "".concat(formatter.format(info.price)),
                          borderColor: ['#fff', '#fff', '#fff', '#fff'],
                          alignment: 'right',
                          margin: [0, 20],
                          fontSize: 18,
                          bold: true
                        }]]
                      }
                    }],
                    styles: {
                      headerTableData: {
                        bold: true,
                        fillColor: '#95A5A6',
                        borderColor: '#fff'
                      },
                      headerTableStatistical: {
                        alignment: 'center',
                        bold: true,
                        fillColor: '#95A5A6',
                        margin: [10, 0]
                      },
                      footer: {
                        opacity: 0.4,
                        fontSize: 11
                      },
                      tableFilter: {
                        bold: true
                      },
                      tableContent: {
                        fontSize: 10
                      }
                    }
                  });

                case 2:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
      };
      /***/

    },

    /***/
    "p3mD":
    /*!*****************************************************!*\
      !*** ./src/app/pages/gestion/gestion.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function p3mD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "pG9d":
    /*!*************************************************!*\
      !*** ./src/app/pages/login/login.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function pG9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "html,\nbody {\n    background-image: url('DistantMountain.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.formulario {\n    background: rgba(0, 0, 0, .1);\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.568);\n    color: white;\n}\n\n.form-control {\n    background: rgba(0, 0, 0, .3);\n    border-style: none;\n    transition: 0.5s ease-in;\n    outline: none;\n    box-shadow: none;\n}\n\n.form-control:focus {\n    background: none;\n    box-shadow: none;\n    outline: none;\n}\n\n.form-control::-moz-placeholder {\n    color: white;\n}\n\n.form-control:-ms-input-placeholder {\n    color: white;\n}\n\n.form-control::placeholder {\n    color: white;\n}\n\n.center {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    padding: 1rem;\n    justify-content: center;\n    align-items: center;\n  }\n\n.heading {\n    font-size: 10vw;\n    text-shadow: 4px 4px 0px #3F7FBF;\n    mix-blend-mode: screen;\n    -webkit-animation: fadeIn 2.5s linear forwards;\n            animation: fadeIn 2.5s linear forwards;\n  }\n\n@-webkit-keyframes fadeIn {\n      0% {\n          opacity: 0\n      }\n  \n      100% {\n          opacity: 1;\n      }\n  }\n\n@keyframes fadeIn {\n      0% {\n          opacity: 0\n      }\n  \n      100% {\n          opacity: 1;\n      }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksNENBQThEO0lBQzlELHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUZBO0lBQ0ksWUFBWTtBQUNoQjs7QUFGQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEM7O0FBRUE7TUFDSTtVQUNJO01BQ0o7O01BRUE7VUFDSSxVQUFVO01BQ2Q7RUFDSjs7QUFSQTtNQUNJO1VBQ0k7TUFDSjs7TUFFQTtVQUNJLFVBQVU7TUFDZDtFQUNKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvRGlzdGFudE1vdW50YWluLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41NjgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEwdnc7XG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMHB4ICMzRjdGQkY7XG4gICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICBhbmltYXRpb246IGZhZGVJbiAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH1cbiAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICB9XG4iXX0= */";
      /***/
    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config.service */
      "r4Kj");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, config) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.config = config;
          this.URL_API = this.config.getConfig().url;
        }

        _createClass(UserService, [{
          key: "getUsers",
          value: function getUsers() {
            return this.http.get("".concat(this.URL_API, "/usuarios"));
          }
        }, {
          key: "newUser",
          value: function newUser(user) {
            return this.http.post("".concat(this.URL_API, "/usuarios"), user);
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, user) {
            return this.http.put("".concat(this.URL_API, "/usuarios/") + id, user);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.http["delete"](this.URL_API + '/usuarios/eliminar/' + id);
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], UserService);
      /***/
    },

    /***/
    "r4Kj":
    /*!********************************************!*\
      !*** ./src/app/services/config.service.ts ***!
      \********************************************/

    /*! exports provided: ConfigService */

    /***/
    function r4Kj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../config/index.js */
      "1BMa");

      var ConfigService = /*#__PURE__*/function () {
        function ConfigService() {
          _classCallCheck(this, ConfigService);

          this.configuration = _config_index_js__WEBPACK_IMPORTED_MODULE_2__["config"];
          this.ee = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ConfigService, [{
          key: "getConfig",
          value: function getConfig() {
            return this.configuration;
          }
        }, {
          key: "toggleStep",
          value: function toggleStep(step) {
            this.ee.emit(step);
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ctorParameters = function () {
        return [];
      };

      ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ConfigService);
      /***/
    },

    /***/
    "reHI":
    /*!****************************************************!*\
      !*** ./src/app/pages/gestion/gestion.component.ts ***!
      \****************************************************/

    /*! exports provided: GestionComponent */

    /***/
    function reHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionComponent", function () {
        return GestionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gestion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gestion.component.html */
      "zoOJ");
      /* harmony import */


      var _gestion_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gestion.component.css */
      "p3mD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var app_services_gestion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/services/gestion.service */
      "0RDr");
      /* harmony import */


      var app_services_shift_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/services/shift.service */
      "GnyV");
      /* harmony import */


      var app_utils_pdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/utils/pdf */
      "jR5x");
      /* harmony import */


      var app_templates_pdf_export_tiquete_turno__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/templates/pdf-export/tiquete-turno */
      "n/eK");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

      var GestionComponent = /*#__PURE__*/function () {
        function GestionComponent(gestionService, shiftService, spinner, modalService, pdf, formBuilder) {
          _classCallCheck(this, GestionComponent);

          this.gestionService = gestionService;
          this.shiftService = shiftService;
          this.spinner = spinner;
          this.modalService = modalService;
          this.pdf = pdf;
          this.formBuilder = formBuilder;
          this.closeResult = '';
          this.searchvalue = '';
          this.submitted = false;
          this.step = true;
          this.config = {
            itemsPerPage: 5,
            currentPage: 1
          };
          this.shift = {
            dayShift: '',
            client: {},
            driver: {},
            shiftClassId: '',
            containers: [],
            date: '',
            price: 0
          };
          this.shiftForm = this.formBuilder.group({
            obvs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]]
          });
        }

        _createClass(GestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getInfo();
          }
        }, {
          key: "cf",
          get: function get() {
            return this.shiftForm.controls;
          }
        }, {
          key: "getInfo",
          value: function getInfo() {
            var _this20 = this;

            this.spinner.show();
            this.step = true;
            this.gestionService.getInfo().subscribe(function (response) {
              _this20.shifts = response.info;

              _this20.spinner.hide();
            });
          }
        }, {
          key: "getCanceleds",
          value: function getCanceleds() {
            var _this21 = this;

            this.spinner.show();
            this.step = false;
            this.gestionService.getCanceled().subscribe(function (response) {
              _this21.shifts = response.info;

              _this21.spinner.hide();
            });
          }
        }, {
          key: "openModal",
          value: function openModal(content, idShift) {
            var _this22 = this;

            this.idShift = idShift;
            this.modalService.open(content, {
              size: 'lg',
              ariaLabelledBy: 'modal-basic-title',
              centered: true
            }).result.then(function (result) {
              if (result === 'save') {
                _this22.closeResult = "Closed with: ".concat(result);

                _this22.cancelShift();
              } else {
                _this22.shiftForm.controls.obvs.reset();
              }
            }, function (reason) {
              _this22.closeResult = "Dismissed ".concat(_this22.getDismissReason(reason));

              _this22.shiftForm.controls.obvs.reset();
            });
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(number) {
            this.config.currentPage = number;
          }
        }, {
          key: "onPageBoundsCorrection",
          value: function onPageBoundsCorrection(number) {
            this.config.currentPage = number;
          }
        }, {
          key: "cancelShift",
          value: function cancelShift() {
            var _this23 = this;

            this.shiftService.cancel(this.shiftForm.value, this.idShift.toString()).subscribe(function (response) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Anular', "".concat(response.message), 'success');

              _this23.getInfo();

              _this23.getCanceleds();
            }, function (err) {
              console.error('Error from the backend: ' + err.message);
            });
          }
        }, {
          key: "ticketModal",
          value: function ticketModal(id) {
            var _this24 = this;

            this.spinner.show();
            this.shiftService.getShift(id).subscribe(function (res) {
              _this24.shift = res;

              _this24.spinner.hide();

              _this24.modalService.open(_this24.myModal);
            });
          }
        }, {
          key: "genPdf",
          value: function genPdf() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var docDefinition;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.spinner.show();
                      _context13.next = 3;
                      return Object(app_templates_pdf_export_tiquete_turno__WEBPACK_IMPORTED_MODULE_9__["pdfTiqueteTurnosTemplate"])(this.shift);

                    case 3:
                      docDefinition = _context13.sent;
                      this.pdf.exportAsPDFFile(docDefinition, "Tiquete");
                      this.spinner.hide();

                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return GestionComponent;
      }();

      GestionComponent.ctorParameters = function () {
        return [{
          type: app_services_gestion_service__WEBPACK_IMPORTED_MODULE_6__["GestionService"]
        }, {
          type: app_services_shift_service__WEBPACK_IMPORTED_MODULE_7__["ShiftService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: app_utils_pdf__WEBPACK_IMPORTED_MODULE_8__["PDF"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      GestionComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['contentTicket']
        }]
      };
      GestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gestion',
        template: _raw_loader_gestion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gestion_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_gestion_service__WEBPACK_IMPORTED_MODULE_6__["GestionService"], app_services_shift_service__WEBPACK_IMPORTED_MODULE_7__["ShiftService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], app_utils_pdf__WEBPACK_IMPORTED_MODULE_8__["PDF"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], GestionComponent);
      /***/
    },

    /***/
    "tIkO":
    /*!*******************************!*\
      !*** ./src/app/auth.guard.ts ***!
      \*******************************/

    /*! exports provided: AuthGuard */

    /***/
    function tIkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.authService.loggedInd()) {
              return true;
            }

            this.router.navigate(['/auth']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "tsTQ":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function tsTQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n   <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <h4 class=\"card-title col-8\">Empresas Registradas En El Sistema</h4>\n          <div class=\"d-block align-self-end col-2\">\n            <button  type=\"button\" class=\"btn btn-danger\" (click)=\"open(content)\">\n              <i class=\"fa fa-plus text-white fa-lg\"></i>\n              <span class=\"text-white\"> NUEVO</span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\" class=\"text-center w200\">Opciones</th>\n              </tr>\n            </thead>\n            <tbody >\n              <tr *ngFor=\"let item of companies  | paginate: config \">\n                <td>{{ item.name }}</td>\n                <td class=\"w200\">\n                   <div class=\"d-flex justify-content-center\">\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-danger float-right btn-round mr-3 btn-sm\"\n                      (click)=\"open(content, true, item.name, item.id)\"\n                    >\n                      <i class=\"fa fa-pencil fa-sm\"></i>\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-danger float-right btn-round btn-sm\"\n                      (click)=\"deleteCompany( item.id )\"\n                    >\n                      <i class=\"fa fa-trash fa-sm\"></i>\n                    </button>\n                  </div> \n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"d-flex justify-content-between p-2\" >\n              <pagination-controls\n              (pageChange)=\"onPageChange($event)\"\n              (pageBoundsCorrection)=\"onPageBoundsCorrection($event)\"\n              previousLabel=\"Anterior\"\n              nextLabel=\"Siguiente\"\n              >\n              </pagination-controls>\n            </div>\n        </div>\n      </div>\n    </div>\n   </div>\n  </div>\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">REGISTRAR EMPRESA!</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"newCompanyForm\" class=\"mb-5\">\n            <div class=\"mb-4\">\n            <label class=\"form-label \">Nombre de la empresa</label>\n            <input type=\"text\" \n            class=\"form-control\"  \n            formControlName=\"name\" \n            placeholder=\"INombre de la empresa\"\n            >\n            <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n              *ngIf=\"(cf.name.dirty || cf.name.touched) && cf.name.errors && Submitted\">\n            </small>\n            </div>\n            <div class=\" d-flex justify-content-center\">\n                <button type=\"button\" class=\"btn btn-danger w-50\" (click)=\"newCompany()\" [disabled]=\"(cf.name.invalid)\"\n                ><span *ngIf=\"!update\">Guardar</span>\n                <span *ngIf=\"update\">Actualizar</span>\n              </button>\n               \n            </div>\n\n        </form>\n      </div>\n</ng-template>";
      /***/
    },

    /***/
    "vtrx":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function vtrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "wCP4":
    /*!*******************************************!*\
      !*** ./src/app/sidebar/sidebar.module.ts ***!
      \*******************************************/

    /*! exports provided: SidebarModule */

    /***/
    function wCP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar.component */
      "47Jg");

      var SidebarModule = function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      };

      SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
      })], SidebarModule);
      /***/
    },

    /***/
    "wIoh":
    /*!************************************************************!*\
      !*** ./src/app/pages/gestion/detalle-gestion.component.ts ***!
      \************************************************************/

    /*! exports provided: DetalleGestionComponent */

    /***/
    function wIoh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleGestionComponent", function () {
        return DetalleGestionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalle_gestion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalle-gestion.component.html */
      "MzTg");
      /* harmony import */


      var _detalle_gestion_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle-gestion.component.css */
      "VQQb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var app_model_Client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/model/Client */
      "VhGG");
      /* harmony import */


      var app_model_ContainerYard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/model/ContainerYard */
      "CpGq");
      /* harmony import */


      var app_model_Driver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/model/Driver */
      "zMtg");
      /* harmony import */


      var app_model_ShiftClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/model/ShiftClass */
      "8f1B");
      /* harmony import */


      var app_model_TransLine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/model/TransLine */
      "XPLf");
      /* harmony import */


      var app_services_gestion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/services/gestion.service */
      "0RDr");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _model_ShiftManagement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../model/ShiftManagement */
      "5FrL");

      var DetalleGestionComponent = /*#__PURE__*/function () {
        function DetalleGestionComponent(activatedRoute, spinner, gestionService, modalService, formBuilder) {
          _classCallCheck(this, DetalleGestionComponent);

          this.activatedRoute = activatedRoute;
          this.spinner = spinner;
          this.gestionService = gestionService;
          this.modalService = modalService;
          this.formBuilder = formBuilder;
          this.closeResult = '';
          this.active = 1;
          this.shiftManagement = new _model_ShiftManagement__WEBPACK_IMPORTED_MODULE_15__["ShiftManagement"]();
          this.client = new app_model_Client__WEBPACK_IMPORTED_MODULE_7__["Client"]();
          this.driver = new app_model_Driver__WEBPACK_IMPORTED_MODULE_9__["Driver"]();
          this.transLine = new app_model_TransLine__WEBPACK_IMPORTED_MODULE_11__["TransLine"]();
          this.containerYard = new app_model_ContainerYard__WEBPACK_IMPORTED_MODULE_8__["ContainerYard"]();
          this.shiftClass = new app_model_ShiftClass__WEBPACK_IMPORTED_MODULE_10__["ShiftClass"]();
          this.submitted = false;
          this.shiftId = 0;
          this.shiftEditForm = this.formBuilder.group({
            obvs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]]
          });
        }

        _createClass(DetalleGestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getShift();
          }
        }, {
          key: "cf",
          get: function get() {
            return this.shiftEditForm.controls;
          }
        }, {
          key: "getShift",
          value: function getShift() {
            var _this25 = this;

            this.spinner.show();
            this.activatedRoute.params.subscribe(function (params) {
              var id = params['id'];

              if (id) {
                _this25.gestionService.getShift(id).subscribe(function (response) {
                  console.log(response);
                  _this25.shiftManagement = response.foundShift;

                  if (_this25.shiftManagement != null) {
                    _this25.client = _this25.shiftManagement.client;
                    _this25.driver = _this25.shiftManagement.driver;
                    _this25.transLine = _this25.shiftManagement.transLine;
                    _this25.containerYard = _this25.shiftManagement.containerYard;
                    _this25.shiftClass = _this25.shiftManagement.shiftClass;

                    _this25.spinner.hide();
                  }
                });
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(content, id) {
            var _this26 = this;

            this.shiftId = id;
            this.modalService.open(content, {
              size: 'lg',
              ariaLabelledBy: 'modal-basic-title',
              centered: true
            }).result.then(function (result) {
              if (result === 'save') {
                _this26.closeResult = "Closed with: ".concat(result);

                _this26.editObvs();
              } else {
                _this26.shiftEditForm.controls.obvs.reset();
              }
            }, function (reason) {
              _this26.closeResult = "Dismissed ".concat(_this26.getDismissReason(reason));

              _this26.shiftEditForm.controls.obvs.reset();
            });
          }
        }, {
          key: "editObvs",
          value: function editObvs() {
            this.gestionService.createObvs(this.shiftEditForm.value, this.shiftId).subscribe(function (response) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire('Nueva observación', "".concat(response.message), 'success');
            }, function (err) {
              console.error('Error from the backend: ' + err.message);
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return DetalleGestionComponent;
      }();

      DetalleGestionComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"]
        }, {
          type: app_services_gestion_service__WEBPACK_IMPORTED_MODULE_12__["GestionService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      DetalleGestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-gestion',
        template: _raw_loader_detalle_gestion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_gestion_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"], app_services_gestion_service__WEBPACK_IMPORTED_MODULE_12__["GestionService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], DetalleGestionComponent);
      /***/
    },

    /***/
    "y2Y/":
    /*!*********************************************!*\
      !*** ./src/app/mocks/campos-filter.mock.ts ***!
      \*********************************************/

    /*! exports provided: CamposFilterMock, ConvertirDatos */

    /***/
    function y2Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CamposFilterMock", function () {
        return CamposFilterMock;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConvertirDatos", function () {
        return ConvertirDatos;
      });

      var CamposFilterMock = function CamposFilterMock() {
        return [{
          item_id: 1,
          item_text: 'TURNO DIARIO'
        }, {
          item_id: 2,
          item_text: 'CONSECUTIVO'
        }, {
          item_id: 3,
          item_text: 'CONDUCTOR O EMPRESA'
        }, {
          item_id: 4,
          item_text: 'CC O NIT'
        }, {
          item_id: 5,
          item_text: 'PLACA'
        }, {
          item_id: 6,
          item_text: 'CONTENEDORES'
        }, {
          item_id: 8,
          item_text: 'TIPO/TAMAÑO'
        }, {
          item_id: 9,
          item_text: 'LINEA'
        }, {
          item_id: 10,
          item_text: 'DEVOLUCION'
        }, {
          item_id: 11,
          item_text: 'INGRESO'
        }, {
          item_id: 12,
          item_text: 'PATIO'
        }];
      };

      var ConvertirDatos = {
        "TURNO DIARIO": "dayShift",
        "CONSECUTIVO": "globalShift",
        "CONDUCTOR O EMPRESA": "name",
        "CC O NIT": "identification",
        "PLACA": "vehicle_plate",
        "LINEA": "description",
        "DEVOLUCION": "date",
        "INGRESO": "createdAt",
        "PATIO": "description",
        "CONTENEDORES": "code",
        "TIPO/TAMAÑO": "description"
      };
      /***/
    },

    /***/
    "ywSW":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ywSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<body>\n    <div class=\"container\">\n        <div class=\"row justify-content-center pt-5\">\n            <div class=\"col-md-6 col-sm-8 col-xl-4 col-lg-5 formulario\">\n                <form [formGroup]=\"authForm\" (ngSubmit)=\"login()\" class=\"mb-5\">\n                    <div class=\"form-group text-center\">\n                     <img class=\"mb-1 mx-auto\" src=\"assets/img/LOGO-PIKI73.ico\">\n                    </div>\n                     <div class=\"mb-4\">\n                     <label class=\"form-label\">Nombre de usuario</label>\n                     <input type=\"text\" class=\"form-control\" placeholder=\"Ingresa tu correo\" formControlName=\"login\" placeholder=\"Ingresa el email\">\n                     <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n                         *ngIf=\"(af.login.dirty || af.login.touched) && af.login.errors && Submitted\" >\n                     </small>\n                     </div>\n                     <div class=\"mb-4\">\n                     <label class=\"form-label \">Contraseña</label>\n                     <input\n                     type=\"password\" class=\"form-control\" placeholder=\"Ingresa tu correo\"\n                     formControlName=\"password\" placeholder=\"Ingresa la contraseña\">\n                     <small class=\"bg-secondary text-light mt-1 px-2 py-1 rounded\" \n                         *ngIf=\"(af.password.dirty || af.password.touched) && af.password.errors && Submitted\" >\n                     </small>\n                     </div>\n                     <button type=\"submit\" class=\"btn btn-danger w-100\" [disabled]=\"(af.login.invalid) || (af.password.invalid)\"\n                     >Iniciar sesión</button>\n                 </form>\n            </div>\n        </div>\n        <div class=\"center\">\n            <h1 class=\"heading\">PIKI 7</h1>\n        </div>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n    </div>\n</body>\n        ";
      /***/
    },

    /***/
    "zMtg":
    /*!*********************************!*\
      !*** ./src/app/model/Driver.ts ***!
      \*********************************/

    /*! exports provided: Driver */

    /***/
    function zMtg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Driver", function () {
        return Driver;
      });

      var Driver = function Driver() {
        _classCallCheck(this, Driver);
      };
      /***/

    },

    /***/
    "zRkE":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top bg-danger\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" (click)=\"logout()\">\n            <i class=\"nc-icon nc-button-power\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
      =========================================================
      * Paper Dashboard Angular - v2.1.0
      =========================================================
      
      * Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
      * Copyright 2019 Creative Tim (https://www.creative-tim.com)
      * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)
      
      * Coded by Creative Tim
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./layouts/admin-layout/admin-layout.module": ["IqXj", "layouts-admin-layout-admin-layout-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "zoOJ":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion/gestion.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zoOJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-scale-multiple\" [fullScreen] = \"false\">\n  <p style=\"color: white\" > Cargando... </p>\n</ngx-spinner>\n<div class=\"row\">\n  <div class=\"col-md-12\" style=\"text-align:end\">\n    <button *ngIf=\"step\" type=\"button\" class=\"btn btn-danger ml-2 text-right\" data-toggle=\"button\" (click)=\"getCanceleds()\" aria-pressed=\"false\">Anulados</button>\n    <button *ngIf=\"!step\" type=\"button\" class=\"btn btn-info ml-2 text-right\" data-toggle=\"button\" (click)=\"getInfo()\" aria-pressed=\"false\">Regresar</button>\n  </div>\n  <div class=\"col-md-12\" *ngIf=\"step\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n              <h4 class=\"card-title\"> Gesti&oacute;n</h4>\n            </div>\n            <div class=\"col-md-4\">\n                <form>\n                  <div class=\"form-group\">\n                      <label for=\"search\" class=\"col-sm col-form-label\">Buscar</label>\n                      <div class=\"col-md-12\">\n                          <input type=\"text\" class=\"form-control\" name=\"searchvalue\" placeholder=\"Buscar...\" id=\"search\" [(ngModel)]=\"searchvalue\">\n                      </div>\n                  </div>\n                </form>\n            </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\" text-primary\">\n              <th>\n                TURNO\n              </th>\n              <th>\n                FECHA\n              </th>\n              <th>\n                CONDUCTOR\n              </th>\n              <th>\n                CEDULA\n              </th>\n              <th>\n                CONT #1\n              </th>\n              <th>\n                CONT #2\n              </th>\n              <th>\n                PATIO\n              </th>\n              <th>\n                LINEA\n              </th>\n              <th>\n                ACCIONES\n              </th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let shift of shifts | searchfilter: searchvalue | paginate: config\">\n                <td class=\"text-center\">\n                  {{ shift.dayShift }}\n                </td>\n                <td>\n                  {{ shift.date | date }}\n                </td>\n                <td>\n                  {{ shift.driver.name | titlecase }}\n                </td>\n                <td>\n                  {{ shift.driver.identification }}\n                </td>\n                <td>\n                  {{ shift.containers.length > 1 ? shift.containers[0].code : \"N/A\" }}\n                </td>\n                <td>\n                  {{ shift.containers.length > 1 ? shift.containers[1].code : \"N/A\" }}\n                </td>\n                <td>\n                  {{ shift.containerYard.code }}\n                </td>\n                <td>\n                  {{ shift.transLine.code }}\n                </td>\n                <td class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"margin-left: 1px;\"  data-toggle=\"button\" (click)=\"openModal(content, shift.id)\" aria-pressed=\"false\" autocomplete=\"off\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-info btn-sm\" style=\"margin-left: 1px;\"  data-toggle=\"button\" [routerLink]=\"['/gestion/detalle/', shift.id]\" aria-pressed=\"false\">\n                    <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-success btn-sm\" style=\"margin-left: 1px;\"  data-toggle=\"button\" (click)=\"ticketModal(shift.id)\" aria-pressed=\"false\">\n                    <i class=\"fa fa-print\" aria-hidden=\"true\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div *ngIf=\"shifts?.length === 0\" class=\"d-flex justify-content-center\">\n            No hay registros en la base de datos del sistema.\n          </div>\n          <div *ngIf=\"shifts?.length > 0\" class=\"d-flex justify-content-between p-2\" >\n            <pagination-controls\n            (pageChange)=\"onPageChange($event)\"\n            (pageBoundsCorrection)=\"onPageBoundsCorrection($event)\"\n            previousLabel=\"Anterior\"\n            nextLabel=\"Siguiente\"\n            >\n            </pagination-controls>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\" *ngIf=\"!step\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n              <h4 class=\"card-title\"> Turnos anulados</h4>\n            </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\" text-primary\">\n              <th>\n                TURNO\n              </th>\n              <th>\n                FECHA\n              </th>\n              <th>\n                CONDUCTOR\n              </th>\n              <th>\n                CEDULA\n              </th>\n              <th>\n                CONT #1\n              </th>\n              <th>\n                CONT #2\n              </th>\n              <th>\n                PATIO\n              </th>\n              <th>\n                LINEA\n              </th>\n              <th>\n                ACCIONES\n              </th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let shift of shifts | searchfilter: searchvalue | paginate: config\">\n                <td class=\"text-center\">\n                  {{ shift.id }}\n                </td>\n                <td>\n                  {{ shift.date | date }}\n                </td>\n                <td>\n                  {{ shift.driver.name | titlecase }}\n                </td>\n                <td>\n                  {{ shift.driver.identification }}\n                </td>\n                <td>\n                  {{ shift.containers.length > 1 ? shift.containers[0].code : \"N/A\" }}\n                </td>\n                <td>\n                  {{ shift.containers.length > 1 ? shift.containers[1].code : \"N/A\" }}\n                </td>\n                <td>\n                  {{ shift.containerYard.code }}\n                </td>\n                <td>\n                  {{ shift.transLine.code }}\n                </td>\n                <td class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-info ml-2\" data-toggle=\"button\" [routerLink]=\"['/gestion/detalle/', shift.id]\" aria-pressed=\"false\">\n                    <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div *ngIf=\"shifts?.length === 0\" class=\"d-flex justify-content-center\">\n            No hay registros en la base de datos del sistema.\n          </div>\n          <div *ngIf=\"shifts?.length > 0\" class=\"d-flex justify-content-between p-2\" >\n            <pagination-controls\n            (pageChange)=\"onPageChange($event)\"\n            (pageBoundsCorrection)=\"onPageBoundsCorrection($event)\"\n            previousLabel=\"Anterior\"\n            nextLabel=\"Siguiente\"\n            >\n            </pagination-controls>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">ANULAR TURNO</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"shiftForm\" class=\"mb-5\">\n        <div class=\"form-group\">\n          <label class=\"form-label\" for=\"obvs\">Observaci&oacute;n</label>\n          <textarea [ngClass]=\"{'is-valid':!submitted && cf.obvs.valid,'is-invalid':cf.obvs.invalid && (cf.obvs.dirty || cf.obvs.touched)}\"\n                    type=\"text\" class=\"form-control\" formControlName=\"obvs\" id=\"obvs\" placeholder=\"Ingresa la observación\" rows=\"3\">\n          </textarea>\n        </div>\n        <div *ngIf=\"cf.obvs.invalid && (cf.obvs.dirty || cf.obvs.touched)\" class=\"text-danger\">\n          <div *ngIf=\"cf.obvs.errors.required\">\n            El campo es requerido\n          </div>\n          <div *ngIf=\"cf.obvs.errors.maxlength\">\n            El campo tiene un máximo de 500 caracteres\n          </div>\n        </div>\n        <div class=\"float-right\">\n          <button type=\"button\" class=\"btn btn-dark\" (click)=\"modal.close('cancel')\">\n            <span> Cancelar</span>\n          </button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('save')\" [disabled]=\"(cf.obvs.invalid)\">\n            <span>Anular</span>\n          </button>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      \n  </div>\n  </ng-template>\n  \n  <ng-template #contentTicket let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Tiquete</h4>\n    <h4 class=\"modal-title\" >Turno {{shift?.dayShift}}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" ><strong>Nombre del cliente: </strong> <span style=\"float: right\">{{shift?.client?.name}}</span></li>\n        <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n        <li class=\"list-group-item\" ><strong>Nit: </strong> <span style=\"float: right\">{{shift?.client?.nit}}</span></li>\n        <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n        <li class=\"list-group-item\" class=\"list-group-item\" ><strong>Telefono del cliente: </strong> <span style=\"float: right\">{{shift?.client?.phone}}</span></li>\n        <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n        <li class=\"list-group-item\" *ngIf=\"shift.shiftClassId === 1 || shift.shiftClassId === 3\"><strong>Nombre del conductor: </strong> <span style=\"float: right\">{{shift?.driver?.name}}</span></li>\n        <li class=\"list-group-item\" *ngIf=\"shift.shiftClassId === 2\"><strong>Nombre del empresa: </strong> <span style=\"float: right\">{{shift?.driver?.name}}</span></li>\n        <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n        <li class=\"list-group-item\" *ngIf=\"shift.shiftClassId === 1 || shift.shiftClassId === 3\"><strong>Documento del conductor: </strong> <span style=\"float: right\">{{shift?.driver?.identification}}</span></li>\n        <li class=\"list-group-item\" *ngIf=\"shift.shiftClassId === 2\"><strong>Nit del empresa: </strong> <span style=\"float: right\">{{shift?.driver?.identification}}</span></li>\n        <div *ngFor=\"let container of shift.containers; let i = index\">\n            <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n            <li class=\"list-group-item\" ><strong>Numero de contenedor {{i+1}}: </strong> <span style=\"float: right\">{{container?.code}}</span></li>\n            <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n            <li class=\"list-group-item\"><strong>Tipo de contenedor {{i+1}}: </strong> <span style=\"float: right\">{{container?.containerType?.description}}</span></li>\n        </div>\n        <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n        <li class=\"list-group-item\" ><strong>Fecha de creacion: </strong> <span style=\"float: right\">{{shift?.date | date: 'medium'}}</span></li>\n        <div style=\"height: 1px;width: 100%;border: 1px solid #ccc;opacity: 0.5;\"></div>\n        <li class=\"list-group-item\" style=\"margin-top:20px\"><strong>Total a pagar: </strong> <span style=\"float: right\"> {{shift?.price | currency: 'COP'}}</span></li>\n    </ul>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click'); genPdf()\">Imprimir</button>\n  </div>\n</ng-template>";
      /***/
    },

    /***/
    "zvoc":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function zvoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"#\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <!--<img src=\"assets/img/escudo.png\">-->\n      </div>\n    </a>\n    <a href=\"#\" class=\"simple-text logo-normal\">\n      Piki 7\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map