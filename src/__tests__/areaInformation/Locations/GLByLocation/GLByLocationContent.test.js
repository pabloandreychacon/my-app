import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";

import GlByLocationContent from "../../../../../views/workstation/AreaInformation/Locations/GLByLocationTab/GLByLocationContent";

configure({ adapter: new Adapter() });
const expect = global.expect;

describe("Workstation / Area Information / Locations / GlByLocationContent / GlByLocationContent", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<GlByLocationContent />);
  });

  // Locations Component
  it("Verify GlByLocationContent renders", () => {
    expect(wrapper).not.toBeNull();
  });

  // Output - Renders the correct components for this whole section
  describe("Verify GlByLocationContent renders correct base components", () => {
    it("Renders GLByLocationFilters Component", () => {
      const GLByLocationFiltersComponent = wrapper.find("GLByLocationFilters");
      expect(GLByLocationFiltersComponent.exists()).toBe(true);
    });

    it("Renders SingleTable Component", () => {
      const singleTableComponent = wrapper.find("SingleTable");
      expect(singleTableComponent.exists()).toBe(true);
    });

    it("Renders ModalExtended Component", () => {
      const modalExtendedComponent = wrapper.find("ModalExtended");
      expect(modalExtendedComponent.exists()).toBe(true);
    });
  });

  // GLByLocationFilters Component
  describe("Tests GLByLocationFilters Component", () => {
    // Collapse button
    it("Renders the Collapse button with the correct title", () => {
      expect(wrapper.find("div.ant-collapse-header").text()).toBe(
        "Filter Criteria"
      );
    });
    // Functionality
    // onAreaChange()
    describe("Verify onAreaChange functionality", () => {
      it("Verify getFilteredData gets called after areaFilter has changed", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("GLByLocationFilters");
        const initialData = singleTableComponent.prop("data");
        // areaFilter === ' '
        locationsFilterComponent.invoke("onAreaChange")("");
        // Verify data has not been changed
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
        // areaFilter === 'LSD'
        locationsFilterComponent.invoke("onAreaChange")("LSD");
        // Verify data has been filtered
        expect(wrapper.find("SingleTable").prop("data")).toEqual([]);
      });
    });
    // onLocationNameChange()
    describe("Verify onLocationNameChange functionality", () => {
      it("Verify getFilteredData gets called after locationNameFilter has changed", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("GLByLocationFilters");
        const initialData = singleTableComponent.prop("data");
        // locationNameFilter === ' '
        locationsFilterComponent.invoke("onLocationChange")({
          target: { value: "" },
        });
        // Verify data has not been changed
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
        // locationNameFilter === '13'
        locationsFilterComponent.invoke("onLocationChange")({
          target: { value: "13" },
        });
        // Verify data has been filtered
        expect(wrapper.find("SingleTable").prop("data")).not.toEqual(
          initialData
        );
      });
    });
    // Reset button - onReset functionality
    describe("Verify onResetData functionality by clicking the reset button", () => {
      // Reset button in place
      it("Renders the Reset button with the correct title", () => {
        expect(wrapper.find("Button.button-reset-filter").text()).toBe("Reset");
      });
      // filteredData
      it("Resets filteredData value", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("GLByLocationFilters");
        const initialData = singleTableComponent.prop("data");
        // Calls onResetData() clicking the reset button
        wrapper.find("Button.button-reset-filter").invoke("onClick")();
        // Verify data has been reset
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
      });
      // SelectedRow
      it("Resets selectedRow value", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("GLByLocationFilters");
        // Validate initial variable state " "
        expect(singleTableComponent.prop("selectedRow")).toEqual([]);
        // Calls onResetData() clicking the reset button
        wrapper.find("Button.button-reset-filter").invoke("onClick")();
        // Validate selectedRow
        expect(singleTableComponent.prop("selectedRow")).toEqual([]);
      });
    });
    // SingleTable Component
    describe("Tests SingleTable Component", () => {
      // onRowChange
      describe("Verify onRowChange gets called by clicking on a row", () => {
        // selectedRow change
        it("Verify selectedRow gets updated by clicking on a row", () => {
          const singleTableComponent = wrapper.find("SingleTable");
          expect(singleTableComponent.prop("selectedRow")).toEqual([]);
          wrapper
            .find("input.ant-radio-input")
            .first()
            .simulate("change", { target: { checked: true } });
          expect(wrapper.find("SingleTable").prop("selectedRow")).not.toEqual(
            []
          );
        });
        // selectedRowKeys change
        it("Verify selectedRowKeys gets updated by clicking on a row", () => {
          const singleTableComponent = wrapper.find("SingleTable");
          expect(singleTableComponent.prop("selectedRowKeys")).toEqual([]);
          wrapper
            .find("input.ant-radio-input")
            .first()
            .simulate("change", { target: { checked: true } });
          expect(
            wrapper.find("SingleTable").prop("selectedRowKeys")
          ).not.toEqual([]);
        });

        // Opens Modal
        it("Verify Modal gets visible by clicking on a row", () => {
          // Verify modal is not visible
          expect(wrapper.find("div.ant-modal-root").exists()).toBe(false);
          // Selects a row to open the modal
          wrapper
            .find("input.ant-radio-input")
            .first()
            .simulate("change", { target: { checked: true } });
          // Verify modal is visible
          expect(wrapper.find("div.ant-modal-root").exists()).toBe(true);
        });
      });
    });

    // LocationsModal Component
    describe("Tests LocationsModal Component", () => {
      beforeEach(() => {
        // Verify modal is not visible
        expect(wrapper.find("div.ant-modal-root").exists()).toBe(false);
        // Selects a row to open the modal
        wrapper
          .find("input.ant-radio-input")
          .first()
          .simulate("change", { target: { checked: true } });
        // Verify modal is visible
        expect(wrapper.find("div.ant-modal-root").exists()).toBe(true);
      });

      // Modal title and Close button
      it("Renders the correct title", () => {
        expect(wrapper.find("div.ant-modal-title").text()).toBe(
          "Update GL By Location"
        );
      });
    });
  });
});
