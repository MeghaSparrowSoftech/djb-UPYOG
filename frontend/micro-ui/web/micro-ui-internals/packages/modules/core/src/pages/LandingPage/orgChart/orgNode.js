import React, { useState } from "react";

const OrgNode = ({ node, level }) => {
  const [open, setOpen] = useState(true);
  const hasChildren = node.children?.length > 0;

  return (
    <div className="org-node">
      <div
        className={`org-box level-${level}`}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren && <span className="org-toggle">{open ? "−" : "+"}</span>}
        {node.title}
      </div>

      {open && hasChildren && (
        <div className="org-children">
          {node.children.map((child, i) => (
            <OrgNode key={i} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};


export default OrgNode;
