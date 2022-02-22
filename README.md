# Give Your All #

Developed from an interest in charity, this app provides the ability to search for charities and causes by accessing a charity API, and collating and tracking donations made. A user's data is accessibly only by them and the site administrator. If connected to Stripe or another financial technology tool, the app's administrating agency can collect donations to forward onto the nominated charities (and with multiple users, amounts can be collated into packages), providing anonymity to the donor in giving by working through this intermediary.

##Screenshots##

![Signup / Login](https://i.imgur.com/gX8oNH0.png)<br>
![Donation Page](https://i.imgur.com/rMGIs7b.png)<br>
![Landing Page Screenshot](https://i.imgur.com/yGJeeHV.png)<br>

## Technologies Used ##

**Languages** HTML, CSS, JS<br>
**Framework** ExpressJS<br>
**Environment** NodeJS<br>
**Libraries** ReactJS<br>
**Platforms** MongoDB, Heroku<br>
**API** CharityNavigator
**Image Hosting** Imgur
**Other** Logo created with DesignEvo software<br>

## Getting Started ##

[Give Your All](http://giveyourall.herokuapp.com "GiveYourAll")<br>
[Trello](https://trello.com/b/eaIztHJ3/giveyourall "Trello")<br>

**1.** Upon visiting the site, the user is able to create an account using a name, email address, and password.

**2.** The user is then able to log in, where they can search the API for a list of charities to donate to. Charity details include the name, rating, cause and mission, along with a URL for the organization.

**3.** The user can then choose to add a charity to a donation-package list, and adjust the amount of funds to be sent to the charity. Charities can also be deleted from the package before it is finalized.

**4.** After finalizing the order, the user can also look up their own donation records, each listing info on the package: the id, amount donated, and date.

## Next Steps ##

**1.** Improve mobile-friendly design (largely by CSS).

**2.** Edit the donation packages in the user's record, treating the donation package as a subscription model.

**3.** Add a secondary "one-shot" donation option to follow the subscription-adjustment.

**4.** Add a second API which will randomly display an inspirational quote based on giving, charity, and similar principles.
