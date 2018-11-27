import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ScaffoldLayout from './layout';

const themeStrong = 'THEME_STORAGE';

export default class AdminWevScaffold extends Component {
  static propTypes = {
    pageComponents: PropTypes.object,
    versionInfo: PropTypes.object,
    menuMappers: PropTypes.object,
    userInfo: PropTypes.object,
    HeaderPlugin: PropTypes.func,
    postMode: PropTypes.bool,
  };
  constructor() {
    super();
    this.state = {
      theme: window.Storage.getItem(themeStrong) || 'blue'
    };
  }
  changeTheme(theme) {
    this.setState({
      theme
    });
    window.Storage.setItem(themeStrong, theme);
  }
  render() {
    const { theme } = this.state;

    return (
      <div className={'top-lv-layout theme-' + theme}>
        <ScaffoldLayout {...this.props} changeTheme={this.changeTheme.bind(this)}/>
      </div>
    );
  }
}
