function FollowToggle(el) {
    //will use bind when we invoke FollowToggle (probably) 
    this.userId = el.data("user-id") 
    this.FollowState = el.data("initial-follow-state")
    this.$el = $(el) 
};  

for (let i = 0; i < $('button').length; i++) {
    new FollowToggle($('button')[i])
}
 
const follow = new FollowToggle() 
const unfollow = new FollowToggle() 

module.exports = FollowToggle; 