# S-MART


[SMART](https://smart-aa.herokuapp.com/#/)


MapMyPath is full-stack web application clone of INDIEGOGO, created using Ruby on Rails on the backend with a PostgreSQL database and React.js with a Redux architectural framework on the frontend. Users are able to start funding campaigns or make contributions to campaigns they desire. Users can also receive perks from making contributions to campaisngs.


## Features & Implementation
* Account creation and authentication
* Create Campaigns for fundraising or promote products
* Make contributions to campaigns that you desire
* View campaign show pages
    * Campaign video, Slogan/TagLine, Overview, Story, Perks for contributors
    * Has options to make desire contribution amounts or contributions for perks
* Create campaign in one go
    * No empty campaign were created in the backend. Instead, all campaign information is kept within the parent state and will be updated by passing "handling functions" to the child component.

---
```javascript
handleClick(target) {
  window.scrollTo(0,0);
  return () => {
    this.setState({ component: target });
  };
}

handleChange(input){
    return (e) => {
      window.scrollTo(0,0);
      this.setState({ [input]: e.target.value });
    };
}

handleRewards(reward){
    const rewardList = this.state.rewards_attributes;
    rewardList.push(reward);
    this.setState({ rewards_attributes: rewardList });
}
```
---
Each child component render will not effect the parent state.

![Perk](app/assets/images/pro/perk.png)

Unfortunately, a campaign can have multiple perks which I need to store them as an array of objects. Doing do, my parent component will be the array and child component will keep track of the state of a new perk. Perk object will be store into the parent array when click "Add Perk" and the state is reset.

---
```javascript
constructor(props) {
  super(props);

  this.state = {
    title: '',
    description: '',
    price: '',
    item: ''
  };

  this.handlePerk = this.handlePerk.bind(this);
}

update(input) {
  return e => this.setState({[input]: e.target.value});
}

handlePerk() {
  const reward = this.state;
  this.props.handleRewards(reward);

  this.setState({
    title: '',
    description: '',
    price: '',
    item: ''
  });
}
```
---
### Friending

![Contributions](app/assets/images/pro/contributions.png)

Users have the abilities to make desired contributions toward a campaign or contribute to campaign for perks they like

---
```ruby
// user.rb ----
has_many :contributions,
  class_name: :Contribution,
  primary_key: :id,
  foreign_key: :user_id

has_many :rewards,
  through: :contributions,
  source: :reward

// contribution.rb ----
belongs_to :contributor,
  class_name: :User,
  primary_key: :id,
  foreign_key: :user_id
```

---


## Future Directions for the Project

Continue on User Profile and include options for edit campaign and allow user to claim perks that does not require shipping. Such as coupon vouchers, Digital Keys, etc.

#### Commenting on the campaign show page

Allow user to post question on the campaign show page where campaign creator can post responses to questions or common Q/A.
