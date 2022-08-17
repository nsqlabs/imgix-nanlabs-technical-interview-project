import axios from 'axios';

export const isValidImgixAssetURL = (url: string) => {
  const regex = new RegExp(
    // eslint-disable-next-line no-useless-escape
    '(https:)\/\/(assets.imgix.net)\/[a-zA-Z0.9]+\/[a-zA-Z0.9]+\.(jpg|svg|png|jpeg|gif|webp)',
  );

  if (!regex.test(url)) {
    throw new Error('Url should be like: https://assets.imgix.net/source/filename.jpg')
  };
};

export const checkIfImageExists = async (url: string) => {
  try {
    await axios.get(url);
    return true;
  } catch (error) {
    throw new Error('The image does not exist! Check the provided URL.')
  }
};
