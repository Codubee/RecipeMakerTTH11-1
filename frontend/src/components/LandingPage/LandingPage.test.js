import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from './LandingPage';
import Tools from './Tools/Tools';

/**
 * Tests to check if components are rendered for LandingPage.js 
 */
describe("test for rendering components", () => {
    const wrapper = shallow(<LandingPage/>)

    it("should render tools component", () => {
        const tools = wrapper.find(Tools);
        expect(tools.exists()).toBe(true);
    })
})