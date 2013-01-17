BERRY - Accelerators with NodeJS and RaspberryPI
===============================================

This package has been made for UCL-CS robots.
This is a small node-js package that once loaded in your computer, set up a webserver at the address of your machine (e.g. http://yourdeviceIP:55555). Once connected to the address:

1. If connected with a **mobile phone** with accelerators enabled, it will start move as you move your phone.
2. If connected with a computer, you will have a control panel where you can command your robot or see sensor readers

## How to install

You must install nodejs first
Once installed, set up BERRY's environment:

    npm install .

And now you are ready to execute it:

  node server.js ROBOTIP PORT
  // in case you want to connect locally 127.0.0.1 55443

You can access it through localhost, or from multiple devices through the computer address where

## Technologies used

- node-js 0.8
- socket-io

## Credits

Nicola Greco - everyone is welcome to join.

