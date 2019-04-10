/**
Get a random key from an object.

@example
```
import randomObjKey = require('random-obj-key');

randomObjKey({foo: true, bar: true});
//=> 'bar'
```
*/
declare function randomObjKey<ObjectType extends {[key: string]: unknown}>(
	object: ObjectType
): keyof ObjectType;

export = randomObjKey;
