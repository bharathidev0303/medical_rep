import { local } from './local';
import { dev } from './dev';
import { prod } from './prod';
import { qa } from './qa';
import { uat } from './uat';


export enum EnvENUM {
    local = 'local',
    dev = 'dev',
    qa = 'qa',
    prod = 'prod',
    uat = 'uat',
}

let configObj;
const currentEnv = process.env.NODE_ENV as EnvENUM || EnvENUM.local;
console.log(process.env.NODE_ENV, 24234234)

switch (currentEnv) {
    case EnvENUM.local:
        configObj = local;
        break;
    case EnvENUM.dev:
        configObj = dev;
        break;
    case EnvENUM.qa:
        configObj = qa;
        break;
    case EnvENUM.uat:
        configObj = uat;
        break;
    case EnvENUM.prod:
        configObj = prod;
        break;
    default:
        configObj = local;
}
export const config = configObj;
