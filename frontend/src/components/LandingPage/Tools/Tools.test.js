import { shallow } from 'enzyme';
import React from 'react';
import Tools from './Tools';

const wrapper = shallow(<Tools/>);

/**
 * Tests to see that texts for the tools component gets displayed properly.
 */
describe('test for tools component text', () => {
    it('should show tools header', () => {
        const header = wrapper.find('#tools-title');
        expect(header.text()).toBe('Built Using');
    });

    it('should show text before api logos', () => {
        const description = wrapper.find('p');
        expect(description.text()).toBe('with APIs from');
    });
});

describe('test for tools component logos images', () => {
    it('should be nodejs logo scr in public folder', () => {
        const img = wrapper.find('#nodejs-logo');
        expect(img.html()).toContain('nodejs-logo.png');
    });

    it('should be react logo scr in public folder', () => {
        const img = wrapper.find('#react-logo');
        expect(img.html()).toContain('react-logo.png');
    });

    it('should be heroku logo scr in public folder', () => {
        const img = wrapper.find('#heroku-logo');
        expect(img.html()).toContain('heroku-logo.png');
    });

    it('should be youtube logo scr in public folder', () => {
        const img = wrapper.find('#youtube-logo');
        expect(img.html()).toContain('youtube-logo.png');
    });

    it('should be yelp logo scr in public folder', () => {
        const img = wrapper.find('#yelp-logo');
        expect(img.html()).toContain('yelp-logo.png');
    });
});
