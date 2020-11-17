import { shallow } from 'enzyme';
import React from 'react';
import Features from './Features';

const wrapper = shallow(<Features/>);

describe('test for pictures', () => {
    it('shows coolcamera pic', () => {
        const img = wrapper.find('camera');
        expect(img.html()).toContain('coolcamera.jpeg');
    });

    it('shows recipe pic', () => {
        const img = wrapper.find('recipes');
        expect(img.html()).toContain('goodrecipe.jpeg');
    });

    it('shows nutritional pic', () => {
        const img = wrapper.find('nutritional');
        expect(img.html()).toContain('nutritional.jpg');
    });

    it('shows videos pic', () => {
        const img = wrapper.find('videos');
        expect(img.html()).toContain('videos.jpg');
    });
});