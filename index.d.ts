/// <reference types="react" />

import * as React from 'react';

interface AnyObject {
  [property: string]: any;
}

type GlobalCallback = (global: GlobalState) => NewGlobal | void;

type GlobalCallbackRemover = () => void;

// START GLOBAL COMPONENET
interface GlobalComponent<P extends {} = {}, S extends {} | void = void> extends React.Component<P, S> {
  _globalCallback: () => void;  // private
  readonly global: Readonly<GlobalState>;
  setGlobal(newGlobal: NewGlobal, callback?: GlobalCallback): Promise<void> | void;
}

declare class GlobalComponent<P extends {} = {}, S extends {} | void = void> extends React.Component<P, S> {
  static getDerivedGlobalFromProps?: GlobalComponentClass['getDerivedGlobalFromProps'];
  _globalCallback: GlobalComponent['_globalCallback']; // private
  readonly global: GlobalComponent['global'];
  setGlobal: GlobalComponent['setGlobal'];
}

interface GlobalComponentClass<P extends {} = {}, S extends {} | void = void> extends React.ComponentClass<P, S> {
  new (props: P, context?: any): GlobalComponent<P, S>;
  getDerivedGlobalFromProps?: (props: P, prevGloba: GlobalState, prevState: S) => NewGlobal;
}
// END GLOBAL COMPONENT

// START GLOBAL PURE COMPONENT
interface GlobalPureComponent<P extends {} = {}, S extends {} | void = void> extends React.PureComponent<P, S>, GlobalComponent<P, S> {
  _globalCallback: GlobalComponent['_globalCallback']; // private
  readonly global: GlobalComponent['global'];
  setGlobal: GlobalComponent['setGlobal'];
}

declare class GlobalPureComponent<P extends {} = {}, S extends {} | void = void> extends React.PureComponent<P, S> {
  static getDerivedGlobalFromProps?: GlobalPureComponentClass['getDerivedGlobalFromProps'];
  _globalCallback: GlobalPureComponent['_globalCallback']; // private
  readonly global: GlobalPureComponent['global'];
  setGlobalk: GlobalPureComponent['setGlobal'];
}

interface GlobalPureComponentClass<P extends {} = {}, S extends {} | void = void> extends GlobalComponentClass<P, S> {
}
// END GLOBAL PURE COMPONENT

type GlobalReducer = (state: GlobalState, ...args: any[]) => NewGlobal;

type GlobalPropertySetter<T> = (value: T) => void;

interface GlobalState {
  [property: string]: any;
}

type GlobalStateSetter = (newGlobal: NewGlobal, callback?: GlobalCallback) => Promise<void> | void;

type LocalReducer = (...args: any[]) => void;

type MapGlobalToProps<ComponentProps, NewProps> = (global: GlobalState, props: ComponentProps) => NewProps;

type MapSetGlobalToProps<ComponentProps, SetGlobalProps> = (setGlobal: GlobalStateSetter, props: ComponentProps) => SetGlobalProps;

type NewGlobal = NewGlobalFunction | null | Partial<GlobalState> | Promise<NewGlobalFunction> | Promise<null> | Promise<Partial<GlobalState>>;

type NewGlobalFunction = (global: GlobalState) => NewGlobal;

interface ReactN {
  <P extends {} = {}, S extends {} | void = void>(Component: React.ComponentClass<P, S>): typeof GlobalComponent;
  addCallback(callback: GlobalCallback): GlobalCallbackRemover;
  addReducer(name: string, reducer: GlobalReducer): void;
  Component: typeof GlobalComponent;
  default: ReactN;
  getGlobal(): GlobalState;
  PureComponent: typeof GlobalPureComponent;
  removeCallback(callback: GlobalCallback): void;
  resetGlobal(): void;
  setGlobal(newGlobal: NewGlobal, callback?: GlobalCallback): Promise<void> | void;
  useGlobal(): [ GlobalState, GlobalStateSetter ];
  useGlobal<T>(property: keyof GlobalState, setterOnly?: false): [ T, GlobalPropertySetter<T> ];
  useGlobal<T>(property: keyof GlobalState, setterOnly: true): GlobalPropertySetter<T>;
  useGlobal(reducer: GlobalReducer): LocalReducer;
  withGlobal<CP, GP, SGP>(getGlobal: MapGlobalToProps<CP, GP>, setGlobal?: MapSetGlobalToProps<CP, SGP>):
    (Component: React.ComponentType<CP & GP & SGP>) =>
      GlobalPureComponent<CP, any>;
}

declare const _: ReactN;
export = _;
export as namespace ReactN;
