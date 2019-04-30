# TEST Network-Backend

* Backend on Node.js + MongoDB + Express.js

## Setup:

- git clone https://github.com/pavel-malashko/Network-Backend.git

- cd in terminal or command line

- npm install

- npm run build-start

- npm start (after build project)



# Technical task

A technical task from "Labinvent" JSC.

## Requirements: 


### Description

When user opens `index.html` he should see a network settings page. Fields contains last saved data. 
Data must be persist in local storage or node.js server(advanced option).

![network settings page by default](network_settings.png)

All form fields are for the text input. The **"Wireless Network Name"** field is an exception. It should be a drop-down menu.

Fields marked with an asterisk should be mandatory if they were activated by user.

Radio-buttons in state **"Obtain an IP address automatically"** and **"Obtain DNS server address automatically"** makes fields groups 
unavailable and turns off their validation.

Checkbox **"Enable wifi"** does fields wifi settings available in the `true` state .

Checkbox **"Enable Wireless Security"** makes **"Security Key"** field available in the `true` state.

Field **"Wireless Network Name"** lists all available access points.
All points should be sorted by *__strength__*. Access points with *__favorite__* flag = `true`, should be shown on the top of the list.
Pressing **"&#x21bb;"** button sends new request to refresh access points list.

![network settings page by default](network_settings_wifi_enabled.png)

When **"Save"** button pressed the configuration should be validated and saved in local storage or node.js server(advanced option).


### Stack

**You should use:**
* angular(preferred) or react for client
* browser local storage

**Advanced options:**
* node.js for server
* any SQL server or mongodb to keep saved configurations

**Please provide project build and run instructions in the README file**
