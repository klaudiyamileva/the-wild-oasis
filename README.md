# The Wild Oasis

The Wild Oasis is a small boutique hotel with 8 wooden cabins.
This is a custom-build application to manage bookings, cabins and guests.

1. Authentication

- Users of the app are hotel employees. They has to be logged into the application to perform tasks
- New users can only be signed up inside the applications (to guarantee that only actual hotel employees can get accounts)
- Users are able to upload an avatar, and change their name and password

2. Cabins

- A table view with all cabins, showing the cabin photo, name, capacity, price, and current discount
- Users are able to update or delete a cabin, and to create new cabins (including uploading a photo)

3. Bookings

- A rable view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data
- The booking status can be “unconfirmed” (booked but not yet checked in), “checked in”, or “checked out”. The table is filterable
  by this important status
- Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price

4. Check in/out

- Users are able to delete, check in, or check out a booking as the guest arrives
- Bookings may not have been paid yet on guest arrival. Therefore, on check in, users can to accept payment (outside the app), and
  then confirm that payment has been received (inside the app)
- On check in, the guest have the ability to add breakfast for the entire stay, if they hadn’t already

5. Guests

- Guest data contain: full name, email, national ID, nationality, and a country flag for easy identification

6. Dashboard
   The initial app screen is a dashboard, which display important information for the last 7, 30, or 90 days:

- A list of guests checking in and out on the current day. Users are able to perform these tasks from here
- Statistics on recent bookings, sales, check ins, and occupancy rate
- A chart showing all daily hotel sales, showing both “total” sales and “extras” sales (only breakfast at the moment)
- A chart showing statistics on stay durations, as this is an important metric for the hotel

7. Settings

- Users are able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking
- App has a dark mode

# Technology decisions
- Routing -> ReactRouter
- Styling -> Styled Components
- Remote state management -> React Query
- UI state management -> Context API
- Form management -> React Hook Form
- Other tools -> React icons, React hot toast, Recharts, date-fns, Supabase
