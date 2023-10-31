### Intro to testing using Jest and RTL.

The goal of this introduction was to create a button that changes color when you click it.

I wrote tests using RTL and utilised Jest to watch for changes.

### Notes

fireEvent will chain onto click which takes an argument of color button

colorbutton takes our screen object that we got from our testing-library/react dependancy which allows us to use one of our roles - in this case, getByRole

We use can then use name to look for the specific element with the text of 'Change to blue'

In our assertion we then pass expect an argument of colorButton and use the role toHaveStyle which checks to make sure our inline styling has a background color of red
