Feature: When user adds items to his basket he should see the total price of the items on the basket
Scenario: User search for pen and bags for women and adds to his basket 
Given User is on his account
Then User search for pen and adds to his basket
And User search for bags for women and adds to his basket
Then User goes to the basket
And User should be able to see total price of these to items on the basket
