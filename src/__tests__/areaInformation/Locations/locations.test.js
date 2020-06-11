import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LocationsIndex from "../../../../views/workstation/AreaInformation/Locations/index";

configure({ adapter: new Adapter() });

describe("Workstation / Area Information / Locations Component", () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<LocationsIndex />);
  });

  // Full Component Renders
  it("Verify Locations renders", () => {
    console.log(shallowWrapper.debug());
    expect(shallowWrapper).not.toBeNull();
  });

  // Sidebar
  it("Rendering the Sidebar Component", () => {
    const sidebarComponent = shallowWrapper.find("Sidebar");
    expect(sidebarComponent.exists()).toBe(true);
  });

  // Hierarchy
  it("Verify that Locations is rendering the Hierarchy Component", () => {
    const hierarchyComponent = shallowWrapper.find("Hierarchy");
    expect(hierarchyComponent.exists()).toBe(true);
  });

  // Breadcrumbs
  it("Verify that Locations is rendering the Breadcrumbs Component", () => {
    const breadcrumbsComponent = shallowWrapper.find("Breadcrumbs");
    expect(breadcrumbsComponent.exists()).toBe(true);
  });

  // Locations Breadcrumbs Title
  it("Verify Locations's breadcrumb renders the correct title (Locations)", () => {
    const breadcrumbsComponent = shallowWrapper.find("Breadcrumbs");
    expect(breadcrumbsComponent.props()).toHaveProperty("title", "Locations");
  });

  // Locations Breadcrumbs Section (Area Information)
  it("Renders the correct current section (Area Information)", () => {
    const breadcrumbsComponent = shallowWrapper.find("Breadcrumbs");
    expect(breadcrumbsComponent.props()).toHaveProperty(
      "currentSection",
      "Area Information"
    );
  });

  // Locations tab
  it("Verify Locations's tabs render the Locations tab", () => {
    const LocationsTabPaneComponent = shallowWrapper.find("TabPane").first();
    expect(LocationsTabPaneComponent.props()).toHaveProperty(
      "tab",
      "Locations"
    );
  });

  // Locations Component
  it("Verify Locations's tabs render the LocationsContent component", () => {
    const LocationsContentComponent = shallowWrapper.find("LocationsContent");
    expect(LocationsContentComponent.exists()).toBe(true);
  });

  // Bulk Locations tab
  it("Verify Locations's tabs render the Bulk Locations tab", () => {
    const bulkTabPaneComponent = shallowWrapper.find("TabPane").at(1);
    expect(bulkTabPaneComponent.props()).toHaveProperty(
      "tab",
      "Bulk Locations"
    );
  });

  // Bulk Locations Component
  it("Verify Locations's tabs render the bulkLocationsContent component", () => {
    const bulkLocationsContentComponent = shallowWrapper.find(
      "BulkLocationsContent"
    );
    expect(bulkLocationsContentComponent.exists()).toBe(true);
  });

  // Gl By Locations tab
  it("Verify Locations's tabs render the GL By Location tab", () => {
    const glByLocationTabPaneComponent = shallowWrapper.find("TabPane").at(2);
    expect(glByLocationTabPaneComponent.props()).toHaveProperty(
      "tab",
      "GL By Location"
    );
  });

  // GL By Locations Component
  it("Verify Locations's tabs render the GLByLocationContent component", () => {
    const returnablesContentComponent = shallowWrapper.find(
      "GLByLocationContent"
    );
    expect(returnablesContentComponent.exists()).toBe(true);
  });
});
