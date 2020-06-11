import React from "react";
import {configure, shallow, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {act} from 'react-dom/test-utils';

import ReturnablesContent
    from "../../../../../views/workstation/AreaInformation/InventoryMaintenance/Returnables/ReturnablesContent";

configure({adapter: new Adapter()});
const expect = global.expect;

describe("Workstation / Area Information / Inventory Maintenance / Returnables / ReturnablesContent", () => {
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
        wrapper = mount(<ReturnablesContent/>);
    });

    it("Verify ReturnablesContent renders", () => {
        console.log(wrapper.debug())
        expect(wrapper).not.toBeNull();
    });

    // Output - Renders the correct components for this section
    describe("Verify ReturnablesContent renders correct base components", () => {

        it("Renders ReturnablesFilters Component", () => {
            const returnablesFiltersComponent = wrapper.find('ReturnablesFilters');
            expect(returnablesFiltersComponent.exists()).toBe(true);
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


    // ReturnablesFilters Component
    describe("Tests ReturnablesFilters Component", () => {

        // Collapse button
        it("Renders the Collapse button with the correct title", () => {
            expect(wrapper.find('div.ant-collapse-header').text()).toBe('Filter Criteria');
        });

        it("Renders filters for Area, Location, IPN, Lot, Serial, SPN and IPN Description", () => {
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
            // Serial
            expect(wrapper.find('input[placeholder="Serial #"]').exists()).toBe(true);
            // SPN
            expect(wrapper.find('input[placeholder="SPN"]').exists()).toBe(true);
        });

        // Functionality

        // onAreaChange()
        describe("Verify onAreaChange functionality", () => {

            it("Validates areaFilter's empty initial state", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                expect(returnablesFilterComponent.props()).toHaveProperty('areaFilter', '');
            });

            it("Verify areaFilter gets updated after onAreaChange is called with a value of 'test'", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onAreaChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('areaFilter')).toBe('test');
            });

            it("Verify areaFilter is not updated after onAreaChange is called with a empty ' ' value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onAreaChange')({target: {value: ''}});
                expect(wrapper.find('ReturnablesFilters').prop('areaFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after areaFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // areaFilter === ' '
                returnablesFilterComponent.invoke('onAreaChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // areaFilter === 'LSD'
                returnablesFilterComponent.invoke('onAreaChange')({target: {value: 'LSD'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).toEqual([]);
            });

        });

        // onLocationNameChange()
        describe("Verify onLocationNameChange functionality", () => {

            it("Validates locationNameFilter's empty initial state", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                expect(returnablesFilterComponent.props()).toHaveProperty('locationNameFilter', '');
            });

            it("Verify locationNameFilter gets updated after onLocationNameChange is called with a value of 'test'", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onLocationNameChange')('test');
                expect(wrapper.find('ReturnablesFilters').prop('locationNameFilter')).toBe('test');
            });

            it("Verify locationNameFilter is not updated after onLocationNameChange is called with a empty ' ' value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onLocationNameChange')('');
                expect(wrapper.find('ReturnablesFilters').prop('locationNameFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after locationNameFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // locationNameFilter === ' '
                returnablesFilterComponent.invoke('onLocationNameChange')('');
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // locationNameFilter === '13'
                returnablesFilterComponent.invoke('onLocationNameChange')('13');
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onIpnChange()
        describe("Verify onIpnChange functionality", () => {

            it("Validates IPNFilter's empty initial state", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                expect(returnablesFilterComponent.props()).toHaveProperty('IPNFilter', '');
            });

            it("Verify IPNFilter gets updated after onIPNChange is called with a value of 'test'", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onIPNChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('IPNFilter')).toBe('test');
            });

            it("Verify IPNFilter is not updated after onIPNChange is called with a empty ' ' value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onIPNChange')({target: {value: ''}});
                expect(wrapper.find('ReturnablesFilters').prop('IPNFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after IPNFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // IPNFilter === ' '
                returnablesFilterComponent.invoke('onIPNChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // IPNFilter === '13'
                returnablesFilterComponent.invoke('onIPNChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onIPNDescriptionChange()
        describe("Verify onIPNDescriptionChange functionality", () => {

            it("Validates IPNDescriptionFilter's empty initial state", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                expect(returnablesFilterComponent.props()).toHaveProperty('IPNDescriptionFilter', '');
            });

            it("Verify IPNDescriptionFilter gets updated after onIPNDescriptionChange is called with a value of 'test'", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('IPNDescriptionFilter')).toBe('test');
            });

            it("Verify IPNDescriptionFilter is not updated after onIPNDescriptionChange is called with a empty ' ' value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: ''}});
                expect(wrapper.find('ReturnablesFilters').prop('IPNDescriptionFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after IPNDescriptionFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // IPNDescriptionFilter === ' '
                returnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // IPNDescriptionFilter === '13'
                returnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });


        // onLOTChange()
        describe("Verify onLOTChange functionality", () => {

            it("Validates LotFilter's empty initial state", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                expect(returnablesFilterComponent.props()).toHaveProperty('LotFilter', '');
            });

            it("Verify LotFilter gets updated after onLOTChange is called with a value of 'test'", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onLOTChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('LotFilter')).toBe('test');
            });

            it("Verify LotFilter is not updated after onLOTChange is called with a empty ' ' value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onLOTChange')({target: {value: ''}});
                expect(wrapper.find('ReturnablesFilters').prop('LotFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after LotFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // LotFilter === ' '
                returnablesFilterComponent.invoke('onLOTChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // LotFilter === '13'
                returnablesFilterComponent.invoke('onLOTChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onSPNChange()
        describe("Verify onSPNChange functionality", () => {

            it("Validates SPNFilter's empty initial state", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                expect(returnablesFilterComponent.props()).toHaveProperty('SPNFilter', '');
            });

            it("Verify SPNFilter gets updated after onSPNChange is called with a value of 'test'", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onSPNChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('SPNFilter')).toBe('test');
            });

            it("Verify SPNFilter is not updated after onSPNChange is called with a empty '' value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onSPNChange')({target: {value: ''}});
                expect(wrapper.find('ReturnablesFilters').prop('SPNFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after SPNFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // SPNFilter === ' '
                returnablesFilterComponent.invoke('onSPNChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // SPNFilter === '13'
                returnablesFilterComponent.invoke('onSPNChange')({target: {value: '13'}});
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).not.toEqual(initialData);
            });
        });

        // onSerialChange()
        describe("Verify onSerialChange functionality", () => {

            it("Validates serialFilter's empty initial state", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                expect(returnablesFilterComponent.props()).toHaveProperty('serialFilter', '');
            });

            it("Verify serialFilter gets updated after onSerialChange is called with a value of 'test'", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onSerialChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('serialFilter')).toBe('test');
            });

            it("Verify serialFilter is not updated after onSerialChange is called with a empty '' value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                returnablesFilterComponent.invoke('onSerialChange')({target: {value: ''}});
                expect(wrapper.find('ReturnablesFilters').prop('serialFilter')).toBe('');
            });

            it("Verify getFilteredData gets called after serialFilter has changed", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // SPNFilter === ' '
                returnablesFilterComponent.invoke('onSerialChange')({target: {value: ''}});
                // Verify data has not been changed
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
                // SPNFilter === '13'
                returnablesFilterComponent.invoke('onSerialChange')({target: {value: '13'}});
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
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(returnablesFilterComponent.props()).toHaveProperty('areaFilter', '');
                // Sets a value to the variable
                returnablesFilterComponent.invoke('onAreaChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('areaFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('ReturnablesFilters').prop('areaFilter')).toBe('');
            });

            it("Resets IPNFilter value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(returnablesFilterComponent.props()).toHaveProperty('IPNFilter', '');
                // Sets a value to the variable
                returnablesFilterComponent.invoke('onIPNChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('IPNFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('ReturnablesFilters').prop('IPNFilter')).toBe('');
            });

            it("Resets LotFilter value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(returnablesFilterComponent.props()).toHaveProperty('LotFilter', '');
                // Sets a value to the variable
                returnablesFilterComponent.invoke('onLOTChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('LotFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('ReturnablesFilters').prop('LotFilter')).toBe('');
            });

            it("Resets serialFilter value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(returnablesFilterComponent.props()).toHaveProperty('serialFilter', '');
                // Sets a value to the variable
                returnablesFilterComponent.invoke('onSerialChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('serialFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('ReturnablesFilters').prop('serialFilter')).toBe('');
            });

            it("Resets SPNFilter value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(returnablesFilterComponent.props()).toHaveProperty('SPNFilter', '');
                // Sets a value to the variable
                returnablesFilterComponent.invoke('onSPNChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('SPNFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('ReturnablesFilters').prop('SPNFilter')).toBe('');
            });

            it("Resets IPNDescriptionFilter value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(returnablesFilterComponent.props()).toHaveProperty('IPNDescriptionFilter', '');
                // Sets a value to the variable
                returnablesFilterComponent.invoke('onIPNDescriptionChange')({target: {value: 'test'}});
                expect(wrapper.find('ReturnablesFilters').prop('IPNDescriptionFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('ReturnablesFilters').prop('IPNDescriptionFilter')).toBe('');
            });

            it("Resets locationNameFilter value", () => {
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(returnablesFilterComponent.props()).toHaveProperty('locationNameFilter', '');
                // Sets a value to the variable
                returnablesFilterComponent.invoke('onLocationNameChange')('test');
                expect(wrapper.find('ReturnablesFilters').prop('locationNameFilter')).toBe('test');
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate areaFilter gets reset
                expect(wrapper.find('ReturnablesFilters').prop('locationNameFilter')).toBe('');
            });

            it("Resets filteredData value", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                const initialData = singleTableComponent.prop('data');
                // Sets a value to a variable to filter the data
                returnablesFilterComponent.invoke('onLocationNameChange')('test');
                // Verify data has been filtered
                expect(wrapper.find('SingleTable').prop('data')).toEqual([]);
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Verify data has been reset
                expect(wrapper.find('SingleTable').prop('data')).toEqual(initialData);
            });

            it("Resets selectedRow value", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
                // Validate initial variable state " "
                expect(singleTableComponent.prop('selectedRow')).toEqual([]);
                // Calls onResetData() clicking the reset button
                wrapper.find('Button#button-reset-filter').invoke('onClick')();
                // Validate selectedRow
                expect(singleTableComponent.prop('selectedRow')).toEqual([]);
            });

            it("Resets selectedRowKeys value", () => {
                const singleTableComponent = wrapper.find('SingleTable');
                const returnablesFilterComponent = wrapper.find('ReturnablesFilters');
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
            // Serial
            it("Renders the column for Serial with text 'Serial #' in the 7th column", () => {
                expect(wrapper.find('div.ant-table-column-sorters').at(7).text()).toBe('Serial #');
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

    // ReturnablesModel Component
    describe("Tests ReturnablesModel Component", () => {

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
            expect(wrapper.find('div.ant-modal-title').text()).toBe('Delete Record');
        });

        it("Renders inputs for Location, IPN, Lot, Serial, SPN", () => {
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
            expect(wrapper.find('label[title="Serial"]').text()).toBe('Serial');
            expect(wrapper.find('input#nest-messages_serial').prop('disabled')).toBe(true);
        });

        // Update button
        it("Verify onSubmit gets called by clicking the Update button", () => {
            wrapper.find('button#button-delete').invoke('onClick')();
            // Verify modal is not visible
            expect(wrapper.find('div.ant-modal-root').exists()).toBe(true);
        });
    });

});