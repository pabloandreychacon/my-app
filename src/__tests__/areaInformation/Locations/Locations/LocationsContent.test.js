import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";

import LocationsContent from "../../../../../views/workstation/AreaInformation/Locations/LocationsTab/LocationsContent";

configure({ adapter: new Adapter() });
const expect = global.expect;

describe("Workstation / Area Information / Locations / LocationsContent / LocationsContent", () => {
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
    wrapper = mount(<LocationsContent />);
  });

  // Locations Component
  it("Verify LocationsContent renders", () => {
    expect(wrapper).not.toBeNull();
  });

  // Output - Renders the correct components for this whole section
  describe("Verify LocationsContent renders correct base components", () => {
    it("Renders LocationsFilters Component", () => {
      const LocationsFiltersComponent = wrapper.find("LocationsFilters");
      expect(LocationsFiltersComponent.exists()).toBe(true);
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

  // LocationsFilters Component
  describe("Tests LocationsFilters Component", () => {
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
        const locationsFilterComponent = wrapper.find("LocationsFilters");
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
        const locationsFilterComponent = wrapper.find("LocationsFilters");
        const initialData = singleTableComponent.prop("data");
        // locationNameFilter === ' '
        locationsFilterComponent.invoke("onLocationNameChange")({
          target: { value: "" },
        });
        // Verify data has not been changed
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
        // locationNameFilter === '13'
        locationsFilterComponent.invoke("onLocationNameChange")({
          target: { value: "13" },
        });
        // Verify data has been filtered
        expect(wrapper.find("SingleTable").prop("data")).not.toEqual(
          initialData
        );
      });
    });
    // onLocationTypeChange()
    describe("Verify onLocationTypeChange functionality", () => {
      it("Verify getFilteredData gets called after LocationTypeFilter has changed", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("LocationsFilters");
        const initialData = singleTableComponent.prop("data");
        // areaFilter === ' '
        locationsFilterComponent.invoke("onLocationTypeChange")("");
        // Verify data has not been changed
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
        // areaFilter === 'LSD'
        locationsFilterComponent.invoke("onLocationTypeChange")("LSD");
        // Verify data has been filtered
        expect(wrapper.find("SingleTable").prop("data")).toEqual([]);
      });
    });
    // onBottleReqChange()
    describe("Verify onBottleReqChange functionality", () => {
      it("Verify getFilteredData gets called after BottleReqFilter has changed", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("LocationsFilters");
        const initialData = singleTableComponent.prop("data");
        // areaFilter === ' '
        locationsFilterComponent.invoke("onBottleReqChange")("");
        // Verify data has not been changed
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
        // areaFilter === 'LSD'
        locationsFilterComponent.invoke("onBottleReqChange")("LSD");
        // Verify data has been filtered
        expect(wrapper.find("SingleTable").prop("data")).toEqual([]);
      });
    });
    // onAOCChange()
    describe("Verify onAOCChange functionality", () => {
      it("Verify getFilteredData gets called after AOCFilter has changed", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("LocationsFilters");
        const initialData = singleTableComponent.prop("data");
        // areaFilter === ' '
        locationsFilterComponent.invoke("onAOCChange")("");
        // Verify data has not been changed
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
        // areaFilter === 'LSD'
        locationsFilterComponent.invoke("onAOCChange")("LSD");
        // Verify data has been filtered
        expect(wrapper.find("SingleTable").prop("data")).toEqual([]);
      });
    });
    // onPriorLocationChange()
    describe("Verify onPriorLocationChange functionality", () => {
      it("Verify getFilteredData gets called after locationNameFilter has changed", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("LocationsFilters");
        const initialData = singleTableComponent.prop("data");
        // locationNameFilter === ' '
        locationsFilterComponent.invoke("onPriorLocationChange")({
          target: { value: "" },
        });
        // Verify data has not been changed
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
        // locationNameFilter === '13'
        locationsFilterComponent.invoke("onPriorLocationChange")({
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
        const locationsFilterComponent = wrapper.find("LocationsFilters");
        const initialData = singleTableComponent.prop("data");
        // Calls onResetData() clicking the reset button
        wrapper.find("Button.button-reset-filter").invoke("onClick")();
        // Verify data has been reset
        expect(wrapper.find("SingleTable").prop("data")).toEqual(initialData);
      });
      // SelectedRow
      it("Resets selectedRow value", () => {
        const singleTableComponent = wrapper.find("SingleTable");
        const locationsFilterComponent = wrapper.find("LocationsFilters");
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
          "Create/Edit Locations"
        );
      });
    });
  });
});
