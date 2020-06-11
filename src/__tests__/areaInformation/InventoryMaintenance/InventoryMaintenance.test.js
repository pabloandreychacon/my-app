import React from "react";
import { configure, shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import InventoryMaintenance from "../../../../views/workstation/AreaInformation/InventoryMaintenance/index";

configure({ adapter: new Adapter() });


describe("Workstation / Area Information / Inventory Maintenance Component", () => {

    let shallowWrapper;

    beforeEach(() => {
        shallowWrapper = shallow(<InventoryMaintenance />);
    });

    // Full Component Renders
    it("Verify Inventory Maintenance renders", () => {
        console.log(shallowWrapper.debug())
        expect(shallowWrapper).not.toBeNull();
    });

    // Sidebar
    it("Rendering the Sidebar Component", () => {
        const sidebarComponent = shallowWrapper.find('Sidebar');
        expect(sidebarComponent.exists()).toBe(true);
    });

    // Hierarchy
    it("Verify that Inventory Maintenance is rendering the Hierarchy Component", () => {
        const hierarchyComponent = shallowWrapper.find('Hierarchy');
        expect(hierarchyComponent.exists()).toBe(true);
    });

    // Breadcrumbs
   it("Verify that Inventory Maintenance is rendering the Breadcrumbs Component", () => {
       const breadcrumbsComponent = shallowWrapper.find('Breadcrumbs');
       expect(breadcrumbsComponent.exists()).toBe(true);
    });

   // Inventory Maintenance Breadcrumbs Title
    it("Verify Inventory Maintenance's breadcrumb renders the correct title (Inventory Management)", () => {
        const breadcrumbsComponent = shallowWrapper.find('Breadcrumbs');
        expect(breadcrumbsComponent.props()).toHaveProperty('title', 'Inventory Maintenance');
    });

    // Inventory Maintenance Breadcrumbs Section (Area Information)
    it("Renders the correct current section (Area Information)", () => {
        const breadcrumbsComponent = shallowWrapper.find('Breadcrumbs');
        expect(breadcrumbsComponent.props()).toHaveProperty('currentSection', 'Area Information');
    });

    // Non-Returnables tab
    it("Verify Inventory Maintenance's tabs render the Non-Returnables tab", () => {
        const nonReturnablesTabPaneComponent = shallowWrapper.find('TabPane').first();
        expect(nonReturnablesTabPaneComponent.props()).toHaveProperty('tab', 'Non-Returnables');
    });

    // Non-Returnables Component
    it("Verify Inventory Maintenance's tabs render the NonReturnablesContent component", () => {
        const nonReturnablesContentComponent = shallowWrapper.find('NonReturnablesContent');
        expect(nonReturnablesContentComponent.exists()).toBe(true)
    });

    // Returnables tab
    it("Verify Inventory Maintenance's tabs render the Returnables tab", () => {
        const returnablesTabPaneComponent = shallowWrapper.find('TabPane').at(1);
        expect(returnablesTabPaneComponent.props()).toHaveProperty('tab', 'Returnables');
    });

    // Returnables Component
    it("Verify Inventory Maintenance's tabs render the ReturnablesContent component", () => {
        const returnablesContentComponent = shallowWrapper.find('ReturnablesContent');
        expect(returnablesContentComponent.exists()).toBe(true)
    });

    // Thawing Bottles
    it("Verify Inventory Maintenance's tabs render the Thawing Bottles tab", () => {
        const thawingBottlesTabPaneComponent = shallowWrapper.find('TabPane').at(2);
        expect(thawingBottlesTabPaneComponent.props()).toHaveProperty('tab', 'Thawing Bottles');
    });

    // Aging Bottles
    it("Verify Inventory Maintenance's tabs render the Aging Bottles tab", () => {
        const agingBottlesTabPaneComponent = shallowWrapper.find('TabPane').at(3);
        expect(agingBottlesTabPaneComponent.props()).toHaveProperty('tab', 'Aging Bottles');
    });

    // Other Bottles
    it("Verify Inventory Maintenance's tabs render the Other Bottles tab", () => {
        const otherBottlesTabPaneComponent = shallowWrapper.find('TabPane').at(4);
        expect(otherBottlesTabPaneComponent.props()).toHaveProperty('tab', 'Other Bottles');
    });

});
