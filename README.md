BERRY - Accelerators with NodeJS and RaspberryPI
===============================================

This package has been made for UCL-CS robots.
This is a small node-js package that once loaded in your robot-raspberry pie, set up a webserver at the address of the machine (e.g. http://128.16.79.12:55555). Once connected to the address:

1. If connected with a **mobile phone** with accelerators enabled, it will start move as you move your phone.
2. If connected with a **computer**, you will have a control panel where you can command your robot or see sensor readers

![Robot](https://raw.github.com/nicolagreco/Node-BERRY-Accelerator/master/machine.gif)


## How to install

Install nodejs on the machine (you can also test it on the simulator - you still need node-js)

    wget http://nodejs.org/dist/v0.8.11/node-v0.8.11.tar.gz
    tar -zxf node-v0.8.11.tar.gz
    cd node-v0.8.11
    ./configure
    make
    sudo make install

You may also want to install `npm`. In case you have problems installing node, run `make test`.

Once installed, set up BERRY's environment:

    npm install .

And now you are ready to execute it:

  node server.js IPADDRESS PORT
  // in case you want to connect locally 127.0.0.1 55443

You can access it through localhost, or from multiple devices through the computer address where hosted.

## Technologies used

- node-js 0.8
- socket-io

## Credits

Nicola Greco - everyone is welcome to join.

