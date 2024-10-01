// src/components/Nav.js
import React from 'react';
import './Nav.css';

const Nav = ({ onAboutClick, onFullScreenToggle }) => {
  return (
    <nav>
        <ul className="menu">
            <li className="menu-item">Stagecraft
                <ul className="submenu">
                    <li className="submenu-item">New
                        <ul className="submenu">
                            <li id="newEnsemble">Project</li>
                            <li id="newThing">Clone Current</li>
                        </ul>
                    </li>
                    <li>Settings</li>
                    <li>Save</li>
                    <li>Open</li>
                    <li>Import</li>
                    <li>Export</li>
                    <li id="about" onClick={onAboutClick}>About</li>
                </ul>
            </li>
            <li className="menu-item">Add
                <ul className="submenu">
                    <li className="submenu-item">2D
                        <ul className="submenu">
                            <li>Arc</li>
                            <li>Circle</li>
                            <li>Freehand</li>                            
                            <li>Line</li>
                            <li>Rectangle</li>
                            <li>Path</li>                            
                            <li>Polygon</li>                            
                            <li>Text</li>
                        </ul>
                    </li>
                    <li className="submenu-item">3D
                        <ul className="submenu">
                            <li>Box</li>
                            <li>Capsule</li>
                            <li>Cylinder</li>
                            <li>Cone</li>
                            <li>Sphere</li>
                            <li>Torus</li>
                        </ul>
                    </li>
                    <li className="submenu-item">Dimension
                        <ul className="submenu">
                            <li>Linear</li>
                            <li>Angle</li>
                        </ul>
                    </li>
                    <li className="submenu-item">Thing
                        <ul className="submenu">
                            <li>My Things</li>
                            <li>Project Things</li>
                            <li>Other Things</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="menu-item">Edit
                <ul className="submenu">
                    <li>Select</li>
                    <hr />
                    <li>Undo</li>
                    <li>Redo</li>
                    <hr />
                    <li>Copy</li>
                    <li>Paste</li>
                    <li>Duplicate</li>
                    <hr />
                    <li>Group</li>
                    <li>UnGroup</li>
                    <hr />
                    <li>Move</li>
                    <li>Scale</li>
                    <li>Rotate</li>
                    <hr />
                    <li className="submenu-item">Align
                        <ul className="submenu">
                            <li>Left</li>
                            <li>Right</li>
                            <li>Top</li>
                            <li>Bottom</li>
                            <li>Center</li>
                            <li>Middle</li>
                        </ul>
                    </li>
                    <li className="submenu-item">Distribute
                        <ul className="submenu">
                            <li>Horizontally</li>
                            <li>Vertically</li>
                        </ul>
                    </li>
                    <hr />
                    <li className="submenu-item">2D
                        <ul className="submenu">
                            <li>Unite</li>
                            <li>Subtract</li>
                            <li>Exclude</li>
                            <li>Intersect</li>
                            <li>Divide</li>
                        </ul>
                    </li>
                    <li className="submenu-item">3D
                        <ul className="submenu">
                            <li>Unite</li>
                            <li>Subtract</li>
                            <li>Exclude</li>
                            <li>Intersect</li>
                            <li>Divide</li>
                            <li>Extrude</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="menu-item">View
                <ul className="submenu">
                    <li className="submenu-item">Helpers
                        <ul className="submenu">
                            <li>Axes</li>
                            <li>Coordinates</li>
                            <li>Crosshairs</li>
                            <li>Grid</li>
                            <li>Rulers</li>
                        </ul>
                    </li>
                    <li className="submenu-item">Navigation
                        <ul className="submenu">
                            <li>First Person</li>
                            <li className="submenu-item">Orbit
                                <ul className="submenu">
                                    <li>Around Origin</li>
                                    <li>Around Selected</li>
                                    <li>Around Current View</li>
                                </ul>
                            </li>
                            <li>Pan</li>
                            <li className="submenu-item">Zoom
                                <ul className="submenu">
                                    <li>Marquee</li>
                                    <li>Selected</li>
                                    <li>All Items</li>
                                    <li>Boundaries</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="submenu-item">Rendering
                        <ul className="submenu">
                            <li>Solid</li>
                            <li>Wireframe</li>
                            <li>Hidden Line</li>
                            <li>Lit</li>
                        </ul>
                    </li>
                    <li className="submenu-item">POVs
                        <ul className="submenu">
                            <li>Plan</li>
                            <li>Section Left</li>
                            <li>Section Right</li>
                            <li>Elevation</li>  
                            <hr />
                            <li>Isometric</li>
                            <li>Top</li>
                            <li>Right Side</li>
                            <li>Left Side</li>
                            <li>Front</li>
                            <li>Back</li>
                            <li>Bottom</li>
                        </ul>
                    </li>
                    <li id="fullScreenToggle" onClick={onFullScreenToggle}>Fullscreen</li>
                </ul>
            </li>
            <li className="menu-item">Organize
                <ul className="submenu">
                    <li>Spaces</li>
                    <li>Pages</li>
                    <li>Reports</li>
                    <hr />
                    <li>Departments</li>
                    <li>Layers</li>
                    <li>Categories</li>
                    <li>Planes</li>
                    <li>Origins</li>
                    <li>Bookmarks</li>
                    <li>Viewports</li>
                    <li>Things</li>
                </ul>
            </li>
        </ul>
    </nav>
  );
};

export default Nav;
