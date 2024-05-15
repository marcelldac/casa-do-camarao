import { shrimpImages, shrimpTitles, shrimpDescriptions, restaurantCopy1, restaurantCopyImage1, restaurantCopy2, restaurantCopyImage2, actualYear } from '../data/data.js';

export const renderHome = (req, res) => {
  res.render('home', {
    showTitle: true,
    shrimpImage1: shrimpImages[0],
    shrimpTitle1: shrimpTitles[0],
    shrimpDescription1: shrimpDescriptions[0],
    shrimpImage2: shrimpImages[1],
    shrimpTitle2: shrimpTitles[1],
    shrimpDescription2: shrimpDescriptions[1],
    shrimpImage3: shrimpImages[2],
    shrimpTitle3: shrimpTitles[2],
    shrimpDescription3: shrimpDescriptions[2],
    restaurantCopy1,
    restaurantCopyImage1,
    restaurantCopy2,
    restaurantCopyImage2,
    actualYear
  });
};
