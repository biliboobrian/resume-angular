# ResumeAngular

This project create a ready to use CV template, all media compatible, with YAML configuration and printing facilities written in Angular 11+.

#### Demo Here
Dark Theme : https://biliboobrian.github.io/resume-angular/
Light Theme : https://biliboobrian.github.io/resume-angular-light/

## Installation

- Install NodeJS / NPM.
- Clone repository.
- Run `npm i` to install dependencies.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Modify `src/assets/config.yaml` and `src/assets/data.en.yaml` to change the CV.

## Modify the CV

- `src/assets/config.yaml` is used for the general configuration, no matter of the language like colors and Links.
- For each language you want, you need to make a complete `src/assets/data.lang.yaml` Yaml file.

## Add language

- Make a copy of `src/assets/data.en.yaml` in the same folder.
- Rename the file changing the country code with the one you want, ex: for french rename in `data.fr.yaml`.
- Edit `src/assets/config.yaml` and change the `langs` and add the new language to the array, ex: for french represented by `data.en.yaml` > you should add `fr`

## Change Font

By default 'Roboto Light' is used in  `src/assets/fonts/Roboto-Light.ttf`. 

- Download the TTF file corresponding to your desired font.
- Place it in `src/assets/fonts/`.
- Edit `src/styles.scss` and change the @FontFace part and update the url with the TTF name you want.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Publish your CV on github pages

- Follow the steps on https://pages.github.com/ to create the repository.
- Build the project with `--prod` flag.
- Copy `dist/` to your created repository and push the files.
