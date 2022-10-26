import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

global.render = render;
global.cleanup = cleanup;
global.screen = screen;
global.fireEvent = fireEvent;
global.React = React;
