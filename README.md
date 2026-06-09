# InsightHub

InsightHub is a responsive blog website built with React, TypeScript, Vite, Tailwind CSS, and React Router. It includes dynamic article fetching, article detail pages, search and tag filtering, recent posts, a contact form, and a polished responsive layout.

## Live Demo

Add live demo link here.

## Features

- Responsive blog homepage
- Featured article section
- Article cards with tags, author details, dates, and read time
- Dynamic article detail pages
- Search articles by title
- Filter articles by tag
- Load more pagination
- Recent posts sidebar
- About page
- Contact page with Web3Forms submission
- Follow/unfollow author state stored in `localStorage`
- Custom favicon and branding

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- DummyJSON API
- Web3Forms

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```txt
src/
  components/   Reusable UI components
  pages/        Route pages
  services/     API fetch helpers
  types/        TypeScript types
  utils/        Static author/date helpers
  assets/       Local image assets
```

## API

Blog posts are fetched from the DummyJSON posts API:

```txt
https://dummyjson.com/posts
```

Images are generated using Picsum image URLs based on article IDs.

## Contact Form

The contact form submits through Web3Forms. The form collects name, email, and message, then shows success or error feedback after submission.

## Status

Portfolio project complete.

Verified with:

```bash
npm run lint
npm run build
```
