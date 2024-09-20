
// global __example_plugin __example_plugin_swift
import type { Frame } from 'react-native-vision-camera';

declare let _WORKLET: true | undefined;

// eslint-disable-next-line func-style
// export function examplePluginSwift(frame: Frame): string[] {
const examplePluginSwift=(frame: Frame): string[]=> {
  'worklet';

  if (!_WORKLET) {
    throw new Error('examplePluginSwift must be called from a frame processor!');
  }


  console.log("_WORKLET at examplePluginSwift", _WORKLET);


  // @ts-expect-error because this function is dynamically injected by VisionCamera
  return __example_plugin_swift(frame, 'hello!', 'parameter2', true, 42, {
    test: 0,
    second: 'test' }, ['another test', 5]);
};

// export function examplePlugin(frame: Frame): string[] {
const examplePlugin=(frame: Frame): string[]=> {
  'worklet';

  if (!_WORKLET) {
    throw new Error('examplePlugin must be called from a frame processor!');
  }

  console.log("_WORKLET at examplePlugin", _WORKLET);

  // @ts-expect-error because this function is dynamically injected by VisionCamera
  return __example_plugin(frame, 'hello!', 'parameter2', true, 42, {
    test: 0,
    second: 'test' }, ['another test', 5]);
};

export default examplePlugin;

export {examplePluginSwift};
/*export {
  examplePluginSwift,
  examplePlugin
};*/


// export function





