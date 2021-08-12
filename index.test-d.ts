import {expectType} from 'tsd';
import randomObjectKey from './index.js';

expectType<'foo' | 'bar'>(randomObjectKey({foo: true, bar: true}));
