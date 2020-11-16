import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import LandingPage from './components/LandingPage/LandingPage';

/**
 * Tests to see that all components are getting remdered in App.js
 */
describe('test for rendering components', () => {
  const wrapper = shallow(<App/>);

  it('should render LandingPage component', () => {
    const landingPage = wrapper.find(LandingPage);
    expect(landingPage.exists()).toBe(true);
  });
});