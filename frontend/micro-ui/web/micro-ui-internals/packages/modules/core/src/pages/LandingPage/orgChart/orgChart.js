// import React from "react";
// import OrgNode from "./orgNode";
// // import "./orgChart.css";

// const OrgChart = ({ data, title }) => {
//   return (
//     <div className="org-page">
//       <h3 className="djb-section-title">{title}</h3>

//       <div className="org-scroll">
//           <div className="org-tree">
//             <OrgNode node={data} level={0} />
//           </div>
//         </div>
//       </div>
//   );
// };

// export default OrgChart;





import React, { useState, useRef, useEffect } from "react";
// import "./orgChart.css";

// Premium Professional Organization Chart v4.0
const OrgChart = ({ data, title }) => {
  const [zoom, setZoom] = useState(0.85);
  const [expandedNodes, setExpandedNodes] = useState(new Set(['Chairperson', 'Vice Chairperson', 'Chief Ex. Officer', 'Non official Members', 'Ex- Official Members']));
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('standard'); // standard, compact, detailed
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  // Node count for statistics
  const countNodes = (node) => {
    let count = 1;
    if (node.children) {
      node.children.forEach(child => {
        count += countNodes(child);
      });
    }
    return count;
  };

  const totalNodes = countNodes(data);
  const visibleNodes = Array.from(expandedNodes).length;

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.4));
  };

  const handleZoomReset = () => {
    setZoom(0.85);
  };

  const toggleNode = (nodeTitle) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeTitle)) {
        newSet.delete(nodeTitle);
      } else {
        newSet.add(nodeTitle);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const allNodes = new Set();
    const collectNodes = (node) => {
      allNodes.add(node.title);
      if (node.children) {
        node.children.forEach(child => collectNodes(child));
      }
    };
    collectNodes(data);
    setExpandedNodes(allNodes);
  };

  const collapseAll = () => {
    setExpandedNodes(new Set(['Chairperson']));
  };

  const expandToLevel = (level) => {
    const nodesToExpand = new Set();
    const expandRecursive = (node, currentLevel = 0) => {
      if (currentLevel <= level) {
        nodesToExpand.add(node.title);
        if (node.children && currentLevel < level) {
          node.children.forEach(child => expandRecursive(child, currentLevel + 1));
        }
      }
    };
    expandRecursive(data);
    setExpandedNodes(nodesToExpand);
  };

  const searchInTree = (node, term) => {
    if (!term) return false;
    const lowerTerm = term.toLowerCase();
    if (node.title.toLowerCase().includes(lowerTerm)) {
      return true;
    }
    if (node.children) {
      return node.children.some(child => searchInTree(child, term));
    }
    return false;
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim()) {
      const nodesToExpand = new Set();
      const findAndExpand = (node) => {
        const matches = node.title.toLowerCase().includes(term.toLowerCase());
        if (matches || searchInTree(node, term)) {
          nodesToExpand.add(node.title);
          if (matches) {
            setHighlightedNode(node.title);
          }
        }
        if (node.children) {
          node.children.forEach(child => findAndExpand(child));
        }
      };
      findAndExpand(data);
      setExpandedNodes(nodesToExpand);
    } else {
      setHighlightedNode(null);
    }
  };

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const exportToImage = () => {
    alert('Export feature: This would capture the chart as PNG/PDF. Implementation requires html2canvas library.');
  };

  const printChart = () => {
    window.print();
  };

  // Mouse drag to pan
  const handleMouseDown = (e) => {
    if (e.target.classList.contains('org-chart-wrapper') || e.target.closest('.org-tree')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - scrollPos.x,
        y: e.clientY - scrollPos.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newScrollPos = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      setScrollPos(newScrollPos);
      if (containerRef.current) {
        containerRef.current.scrollLeft = -newScrollPos.x;
        containerRef.current.scrollTop = -newScrollPos.y;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const renderNode = (node, level = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.title);
    const isHighlighted = highlightedNode === node.title;
    const isSelected = selectedNode?.title === node.title;
    const matchesSearch = searchTerm && node.title.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      <li key={node.title} className="org-node">
        <div 
          className={`org-box ${isHighlighted ? 'highlighted' : ''} ${matchesSearch ? 'search-match' : ''} ${isSelected ? 'selected' : ''} view-${viewMode}`}
          onClick={(e) => {
            e.stopPropagation();
            if (hasChildren) {
              toggleNode(node.title);
            }
            handleNodeClick(node);
          }}
          style={{ cursor: hasChildren ? 'pointer' : 'default' }}
        >
          <span className="org-title">{node.title}</span>
          {hasChildren && (
            <React.Fragment>
              <span className="expand-icon">
                {isExpanded ? '−' : '+'}
              </span>
              <span className="child-count">{node.children.length}</span>
            </React.Fragment>
          )}
        </div>
        {hasChildren && isExpanded && (
          <ul className="org-children">
            {node.children.map((child) => renderNode(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="org-chart-container" ref={containerRef}>
      {/* Header */}
      <div className="chart-header">
        {title && <h2 className="org-chart-title">{title}</h2>}
        <div className="chart-stats">
          <span className="stat-badge">
            <span className="stat-icon">👥</span>
            <span className="stat-value">{totalNodes}</span>
            <span className="stat-label">Total Positions</span>
          </span>
          <span className="stat-badge">
            <span className="stat-icon">👁️</span>
            <span className="stat-value">{visibleNodes}</span>
            <span className="stat-label">Visible</span>
          </span>
        </div>
      </div>

      {/* Main Toolbar */}
      <div className="org-chart-toolbar">
        <div className="toolbar-section">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search positions, departments..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="clear-search-btn"
                onClick={() => {
                  setSearchTerm('');
                  setHighlightedNode(null);
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        <div className="toolbar-section">
          <div className="button-group">
            <button className="action-btn primary" onClick={expandAll} title="Expand All">
              <span className="btn-icon">⊞</span> Expand All
            </button>
            <button className="action-btn secondary" onClick={collapseAll} title="Collapse All">
              <span className="btn-icon">⊟</span> Collapse All
            </button>
          </div>

          <div className="button-group">
            <button 
              className={`view-btn ${viewMode === 'compact' ? 'active' : ''}`}
              onClick={() => setViewMode('compact')}
              title="Compact View"
            >
              ⊡
            </button>
            <button 
              className={`view-btn ${viewMode === 'standard' ? 'active' : ''}`}
              onClick={() => setViewMode('standard')}
              title="Standard View"
            >
              ⊞
            </button>
            <button 
              className={`view-btn ${viewMode === 'detailed' ? 'active' : ''}`}
              onClick={() => setViewMode('detailed')}
              title="Detailed View"
            >
              ⊟
            </button>
          </div>

          <div className="zoom-controls">
            <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">−</button>
            <span className="zoom-display">{Math.round(zoom * 100)}%</span>
            <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">+</button>
            <button className="zoom-btn reset" onClick={handleZoomReset} title="Reset Zoom">⟲</button>
          </div>
        </div>

        <div className="toolbar-section">
          <div className="button-group">
            <button className="action-btn utility" onClick={printChart} title="Print Chart">
              <span className="btn-icon">🖨️</span>
            </button>
            <button className="action-btn utility" onClick={exportToImage} title="Export as Image">
              <span className="btn-icon">📥</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Level Buttons */}
      <div className="level-controls">
        <span className="level-label">Quick Expand:</span>
        <button className="level-btn" onClick={() => expandToLevel(1)}>Level 1</button>
        <button className="level-btn" onClick={() => expandToLevel(2)}>Level 2</button>
        <button className="level-btn" onClick={() => expandToLevel(3)}>Level 3</button>
        <button className="level-btn" onClick={() => expandToLevel(4)}>Level 4</button>
      </div>

      {/* Help Banner */}
      <div className="instruction-banner">
        <span className="banner-icon">💡</span>
        <strong>Pro Tips:</strong> Click boxes to expand/collapse • Use search to find positions • Drag to pan around • Try different view modes
      </div>

      {/* Chart Wrapper */}
      <div 
        className={`org-chart-wrapper ${isDragging ? 'dragging' : ''}`}
        style={{ transform: `scale(${zoom})` }}
        onMouseDown={handleMouseDown}
        ref={wrapperRef}
      >
        <ul className="org-tree">
          {renderNode(data)}
        </ul>
      </div>

      {/* Info Panel */}
      {selectedNode && (
        <div className="info-panel">
          <div className="info-header">
            <h3>Position Details</h3>
            <button className="close-btn" onClick={() => setSelectedNode(null)}>✕</button>
          </div>
          <div className="info-content">
            <div className="info-row">
              <span className="info-label">Position:</span>
              <span className="info-value">{selectedNode.title}</span>
            </div>
            {selectedNode.children && (
              <div className="info-row">
                <span className="info-label">Direct Reports:</span>
                <span className="info-value">{selectedNode.children.length}</span>
              </div>
            )}
            <div className="info-actions">
              <button 
                className="info-action-btn"
                onClick={() => {
                  toggleNode(selectedNode.title);
                  setSelectedNode(null);
                }}
              >
                {expandedNodes.has(selectedNode.title) ? 'Collapse' : 'Expand'} Branch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color level-1"></span>
          <span className="legend-text">Executive Level</span>
        </div>
        <div className="legend-item">
          <span className="legend-color level-2"></span>
          <span className="legend-text">Department Heads</span>
        </div>
        <div className="legend-item">
          <span className="legend-color level-3"></span>
          <span className="legend-text">Directors</span>
        </div>
        <div className="legend-item">
          <span className="legend-color level-4"></span>
          <span className="legend-text">Staff Positions</span>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;




// import React, { useState, useRef, useEffect } from "react";
// // import "./orgChart.css";

// // Enhanced Interactive Organization Chart
// const OrgChart = ({ data, title }) => {
//   const [zoom, setZoom] = useState(0.8);
//   const [expandedNodes, setExpandedNodes] = useState(new Set(['Chairperson', 'Vice Chairperson', 'Chief Ex. Officer', 'Non official Members', 'Ex- Official Members']));
//   const [searchTerm, setSearchTerm] = useState('');
//   const [highlightedNode, setHighlightedNode] = useState(null);
//   const containerRef = useRef(null);

//   const handleZoomIn = () => {
//     setZoom(prev => Math.min(prev + 0.1, 1.5));
//   };

//   const handleZoomOut = () => {
//     setZoom(prev => Math.max(prev - 0.1, 0.5));
//   };

//   const handleZoomReset = () => {
//     setZoom(0.8);
//   };

//   const toggleNode = (nodeTitle) => {
//     setExpandedNodes(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(nodeTitle)) {
//         newSet.delete(nodeTitle);
//       } else {
//         newSet.add(nodeTitle);
//       }
//       return newSet;
//     });
//   };

//   const expandAll = () => {
//     const allNodes = new Set();
//     const collectNodes = (node) => {
//       allNodes.add(node.title);
//       if (node.children) {
//         node.children.forEach(child => collectNodes(child));
//       }
//     };
//     collectNodes(data);
//     setExpandedNodes(allNodes);
//   };

//   const collapseAll = () => {
//     setExpandedNodes(new Set(['Chairperson']));
//   };

//   const searchInTree = (node, term) => {
//     if (!term) return false;
//     const lowerTerm = term.toLowerCase();
//     if (node.title.toLowerCase().includes(lowerTerm)) {
//       return true;
//     }
//     if (node.children) {
//       return node.children.some(child => searchInTree(child, term));
//     }
//     return false;
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term.trim()) {
//       // Auto-expand nodes that match search
//       const nodesToExpand = new Set();
//       const findAndExpand = (node, parentExpanded = false) => {
//         const matches = node.title.toLowerCase().includes(term.toLowerCase());
//         if (matches || searchInTree(node, term)) {
//           nodesToExpand.add(node.title);
//           if (matches) {
//             setHighlightedNode(node.title);
//           }
//         }
//         if (node.children) {
//           node.children.forEach(child => findAndExpand(child, matches));
//         }
//       };
//       findAndExpand(data);
//       setExpandedNodes(nodesToExpand);
//     } else {
//       setHighlightedNode(null);
//     }
//   };

//   const renderNode = (node, level = 0) => {
//     const hasChildren = node.children && node.children.length > 0;
//     const isExpanded = expandedNodes.has(node.title);
//     const isHighlighted = highlightedNode === node.title;
//     const matchesSearch = searchTerm && node.title.toLowerCase().includes(searchTerm.toLowerCase());

//     return (
//       <li key={node.title} className="org-node">
//         <div 
//           className={`org-box ${isHighlighted ? 'highlighted' : ''} ${matchesSearch ? 'search-match' : ''}`}
//           onClick={() => hasChildren && toggleNode(node.title)}
//           style={{ cursor: hasChildren ? 'pointer' : 'default' }}
//         >
//           <span className="org-title">{node.title}</span>
//           {hasChildren && (
//             <span className="expand-icon">
//               {isExpanded ? '−' : '+'}
//             </span>
//           )}
//         </div>
//         {hasChildren && isExpanded && (
//           <ul className="org-children">
//             {node.children.map((child) => renderNode(child, level + 1))}
//           </ul>
//         )}
//       </li>
//     );
//   };

//   return (
//     <React.Fragment>
//     <div className="org-chart-container" ref={containerRef}>
//       {title && <h2 className="org-chart-title">{title}</h2>}
      
//       {/* Enhanced Controls */}
//       <div className="org-chart-toolbar">
//         <div className="toolbar-left">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search positions..."
//             value={searchTerm}
//             onChange={(e) => handleSearch(e.target.value)}
//           />
//           {searchTerm && (
//             <button 
//               className="clear-search-btn"
//               onClick={() => {
//                 setSearchTerm('');
//                 setHighlightedNode(null);
//               }}
//             >
//               ✕
//             </button>
//           )}
//         </div>
        
//         <div className="toolbar-right">
//           <button className="action-btn" onClick={expandAll} title="Expand All">
//             ⊞ Expand All
//           </button>
//           <button className="action-btn" onClick={collapseAll} title="Collapse All">
//             ⊟ Collapse All
//           </button>
//           <div className="zoom-controls-inline">
//             <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">−</button>
//             <span className="zoom-display">{Math.round(zoom * 100)}%</span>
//             <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">+</button>
//             <button className="zoom-btn" onClick={handleZoomReset} title="Reset">⟲</button>
//           </div>
//         </div>
//       </div>

//       <div className="instruction-banner">
//         💡 <strong>Tip:</strong> Click on any position with a +/− icon to expand or collapse its sub-departments
//       </div>

//       <div className="org-chart-wrapper" style={{ transform: `scale(${zoom})` }}>
//         <ul className="org-tree">
//           {renderNode(data)}
//         </ul>
//       </div>
//     </div>
//     </React.Fragment>
//   );
// };

// export default OrgChart;



//latest professional version
// import React, { useState, useRef, useEffect } from "react";
// // import "./orgChart.css";

// // Premium Professional Organization Chart v4.0
// const OrgChart = ({ data, title }) => {
//   const [zoom, setZoom] = useState(0.85);
//   const [expandedNodes, setExpandedNodes] = useState(new Set(['Chairperson', 'Vice Chairperson', 'Chief Ex. Officer', 'Non official Members', 'Ex- Official Members']));
//   const [searchTerm, setSearchTerm] = useState('');
//   const [highlightedNode, setHighlightedNode] = useState(null);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [viewMode, setViewMode] = useState('standard'); // standard, compact, detailed
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);
//   const wrapperRef = useRef(null);

//   // Node count for statistics
//   const countNodes = (node) => {
//     let count = 1;
//     if (node.children) {
//       node.children.forEach(child => {
//         count += countNodes(child);
//       });
//     }
//     return count;
//   };

//   const totalNodes = countNodes(data);
//   const visibleNodes = Array.from(expandedNodes).length;

//   const handleZoomIn = () => {
//     setZoom(prev => Math.min(prev + 0.1, 1.5));
//   };

//   const handleZoomOut = () => {
//     setZoom(prev => Math.max(prev - 0.1, 0.4));
//   };

//   const handleZoomReset = () => {
//     setZoom(0.85);
//   };

//   const toggleNode = (nodeTitle) => {
//     setExpandedNodes(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(nodeTitle)) {
//         newSet.delete(nodeTitle);
//       } else {
//         newSet.add(nodeTitle);
//       }
//       return newSet;
//     });
//   };

//   const expandAll = () => {
//     const allNodes = new Set();
//     const collectNodes = (node) => {
//       allNodes.add(node.title);
//       if (node.children) {
//         node.children.forEach(child => collectNodes(child));
//       }
//     };
//     collectNodes(data);
//     setExpandedNodes(allNodes);
//   };

//   const collapseAll = () => {
//     setExpandedNodes(new Set(['Chairperson']));
//   };

//   const expandToLevel = (level) => {
//     const nodesToExpand = new Set();
//     const expandRecursive = (node, currentLevel = 0) => {
//       if (currentLevel <= level) {
//         nodesToExpand.add(node.title);
//         if (node.children && currentLevel < level) {
//           node.children.forEach(child => expandRecursive(child, currentLevel + 1));
//         }
//       }
//     };
//     expandRecursive(data);
//     setExpandedNodes(nodesToExpand);
//   };

//   const searchInTree = (node, term) => {
//     if (!term) return false;
//     const lowerTerm = term.toLowerCase();
//     if (node.title.toLowerCase().includes(lowerTerm)) {
//       return true;
//     }
//     if (node.children) {
//       return node.children.some(child => searchInTree(child, term));
//     }
//     return false;
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term.trim()) {
//       const nodesToExpand = new Set();
//       const findAndExpand = (node) => {
//         const matches = node.title.toLowerCase().includes(term.toLowerCase());
//         if (matches || searchInTree(node, term)) {
//           nodesToExpand.add(node.title);
//           if (matches) {
//             setHighlightedNode(node.title);
//           }
//         }
//         if (node.children) {
//           node.children.forEach(child => findAndExpand(child));
//         }
//       };
//       findAndExpand(data);
//       setExpandedNodes(nodesToExpand);
//     } else {
//       setHighlightedNode(null);
//     }
//   };

//   const handleNodeClick = (node) => {
//     setSelectedNode(node);
//   };

//   const exportToImage = () => {
//     alert('Export feature: This would capture the chart as PNG/PDF. Implementation requires html2canvas library.');
//   };

//   const printChart = () => {
//     window.print();
//   };

//   // Mouse drag to pan
//   const handleMouseDown = (e) => {
//     if (e.target.classList.contains('org-chart-wrapper') || e.target.closest('.org-tree')) {
//       setIsDragging(true);
//       setDragStart({
//         x: e.clientX - scrollPos.x,
//         y: e.clientY - scrollPos.y
//       });
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const newScrollPos = {
//         x: e.clientX - dragStart.x,
//         y: e.clientY - dragStart.y
//       };
//       setScrollPos(newScrollPos);
//       if (containerRef.current) {
//         containerRef.current.scrollLeft = -newScrollPos.x;
//         containerRef.current.scrollTop = -newScrollPos.y;
//       }
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging]);

//   const renderNode = (node, level = 0) => {
//     const hasChildren = node.children && node.children.length > 0;
//     const isExpanded = expandedNodes.has(node.title);
//     const isHighlighted = highlightedNode === node.title;
//     const isSelected = selectedNode?.title === node.title;
//     const matchesSearch = searchTerm && node.title.toLowerCase().includes(searchTerm.toLowerCase());

//     return (
//       <li key={node.title} className="org-node">
//         <div 
//           className={`org-box ${isHighlighted ? 'highlighted' : ''} ${matchesSearch ? 'search-match' : ''} ${isSelected ? 'selected' : ''} view-${viewMode}`}
//           onClick={(e) => {
//             e.stopPropagation();
//             if (hasChildren) {
//               toggleNode(node.title);
//             }
//             handleNodeClick(node);
//           }}
//           style={{ cursor: hasChildren ? 'pointer' : 'default' }}
//         >
//           <span className="org-title">{node.title}</span>
//           {hasChildren && (
//             <>
//               <span className="expand-icon">
//                 {isExpanded ? '−' : '+'}
//               </span>
//               <span className="child-count">{node.children.length}</span>
//             </>
//           )}
//         </div>
//         {hasChildren && isExpanded && (
//           <ul className="org-children">
//             {node.children.map((child) => renderNode(child, level + 1))}
//           </ul>
//         )}
//       </li>
//     );
//   };

//   return (
//     <div className="org-chart-container" ref={containerRef}>
//       {/* Header */}
//       <div className="chart-header">
//         {title && <h2 className="org-chart-title">{title}</h2>}
//         <div className="chart-stats">
//           <span className="stat-badge">
//             <span className="stat-icon">👥</span>
//             <span className="stat-value">{totalNodes}</span>
//             <span className="stat-label">Total Positions</span>
//           </span>
//           <span className="stat-badge">
//             <span className="stat-icon">👁️</span>
//             <span className="stat-value">{visibleNodes}</span>
//             <span className="stat-label">Visible</span>
//           </span>
//         </div>
//       </div>

//       {/* Main Toolbar */}
//       <div className="org-chart-toolbar">
//         <div className="toolbar-section">
//           <div className="search-container">
//             <span className="search-icon">🔍</span>
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search positions, departments..."
//               value={searchTerm}
//               onChange={(e) => handleSearch(e.target.value)}
//             />
//             {searchTerm && (
//               <button 
//                 className="clear-search-btn"
//                 onClick={() => {
//                   setSearchTerm('');
//                   setHighlightedNode(null);
//                 }}
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         </div>
        
//         <div className="toolbar-section">
//           <div className="button-group">
//             <button className="action-btn primary" onClick={expandAll} title="Expand All">
//               <span className="btn-icon">⊞</span> Expand All
//             </button>
//             <button className="action-btn secondary" onClick={collapseAll} title="Collapse All">
//               <span className="btn-icon">⊟</span> Collapse All
//             </button>
//           </div>

//           <div className="button-group">
//             <button 
//               className={`view-btn ${viewMode === 'compact' ? 'active' : ''}`}
//               onClick={() => setViewMode('compact')}
//               title="Compact View"
//             >
//               ⊡
//             </button>
//             <button 
//               className={`view-btn ${viewMode === 'standard' ? 'active' : ''}`}
//               onClick={() => setViewMode('standard')}
//               title="Standard View"
//             >
//               ⊞
//             </button>
//             <button 
//               className={`view-btn ${viewMode === 'detailed' ? 'active' : ''}`}
//               onClick={() => setViewMode('detailed')}
//               title="Detailed View"
//             >
//               ⊟
//             </button>
//           </div>

//           <div className="zoom-controls">
//             <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out">−</button>
//             <span className="zoom-display">{Math.round(zoom * 100)}%</span>
//             <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In">+</button>
//             <button className="zoom-btn reset" onClick={handleZoomReset} title="Reset Zoom">⟲</button>
//           </div>
//         </div>

//         <div className="toolbar-section">
//           <div className="button-group">
//             <button className="action-btn utility" onClick={printChart} title="Print Chart">
//               <span className="btn-icon">🖨️</span>
//             </button>
//             <button className="action-btn utility" onClick={exportToImage} title="Export as Image">
//               <span className="btn-icon">📥</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Quick Level Buttons */}
//       <div className="level-controls">
//         <span className="level-label">Quick Expand:</span>
//         <button className="level-btn" onClick={() => expandToLevel(1)}>Level 1</button>
//         <button className="level-btn" onClick={() => expandToLevel(2)}>Level 2</button>
//         <button className="level-btn" onClick={() => expandToLevel(3)}>Level 3</button>
//         <button className="level-btn" onClick={() => expandToLevel(4)}>Level 4</button>
//       </div>

//       {/* Help Banner */}
//       <div className="instruction-banner">
//         <span className="banner-icon">💡</span>
//         <strong>Pro Tips:</strong> Click boxes to expand/collapse • Use search to find positions • Drag to pan around • Try different view modes
//       </div>

//       {/* Chart Wrapper */}
//       <div 
//         className={`org-chart-wrapper ${isDragging ? 'dragging' : ''}`}
//         style={{ transform: `scale(${zoom})` }}
//         onMouseDown={handleMouseDown}
//         ref={wrapperRef}
//       >
//         <ul className="org-tree">
//           {renderNode(data)}
//         </ul>
//       </div>

//       {/* Info Panel */}
//       {selectedNode && (
//         <div className="info-panel">
//           <div className="info-header">
//             <h3>Position Details</h3>
//             <button className="close-btn" onClick={() => setSelectedNode(null)}>✕</button>
//           </div>
//           <div className="info-content">
//             <div className="info-row">
//               <span className="info-label">Position:</span>
//               <span className="info-value">{selectedNode.title}</span>
//             </div>
//             {selectedNode.children && (
//               <div className="info-row">
//                 <span className="info-label">Direct Reports:</span>
//                 <span className="info-value">{selectedNode.children.length}</span>
//               </div>
//             )}
//             <div className="info-actions">
//               <button 
//                 className="info-action-btn"
//                 onClick={() => {
//                   toggleNode(selectedNode.title);
//                   setSelectedNode(null);
//                 }}
//               >
//                 {expandedNodes.has(selectedNode.title) ? 'Collapse' : 'Expand'} Branch
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Legend */}
//       <div className="chart-legend">
//         <div className="legend-item">
//           <span className="legend-color level-1"></span>
//           <span className="legend-text">Executive Level</span>
//         </div>
//         <div className="legend-item">
//           <span className="legend-color level-2"></span>
//           <span className="legend-text">Department Heads</span>
//         </div>
//         <div className="legend-item">
//           <span className="legend-color level-3"></span>
//           <span className="legend-text">Directors</span>
//         </div>
//         <div className="legend-item">
//           <span className="legend-color level-4"></span>
//           <span className="legend-text">Staff Positions</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrgChart;




// import React, {
//   useState,
//   useRef,
//   useEffect,
// } from "react";
// // import "./orgChart.css";

// // Premium Professional Organization Chart v4.0
// const OrgChart = ({ data, title }) => {
//   const [zoom, setZoom] = useState(0.85);
//   const [expandedNodes, setExpandedNodes] = useState(
//     new Set([
//       "Chairperson",
//       "Vice Chairperson",
//       "Chief Ex. Officer",
//       "Non official Members",
//       "Ex- Official Members"
//     ])
//   );
//   const [searchTerm, setSearchTerm] = useState("");
//   const [highlightedNode, setHighlightedNode] = useState(null);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [viewMode, setViewMode] = useState("standard");
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });

//   const containerRef = useRef(null);
//   const wrapperRef = useRef(null);

//   const countNodes = (node) => {
//     let count = 1;
//     if (node.children) {
//       node.children.forEach((child) => {
//         count += countNodes(child);
//       });
//     }
//     return count;
//   };

//   const totalNodes = countNodes(data);
//   const visibleNodes = Array.from(expandedNodes).length;

//   const handleZoomIn = () => setZoom((z) => Math.min(z + 0.1, 1.5));
//   const handleZoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.4));
//   const handleZoomReset = () => setZoom(0.85);

//   const toggleNode = (title) => {
//     setExpandedNodes((prev) => {
//       const next = new Set(prev);
//       next.has(title) ? next.delete(title) : next.add(title);
//       return next;
//     });
//   };

//   const expandAll = () => {
//     const set = new Set();
//     const walk = (node) => {
//       set.add(node.title);
//       node.children?.forEach(walk);
//     };
//     walk(data);
//     setExpandedNodes(set);
//   };

//   const collapseAll = () => {
//     setExpandedNodes(new Set(["Chairperson"]));
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (!term.trim()) {
//       setHighlightedNode(null);
//       return;
//     }

//     const set = new Set();
//     const walk = (node) => {
//       if (node.title.toLowerCase().includes(term.toLowerCase())) {
//         set.add(node.title);
//         setHighlightedNode(node.title);
//       }
//       node.children?.forEach(walk);
//     };
//     walk(data);
//     setExpandedNodes(set);
//   };

//   const handleMouseDown = (e) => {
//     if (
//       e.target.classList.contains("org-chart-wrapper") ||
//       e.target.closest(".org-tree")
//     ) {
//       setIsDragging(true);
//       setDragStart({
//         x: e.clientX - scrollPos.x,
//         y: e.clientY - scrollPos.y
//       });
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const pos = {
//       x: e.clientX - dragStart.x,
//       y: e.clientY - dragStart.y
//     };
//     setScrollPos(pos);
//     containerRef.current.scrollLeft = -pos.x;
//     containerRef.current.scrollTop = -pos.y;
//   };

//   const handleMouseUp = () => setIsDragging(false);

//   useEffect(() => {
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDragging]);

//   const renderNode = (node) => {
//     const expanded = expandedNodes.has(node.title);
//     return (
//       <li key={node.title} className="org-node">
//         <div
//           className="org-box"
//           onClick={() => {
//             node.children && toggleNode(node.title);
//             setSelectedNode(node);
//           }}
//         >
//           {node.title}
//           {node.children && (
//             <span className="expand-icon">{expanded ? "−" : "+"}</span>
//           )}
//         </div>

//         {node.children && expanded && (
//           <ul className="org-children">
//             {node.children.map(renderNode)}
//           </ul>
//         )}
//       </li>
//     );
//   };

//   return (
//     <React.Fragment>
//       <div className="org-chart-container" ref={containerRef}>
//         {title && <h2 className="org-chart-title">{title}</h2>}

//         <div className="org-chart-toolbar">
//           <input
//             value={searchTerm}
//             onChange={(e) => handleSearch(e.target.value)}
//             placeholder="Search..."
//           />

//           <button onClick={expandAll}>Expand All</button>
//           <button onClick={collapseAll}>Collapse All</button>

//           <button onClick={handleZoomOut}>−</button>
//           <span>{Math.round(zoom * 100)}%</span>
//           <button onClick={handleZoomIn}>+</button>
//         </div>

//         <div
//           className="org-chart-wrapper"
//           style={{ transform: `scale(${zoom})` }}
//           onMouseDown={handleMouseDown}
//           ref={wrapperRef}
//         >
//           <ul className="org-tree">{renderNode(data)}</ul>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default OrgChart;
