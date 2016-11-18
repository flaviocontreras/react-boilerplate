import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import Main from 'Main';

describe('Main', () => {
  it('should exist', () => {
    expect(Main).toExist();
  });

  describe('render', () =>{
    it('should render Main Component text', () =>{
      let main = TestUtils.renderIntoDocument(<Main/>);
      let $el = $(ReactDOM.findDOMNode(main));
      let actualText = $el.text();

      expect(actualText).toBe('Main Component');
    });
  });

});
