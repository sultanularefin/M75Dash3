// import type { Frame } from 'react-native-vision-camera';

/**
 * Scans QR codes.
 */
// export function scanQRCodes(frame: Frame): string[] {
// export function scanQRCodes(frame: Frame): string[] {

/**
 * Scans QR codes.
 */
//@ts-ignore
/*export function scanQRCodes(frame: Frame): string[] {
  'worklet'
  // @ts-expect-error because this function is dynamically injected by VisionCamera
  return __scanQRCodes(frame);
}*/

/*
const scanQRCodes =(frame: Frame): string[]=> {
  'worklet';

  if (!_WORKLET) {
    throw new Error('examplePlugin must be called from a frame processor!');
  }



  // @ts-expect-error because this function is dynamically injected by VisionCamera
  const qr_Code_String= __scanQRCodes(frame);
  console.log("qr_Code_String__",qr_Code_String);

  return qr_Code_String;//__scanQRCodes(frame);
};
*/

// export default scanQRCodes;



import type { Frame } from 'react-native-vision-camera';

/**
 * Scans QR codes.
 */

//@ts-ignore
const scanQRCodes=(frame: Frame): string[] =>{
  'worklet'
// @ts-expect-error because this function is dynamically injected by VisionCamera
  return __scanQRCodes(frame);
};

export default scanQRCodes;

