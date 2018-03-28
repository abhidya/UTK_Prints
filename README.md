# UTK_Prints
# Inspiration
    myprint.utk.edu is UTK's website that allows you to print too many of the printers on campus through a web interface. However choosing which printer to print to has a flaw, you have to know what the printers name is. Often I find myself running late to class with a lab report that needs to be printed out, but I don't have the time to run 20 minutes too and from the library.  My web project solves that problem. 
# What it does
    My website I built solves the problem of knowing where printers are and what they are named. The website centers a google map on the users' location and loads custom markers on where every live printer is allowing the user to find the closest printer. Clicking on the icon renders more information about the printers name, make and model. It also shows information about if the printer can print color or black and white. 
# How I built it
 Using JavaScript to parse a JSON file of the printer data, I used googles API to drop custom icons on a map that has been customized to UTK. I was able to grab a list of live and current printers on myprint from https://myprint.utk.edu/PharosAPI/devices?. With HTML and CSS that data is then displayed on the google map.
# Challenges I ran into
 I went into this project with no understanding and experience with JavaScript and a basic understanding of HTML and CSS. I was able to use Google's documentation on Google Maps API to put together a script that centers on the user and loads custom markers with a drop animation on the location of the printers.
# Accomplishments that I'm proud of
Error checking and debugging my JavaScript was Frustrating to no end. With no help and just google I was able to get a working demo live.
# What I learned
I learned a lot about JavaScript and web hosting through this project.

# What's next for UTK Prints
The rules do not allow projects to rely on UTK resources, so I have made the printer list into a localized file. In the future, however, i would like to make it so that UtkPrints would pull the list of devices from UTK so that users would have access to the most updated and current list of printers. 
# Built With
html5, javascript, css, requests

# Try it out

https://abhidya.github.io/UTK_Prints/
