const _marko_template = _t();

export default _marko_template;
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("div", null, "2", null, 1, 0).t("No colors!");

import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/dom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("NRekT+g6", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.t("Hello ", component);
  out.t(input.name, component);
  out.t("! ", component);

  if (input.colors.length) {
    out.be("ul", null, "0", component, null, 0);
    {
      let _keyValue = 0;

      for (const color of input.colors) {
        const _keyScope = `[${_keyValue++}]`;
        out.be("li", null, "1" + _keyScope, component, null, 0);
        out.t(color, component);
        out.ee();
      }
    }
    out.ee();
  } else {
    out.n(_marko_node, component);
  }
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);