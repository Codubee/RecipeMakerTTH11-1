import { shallow } from 'enzyme';
import React from 'react';
import Tools from './Tools';

/**
 * Tests to see that texts for the tools component gets displayed properly.
 */
describe("test for tools component text", () => {
    const wrapper = shallow(<Tools/>);

    it("should show tools header", () => {
        const header = wrapper.find('#tools-title');
        expect(header.text()).toBe('Built Using');
    });

    it("should show text before api logos", () => {
        const description = wrapper.find('p');
        expect(description.text()).toBe('with APIs from');
    });
});
