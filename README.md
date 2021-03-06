# CiviHR

[Example](http://emilcieslar.github.io/civihr/)

***Please keep in mind that due to time constraints I have completed only chosen parts of the homepage. The choosing was based on difficulty of the part and also on how much I can show on the part.***

## Installation

In the project folder in CLI, run the following commands:

```bash
bower install
npm install
```

This will install all dependencies.

## Compiling the project

In the project folder in CLI, run the following command:
```bash
foundation watch
```

If you don't have `foundation-cli` installed, you can just run `gulp` while in the project folder in CLI.


This will compile all js and scss.

## You're good to go!

In settings partial in scss folder you can set the accent color by changing $primary-color variable.


## Notes

1. You can see on the roadmap that the timeline is loading similarly to the video provided (apart from the bubbling bullets). Also you can switch between first two features.

2. You may have noticed that top-bar is absolute positioned for screen sizes large and up. I could simply place the header inside .homepage-intro section and therefore making it static. However as other parts of the site (such as Blog) don't have the .homepage-intro section with transparent top-bar over an image, programmer would not be able to reuse the top-bar into header section in a generic layout. This way a programmer can easily remove .absolute and/or .transparent classes from .top-bar-wrapper making the top-bar static and usable on other parts such as Blog. Also adding .no-border class to the .top-bar would remove the white bottom border.

3. Typekit fonts won't work on different domain than specified so please make sure you're viewing the site on [provided page](http://emilcieslar.github.io/civihr).

4. Some parts are not refined to pixel perfect details, which is due to time constraints. My strategy was to show as much as possible to the reasonable detail.

  For example:
  1. blog and event arrows in the top bar,
  2. responsibility refinings such as margins and paddings,
  3. responsibility of roadmap needs refining,
  4. retina image support for full size cover intro image
  5. also retina support for feature images as well,
  6. feature images could be separated into the browser bar and css shadows.
