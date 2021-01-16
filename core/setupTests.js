import React from 'react';
import Enzyme, { mount, shallow } from "enzyme";
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.mount = mount;
global.render = render;
global.shallow = shallow;
global.cleanup = cleanup;
global.screen = screen;
global.fireEvent = fireEvent;
global.React = React;
global.toJson = toJson;
