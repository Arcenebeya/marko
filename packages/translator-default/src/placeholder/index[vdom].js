import write from "../util/vdom-out-write";

export default function(path) {
  const { node } = path;
  const { escape, value } = node;
  const method = escape ? "t" : "h";
  const { confident, value: computed } = path.get("value").evaluate();

  if (confident && !computed) {
    path.remove();
  } else {
    path.replaceWith(write(method, value));
  }
}
