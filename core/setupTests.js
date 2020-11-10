import React from 'react';
import Enzyme, { mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.mount = mount;
global.render = render;
global.React = React;
global.toJson = toJson;
