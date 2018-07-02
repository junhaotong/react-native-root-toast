import { positions, durations } from './lib/ToastContainer';
import { Manager } from './lib/Toast';

export default class RootToast {
    static positions: positions;
    static durations: durations;
    static displayName: string;

    static show(message: string, options: object): void;
    static hide(target: Manager): void;
}
