/**
Get a random key from an object.

@example
```
import randomObjectKey from 'random-obj-key';

randomObjKey({foo: true, bar: true});
//=> 'bar'
```
*/
export default function randomObjectKey<ObjectType extends Record<string, any>>(object: ObjectType): keyof ObjectType;
