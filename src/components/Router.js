import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LanguagePicker from './deficiency-update/LanguagePicker'
import DeficiencyApp from './deficiency-update/DeficiencyApp';
import DeficiencyView from './deficiency-update/view/DeficiencyView';
import Login from './deficiency-update/Login';

const Router = () => (
  <BrowserRouter basename={'/dtt-react'}>
    <Switch>
            <Route exact path="/" component={LanguagePicker} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dut" component={DeficiencyApp} />
            <Route exact path="/dut/view" component={DeficiencyView} />
    </Switch>
  </BrowserRouter>
);

export default Router;
