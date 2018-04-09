'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Index from '../pages/Index';

/**
 * TODO: I was going to do TDD tests if I had time.  I intend to do them later for my own github / practice.
 */
describe('Index', function() {
  it ('should have a div', function() {
    const wrapper = shallow(<Index />);
    expect(wrapper.contains(<div>here's a good start</div>)).to.equal(true);
  })
});