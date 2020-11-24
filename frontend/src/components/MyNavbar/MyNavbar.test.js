import enzyme, {shallow} from 'enzyme';
import MyNavbar from './MyNavbar';
import React from 'react';

const wrapper = shallow(<MyNavbar/>);

it('Check for Navbar title', ()=> {
    
    let TitleText = wrapper.find('h2').text();
    expect(TitleText).toEqual('Recipe Maker');
});

