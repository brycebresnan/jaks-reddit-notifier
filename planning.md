
### MVP:
* call reddit api for number of people online and number of people subscribed
  * do this ever 30 minutes -- setTimeout()
* IF the number of people is OVER a certain percent:
  * Then: Notify the user by email. Ok maybe by text. 
  * CONSIDER: over notification issues.
    * Tier structure: over 10% then AGAIN at 20%
* Authentication for SURE


### Stetch Goals:

* CRUD functionality for subreddits
* Edit functionality for ratio notifications
* Edit notification settings (how often, what times, what number or email...etc)
* Keep track of historical data for making graphs and stuff (DATABASE maybe firebase)
* Figure out how the F do deploy this sucker so Jak can actually use this. 

### App Structure Tree

App.js


