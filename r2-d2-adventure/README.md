## R2-D2 Exercise

The year is 1977, Star Wars: A New Hope has just been released.  The true hero of the film, R2-D2 has acquired Death Star plans and needs to deliver them to Obi Wan Kenobi on the surface of Tatooine to help ensure victory for the rebellion.  The problem is that upon landing R2-D2 has lost all autonomy and needs your to help guide him safely to Obi Wan Kenobi through manual commands.

## Description
- The application is a simulation of R2-D2 landing on Tatooine, the goal is to deliver the plans to Obi Wan at his location by entering manual commands
- The planet is conveniently a 100x100 grid
- R2-D2 is free to roam around the surface of the Tatooine, but must be prevented from falling off the edge because it is apparently a flat planet
- Any movement that would result in R2-D2 falling must be prevented, however further valid movement commands must still be allowed
- On R2-D2 successfully reaching Obi Wan Kenobi we should celebrate our success and exit the application

## Requirements

#### Acceptable Commands

- **LAND**
    - randomly place R2-D2 on the planet
    - randomly place Obi Wan Kenobi on the planet
    - report the location of both R2-D2 and Obi Wan as a grid coordinate and facing direction
	- The origin (0,0) can be considered to be the SOUTH WEST most corner. 	- If R2-D2 has already landed ignore this command

- **MOVE (x)** will move R2-D2 (x) units forward in the direction it is currently facing
- **LEFT and RIGHT** will rotate R2-D2 90 degrees in the specified direction without changing the position of the robot
- **REPORT** report the location of both R2-D2 and Obi Wan as a grid coordinate and facing direction

#### Constraints

- R2-D2 must not fall off the table during movement. This also includes the initial placement of the toy robot.
- Any move that would cause the robot to fall must be ignored

#### Example Input and Output
```
> LAND
R2-D2 is at 0,0 facing North
Obi Wan Kenobi is at 12,13

> MOVE 2

> REPORT
R2-D2 is at 0,2 facing North
Obi Wan Kenobi is at 12,13

> MOVE 11

> RIGHT

> REPORT
R2-D2 is at 0,13 facing East
Obi Wan Kenobi is at 12,13

> MOVE 12
Congratulations, you've saved the Rebellion!
exit(0)
```

## Submission Instructions
- Clone this repository and commit your changes locally (or to a separate remote repository)
- Use any packages or libraries which help you to complete these tasks
- When you are finished, please send us a link to the completed repository or a zip of the contents if you prefer
- Describe any challenges that made the task more difficult

![R2-D2](https://c1.staticflickr.com/1/629/21546484114_2f734ebb5e_b.jpg)
