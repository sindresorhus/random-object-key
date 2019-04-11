import {expectType} from 'tsd';
import randomObjKey = require('.');

expectType<'foo' | 'bar'>(randomObjKey({foo: true, bar: true}));
