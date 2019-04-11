export const dataLayerPush = (name, value) => {
  const isBrowser = process.env.APP_BROWSER;
  if (isBrowser) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ [name]: value });
  }
};
