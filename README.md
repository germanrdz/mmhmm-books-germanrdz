## Public URL

https://mmhmm-books-germanrdz.vercel.app/

## Stuff I ran into

- Margins and paddings are not very well structured inside figma, they dont follow any scale and I cannot follow a good the strategy at structuring my code with ems/rems

- Block contents are not properly defined in figma, is hard to calculate how much spacing should be between components, eg. form fields, containers

- Icons are delivered in a weird way,

  - X icon is HTML/CSS instead of svg. could be better if this was an asset? or at least delivered in HTML/CSS format instead of weird figma rectangles?
  - trash icon is a weird character for an specific font, depends on font.

- Typing for react-hook-forms was a bit complicated

- Image component from NextJS breaks the app if the URL provided is not a valid URL. This made testing/troubleshooting difficult. Ended up adding a

- Server response from books index is not returning a very friendly order for the books, it should be most recent created first and oldest last. At least it entries should have a created_at property

- Figma is missing error screens or messages, (eg. form validation errors, form submit error, server timeout errors)

## Things that can be improved

- Add environment variables for API BASE URL and API AUTH
- Figma deliverable could be a lot more organized or structured
- The UI is not doing a good job reflecting the progress or the state for the requests (get/post/delete), we can use optimistic UI here or a nice loading animation or even toastr type notifications to solve this.
- Site responsiveness overall, I did something very simple. but UX/UI team can do it way better.
- Form validation messages could be improved, right now its just leveraging HTML validation with browser.
