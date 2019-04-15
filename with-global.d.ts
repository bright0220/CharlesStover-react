import { ComponentClass, FunctionComponent } from 'react';
import { State } from '../default';
import GlobalStateManager, { NewGlobalState } from './global-state-manager';
import Callback from './typings/callback';
export declare type Getter<G extends {}, HP, LP> = (globalState: G, props: HP) => null | Partial<LP> | void;
declare type LowerOrderComponent<P = {}> = ComponentClass<P> | FunctionComponent<P> | string;
declare type SetGlobal<G extends {} = State> = (newGlobalState: NewGlobalState<G>, callback?: Callback<G>) => Promise<G>;
export declare type Setter<G, HP, LP> = (setGlobal: SetGlobal<G>, props: HP) => null | Partial<LP> | void;
export declare type WithGlobal<HP, LP> = (Component: LowerOrderComponent<LP>) => ComponentClass<HP>;
export default function withGlobal<G extends {} = State, HP extends {} = {}, LP extends {} = {}>(globalStateManager?: GlobalStateManager<G> | null, getter?: Getter<G, HP, LP>, setter?: Setter<G, HP, LP>): WithGlobal<HP, LP>;
export {};
