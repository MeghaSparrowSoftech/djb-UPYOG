const NODE_WIDTH = 160;
const NODE_HEIGHT = 36;
const H_GAP = 30;
const V_GAP = 70;

/**
 * Assign x,y positions using post-order traversal
 */
export function computeLayout(root) {
  let nodes = [];
  let nextX = 0;

  function walk(node, depth) {
    let children = node.children || [];

    let childPositions = children.map(child => walk(child, depth + 1));

    let x;
    if (childPositions.length === 0) {
      x = nextX;
      nextX += NODE_WIDTH + H_GAP;
    } else {
      x =
        (childPositions[0].x +
          childPositions[childPositions.length - 1].x) /
        2;
    }

    const y = depth * V_GAP;

    const current = {
      id: nodes.length,
      title: node.title,
      x,
      y,
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      parent: null,
    };

    nodes.push(current);

    childPositions.forEach(c => (c.parent = current));

    return current;
  }

  const rootNode = walk(root, 0);

  return { nodes, root: rootNode };
}

/**
 * Generate SVG paths for connectors
 */
export function buildLinks(nodes) {
  return nodes
    .filter(n => n.parent)
    .map(n => {
      const p = n.parent;

      const startX = p.x + p.width / 2;
      const startY = p.y + p.height;
      const midY = startY + V_GAP / 2;
      const endX = n.x + n.width / 2;
      const endY = n.y;

      return `
        M ${startX} ${startY}
        V ${midY}
        H ${endX}
        V ${endY}
      `;
    });
}
