/**
 * 基础 Action 组件, 主要实现了请求方式, 包含表单验证的方式
 * @Alex
 */

import React, {Component, PureComponent} from 'react';

import { Call, IsFunc, DebounceClass } from 'basic-helper';
import { getUrlParams } from 'uke-request';

import * as paginHelper from '../utils/pagination-helper';

class ActionAgent extends Component {
  getUrlParams = getUrlParams;
  paginHelper = paginHelper;
  routerParams = getUrlParams();
  _before(params, actingRef) {
    return Object.assign({}, {
      [actingRef]: true,
    }, params);
  }
  componentWillUnmount() {
    this.__unmount = true;
  }
  delayExec(...args) {
    if(!this._delayExec) this._delayExec = new DebounceClass();
    return this._delayExec.exec(...args);
  }
  stateSetter(state) {
    if(!this.__unmount && this.setState) this.setState(state);
  }
  /**
   * 请求过程的 state 状态代理
   * @param {reqFunc} asyncFunc 业务 API
   * @param {agentOptions} object 此方法的配置项
   * @return {async function} 返回传入的第一个参数的包装方法，在此过程插入一些生命周期函数
   */
  reqAgent = (reqFunc, agentOptions = {}) => {
    if(!IsFunc(reqFunc)) return console.warn('should pass func at arguments[0]');
    // if(!actingRef) return console.warn('need pass actingRef');

    const {
      before,
      after,
      resFilter,
      actingRef,
    } = agentOptions;

    this.stateSetter(this._before(Call(before), actingRef));

    return async (...args) => {
      try {
        let res = await reqFunc(...args);
        this.stateSetter(
          Object.assign({},
            {
              [actingRef]: false
            },
            Call(after, res)
          )
        );
        return IsFunc(resFilter) ? resFilter(res) : res;
      } catch(e) {
        console.log(e);
      }
    };
  }
}

export default ActionAgent;
