import * as React from 'react';
import {TextStyle,StyleProp,ViewStyle} from 'react-native';
import RootSiblings from 'react-native-root-siblings';

declare module "react-native-root-toast" {
    interface ToastOptions {
        duration?: number
        visible?: boolean,
        position?: number,
        animation?: boolean,
        shadow?: boolean,
        backgroundColor?: string,
        shadowColor?: string,
        textColor?: string,
        delay?: number,
        hideOnPress?: boolean,
        onHide?: Function,
        onHidden?: Function,
        onShow?: Function,
        onShown?: Function
    }

    export interface Durations {
        SHORT: number
        LONG: number,
    }

    export interface Positions {
        TOP: number,
        CENTER: number,
        BOTTOM: number,
    }

    export default class Toast extends React.Component<ToastOptions> {
        static show: (message: string, options?: ToastOptions) => RootSiblings;
        static hide: (toast: RootSiblings) => void;
        static durations: Durations;
        static positions: Positions;
    }
}
