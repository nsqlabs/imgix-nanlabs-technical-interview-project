export default {
  adjustment: {
    bri: {
      description: 'Adjusts the overall brightness of the image.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Brightness',
      tooltip:
        'Valid values are in the range -100 – 100. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'bri',
    },
    con: {
      description: 'Adjusts the contrast of the image.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Contrast',
      tooltip:
        'Valid values are in the range -100 – 100. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'con',
    },
    exp: {
      description:
        'Adjusts the exposure setting for an image, similar to changing the F-stop on a camera.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Exposure',
      tooltip:
        'Valid values are in the range -100 – 100. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'exp',
    },
    gam: {
      description: 'Adjusts gamma and midtone brightness.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Gamma',
      tooltip:
        'Recommended values are in the range -100 – 100. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'gam',
    },
    high: {
      description:
        'Adjusts the highlight tonal mapping of an image while preserving detail in highlighted areas',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Highlight',
      tooltip:
        'Valid values are in the range -100 – 0. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'high',
    },
    hue: {
      description: 'Changes the hue, or tint, of each pixel in the image.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 359,
      minValue: 0,
      name: 'Hue Shift',
      tooltip:
        "The value is an angle along a hue color wheel, with the pixel's starting color at 0. Valid values are in the range 0 – 359. The default value is 0, which leaves the image unchanged.",
      urlSlash: 'hue',
    },
    invert: {
      description:
        'Inverts all pixel colors and brightness values within the image, producing a negative of the image.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 1,
      minValue: 0,
      name: 'Invert',
      tooltip: 'Valid values are 0 for false and 1 for true.',
      urlSlash: 'invert',
    },
    sat: {
      description: 'Adjusts the saturation of the image.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Saturation',
      tooltip:
        'Recommended values are in the range -100 – 100. The default value is 0, which leaves the image unchanged. A value of -100 will convert the image to grayscale.',
      urlSlash: 'sat',
    },
    shad: {
      description:
        'Adjusts the shadow tonal mapping of an image while preserving detail in shadowed areas.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: 0,
      name: 'Shadow',
      tooltip:
        'Valid values are in the range 0 – 100. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'shad',
    },
    sharp: {
      description:
        'Sharpens the image using luminance (which only affects the black and white values), providing crisp detail with minimal color artifacts.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: 0,
      name: 'Sharpen',
      tooltip:
        'Recommended values are in the range 0 – 100. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'sharp',
    },
    usm: {
      description:
        'Sharpens the image details using an unsharp mask (a blurred, inverted copy of the image).',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Unsharp Mask',
      tooltip:
        'Valid values are any floating point number. The default value is 0, which leaves the image unchanged. This parameter should be used in conjunction with usmrad.\nFor images with general noise, we suggest using the sharp parameter instead. Unsharp mask and radius are better for thumbnails and fine-tuned sharpening.',
      urlSlash: 'usm',
    },
    usmrad: {
      description:
        'Determines how many pixels should be included to enhance the contrast when using the unsharp mask parameter.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 500,
      minValue: 0,
      name: 'Unsharp Mask Radius',
      tooltip:
        'Valid values are positive numbers, and the default is 2.5. This parameter will have no effect on the image if usm is not set.\nFor images with general noise, we suggest using the sharp parameter instead. Unsharp mask and radius are better for thumbnails and fine-tuned sharpening.',
      urlSlash: 'usmrad',
    },
    vib: {
      description: 'Adjusts the color saturation of an image while keeping pleasing skin tones.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 100,
      minValue: -100,
      name: 'Vibrance',
      tooltip:
        'Valid values are in the range -100 – 100. The default value is 0, which leaves the image unchanged.',
      urlSlash: 'vib',
    },
  },
  rotation: {
    flip: {
      description: 'Flips the image horizontally, vertically, or both.',
      value: 'None',
      initialValue: 'None',
      inputType: 'select',
      name: 'Flip Axis',
      options: ['None', 'h', 'v', 'hv'],
      tooltip: 'Valid values are h for horizontal, v for vertical, and hv to flip along both axes.',
      urlSlash: 'flip',
    },
    orient: {
      description:
        'Changes the cardinal orientation of the image by overriding any Exif orientation metadata.',
      value: 0,
      initialValue: 0,
      inputType: 'select',
      name: 'Orient',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 90, 180, 270],
      tooltip:
        'By default, when an image is transformed using any parameter, imgix automatically uses Exchangeable image file format (Exif) metadata present in the original image to orient your photos correctly. If your image does not contain Exif orientation data, we assume a value of 0 and do not rotate the image.\nTo override the Exif data, you can set the value either to 1 through 8 (following Exif format), or to 90, 180, 270, etc. as degree aliases for the Exif values where 90 = 6, 180 = 3, and 270 = 8. See the diagram below for how these values relate to the orientation of the image when it was shot.',
      urlSlash: 'orient',
    },
    rot: {
      description: 'Rotates the image by degrees according to the value specified.',
      value: 0,
      initialValue: 0,
      inputType: 'number',
      maxValue: 359,
      minValue: 0,
      name: 'Rotation',
      tooltip:
        'Valid values are in the range 0 – 359, and rotation is counter-clockwise with 0 (the default) at the top of the image. The image will be zoomed after rotation so that it covers the entire specified dimensions (unlike orient, which keeps the image at the same zoom setting and rotates the frame along with the image).',
      urlSlash: 'rot',
    },
  },
};
