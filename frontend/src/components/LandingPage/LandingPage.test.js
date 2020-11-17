import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from './LandingPage';
import Tools from './Tools/Tools';
import Features from './Features/Features'

/**
 * Tests to check if components are rendered for LandingPage.js 
 */
describe('test for rendering components', () => {
    const wrapper = shallow(<LandingPage/>)

    it('should render tools component', () => {
        const tools = wrapper.find(Tools);
        expect(tools.exists()).toBe(true);
    })
    it('should render features component', () => {
        const features = wrapper.find(Features);
        expect(features.exists()).toBe(true);
    })
})