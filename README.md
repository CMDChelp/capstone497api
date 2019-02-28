# capstone497api

1. go to the project directory in terminal/cmd and run `npm install`
2. install mongodb https://www.mongodb.com/download-center/community?jmp=docs
3. run mongodb - in a NEW terminal/cmd window, run `mongod` and leave it open, run your other stuff in a different terminal/cmd
4. back in the project directory, run `node app`
5. When running on Android on a device, you'll need to run these two commands:
  `adb reverse tcp:8080 tcp:8080`
  `adb reverse tcp:8081 tcp:8081`
