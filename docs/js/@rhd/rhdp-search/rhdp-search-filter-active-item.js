System.register(["../../@fortawesome/fontawesome-svg-core/index.es.js", "../../@fortawesome/pro-solid-svg-icons/index.es.js", "../../@rhelements/rhelement/rhelement.js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var index_es_js_1, index_es_js_2, rhelement_js_1, timesIcon, RHDPSearchFilterActiveItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_es_js_1_1) {
                index_es_js_1 = index_es_js_1_1;
            },
            function (index_es_js_2_1) {
                index_es_js_2 = index_es_js_2_1;
            },
            function (rhelement_js_1_1) {
                rhelement_js_1 = rhelement_js_1_1;
            }
        ],
        execute: function () {
            index_es_js_1.library.add(index_es_js_2.faTimes);
            timesIcon = index_es_js_1.icon(index_es_js_2.faTimes).html;
            RHDPSearchFilterActiveItem = (function (_super) {
                __extends(RHDPSearchFilterActiveItem, _super);
                function RHDPSearchFilterActiveItem() {
                    var _this = _super.call(this, RHDPSearchFilterActiveItem, { delayRender: true }) || this;
                    _this._active = false;
                    _this._inline = false;
                    _this._bubble = true;
                    _this._bounce = false;
                    _this._checkParams = _this._checkParams.bind(_this);
                    _this._clearFilters = _this._clearFilters.bind(_this);
                    _this._checkChange = _this._checkChange.bind(_this);
                    _this._updateFacet = _this._updateFacet.bind(_this);
                    return _this;
                }
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "html", {
                    get: function () {
                        return "" + (this.active ? "\n        <style>\n            :host {\n                font-size: 16px;\n                font-weight: 600;\n                flex: 0 0 auto;\n                list-style: none;\n                order: 2;\n                background-color: #8c8f91;\n                border: 1px solid #8c8f91;\n                color: #fff;\n                cursor: default;\n                display: inline-block;\n                line-height: 1em;\n                margin-bottom: .5em;\n                margin-right: .5em;\n                padding: .5em .7em;\n            }\n            \n            " + index_es_js_1.dom.css() + "\n\n            svg.svg-inline--fa { \n                margin-left: .25em;\n            }\n        </style>\n        <slot></slot>" + timesIcon : '');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem, "tag", {
                    get: function () { return 'rhdp-search-filter-active-item'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (val) {
                        if (this._name === val)
                            return;
                        this._name = val;
                        this.setAttribute('name', this._name);
                        this.innerHTML = this._name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "key", {
                    get: function () {
                        return this._key;
                    },
                    set: function (val) {
                        if (this._key === val)
                            return;
                        this._key = val;
                        this.className = "filter-item-" + this._key;
                        this.setAttribute('key', this._key);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "group", {
                    get: function () {
                        return this._group;
                    },
                    set: function (val) {
                        if (this._group === val)
                            return;
                        this._group = val;
                        this.setAttribute('group', this._group);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "inline", {
                    get: function () {
                        return this._inline;
                    },
                    set: function (val) {
                        if (this._inline === val)
                            return;
                        this._inline = val;
                        _super.prototype.render.call(this);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "bubble", {
                    get: function () {
                        return this._bubble;
                    },
                    set: function (val) {
                        if (this._bubble === val)
                            return;
                        this._bubble = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "bounce", {
                    get: function () {
                        return this._bounce;
                    },
                    set: function (val) {
                        if (this._bounce === val)
                            return;
                        this._bounce = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "active", {
                    get: function () {
                        return this._active;
                    },
                    set: function (val) {
                        if (typeof val === 'string') {
                            val = true;
                        }
                        if (val === null) {
                            val = false;
                        }
                        if (this._active === val) {
                            return;
                        }
                        else {
                            this._active = val;
                            if (this._active) {
                                this.setAttribute('active', '');
                            }
                            else {
                                this.removeAttribute('active');
                            }
                            _super.prototype.render.call(this);
                            if (!this.bounce) {
                                var evt = { detail: { facet: this }, bubbles: true, composed: true };
                                this.bounce = true;
                                this.dispatchEvent(new CustomEvent('filter-item-change', evt));
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterActiveItem.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (val) {
                        if (this._value === val)
                            return;
                        this._value = val;
                        this.setAttribute('value', this.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchFilterActiveItem.prototype.connectedCallback = function () {
                    _super.prototype.connectedCallback.call(this);
                    this.shadowRoot.addEventListener('click', this._updateFacet);
                    top.addEventListener('filter-item-change', this._checkChange);
                    top.addEventListener('params-ready', this._checkParams);
                    top.addEventListener('clear-filters', this._clearFilters);
                    _super.prototype.render.call(this);
                };
                Object.defineProperty(RHDPSearchFilterActiveItem, "observedAttributes", {
                    get: function () {
                        return ['name', 'active', 'value', 'inline', 'key', 'group'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchFilterActiveItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchFilterActiveItem.prototype._updateFacet = function (e) {
                    if (e.target['nodeName'] !== 'SLOT') {
                        this.bounce = false;
                        this.active = !this.active;
                    }
                };
                RHDPSearchFilterActiveItem.prototype._checkParams = function (e) {
                    var _this = this;
                    if (e.detail && e.detail.filters) {
                        this.bounce = true;
                        Object.keys(e.detail.filters).forEach(function (group) {
                            e.detail.filters[group].forEach(function (facet) {
                                if (group === _this.group && facet === _this.key) {
                                    _this.active = true;
                                }
                            });
                        });
                    }
                };
                RHDPSearchFilterActiveItem.prototype._checkChange = function (e) {
                    if (e.detail && e.detail.facet) {
                        if (this.group === e.detail.facet.group && this.key === e.detail.facet.key) {
                            this.active = e.detail.facet.active;
                        }
                    }
                };
                RHDPSearchFilterActiveItem.prototype._clearFilters = function (e) {
                    this.bounce = true;
                    this.active = false;
                };
                return RHDPSearchFilterActiveItem;
            }(rhelement_js_1.default));
            exports_1("default", RHDPSearchFilterActiveItem);
            rhelement_js_1.default.create(RHDPSearchFilterActiveItem);
        }
    };
});
