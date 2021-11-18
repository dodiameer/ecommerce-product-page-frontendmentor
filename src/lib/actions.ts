export function portal(node: HTMLElement, selector: string) {
  // find an element with this ID somewhere in the document
  let slot = document.querySelector(selector);
  // move this node to that element
  slot?.appendChild(node);

  return {
    destroy() {
      // remove the node when component is destroyed
      node.remove();
    },
  };
}

export function clickOutside(node: HTMLElement, callback: () => void) {
  const handleClick = (event: any) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      callback();
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
