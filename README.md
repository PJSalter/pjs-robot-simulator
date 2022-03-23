# 🧩 pjs-robot-simulator 🧩

### Take home challenge tasked by dataCamp 

# Coding Test - Simulate a robot

Write a program that simulates the movements of a robot. The robot can have three possible movements:

    turn right
    turn left
    advance

#### The robot is placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of `{x,y}` coordinates,
e.g., `{3,8}`, with coordinates increasing to the north and east.

#### Creating a Class `Robot` that contains a method `execute` which given a number of instructions will calculate the robot's new position, and the the direction in which it is pointing.

## Example

The letter-string "RAALAL" means:

    Turn right
    Advance twice
    Turn left
    Advance once
    Turn left yet again

Say a robot starts at `{7, 3}` facing north. Running this stream of instructions should leave it at `{9, 4}` facing west.

## Inputs and Outputs

The argument of the `execute` is `string` in the format `X Y BEARING COMMANDS`. The method should return a one-liner `string` in the format `X Y BEARING`. In the example above, the `execute` argument would be `7 3 NORTH RAALAL`, and the method should return `9 4 WEST`.

## Tests

### Javascript
Tests are using Jest. To run them, use the following command:

```js
npx jest robot-simulator.spec.js

```


## Screenshots of tests passed ✨

<img width="284" alt="Screenshot 2022-03-23 at 20 59 33" src="https://user-images.githubusercontent.com/45575016/159794861-ad3ef6a3-7754-4b70-9088-2e660419dc0f.png">



