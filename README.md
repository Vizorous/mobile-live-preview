# Luxtag Mobile Live Preview

Vikum Wijekoon

## How to use

- Execute `yarn install` and then `yarn run` to start.

## Project Management

- Jira was used to manage the project.
- Semantic commit messages were used to highlight commits.

## State structure

![Untitled Document](https://user-images.githubusercontent.com/13465801/130836111-650e641d-399f-4538-a951-e0b91be8823d.png)

- App was used as the main state container.
- DesktopContainer was used as the container the editor as well as MobileView with frame in desktop mode which used props to access it.
- MobileView (which showcases the mobile app) accessed the article and heading state through Context API.

## General Features

- Multi-article support with up to 5 different articles (Can be extended to any amount).
- Usage of hooks and functional components.
- Coded in typescript.
- MobileView supports proper content overflow with custom made scrollbar.
- Dompurify was used to sanitize HTML.

## Optimizations &amp; Readability Enhancements

- Typescript was used to reduce runtime errors and general readiblity enhancement.
- Memoization was used to stop unnecessary renders.
- Context API was used to reduce prop drilling.
- Ducks style folder organization based on features.
- CSS were split into different files.
- BEM Naming convention was used.
- When switching between Mobile and Desktop version, Desktop UI gets fully unmounted.
- Multiple articles are stored in sessionStorage and fetched when needed to avoid creating a massive state object.
- Custom made iPhone X frame was used to reduce loading times. (2kb svg file).

## Multi Article Support

- Multi article support was added using sessionStorage as a method to store articles which are not in view.
- Select component can switch between 5 different articles. A useEffect hook triggers when the article changes which stores current article to sessionStorage and retrieves the new article from sessionStorage if it exists.

![Untitled Document (1)](https://user-images.githubusercontent.com/13465801/130836145-4afde8a0-526d-46c4-b15a-c9757bcbe2a4.png)

## External Libraries used

- **React quill**
  - React quill was used as the main editor interface.
  - Its lightweight design and customizability were the main reasons for its use.

- **Dompurify**
  - Dompurify was used to sanitize the html string outputted by the editor.
  - Since React&#39;s _dangerouslySetInnerHTML_ is prone to XSS attacks, this was used to mitigate them.
- **React-select**
  - This library was used to select different articles.
  - Even though an HTML element would suffice, this library makes its execution easier and has a lot of customizability aspects that was used to implement the app.
- **React-responsive**
  - This library was used to trigger the change in mobile and desktop interfaces.
