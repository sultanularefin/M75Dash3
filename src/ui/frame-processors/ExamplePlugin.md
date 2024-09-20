
## modified but giving errors:: 


```ts 

/* global __example_plugin __example_plugin_swift */
import type { Frame } from 'react-native-vision-camera';

declare let _WORKLET: true | undefined;

// export function examplePluginSwift(frame: Frame): string[] {
// export function examplePluginSwift(frame: Frame): string[] {
// export function abc(frame: XX): string[] {
const examplePluginSwift=(frame: Frame)=> {
  'worklet';

  if (!_WORKLET) {
    throw new Error('examplePluginSwift must be called from a frame processor!');
  }

  // @ts-expect-error because this function is dynamically injected by VisionCamera
  return __example_plugin_swift(frame, 'hello!', 'parameter2', true, 42, {
    test: 0,
    second: 'test'
  }, ['another test', 5]);
};

const examplePlugin=(frame: Frame)=> {
  'worklet';

  if (!_WORKLET) {
    throw new Error('examplePlugin must be called from a frame processor!');
  }

  // @ts-expect-error because this function is dynamically injected by VisionCamera
  return __example_plugin(frame, 'hello!', 'parameter2', true, 42, {
    test: 0,
    second: 'test'
  }, ['another test', 5]);
};


export { examplePluginSwift, examplePlugin};


/*export examplePluginSwift;

{
  ,
  examplePlugin,*/


// };

```
