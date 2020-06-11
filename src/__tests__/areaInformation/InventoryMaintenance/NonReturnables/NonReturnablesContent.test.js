import React from "react";
import {configure, shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {act} from 'react-dom/test-utils';

import NonReturnablesContent
    from "../../../../../views/workstation/AreaInformation/InventoryMaintenance/NonReturnables/NonReturnablesContent";

configure({adapter: new Adapter()});
const expect = global.expect;

describe("Workstation / Area Information / Inventory Maintenance / NonReturnablesContent / NonReturnablesContent", () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
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
        wrapper = mount(<NonReturnablesContent/>);
    });

    // NonReturnables Component
    it("Verify NonReturnablesContent renders", () => {
        expect(wrapper).not.toBeNull();
    });

    // Output - Renders the correct components for this whole section
    describe("Verify NonReturnablesContent renders correct base components", () => {

        it("Renders NonReturnablesFilters Component", () => {
            const nonReturnablesFiltersComponent = wrapper.find('NonReturnablesFilters');
            expect(nonReturnablesFiltersComponent.exists()).toBe(true);
        });

        it("Renders SingleTable Component", () => {
            const singleTableComponent = wrapper.find('SingleTable');
            expect(singleTableComponent.exists()).toBe(true);
        });

        it("Renders ModalExtended Component", () => {
            const modalExtendedComponent = wrapper.find('ModalExtended');
            expect(modalExtendedComponent.exists()).toBe(true);
        });
    });

    // NonReturnablesFilters Component
    describe("Tests NonReturnablesFilters Component", () => {

        // Collapse button
        it("Renders the Collapse button with the correct title", () => {
            expect(wrapper.find('div.ant-collapse-header').text()).toBe('Filter Criteria');
        });

        it("Renders filters for Area, Location, IPN, Lot, Count, SPN and IPN Description", () => {
            // area
            expect(wrapper.find('select#select-areaFilter').exists()).toBe(true);
            // location
            expect(wrapper.find('Select#locationFilter-select').exists()).toBe(true);
            // IPN
            expect(wrapper.find('input[placeholder="IPN"]').exists()).toBe(true);
            // IPN Description
            expect(wrapper.find('input[placeholder="IPN Description"]').exists()).toBe(true);
            // Lot
            expect(wrapper.find('input[placeholder="Lot"]').exists()).toBe(true);
            // Counter
            expect(wrapper.find('input[placeholder="Count"]').exists()).toBe(true);
            // SPN
            expect(wrapper.find('input[placeholder="SPN"]').exists()).toBe(true);
        });
        // Functionality
        // onAreaChange()
        describe("Verify onAreaChange functionality", () => {

            it("Validates areaFilter's empty initial state", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('areaFilter', '');
            });

            it("Verify areaFilter gets updated after onAreaChange is called with a value of 'test'", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onAreaChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('areaFilter')).toBe('test');
            });

            it("Verify areaFilter is not updated after onAreaChange is called with a empty ' ' value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onAreaChange')({target: {value: ''}});
                expect(wrapper.find('NonReturnablesFilters').prop('areaFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after areaFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // areaFilter === ' '
                nonReturnablesFilterComponent.invoke('onAreaChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // areaFilter === 'LSD'
                nonReturnablesFilterComponent.invoke('onAreaChange')({target: {value: 'LSD'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).toEqual([]);
            });

        });

        // onLocationNameChange()
        describe("Verify onLocationNameChange functionality", () => {

            it("Validates locationNameFilter's empty initial state", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('locationNameFilter', '');
            });

            it("Verify locationNameFilter gets updated after onLocationNameChange is called with a value of 'test'", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onLocationNameChange')('test');
                expect(wrapper.find('NonReturnablesFilters').prop('locationNameFilter')).toBe('test');
            });

            it("Verify locationNameFilter is not updated after onLocationNameChange is called with a empty ' ' value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onLocationNameChange')('');
                expect(wrapper.find('NonReturnablesFilters').prop('locationNameFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after locationNameFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // locationNameFilter === ' '
                nonReturnablesFilterComponent.invoke('onLocationNameChange')('');
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // locationNameFilter === '13'
                nonReturnablesFilterComponent.invoke('onLocationNameChange')('13');
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onIpnChange()
        describe("Verify onIpnChange functionality", () => {

            it("Validates IPNFilter's empty initial state", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('IPNFilter', '');
            });

            it("Verify IPNFilter gets updated after onIPNChange is called with a value of 'test'", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onIPNChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('IPNFilter')).toBe('test');
            });

            it("Verify IPNFilter is not updated after onIPNChange is called with a empty ' ' value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onIPNChange')({target: {value: ''}});
                expect(wrapper.find('NonReturnablesFilters').prop('IPNFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after IPNFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // IPNFilter === ' '
                nonReturnablesFilterComponent.invoke('onIPNChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // IPNFilter === '13'
                nonReturnablesFilterComponent.invoke('onIPNChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onIPNDescriptionChange()
        describe("Verify onIPNDescriptionChange functionality", () => {

            it("Validates IPNDescriptionFilter's empty initial state", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('IPNDescriptionFilter', '');
            });

            it("Verify IPNDescriptionFilter gets updated after onIPNDescriptionChange is called with a value of 'test'", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('IPNDescriptionFilter')).toBe('test');
            });

            it("Verify IPNDescriptionFilter is not updated after onIPNDescriptionChange is called with a empty ' ' value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: ''}});
                expect(wrapper.find('NonReturnablesFilters').prop('IPNDescriptionFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after IPNDescriptionFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // IPNDescriptionFilter === ' '
                nonReturnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // IPNDescriptionFilter === '13'
                nonReturnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onLOTChange()
        describe("Verify onLOTChange functionality", () => {

            it("Validates LotFilter's empty initial state", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('LotFilter', '');
            });

            it("Verify LotFilter gets updated after onLOTChange is called with a value of 'test'", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onLOTChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('LotFilter')).toBe('test');
            });

            it("Verify LotFilter is not updated after onLOTChange is called with a empty ' ' value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onLOTChange')({target: {value: ''}});
                expect(wrapper.find('NonReturnablesFilters').prop('LotFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after LotFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // LotFilter === ' '
                nonReturnablesFilterComponent.invoke('onLOTChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // LotFilter === '13'
                nonReturnablesFilterComponent.invoke('onLOTChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onCountChange()
        describe("Verify onCountChange functionality", () => {

            it("Validates countFilter's empty initial state", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('countFilter', '');
            });

            it("Verify countFilter gets updated after onCountChange is called with a value of 'test'", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onCountChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('countFilter')).toBe('test');
            });

            it("Verify countFilter is not updated after onCountChange is called with a empty ' ' value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onCountChange')({target: {value: ''}});
                expect(wrapper.find('NonReturnablesFilters').prop('countFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after countFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // countFilter === ' '
                nonReturnablesFilterComponent.invoke('onCountChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // countFilter === '13'
                nonReturnablesFilterComponent.invoke('onCountChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onSPNChange()
        describe("Verify onSPNChange functionality", () => {

            it("Validates SPNFilter's empty initial state", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('SPNFilter', '');
            });

            it("Verify SPNFilter gets updated after onSPNChange is called with a value of 'test'", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onSPNChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('SPNFilter')).toBe('test');
            });

            it("Verify SPNFilter is not updated after onSPNChange is called with a empty '' value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                nonReturnablesFilterComponent.invoke('onSPNChange')({target: {value: ''}});
                expect(wrapper.find('NonReturnablesFilters').prop('SPNFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after SPNFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // SPNFilter === ' '
                nonReturnablesFilterComponent.invoke('onSPNChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // SPNFilter === '13'
                nonReturnablesFilterComponent.invoke('onSPNChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // Reset button - onReset functionality
        describe("Verify onResetData functionality by clicking the reset button", () => {

            // Reset button in place
            it("Renders the Reset button with the correct title", () => {
                expect(wrapper.find('Button#button-reset-filter').text()).toBe('Reset');
            });

            it("Resets areaFilter value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('areaFilter', '');
                // Sets a value to the variable
                nonReturnablesFilterComponent.invoke('onAreaChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('areaFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('NonReturnablesFilters').prop('areaFilter')).toBe('');
            });

            it("Resets IPNFilter value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('IPNFilter', '');
                // Sets a value to the variable
                nonReturnablesFilterComponent.invoke('onIPNChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('IPNFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('NonReturnablesFilters').prop('IPNFilter')).toBe('');
            });

            it("Resets LotFilter value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('LotFilter', '');
                // Sets a value to the variable
                nonReturnablesFilterComponent.invoke('onLOTChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('LotFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('NonReturnablesFilters').prop('LotFilter')).toBe('');
            });

            it("Resets countFilter value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('countFilter', '');
                // Sets a value to the variable
                nonReturnablesFilterComponent.invoke('onCountChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('countFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('NonReturnablesFilters').prop('countFilter')).toBe('');
            });

            it("Resets SPNFilter value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('SPNFilter', '');
                // Sets a value to the variable
                nonReturnablesFilterComponent.invoke('onSPNChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('SPNFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('NonReturnablesFilters').prop('SPNFilter')).toBe('');
            });

            it("Resets IPNDescriptionFilter value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('IPNDescriptionFilter', '');
                // Sets a value to the variable
                nonReturnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: 'test'}});
                expect(wrapper.find('NonReturnablesFilters').prop('IPNDescriptionFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('NonReturnablesFilters').prop('IPNDescriptionFilter')).toBe('');
            });

            it("Resets locationNameFilter value", () => {
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(nonReturnablesFilterComponent.props()).toHaveProperty('locationNameFilter', '');
                // Sets a value to the variable
                nonReturnablesFilterComponent.invoke('onLocationNameChange')('test');
                expect(wrapper.find('NonReturnablesFilters').prop('locationNameFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('NonReturnablesFilters').prop('locationNameFilter')).toBe('');
            });
            // filteredData
            it("Resets filteredData value", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // Sets a value to a variable to filter the data
                nonReturnablesFilterComponent.invoke('onLocationNameChange')('test');
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).toEqual([]);
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Verify data has been reset
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
            });
            // SelectedRow
            it("Resets selectedRow value", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(singleTableComponent.prop('selectedRow')).toEqual([]);
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate selectedRow
                expect(singleTableComponent.prop('selectedRow')).toEqual([]);
            });
            // SelectedRowKeys
            it("Resets selectedRowKeys value", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const nonReturnablesFilterComponent = wrapper.find('NonReturnablesFilters');
                // Validate initial variable state " "
                expect(singleTableComponent.prop('selectedRowKeys')).toEqual([]);
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate selectedRow
                expect(singleTableComponent.prop('selectedRowKeys')).toEqual([]);
            });
        });

    });

   // SingleTable Component
    describe("Tests SingleTable Component", () => {
       // Rendering
        describe("Verify table renders the correct columns", () => {
            // Area
            it("Renders the column for Area with text Area in the 1st column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(1).text()).toBe('Area');
            });
            // Location
            it("Renders the column for Location with text 'Location' in the 2nd column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(2).text()).toBe('Location');
            });
            // IPN
            it("Renders the column for IPN with text 'IPN' in the 3rd column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(3).text()).toBe('IPN');
            });
            // IPN Description
            it("Renders the column for IPN Description with text 'IPN Description' in the 4th column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(4).text()).toBe('IPN Description');
            });
            // Lot
            it("Renders the column for Lot with text 'Lot' in the 5th column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(5).text()).toBe('Lot');
            });
            // SPN
            it("Renders the column for SPN with text 'SPN' in the 6th column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(6).text()).toBe('SPN');
            });
            // Count
            it("Renders the column for Count with text 'Count' in the 7th column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(7).text()).toBe('Count');
            });
        });

        // onRowChange
        describe("Verify onRowChange gets called by clicking on a row", () => {
            // selectedRow change
            it("Verify selectedRow gets updated by clicking on a row", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                expect(singleTableComponent.prop('selectedRow')).toEqual([]);
                wrapper.find('input.ant-radio-input').first().simulate('change', {target: {checked: true}});
                expect(wrapper.find('SingleTable').prop('selectedRow')).not.toEqual([]);
            });
            // selectedRowKeys change
            it("Verify selectedRowKeys gets updated by clicking on a row", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                expect(singleTableComponent.prop('selectedRowKeys')).toEqual([]);
                wrapper.find('input.ant-radio-input').first().simulate('change', {target: {checked: true}});
                expect(wrapper.find('SingleTable').prop('selectedRowKeys')).not.toEqual([]);
            });

            // Opens Modal
            it("Verify Modal gets visible by clicking on a row", () => {
                // Verify modal is not visible
                expect(wrapper.find('div.ant-modal-root').exists()).toBe(false);
                // Selects a row to open the modal
                wrapper.find('input.ant-radio-input').first().simulate('change', {target: {checked: true}});
                // Verify modal is visible
                expect(wrapper.find('div.ant-modal-root').exists()).toBe(true);
            });
        });

    });

    // NonReturnablesModel Component
    describe("Tests NonReturnablesModel Component", () => {

        beforeEach(() => {
            // Verify modal is not visible
            expect(wrapper.find('div.ant-modal-root').exists()).toBe(false);
            // Selects a row to open the modal
            wrapper.find('input.ant-radio-input').first().simulate('change', {target: {checked: true}});
            // Verify modal is visible
            expect(wrapper.find('div.ant-modal-root').exists()).toBe(true);
        });

        // Modal title and Close button
        it("Renders the correct title", () => {
            expect(wrapper.find('div.ant-modal-title').text()).toBe('Edit Count');
        });

        it("Renders inputs for Location, IPN, Lot, Count, SPN", () => {
            // Location label and input disabled
            expect(wrapper.find('label[title="Location"]').text()).toBe('Location');
            expect(wrapper.find('input#nest-messages_location').prop('disabled')).toBe(true);
            // SPN label and input disabled
            expect(wrapper.find('label[title="SPN"]').text()).toBe('SPN');
            expect(wrapper.find('input#nest-messages_spn').prop('disabled')).toBe(true);
            // Intel Part label and input disabled
            expect(wrapper.find('label[title="Intel Part"]').text()).toBe('Intel Part');
            expect(wrapper.find('input#nest-messages_ipn').prop('disabled')).toBe(true);
            // Lot label and input disabled
            expect(wrapper.find('label[title="Lot"]').text()).toBe('Lot');
            expect(wrapper.find('input#nest-messages_spn').prop('disabled')).toBe(true);
            // Count label and input enabled
            expect(wrapper.find('label[title="Count"]').text()).toBe('Count');
            expect(wrapper.find('input#nest-messages_count').prop('disabled')).toBe(undefined);
        });

        // Update button
        it("Verify onSubmit gets called by clicking the Update button", () => {
            wrapper.find('input#nest-messages_count').simulate('change', {target: {value: '5'}});
            expect(wrapper.find('input#nest-messages_count').prop('value')).toBe('5');
            wrapper.find('button#button-update').simulate('click');
            // Verify modal is not visible
            expect(wrapper.find('div.ant-modal-root').exists()).toBe(true);
        });
    });

});