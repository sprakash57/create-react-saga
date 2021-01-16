import React from 'react';
import Enzyme, { mount, shallow } from "enzyme";
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.mount = mount;
global.render = render;
global.fireEvent = fireEvent;
global.screen = screen;
global.cleanup = cleanup;
global.shallow = shallow
global.React = React;
global.toJson = toJson;
