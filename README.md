# TradeALot

Logo|Logo
------------------------------------|------------------------------
![Logo](client/styles/logo.PNG)|

> Find your favorite items, buy or swap them with the advertiser!

### From the command line

```bash
npm install # to install dependencies
npm run knex migrate:latest # to reset database
npm run knex seed:run # to get seed data
npm run tailbuild # to build tailwind
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## User Stories
1. As a user I want to view listed items.
    - Categories tabs will display different itemsaccordingly, users can also search fo items using the search bar.
3. As a user I want to be able to Sign-up.
    - Use Auth0 for authentication.
4. As a registered user I want to be able to add items to my watch list.
    - Each listed item will have an add to watchlist button. users can view them from their profile page.
5. As a registered user I want to be able to list items.
    - Registered users can list items by clicking on list an item on the home page after they log in.
7. As a registered user I want to be able to contact advertiseres and make offers.
    - Each item will have a comment section on the buttom of it's page.
