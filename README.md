# AnimeVault React Project

## Task Description

Your feature should fulfill the following requirements while ensuring production-ready code quality:

- Query for the list of anime
- The input should be a typeahead that renders anime names. When typing into the typeahead, the search results are fetched and displayed. There is NO “Submit” or “Search” button. Data should be fetched on input change.
- Upon clicking on an anime, we should be directed to a page dedicated to that anime.
- Feel free to make use of a design of your choosing, but I expect a nice UI and UX when executing the search.

## Bonus Points

The above requirements are the bare minimum. Below are some extra bonus points to consider, and elements I’ll be looking out for as I review your code:

- Make intuitive UI considerations, add comments if necessary to explain your decision thought process.
- Make sure to implement performant code. In a real-world scenario, consider how your implementation could be optimized.
- Accessibility.
- General best practices around component structuring.
- You’re allowed to use libraries for more complicated functionality, but bonus points if you implement everything yourself.

## API Information

API Base URL: https://api.jikan.moe/v4/anime

- [API Documentation](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch)
- [Full Anime Details by ID](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeFullById)

## Stack

1. React

## Prerequisite

1. Install node version > 16
2. Install react version > 18

## Instructions

1. `npm install`
2. `npm start` (to start the app)

## Resources

- [Jikan API v4 Documentation - Unofficial MyAnimeList REST API](https://docs.api.jikan.moe/)

## Solution Description

I have implemented a functional feature that allows users to search for anime titles and view detailed information about each anime. Here's an overview of the solution:

- **Search Functionality**: Implemented a typeahead input field that fetches and displays anime titles from the Jikan API as the user types. The search results are updated dynamically, with no need for a submit button.
- **Anime Details Page**: Clicking on an anime title directs the user to a dedicated page displaying detailed information about that anime, fetched from the Jikan API.

- **User Interface**: Designed a clean and intuitive user interface to enhance the user experience when searching for anime titles.

- **Code Quality**: Ensured production-ready code quality, following best practices for component structuring, code organization, and commenting where necessary.

- **Performance Optimization**: Implemented performant code, considering optimization techniques for improved performance.

- **Accessibility**: Ensured accessibility standards are met for all users.

- **External Libraries**: Used external libraries only when necessary, aiming to implement as much functionality as possible without reliance on third-party libraries.

Feel free to explore the deployed website and provide any feedback!

## Solution Preview

Check out the deployed website [AnimeVault](https://anime-vault-six-tau.vercel.app).
