const _marko_template = _t(__filename);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _marko_props from "marko/src/runtime/html/helpers/data-marko";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "4-NN7Z2_",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  let _i = 0;

  for (const val of arr) {
    let i = _i++;
    const _keyScope = `[${i}]`;
    out.w(`<div>${_marko_escapeXml(i)}: ${_marko_escapeXml(val)}</div><div></div><div></div>`);
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.w(`<div>${_marko_escapeXml(key)}: ${_marko_escapeXml(val)}</div><div></div><div></div>`);
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope3 = `[${i}]`;
    out.w(`<div>${_marko_escapeXml(i)}</div><div></div><div></div>`);
  }

  let _i2 = 0;

  for (const val of arr) {
    let i = _i2++;
    const _keyValue = `@${i}`,
          _keyScope4 = `[${_keyValue}]`;
    out.w(`<div${_marko_props(null, _keyValue, _component)}>${_marko_escapeXml(i)}: ${_marko_escapeXml(val)}</div><div></div><div${_marko_props(null, `@other-${i}`, _component)}></div>`);
  }

  let _i3 = 0;
  const list = arr;

  for (const val of list) {
    let i = _i3++;
    const _keyValue2 = `@${i}`;
    out.w(`<div${_marko_props(null, _keyValue2, _component)}>${_marko_escapeXml(list.length)}: ${_marko_escapeXml(val)}</div>`);
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyValue3 = `@${key}`,
          _keyScope5 = `[${_keyValue3}]`;
    out.w(`<div${_marko_props(null, _keyValue3, _component)}>${_marko_escapeXml(key)}: ${_marko_escapeXml(val)}</div><div></div><div${_marko_props(null, `@other-${key}`, _component)}></div>`);
  }

  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;
    const _keyValue4 = `@${i}`,
          _keyScope6 = `[${_keyValue4}]`;
    out.w(`<div${_marko_props(null, _keyValue4, _component)}>${_marko_escapeXml(i)}</div><div></div><div${_marko_props(null, `@other-${i}`, _component)}></div>`);

    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;
      const _keyValue5 = `@${i}`,
            _keyScope7 = `[${_keyValue5}]`;
      out.w(`<div${_marko_props(null, _keyValue5, _component)}>${_marko_escapeXml(i)}</div><div></div><div${_marko_props(null, `@other-${i}`, _component)}></div>`);
    }
  }

  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;
    const _keyValue6 = `@${i}`,
          _keyScope8 = `[${_keyValue6}]`;
    out.w(`<div${_marko_props(null, _keyValue6, _component)}>${_marko_escapeXml(i)}</div><div></div><div${_marko_props(null, `@other-${i}`, _component)}></div>`);
  }
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);